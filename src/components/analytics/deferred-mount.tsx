"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Idle timeout hint for requestIdleCallback */
  idleTimeoutMs?: number;
  /** Fallback delay when requestIdleCallback is unavailable */
  fallbackMs?: number;
};

/** Gate children until the browser is idle so analytics don't compete with LCP. */
export function DeferredMount({
  children,
  idleTimeoutMs = 4000,
  fallbackMs = 3000,
}: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enable = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: idleTimeoutMs });
    } else {
      timeoutId = setTimeout(enable, fallbackMs);
    }

    return () => {
      cancelled = true;
      if (
        idleId !== undefined &&
        typeof window.cancelIdleCallback === "function"
      ) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [idleTimeoutMs, fallbackMs]);

  if (!ready) return null;
  return <>{children}</>;
}
