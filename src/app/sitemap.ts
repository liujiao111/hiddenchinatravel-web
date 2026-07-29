import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { getAllHubs } from "@/lib/hubs/api";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const hubs = getAllHubs().map((hub) => ({
    url: `${SITE_URL}${hub.canonical || `/${hub.slug}`}`,
    lastModified: hub.dateModified ? new Date(hub.dateModified) : now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/survival-guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/china-destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/survival-kit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/china-visa-checker`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/china-currency-converter`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/china-itinerary-planner`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticRoutes, ...hubs, ...posts];
}
