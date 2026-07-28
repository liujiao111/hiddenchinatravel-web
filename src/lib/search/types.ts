export type SearchItemType = "article" | "hub" | "tool" | "page";

export type SearchItem = {
  id: string;
  title: string;
  href: string;
  description: string;
  type: SearchItemType;
  /** Extra terms for matching (not shown in UI) */
  keywords?: string[];
};

export type SearchMatch = SearchItem & {
  score: number;
};
