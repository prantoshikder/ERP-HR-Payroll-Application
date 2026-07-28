# NexusHR — ERP HR & Payroll Application

Marketing site + application shell for an ERP HR & Payroll product.

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)            |
| Language   | TypeScript (strict)                           |
| UI kit     | Ant Design 6 + `@ant-design/nextjs-registry`  |
| Styling    | Tailwind CSS 4                                |
| Animation  | Motion (`motion/react`)                       |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Structure

```
src/
  app/
    layout.tsx              root layout, fonts, metadata, providers
    globals.css             design tokens, custom utilities, antd overrides
    page.tsx                landing page composition
  components/
    providers/
      app-providers.tsx     AntdRegistry + ConfigProvider + App
    landing/                landing page sections
    ui/
      reveal.tsx            scroll-reveal motion primitives
      section-heading.tsx   shared section header
  data/
    landing.ts              all landing page copy and content
  lib/
    antd-theme.ts           single source of truth for antd tokens
```

## Styling conventions

Ant Design 6 emits its CSS **unlayered**, while Tailwind 4 puts everything into
`@layer` blocks. Unlayered CSS always beats layered CSS, so:

- Style antd components through `src/lib/antd-theme.ts` (tokens), not utility classes.
- Use Tailwind freely for layout and custom (non-antd) markup.
- When you genuinely must override an antd rule, write a plain selector in the
  "antd overrides" block of `globals.css` with enough specificity — see
  `.faq-collapse` for the pattern.

Custom Tailwind utilities defined in `globals.css`: `shell`, `text-gradient`,
`grid-lines`, `dot-grid`, `mask-fade-b`, `mask-fade-x`.

Color scales: `brand-*` (indigo), `mint-*` (green), `ink-*` (slate).

## Motion

`src/components/ui/reveal.tsx` exports `Reveal`, `RevealGroup` and the `fadeUp` /
`fadeIn` variants. Sections use `whileInView` with `once: true`. Global
`prefers-reduced-motion` handling lives in `globals.css`.
# ERP-HR-Payroll-Application
