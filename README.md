# Antelspark — Website

**We Engineer What's Next.**

Production website for Antelspark, built with Next.js (App Router), TypeScript, Tailwind CSS v4, Motion and Lucide.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

## Structure

```
app/            Routes, root layout, global styles & design tokens
components/
  layout/       Header, footer, logo, container
  ui/           Design-system atoms (button, …)
  sections/     Page sections (added per phase)
  motion/       Animation primitives (added per phase)
content/        MDX content — services, work, insights (added per phase)
lib/            Site config (nav, services, industries), utilities
public/fonts/   Self-hosted fonts (Clash Display, General Sans, JetBrains Mono)
```

## Design system

Tokens live in `app/globals.css` (Tailwind v4 `@theme`):

- **Palette** — navy (`ink`, `surface`), charcoal, soft white (`paper`), electric blue (`accent`), subtle violet.
- **Type** — Clash Display (display), General Sans (body/UI), JetBrains Mono (labels/technical). Fluid display sizes via `text-display-{xl,lg,md,sm}`.
- **Utilities** — `eyebrow` (mono section labels), `section-pad` (vertical rhythm).

Site-wide navigation, the nine service categories and industries are defined once in `lib/site.ts`.
