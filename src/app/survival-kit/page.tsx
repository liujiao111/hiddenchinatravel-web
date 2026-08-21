import Container from "@/app/_components/container";
import { AffiliateNote } from "@/components/affiliates/affiliate-note";
import { KitArrivalChecklist } from "@/components/survival-kit/kit-arrival-checklist";
import { KitHero } from "@/components/survival-kit/kit-hero";
import { KitPlannerCtaBand } from "@/components/survival-kit/kit-planner-cta-band";
import { KitPracticalSection } from "@/components/survival-kit/kit-practical-section";
import { KitPrepSection } from "@/components/survival-kit/kit-prep-section";
import { KitSocialProof } from "@/components/survival-kit/kit-social-proof";
import { KitStickyCta } from "@/components/survival-kit/kit-sticky-cta";
import {
  kitBookingSection,
  kitInsuranceSection,
  kitMapsSection,
  kitNetworkSection,
  kitPageMeta,
  kitPaymentSection,
  kitVisaPrepSection,
} from "@/lib/survival-kit/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: kitPageMeta.title,
  },
  description: kitPageMeta.description,
  keywords: [
    "China trip checklist",
    "China Digital Survival Kit",
    "China eSIM setup",
    "Alipay for tourists",
    "VPN for China travel",
    "China visa checker",
  ],
  alternates: {
    canonical: "/survival-kit",
  },
  openGraph: {
    title: kitPageMeta.title,
    description: kitPageMeta.description,
    type: "website",
    url: "/survival-kit",
  },
  twitter: {
    card: "summary_large_image",
    title: kitPageMeta.title,
    description: kitPageMeta.description,
  },
};

function kitJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: kitPageMeta.title,
    description: kitPageMeta.description,
    url: `${SITE_URL}/survival-kit`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

export default function SurvivalKitPage() {
  return (
    <main className="pb-24 md:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kitJsonLd()) }}
      />
      <Container>
        <div className="pt-8 md:pt-12">
          <KitHero />
          <KitPrepSection section={kitVisaPrepSection} />
          <KitPrepSection
            section={kitNetworkSection}
            note={<AffiliateNote />}
          />
          <KitPrepSection section={kitPaymentSection} />
          <KitPrepSection section={kitMapsSection} />
          <KitPrepSection
            section={kitBookingSection}
            note={<AffiliateNote variant="cta" />}
          />
          <KitPrepSection section={kitInsuranceSection} />
          <KitPracticalSection />
          <div className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] py-10 md:py-12">
            <KitPlannerCtaBand />
          </div>
          <KitArrivalChecklist />
          <KitSocialProof />
        </div>
      </Container>
      <KitStickyCta />
    </main>
  );
}
