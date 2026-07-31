import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
};

export function ToolBreadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 mt-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-normal text-[var(--brand-muted)]">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden className="text-[var(--brand-warm)]">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors duration-500 hover:text-[var(--brand-ink)] hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--brand-ink)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
