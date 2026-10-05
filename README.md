# Well-Life Advisors — Design Options

Bloom app (`@bloomneo/bloom` basicapp: React + UIKit frontend, Express + AppKit backend) with 10 landing-page designs for Well-Life Advisors. Buttons at the top switch designs; Laptop / Mobile toggles the preview size.

## Run

```
npm install
npm run dev      # web http://localhost:5173 + API http://localhost:3000
```

## Build and serve

```
npm run build    # frontend -> dist/, API -> dist/api/
npm start        # Express serves the site and /health on $PORT
```

## Deploying on bloomneo

- `.env.example` is the environment contract — list every variable the app reads.
- The release smoke-tests `/health` and starts the app with `npm start`.
- No database, auth or API calls are used by this site.

## Structure
- `src/web/features/main/pages/index.tsx` — home route (`/`)
- `src/web/features/main/components/DesignSwitcher.jsx` — design switcher + mobile preview
- `src/web/features/main/designs/D01…D10*.jsx` — the 10 designs
- `src/web/features/main/designs/WLFooter.jsx` — shared footer + disclosures (designs 2–10)
- `src/web/features/main/assets/` — logo and Lamond Moore headshot (imported, so Vite bundles them)
- `src/web/styles/` — `index.css` (Tailwind without preflight, see the note in the file) and `designs.css`
- `src/api/` — Express server; features are auto-discovered from `src/api/features/`

Stock photos load from Unsplash; replace with the client's own photos before launch.
