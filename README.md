# Doğa Bice Portfolio

A bilingual product engineering portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion and Lenis. The featured Yuvia case study links to its live website, App Store and Google Play releases.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` before publishing.

## Deployment

Deploy to a host that supports Next.js 16. Set `NEXT_PUBLIC_SITE_URL` to the public portfolio origin, such as `https://example.com`, so social preview images resolve to the correct domain. On Vercel, the app also reads the deployment URL automatically.

The portfolio has no required runtime API keys. Public project assets are in `public/`; page and component sources are in `app/` and `components/`.

The interface uses individual shadcn/ui primitives with the portfolio tokens in `app/globals.css`. See `AGENTS.md` before changing Next.js APIs or the visual system.
