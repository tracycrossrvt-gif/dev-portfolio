# Tracy Cross · Product Manager

Personal portfolio site for Tracy Cross. It has a homepage (track record, selected work, approach, background, contact), two project summaries (VetBoard and VetIQ Analytics), and a case study (MMAC Hub).

## Stack

- React 19 and React Router 7
- Vite 8 for the dev server and build
- Oxlint for linting
- Plain CSS with design tokens as custom properties (`src/index.css`); no CSS framework and no animation library
- Deployed on Vercel; `vercel.json` sends every route to `index.html` so client-side routes load directly

## Running it

Needs Node 22 or later.

```bash
npm install
```

```bash
npm run dev
```

Starts the dev server at http://localhost:5173.

```bash
npm run build
```

Builds the site into `dist/`. Preview the build with `npm run preview`.

```bash
npm run lint
```

## Re-capturing the project screenshots

The project screenshots come from the live sites. To refresh them, run:

```bash
npm run screenshots
```

It opens the live sites in a headless Chrome at 1440×900 with device pixel ratio 2, saves the full-quality PNGs to `docs/screenshots/` (kept out of the build), and writes the WebP versions the site shows to `src/assets/media/`. Pass names to re-shoot only some: `npm run screenshots -- mmac-home vetiq-overview`. It needs Chrome; set `CHROME_PATH` if Chrome isn't in its usual place. If an image's size changes, update `src/content/screenshots.js`.

## Folder layout

```
src/
  main.jsx, App.jsx        entry point and routes
  index.css                design tokens, base styles, motion
  App.css                  layout and component styles
  components/layout/       SiteShell: nav pill, skip link, footer
  components/pages/        HomePage, ProjectSummaryPage (VetBoard, VetIQ, MMAC), MmacCaseStudyPage
  content/                 all page copy and data; edit copy here, not in components
  hooks/                   usePrefersReducedMotion, useReveal (section reveals)
  assets/media/            images and videos the site uses
public/
  diagrams/                full-size MMAC diagram PNGs (opened from "View full size")
  favicon-32.png, apple-touch-icon.png
scripts/
  capture-screenshots.mjs  `npm run screenshots`
docs/
  REDESIGN.md              the redesign brief, decisions and resolved questions
  redesign/                approved design reference pages and their placeholder screenshots
  screenshots/             full-quality PNG captures behind the site's WebP screenshots
```

`src/assets/media/mothman-logo-main.png` is the full-size logo. The nav mark and favicons are small copies of it; the logo itself is not in the build.
