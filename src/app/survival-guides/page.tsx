import Container from "@/app/_components/container";
import { PageHeading } from "@/app/_components/page-heading";
import { GuideArticleGroups } from "@/app/survival-guides/_components/guide-article-groups";
import { GuideHubGrid } from "@/app/survival-guides/_components/guide-hub-grid";
import { WhenToHireBand } from "@/components/cta";
import { getAllPosts } from "@/lib/api";
import {
  SURVIVAL_GUIDES_SEO,
  getGuideDirectory,
  survivalGuidesJsonLd,
} from "@/lib/content/survival-guides-directory";
import {
  HOME_OG_IMAGE_URL,
  SITE_LAST_UPDATED,
  SITE_NAME,
} from "@/lib/constants";
import type { Metadata } from "next";

const { title, description, keywords, path, h1, intro } = SURVIVAL_GUIDES_SEO;
const ogImage = { url: HOME_OG_IMAGE_URL, alt: title };

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [...keywords],
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title,
    description,
    url: path,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function SurvivalGuidesPage() {
  const { hubs, groups } = getGuideDirectory(getAllPosts());

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(survivalGuidesJsonLd(hubs, groups)),
        }}
      />
      <Container>
        <PageHeading
          title={h1}
          description={intro}
          lastUpdated={SITE_LAST_UPDATED}
        />
        <GuideHubGrid hubs={hubs} />
        {groups.length > 0 ? (
          <>
            <GuideArticleGroups groups={groups} />
            <WhenToHireBand surface="index" className="mb-24 md:mb-32" />
          </>
        ) : (
          <p className="mb-32 text-base font-light text-[var(--brand-ink-muted)] md:text-lg">
            New guides are on the way. Check back soon.
          </p>
        )}
      </Container>
    </main>
  );
}
