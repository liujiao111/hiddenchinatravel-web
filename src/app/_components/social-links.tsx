import cn from "classnames";
import { socialLinks, type SocialLinkId } from "@/lib/constants";

function SocialIcon({ id }: { id: SocialLinkId }) {
  const className = "h-5 w-5";

  switch (id) {
    case "youtube":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19.6 7.2a5.4 5.4 0 01-3.2-1.1v7.2a5.5 5.5 0 11-4.7-5.4v2.8a2.7 2.7 0 102 2.6V2.5h2.7a5.4 5.4 0 003.2 4.7v0z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 7.2A4.8 4.8 0 1016.8 12 4.8 4.8 0 0012 7.2zm0 7.9A3.1 3.1 0 1115.1 12 3.1 3.1 0 0112 15.1zm6.3-8.2a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 2.2c-2.7 0-3 .01-4 .07a5.7 5.7 0 00-4 2.2 5.7 5.7 0 00-1.1 2.9C2.8 8.4 2.8 8.7 2.8 12s0 3.6.07 4.6a5.7 5.7 0 001.1 2.9 5.7 5.7 0 002.9 1.1c1 .06 1.3.07 4 .07s3 0 4-.07a5.7 5.7 0 002.9-1.1 5.7 5.7 0 001.1-2.9c.06-1 .07-1.3.07-4s0-3.6-.07-4.6a5.7 5.7 0 00-1.1-2.9 5.7 5.7 0 00-2.9-1.1C15 2.21 14.7 2.2 12 2.2zm0 1.8c2.6 0 2.9.01 4 .06a3.9 3.9 0 012.1.7 3.9 3.9 0 01.7 2.1c.05 1 .06 1.3.06 3.9s0 2.9-.06 4a3.9 3.9 0 01-.7 2.1 3.9 3.9 0 01-2.1.7c-1 .05-1.3.06-4 .06s-2.9 0-4-.06a3.9 3.9 0 01-2.1-.7 3.9 3.9 0 01-.7-2.1C4 14.9 4 14.6 4 12s0-2.9.06-4a3.9 3.9 0 01.7-2.1 3.9 3.9 0 012.1-.7c1-.05 1.3-.06 4-.06z" />
        </svg>
      );
  }
}

type Props = {
  className?: string;
  /** Icon-only circle buttons (footer/header) */
  variant?: "icons" | "pills";
};

export function SocialLinks({ className, variant = "icons" }: Props) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={link.label}
            title={link.label}
            className={cn(
              "inline-flex items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-300 active:scale-[0.98]",
              variant === "icons" &&
                "h-10 w-10 hover:border-[var(--brand-cta)] hover:bg-[var(--brand-cta)] hover:text-[var(--brand-on)]",
              variant === "pills" &&
                "gap-2 px-4 py-2 text-sm hover:border-[var(--brand-cta)] hover:bg-[var(--brand-cta)] hover:text-[var(--brand-on)]",
            )}
          >
            <SocialIcon id={link.id} />
            {variant === "pills" ? <span>{link.label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
