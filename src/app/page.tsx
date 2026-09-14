import { HomeWhyExists } from "@/app/_components/home/home-why-exists";
import { HomeDestinations } from "@/app/_components/home/home-destinations";
import { HomeFaqSection } from "@/app/_components/home/home-faq-section";
import { HomeFeaturedGuides } from "@/app/_components/home/home-featured-guides";
import { HomeFeaturedJourneys } from "@/app/_components/home/home-featured-journeys";
import { HomeGettingStarted } from "@/app/_components/home/home-getting-started";
import { HomeHero } from "@/app/_components/home/home-hero";
import { HomeSurvivalKit } from "@/app/_components/home/home-survival-kit";
import { HomeWhyUs } from "@/app/_components/home/home-why-us";
import { ItineraryPlannerSection } from "@/app/_components/itinerary-planner/itinerary-planner-section";
import { getAllPosts } from "@/lib/api";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

/** Keep homepage from sitting on a multi-day CDN HIT after CTA deploys. */
export const revalidate = 300;

const pageTitle =
  "Custom China Itinerary Planning for Independent Travelers | Hidden China Travel";
const pageDescription =
  "1-on-1 custom China itinerary PDF from $99 — cities, days, and pace, not a tour template. Survival Kit prep for visas, payments, and data is included. Your local partner for independent China travel.";

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

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <HomeHero />
      <HomeFeaturedJourneys />
      <HomeWhyExists />
      <HomeDestinations variant="home" />
      <HomeWhyUs />
      <HomeGettingStarted />
      <ItineraryPlannerSection source="home" deferForm />
      <HomeFeaturedGuides posts={allPosts} />
      <HomeFaqSection />
      <HomeSurvivalKit />
    </main>
  );
}
