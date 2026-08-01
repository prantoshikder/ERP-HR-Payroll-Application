"use client";

import type { ReactNode } from "react";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentCheck,
  HiOutlinePresentationChartLine,
  HiOutlineUserPlus,
} from "react-icons/hi2";

import { RevealGroup } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featureAccentStyles, features } from "@/data/landing";

const icons: Record<string, ReactNode> = {
  payroll: <HiOutlineCurrencyDollar />,
  attendance: <HiOutlineClock />,
  leave: <HiOutlineCalendarDays />,
  recruit: <HiOutlineUserPlus />,
  performance: <HiOutlinePresentationChartLine />,
  compliance: <HiOutlineDocumentCheck />,
};

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Everything HR"
          title={
            <>
              One system instead of{" "}
              <span className="text-gradient">nine spreadsheets</span>
            </>
          }
          description="Every module writes to the same employee record, so a leave approval, a late punch and a mid-year increment all land in the payroll run without anyone re-keying a thing."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {features.map((feature) => (
            <article
              key={feature.key}
              className="group border-ink-200/70 hover:border-brand-200 hover:shadow-lift relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl text-lg transition-colors duration-300 ${featureAccentStyles[feature.accent]}`}
              >
                {icons[feature.key]}
              </div>

              <h3 className="font-display text-ink-900 mt-5 text-lg font-bold">
                {feature.title}
              </h3>
              <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                {feature.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="bg-ink-50 text-ink-600 border-ink-100 rounded-full border px-2.5 py-1 text-[11px] font-medium"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <span
                aria-hidden
                className="from-brand-400/10 pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-linear-to-tl to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
