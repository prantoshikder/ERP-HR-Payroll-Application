import type { Metadata } from "next";

import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { CtaBand } from "@/components/landing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { PlanMatrix } from "@/components/marketing/plan-matrix";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Per-employee pricing with no implementation fee and no per-payslip charge. Compare the Starter, Growth and Enterprise plans in full.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Priced per employee,{" "}
            <span className="text-gradient">not per module</span>
          </>
        }
        description="One number per person per month covers every module on your plan. No implementation fee, no per-payslip charge, and no new line item when you add a country."
        note="14-day trial · Free data migration · No credit card required"
      />

      <Pricing heading={false} />
      <PlanMatrix />
      <LogoCloud />
      <Faq />
      <CtaBand />
    </>
  );
}
