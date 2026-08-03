import type { Metadata } from "next";

import { openRoles, perks } from "@/data/pages";
import { contactEmails } from "@/data/common";
import { CtaBand } from "@/components/landing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { LinkButton } from "@/components/marketing/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at KormoPay across engineering, design, compliance and customer success. Remote-first, meeting-light, and yes — we pay on time.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const teams = [...new Set(openRoles.map((role) => role.team))];

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Work on software people{" "}
            <span className="text-gradient">plan their lives around</span>
          </>
        }
        description="Payroll is the one system nobody forgives being wrong. That constraint makes for careful engineering, honest product decisions and a team that reviews its own work properly."
        actions={
          <>
            <LinkButton href="#open-roles">
              {openRoles.length} open roles
            </LinkButton>
            <LinkButton href="/about" variant="ghost">
              Read about us
            </LinkButton>
          </>
        }
      />

      <section className="pb-4">
        <div className="shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <Reveal
                key={perk.title}
                delay={(i % 3) * 0.06}
                className="border-ink-200/70 hover:shadow-soft rounded-2xl border bg-white p-6 transition-shadow"
              >
                <h3 className="font-display text-ink-900 text-base font-bold">
                  {perk.title}
                </h3>
                <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Open roles"
            title="Where we need people right now"
            description="No role listed that fits? Write to us anyway — we hire ahead of the posting when someone is clearly right."
          />

          <div className="mt-12 space-y-10">
            {teams.map((team) => (
              <div key={team}>
                <h3 className="text-ink-500 text-xs font-bold tracking-[0.12em] uppercase">
                  {team}
                </h3>

                <ul className="border-ink-200/70 divide-ink-100 shadow-soft mt-4 divide-y overflow-hidden rounded-2xl border bg-white">
                  {openRoles
                    .filter((role) => role.team === team)
                    .map((role) => (
                      <li key={role.title}>
                        <a
                          href={`mailto:${contactEmails.careers}?subject=${encodeURIComponent(role.title)}`}
                          className="hover:bg-ink-50/70 group flex flex-col gap-2 px-6 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="text-ink-900 group-hover:text-brand-600 text-sm font-semibold transition-colors">
                              {role.title}
                            </p>
                            <p className="text-ink-400 mt-1 text-xs">
                              {role.location} · {role.type}
                            </p>
                          </div>
                          <span className="text-brand-600 text-sm font-semibold">
                            Apply →
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="border-ink-200 mt-12 rounded-2xl border border-dashed p-8 text-center">
              <h3 className="font-display text-ink-900 text-lg font-bold">
                Nothing matching your skills?
              </h3>
              <p className="text-ink-500 mx-auto mt-2 max-w-md text-sm leading-relaxed">
                Send us what you have built and the problem you would want to own
                here. We read every one and reply either way.
              </p>
              <a
                href={`mailto:${contactEmails.careers}?subject=Open%20application`}
                className="text-brand-600 hover:text-brand-700 mt-5 inline-flex text-sm font-semibold"
              >
                {contactEmails.careers} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
