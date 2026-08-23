import { yunnanDestination } from "./yunnan";
import type { RegionDestination } from "./types";

const regionDestinations: Record<string, RegionDestination> = {
  yunnan: yunnanDestination,
};

export function getRegionDestination(slug: string): RegionDestination | undefined {
  return regionDestinations[slug];
}

export function listRegionDestinationSlugs(): string[] {
  return Object.keys(regionDestinations);
}

export function isRegionDestinationPath(pathname: string): boolean {
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const match = /^\/china-destinations\/([^/]+)$/.exec(path);
  if (!match) return false;
  return match[1] in regionDestinations;
}

/** Home + region hubs that tuck the header over a photo hero. */
export function isPhotoHeroPath(pathname: string): boolean {
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return path === "/" || isRegionDestinationPath(path);
}

export type { RegionDestination } from "./types";
