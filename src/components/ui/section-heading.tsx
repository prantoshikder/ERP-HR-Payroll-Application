"use client";

import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: Props) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase ${
              isDark
                ? "border-white/15 bg-white/5 text-brand-200"
                : "border-brand-100 bg-brand-50 text-brand-700"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2
          className={`font-display mt-5 text-3xl leading-[1.15] font-bold text-balance sm:text-4xl md:text-[2.75rem] ${
            isDark ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
              isDark ? "text-ink-300" : "text-ink-500"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
