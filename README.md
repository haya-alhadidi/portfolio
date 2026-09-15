# Haya Alhadidi — AI Portfolio

A clean, static React portfolio for AI models, n8n automation, and machine learning. It is built with Vite and exports production files to `dist/` for any static server.

## Run locally

```bash
npm install
npm run dev
```

## Create production files

```bash
npm run build
```

Upload the contents of `dist/` to Nginx, Coolify static hosting, Netlify, Vercel, or any standard web server.

## Edit content

All personal text, focus areas, services, process steps, tools, email, and availability are centralized in `src/content.js`.

Replace the placeholder `hello@yourdomain.com` in that file before publishing.

## Notes

- Static frontend only; no backend or database.
- Responsive navigation and mobile layout.
- Accessible labels and reduced-motion support.
- `base: './'` keeps assets working from subfolders and simple static hosting.
