import type { Post } from "@/interfaces/post";
import { resolveArticleHub } from "@/lib/content/article-related";
import { getAllHubs } from "@/lib/hubs/api";
import type { Hub } from "@/lib/hubs/types";
import { guidesNav } from "@/lib/navigation";
import { pageCanonicalPath } from "@/lib/seo/canonical";

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
