import type { Metadata } from "next";

import { certifications, practiceGroups } from "@/data/pages";
import { CtaBand } from "@/components/landing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { LinkButton } from "@/components/marketing/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Security & compliance",
  description:
    "How NexusHR protects payroll data: encryption, tenant isolation, role-based access, SOC 2 Type II, ISO 27001 and an immutable audit trail.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title={
          <>
            Payroll data deserves{" "}
            <span className="text-gradient">boring, provable controls</span>
          </>
        }
        description="Salary figures are the most sensitive records an employer holds. Here is exactly how they are stored, who can reach them, and what we can show your security reviewer."
        actions={
          <>
            <LinkButton href="/contact">Request our security pack</LinkButton>
            <LinkButton href="/privacy" variant="ghost">
              Read the privacy policy
            </LinkButton>
          </>
        }
      />

      <section className="pb-8">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <Reveal
                key={cert.name}
                delay={i * 0.06}
                className="border-ink-200/70 shadow-soft rounded-2xl border bg-white p-6"
              >
                <p className="font-display text-ink-900 text-base font-bold">
                  {cert.name}
                </p>
                <p className="text-ink-500 mt-2 text-xs leading-relaxed">
                  {cert.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Practices"
            title="What we actually do, in four areas"
            description="Every item below is something we can evidence during a vendor assessment — no aspirational statements."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {practiceGroups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={(i % 2) * 0.08}
                className="border-ink-200/70 hover:shadow-soft flex h-full flex-col rounded-2xl border bg-white p-7 transition-shadow"
              >
                <h3 className="font-display text-ink-900 text-lg font-bold">
                  {group.title}
                </h3>
                <p className="text-ink-400 mt-1.5 text-sm">{group.description}</p>

                <ul className="border-ink-100 mt-5 space-y-3 border-t pt-5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-ink-600 flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="bg-mint-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="shell">
          <Reveal>
            <div className="bg-ink-950 relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="bg-brand-600/30 absolute -top-24 right-1/4 h-72 w-72 rounded-full blur-[120px]" />
              </div>

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-balance text-white sm:text-3xl">
                    Reporting a vulnerability
                  </h2>
                  <p className="text-ink-300 mt-4 text-sm leading-relaxed">
                    If you believe you have found a security issue, email{" "}
                    <span className="font-semibold text-white">
                      security@nexushr.example
                    </span>{" "}
                    with enough detail to reproduce it. We acknowledge within 72
                    hours, keep you updated while we fix it, and credit reporters
                    who want it. Please do not run automated scans against
                    production or access data that is not yours.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-brand-300 text-xs font-semibold">
                      First response
                    </p>
                    <p className="mt-1 text-sm text-white">Within 72 hours</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-brand-300 text-xs font-semibold">
                      Customer notification
                    </p>
                    <p className="mt-1 text-sm text-white">
                      Within 24 hours of a confirmed incident
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
