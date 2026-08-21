"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

/** Paths that already own a bottom sticky CTA — hide BackToTop to avoid collisions. */
const HIDDEN_PATH_PREFIXES = ["/survival-kit", "/services"];

/** Sitewide floating control — scrolls smoothly to the top of the page. */
export function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const suppressed = HIDDEN_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  useEffect(() => {
    if (suppressed) {
      setVisible(false);
      return;
    }

    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [suppressed]);

  if (suppressed) return null;

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full",
        "border-2 border-white/30 bg-[var(--brand-cta)] text-white",
        "shadow-[0_4px_16px_rgba(196,92,62,0.35)]",
        "transition-all duration-300 active:scale-[0.98]",
        "hover:bg-[var(--brand-cta-hover)] hover:shadow-[0_8px_24px_rgba(196,92,62,0.4)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-mango)] focus-visible:ring-offset-2",
        /* Clear ActionRail edge tab on desktop; mobile stays above ActionRail bar */
        "md:bottom-8 md:right-24",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
