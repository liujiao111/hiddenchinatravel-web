import { SITE_NAME, SITE_URL } from "@/lib/constants";
import type { RegionDestination } from "@/lib/destinations/types";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

function plainAnswer(answer: string): string {
  return answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function regionDestinationJsonLd(destination: RegionDestination) {
  const url = absoluteCanonicalUrl(destination.canonical);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: destination.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: plainAnswer(item.answer),
      },
    })),
  };

  const howTo = destination.prepare
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: destination.prepare.title,
        description: destination.prepare.intro,
        url: `${url}#prepare`,
        step: destination.prepare.steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.body,
          url: `${url}#prepare-${step.id}`,
        })),
      }
    : null;

  const place = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.metaDescription,
    url,
    touristType: "Independent travelers",
    containedInPlace: {
      "@type": "Country",
      name: "China",
    },
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "China destinations",
        item: absoluteCanonicalUrl("/china-destinations"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: destination.name,
        item: url,
      },
    ],
  };

  return [place, faq, crumbs, ...(howTo ? [howTo] : [])];
}
