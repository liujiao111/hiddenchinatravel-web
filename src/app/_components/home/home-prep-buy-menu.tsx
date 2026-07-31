"use client";

import type { PrepBuyMenu, PrepBuyOption } from "@/lib/home/prep-content";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import cn from "classnames";

type Props = {
  menu: PrepBuyMenu;
  /** Optional click hook (e.g. Survival Kit analytics). */
  onOptionClick?: (option: PrepBuyOption) => void;
};

function useCanHover(): boolean {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return canHover;
}

/** Compact CTA — hover (desktop) or tap (touch) reveals buy options. */
export function HomePrepBuyMenu({ menu, onOptionClick }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const canHover = useCanHover();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="space-y-2">
      <div
        ref={rootRef}
        className={cn("relative", open && "z-50")}
        onMouseEnter={canHover ? () => setOpen(true) : undefined}
        onMouseLeave={canHover ? () => setOpen(false) : undefined}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls={menuId}
          onClick={() => {
            // Touch devices: click is the only open/close. Hover devices: click
            // still toggles for keyboard / intentional close without leaving.
            setOpen((v) => !v);
          }}
          className="btn-brand w-full px-4 py-2.5 text-sm"
        >
          {menu.buttonLabel}
          <span aria-hidden className="text-[0.7em] opacity-80">
            ▴
          </span>
        </button>

        {/* Open upward so the panel clears the card edge (surface-card clips by default). */}
        <div
          id={menuId}
          role="menu"
          className={cn(
            "absolute bottom-full left-0 right-0 z-50 pb-1.5 transition-all duration-200",
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-1 opacity-0 pointer-events-none",
          )}
        >
          <ul className="overflow-hidden rounded-2xl border-2 border-[#00897b]/20 bg-white py-1 shadow-[0_8px_30px_rgba(0,137,123,0.18)]">
            {menu.options.map((option) => {
              const isAffiliateGo =
                option.href.startsWith("/go/") || option.href.includes("/go/");
              const className =
                "flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-bold text-[var(--brand-cta)] transition-colors duration-300 hover:bg-[var(--brand-soft)]";
              const body = (
                <>
                  <span>{option.label}</span>
                  {option.hint ? (
                    <span className="text-xs font-normal text-[var(--brand-ink-muted)]">
                      {option.hint}
                    </span>
                  ) : null}
                </>
              );
              const handleClick = () => {
                onOptionClick?.(option);
                setOpen(false);
              };

              return (
                <li key={option.href} role="none">
                  {option.external || isAffiliateGo ? (
                    <a
                      role="menuitem"
                      href={option.href}
                      target="_blank"
                      rel={
                        isAffiliateGo
                          ? "sponsored noopener noreferrer"
                          : "noopener noreferrer"
                      }
                      onClick={handleClick}
                      className={className}
                    >
                      {body}
                    </a>
                  ) : (
                    <Link
                      role="menuitem"
                      href={option.href}
                      onClick={handleClick}
                      className={className}
                    >
                      {body}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {menu.chooseHint}{" "}
        <Link
          href={menu.guide.href}
          className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
        >
          {menu.guide.label} →
        </Link>
      </p>
    </div>
  );
}
