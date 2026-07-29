import type { ActionRailVisibility } from "./types";
import { isArticlePath, normalizePathname } from "@/lib/routes";

export { normalizePathname };

/** Sitewide rail: show everywhere except hide list and article pages. */
export function shouldShowActionRail(
  pathname: string,
  visibility: ActionRailVisibility,
): boolean {
  const path = normalizePathname(pathname);

  // Articles already end with EndCTA — avoid stacked conversion UI.
  if (isArticlePath(path)) return false;

  return !visibility.hiddenPathPrefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}
