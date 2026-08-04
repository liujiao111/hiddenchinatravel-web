import Link from "next/link";
import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";

/** Kept for call-site compat; cards now use a single brand teal accent. */
export type TropicalAccent = "teal" | "palm" | "coral";

type Props = {
  label: string;
  title?: ReactNode;
  children: ReactNode;
  /** Footer left meta (date / price) — muted, not competing with CTA */
  footerMeta?: ReactNode;
  /** Pill CTA label on footer right */
  footerCta?: string;
  href?: string;
  className?: string;
  /** Optional click hook when `href` is set (e.g. analytics). */
  onNavigate?: () => void;
  /** @deprecated Ignored — all cards use brand teal for consistency */
  accent?: TropicalAccent;
  /** Use for quote cards without a CTA */
  as?: "article" | "blockquote" | "div";
};

export function TropicalCard({
  label,
  title,
  children,
  footerMeta,
  footerCta,
  href,
  className,
  onNavigate,
  as = "article",
}: Props) {
  const Tag = as;
  const showFooter = footerMeta != null || footerCta != null;
  const style = { "--card-accent": "var(--brand-cta)" } as CSSProperties;

  const inner = (
    <>
      <div className="surface-card-bar" aria-hidden />
      <p className="surface-card-label mb-3">{label}</p>
      {title != null ? (
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug tracking-tight text-[var(--brand-cta)] md:text-xl">
          {title}
        </h3>
      ) : null}
      <div
        className={cn(
          "line-clamp-2 flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]",
          showFooter && "mb-5",
        )}
      >
        {children}
      </div>
      {showFooter ? (
        <div className="surface-card-footer">
          {footerMeta != null ? (
            <span className="min-w-0 flex-1 text-sm font-normal leading-snug text-[var(--brand-ink-muted)]">
              {footerMeta}
            </span>
          ) : (
            <span className="flex-1" />
          )}
          {footerCta ? (
            <span className="surface-card-cta">{footerCta}</span>
          ) : null}
        </div>
      ) : null}
    </>
  );

  const shellClass = cn(
    "surface-card surface-card-lift group cursor-pointer p-5 md:p-6",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={shellClass}
        style={style}
        onClick={onNavigate}
      >
        {inner}
      </Link>
    );
  }

  return (
    <Tag className={shellClass} style={style}>
      {inner}
    </Tag>
  );
}

/** @deprecated Accents no longer cycle — always brand teal. */
export function tropicalAccentAt(_index: number): TropicalAccent {
  return "teal";
}
