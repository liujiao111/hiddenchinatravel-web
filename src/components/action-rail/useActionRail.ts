"use client";

import { useCallback, useEffect, useState } from "react";
import type { ActionRailBehavior } from "./types";

function pathKey(base: string, pathname: string): string {
  return `${base}:${pathname || "/"}`;
}

function globalKey(base: string): string {
  return `${base}:global`;
}

function readFlag(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(key: string): void {
  try {
    sessionStorage.setItem(key, "1");
  } catch {
    /* ignore quota / private mode */
  }
}

type Options = {
  enabled: boolean;
  pathname: string;
  behavior: ActionRailBehavior;
};

/**
 * Auto-expand at most once per browser session (global), never on every path.
 * Closing collapses to the tab/chip but does not remove the rail.
 */
export function useActionRail({ enabled, pathname, behavior }: Options) {
  const [mounted, setMounted] = useState(false);
  const [autoPromptDone, setAutoPromptDone] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  /** Mobile: start as compact chip — full sticky bar only after user opens it */
  const [mobileMinimized, setMobileMinimized] = useState(true);

  const promptKey = pathKey(behavior.autoPromptStorageKey, pathname);
  const sessionKey = globalKey(behavior.autoPromptStorageKey);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset panel state when the route changes; respect global session cap
  useEffect(() => {
    if (!mounted) return;
    const done = readFlag(sessionKey) || readFlag(promptKey);
    setAutoPromptDone(done);
    setExpanded(false);
    setMobileOpen(false);
    setMobileMinimized(true);
  }, [mounted, promptKey, sessionKey]);

  const markAutoPromptDone = useCallback(() => {
    writeFlag(promptKey);
    writeFlag(sessionKey);
    setAutoPromptDone(true);
  }, [promptKey, sessionKey]);

  const openDesktop = useCallback(() => {
    setExpanded(true);
  }, []);

  const openMobile = useCallback(() => {
    setMobileMinimized(false);
    setMobileOpen(true);
  }, []);

  /** Collapse panel/drawer; keep edge tab / chip. Skip future auto-expand. */
  const collapse = useCallback(() => {
    markAutoPromptDone();
    setExpanded(false);
    setMobileOpen(false);
  }, [markAutoPromptDone]);

  /** Mobile sticky bar → compact chip (still re-openable). */
  const minimizeMobile = useCallback(() => {
    markAutoPromptDone();
    setMobileOpen(false);
    setMobileMinimized(true);
  }, [markAutoPromptDone]);

  const restoreMobileBar = useCallback(() => {
    setMobileMinimized(false);
  }, []);

  // Desktop-only auto-expand — scroll depth only (no dwell timer)
  useEffect(() => {
    if (!mounted || !enabled || autoPromptDone || expanded) return;
    if (behavior.scrollThreshold <= 0) return;

    const desktopMq = window.matchMedia("(min-width: 768px)");
    if (!desktopMq.matches) return;

    let triggered = false;
    const trigger = () => {
      if (triggered || !desktopMq.matches) return;
      triggered = true;
      markAutoPromptDone();
      setExpanded(true);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      if (window.scrollY / maxScroll >= behavior.scrollThreshold) {
        trigger();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = window.requestAnimationFrame(onScroll);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [
    mounted,
    enabled,
    autoPromptDone,
    expanded,
    behavior.scrollThreshold,
    markAutoPromptDone,
  ]);

  return {
    mounted,
    expanded,
    mobileOpen,
    mobileMinimized,
    openDesktop,
    openMobile,
    collapse,
    minimizeMobile,
    restoreMobileBar,
  };
}
