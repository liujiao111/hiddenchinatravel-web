import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-3 text-xl font-light leading-snug tracking-wide text-[var(--brand-ink)] md:text-2xl">
        <Link
          href={`/${slug}`}
          className="transition-colors duration-500 hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-base font-light text-[var(--brand-muted)]">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-base font-light leading-relaxed text-[var(--brand-ink-muted)]">
        {excerpt}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
