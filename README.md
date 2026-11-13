# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Re-capturing the project screenshots

The project screenshots come from the live sites. To refresh them, run:

```bash
npm run screenshots
```

It opens the live sites in a headless Chrome at 1440×900 with device pixel ratio 2, saves the full-quality PNGs to `docs/screenshots/` (kept out of the build), and writes the WebP versions the site shows to `src/assets/media/`. Pass names to re-shoot only some: `npm run screenshots -- mmac-home vetiq-overview`. It needs Node 22+ and Chrome; set `CHROME_PATH` if Chrome isn't in its usual place. If an image's size changes, update `src/content/screenshots.js`.
