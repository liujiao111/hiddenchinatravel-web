"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import type { TocItem } from "@/lib/article-toc";

type Props = {
  items: TocItem[];
};

function useActiveHeadingId(items: TocItem[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (!items.length) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const visible = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;

        let next: string | null = null;
        let top = Number.POSITIVE_INFINITY;
        for (const item of items) {
          const entry = visible.get(item.id);
          if (!entry) continue;
          const y = entry.boundingClientRect.top;
          if (y < top) {
            top = y;
            next = item.id;
          }
        }
        if (next) setActiveId(next);
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: [0, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  return activeId;
}

function TocList({
  items,
  activeId,
  onNavigate,
  compact = false,
}: {
  items: TocItem[];
  activeId: string | null;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <ol className={cn(compact ? "space-y-0.5" : "space-y-1")}>
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              title={item.text}
              className={cn(
                "block border-l-2 py-1 pl-2.5 text-[12px] leading-snug tracking-wide transition-colors duration-200",
                compact ? "line-clamp-1" : "line-clamp-2",
                active
                  ? "border-[var(--brand-cta)] text-[var(--brand-cta)]"
                  : "border-transparent text-[var(--brand-ink-muted)] hover:border-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] hover:text-[var(--brand-ink)]",
              )}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Article TOC UI: mobile accordion (< xl) + sticky sidebar column (xl+).
 * Parent must reserve a grid column for the sidebar — never absolute-overlap body.
 */
export function ArticleToc({ items }: Props) {
  const activeId = useActiveHeadingId(items);
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <>
      <div className="xl:hidden">
        <details
          className="mb-8 rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] bg-[var(--brand-soft)] px-4 py-3"
          open={open}
          onToggle={(event) => {
            setOpen((event.target as HTMLDetailsElement).open);
          }}
        >
          <summary className="cursor-pointer list-none text-sm font-bold tracking-wide text-[var(--brand-ink)] [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              On this page
              <span
                aria-hidden
                className="text-[0.7em] text-[var(--brand-muted)]"
              >
                {open ? "▴" : "▾"}
              </span>
            </span>
          </summary>
          <nav
            aria-label="On this page"
            className="mt-3 max-h-64 overflow-y-auto pb-1"
          >
            <TocList
              items={items}
              activeId={activeId}
              onNavigate={() => setOpen(false)}
            />
          </nav>
        </details>
      </div>

      <aside className="hidden min-w-0 xl:sticky xl:top-28 xl:block xl:max-h-[calc(100vh-8rem)] xl:self-start xl:overflow-y-auto">
        <div className="border-r border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pr-4">
          <p className="mb-2.5 text-[11px] font-normal uppercase tracking-[0.16em] text-[var(--brand-warm)]">
            On this page
          </p>
          <nav aria-label="On this page">
            <TocList items={items} activeId={activeId} compact />
          </nav>
        </div>
      </aside>
    </>
  );
}
