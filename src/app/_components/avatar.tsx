import Link from "next/link";
import {
  SITE_FOUNDER_PATH,
  SITE_FOUNDER_PICTURE,
} from "@/lib/constants";

type Props = {
  name: string;
  picture: string;
  href?: string;
};

const Avatar = ({ name, picture, href = SITE_FOUNDER_PATH }: Props) => {
  const img = (
    <img
      src={picture || SITE_FOUNDER_PICTURE}
      className="h-12 w-12 rounded-2xl object-cover"
      alt={name}
      width={48}
      height={48}
    />
  );

  return (
    <div className="flex items-center">
      {href ? (
        <Link
          href={href}
          className="mr-4 shrink-0 overflow-hidden rounded-2xl border border-[var(--brand-cta)]/15 transition-transform duration-300 hover:scale-105"
        >
          {img}
        </Link>
      ) : (
        <span className="mr-4 shrink-0 overflow-hidden rounded-2xl border border-[var(--brand-cta)]/15">
          {img}
        </span>
      )}
      <div>
        {href ? (
          <Link
            href={href}
            className="text-base font-bold tracking-tight text-[var(--brand-cta)] transition-colors duration-300 hover:text-[var(--brand-coral)]"
          >
            {name}
          </Link>
        ) : (
          <span className="text-base font-bold tracking-tight text-[var(--brand-ink)]">
            {name}
          </span>
        )}
      </div>
    </div>
  );
};

export default Avatar;
