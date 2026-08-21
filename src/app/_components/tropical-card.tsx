import Link from "next/link";
import cn from "classnames";
import type { ReactNode } from "react";

/** Kept for call-site compat; accents no longer cycle. */
export type TropicalAccent = "teal" | "palm" | "coral";

type Props = {
  label?: string;
  title?: ReactNode;
  children?: ReactNode;
  /** Optional top media (cover image, poster). */
  media?: ReactNode;
  /** Footer left meta (date / duration) */
  footerMeta?: ReactNode;
  /** Text CTA (whole card is already clickable when href is set) */
  footerCta?: string;
  href?: string;
  className?: string;
  onNavigate?: () => void;
  titleLines?: number;
  bodyLines?: number;
  /** @deprecated Ignored */
  accent?: TropicalAccent;
  as?: "article" | "blockquote" | "div";
  /**
   * `itinerary` — Evaneos trip card (border, 5:4 cover, sans title).
   * `destination` — Evaneos destination tile (tall photo + serif name).
   */
  variant?: "itinerary" | "destination";
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
  variant = "itinerary",
}: Props) {
  const Tag = as;
  const isDestination = variant === "destination";
  const showFooter = !isDestination && (footerMeta != null || footerCta != null);
  const hasBodyCopy = children != null && children !== false;

  const titleClass = isDestination
    ? cn(
        "px-2 pt-2 font-serif text-xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-2xl",
        lineClampClass(titleLines, 2),
      )
    : cn(
        "mb-2 font-sans text-base font-bold leading-snug text-[var(--brand-ink)]",
        lineClampClass(titleLines, 2),
      );

  const body = (
    <>
      {label && !isDestination ? (
        <p className="surface-card-label mb-2">{label}</p>
      ) : null}
      {title != null ? <h3 className={titleClass}>{title}</h3> : null}
      {hasBodyCopy ? (
        <div
          className={cn(
            "text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]",
            isDestination
              ? cn("px-2 pt-1", lineClampClass(bodyLines, 2))
              : cn("flex-1", lineClampClass(bodyLines, 2), showFooter && "mb-3"),
          )}
        >
          {children}
        </div>
      ) : null}
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
            <span className="surface-card-cta">
              {footerCta}
              <span aria-hidden className="ml-1">
                →
              </span>
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );

  const mediaBlock = media ? (
    <div className="surface-card-media">{media}</div>
  ) : null;

  const inner = isDestination ? (
    <>
      {mediaBlock}
      {body}
    </>
  ) : (
    <>
      {mediaBlock}
      <div
        className={cn(
          "flex flex-1 flex-col",
          mediaBlock ? "p-4" : "p-4 md:p-5",
        )}
      >
        {body}
      </div>
    </>
  );

  const shellClass = cn(
    "group cursor-pointer",
    isDestination ? "surface-card-destination" : "surface-card",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={shellClass} onClick={onNavigate}>
        {inner}
      </Link>
    );
  }

  return <Tag className={shellClass}>{inner}</Tag>;
}

/** @deprecated Accents no longer cycle. */
export function tropicalAccentAt(_index: number): TropicalAccent {
  return "teal";
}
