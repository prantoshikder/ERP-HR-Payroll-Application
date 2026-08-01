import type { Metadata } from "next";

import { contactChannels, offices } from "@/data/pages";
import { PageHero } from "@/components/marketing/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a NexusHR demo, scope a migration or start a security review. Sales, support and security contacts, plus our Dhaka, Singapore and Dubai offices.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s run your numbers{" "}
            <span className="text-gradient">before you commit</span>
          </>
        }
        description="Tell us how you pay people today and we will show you the same cycle inside NexusHR — your pay components, your tax rules, your approval chain."
        note="Replies within one business day · No sales sequence, just a person"
      />

      <section className="pb-20 sm:pb-28">
        <div className="shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.08}>
              <div className="space-y-3">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.title}
                    className="border-ink-200/70 hover:border-brand-200 rounded-2xl border bg-white p-6 transition-colors"
                  >
                    <h2 className="font-display text-ink-900 text-base font-bold">
                      {channel.title}
                    </h2>
                    <p className="text-ink-500 mt-1.5 text-sm leading-relaxed">
                      {channel.description}
                    </p>
                    <a
                      href={`mailto:${channel.email}`}
                      className="text-brand-600 hover:text-brand-700 mt-3 inline-flex text-sm font-semibold"
                    >
                      {channel.email}
                    </a>
                    <p className="text-ink-400 mt-1 text-xs">{channel.response}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="bg-ink-50/70 border-ink-200/70 rounded-2xl border p-6">
                <h2 className="text-ink-900 text-xs font-bold tracking-[0.12em] uppercase">
                  Offices
                </h2>

                <div className="mt-5 space-y-5">
                  {offices.map((office) => (
                    <div key={office.city}>
                      <p className="text-ink-900 text-sm font-semibold">
                        {office.city}
                      </p>
                      <address className="text-ink-500 mt-1 text-sm leading-relaxed not-italic">
                        {office.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
