// Re-captures the five project screenshots from the live sites at 1440×900
// with device pixel ratio 2 (2880×1800), using a throwaway headless Chrome
// profile driven over the DevTools protocol. No dependencies beyond Node 22+.
//
//   npm run screenshots                       # all five
//   npm run screenshots -- mmac-home vetiq-overview   # just some
//
// Writes, for each name:
//   docs/screenshots/<name>.png     full-quality source (not in the build)
//   src/assets/media/<name>.webp    what the site shows (WebP, quality 85)
//
// Set CHROME_PATH if Chrome isn't in its usual place.
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const pngDir = join(root, 'docs', 'screenshots')
const webpDir = join(root, 'src', 'assets', 'media')
const PORT = 9333
const NAMES = [
  'mmac-home',
  'vetiq-overview',
  'taskflow-board',
  'vetboard-question',
  'vetboard-answer',
]

const chromePath =
  process.env.CHROME_PATH ||
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].find((path) => existsSync(path))
if (!chromePath) throw new Error('Chrome not found. Set CHROME_PATH.')

const requested = process.argv.slice(2)
const unknown = requested.filter((name) => !NAMES.includes(name))
if (unknown.length) throw new Error(`Unknown screenshot(s): ${unknown.join(', ')}`)
const want = (name) => requested.length === 0 || requested.includes(name)

mkdirSync(pngDir, { recursive: true })
const profile = mkdtempSync(join(tmpdir(), 'portfolio-capture-'))
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const chrome = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--hide-scrollbars',
  '--window-size=1440,900',
  'about:blank',
])

async function devtools(path, method = 'GET') {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      return await (await fetch(`http://127.0.0.1:${PORT}${path}`, { method })).json()
    } catch {
      await sleep(200)
    }
  }
  throw new Error('Chrome did not start')
}

// A minimal DevTools protocol client for one tab.
async function openPage() {
  const target = await devtools('/json/new?about:blank', 'PUT')
  const ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve) => ws.addEventListener('open', resolve, { once: true }))
  let nextId = 0
  const pending = new Map()
  const listeners = []
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) reject(new Error(message.error.message))
      else resolve(message.result)
    } else if (message.method) {
      listeners.forEach((listener) => listener(message))
    }
  })
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++nextId
      pending.set(id, { resolve, reject })
      ws.send(JSON.stringify({ id, method, params }))
    })
  return { send, on: (listener) => listeners.push(listener), close: () => ws.close() }
}

async function evaluate(page, body) {
  const result = await page.send('Runtime.evaluate', {
    expression: `(async () => { ${body} })()`,
    awaitPromise: true,
    returnByValue: true,
  })
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || 'Page script failed')
  }
  return result.result.value
}

async function navigate(page, url) {
  const loaded = new Promise((resolve) =>
    page.on((message) => message.method === 'Page.loadEventFired' && resolve()),
  )
  await page.send('Page.navigate', { url })
  await loaded
  await evaluate(page, 'await document.fonts.ready')
  await sleep(2500) // let entrance animations and images settle
}

async function capture(page, name) {
  const png = await page.send('Page.captureScreenshot', { format: 'png' })
  writeFileSync(join(pngDir, `${name}.png`), Buffer.from(png.data, 'base64'))
  const webp = await page.send('Page.captureScreenshot', { format: 'webp', quality: 85 })
  writeFileSync(join(webpDir, `${name}.webp`), Buffer.from(webp.data, 'base64'))
  console.log(`saved ${name} (.png and .webp)`)
}

const page = await openPage()
try {
  await page.send('Page.enable')
  await page.send('Runtime.enable')
  await page.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  })

  if (want('mmac-home')) {
    await navigate(page, 'https://mmac-hub.vercel.app/')
    await capture(page, 'mmac-home')
  }

  if (want('vetiq-overview')) {
    await navigate(page, 'https://vet-iq-analytics.vercel.app/')
    await capture(page, 'vetiq-overview')
  }

  if (want('taskflow-board')) {
    await navigate(page, 'https://taskflow-kanban-woad.vercel.app/')
    await capture(page, 'taskflow-board')
  }

  if (want('vetboard-question') || want('vetboard-answer')) {
    // The case-study captions describe one real question (AAHA, postoperative
    // anesthetic deaths). VetBoard serves sessions at random, so let the real
    // session load and move that question, fetched from VetBoard's own API,
    // to the front.
    const bank = await (
      await fetch('https://vetboard.vercel.app/api/practice/questions?domain=anesthesia')
    ).json()
    const question = (bank.questions || bank).find((item) => item.id === 'aaha-anesthesia-008')
    if (!question) throw new Error('VetBoard question aaha-anesthesia-008 not found')

    await page.send('Fetch.enable', {
      patterns: [{ urlPattern: '*/api/practice/session*', requestStage: 'Response' }],
    })
    page.on(async (message) => {
      if (message.method !== 'Fetch.requestPaused') return
      const { requestId } = message.params
      const { body, base64Encoded } = await page.send('Fetch.getResponseBody', { requestId })
      const session = JSON.parse(base64Encoded ? Buffer.from(body, 'base64').toString() : body)
      const others = session.questions.filter((item) => item.id !== question.id)
      session.questions = [question, ...others].slice(0, session.questions.length)
      await page.send('Fetch.fulfillRequest', {
        requestId,
        responseCode: 200,
        responseHeaders: [{ name: 'Content-Type', value: 'application/json' }],
        body: Buffer.from(JSON.stringify(session)).toString('base64'),
      })
    })

    await navigate(page, 'https://vetboard.vercel.app/')
    await evaluate(
      page,
      `[...document.querySelectorAll('button')]
         .find((button) => button.innerText.trim() === 'Start 5-Question Session').click();
       await new Promise((resolve) => setTimeout(resolve, 2000));
       window.scrollTo(0, 0);`,
    )
    if (want('vetboard-question')) await capture(page, 'vetboard-question')

    const feedback = await evaluate(
      page,
      `[...document.querySelectorAll('button[type=button]')]
         .find((button) => button.innerText.trim() === 'Within the first 3 hours after anesthesia').click();
       await new Promise((resolve) => setTimeout(resolve, 2500));
       const heading = [...document.querySelectorAll('h2, h3')]
         .find((el) => el.innerText.trim() === 'VTNE Practice Session');
       window.scrollTo(0, heading.getBoundingClientRect().top + scrollY - 32);
       await new Promise((resolve) => setTimeout(resolve, 500));
       return document.body.innerText.includes('Correct!');`,
    )
    if (!feedback) throw new Error('VetBoard did not mark the answer correct')
    if (want('vetboard-answer')) await capture(page, 'vetboard-answer')
  }
} finally {
  page.close()
  chrome.kill()
  await sleep(500)
  rmSync(profile, { recursive: true, force: true, maxRetries: 3 })
}

console.log('Done. If the image sizes changed, update src/content/screenshots.js.')
