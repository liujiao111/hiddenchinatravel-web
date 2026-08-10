import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { getAllHubs } from "@/lib/hubs/api";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";
import {
  countryPagePath,
  getPhase1CountryEditorials,
} from "@/lib/visa-checker/country-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts().map((post) => ({
    url: absoluteCanonicalUrl(`/${post.slug}`),
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const hubs = getAllHubs().map((hub) => ({
    url: absoluteCanonicalUrl(hub.canonical || `/${hub.slug}`),
    lastModified: hub.dateModified ? new Date(hub.dateModified) : now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const visaCountryPages: MetadataRoute.Sitemap =
    getPhase1CountryEditorials().map((country) => ({
      url: absoluteCanonicalUrl(countryPagePath(country.slug)),
      lastModified: country.lastReviewed
        ? new Date(country.lastReviewed)
        : now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteCanonicalUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteCanonicalUrl("/survival-guides"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteCanonicalUrl("/china-destinations"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteCanonicalUrl("/survival-kit"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteCanonicalUrl("/tools"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteCanonicalUrl("/china-visa-checker"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteCanonicalUrl("/china-currency-converter"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: absoluteCanonicalUrl("/china-itinerary-planner"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteCanonicalUrl("/services"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteCanonicalUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteCanonicalUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteCanonicalUrl("/privacy-policy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteCanonicalUrl("/terms-of-service"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticRoutes, ...visaCountryPages, ...hubs, ...posts];
}
