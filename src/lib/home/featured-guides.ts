import { guidesNav } from "@/lib/navigation";
import { getAllHubs } from "@/lib/hubs/api";
import type { Hub } from "@/lib/hubs/types";

export type HomeGuideCard = {
  title: string;
  href: string;
  excerpt: string;
  date?: string;
};

export type HomeHubTab = {
  id: string;
  label: string;
  href: string;
  articles: HomeGuideCard[];
};

/** Short tab labels aligned with nav hub order. */
const HUB_TAB_LABELS: Record<string, string> = {
  "payments-in-china": "Payments",
  "internet-in-china": "Internet",
  "maps-navigation-in-china": "Maps",
  "transport-in-china": "Transport",
  "food-delivery-in-china": "Food",
  "hotels-in-china": "Hotels",
  "attraction-tickets-in-china": "Tickets",
  "china-travel-essentials": "Essentials",
  "china-itinerary-planning": "Itinerary",
};

function publishedArticlesFromHub(hub: Hub): HomeGuideCard[] {
  const seen = new Set<string>();
  const articles: HomeGuideCard[] = [];
  for (const sub of hub.subtopics) {
    for (const article of sub.articles) {
      if (article.status !== "published") continue;
      if (seen.has(article.href)) continue;
      seen.add(article.href);
      articles.push({
        title: article.title,
        href: article.href,
        excerpt: article.excerpt,
      });
    }
  }
  return articles;
}

/** Hub tabs for homepage guides — order follows main nav where possible. */
export function getHomeHubTabs(): HomeHubTab[] {
  const hubs = getAllHubs();
  const byCanonical = new Map(
    hubs.map((h) => [h.canonical.replace(/\/$/, "") || `/${h.slug}`, h]),
  );

  const ordered: Hub[] = [];
  const used = new Set<string>();

  for (const nav of guidesNav) {
    const key = nav.href.replace(/\/$/, "");
    const hub = byCanonical.get(key);
    if (hub) {
      ordered.push(hub);
      used.add(hub.slug);
    }
  }

  for (const hub of hubs) {
    if (!used.has(hub.slug)) ordered.push(hub);
  }

  return ordered.map((hub) => ({
    id: hub.slug,
    label: HUB_TAB_LABELS[hub.slug] ?? hub.title.replace(/ for Foreigners$/i, ""),
    href: hub.canonical || `/${hub.slug}`,
    articles: publishedArticlesFromHub(hub).slice(0, 6),
  }));
}
