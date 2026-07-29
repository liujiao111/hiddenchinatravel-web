import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { faqItems } from "@/lib/visa-checker/faq-items";
import {
  getCountrySelectOptions,
  getPortSelectOptions,
} from "@/lib/visa-checker/load-rules";
import { SITE_LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { ConversionCtaBand } from "./_components/conversion-cta-band";
import { CountryBrowseList } from "./_components/country-browse-list";
import { FirstTripPrep } from "./_components/first-trip-prep";
import { OfficialSources } from "./_components/official-sources";
import { PolicyExplainer } from "./_components/policy-explainer";
import { ToolBreadcrumb } from "./_components/tool-breadcrumb";
import { ToolHero } from "./_components/tool-hero";
import { VisaCheckerTool } from "./_components/visa-checker-tool";
import { VisaDisclaimer } from "./_components/visa-disclaimer";
import { VisaFaq } from "./_components/visa-faq";

const pageTitle =
  "China Visa Checker 2026: Visa-Free, Transit or Tourist Visa?";
const pageDescription =
  "Check if you may qualify for China visa-free entry, 240-hour transit visa-free entry, or need a tourist visa before traveling to China.";
const pageKeywords = [
  "China visa checker",
  "China visa-free",
  "240-hour transit China",
  "China tourist visa",
];

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: "/china-visa-checker",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/china-visa-checker",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

function buildJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "China Visa Checker",
      applicationCategory: "TravelApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: pageDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tools",
          item: `${SITE_URL}/tools`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Visa Checker",
          item: `${SITE_URL}/china-visa-checker`,
        },
      ],
    },
  ];
}

export default function VisaCheckerPage() {
  const countryOptions = getCountrySelectOptions();
  const portOptions = getPortSelectOptions();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <Container>
        <ToolBreadcrumb
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Visa Checker" },
          ]}
        />
        <ToolHero
          title="China Visa Checker for Foreign Travelers"
          description="Check whether your passport may qualify for China visa-free entry, a mutual visa exemption, 240-hour transit visa-free entry, or whether you should prepare a China tourist visa before travel."
        />
        <VisaCheckerTool
          countryOptions={countryOptions}
          portOptions={portOptions}
        />
        <VisaDisclaimer />
        <CountryBrowseList />
        <PolicyExplainer />
        <FirstTripPrep />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-20 md:mb-28 items-start">
          <VisaFaq />
          <OfficialSources />
        </div>
        <ConversionCtaBand />
        <LastUpdated
          date={SITE_LAST_UPDATED}
          className="mb-20 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-6 md:mb-28"
        />
      </Container>
    </main>
  );
}
