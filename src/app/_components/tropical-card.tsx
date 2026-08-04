import Link from "next/link";
import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";

/** Kept for call-site compat; cards now use a single brand teal accent. */
export type TropicalAccent = "teal" | "palm" | "coral";

type Props = {
  label: string;
  title?: ReactNode;
  children: ReactNode;
  /** Optional top media (cover image, etc.) — full-bleed under accent bar */
  media?: ReactNode;
  /** Footer left meta (date / price) — muted, not competing with CTA */
  footerMeta?: ReactNode;
  /** Pill CTA label on footer right */
  footerCta?: string;
  href?: string;
  className?: string;
  /** Optional click hook when `href` is set (e.g. analytics). */
  onNavigate?: () => void;
  /** Title line clamp (default 2). Use 0 for no clamp. */
  titleLines?: number;
  /** Body/excerpt line clamp (default 2). Use 0 for no clamp. */
  bodyLines?: number;
  /** @deprecated Ignored — all cards use brand teal for consistency */
  accent?: TropicalAccent;
  /** Use for quote cards without a CTA */
  as?: "article" | "blockquote" | "div";
};

function lineClampClass(lines: number | undefined, fallback: number): string {
  const n = lines === undefined ? fallback : lines;
  if (n <= 0) return "";
  if (n === 1) return "line-clamp-1";
  if (n === 2) return "line-clamp-2";
  if (n === 3) return "line-clamp-3";
  if (n === 4) return "line-clamp-4";
  if (n === 5) return "line-clamp-5";
  if (n === 6) return "line-clamp-6";
  return "line-clamp-3";
}

export function TropicalCard({
  label,
  title,
  children,
  media,
  footerMeta,
  footerCta,
  href,
  className,
  onNavigate,
  titleLines,
  bodyLines,
  as = "article",
}: Props) {
  const Tag = as;
  const showFooter = footerMeta != null || footerCta != null;
  const style = { "--card-accent": "var(--brand-cta)" } as CSSProperties;

  const body = (
    <>
      <p className="surface-card-label mb-3">{label}</p>
      {title != null ? (
        <h3
          className={cn(
            "mb-2 text-lg font-bold leading-snug tracking-tight text-[var(--brand-cta)] md:text-xl",
            lineClampClass(titleLines, 2),
          )}
        >
          {title}
        </h3>
      ) : null}
      <div
        className={cn(
          "flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]",
          lineClampClass(bodyLines, 2),
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

  const inner = (
    <>
      <div className="surface-card-bar" aria-hidden />
      {media}
      {media ? (
        <div className="flex flex-1 flex-col p-5 md:p-6">{body}</div>
      ) : (
        body
      )}
    </>
  );

  const shellClass = cn(
    "surface-card surface-card-lift group cursor-pointer",
    media ? "p-0" : "p-5 md:p-6",
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
