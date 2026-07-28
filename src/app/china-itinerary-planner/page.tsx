import { ItineraryPlannerSection } from "@/app/_components/itinerary-planner/itinerary-planner-section";
import Container from "@/app/_components/container";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";

const pageTitle =
  "China Itinerary Planner: Custom Trip Plans for Independent Travelers";
const pageDescription =
  "Tell us your cities, days, and travel style — get a custom China itinerary from a local partner. Early-bird planning from $99.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "China itinerary planner",
    "China trip planner",
    "custom China itinerary",
    "China travel plan for foreigners",
  ],
  alternates: {
    canonical: "/china-itinerary-planner",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/china-itinerary-planner",
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
      name: "China Itinerary Planner",
      url: `${SITE_URL}/china-itinerary-planner`,
      applicationCategory: "TravelApplication",
      operatingSystem: "Any",
      description: pageDescription,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "99",
        priceCurrency: "USD",
        description: "Early-bird custom itinerary planning",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "China Itinerary Planner",
          item: `${SITE_URL}/china-itinerary-planner`,
        },
      ],
    },
  ];
}

export default function ChinaItineraryPlannerPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <div className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cta)] py-10 md:py-14">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">Itinerary planner</li>
            </ol>
          </nav>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Custom planning request
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            China Itinerary Planner
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-white/85 md:text-base">
            Independent travel, planned with a local partner — not a tour
            template. Share a few details and we&apos;ll draft a practical route.
          </p>
        </Container>
      </div>

      <ItineraryPlannerSection source="planner" dense />
    </main>
  );
}
