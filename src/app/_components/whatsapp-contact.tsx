"use client";

import {
  getWhatsAppHref,
  SITE_WHATSAPP_QR_PATH,
} from "@/lib/whatsapp";
import { WHATSAPP_CARD_TITLE, WHATSAPP_NAV_LABEL } from "@/lib/trust/copy";
import cn from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  /** Header nav chip vs footer icon-only */
  variant?: "nav" | "footer";
  /** Teal sticky header uses light label text */
  tone?: "default" | "onTeal";
  /** Left rule before the chip (header may draw its own) */
  showDivider?: boolean;
  label?: string;
  cardTitle?: string;
  className?: string;
};

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#25D366"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Desktop (hover-capable): hover reveals QR card.
 * Touch / no-hover: tap opens wa.me (card never used — no click-to-expand).
 */
export function WhatsAppContact({
  variant = "nav",
  tone = "default",
  showDivider = true,
  label = WHATSAPP_NAV_LABEL,
  cardTitle = WHATSAPP_CARD_TITLE,
  className,
}: Props) {
  const href = getWhatsAppHref();
  const [fineHover, setFineHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFineHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const isNav = variant === "nav";
  const onTeal = tone === "onTeal";

  return (
    <div
      className={cn(
        "group/wa relative shrink-0",
        isNav &&
          showDivider &&
          cn(
            "border-l pl-3 md:pl-4",
            onTeal
              ? "border-white/25"
              : "border-[color-mix(in_srgb,var(--brand-cream-border)_55%,transparent)]",
          ),
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={cn(
          "inline-flex items-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 active:scale-[0.98]",
          isNav &&
            cn(
              "px-2 py-1.5 text-sm md:px-2.5",
              onTeal
                ? "text-white hover:bg-white/10"
                : "text-[var(--brand-ink)] hover:bg-[var(--brand-soft)]",
            ),
          !isNav &&
            "h-10 w-10 justify-center border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] text-[var(--brand-ink)] hover:border-[#25D366]/50 hover:bg-[#25D366]/8",
        )}
      >
        <WhatsAppGlyph className="h-5 w-5 shrink-0" />
        {isNav ? (
          <span className="hidden whitespace-nowrap 2xl:inline">{label}</span>
        ) : null}
      </a>

      {fineHover ? (
        <div
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-[60] w-[13.5rem] opacity-0 transition-[opacity,transform] duration-300 ease-out",
            "invisible",
            "group-hover/wa:pointer-events-auto group-hover/wa:visible group-hover/wa:opacity-100",
            isNav
              ? "right-0 top-[calc(100%+0.5rem)] translate-y-1 group-hover/wa:translate-y-0"
              : "bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 translate-y-1 group-hover/wa:translate-y-0",
          )}
        >
          <div className="rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] bg-white p-3 shadow-[0_12px_32px_rgba(51,51,51,0.14)]">
            <div className="overflow-hidden rounded-xl bg-[var(--brand-cream)]">
              <Image
                src={SITE_WHATSAPP_QR_PATH}
                alt=""
                width={240}
                height={240}
                className="h-auto w-full"
                unoptimized
              />
            </div>
            <p className="mt-2.5 text-center text-xs font-normal leading-snug text-[var(--brand-ink-muted)]">
              {cardTitle}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
