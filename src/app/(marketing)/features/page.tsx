import type { Metadata } from "next";

import { featureDeepDives } from "@/data/pages";
import { Features } from "@/components/landing/features";
import { Stats } from "@/components/landing/stats";
import { CtaBand } from "@/components/landing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { LinkButton } from "@/components/marketing/link-button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Payroll, attendance, leave, recruitment, performance and compliance on one employee record — every capability KormoPay ships, in detail.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={
          <>
            Everything HR runs on,{" "}
            <span className="text-gradient">on one record</span>
          </>
        }
        description="Six capability areas, one employee record and one audit trail. Nothing is bolted on, so a leave approval, a late punch and a mid-year increment all reach payroll on their own."
        actions={
          <>
            <LinkButton href="/pricing">See pricing</LinkButton>
            <LinkButton href="/contact" variant="ghost">
              Book a walkthrough
            </LinkButton>
          </>
        }
      />

      <Features />

      <div className="bg-ink-50/60">
        {featureDeepDives.map((dive, i) => (
          <section
            key={dive.key}
            className="border-ink-200/60 border-t py-16 first:border-t-0 sm:py-20"
          >
            <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <span className="text-brand-600 text-xs font-bold tracking-[0.14em] uppercase">
                  {dive.eyebrow}
                </span>
                <h2 className="font-display text-ink-900 mt-4 text-2xl leading-tight font-bold text-balance sm:text-3xl">
                  {dive.title}
                </h2>
                <p className="text-ink-500 mt-4 text-base leading-relaxed text-pretty">
                  {dive.description}
                </p>

                <div className="border-ink-200 mt-7 inline-flex items-baseline gap-3 rounded-xl border bg-white px-5 py-3">
                  <span className="font-display text-brand-600 text-2xl font-extrabold">
                    {dive.metric.value}
                  </span>
                  <span className="text-ink-500 text-xs">{dive.metric.label}</span>
                </div>
              </Reveal>

              <Reveal
                delay={0.1}
                className={i % 2 === 1 ? "lg:order-1" : undefined}
              >
                <ul className="border-ink-200/70 shadow-soft divide-ink-100 divide-y rounded-2xl border bg-white">
                  {dive.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="text-ink-700 flex items-start gap-3 px-6 py-4 text-sm leading-relaxed"
                    >
                      <span className="bg-brand-600 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <Stats />
      <CtaBand />
    </>
  );
}
