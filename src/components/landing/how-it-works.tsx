"use client";

import { RevealGroup, useInView } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/data/landing";

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="how-it-works" className="bg-ink-50/60 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          title="Live in three weeks, not three quarters"
          description="Most implementations stall on data and edge cases. Ours does not — because migration, parallel runs and rule configuration are part of the product, not a consulting invoice."
        />

        <div ref={ref} className="relative mx-auto mt-14 max-w-3xl">
          {/* progress rail */}
          <div className="bg-ink-200 absolute top-2 bottom-2 left-6.75 hidden w-px sm:block">
            <div
              className={`from-brand-600 to-mint-500 h-full w-px bg-linear-to-b ${
                inView ? "grow-down" : "scale-y-0"
              }`}
            />
          </div>

          <RevealGroup className="space-y-8" stagger={0.12}>
            {steps.map((step) => (
              <div key={step.step} className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 shrink-0">
                  <div className="font-display border-ink-200 text-brand-700 shadow-soft grid h-14 w-14 place-items-center rounded-2xl border bg-white text-sm font-extrabold">
                    {step.step}
                  </div>
                </div>

                <div className="border-ink-200/70 shadow-soft flex-1 rounded-2xl border bg-white p-6">
                  <h3 className="font-display text-ink-900 text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
