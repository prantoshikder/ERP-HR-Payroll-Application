"use client";

import { CheckOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import { motion } from "motion/react";
import { useState } from "react";

import { Reveal, RevealGroup, fadeUp } from "@/components/ui/reveal";
import { RouteButton } from "@/components/ui/route-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/data/landing";

type Cycle = "monthly" | "yearly";

/** `heading={false}` on the pricing page, where the page hero already says this. */
export function Pricing({ heading = true }: { heading?: boolean }) {
  const [cycle, setCycle] = useState<Cycle>("yearly");

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="dot-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-60"
      />

      <div className="shell">
        {heading ? (
          <SectionHeading
            eyebrow="Pricing"
            title="Priced per employee, not per module"
            description="No implementation fee, no per-payslip charge, no surprise line item when you add a country. Cancel any time during the trial."
          />
        ) : null}

        <Reveal delay={0.1}>
          <div
            className={`flex flex-col items-center gap-2 ${heading ? "mt-9" : ""}`}
          >
            <Segmented<Cycle>
              size="large"
              value={cycle}
              onChange={setCycle}
              options={[
                { label: "Monthly", value: "monthly" },
                { label: "Yearly", value: "yearly" },
              ]}
            />
            <span className="text-mint-600 text-xs font-semibold">
              Save ~20% billed yearly
            </span>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-12 grid items-start gap-6 lg:grid-cols-3"
          stagger={0.09}
        >
          {plans.map((plan) => {
            const price = cycle === "monthly" ? plan.monthly : plan.yearly;

            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-shadow ${
                  plan.featured
                    ? "border-brand-600 shadow-lift bg-white lg:-mt-4 lg:pt-9 lg:pb-9"
                    : "border-ink-200/70 hover:shadow-soft bg-white"
                }`}
              >
                {plan.featured ? (
                  <span className="bg-brand-600 absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                    Most popular
                  </span>
                ) : null}

                <h3 className="font-display text-ink-900 text-xl font-bold">
                  {plan.name}
                </h3>
                <p className="text-ink-500 mt-1.5 min-h-10.5 text-sm">
                  {plan.tagline}
                </p>

                <div className="border-ink-100 mt-6 border-t pt-6">
                  {price === null ? (
                    <p className="font-display text-ink-900 text-3xl font-extrabold">
                      Let&rsquo;s talk
                    </p>
                  ) : (
                    <p className="flex items-baseline gap-1">
                      <span className="font-display text-ink-900 text-4xl font-extrabold tabular-nums">
                        ${price}
                      </span>
                      <span className="text-ink-400 text-sm font-medium">
                        / mo
                      </span>
                    </p>
                  )}
                  <p className="text-ink-400 mt-1 text-xs">{plan.unit}</p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span
                        className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] ${
                          plan.featured
                            ? "bg-brand-600 text-white"
                            : "bg-mint-500/15 text-mint-600"
                        }`}
                      >
                        <CheckOutlined />
                      </span>
                      <span className="text-ink-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <RouteButton
                  className="mt-8"
                  block
                  size="large"
                  href="/contact"
                  type={plan.featured ? "primary" : "default"}
                >
                  {plan.cta}
                </RouteButton>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
