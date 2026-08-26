import Link from "next/link";
import cn from "classnames";
import { WHEN_TO_HIRE } from "@/lib/trust/copy";

type Surface = "index" | "hub";

type Props = {
  className?: string;
  /**
   * index = already on /survival-guides (point DIY at the Kit).
   * hub = topic hub (point DIY back at the guides index).
   */
  surface?: Surface;
};

function diyForSurface(surface: Surface): { href: string; label: string } {
  if (surface === "index") {
    return { href: WHEN_TO_HIRE.kitHref, label: WHEN_TO_HIRE.kitLabel };
  }
  return { href: WHEN_TO_HIRE.diyHref, label: WHEN_TO_HIRE.allGuidesLabel };
}

/** Shared DIY vs paid closer for Survival Guides index and topic hubs. */
export function WhenToHireBand({ className, surface = "hub" }: Props) {
  const diy = diyForSurface(surface);

  return (
    <aside
      className={cn(
        "rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] p-6 md:p-8",
        className,
      )}
      aria-labelledby="when-to-hire-heading"
    >
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
        {WHEN_TO_HIRE.eyebrow}
      </p>
      <h2
        id="when-to-hire-heading"
        className="mb-3 max-w-xl text-lg font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-xl"
      >
        {WHEN_TO_HIRE.bandLead}
      </h2>
      <p className="mb-6 max-w-xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {WHEN_TO_HIRE.bandBody}
      </p>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href={diy.href}
          className="btn-brand-outline inline-flex w-full justify-center px-6 py-3.5 text-sm sm:w-auto"
        >
          {diy.label}
          <span aria-hidden>→</span>
        </Link>
        <Link
          href={WHEN_TO_HIRE.hireHref}
          className="inline-flex w-full items-center justify-center px-2 py-2 text-sm font-bold tracking-tight text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)] sm:w-auto sm:px-3"
        >
          {WHEN_TO_HIRE.hireLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </aside>
  );
}
