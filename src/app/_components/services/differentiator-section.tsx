"use client";

import { trackEvent } from "@/lib/analytics/track";
import { differentiatorContent } from "@/lib/services/differentiator";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function DifferentiatorSection() {
  const rootRef = useRef<HTMLElement>(null);
  const impressed = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || impressed.current) return;
        impressed.current = true;
        trackEvent(differentiatorContent.impressionEvent, {
          section: differentiatorContent.id,
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id={differentiatorContent.id}
      aria-labelledby="differentiator-heading"
      className="scroll-mt-28 overflow-hidden rounded-2xl bg-[var(--brand-cta)] px-5 py-8 text-white shadow-[0_12px_40px_rgba(0,105,92,0.35)] md:px-8 md:py-10"
    >
      <div className="mb-6 max-w-2xl md:mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          {differentiatorContent.eyebrow}
        </p>
        <h2
          id="differentiator-heading"
          className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          {differentiatorContent.title}
        </h2>
        <p className="text-sm font-normal leading-relaxed text-white/80 md:text-base">
          {differentiatorContent.subtitle}
        </p>
      </div>

      <ul className="mb-6 grid grid-cols-1 gap-3 md:mb-8 md:grid-cols-3 md:gap-4">
        {differentiatorContent.scenarios.map((scene) => (
          <li
            key={scene.id}
            className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm md:p-5"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-mango)]/20 text-[var(--brand-mango)]">
              <ScenarioIcon name={scene.icon} />
            </div>
            <p className="mb-2 text-sm font-bold leading-snug text-white">
              {scene.situation}
            </p>
            <p className="text-xs font-normal leading-relaxed text-white/75 md:text-sm">
              {scene.resolution}
            </p>
          </li>
        ))}
      </ul>

      <ul className="mb-6 flex flex-wrap gap-2 md:mb-8">
        {differentiatorContent.signals.map((signal) => (
          <li
            key={signal.id}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold text-white"
          >
            <SignalIcon name={signal.icon} />
            {signal.label}
          </li>
        ))}
      </ul>

      <Link
        href={differentiatorContent.cta.href}
        className="btn-brand-inverse inline-flex min-h-12 w-full justify-center px-8 py-3.5 text-sm md:w-auto md:text-base"
        data-cta={differentiatorContent.cta.trackingEvent}
        onClick={() =>
          trackEvent(differentiatorContent.cta.trackingEvent, {
            section: differentiatorContent.id,
            destination: differentiatorContent.cta.href,
          })
        }
      >
        {differentiatorContent.cta.label}
        <span aria-hidden>→</span>
      </Link>
    </section>
  );
}

function ScenarioIcon({ name }: { name: "pay" | "metro" | "wifi" }) {
  const className = "h-5 w-5";
  if (name === "pay") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3.5"
          y="6"
          width="17"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M3.5 10h17" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    );
  }
  if (name === "metro") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="6"
          y="4"
          width="12"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M9 18v2M15 18v2M9 9h6M9 12h6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12c2.5-4 5-6 7-6s4.5 2 7 6c-2.5 4-5 6-7 6s-4.5-2-7-6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function SignalIcon({ name }: { name: "clock" | "calendar" | "person" }) {
  const className = "h-3.5 w-3.5";
  if (name === "clock") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 8v4l2.5 1.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="4"
          y="5"
          width="16"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 3v4M16 3v4M4 10h16"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M5 19c1.2-3 3.5-4.5 7-4.5S17.8 16 19 19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
