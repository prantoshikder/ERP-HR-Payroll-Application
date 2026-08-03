<div align="center">

# KormoPay

**The marketing website for an ERP HR & Payroll platform** — payroll, attendance,
leave, recruitment, performance and compliance on one employee record.

[**🌐 Live site →** kormopay.vercel.app](https://kormopay.vercel.app)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-6-0170FE?logo=antdesign&logoColor=white)](https://ant.design)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

---

## What this project actually is

This repository is the **public-facing website** of KormoPay — a fictional ERP
HR & Payroll product. It is a complete, production-ready marketing site: ten
routes, real long-form copy, a pricing comparison matrix, legal documents and a
working enquiry form.

**Read this before you dig in:**

| | |
| --- | --- |
| ✅ **What it is** | A front-end product website — every page statically prerendered, no request-time rendering |
| ❌ **What it is not** | The HR/payroll application itself. There is no backend, database, authentication or API |
| 🎯 **Why it exists** | A reference build for a real-world SaaS marketing site: design system, content architecture, SEO, performance and accessibility done properly |

The dashboard you see in the hero is a **hand-built HTML mock-up** (see
`dashboard-preview.tsx`), not a screenshot and not a live product. The contact
form resolves locally and shows its success state — the flow is complete for a
visitor, but nothing is sent anywhere.

---

## The product it describes

Understanding the copy is easier if you know the domain it is selling. KormoPay
is pitched as a single system where **one employee record** feeds every process —
so a leave approval, a late punch and a mid-year increment all land in payroll
without re-keying.

<details>
<summary><b>6 capability areas</b> (<code>src/data/landing.ts</code> → <code>features</code>)</summary>

<br>

| Capability | What it covers |
| --- | --- |
| **Payroll engine** | Salary structures, arrears, bonuses, overtime, tax — one deterministic, auditable run |
| **Attendance & shifts** | Biometric, geo-fenced and web punches → timesheets, rosters, breaks, overtime rules |
| **Leave management** | Accrual policies, carry-forward, encashment, multi-level approvals |
| **Recruitment & onboarding** | Requisitions, pipelines, scorecards, digital offers, day-one provisioning |
| **Performance & OKR** | Goal cascades, 360° reviews, appraisals that sync increments back to payroll |
| **Compliance & audit** | Statutory reports, provident fund, income tax, immutable audit trail, RBAC |

</details>

<details>
<summary><b>12 modules across 5 groups</b> (<code>src/data/landing.ts</code> → <code>modules</code>)</summary>

<br>

| Group | Modules |
| --- | --- |
| **Foundation** | Core HR · Employee Self-Service |
| **Finance** | Payroll · Expense & Claims · Loans & Advances |
| **Operations** | Time & Attendance · Leave · Asset Register |
| **Talent** | Recruitment · Onboarding · Performance |
| **Insights** | Analytics |

</details>

<details>
<summary><b>3 pricing plans</b> (<code>src/data/landing.ts</code> → <code>plans</code>)</summary>

<br>

| Plan | Price | For |
| --- | --- | --- |
| **Starter** | $3/employee/mo ($2 yearly) | Up to 50 employees — Core HR, payroll, leave, self-service |
| **Growth** ⭐ | $6/employee/mo ($5 yearly) | Unlimited employees — every workflow, priority support |
| **Enterprise** | Custom | Multi-entity, SSO/SCIM, open API, 99.9% SLA |

The pricing page also renders a full **feature comparison matrix** across all
three plans (`plan-matrix.tsx` + `planMatrix` in `src/data/pages.ts`).

</details>

---

## What is built — page by page

Ten public routes, all under the `(marketing)` route group so they share one
navbar, footer and back-to-top button.

| Route | Page | What is on it |
| --- | --- | --- |
| `/` | **Landing** | 10 stacked sections: hero + mock dashboard, logo cloud, features, modules, how-it-works, stats, pricing, testimonials, FAQ, CTA band |
| `/features` | **Features** | Deep-dive on each of the six capability areas, with sub-points and platform capabilities |
| `/modules` | **Modules** | All 12 modules grouped by category, plus native integrations (accounting, identity, collaboration, biometric) |
| `/pricing` | **Pricing** | Three plans with monthly/yearly toggle, full comparison matrix, pricing FAQ |
| `/security` | **Security** | Practices in four areas, certifications (SOC 2, ISO 27001), responsible-disclosure facts |
| `/about` | **About** | Origin story, four values, a five-year milestone timeline, leadership profiles |
| `/careers` | **Careers** | Perks and open roles by department and location |
| `/contact` | **Contact** | Enquiry form (topic + company size), contact channels by team, office addresses |
| `/privacy` | **Privacy policy** | Full legal document with anchor-linked sections |
| `/terms` | **Terms of service** | Full legal document with anchor-linked sections |

Plus the non-page routes: `not-found.tsx` (custom 404), `loading.tsx` (streaming
skeleton), `robots.ts`, `sitemap.ts`, `icon.svg` (favicon) and
`opengraph-image.tsx` (generated 1200×630 social card).

**16 static pages, 0 server-rendered.** Verify with `yarn build`.

---

## Tech stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack) | Static prerendering, file-convention SEO assets |
| Language | **TypeScript** (strict) | — |
| UI kit | **Ant Design 6** + `@ant-design/nextjs-registry` | Forms, selects, collapse, buttons |
| Styling | **Tailwind CSS 4** | Layout and all custom markup |
| Icons | **react-icons/hi2** (Heroicons v2) | Bare SVGs that inherit `currentColor` |
| Animation | **CSS keyframes only** | No JS animation library — see [Motion & first paint](#motion--first-paint) |

Runtime dependencies are deliberately few: `next`, `react`, `react-dom`, `antd`,
`@ant-design/nextjs-registry`, `react-icons`. Nothing else ships to the browser.

---

## Getting started

Requires **Node 20+**. This project uses **yarn** (`yarn.lock` is the committed
lockfile).

```bash
git clone https://github.com/prantoshikder/ERP-HR-Payroll-Application.git
cd ERP-HR-Payroll-Application
yarn install
yarn dev
```

Open <http://localhost:3000>.

| Script | What it does |
| --- | --- |
| `yarn dev` | Dev server on `:3000` |
| `yarn build` | Production build (prerenders every route) |
| `yarn start` | Serve the production build |
| `yarn lint` | ESLint |
| `yarn typecheck` | `tsc --noEmit` |

### Environment

One optional variable — copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL='https://kormopay.vercel.app'
```

It becomes `metadataBase`, the canonical URL, the sitemap host and the
`robots.txt` sitemap entry. Unset, it falls back to `https://kormopay.vercel.app`.

---

## Project structure

```
src/
  app/
    layout.tsx                root layout — fonts, metadata, providers
    globals.css               design tokens, custom utilities, antd overrides
    robots.ts  sitemap.ts     generated from sitePaths
    icon.svg                  favicon
    opengraph-image.tsx       generated 1200×630 OG image
    not-found.tsx             custom 404
    (marketing)/              route group sharing Navbar + Footer + BackToTop
      layout.tsx              marketing chrome
      loading.tsx             streaming skeleton
      page.tsx                landing page composition
      features/  modules/  pricing/  security/
      about/     careers/  contact/
      privacy/   terms/

  components/
    providers/
      app-providers.tsx       AntdRegistry + ConfigProvider
    landing/                  13 landing sections, reused across pages
                              (hero, navbar, footer, features, modules,
                               how-it-works, stats, pricing, testimonials,
                               faq, cta-band, logo-cloud, dashboard-preview)
                              + logo.tsx — the wordmark used by both
    marketing/                sub-page blocks — page-hero, plan-matrix,
                              contact-form, legal-doc, link-button
    ui/                       reveal, section-heading, back-to-top, route-button

  data/
    common.ts                 values used in 2+ places (emails, tag styles)
    landing.ts                landing copy, nav/footer links, dashboard mock-up
    pages.ts                  copy owned by individual sub-pages

  lib/
    antd-theme.ts             single source of truth for antd tokens
    site.ts                   site identity + sitePaths (feeds the sitemap)
```

**Adding a page:** create it under `src/app/(marketing)/`, then add its path to
`sitePaths` in `src/lib/site.ts` so it appears in `sitemap.xml`.

---

## Conventions

### Where content lives

Components hold layout and one-off prose (section titles, paragraphs). **Every
list, table, map and repeated literal lives in `src/data/`:**

- **`common.ts`** — used by more than one component or page: contact mailboxes,
  module tag badge styles (dark + light).
- **`landing.ts`** — landing sections, nav/footer links, and the hero's mock
  dashboard (stats, chart bars, payroll rows, badge).
- **`pages.ts`** — content owned by a single sub-page.

Icon maps stay in their component (they hold JSX); data files key into them by
`key` — see `features.tsx` and `modules.tsx`.

### Styling

Ant Design 6 emits its CSS **unlayered**, while Tailwind 4 puts everything into
`@layer` blocks. Unlayered CSS always beats layered CSS, so:

- Style antd components through **`src/lib/antd-theme.ts`** (tokens), not
  utility classes.
- Use Tailwind freely for layout and custom (non-antd) markup.
- When you genuinely must override an antd rule, write a plain selector in the
  "antd overrides" block of `globals.css` with enough specificity — see
  `.faq-collapse` for the pattern.

**Color scales:** `brand-*` (indigo), `mint-*` (green), `ink-*` (slate).

**Custom Tailwind utilities** in `globals.css`: `shell`, `text-gradient`,
`grid-lines`, `dot-grid`, `mask-fade-b`, `mask-fade-x`, plus the entrance
utilities `enter`, `enter-x`, `grow-x`, `grow-y`, `grow-down`.

**Icons** come from `react-icons/hi2` — `HiOutline*` for outline, `Hi*` for
solid. They render as a bare `<svg>` sized in `em` and coloured with
`currentColor`, so they inherit text size and colour. `@ant-design/icons` is not
a dependency any more; antd still uses it internally for its own chrome (select
arrows, form feedback), which is why `.anticon` rules remain in its CSS.

### Motion & first paint

There is **no animation library**. Everything animates with CSS keyframes,
because a JS-driven entrance has to render `opacity: 0` into the SSR HTML —
which keeps the page blank until the bundle hydrates.

- **Above the fold** (navbar, hero, dashboard mock-up): the `enter` / `enter-x`
  / `grow-*` utilities, staggered with the `--enter-delay` variable. These paint
  on the first frame, before any JS runs.
- **Below the fold**: `Reveal` / `RevealGroup` from `src/components/ui/reveal.tsx`
  add an `is-in` class through an IntersectionObserver; the animation itself is
  still CSS. `useInView` is exported for one-off cases (see the progress rail in
  `how-it-works.tsx`).
- `prefers-reduced-motion` disables all of it in `globals.css`, and a
  `<noscript>` rule in the root layout unhides reveals when JS never arrives.

### Load performance

- Every route is statically prerendered; nothing renders at request time.
- `loading.tsx` in the marketing group shows a skeleton while a segment streams.
- `optimizePackageImports` (`next.config.ts`) rewrites `antd` and `react-icons`
  barrel imports to deep imports, so a page only pulls what it renders.
- antd's `<App>` provider is intentionally not mounted — see `app-providers.tsx`.

Homepage first-load JS is **~316 KB gzipped**, nearly all of it React + antd.
Re-measure after any dependency change:

```bash
yarn build && yarn start
# then measure the <script> chunks referenced by the homepage HTML
```

### SEO & metadata

Site identity lives in one place: **`src/lib/site.ts`**. It feeds the root
`metadata` export, `robots.ts`, `sitemap.ts` and the footer credit. Every page
also exports its own `metadata` with a page-specific title and description.

---

## Not built yet

Honest list of what a reader should not expect to find:

- No backend, database or API routes — the contact form resolves client-side.
- No authentication, tenancy or user accounts.
- No actual HR/payroll application behind the marketing site; the dashboard is a
  static mock-up.
- No test suite.
- Content is English-only.

---

## Author

**Pranto Shikder** — [github.com/prantoshikder](https://github.com/prantoshikder)

## License

[MIT](./LICENSE)
