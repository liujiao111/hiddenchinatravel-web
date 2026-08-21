import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { SITE_LOGO_PATH, SITE_NAME } from "@/lib/constants";

type Props = {
  href?: string;
  className?: string;
  /** Compact header mark vs larger footer/home mark */
  size?: "sm" | "md" | "lg";
  /** Show wordmark text beside the logo mark */
  showWordmark?: boolean;
  /** Slightly tighter wordmark in the header so the full brand still fits */
  compactOnMobile?: boolean;
  /** White wordmark for teal header chrome; black wordmark for the light header */
  tone?: "default" | "onTeal" | "onWhite";
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-9 w-9", text: "text-lg md:text-xl" },
  md: { box: "h-11 w-11", text: "text-xl md:text-2xl" },
  lg: { box: "h-14 w-14", text: "text-2xl md:text-3xl" },
} as const;

export function SiteLogo({
  href = "/",
  className,
  size = "md",
  showWordmark = true,
  compactOnMobile = false,
  tone = "default",
  priority = false,
}: Props) {
  const s = sizes[size];
  const onTeal = tone === "onTeal";
  const onWhite = tone === "onWhite";

  const content = (
    <>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-2xl border",
          onTeal
            ? "border-white/35 bg-white/10"
            : onWhite
              ? "border-neutral-200 bg-white"
              : "border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]",
          s.box,
        )}
      >
        <Image
          src={SITE_LOGO_PATH}
          alt={`${SITE_NAME} logo`}
          fill
          className="object-cover"
          sizes="56px"
          priority={priority}
        />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-bold tracking-wide leading-tight whitespace-nowrap",
            onTeal
              ? "text-white"
              : onWhite
                ? "text-neutral-900"
                : "text-[var(--brand-ink)]",
            compactOnMobile ? "text-base sm:text-lg md:text-xl" : s.text,
          )}
        >
          {SITE_NAME}
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return (
      <span className={cn("inline-flex items-center gap-3", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 hover:opacity-90 transition-opacity duration-200 shrink-0",
        className,
      )}
    >
      {content}
    </Link>
  );
}
