import { founderTrustChip } from "@/lib/about/founder-content";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  /** Compact single-line layout for tight sidebars */
  compact?: boolean;
};

export function FounderTrustChip({ className, compact = false }: Props) {
  const { name, line, href, avatar } = founderTrustChip;

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)]/60 p-3.5",
        className,
      )}
    >
      <Link
        href={href}
        className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[var(--brand-cta)]/15"
      >
        <Image
          src={avatar}
          alt={name}
          fill
          sizes="44px"
          quality={85}
          className="object-cover"
        />
      </Link>
      <div className="min-w-0">
        <p className="text-sm font-bold tracking-tight text-[var(--brand-ink)]">
          <Link
            href={href}
            className="transition-colors duration-300 hover:text-[var(--brand-cta)]"
          >
            {name}
          </Link>
        </p>
        <p
          className={cn(
            "mt-0.5 text-sm font-normal leading-snug text-[var(--brand-ink-muted)]",
            compact && "line-clamp-2",
          )}
        >
          {line}{" "}
          <Link
            href={href}
            className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
          >
            About →
          </Link>
        </p>
      </div>
    </div>
  );
}
