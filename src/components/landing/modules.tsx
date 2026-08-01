"use client";

import { ApiOutlined, CloudSyncOutlined, MobileOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

import type { ReactNode } from "react";

import { modules, platformCapabilities } from "@/data/landing";
import { moduleTagStyles } from "@/data/common";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

const capabilityIcons: Record<string, ReactNode> = {
  api: <ApiOutlined />,
  sync: <CloudSyncOutlined />,
  mobile: <MobileOutlined />,
  security: <SafetyCertificateOutlined />,
};

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
            <div
              key={mod.name}
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-white">
                  {mod.name}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${moduleTagStyles.dark[mod.tag]}`}
                >
                  {mod.tag}
                </span>
              </div>
              <p className="text-ink-400 mt-1.5 text-sm">{mod.blurb}</p>
            </div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformCapabilities.map((cap) => (
              <div key={cap.key} className="flex items-center gap-3">
                <span className="text-brand-300 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-base">
                  {capabilityIcons[cap.key]}
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
