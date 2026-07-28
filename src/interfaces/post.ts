import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
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
};
