import type { Metadata } from "next";

import { legalUpdatedAt, privacySections } from "@/data/pages";
import { PageHero } from "@/components/marketing/page-hero";
import { LegalDoc } from "@/components/marketing/legal-doc";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What personal data KormoPay collects, why we process it, who we share it with, how long we keep it and the rights you can exercise.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="What we collect, why we process it and what you can ask us to do with it. Written to be read rather than skimmed past."
        note={`Last updated: ${legalUpdatedAt}`}
      />

      <LegalDoc sections={privacySections} />
    </>
  );
}
