import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { Modules } from "@/components/landing/modules";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Stats } from "@/components/landing/stats";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { CtaBand } from "@/components/landing/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Modules />
      <HowItWorks />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
