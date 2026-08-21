import {
  AFFILIATE_CLUSTER_NOTE,
  AFFILIATE_CTA_NOTE,
  AFFILIATE_LEARN_MORE_LABEL,
  TRANSPARENCY_HREF,
} from "@/lib/affiliates/disclosure";
import Link from "next/link";

type Props = {
  /** `cluster` once per page/section; `cta` on a single booking band. */
  variant?: "cluster" | "cta";
  className?: string;
};

const defaultClassName =
  "text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]";

/** Quiet, once-per-cluster affiliate note — not a per-card banner. */
export function AffiliateNote({ variant = "cluster", className }: Props) {
  const text = variant === "cta" ? AFFILIATE_CTA_NOTE : AFFILIATE_CLUSTER_NOTE;

  return (
    <p className={className ?? defaultClassName}>
      {text}{" "}
      <Link
        href={TRANSPARENCY_HREF}
        className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
      >
        {AFFILIATE_LEARN_MORE_LABEL}
      </Link>
    </p>
  );
}
