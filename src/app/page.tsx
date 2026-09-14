import { HomeWhyExists } from "@/app/_components/home/home-why-exists";
import { HomeDestinations } from "@/app/_components/home/home-destinations";
import { HomeFaqSection } from "@/app/_components/home/home-faq-section";
import { HomeFeaturedGuides } from "@/app/_components/home/home-featured-guides";
import { HomeFeaturedJourneys } from "@/app/_components/home/home-featured-journeys";
import { HomeFinalCta } from "@/app/_components/home/home-final-cta";
import { HomeHero } from "@/app/_components/home/home-hero";
import { HomeMeetJoy } from "@/app/_components/home/home-meet-joy";
import { HomeSurvivalKit } from "@/app/_components/home/home-survival-kit";
import { HomeWhyUs } from "@/app/_components/home/home-why-us";
import { getAllPosts } from "@/lib/api";
import {
  HOME_OG_IMAGE_URL,
  SITE_FOUNDER_NAME,
  SITE_FOUNDER_PICTURE,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
  socialLinks,
} from "@/lib/constants";
import type { Metadata } from "next";

/** Keep homepage from sitting on a multi-day CDN HIT after CTA deploys. */
export const revalidate = 300;

const pageTitle =
  "Yunnan Private Tours & China Travel Guides | Hidden China Travel";
const pageDescription =
  "Discover private Yunnan journeys, practical China travel guides, local support, and personalized help for first-time visitors to China.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/",
    images: [{ url: HOME_OG_IMAGE_URL, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [HOME_OG_IMAGE_URL],
  },
};

const founderEntityId = `${SITE_URL}/about#founder`;

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: pageDescription,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${SITE_LOGO_PATH}`,
      founder: {
        "@id": founderEntityId,
      },
      sameAs: socialLinks.map((link) => link.href),
    },
    {
      "@type": "Person",
      "@id": founderEntityId,
      name: SITE_FOUNDER_NAME,
      jobTitle: "Founder",
      image: `${SITE_URL}${SITE_FOUNDER_PICTURE}`,
      worksFor: {
        "@id": `${SITE_URL}/#organization`,
      },
      url: founderEntityId,
    },
  ],
};

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomeHero />
      <HomeFeaturedJourneys />
      <HomeWhyExists />
      <HomeMeetJoy />
      <HomeWhyUs />
      <HomeSurvivalKit />
      <HomeFeaturedGuides posts={allPosts} />
      <HomeDestinations variant="home" />
      <HomeFaqSection />
      <HomeFinalCta />
    </main>
  );
}
