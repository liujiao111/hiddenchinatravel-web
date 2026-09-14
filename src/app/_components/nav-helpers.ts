import type { Dictionary } from "@/i18n/get-dictionary";
import { guidesNav, type NavId, type NavItem } from "@/lib/navigation";
import { isArticlePath } from "@/lib/routes";
import cn from "classnames";

export type NavLabels = Dictionary["nav"];

export function labelFor(id: NavId, labels: NavLabels): string {
  if (id === "home") return "Home";
  const key = id as keyof NavLabels;
  return labels[key] ?? id;
}

export function menuAriaFor(item: NavItem, labels: NavLabels): string {
  if (item.id === "guides") return labels.guidesMenuAria;
  if (item.id === "tools") return labels.toolsMenuAria;
  if (item.id === "destinations") return labels.destinationsMenuAria;
  return labelFor(item.id, labels);
}

/** Index row inside a dropdown — “All destinations”, not the trigger label again. */
export function overviewLabelFor(item: NavItem, labels: NavLabels): string {
  if (item.id === "destinations") return labels.destinationsAll;
  if (item.id === "guides") return labels.guidesAll;
  if (item.id === "tools") return labels.toolsAll;
  return labelFor(item.id, labels);
}

export function hintFor(id: NavId, labels: NavLabels): string | undefined {
  if (id === "destYunnan") return labels.destYunnanHint;
  return undefined;
}

function isHubPath(pathname: string) {
  return guidesNav.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
}

export function isItemActive(item: NavItem, pathname: string) {
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
    return true;
  }
  if (
    item.href === "/survival-guides" &&
    (isArticlePath(pathname) || isHubPath(pathname))
  ) {
    return true;
  }
  if (item.children?.some((child) => isItemActive(child, pathname))) {
    return true;
  }
  return false;
}

/** Shared weight/family so dropdown triggers match `<Link>` items. */
export function navChromeClass({ overlay }: { overlay: boolean }) {
  return cn(
    "font-sans text-sm font-normal tracking-wide transition-colors duration-300",
    overlay
      ? "text-white/90 hover:text-white"
      : "text-[var(--brand-ink)] hover:text-black",
  );
}
