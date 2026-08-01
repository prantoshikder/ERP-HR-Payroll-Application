import type { Metadata } from "next";

import { leadership, milestones, values } from "@/data/pages";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaBand } from "@/components/landing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { LinkButton } from "@/components/marketing/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "NexusHR started inside a payroll team that was closing month-end across four spreadsheets. Our story, our values and the people building it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Built by people who have{" "}
            <span className="text-gradient">closed a payroll cycle</span>
          </>
        }
        description="NexusHR started as an internal tool for a 900-person manufacturing group whose payroll lived in four spreadsheets. Everything we ship still comes from that problem: get the numbers right, on time, without re-keying."
        actions={
          <>
            <LinkButton href="/careers">See open roles</LinkButton>
            <LinkButton href="/contact" variant="ghost">
              Talk to the team
            </LinkButton>
          </>
        }
      />

      <Stats />

      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What we believe"
            title="Four opinions we build against"
            description="They are not posters on a wall — each one has cost us a feature we decided not to ship."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.06}
                className="border-ink-200/70 hover:shadow-soft rounded-2xl border bg-white p-7 transition-shadow"
              >
                <span className="font-display text-brand-600/30 text-3xl font-extrabold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-ink-900 mt-3 text-lg font-bold">
                  {value.title}
                </h3>
                <p className="text-ink-500 mt-2.5 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50/60 py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Our story"
            title="Five years of month-ends"
            align="left"
          />

          <ol className="border-ink-200 mt-12 space-y-10 border-l pl-8 sm:pl-10">
            {milestones.map((milestone, i) => (
              <Reveal key={milestone.year} as="li" delay={i * 0.05} className="relative">
                <span className="border-brand-600 absolute top-1.5 -left-[41px] h-3.5 w-3.5 rounded-full border-2 bg-white sm:-left-[49px]" />
                <span className="text-brand-600 font-display text-sm font-bold tracking-wide">
                  {milestone.year}
                </span>
                <h3 className="font-display text-ink-900 mt-1 text-lg font-bold">
                  {milestone.title}
                </h3>
                <p className="text-ink-500 mt-2 max-w-2xl text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Leadership"
            title="Who you will actually be dealing with"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, i) => (
              <Reveal
                key={leader.name}
                delay={i * 0.06}
                className="border-ink-200/70 hover:shadow-lift rounded-2xl border bg-white p-6 transition-shadow"
              >
                <span className="from-brand-500 to-brand-700 grid h-12 w-12 place-items-center rounded-full bg-linear-to-br text-sm font-bold text-white">
                  {leader.initials}
                </span>
                <h3 className="font-display text-ink-900 mt-4 text-base font-bold">
                  {leader.name}
                </h3>
                <p className="text-brand-600 mt-0.5 text-xs font-semibold">
                  {leader.role}
                </p>
                <p className="text-ink-500 mt-3 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
