"use client";

import { logos } from "@/data/landing";
import { Reveal } from "@/components/ui/reveal";

export function LogoCloud() {
  const marquee = [...logos, ...logos];

  return (
    <section className="border-ink-100 border-y bg-white py-10">
      <div className="shell">
        <Reveal>
          <p className="text-ink-400 text-center text-xs font-semibold tracking-[0.18em] uppercase">
            Trusted by finance and people teams at
          </p>
        </Reveal>
      </div>

      <div className="mask-fade-x mt-7 overflow-hidden">
        <div className="marquee-track">
          {marquee.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-ink-300 hover:text-ink-500 shrink-0 px-8 text-xl font-bold tracking-tight transition-colors sm:px-12 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
