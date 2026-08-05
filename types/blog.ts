import { SanityImage } from "./blocks";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage?: SanityImage | string;
  imageUrl?: string;
  bannerBg?: string;
  publishedAt: string;
  readTime?: string;
}

export interface BlogBlock {
  _key: string;
  _type: "blogBlock";
  sectionTitle?: string;
  blogs?: BlogPost[];
}