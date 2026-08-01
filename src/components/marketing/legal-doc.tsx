import type { LegalSection } from "@/data/pages";

/** Two-column legal page: sticky contents on the left, prose on the right. */
export function LegalDoc({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="pb-24">
      <div className="shell grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-ink-900 text-xs font-bold tracking-[0.12em] uppercase">
            On this page
          </h2>
          <ol className="mt-4 space-y-2">
            {sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-ink-500 hover:text-brand-600 flex gap-2 text-sm transition-colors"
                >
                  <span className="text-ink-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="border-ink-200/70 rounded-2xl border bg-white p-7 sm:p-10">
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className={i === 0 ? "" : "border-ink-100 mt-10 border-t pt-10"}
            >
              <h2 className="font-display text-ink-900 text-xl font-bold">
                <span className="text-ink-300 mr-2 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>

              {section.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-ink-600 mt-4 text-sm leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
