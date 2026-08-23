import type { PageBlock } from "./blocks";

export interface HomePageData {
  _id: string;
  title: string;
  description?: string;
  ogImageUrl?: string;
  blocks?: PageBlock[];
}