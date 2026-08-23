import type { DestinationNavItem } from "@/lib/destinations/types";
import Link from "next/link";

type Props = {
  items: DestinationNavItem[];
};

export function DestinationStickyNav({ items }: Props) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-14 z-30 border-b border-[color-mix(in_srgb,var(--brand-cta)_14%,transparent)] bg-[color-mix(in_srgb,var(--brand-cream)_92%,white)] backdrop-blur-sm md:top-16"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] md:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-2 text-xs font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-300 hover:bg-white hover:text-[var(--brand-cta)] md:px-4 md:text-sm"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
