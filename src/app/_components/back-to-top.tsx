"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

/** Paths that already own a bottom sticky CTA — hide BackToTop to avoid collisions. */
const HIDDEN_PATH_PREFIXES = ["/survival-kit", "/services"];

/** Appears above the WhatsApp float after the page has been scrolled. */
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
        "flex h-11 w-11 items-center justify-center rounded-full",
        "border border-[color-mix(in_srgb,var(--brand-cream-border)_55%,transparent)] bg-white",
        "text-[var(--brand-ink)] shadow-[0_6px_18px_rgba(80,40,24,0.12)]",
        "transition-all duration-300 active:scale-[0.98]",
        "hover:border-[color-mix(in_srgb,var(--brand-cta)_28%,transparent)] hover:text-[var(--brand-cta)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-mango)] focus-visible:ring-offset-2",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-1 opacity-0",
      )}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
