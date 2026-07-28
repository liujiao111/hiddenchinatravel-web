"use client";

import { useEffect, useState } from "react";
import cn from "classnames";

export type HubNavItem = {
  id: string;
  label: string;
};

type Props = {
  items: HubNavItem[];
};

export function HubQuickNav({ items }: Props) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    const els = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <>
      {/* Mobile / tablet horizontal tabs */}
      <nav
        aria-label="Hub sections"
        className="mb-10 -mx-4 overflow-x-auto px-4 lg:hidden"
      >
        <ul className="flex min-w-max gap-2 border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pb-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "inline-flex rounded-sm px-3 py-2 text-sm font-light tracking-wide transition-colors duration-300",
                  active === item.id
                    ? "bg-[var(--brand-soft)] text-[var(--brand-ink)]"
                    : "text-[var(--brand-ink-muted)] hover:text-[var(--brand-ink)]",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop sticky side TOC */}
      <nav
        aria-label="Hub sections"
        className="sticky top-28 hidden lg:block"
      >
        <p className="mb-4 text-xs font-light uppercase tracking-[0.18em] text-[var(--brand-warm)]">
          On this page
        </p>
        <ul className="space-y-1 border-l border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block border-l-2 py-1.5 pl-4 text-sm font-light tracking-wide transition-colors duration-300",
                  active === item.id
                    ? "-ml-px border-[var(--brand-cta)] text-[var(--brand-ink)]"
                    : "border-transparent text-[var(--brand-ink-muted)] hover:text-[var(--brand-ink)]",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
