import { HomeDestinations } from "@/app/_components/home/home-destinations";
import { HomeFaqSection } from "@/app/_components/home/home-faq-section";
import { HomeFeaturedGuides } from "@/app/_components/home/home-featured-guides";
import { HomeGettingStarted } from "@/app/_components/home/home-getting-started";
import { HomeHero } from "@/app/_components/home/home-hero";
import { HomeSurvivalKit } from "@/app/_components/home/home-survival-kit";
import { HomeWhyUs } from "@/app/_components/home/home-why-us";
import { ItineraryPlannerSection } from "@/app/_components/itinerary-planner/itinerary-planner-section";
import { getAllPosts } from "@/lib/api";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle =
  "Your Local Partner for Independent China Travel (Visa, Alipay & Prep)";
const pageDescription =
  "Hidden China Travel is your local partner for independent China travel — 1:1 itinerary planning, Survival Kit prep for payments, eSIM, VPN and visas, plus optional on-trip help during business hours.";

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
      <HomeWhyUs />
      <HomeGettingStarted />
      <ItineraryPlannerSection source="home" deferForm />
      <HomeFeaturedGuides posts={allPosts} />
      <HomeDestinations variant="home" />
      <HomeFaqSection />
      <HomeSurvivalKit />
    </main>
  );
}
