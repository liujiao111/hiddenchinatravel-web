import { CustomItineraryLanding } from "@/app/services/custom-itinerary/_components/custom-itinerary-landing";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { coreService, servicesPageMeta } from "@/lib/services/content";
import type { Metadata } from "next";

const pageTitle =
  "Custom China Itinerary Planning — Local PDF from $99 Early Bird";
const pageDescription =
  "1-on-1 custom China itinerary PDF for independent travelers. Local partner in Kunming — not a tour agency. A labeled sample route, clear USD fees, Survival Kit included.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [...servicesPageMeta.keywords],
  alternates: { canonical: "/services/custom-itinerary" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/services/custom-itinerary",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom China itinerary planning",
    url: `${SITE_URL}/services/custom-itinerary`,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: "CN",
    description: pageDescription,
    offers: coreService.tiers.map((tier) => ({
      "@type": "Offer",
      name: `${tier.daysLabel} early bird`,
      price: String(tier.earlyBird),
      priceCurrency: coreService.currency,
      priceValidUntil: coreService.earlyBirdDeadline,
      url: `${SITE_URL}/services/custom-itinerary`,
    })),
  };
}

export default function CustomItineraryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <CustomItineraryLanding />
    </main>
  );
}
