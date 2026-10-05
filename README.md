# Well-Life Advisors — Design Options

React (Vite) site with 10 landing-page designs for Well-Life Advisors. Buttons at the top switch designs; Laptop / Mobile toggles the preview size.

## Run

```
npm install
npm run dev      # http://localhost:5173
```

## Build for hosting

```
npm run build    # outputs dist/ — upload to Netlify, Vercel, GitHub Pages, etc.
```

## Structure
- `src/App.jsx` — design switcher + mobile preview
- `src/designs/D01…D10*.jsx` — the 10 designs
- `src/designs/WLFooter.jsx` — shared footer + disclosures (designs 2–10)
- `src/assets/` — logo and Lamond Moore headshot (imported, so Vite bundles them)

Stock photos load from Unsplash; replace with the client's own photos before launch.
