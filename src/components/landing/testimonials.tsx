"use client";

import { StarFilled } from "@ant-design/icons";

import { RevealGroup } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink-50/60 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Customers"
          title="The month-end nobody dreads anymore"
        />

        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.09}>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-ink-200/70 hover:shadow-lift flex h-full flex-col rounded-2xl border bg-white p-7 transition-shadow"
            >
              <div className="text-mint-500 flex gap-0.5 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilled key={i} />
                ))}
              </div>

              <blockquote className="text-ink-700 mt-5 flex-1 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="border-ink-100 mt-6 flex items-center gap-3 border-t pt-5">
                <span className="from-brand-500 to-brand-700 grid h-10 w-10 place-items-center rounded-full bg-linear-to-br text-xs font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-ink-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-ink-400 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
