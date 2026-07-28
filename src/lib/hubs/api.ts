import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import type { Hub } from "./types";

const hubsDirectory = join(process.cwd(), "content/hubs");

function normalizeHub(data: Record<string, unknown>, slug: string): Hub {
  const subtopics = Array.isArray(data.subtopics) ? data.subtopics : [];
  const toolCTA = Array.isArray(data.toolCTA) ? data.toolCTA : [];
  const faqs = Array.isArray(data.faqs) ? data.faqs : [];

  return {
    type: "hub",
    title: String(data.title ?? slug),
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    slug: String(data.slug ?? slug),
    metaDescription: String(data.metaDescription ?? ""),
    canonical: String(data.canonical ?? `/${slug}`),
    heroAnswer: String(data.heroAnswer ?? ""),
    description: String(data.description ?? ""),
    eyebrow: data.eyebrow ? String(data.eyebrow) : undefined,
    subtopics: subtopics as Hub["subtopics"],
    toolCTA: toolCTA as Hub["toolCTA"],
    faqs: faqs as Hub["faqs"],
    faqHeading: data.faqHeading ? String(data.faqHeading) : undefined,
    toolsHeading: data.toolsHeading ? String(data.toolsHeading) : undefined,
    toolsIntro: data.toolsIntro ? String(data.toolsIntro) : undefined,
    beforeYouArrive: data.beforeYouArrive
      ? String(data.beforeYouArrive)
      : undefined,
    beforeYouArriveHeading: data.beforeYouArriveHeading
      ? String(data.beforeYouArriveHeading)
      : undefined,
    decisionGuide: data.decisionGuide as Hub["decisionGuide"],
    mistakes: data.mistakes as Hub["mistakes"],
    relatedHubs: Array.isArray(data.relatedHubs)
      ? (data.relatedHubs as Hub["relatedHubs"])
      : undefined,
    dateModified: data.dateModified ? String(data.dateModified) : undefined,
    keywords: Array.isArray(data.keywords)
      ? data.keywords.map(String)
      : undefined,
  };
}

export function getHubSlugs(): string[] {
  if (!fs.existsSync(hubsDirectory)) return [];
  return fs
    .readdirSync(hubsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getHubBySlug(slug: string): Hub | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(hubsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return normalizeHub(data as Record<string, unknown>, realSlug);
}

export function getAllHubs(): Hub[] {
  return getHubSlugs()
    .map((slug) => getHubBySlug(slug))
    .filter((hub): hub is Hub => hub !== null);
}
