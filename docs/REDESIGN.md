# Portfolio redesign: build brief

This brief moves the approved Claude Design canvas into this repo (Vite + React 19 + React Router 7). Work through the phases in order, one phase per session. Finish a phase and check its "Done when" list, then stop for Tracy to review before starting the next one.

## Ground rules

- **The reference files are the source of truth.** `docs/redesign/reference/` holds the four approved pages (`Main.html`, `VetBoard.html`, `VetIQ.html`, `MMAC.html`). Copy text **verbatim** from them. Do not rewrite, shorten or "improve" copy. Match their spacing, sizes and colors. They are design-canvas files: ignore `<x-dc>`, `<helmet>`, `{{accent}}` (= the accent token) and the `data-dc-script` block, and read the markup and inline styles.
- **Do not invent anything.** No new claims, metrics, testimonials or features. If something seems missing, add it to "Open questions" at the bottom of this file and keep going.
- **Keep it explainable.** Plain React components and CSS. **No new runtime dependencies** without asking Tracy first. Motion uses CSS plus one small `IntersectionObserver` hook, not GSAP or Lenis.
- **Keep content in `src/content/`.** Pages render from data files the way they do now, so copy edits never mean touching components.
- Work on a branch named `redesign`. Never push to `main`. Open a PR at the end for Tracy to merge.

## Positioning (do not drift from this)

Tracy is presented as an **established product manager** with 15+ years in veterinary hospital leadership, most recently in **corporate hospital operations**, who also builds. She is not presented as a career changer or a junior developer. Never use the phrase "veterinary operations" on its own.

## Design tokens

Put these in `src/index.css` as CSS custom properties, and use only these values.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0C0F` | page background |
| `--surface-1` … `--surface-4` | `#15171C`, `#17191F`, `#191B22`, `#1B1D24` | cards; the four stacked project cards step lighter in this order |
| `--line` | `rgba(242,242,239,0.12)` | borders, dividers |
| `--line-soft` | `rgba(242,242,239,0.2)` | tag pill borders |
| `--line-strong` | `rgba(242,242,239,0.3)` | outline buttons |
| `--text` | `#F2F2EF` | headings, primary text |
| `--text-2` | `#C9CCD2` | body copy |
| `--muted` | `#9DA1A9` | labels, captions, secondary |
| `--ticker` | `#6E737C` | skills ticker text (decorative only) |
| `--accent` | `#E8B949` | gold: labels, numbers, primary buttons, links on hover |
| `--on-accent` | `#0B0C0F` | text on gold buttons |

**Fonts** (Google Fonts, one `<link>` in `index.html`):
- Display: **Bricolage Grotesque** 500/700/800 for headings, numbers and the logo mark
- Body: **Inter** 400/500/600
- Labels: **JetBrains Mono** 400/500 for section labels, tags and numbering

**Type scale**
- H1: `clamp(3rem, 8vw, 7.25rem)`, weight 800, line-height 0.95, letter-spacing -0.035em
- H2: `clamp(2.5rem, 5.5vw, 5rem)`, weight 700, line-height 1, letter-spacing -0.03em
- Project card title 48px/700; numbered row title 32px/700 (28px on summary pages)
- Lead 20px; body 17px, line-height 1.6
- Section label: mono 13px, uppercase, letter-spacing 0.12em, gold. Format: `02 · Selected work`

**Shape and layout**
- Container: 1280px of content plus 40px padding on each side (20px under 640px). The canvas files use content-box sizing, so their `max-width: 1280px` excludes the padding; `.container` reproduces that.
- Radii: project cards 28px, small cards 20px, images 16px, buttons and tags 999px (pills)
- Section vertical padding: about 128–144px on desktop, roughly half on phones

## Phases

### Phase 1: Foundation
- Create branch `redesign`.
- Replace the old theme in `src/index.css` and `src/App.css` with the tokens, fonts and base styles above. Delete unused old styles; don't leave them commented out.
- Rebuild `SiteShell.jsx`:
  - **Nav:** a frosted-glass pill centered at the top and sticky 16px from the top. It has a `TC.` mark (gold dot), links to Work (`/#work`), Approach (`/#approach`), Background (`/#background`) and Contact (`/#contact`), plus a white **Resume** pill button. The background is `rgba(21,23,28,0.72)` with `backdrop-filter: blur(16px)` and a `--line` border.
  - **Footer:** as in `Main.html`.
- Update `src/content/site.js`:
  - Title: `Product Manager`
  - Resume URL: `https://claude.ai/artifact/RDJ4yzZvoZmGwj6vNn9XU8` (Tracy's shared PM master resume). Remove the old PDF link everywhere.

**Done when:** the site runs, the old pages render on the dark theme with the new nav and footer, lint and build pass.

### Phase 2: Content model
- Rewrite `src/content/projects.js` with four projects, in this order: **MMAC Hub, VetBoard, VetIQ Analytics, TaskFlow.** Remove Nocturne.
- Each project has these fields:
  - `slug`, `title`
  - `status`: the gold text after `0X / 04 ·`
  - `oneLiner`, `bullets[]`, `tags[]`
  - `liveUrl`, `repoUrl`
  - `detailPath`: `/case-studies/mmac-hub`, `/work/vetboard`, `/work/vetiq-analytics`, or `null` for TaskFlow
  - `screenshot`, `screenshotAlt`
- Take all values verbatim from the four cards in `Main.html`.
- Add a content file for each summary page (`vetboard.js`, `vetiq.js`) and for the MMAC case study, holding that page's sections as data.

**Done when:** content files match the reference copy exactly, and nothing renders differently yet.

### Phase 3: Homepage
Build `HomePage.jsx` from `Main.html`, section by section:
1. **Hero.** Mono label, H1 with a gold period, lead paragraph, two buttons (gold "See the work" and an outline "Get in touch").
   - Background: `src/assets/media/winter-fog.mp4` as a full-bleed background video (`autoplay`, `muted`, `loop`, `playsInline`, `poster` = `winter-fog-poster.jpg`), `aria-hidden="true"`.
   - A dark overlay over the video, `rgba(11,12,15,0.55)` fading to `rgba(11,12,15,0.9)` at the bottom, so text keeps 4.5:1 contrast.
2. **Track record strip.** Four columns divided by `--line`: 15+, 2→12, 200+, 4. On phones it becomes 2×2.
3. **Skills ticker.** A full-bleed band with a gold ✦ between items. Mark it `aria-hidden="true"`, since it's decorative.
4. **Selected work.** Label, H2, then the four project cards.
   - Each card is `position: sticky`, with `top` going 104, 120, 136, 152px, so the cards stack over each other as you scroll.
   - Text is on the left and the screenshot on the right; on phones the screenshot stacks below the text.
   - Buttons: a gold "Read case study" or "Read summary" (only when `detailPath` exists), then "Live site ↗" and "Repo ↗" as text links.
5. **What I do.** Six numbered rows (`01`–`06`) in a 3-column grid (number, title, description plus mono tags). On phones it becomes one column.
6. **Background.** Intro on the left, a dated timeline `<ol>` on the right: 2010–2016, 2018–present, 2025, BBA · MBA, 2026, Jan 2027 →.
7. **Contact.** A big H2, a gold email button that shows `tracycrossrvt@gmail.com` and links to `mailto:`, and outline LinkedIn, GitHub and Resume buttons.
   - Background: `src/assets/media/about-western-nc-storm.mp4` with the same overlay as the hero, `aria-hidden="true"`.
   - The file is 6 MB, so use `preload="none"` and only load and play it when the section scrolls into view.
   - Poster: `about-western-nc-storm-poster.jpg`, the video's first frame (1280×720, 37 KB).
8. **Reduced motion.** Under `prefers-reduced-motion: reduce`, neither video plays. Show the poster or a still frame instead.

**Done when:** the page matches `Main.html` at 1440px, works at 375px and 768px, and every anchor link in the nav scrolls to its section.

### Phase 4: Project summary pages
- Build **one** reusable `ProjectSummaryPage.jsx` and drive both pages from content:
  - `/work/vetboard` from `VetBoard.html`
  - `/work/vetiq-analytics` from `VetIQ.html`
- Sections, in order:
  - The site's pill nav, as on every page, with a small "← All work" text link just below it. The page's top padding clears the floating nav.
  - Hero: label, H1, lead, buttons
  - 4-column facts strip (Role, Users, Adoption, Stack), which wraps on phones
  - Problem: a two-column heading and body
  - Numbered decisions rows
  - A closing list section
- Screenshot(s) with captions follow each reference page's own order, which the content file's ordered `sections` array already records: `VetIQ.html` shows its screenshot right after the facts strip, and `VetBoard.html` shows its screenshots after the decisions rows.
  - A "← Back to all work" / "Next: …" footer, above the site footer
- The facts strip is the divided four-column version (2×2 on phones), and the lead is 62ch wide, on both pages.
- Next-link order: VetBoard → VetIQ → MMAC → VetBoard.

**Done when:** both pages match their references and use the same component.

### Phase 5: MMAC case study
- Rebuild `MmacCaseStudyPage.jsx` at the **same URL** (`/case-studies/mmac-hub`) from `MMAC.html`.
- Follow the Phase 4 page pattern: the site's pill nav and footer stay, a small "← All work" link sits just below the nav, the divided four-column facts strip, and the "← Back to all work" / "Next: VetBoard →" footer above the site footer. Ignore the canvas's own "TC. / ← All work" header.
- **Keep the two existing diagrams.** Show `mmac-assistance-intake-schema.png` in section 04 (The foundation), below the table-name tags, and `mmac-core-workflows-mvp.png` in section 06 (What's next), above the Now / Next / Then timeline. Keep its "Planned workflows, not shipped interfaces." caption. Each gets a `<figure>` with a short caption saying what the diagram shows. Keep their existing alt text.
- The four user cards use `repeat(auto-fit, minmax(240px, 1fr))` so long titles never overflow. This was a bug on the canvas; don't bring it back.
- The "What's next" timeline (Now / Next / Then) stacks on phones.

**Done when:** the page matches `MMAC.html`, the diagrams appear where described, and nothing overflows at 375px.

### Phase 6: About page
- The current `/about` copy says "veterinary operations" and frames Tracy as someone who "started learning software," which conflicts with the positioning above.
- **Do not rewrite it.** Redirect `/about` to `/#background` and remove About from the nav.
- Leave `AboutPage.jsx` and `about.js` in the repo for now, and add a line under Open questions asking Tracy whether to delete them or rewrite them.

### Phase 7: Motion
Use one easing everywhere, `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Hero:** the label, H1 and lead rise in on load (translateY 40px → 0 with opacity, 900ms, staggered 0 / 120 / 240ms).
- **Section reveals:** a small `useReveal()` hook with `IntersectionObserver` adds a class when a section label enters the viewport. The label slides up first, and the heading follows 120ms later. Each element animates once.
- **Ticker:** a CSS keyframe translateX loop, about 40s, with the content duplicated so it loops seamlessly.
- **Project cards:** the sticky stacking from Phase 3 already gives the stacking feel, so add no JS.
- **Reduced motion:** under `@media (prefers-reduced-motion: reduce)`, all of the above is off and the content simply shows.

**Done when:** motion feels smooth, nothing jumps or reflows, and turning on reduced motion in the OS stops everything.

### Phase 8: Screenshots and assets
- `docs/redesign/screenshots/` holds reference screenshots taken during design. They're **low-resolution (800px)**, so use them only as placeholders.
- Replace them with fresh 1440×900 captures (2x if possible) of:
  - MMAC Hub home
  - VetBoard: a question, plus an answered question with its source
  - VetIQ Overview
  - TaskFlow board
- Save them in `src/assets/media/` with these names: `mmac-home.png`, `vetboard-question.png`, `vetboard-answer.png`, `vetiq-overview.png`, `taskflow-board.png`.
- If you can't capture screenshots yourself, ask Tracy to take them.
- Point `src/content/screenshots.js` at the new files and update each width/height there, so the browser keeps reserving the right space.
- Delete media that's no longer used: the Nocturne images, `hero.png`, `react.svg`, `vite.svg`, and the duplicate `winter-fog-poster-final.jpg`. Keep `mothman-logo-main.png` (the favicon) and `winter-fog.mp4`, `winter-fog-poster.jpg`, `about-western-nc-storm.mp4` and `about-western-nc-storm-poster.jpg` (the homepage background videos and their posters). **List the files and confirm with Tracy before deleting anything.**

### Phase 9: QA and handoff
- Check every page at 375, 768 and 1440px. Nothing should overflow horizontally.
- **Accessibility:**
  - Text contrast is at least 4.5:1 (gold on near-black passes, but don't put gold text on light backgrounds).
  - Everything works with Tab, and focus rings are visible (2px gold outline, 3px offset).
  - Images have alt text, and decorative elements are `aria-hidden`.
- Every external link opens correctly: live sites, repos, LinkedIn, GitHub, the resume.
- `npm run lint` and `npm run build` pass.
- Update `<title>` and the meta description: "Tracy Cross · Product Manager".
- Open a PR from `redesign` to `main` with a short summary per phase and before/after notes. Tracy reviews the Vercel preview link before merging.

## Open questions

(Add anything you're unsure about here instead of guessing.)

- ~~Should `AboutPage.jsx` and `about.js` be deleted, or rewritten to fit the new positioning? (Phase 6)~~ **Resolved:** deleted (git history keeps them). `/about` redirects to `/#background`, and the About-only CSS is gone too.
- ~~`public/Tracy_Cross_Resume.pdf` is no longer linked anywhere. Delete the file, or keep it? (Phase 1)~~ **Resolved:** deleted.
- ~~`Main.html` links LinkedIn as `https://www.linkedin.com/in/tracy-cross-02b827370`, but `site.js` still has the URL with `utm_*` tracking parameters. Switch to the clean URL? (Phase 1)~~ **Resolved:** `site.js` now uses the clean URL.
- ~~The favicon in `index.html` is still `mothman-logo-main.png`, which Phase 8 deletes. What should replace it? (Phase 1)~~ **Resolved:** keep the mothman image as the favicon; it's removed from the Phase 8 deletion list.
- ~~Phase 5 puts `mmac-core-workflows-mvp.png` in section 05 "What shipped", but the current page says that diagram shows planned workflows. Should the diagram move? (Phase 2)~~ **Resolved:** moved to section 06 "What's next", above the timeline, keeping the "Planned workflows, not shipped interfaces." caption.
- ~~The two diagram captions in `mmac.js` reuse sentences from the current MMAC page's captions. OK as is? (Phase 2)~~ **Resolved:** reused captions are fine.
- ~~Phase 4 lists screenshots after the decisions rows, but the references place them differently. Keep each reference's order? (Phase 2)~~ **Resolved:** follow each reference page's order; Phase 4 updated.
- ~~I added a `detailLabel` field to `projects.js` ("Read case study" / "Read summary"). (Phase 2)~~ **Resolved:** keep it.
- ~~Over the videos, two small labels fail 4.5:1 with the specified overlay (hero label about 2.1:1, gold contact label about 3.1:1). Keep them in `--text`? (Phase 3)~~ **Resolved:** keep both labels in `--text` over the videos.
- ~~Project cards only stack (sticky) at 1120×760 and up, since a taller stacked card would be half covered on phones. OK? (Phase 3)~~ **Resolved:** agreed.
- ~~`about-western-nc-storm.mp4` has no poster image. Export one? (Phase 3)~~ **Resolved:** exported the first frame as `about-western-nc-storm-poster.jpg` (37 KB) and used it as the contact poster. Under reduced motion the video never loads.
- ~~Tag pills in `Main.html` use a `rgba(242,242,239,0.2)` border, which isn't a token. (Phase 3)~~ **Resolved:** added `--line-soft` for tag borders.
- ~~The summary pages hid the site's pill nav and footer in favor of their own header and footer. OK? (Phase 4)~~ **Resolved:** show the pill nav and site footer on every page. Keep "← All work" as a small link below the nav, and the back/next footer above the site footer. Phase 5 follows the same pattern.
- ~~The references differ on the facts strip (dividers or not) and lead width (60ch or 62ch). (Phase 4)~~ **Resolved:** the divided four-column strip and 62ch on both pages.
- ~~The two MMAC diagrams are about 1.6 MB each as PNGs. Compress them or convert to WebP? (Phase 5)~~ **Resolved:** the page now shows WebP versions: 1536×1024 like the originals, quality 0.85, about 166 KB and 176 KB. At 1:1 they're indistinguishable from the PNGs. The original PNGs moved to `public/diagrams/`, and a "View full size" link under each figure opens them in a new tab.
