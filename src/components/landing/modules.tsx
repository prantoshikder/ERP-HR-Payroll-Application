"use client";

import { motion } from "motion/react";
import { ApiOutlined, CloudSyncOutlined, MobileOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

import { modules } from "@/data/landing";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, fadeUp } from "@/components/ui/reveal";

const tagStyles: Record<string, string> = {
  Foundation: "text-brand-300 border-brand-400/25 bg-brand-400/10",
  Finance: "text-mint-400 border-mint-400/25 bg-mint-400/10",
  Operations: "text-sky-300 border-sky-400/25 bg-sky-400/10",
  Talent: "text-violet-300 border-violet-400/25 bg-violet-400/10",
  Insights: "text-amber-300 border-amber-400/25 bg-amber-400/10",
};

const capabilities = [
  { icon: <ApiOutlined />, label: "Open REST API & webhooks" },
  { icon: <CloudSyncOutlined />, label: "Accounting & bank sync" },
  { icon: <MobileOutlined />, label: "iOS & Android self-service" },
  { icon: <SafetyCertificateOutlined />, label: "SOC 2 Type II · RBAC · SSO" },
];

export function Modules() {
  return (
    <section id="modules" className="bg-ink-950 relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-brand-600/25 absolute top-0 left-1/4 h-80 w-80 rounded-full blur-[130px]" />
        <div className="bg-mint-500/15 absolute right-0 bottom-0 h-72 w-72 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="shell relative">
        <SectionHeading
          tone="dark"
          eyebrow="Modules"
          title={
            <>
              Turn on what you need,{" "}
              <span className="text-brand-300">when you need it</span>
            </>
          }
          description="Start with Core HR and payroll. Add attendance, recruitment or performance whenever the team is ready — no migration, no second vendor, no data silo."
        />

        <RevealGroup
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.name}
              variants={fadeUp}
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-white">
                  {mod.name}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tagStyles[mod.tag]}`}
                >
                  {mod.tag}
                </span>
              </div>
              <p className="text-ink-400 mt-1.5 text-sm">{mod.blurb}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div key={cap.label} className="flex items-center gap-3">
                <span className="text-brand-300 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-base">
                  {cap.icon}
                </span>
                <span className="text-ink-300 text-sm font-medium">{cap.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
