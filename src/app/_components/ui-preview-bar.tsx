import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";

export type PreviewSurface = "live" | "scandinavian" | "natural-organic";

type Props = {
  current: PreviewSurface;
  copy: Dictionary["previewBar"];
};

/**
 * First-version style switcher:
 * "UI preview — Scandinavian minimal · Natural Organic · Live home"
 */
export function UiPreviewBar({ current, copy }: Props) {
  const items: { id: PreviewSurface; href: string; label: string }[] = [
    {
      id: "scandinavian",
      href: "/preview/scandinavian",
      label: copy.scandinavian,
    },
    {
      id: "natural-organic",
      href: "/preview/natural-organic",
      label: copy.naturalOrganic,
    },
    { id: "live", href: "/", label: copy.live },
  ];

  return (
    <div className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] px-6 py-2.5 text-center text-xs tracking-wide text-[var(--brand-ink-muted)] md:px-12 lg:px-20">
      {copy.label} —{" "}
      {items.map((item, index) => (
        <span key={item.id}>
          {index > 0 ? " · " : null}
          {item.id === current ? (
            <span className="text-[var(--brand-ink)]">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="underline underline-offset-4 transition-colors duration-500 hover:text-[var(--brand-ink)]"
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
