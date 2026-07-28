import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  /** Prefer priority on article hero (LCP). */
  priority?: boolean;
};

/**
 * Editorial cover for all posts / listings.
 * Uses shared `.blog-cover-frame` (1200×630 crop + border).
 */
const CoverImage = ({ title, src, slug, priority = false }: Props) => {
  const image = (
    <div
      className={cn(
        "blog-cover-frame",
        slug && "transition-shadow duration-300 hover:shadow-md",
      )}
    >
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
