import Container from "@/app/_components/container";
import { PageHeading } from "@/app/_components/page-heading";
import { GuideArticleGroups } from "@/app/survival-guides/_components/guide-article-groups";
import { GuideHubGrid } from "@/app/survival-guides/_components/guide-hub-grid";
import { getAllPosts } from "@/lib/api";
import { getGuideDirectory } from "@/lib/content/survival-guides-directory";
import { SITE_LAST_UPDATED } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = "China Travel Guides for Independent Visitors";
const pageDescription =
  "China prep by topic — payments, internet, trains, hotels, tickets, visa — then the long-form guides under each hub.";

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
  const { hubs, groups } = getGuideDirectory(getAllPosts());

  return (
    <main>
      <Container>
        <PageHeading
          title="China travel guides for independent visitors"
          description="Start with a topic hub — the same map as the Survival Guides menu — then open the long-form guide. Payments, SIM, trains, hotels, tickets, visa."
          lastUpdated={SITE_LAST_UPDATED}
        />
        <GuideHubGrid hubs={hubs} />
        {groups.length > 0 ? (
          <GuideArticleGroups groups={groups} />
        ) : (
          <p className="mb-32 text-base font-light text-[var(--brand-ink-muted)] md:text-lg">
            New guides are on the way. Check back soon.
          </p>
        )}
      </Container>
    </main>
  );
}
