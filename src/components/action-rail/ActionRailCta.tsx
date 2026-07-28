import Link from "next/link";
import type { ReactNode } from "react";
import cn from "classnames";
import { ExternalIcon } from "./icons";
import type { ActionRailCta as ActionRailCtaType } from "./types";

type Props = {
  cta: ActionRailCtaType;
  onNavigate?: () => void;
};

export function ActionRailCtaButton({ cta, onNavigate }: Props) {
  const className = cn(
    "action-rail-cta inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-sm px-4 py-2.5 text-center text-sm font-light tracking-wide transition-colors duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-rail-accent)]",
    cta.variant === "primary" &&
      "bg-[var(--action-rail-accent)] text-[var(--brand-on)] hover:bg-[var(--action-rail-accent-hover)]",
    cta.variant === "secondary" &&
      "border border-[var(--action-rail-border)] bg-transparent text-[var(--action-rail-ink)] hover:bg-[var(--action-rail-muted)]",
    cta.variant === "affiliate" &&
      "text-[var(--action-rail-ink-muted)] underline-offset-4 hover:text-[var(--action-rail-ink)] hover:underline",
  );

  const content: ReactNode = (
    <>
      <span>{cta.label}</span>
      {cta.variant === "affiliate" ? <ExternalIcon /> : null}
    </>
  );

  if (cta.external) {
    return (
      <a
        href={cta.href}
        className={className}
        data-cta={cta.trackingId}
        target="_blank"
        rel="sponsored noopener noreferrer"
        onClick={onNavigate}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={cta.href}
      className={className}
      data-cta={cta.trackingId}
      onClick={onNavigate}
    >
      {content}
    </Link>
  );
}
