import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { LastUpdated } from "./last-updated";
import { PostTitle } from "@/app/_components/post-title";
import { ArticleLeadAffiliateCta } from "@/components/affiliates/article-booking-block";
import { getArticleBookingBlock } from "@/lib/affiliates/article-booking-blocks";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  dateModified?: string;
  author: Author;
  articleSlug?: string;
};

export function PostHeader({
  title,
  coverImage,
  date,
  dateModified,
  author,
  articleSlug,
}: Props) {
  const bookingBlock = getArticleBookingBlock(articleSlug);
  const updated =
    dateModified && dateModified.slice(0, 10) !== date.slice(0, 10)
      ? dateModified
      : null;

  return (
    <>
      <PostTitle className={bookingBlock?.lead ? "mb-6 md:mb-8" : undefined}>
        {title}
      </PostTitle>
      {bookingBlock?.lead ? (
        <div className="mx-auto mb-8 max-w-3xl md:mb-10 md:text-left">
          <ArticleLeadAffiliateCta
            block={bookingBlock}
            articleSlug={articleSlug}
          />
        </div>
      ) : null}
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} priority />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-base font-normal text-[var(--brand-muted)]">
          {updated ? (
            <LastUpdated date={updated} />
          ) : (
            <DateFormatter dateString={date} />
          )}
        </div>
      </div>
    </>
  );
}
