import type { Post } from "@/interfaces/post";
import { resolveArticleHub } from "@/lib/content/article-related";
import { getAllHubs } from "@/lib/hubs/api";
import type { Hub } from "@/lib/hubs/types";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { guidesNav } from "@/lib/navigation";
import {
  absoluteCanonicalUrl,
  pageCanonicalPath,
} from "@/lib/seo/canonical";

/** Shared by <title>, H1, OG, and JSON-LD so SERP copy stays one intent. */
export const SURVIVAL_GUIDES_SEO = {
  path: "/survival-guides",
  title: "China Travel Guides for Foreigners (2026)",
  h1: "China travel guides for foreigners in 2026",
  description:
    "Topic hubs and long-form China travel guides for foreigners in 2026 — Alipay, eSIM and VPN, trains, hotels, attraction tickets, and visa-free entry.",
  intro:
    "Start with a topic hub — payments, internet, trains, hotels, tickets, visa — then open the long-form guide. Same map as the Survival Guides menu, written for independent visitors in 2026.",
  keywords: [
    "China travel guides",
    "China travel guides for foreigners",
    "China survival guides",
    "Alipay for foreigners",
    "China visa-free 2026",
    "eSIM China",
    "China high-speed rail",
  ],
} as const;

export type GuideDirectoryHub = {
  href: string;
  icon?: string;
  title: string;
  description: string;
  articleCount: number;
};

export type GuideDirectoryGroup = {
  href: string;
  title: string;
  posts: Post[];
};

const VISA_HUB: Pick<GuideDirectoryHub, "title" | "description"> = {
  title: "Visa & Entry",
  description:
    "Check visa-free and 240-hour transit by passport, then read the country list and what to bring.",
};

function hubByPath(hubs: Hub[]): Map<string, Hub> {
  return new Map(
    hubs.map((hub) => [
      pageCanonicalPath(hub.canonical || `/${hub.slug}`),
      hub,
    ]),
  );
}

function hubCopy(
  href: string,
  byPath: Map<string, Hub>,
): Pick<GuideDirectoryHub, "title" | "description"> {
  if (href === "/china-visa-checker") return VISA_HUB;
  const match = byPath.get(href);
  if (!match) {
    return {
      title: href.replace(/^\//, "").replace(/-/g, " "),
      description: "Practical China prep for independent travelers.",
    };
  }
  return {
    title: match.title
      .replace(/\s+for Foreigners$/i, "")
      .replace(/\s+for Independent Travelers$/i, ""),
    description: match.metaDescription || match.description,
  };
}

/** Topic hubs in nav order, plus every article grouped under its hub. */
export function getGuideDirectory(posts: Post[]): {
  hubs: GuideDirectoryHub[];
  groups: GuideDirectoryGroup[];
} {
  const byPath = hubByPath(getAllHubs());
  const grouped = new Map<string, Post[]>();
  for (const nav of guidesNav) grouped.set(nav.href, []);

  const leftover: Post[] = [];
  for (const post of posts) {
    const hub = resolveArticleHub(post.section);
    const list = hub ? grouped.get(hub.href) : undefined;
    if (list) list.push(post);
    else leftover.push(post);
  }

  const hubs: GuideDirectoryHub[] = guidesNav.map((nav) => {
    const copy = hubCopy(nav.href, byPath);
    return {
      href: nav.href,
      icon: nav.icon,
      title: copy.title,
      description: copy.description,
      articleCount: grouped.get(nav.href)?.length ?? 0,
    };
  });

  const groups: GuideDirectoryGroup[] = guidesNav
    .map((nav) => {
      const copy = hubCopy(nav.href, byPath);
      return {
        href: nav.href,
        title: copy.title,
        posts: grouped.get(nav.href) ?? [],
      };
    })
    .filter((group) => group.posts.length > 0);

  if (leftover.length) {
    groups.push({
      href: "/survival-guides",
      title: "More guides",
      posts: leftover,
    });
  }

  return { hubs, groups };
}

export function survivalGuidesJsonLd(
  hubs: GuideDirectoryHub[],
  groups: GuideDirectoryGroup[],
) {
  const url = absoluteCanonicalUrl(SURVIVAL_GUIDES_SEO.path);
  const articles = groups.flatMap((group) => group.posts);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: SURVIVAL_GUIDES_SEO.title,
        description: SURVIVAL_GUIDES_SEO.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "Thing",
          name: "China travel guides for foreigners",
        },
        hasPart: hubs.map((hub) => ({
          "@type": "WebPage",
          name: hub.title,
          url: absoluteCanonicalUrl(hub.href),
          description: hub.description,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#hubs`,
        name: "China travel topic hubs",
        numberOfItems: hubs.length,
        itemListElement: hubs.map((hub, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: hub.title,
          url: absoluteCanonicalUrl(hub.href),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#guides`,
        name: "China travel guides",
        numberOfItems: articles.length,
        itemListElement: articles.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: absoluteCanonicalUrl(`/${post.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: SURVIVAL_GUIDES_SEO.title,
            item: url,
          },
        ],
      },
    ],
  };
}
