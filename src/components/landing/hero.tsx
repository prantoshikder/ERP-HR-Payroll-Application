"use client";

import { Button } from "antd";
import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { motion } from "motion/react";

import { DashboardPreview } from "./dashboard-preview";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines mask-fade-b absolute inset-0" />
        <div className="bg-brand-300/30 absolute -top-32 -left-24 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-mint-400/20 absolute -top-20 right-0 h-[26rem] w-[26rem] rounded-full blur-[130px]" />
      </div>

      <div className="shell">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item}>
            <span className="border-ink-200 text-ink-600 shadow-soft inline-flex items-center gap-2 rounded-full border bg-white/80 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
              <span className="bg-mint-500 relative flex h-1.5 w-1.5 rounded-full">
                <span className="bg-mint-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              </span>
              New — automated tax slabs for FY 2026-27
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-ink-900 mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Close payroll in minutes,{" "}
            <span className="text-gradient">not weekends</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-ink-500 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
          >
            NexusHR is the ERP that connects people, attendance and money. Hire,
            onboard, track time and pay your entire workforce from one system —
            with an audit trail your finance team can trust.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              type="primary"
              size="large"
              href="#pricing"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Start 14-day free trial
            </Button>
            <Button size="large" href="#how-it-works" icon={<PlayCircleOutlined />}>
              See how it works
            </Button>
          </motion.div>

          <motion.p variants={item} className="text-ink-400 mt-5 text-xs">
            No credit card required · Free migration from your current system
          </motion.p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
