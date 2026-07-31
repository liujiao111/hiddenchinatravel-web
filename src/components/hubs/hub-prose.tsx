import Link from "next/link";
import type { ReactNode } from "react";

/** Minimal inline markdown: paragraphs + [label](href) links. */
export function HubProse({ text, className }: { text: string; className?: string }) {
  const blocks = text.trim().split(/\n\n+/);
  return (
    <div className={className}>
      {blocks.map((block, i) => (
        <p
          key={i}
          className="mb-4 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] last:mb-0 md:text-lg"
        >
          {renderInline(block.replace(/\n/g, " "))}
        </p>
      ))}
    </div>
  );
}

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const href = match[2];
    const label = match[1];
    if (href.startsWith("/")) {
      const isAffiliate = href.startsWith("/go/");
      parts.push(
        <Link
          key={key++}
          href={href}
          {...(isAffiliate
            ? { rel: "sponsored noopener noreferrer", target: "_blank" }
            : {})}
          className="underline decoration-[color-mix(in_srgb,var(--brand-cream-border)_60%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta)]"
        >
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          className="underline decoration-[color-mix(in_srgb,var(--brand-cream-border)_60%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta)]"
          rel="noopener noreferrer"
          target="_blank"
        >
          {label}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
