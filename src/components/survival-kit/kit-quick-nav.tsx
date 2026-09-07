"use client";

import type { KitQuickNavItem } from "@/lib/survival-kit/types";
import { trackEvent } from "@/lib/survival-kit/track";

type Props = {
  items: KitQuickNavItem[];
};

export function KitQuickNav({ items }: Props) {
  return (
    <nav
      aria-label="Survival kit sections"
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
    >
      <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        On this page
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() =>
                trackEvent("kit_anchor_click", {
                  module: item.id,
                  label: item.label,
                })
              }
              className="inline-flex items-baseline gap-1.5 rounded-full border border-[var(--brand-border-subtle)] bg-white px-3.5 py-2 text-sm font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-300 hover:border-[var(--brand-cta)] hover:text-[var(--brand-cta)]"
            >
              <span className="text-[11px] font-normal tabular-nums text-[var(--brand-muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
