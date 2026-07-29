import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";

type Props = {
  copy: Dictionary["plannerPromo"];
};

/** Sitewide top promo — currently announcing website 2.0. */
export function PlannerPromoBar({ copy }: Props) {
  return (
    <div className="bg-[var(--brand-cta-hover)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2.5 text-center text-xs font-normal tracking-wide text-white/90 md:px-8 lg:px-12">
        <span className="min-w-0">{copy.text}</span>
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-1 font-bold text-[var(--brand-cream)] underline decoration-white/40 underline-offset-4 transition-all duration-300 hover:text-white"
        >
          {copy.cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
