import { ServicesSection } from "@/app/_components/services/services-section";
import { ServicesStickyCta } from "@/app/_components/services/services-sticky-cta";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import {
  coreService,
  secondaryServices,
  servicesFaqs,
  servicesPageMeta,
} from "@/lib/services/content";
import { onTripHelpProduct } from "@/lib/services/differentiator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: servicesPageMeta.title,
  },
  description: servicesPageMeta.description,
  keywords: [...servicesPageMeta.keywords],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: servicesPageMeta.title,
    description: servicesPageMeta.description,
    type: "website",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: servicesPageMeta.title,
    description: servicesPageMeta.description,
  },
};

function buildJsonLd() {
  const services = [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services#custom-itinerary`,
      name: "Custom China itinerary planning",
      description: coreService.body,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: "CN",
      offers: coreService.tiers.map((tier) => ({
        "@type": "Offer",
        name: `${tier.daysLabel} early bird`,
        price: String(tier.earlyBird),
        priceCurrency: coreService.currency,
        priceValidUntil: coreService.earlyBirdDeadline,
        url: `${SITE_URL}${coreService.cta.href.split("#")[0]}`,
      })),
    },
    ...secondaryServices.map((s) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services#${s.id}`,
      name: s.title,
      description: s.description,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      offers: {
        "@type": "Offer",
        price: String(s.offerPrice),
        priceCurrency: s.priceCurrency ?? "USD",
        description: s.priceLabel,
        url:
          s.ctaAction === "direct-purchase"
            ? `${SITE_URL}${s.ctaTarget}`
            : `${SITE_URL}/services${s.ctaTarget}`,
      },
    })),
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services#differentiator`,
      name: onTripHelpProduct.title,
      description: onTripHelpProduct.description,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      offers: {
        "@type": "Offer",
        price: String(onTripHelpProduct.offerPrice),
        priceCurrency: onTripHelpProduct.priceCurrency,
        description: onTripHelpProduct.priceLabel,
        url: `${SITE_URL}${onTripHelpProduct.ctaTarget}`,
      },
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/services`,
        url: `${SITE_URL}/services`,
        name: servicesPageMeta.title,
        description: servicesPageMeta.description,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "FAQPage",
        mainEntity: servicesFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      ...services,
    ],
  };
}

export default function ServicesPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesSection />
      <ServicesStickyCta />
    </main>
  );
}
