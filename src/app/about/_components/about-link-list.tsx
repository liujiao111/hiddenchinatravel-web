import Link from "next/link";
import type { AboutLink } from "@/lib/about/content";
import cn from "classnames";

type Props = {
  links: AboutLink[];
  columns?: 2 | 3;
  className?: string;
};

export function AboutLinkList({ links, columns = 2, className }: Props) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-3",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        className,
      )}
    >
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link
            href={link.href}
            className="group inline-flex items-baseline gap-2 text-base font-light tracking-wide text-[var(--brand-ink)] underline-offset-4 transition-colors duration-500 hover:underline"
          >
            <span
              aria-hidden
              className="text-[var(--brand-muted)] transition-colors duration-500 group-hover:text-[var(--brand-ink)]"
            >
              →
            </span>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
