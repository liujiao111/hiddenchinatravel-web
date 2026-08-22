import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { PageHeading } from "@/app/_components/page-heading";
import { getAllPosts } from "@/lib/api";
import { SITE_LAST_UPDATED } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = "China Travel Guides for Independent Visitors";
const pageDescription =
  "Practical China prep for independent travelers — visas, payments, internet, and maps — plus how to plan an itinerary without a tour."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/survival-guides",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/survival-guides",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function SurvivalGuidesPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Container>
        <PageHeading
          title="China travel guides for independent visitors"
          description="Long-form prep for visas, apps, trains, and daily systems — and a hub for planning an independent itinerary before you polish day-by-day sightseeing."
          lastUpdated={SITE_LAST_UPDATED}
        />
        {posts.length > 0 ? (
          <MoreStories posts={posts} />
        ) : (
          <p className="mb-32 text-base font-light text-[var(--brand-ink-muted)] md:text-lg">
            New guides are on the way. Check back soon.
          </p>
        )}
      </Container>
    </main>
  );
}
