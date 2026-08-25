import { HOME_OG_IMAGE_URL, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { RegionDestination } from "@/lib/destinations/types";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

function plainAnswer(answer: string): string {
  return answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function regionDestinationJsonLd(destination: RegionDestination) {
  const url = absoluteCanonicalUrl(destination.canonical);
  const imagePath = destination.ogImage ?? HOME_OG_IMAGE_URL;
  const image = imagePath.startsWith("http")
    ? imagePath
    : `${SITE_URL}${imagePath}`;
  const offerPrice = destination.offerPrice;

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

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: destination.h1,
    name: destination.seoTitle,
    description: destination.metaDescription,
    image,
    dateModified: destination.dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: url,
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${destination.name} 7-day loop`,
    itemListElement: destination.routeDays.map((day) => ({
      "@type": "ListItem",
      position: day.day,
      name: `Day ${day.day}: ${day.title}`,
      description: day.body,
    })),
  };

  const offer = offerPrice
    ? {
        "@context": "https://schema.org",
        "@type": "Offer",
        name: `${destination.name} custom itinerary PDF (6–10 days, early bird)`,
        description: destination.ctaHint,
        url: absoluteCanonicalUrl(
          destination.plannerHref ?? "/china-itinerary-planner",
        ),
        price: String(offerPrice),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }
    : null;

  return [
    place,
    article,
    itemList,
    ...(offer ? [offer] : []),
    faq,
    crumbs,
    ...(howTo ? [howTo] : []),
  ];
}
