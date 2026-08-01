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

This project uses **yarn** (`yarn.lock` is the committed lockfile).

```bash
yarn install
yarn dev         # http://localhost:3000
yarn build       # production build
yarn lint        # eslint
yarn typecheck   # tsc --noEmit
```

## Structure

```
src/
  app/
    layout.tsx              root layout, fonts, metadata, providers
    globals.css             design tokens, custom utilities, antd overrides
    (marketing)/            route group sharing Navbar + Footer
      layout.tsx            marketing chrome
      page.tsx              landing page composition
      features/             feature deep-dives
      modules/              modules by group + integrations
      pricing/              plans + full comparison matrix + FAQ
      security/             security practices, certifications, disclosure
      about/                story, values, timeline, leadership
      careers/              perks + open roles
      contact/              enquiry form, channels, offices
      privacy/  terms/      legal documents
  components/
    providers/
      app-providers.tsx     AntdRegistry + ConfigProvider + App
    landing/                landing page sections (reused across pages)
    marketing/              sub-page building blocks (page hero, matrix, forms)
    ui/
      reveal.tsx            scroll-reveal motion primitives
      section-heading.tsx   shared section header
  data/
    common.ts               values used in 2+ places (easing, emails, tag styles)
    landing.ts              landing copy, nav and footer links, dashboard mock-up
    pages.ts                copy owned by individual sub-pages
  lib/
    antd-theme.ts           single source of truth for antd tokens
    site.ts                 site identity + `sitePaths` (feeds the sitemap)
```

Every route is statically prerendered. Adding a page means creating it under
`src/app/(marketing)/` and adding its path to `sitePaths` in `src/lib/site.ts`
so it appears in `sitemap.xml`.

## Where content lives

Components hold layout and one-off prose (section titles, paragraphs); every
list, table, map and repeated literal lives in `src/data/`:

- `common.ts` — used by more than one component or page: the motion easing
  curve, contact mailboxes, module tag badge styles (dark + light).
- `landing.ts` — landing sections, nav/footer links, and the hero's mock
  dashboard (stats, chart bars, payroll rows, badge).
- `pages.ts` — content owned by a single sub-page.

Icon maps stay in their component (they hold JSX); data files key into them by
`key`, as in `features.tsx` and `modules.tsx`.

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

## SEO & metadata

Site identity lives in one place: `src/lib/site.ts`. It feeds the root
`metadata` export, `robots.ts`, `sitemap.ts` and the footer credit.

Set `NEXT_PUBLIC_SITE_URL` before deploying (see `.env.example`) — it becomes
`metadataBase`, the canonical URL, the sitemap host and the `robots.txt`
sitemap entry. Without it everything falls back to `http://localhost:3000`.

File-convention assets: `src/app/icon.svg` (favicon) and
`src/app/opengraph-image.tsx` (generated 1200×630 OG image).

## Author

**Pranto Shikder** — [github.com/prantoshikder](https://github.com/prantoshikder)

## License

[MIT](./LICENSE)
