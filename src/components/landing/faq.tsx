"use client";

import Link from "next/link";
import { Collapse } from "antd";
import { HiPlus } from "react-icons/hi2";

import { faqs } from "@/data/landing";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions finance teams ask us first"
            description="Still unsure about something? Our solutions engineers answer within a business day."
          />
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="text-brand-600 hover:text-brand-700 mt-6 inline-flex text-sm font-semibold"
            >
              Talk to a specialist →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Collapse
            accordion
            ghost
            className="faq-collapse"
            defaultActiveKey={["0"]}
            expandIconPlacement="end"
            expandIcon={({ isActive }) => (
              <HiPlus
                className="text-ink-400"
                style={{
                  transform: `rotate(${isActive ? 135 : 0}deg)`,
                  transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            )}
            items={faqs.map((faq, i) => ({
              key: String(i),
              label: (
                <span className="text-ink-900 text-[0.95rem] font-semibold">
                  {faq.q}
                </span>
              ),
              children: (
                <p className="text-ink-500 pr-6 text-sm leading-relaxed">{faq.a}</p>
              ),
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
