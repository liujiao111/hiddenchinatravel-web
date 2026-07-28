import Link from "next/link";
import cn from "classnames";
import type { CSSProperties, ReactNode } from "react";

/** Accent cycles like StyleKit destination cards (palm / teal / coral). */
export type TropicalAccent = "teal" | "palm" | "coral";

const ACCENT_HEX: Record<TropicalAccent, string> = {
  teal: "#00897b",
  palm: "#4caf50",
  coral: "#ff6f61",
};

type Props = {
  label: string;
  title?: ReactNode;
  children: ReactNode;
  /** Coral accent on footer left (price / meta) — StyleKit uses #ff6f61 */
  footerMeta?: ReactNode;
  /** Pill CTA label on footer right */
  footerCta?: string;
  href?: string;
  className?: string;
  accent?: TropicalAccent;
  /** Use for quote cards without a CTA */
  as?: "article" | "blockquote" | "div";
};

function CardDots() {
  return (
    <span className="surface-card-dots" aria-hidden>
      <span />
      <span />
      <span />
    </span>
  );
}

export function TropicalCard({
  label,
  title,
  children,
  footerMeta,
  footerCta,
  href,
  className,
  accent = "teal",
  as = "article",
}: Props) {
  const Tag = as;
  const showFooter = footerMeta != null || footerCta != null;
  const accentHex = ACCENT_HEX[accent];
  const style = { "--card-accent": accentHex } as CSSProperties;

  const inner = (
    <>
      <div className="surface-card-bar" aria-hidden />
      <div className="mb-5 mt-1 flex items-center gap-1.5">
        <CardDots />
        <span className="surface-card-label">{label}</span>
      </div>
      {title != null ? (
        <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight text-[var(--brand-cta)] transition-colors duration-300 group-hover:text-[var(--brand-coral)]">
          {title}
        </h3>
      ) : null}
      <div
        className={cn(
          "flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]",
          showFooter && "mb-6",
        )}
      >
        {children}
      </div>
      {showFooter ? (
        <div className="surface-card-footer">
          {footerMeta != null ? (
            <span className="min-w-0 flex-1 text-sm font-bold leading-snug text-[var(--brand-coral)]">
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
    "surface-card surface-card-lift group cursor-pointer p-7",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={shellClass} style={style}>
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

/** Cycle accents across a list — matches StyleKit 3-card demo rhythm. */
export function tropicalAccentAt(index: number): TropicalAccent {
  const order: TropicalAccent[] = ["palm", "teal", "coral"];
  return order[index % order.length];
}
