"use client";

import type { KitQuickNavItem } from "@/lib/survival-kit/types";
import { trackEvent } from "@/lib/survival-kit/track";

type Props = {
  items: KitQuickNavItem[];
};

export function KitQuickNav({ items }: Props) {
  return (
    <nav aria-label="Survival kit sections" className="w-full">
      <p className="mb-4 text-center text-[11px] font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
        Quick start
      </p>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 sm:gap-3">
        {items.map((item, index) => (
          <li key={item.id} className="min-w-0">
            <a
              href={`#${item.id}`}
              onClick={() =>
                trackEvent("kit_anchor_click", {
                  module: item.id,
                  label: item.label,
                })
              }
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_70%,transparent)] bg-[var(--brand-soft)] px-4 py-3.5 text-sm font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--brand-cta)_40%,var(--brand-cream-border))] hover:bg-[color-mix(in_srgb,var(--brand-soft)_70%,white)] md:px-6 md:py-4"
            >
              <span className="text-[11px] tracking-wide text-[var(--brand-muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="truncate">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
