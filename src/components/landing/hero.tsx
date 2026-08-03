"use client";

import type { CSSProperties } from "react";
import { HiArrowRight, HiOutlinePlayCircle } from "react-icons/hi2";
import { Button } from "antd";

import { RouteButton } from "@/components/ui/route-button";
import { DashboardPreview } from "./dashboard-preview";

/**
 * Entrances here are CSS, not motion: this is the LCP block, and a JS-driven
 * entrance would ship `opacity: 0` in the SSR HTML and hold the first paint
 * until hydration. `delay()` staggers the same way the variants used to.
 */
const delay = (seconds: number) =>
  ({ "--enter-delay": `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines mask-fade-b absolute inset-0" />
        <div className="bg-brand-300/30 absolute -top-32 -left-24 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-mint-400/20 absolute -top-20 right-0 h-104 w-104 rounded-full blur-[130px]" />
      </div>

      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="enter" style={delay(0.05)}>
            <span className="border-ink-200 text-ink-600 shadow-soft inline-flex items-center gap-2 rounded-full border bg-white/80 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
              <span className="bg-mint-500 relative flex h-1.5 w-1.5 rounded-full">
                <span className="bg-mint-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              </span>
              New — automated tax slabs for FY 2026-27
            </span>
          </div>

          <h1
            className="font-display text-ink-900 enter mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl"
            style={delay(0.14)}
          >
            Close payroll in minutes,{" "}
            <span className="text-gradient">not weekends</span>
          </h1>

          <p
            className="text-ink-500 enter mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
            style={delay(0.23)}
          >
            KormoPay is the ERP that connects people, attendance and money. Hire,
            onboard, track time and pay your entire workforce from one system —
            with an audit trail your finance team can trust.
          </p>

          <div
            className="enter mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={delay(0.32)}
          >
            <RouteButton
              type="primary"
              size="large"
              href="/pricing"
              icon={<HiArrowRight />}
              iconPlacement="end"
            >
              Start 14-day free trial
            </RouteButton>
            <Button
              size="large"
              href="#how-it-works"
              icon={<HiOutlinePlayCircle />}
            >
              See how it works
            </Button>
          </div>

          <p className="text-ink-400 enter mt-5 text-xs" style={delay(0.41)}>
            No credit card required · Free migration from your current system
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
