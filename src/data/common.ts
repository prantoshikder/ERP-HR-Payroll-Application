/**
 * Static values used by more than one component or page.
 *
 * Anything consumed in a single place stays with its own feature file —
 * `landing.ts` for the landing sections, `pages.ts` for the sub-pages.
 */

/** Shared easing curve for every motion transition. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Mailboxes referenced from page copy, contact channels and legal text. */
export const contactEmails = {
  sales: "sales@kormopay.example",
  support: "support@kormopay.example",
  security: "security@kormopay.example",
  careers: "careers@kormopay.example",
  privacy: "privacy@kormopay.example",
  legal: "legal@kormopay.example",
} as const;

/** Module category badges — the dark set on the landing section, the light set on /modules. */
export const moduleTagStyles: Record<"dark" | "light", Record<string, string>> = {
  dark: {
    Foundation: "text-brand-300 border-brand-400/25 bg-brand-400/10",
    Finance: "text-mint-400 border-mint-400/25 bg-mint-400/10",
    Operations: "text-sky-300 border-sky-400/25 bg-sky-400/10",
    Talent: "text-violet-300 border-violet-400/25 bg-violet-400/10",
    Insights: "text-amber-300 border-amber-400/25 bg-amber-400/10",
  },
  light: {
    Foundation: "text-brand-700 border-brand-200 bg-brand-50",
    Finance: "text-mint-600 border-mint-400/40 bg-mint-500/10",
    Operations: "text-sky-700 border-sky-200 bg-sky-50",
    Talent: "text-violet-700 border-violet-200 bg-violet-50",
    Insights: "text-amber-700 border-amber-200 bg-amber-50",
  },
};
