import type { ActionRailVisibility } from "./types";

export function normalizePathname(pathname: string): string {
  return pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
}

/** Sitewide rail: show everywhere except explicit hide list. */
export function shouldShowActionRail(
  pathname: string,
  visibility: ActionRailVisibility,
): boolean {
  const path = normalizePathname(pathname);

  return !visibility.hiddenPathPrefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}
