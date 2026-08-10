import { SITE_URL } from "@/lib/constants";

/**
 * Normalize any path or absolute URL to a site-relative canonical path
 * without a trailing slash (except "/").
 *
 * Matches sitemap `<loc>`, App Router metadata, and indexing SOP.
 */
export function pageCanonicalPath(pathOrUrl: string): string {
  let path: string;
  if (/^https?:\/\//i.test(pathOrUrl)) {
    try {
      path = new URL(pathOrUrl).pathname || "/";
    } catch {
      path = "/";
    }
  } else {
    path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  }

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path || "/";
}

/** Absolute canonical URL for JSON-LD / absolute references. */
export function absoluteCanonicalUrl(pathOrUrl: string): string {
  const path = pageCanonicalPath(pathOrUrl);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
