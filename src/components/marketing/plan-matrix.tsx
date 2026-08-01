"use client";

import { CheckOutlined, MinusOutlined } from "@ant-design/icons";
import { Fragment } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/data/landing";
import { planMatrix } from "@/data/pages";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="bg-mint-500/15 text-mint-600 grid h-6 w-6 place-items-center rounded-full text-[10px]">
        <CheckOutlined />
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="text-ink-300 grid h-6 w-6 place-items-center text-[10px]">
        <MinusOutlined />
      </span>
    );
  }

  return <span className="text-ink-600 text-xs font-medium">{value}</span>;
}

export function PlanMatrix() {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Compare plans"
          title="What is in each plan, in full"
          description="Everything below is included at no extra charge — there is no separate module licence and no per-payslip fee."
        />

        <Reveal delay={0.1}>
          <div className="border-ink-200/70 shadow-soft mt-12 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-180 border-collapse text-left">
              <thead>
                <tr className="border-ink-200 border-b">
                  <th className="text-ink-900 px-6 py-5 text-sm font-bold">
                    Capability
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-6 py-5">
                      <span
                        className={`font-display text-sm font-bold ${
                          plan.featured ? "text-brand-600" : "text-ink-900"
                        }`}
                      >
                        {plan.name}
                      </span>
                      <span className="text-ink-400 mt-0.5 block text-[11px] font-medium">
                        {plan.monthly === null
                          ? "Custom pricing"
                          : `$${plan.yearly}/employee/mo`}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {planMatrix.map((group) => (
                  <Fragment key={group.section}>
                    <tr className="bg-ink-50/70">
                      <td
                        colSpan={4}
                        className="text-ink-500 px-6 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase"
                      >
                        {group.section}
                      </td>
                    </tr>

                    {group.rows.map((row) => (
                      <tr
                        key={`${group.section}-${row.label}`}
                        className="border-ink-100 border-b last:border-b-0"
                      >
                        <td className="text-ink-700 px-6 py-4 text-sm">
                          {row.label}
                        </td>
                        <td className="px-6 py-4">
                          <Cell value={row.starter} />
                        </td>
                        <td className="bg-brand-50/40 px-6 py-4">
                          <Cell value={row.growth} />
                        </td>
                        <td className="px-6 py-4">
                          <Cell value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
