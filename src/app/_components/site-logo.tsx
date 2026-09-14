import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { SITE_LOGO_PATH, SITE_NAME } from "@/lib/constants";

type Props = {
  href?: string;
  className?: string;
  /** Display size for the full horizontal brand wordmark. */
  size?: "sm" | "md" | "lg";
  /** Kept for backwards compatibility; the new logo already includes the wordmark. */
  showWordmark?: boolean;
  /** Use a narrower logo on small screens so the header keeps enough room for actions. */
  compactOnMobile?: boolean;
  /** Adds a light backing when the dark wordmark sits over a photo hero. */
  tone?: "default" | "onTeal" | "onWhite";
  /** Kept for backwards compatibility with existing call sites. */
  wrapWordmark?: boolean;
  priority?: boolean;
};

const sizes = {
  sm: "w-[11rem] md:w-[12rem]",
  md: "w-[13rem] md:w-[14rem]",
  lg: "w-[15rem] md:w-[17rem]",
} as const;

export function SiteLogo({
  href = "/",
  className,
  size = "md",
  compactOnMobile = false,
  tone = "default",
  priority = false,
}: Props) {
  const onPhoto = tone === "onTeal";

  const content = (
    <span
      className={cn(
        "relative block aspect-[5/2] shrink-0",
        sizes[size],
        compactOnMobile && "max-md:w-[7.5rem]",
        onPhoto &&
          "rounded-xl bg-white/90 px-2 py-1 shadow-sm backdrop-blur-sm",
      )}
    >
      <Image
        src={SITE_LOGO_PATH}
        alt={`${SITE_NAME} logo`}
        fill
        className="object-contain"
        sizes={
          compactOnMobile
            ? "(max-width: 767px) 120px, 192px"
            : size === "lg"
              ? "272px"
              : size === "md"
                ? "224px"
                : "192px"
        }
        priority={priority}
      />
    </span>
  );

  if (!href) {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={SITE_NAME}
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity duration-200 hover:opacity-90",
        className,
      )}
    >
      {content}
    </Link>
  );
}
