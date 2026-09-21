# Sent Studio — landing page

A single-page marketing site aimed at merchants currently on Shopify. Vite +
React 18 + TypeScript + Tailwind, fully static, no backend.

**This is a preview build.** Every price, product and form on the page is
sample data. Nothing submits anywhere, and the page carries two placeholders
that must be filled in before it is shown outside the team — see
[`PLACEHOLDERS.md`](./PLACEHOLDERS.md).

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
npm run build        # type-checks, then emits dist/
npm run preview      # serves dist/ so you can check the built output
```

Output is a static `dist/` folder: one HTML file, one CSS file, one JS file.
No server-side anything.

## Deploying free

The repo ships with `vercel.json` and `netlify.toml`, so both hosts work with
no configuration.

**Vercel** — one command:

```bash
npx vercel --prod
```

**Netlify** — one command:

```bash
npx netlify-cli deploy --build --prod
```

**Cloudflare Pages** — build command `npm run build`, output directory `dist`.

**Render (Static Site)** — build command `npm run build`, publish directory
`dist`.

**GitHub Pages** — Pages serves from a sub-path, so the asset base has to
change. Build with `BASE_PATH` set to your repo name:

```bash
BASE_PATH=/your-repo-name/ npm run build
npx gh-pages -d dist
```

## Project layout

```
src/
  App.tsx                  niche / style / edit state, section order
  data.ts                  all sample data and body copy (§6)
  hooks.ts                 media queries, reduced motion, preview cross-fade
  index.css                design tokens applied as component classes
  components/
    Nav.tsx  Hero.tsx  StorePreview.tsx  WhySwitch.tsx  MovingOver.tsx
    KeepTalking.tsx  BuiltIn.tsx  Faq.tsx  FinalCta.tsx  Footer.tsx
    ChipGroup.tsx          pill chips with radiogroup semantics
    Icons.tsx  Section.tsx shared inline SVG and section furniture
tailwind.config.js         colour, font, radius and shadow tokens
```

`StorePreview.tsx` exports both previews: `StorePreview` (the 640 × 700 hero
frame) and `StudioPreview` (the compact storefront in the chat demo). They
share the product tile and decorative-shape logic.

## Notes for reviewers

- Dark theme only, no toggle. Two very subtle gradients, one soft shadow.
- Fonts are Poppins and Instrument Serif, loaded with a single Google Fonts
  stylesheet link.
- Chips are real radio groups (arrow keys work), accordion rows are real
  buttons, inputs all have labels. Focus rings are a 2px accent outline.
- `prefers-reduced-motion: reduce` disables every transition and animation.
- No images: all storefront imagery is drawn with CSS and inline SVG.
