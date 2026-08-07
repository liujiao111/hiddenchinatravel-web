import { getAllPosts } from "@/lib/api";
import {
  countryPagePath,
  getPhase1CountryEditorials,
} from "@/lib/visa-checker/country-pages";
import { staticSearchCatalog } from "./catalog";
import type { SearchItem } from "./types";

function normalizeHref(href: string): string {
  if (href.length > 1 && href.endsWith("/")) return href.slice(0, -1);
  return href;
}

let cachedIndex: SearchItem[] | null = null;

/** Build deduped sitewide search index (posts + static catalog + visa country pages). */
export function getSearchIndex(): SearchItem[] {
  if (cachedIndex) return cachedIndex;

  const byHref = new Map<string, SearchItem>();

  for (const item of staticSearchCatalog) {
    byHref.set(normalizeHref(item.href), item);
  }

  for (const country of getPhase1CountryEditorials()) {
    const href = countryPagePath(country.slug);
    byHref.set(href, {
      id: `visa-country-${country.slug}`,
      title: `Do ${country.demonym} need a visa for China?`,
      href,
      description: `${country.displayName} passport rules for China — visa-free, 240-hour transit, or visa required.`,
      type: "tool",
      keywords: [
        country.displayName,
        country.demonym,
        "visa",
        "visa-free",
        "china",
        country.iso2,
      ],
    });
  }

  for (const post of getAllPosts()) {
    const href = `/${post.slug}`;
    byHref.set(href, {
      id: `post-${post.slug}`,
      title: post.title,
      href,
      description: post.excerpt || "Guide from Hidden China Travel.",
      type: "article",
      keywords: [post.slug.replace(/-/g, " ")],
    });
  }

  cachedIndex = Array.from(byHref.values());
  return cachedIndex;
}
