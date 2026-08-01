import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  /** Buttons or links rendered under the description. */
  actions?: ReactNode;
  /** Small print under the actions — trial terms, last-updated dates. */
  note?: ReactNode;
};

/** Shared header for every sub-page, matching the landing hero's treatment. */
export function PageHero({ eyebrow, title, description, actions, note }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines mask-fade-b absolute inset-0" />
        <div className="bg-brand-300/30 absolute -top-32 -left-24 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-mint-400/20 absolute -top-20 right-0 h-[26rem] w-[26rem] rounded-full blur-[130px]" />
      </div>

      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="border-brand-100 bg-brand-50 text-brand-700 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display text-ink-900 mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-ink-500 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
              {description}
            </p>
          </Reveal>

          {actions ? (
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {actions}
              </div>
            </Reveal>
          ) : null}

          {note ? (
            <Reveal delay={0.24}>
              <p className="text-ink-400 mt-5 text-xs">{note}</p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
