import { getAllPosts } from "@/lib/api";
import { staticSearchCatalog } from "./catalog";
import type { SearchItem } from "./types";

function normalizeHref(href: string): string {
  if (href.length > 1 && href.endsWith("/")) return href.slice(0, -1);
  return href;
}

/** Build deduped sitewide search index (posts + static catalog). */
export function getSearchIndex(): SearchItem[] {
  const byHref = new Map<string, SearchItem>();

  for (const item of staticSearchCatalog) {
    byHref.set(normalizeHref(item.href), item);
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

  return Array.from(byHref.values());
}
