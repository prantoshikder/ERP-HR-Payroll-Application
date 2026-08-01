import type { Metadata } from "next";

import { modules } from "@/data/landing";
import { integrations, moduleGroups } from "@/data/pages";
import { CtaBand } from "@/components/landing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { LinkButton } from "@/components/marketing/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Modules",
  description:
    "Twelve NexusHR modules across Core HR, payroll, operations, talent and analytics — turn on what you need, when you need it.",
  alternates: { canonical: "/modules" },
};

const tagStyles: Record<string, string> = {
  Foundation: "text-brand-700 border-brand-200 bg-brand-50",
  Finance: "text-mint-600 border-mint-400/40 bg-mint-500/10",
  Operations: "text-sky-700 border-sky-200 bg-sky-50",
  Talent: "text-violet-700 border-violet-200 bg-violet-50",
  Insights: "text-amber-700 border-amber-200 bg-amber-50",
};

export default function ModulesPage() {
  return (
    <>
      <PageHero
        eyebrow="Modules"
        title={
          <>
            Twelve modules,{" "}
            <span className="text-gradient">one data model</span>
          </>
        }
        description="Start with Core HR and payroll, then switch on attendance, recruitment or performance whenever the team is ready. No migration, no second vendor, no data silo."
        actions={
          <>
            <LinkButton href="/contact">Talk to us about a rollout</LinkButton>
            <LinkButton href="/pricing" variant="ghost">
              What is in each plan
            </LinkButton>
          </>
        }
      />

      <section className="pb-8">
        <div className="shell space-y-16">
          {moduleGroups.map((group) => {
            const groupModules = modules.filter((mod) => mod.tag === group.tag);

            return (
              <div
                key={group.tag}
                className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
              >
                <Reveal>
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${tagStyles[group.tag]}`}
                  >
                    {group.tag}
                  </span>
                  <h2 className="font-display text-ink-900 mt-4 text-2xl font-bold text-balance">
                    {group.title}
                  </h2>
                  <p className="text-ink-500 mt-3 text-sm leading-relaxed text-pretty">
                    {group.description}
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {groupModules.map((mod) => (
                      <div
                        key={mod.name}
                        className="border-ink-200/70 hover:border-brand-200 hover:shadow-soft rounded-xl border bg-white p-5 transition-all"
                      >
                        <h3 className="font-display text-ink-900 text-base font-semibold">
                          {mod.name}
                        </h3>
                        <p className="text-ink-500 mt-1.5 text-sm">{mod.blurb}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Integrations"
            title="It has to fit the stack you already pay for"
            description="Native connectors for accounting, identity, collaboration and biometric devices — plus a REST API and webhooks for everything we have not built yet."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="border-ink-200/70 flex items-center justify-between rounded-xl border bg-white px-5 py-4"
                >
                  <span className="text-ink-800 text-sm font-semibold">
                    {integration.name}
                  </span>
                  <span className="text-ink-400 text-[11px] font-medium">
                    {integration.category}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
