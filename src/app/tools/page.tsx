import Link from "next/link";
import Container from "@/app/_components/container";
import { PageHeading } from "@/app/_components/page-heading";
import { PlaceholderSection } from "@/app/_components/placeholder-section";
import { SITE_LAST_UPDATED } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle = "Tools";
const pageDescription =
  "Online planners and utilities for building your China itinerary.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const featuredTools = [
  {
    name: "China Itinerary Planner",
    description:
      "Share cities, days, and travel style — get a custom itinerary from a local partner. Early-bird planning from $99.",
    href: "/china-itinerary-planner",
    badge: "Available now",
    cta: "Start planning",
  },
  {
    name: "China Visa Checker",
    description:
      "Enter your passport, purpose, stay length, and port of entry to see if you may qualify for 30-day visa-free, 240-hour transit, or need a visa.",
    href: "/china-visa-checker",
    badge: "Available now",
    cta: "Open visa checker",
  },
];

const upcomingTools = [
  {
    name: "Budget estimator",
    description:
      "Rough daily spend by city tier, travel style, and group size.",
    href: "#",
  },
  {
    name: "Holiday & closure calendar",
    description:
      "See major public holidays and plan around peak crowds.",
    href: "#",
  },
];

export default function ToolsPage() {
  return (
    <main>
      <Container>
        <PageHeading
          title="Tools"
          description="Lightweight web apps to plan faster. No install required—save or share from your browser."
          lastUpdated={SITE_LAST_UPDATED}
        />
        <PlaceholderSection>
          <div className="grid gap-10 md:gap-12">
            {featuredTools.map((tool) => (
              <div
                key={tool.name}
                className="surface-card relative bg-[var(--brand-surface)] p-8 md:p-10"
              >
                <span className="absolute right-0 top-0 rounded-bl-2xl bg-[var(--brand-cta)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {tool.badge}
                </span>
                <h2 className="mb-3 mt-2 text-xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
                  {tool.name}
                </h2>
                <p className="mb-6 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="btn-brand px-8 py-3.5 text-[15px]"
                >
                  {tool.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}

            {upcomingTools.map((tool) => (
              <div
                key={tool.name}
                className="surface-card bg-[var(--brand-surface)] p-8 md:p-10"
              >
                <h2 className="mb-3 text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-3xl">
                  {tool.name}
                </h2>
                <p className="mb-6 font-light leading-relaxed text-[var(--brand-ink-muted)]">
                  {tool.description}
                </p>
                <span className="inline-block cursor-not-allowed border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] px-8 py-3 font-light tracking-wide text-[var(--brand-muted)] opacity-60">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </PlaceholderSection>
      </Container>
    </main>
  );
}
