import Container from "@/app/_components/container";
import { HomeDestinations } from "@/app/_components/home/home-destinations";
import { PageHeading } from "@/app/_components/page-heading";
import { SITE_LAST_UPDATED } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "China Destinations for First-Time Visitors";
const pageDescription =
  "Browse practical first-base cities in China — Beijing, Shanghai, Xi’an, Chengdu, Yunnan, and more — then plan your route.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/china-destinations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/china-destinations",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function ChinaDestinationsPage() {
  return (
    <main>
      <Container>
        <PageHeading
          title="China destinations for first-time visitors"
          description="These first bases work well for independent travelers. Yunnan is the regional loop; other cards still sketch a route in the itinerary planner."
          lastUpdated={SITE_LAST_UPDATED}
        />
      </Container>

      <HomeDestinations variant="hub" />

      <Container>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] py-16 md:flex-row md:items-center md:py-20">
          <p className="max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            Want a regional loop, not a first-city base? Start with Yunnan —
            rainforest to snow mountains, then plan days in the itinerary
            planner.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/china-itinerary-planner#plan-trip"
              className="btn-brand shrink-0 px-6 py-3 text-sm"
            >
              Plan my China trip
            </Link>
            <Link
              href="/china-destinations/yunnan"
              className="btn-brand-outline shrink-0 px-6 py-3 text-sm"
            >
              Yunnan guide
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
