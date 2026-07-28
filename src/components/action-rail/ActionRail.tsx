"use client";

import { useEffect, useId, useRef } from "react";
import { usePathname } from "next/navigation";
import cn from "classnames";
import { ActionRailPanel } from "./ActionRailPanel";
import { CloseIcon } from "./icons";
import { useActionRail } from "./useActionRail";
import { shouldShowActionRail, normalizePathname } from "./visibility";
import type {
  ActionRailBehavior,
  ActionRailContent,
  ActionRailVisibility,
} from "./types";
import "./action-rail.css";

export type ActionRailProps = {
  content: ActionRailContent;
  visibility: ActionRailVisibility;
  behavior: ActionRailBehavior;
};

export function ActionRail({ content, visibility, behavior }: ActionRailProps) {
  const pathname = usePathname();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const allowedPath = shouldShowActionRail(pathname, visibility);
  const {
    mounted,
    expanded,
    mobileOpen,
    mobileMinimized,
    openDesktop,
    openMobile,
    collapse,
    minimizeMobile,
    restoreMobileBar,
  } = useActionRail({
    enabled: allowedPath,
    pathname,
    behavior,
  });

  // Esc closes desktop panel (no focus steal on auto-open)
  useEffect(() => {
    if (!expanded || !allowedPath || mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        collapse();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [expanded, allowedPath, mobileOpen, collapse]);

  // Mobile drawer: Esc + focus trap
  useEffect(() => {
    if (!mobileOpen || !allowedPath) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        collapse();
        return;
      }

      if (event.key !== "Tab" || !panel || !focusable?.length) return;

      const items = Array.from(focusable);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [mobileOpen, allowedPath, collapse]);

  if (!mounted || !allowedPath) {
    return null;
  }

  const path = normalizePathname(pathname);
  const panelContent = {
    ...content,
    ctas: content.ctas.filter(
      (cta) => normalizePathname(cta.href) !== path,
    ),
  };

  const panelShellClass =
    "action-rail border border-[var(--action-rail-border)] bg-[var(--action-rail-bg)] text-[var(--action-rail-ink)] shadow-md";

  return (
    <>
      {/* Desktop: always keep a re-openable edge tab when collapsed */}
      {!expanded ? (
        <button
          type="button"
          className={cn(
            "action-rail action-rail-tab fixed right-0 top-1/2 z-[60] hidden md:inline-flex",
            "min-h-11 items-center rounded-l-sm border border-r-0 border-[var(--action-rail-border)]",
            "bg-[var(--action-rail-bg)] px-2.5 py-4 text-xs font-light uppercase tracking-[0.12em]",
            "text-[var(--action-rail-ink)] shadow-sm",
            "transition-colors duration-300 hover:bg-[var(--action-rail-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-rail-accent)]",
            "action-rail-motion",
          )}
          onClick={openDesktop}
          aria-expanded={false}
          aria-controls="action-rail-panel"
        >
          {content.tabLabel}
        </button>
      ) : null}

      {/* Desktop: expanded panel */}
      {expanded ? (
        <aside
          id="action-rail-panel"
          role="complementary"
          aria-labelledby={titleId}
          className={cn(
            "fixed right-4 top-1/2 z-[60] hidden w-[min(20rem,calc(100vw-2rem))] -translate-y-1/2 rounded-sm p-5 md:block",
            panelShellClass,
            "action-rail-motion action-rail-slide-in",
          )}
        >
          <ActionRailPanel
            content={panelContent}
            titleId={titleId}
            onClose={collapse}
          />
        </aside>
      ) : null}

      {/* Mobile: compact chip after user minimizes the sticky bar */}
      {!mobileOpen && mobileMinimized ? (
        <button
          type="button"
          className={cn(
            "action-rail fixed bottom-4 right-4 z-[60] inline-flex min-h-11 items-center rounded-sm border border-[var(--action-rail-border)] bg-[var(--action-rail-bg)] px-4 py-2 text-sm font-light tracking-wide text-[var(--action-rail-ink)] shadow-md md:hidden",
            "mb-[env(safe-area-inset-bottom)]",
            "transition-colors duration-300 hover:bg-[var(--action-rail-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-rail-accent)]",
            "action-rail-motion",
          )}
          onClick={() => {
            restoreMobileBar();
            openMobile();
          }}
          aria-expanded={false}
          aria-controls="action-rail-drawer"
        >
          {content.tabLabel}
        </button>
      ) : null}

      {/* Mobile: sticky bar — available until minimized; reappears via chip */}
      {!mobileOpen && !mobileMinimized ? (
        <div
          className={cn(
            "action-rail fixed inset-x-0 bottom-0 z-[60] flex items-center justify-between gap-3 border-t border-[var(--action-rail-border)] bg-[var(--action-rail-bg)] px-4 py-3 md:hidden",
            "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
            "action-rail-motion",
          )}
        >
          <button
            type="button"
            className="min-w-0 flex-1 truncate text-left text-sm font-light text-[var(--action-rail-ink)]"
            onClick={openMobile}
          >
            {content.mobileBarLabel}
          </button>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-sm bg-[var(--action-rail-accent)] px-4 text-sm font-light tracking-wide text-[var(--brand-on)] transition-colors duration-300 hover:bg-[var(--action-rail-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-rail-accent)] active:scale-[0.98]"
              onClick={openMobile}
              aria-expanded={false}
              aria-controls="action-rail-drawer"
            >
              {content.primaryCtaLabel}
            </button>
            <button
              type="button"
              onClick={minimizeMobile}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-[var(--action-rail-ink-muted)] transition-colors duration-300 hover:bg-[var(--action-rail-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-rail-accent)]"
              aria-label="Minimize trip prep"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      ) : null}

      {/* Mobile: bottom drawer */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--brand-ink)]/30"
            aria-label="Close panel"
            onClick={collapse}
          />
          <div
            id="action-rail-drawer"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-sm p-5",
              "pb-[max(1.25rem,env(safe-area-inset-bottom))]",
              panelShellClass,
              "action-rail-motion action-rail-drawer-in",
            )}
          >
            <ActionRailPanel
              content={panelContent}
              titleId={titleId}
              onClose={collapse}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
