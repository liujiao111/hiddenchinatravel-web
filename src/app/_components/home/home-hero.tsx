import { HomeHeroClient } from "@/app/_components/home/home-hero-client";
import { getSearchIndex } from "@/lib/search/build-index";

export async function HomeHero() {
  const searchItems = getSearchIndex();
  return <HomeHeroClient searchItems={searchItems} />;
}
