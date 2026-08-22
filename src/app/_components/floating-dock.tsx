"use client";

import { BackToTop } from "@/app/_components/back-to-top";
import { WhatsAppFloat } from "@/app/_components/whatsapp-float";
import cn from "classnames";
import { usePathname } from "next/navigation";

/** Pages with a bottom sticky conversion bar — lift the dock so it stays clear. */
const RAISED_PATH_PREFIXES = ["/survival-kit", "/services"];

/**
 * Bottom-right chrome: persistent WhatsApp contact, with Back to top stacked above it on scroll.
 */
export function FloatingDock() {
  const pathname = usePathname();
  const raised = RAISED_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  return (
    <div
      className={cn(
        "fixed right-5 z-50",
        raised
          ? "bottom-[max(6.5rem,calc(env(safe-area-inset-bottom)+5.5rem))]"
          : "bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))]",
      )}
    >
      <div className="relative">
        <div className="absolute bottom-full right-0 mb-3">
          <BackToTop />
        </div>
        <WhatsAppFloat />
      </div>
    </div>
  );
}
