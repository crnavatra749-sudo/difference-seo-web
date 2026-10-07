# Difference / BrandistiQ

Astro + Netlify website for difference-usluge.com.hr.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Netlify uses `npm run build` and publishes `dist/`. Pushes to the connected GitHub repository trigger automatic deployments.

## Content

- `src/content/usluge/` — service pages
- `src/content/projekti/` — project pages
- `src/content/vodic/` — Digitalni vodič articles

Add a new Markdown/MDX content entry and the corresponding dynamic route will be generated automatically.
