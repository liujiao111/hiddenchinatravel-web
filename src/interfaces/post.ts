import { type Author } from "./author";

export type PostFaq = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  /**
   * Optional SERP/document title. When set, metadata uses `title.absolute`
   * so the layout brand suffix is not appended (keeps intent keywords visible).
   * Page H1 still uses `title`.
   */
  seoTitle?: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  /** ISO datetime from WordPress / frontmatter */
  dateModified?: string;
  canonical?: string;
  keywords?: string[];
  section?: string;
  sourceUrl?: string;
  /** FAQ rich-result answers (FAQPage JSON-LD). */
  faqs?: PostFaq[];
};
