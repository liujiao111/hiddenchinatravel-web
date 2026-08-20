import Link from "next/link";
import type { AboutLink } from "@/lib/about/content";
import cn from "classnames";

const hubMeta: Record<
  string,
  { short: string; hint: string }
> = {
  "/payments-in-china": { short: "Pay", hint: "Alipay & WeChat Pay" },
  "/internet-in-china": { short: "Net", hint: "SIM, eSIM & VPN" },
  "/maps-navigation-in-china": { short: "Maps", hint: "Navigation that works" },
  "/transport-in-china": { short: "Go", hint: "Trains, metro & apps" },
  "/food-delivery-in-china": { short: "Food", hint: "Order without a local number" },
  "/hotels-in-china": { short: "Stay", hint: "Check-in that accepts passports" },
  "/hotels-in-china-for-foreigners": {
    short: "Stay",
    hint: "Check-in that accepts passports",
  },
  "/attraction-tickets-in-china": { short: "Tickets", hint: "Book sights with a passport" },
  "/china-travel-essentials": { short: "Kit", hint: "First-trip essentials" },
  "/china-itinerary-planning": {
    short: "Plan",
    hint: "Independent itinerary pacing",
  },
  "/china-visa-checker": { short: "Visa", hint: "Visa-free & transit check" },
};

type Props = {
  links: AboutLink[];
  className?: string;
};

export function TopicHubCards({ links, className }: Props) {
  return (
    <ul
      className={cn(
        "grid !max-w-none grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3",
        className,
      )}
    >
      {links.map((link) => {
        const meta = hubMeta[link.href] ?? {
          short: link.label.slice(0, 1),
          hint: "Practical guides",
        };
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className="surface-card group flex h-full items-start gap-3 bg-[var(--brand-surface)] p-4 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-ring)]"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-xs font-bold tracking-tight text-[var(--brand-ink-muted)] transition-colors duration-500 group-hover:bg-[var(--brand-cta)] group-hover:text-[var(--brand-on)]"
              >
                {meta.short}
              </span>
              <span className="min-w-0 pt-0.5">
                <span className="block text-sm font-normal leading-snug tracking-wide text-[var(--brand-ink)] underline-offset-4 group-hover:underline">
                  {link.label}
                </span>
                <span className="mt-1 block text-xs font-normal leading-relaxed text-[var(--brand-muted)]">
                  {meta.hint}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
