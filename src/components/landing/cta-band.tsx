"use client";

import { Button, Input } from "antd";
import { HiArrowRight } from "react-icons/hi2";

import { Reveal } from "@/components/ui/reveal";

export function CtaBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="shell">
        <div className="bg-ink-950 relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="bg-brand-600/40 absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[120px]" />
            <div className="bg-mint-500/20 absolute -right-16 -bottom-24 h-72 w-72 rounded-full blur-[110px]" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight font-extrabold text-balance text-white sm:text-4xl">
                Give your team back the last week of the month
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-ink-300 mx-auto mt-4 max-w-xl text-base text-pretty">
                Start a 14-day trial with your real payroll data. If the numbers
                do not match your current system to the cent, we will tell you why.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <form
                className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  size="large"
                  type="email"
                  placeholder="Work email"
                  aria-label="Work email"
                />
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  icon={<HiArrowRight />}
                  iconPlacement="end"
                >
                  Get started
                </Button>
              </form>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="text-ink-500 mt-4 text-xs">
                14-day trial · Free data migration · No credit card
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
