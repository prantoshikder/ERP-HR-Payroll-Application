/** Single source of truth for site identity — used by metadata, robots, sitemap and the footer. */
export const siteConfig = {
  name: "KormoPay",
  title: "KormoPay — ERP HR & Payroll Platform",
  description:
    "Run payroll, attendance, leave, recruitment and compliance for your whole workforce from one ERP. Built for teams from 20 to 20,000.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kormopay.vercel.app",
  author: {
    name: "Pranto Shikder",
    email: "prantoshikder24@gmail.com",
    url: "https://github.com/prantoshikder",
  },
  repository: "https://github.com/prantoshikder/ERP-HR-Payroll-Application",
} as const;

/** Every public route, used to generate the sitemap. */
export const sitePaths = [
  "/",
  "/features",
  "/modules",
  "/pricing",
  "/security",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
] as const;
