"use client";

import DateFormatter from "@/app/_components/date-formatter";
import {
  TropicalCard,
  tropicalAccentAt,
} from "@/app/_components/tropical-card";
import type { HomeGuideCard, HomeHubTab } from "@/lib/home/featured-guides";
import cn from "classnames";
import Link from "next/link";
import { useMemo, useState } from "react";

const FEATURED_TAB = "featured";

type Props = {
  featured: HomeGuideCard[];
  hubs: HomeHubTab[];
};

export function HomeFeaturedGuidesClient({ featured, hubs }: Props) {
  const [active, setActive] = useState(FEATURED_TAB);

  const activeHub = useMemo(
    () => hubs.find((h) => h.id === active) ?? null,
    [active, hubs],
  );

  const items = active === FEATURED_TAB ? featured : (activeHub?.articles ?? []);

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <p className="mb-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
          Start with featured reads, or switch tabs to browse by topic hub.
        </p>
        <div
          role="tablist"
          aria-label="Browse guides by hub"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <TabButton
            id={FEATURED_TAB}
            label="Featured"
            selected={active === FEATURED_TAB}
            onSelect={setActive}
          />
          {hubs.map((hub) => (
            <TabButton
              key={hub.id}
              id={hub.id}
              label={hub.label}
              selected={active === hub.id}
              onSelect={setActive}
            />
          ))}
        </div>
      </div>

      {activeHub ? (
        <div className="mb-5 flex flex-col gap-2 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between md:mb-6">
          <p className="text-sm font-normal text-[var(--brand-ink-muted)]">
            Browsing the{" "}
            <span className="font-bold text-[var(--brand-cta)]">
              {activeHub.label}
            </span>{" "}
            hub — open the full hub for the complete guide map.
          </p>
          <Link
            href={activeHub.href}
            className="inline-flex shrink-0 text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
          >
            Open {activeHub.label} hub →
          </Link>
        </div>
      ) : null}

      {items.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[#00897b]/25 bg-white/70 px-4 py-8 text-center text-sm text-[var(--brand-ink-muted)]">
          No published guides in this hub yet.{" "}
          {activeHub ? (
            <Link
              href={activeHub.href}
              className="font-bold text-[var(--brand-coral)] underline"
            >
              Visit the hub page →
            </Link>
          ) : null}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {items.map((item, index) => (
            <li key={item.href}>
              <TropicalCard
                href={item.href}
                accent={tropicalAccentAt(index)}
                label="Guide"
                title={item.title}
                footerMeta={
                  item.date ? (
                    <DateFormatter dateString={item.date} />
                  ) : (
                    "Survival guide"
                  )
                }
                footerCta="Read guide"
              >
                <p>{item.excerpt}</p>
              </TropicalCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TabButton({
  id,
  label,
  selected,
  onSelect,
}: {
  id: string;
  label: string;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      id={`guides-tab-${id}`}
      onClick={() => onSelect(id)}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center rounded-full border-2 px-4 py-2 text-sm font-bold transition-all duration-300 active:scale-[0.98]",
        selected
          ? "border-[var(--brand-cta)] bg-[var(--brand-cta)] text-white shadow-[0_4px_16px_rgba(0,137,123,0.28)]"
          : "border-[#00897b]/20 bg-white text-[var(--brand-cta)] hover:border-[var(--brand-cta)] hover:bg-[#00897b]/8",
      )}
    >
      {label}
    </button>
  );
}
