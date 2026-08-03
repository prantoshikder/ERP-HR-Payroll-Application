# KormoPay — ERP HR & Payroll Application

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
`grid-lines`, `dot-grid`, `mask-fade-b`, `mask-fade-x`, plus the entrance
utilities `enter`, `enter-x`, `grow-x`, `grow-y`, `grow-down`.

Color scales: `brand-*` (indigo), `mint-*` (green), `ink-*` (slate).

Icons come from **`react-icons/hi2`** (Heroicons v2) — `HiOutline*` for outline,
`Hi*` for solid. They render as a bare `<svg>` sized in `em` and coloured with
`currentColor`, so they inherit text size and colour. `@ant-design/icons` is not
a dependency any more; antd still uses it internally for its own chrome (select
arrows, form feedback), which is why `.anticon` rules remain in its CSS.

## Motion & first paint

There is no animation library. Everything animates with CSS keyframes, because
a JS-driven entrance has to render `opacity: 0` into the SSR HTML — which keeps
the page blank until the bundle hydrates.

- **Above the fold** (navbar, hero, dashboard mock-up): the `enter` /
  `enter-x` / `grow-*` utilities, staggered with the `--enter-delay` variable.
  These paint on the first frame, before any JS runs.
- **Below the fold**: `Reveal` / `RevealGroup` from
  `src/components/ui/reveal.tsx` add an `is-in` class through an
  IntersectionObserver; the animation itself is still CSS. `useInView` is
  exported for one-off cases (see the progress rail in `how-it-works.tsx`).
- `prefers-reduced-motion` disables all of it in `globals.css`, and a
  `<noscript>` rule in the root layout unhides reveals when JS never arrives.

## Load performance

- Every route is statically prerendered; nothing renders at request time.
- `loading.tsx` in the marketing group shows a skeleton while a segment streams.
- `optimizePackageImports` (`next.config.ts`) keeps antd barrel imports from
  pulling the whole library into a page.
- antd's `<App>` provider is intentionally not mounted — see
  `app-providers.tsx`.

Homepage first-load JS is ~318 KB gzipped, nearly all of it React + antd.
Check it after dependency changes with `yarn build && yarn start`, then measure
the `<script>` chunks the HTML references.

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
