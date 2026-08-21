"use client";

import { trackEvent } from "@/lib/analytics/track";
import type { ServiceCardProps } from "@/lib/services/secondary-services";
import cn from "classnames";
import Link from "next/link";

type Props = ServiceCardProps & {
  className?: string;
};

export function ServiceCard({
  id,
  icon,
  title,
  slogan,
  description,
  detail,
  priceLabel,
  offerPrice,
  priceCurrency = "USD",
  ctaText,
  ctaAction,
  ctaTarget,
  reassurance,
  details,
  className,
}: Props) {
  function onCtaClick() {
    trackEvent("services_addon_cta_click", {
      service_id: id,
      cta_action: ctaAction,
      cta_target: ctaTarget,
    });
  }

  const ctaClass =
    "mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-4 py-2.5 text-sm font-bold text-[var(--brand-cta)] transition-all duration-300 hover:border-[var(--brand-cta)] hover:bg-[var(--brand-cta)]/8 active:scale-[0.98]";

  return (
    <article
      id={id}
      itemScope
      itemType="https://schema.org/Service"
      className={cn(
        "flex h-full flex-col rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white p-4 shadow-[0_2px_12px_rgba(80,40,24,0.06)] transition-all duration-300 md:p-5",
        "hover:border-[var(--brand-cta)]/40 hover:shadow-[0_6px_20px_rgba(80,40,24,0.12)]",
        className,
      )}
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <div
        itemProp="offers"
        itemScope
        itemType="https://schema.org/Offer"
        className="contents"
      >
        <meta itemProp="price" content={String(offerPrice)} />
        <meta itemProp="priceCurrency" content={priceCurrency} />
      </div>

      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-cta)]/10 text-[var(--brand-cta)]">
        <ServiceIcon name={icon} />
      </div>
      <h3 className="mb-2 text-base font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-lg">
        {title}
      </h3>
      {slogan ? (
        <p className="mb-2 text-sm font-bold leading-snug text-[var(--brand-coral)]">
          {slogan}
        </p>
      ) : null}
      <p className="mb-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {description}
      </p>
      {detail ? (
        <p className="mb-3 text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)]">
          {detail}
        </p>
      ) : null}

      {details?.length ? (
        <ul className="mb-3 space-y-1 text-xs text-[var(--brand-cta)]">
          {details.map((line) => (
            <li key={line} className="flex gap-1.5">
              <span className="font-bold text-[var(--brand-olive)]" aria-hidden>
                ✓
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mb-1 text-xl font-bold tracking-tight text-[var(--brand-ink)]">
        {priceLabel}
      </p>
      {reassurance ? (
        <p className="mb-4 rounded-xl bg-[var(--brand-soft)] px-3 py-2 text-xs font-bold leading-snug text-[var(--brand-cta)]">
          {reassurance}
        </p>
      ) : (
        <div className="mb-4" />
      )}

      {ctaAction === "direct-purchase" ? (
        <Link
          href={ctaTarget}
          className={ctaClass}
          data-cta={`services_addon_${id}`}
          onClick={onCtaClick}
        >
          {ctaText}
        </Link>
      ) : (
        <a
          href={ctaTarget}
          className={ctaClass}
          data-cta={`services_addon_${id}`}
          onClick={onCtaClick}
        >
          {ctaText}
        </a>
      )}
    </article>
  );
}

function ServiceIcon({ name }: { name: ServiceCardProps["icon"] }) {
  const className = "h-5 w-5";
  if (name === "search-icon") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="m16 16 3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "chat-icon") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H10l-4 3v-3H7.5A2.5 2.5 0 0 1 5 13.5v-7Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h16l-1.2 9.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 8Zm4-3.5h8L17 8H7l1-3.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
