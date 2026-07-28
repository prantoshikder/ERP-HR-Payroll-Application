/** Single source of truth for site identity — used by metadata, robots, sitemap and the footer. */
export const siteConfig = {
  name: "NexusHR",
  title: "NexusHR — ERP HR & Payroll Platform",
  description:
    "Run payroll, attendance, leave, recruitment and compliance for your whole workforce from one ERP. Built for teams from 20 to 20,000.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: {
    name: "Pranto Shikder",
    email: "prantoshikder24@gmail.com",
    url: "https://github.com/prantoshikder",
  },
  repository: "https://github.com/prantoshikder/ERP-HR-Payroll-Application",
} as const;

/** Landing page anchors, also used to generate the sitemap. */
export const sitePaths = ["/"] as const;
