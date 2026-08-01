import type { Metadata } from "next";

import { legalUpdatedAt, termsSections } from "@/data/pages";
import { PageHero } from "@/components/marketing/page-hero";
import { LegalDoc } from "@/components/marketing/legal-doc";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms covering use of the NexusHR website and service: accounts, acceptable use, data ownership, fees, availability, liability and termination.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        description="The rules that apply when you use NexusHR — what we owe you, what you agree to, and what happens if either side wants out."
        note={`Last updated: ${legalUpdatedAt}`}
      />

      <LegalDoc sections={termsSections} />
    </>
  );
}
