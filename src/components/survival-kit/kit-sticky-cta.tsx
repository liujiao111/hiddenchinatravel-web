"use client";

import { useEffect, useState } from "react";
import { KitTrackedLink } from "./kit-tracked-link";
import { kitStickyCta } from "@/lib/survival-kit/content";

export function KitStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 420);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[color-mix(in_srgb,var(--brand-cream)_94%,transparent)] p-3 backdrop-blur-sm md:hidden">
        <KitTrackedLink
          cta={kitStickyCta}
          variant="primary"
          className="w-full"
        />
      </div>
      {/* Desktop floating */}
      <div className="pointer-events-none fixed bottom-8 right-8 z-40 hidden md:block">
        <div className="pointer-events-auto shadow-sm">
          <KitTrackedLink cta={kitStickyCta} variant="primary" />
        </div>
      </div>
    </>
  );
}
