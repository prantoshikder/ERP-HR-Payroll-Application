"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  AuditOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

import { features, type Feature } from "@/data/landing";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, fadeUp } from "@/components/ui/reveal";

const icons: Record<string, ReactNode> = {
  payroll: <DollarCircleOutlined />,
  attendance: <ClockCircleOutlined />,
  leave: <CalendarOutlined />,
  recruit: <SolutionOutlined />,
  performance: <LineChartOutlined />,
  compliance: <AuditOutlined />,
};

const accents: Record<Feature["accent"], string> = {
  brand: "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white",
  mint: "bg-mint-500/10 text-mint-600 group-hover:bg-mint-500 group-hover:text-white",
  sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
  rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
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
            <motion.article
              key={feature.key}
              variants={fadeUp}
              className="group border-ink-200/70 hover:border-brand-200 hover:shadow-lift relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl text-lg transition-colors duration-300 ${accents[feature.accent]}`}
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
                className="from-brand-400/10 pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-gradient-to-tl to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
