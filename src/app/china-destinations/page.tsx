import Container from "@/app/_components/container";
import { HomeDestinations } from "@/app/_components/home/home-destinations";
import { PageHeading } from "@/app/_components/page-heading";
import { SITE_LAST_UPDATED } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "China Destinations for First-Time Visitors";
const pageDescription =
  "Browse practical first-base cities in China — Beijing, Shanghai, Xi’an, Chengdu, Kunming, and more — then plan your route.";

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
          description="These cities work well as first bases for independent travelers. Use each card to open the itinerary planner and sketch a route — deeper city guides will follow."
          lastUpdated={SITE_LAST_UPDATED}
        />
      </Container>

      <HomeDestinations variant="hub" />

      <Container>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] py-16 md:flex-row md:items-center md:py-20">
          <p className="max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            Need setup guides before you pick cities? Browse payments, internet,
            maps, and more.
          </p>
          <Link
            href="/survival-guides"
            className="btn-brand-outline shrink-0 px-6 py-3 text-sm"
          >
            Browse survival guides
          </Link>
        </div>
      </Container>
    </main>
  );
}
