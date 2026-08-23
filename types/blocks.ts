

// import type { PortableTextBlock } from "@portabletext/types";
// import type {
//   ExperienceItem,
//   ProjectCategoryItem,
//   ProjectItem,
// } from "./project";
// import { EducationItem } from "./education";
// import { BlogBlock } from "./blog";
// import { ProfileItem } from "./profile";

// export interface SanityImage {
//   asset?: {
//     _id?: string;
//     url?: string;
//   };
//   hotspot?: any;
//   crop?: any;
// }

// export interface SanitySocialLink {
//   _key?: string;
//   platform: string;
//   url: string;
// }

// export interface ContactDocument {
//   _id?: string;
//   _type?: "contact";
//   headline?: string;
//   socialLinks?: SanitySocialLink[];
//   footerBgImage?: SanityImage;
//   developerName?: string;
//   developerUrl?: string;
// }

// export interface EducationBlock {
//   _key: string;
//   _type: "educationBlock";
//   sectionTitle?: string;
//   items?: EducationItem[];
// }

// export interface ExperienceBlock {
//   _key: string;
//   _id: string;
//   _type: "experienceBlock";
//   sectionTitle?: string;
//   items?: ExperienceItem[];
// }

// export interface ProjectsBlock {
//   _key: string;
//   _type: "projectsBlock";
//   sectionTitle?: string;
//   projects?: ProjectItem[];
//   categories?: ProjectCategoryItem[];
// }

// export interface ContactBlock {
//   _key: string;
//   _type: "contactBlock";
//   sectionTitle?: string;
//   contactRef?: ContactDocument;
// }

// export interface RichTextBlock {
//   _key: string;
//   _type: "richTextBlock";
//   content?: PortableTextBlock[];
// }

// export interface PageDocument {
//   _id: string;
//   _type: "page";
//   title: string;
//   slug: { current: string };
//   description?: string;
//   blocks?: PageBlock[];
// }

// export interface AboutBlock {
//   _key: string;
//   _type: "aboutBlock";
//   sectionTitle?: string;
//   variant?: "hero" | "detailed";
//   profileRef?: ProfileItem;
// }
// export type PageBlock =
//   | AboutBlock
//   | EducationBlock
//   | ExperienceBlock
//   | ProjectsBlock
//   | ContactBlock
//   | RichTextBlock
//   | BlogBlock;

import type { PortableTextBlock } from "@portabletext/types";
import type {
  ExperienceItem,
  ProjectCategoryItem,
  ProjectItem,
} from "./project";
import type { EducationItem } from "./education";
import type { BlogBlock } from "./blog";
import type { ProfileItem } from "./profile";

export interface SanityImage {
  asset?: {
    _id?: string;
    url?: string;
  };
  hotspot?: Record<string, number>;
  crop?: Record<string, number>;
}

export interface SanitySocialLink {
  _key?: string;
  platform: string;
  url: string;
}

export interface ContactDocument {
  _id?: string;
  _type?: "contact";
  headline?: string;
  socialLinks?: SanitySocialLink[];
  footerBgImage?: SanityImage;
  developerName?: string;
  developerUrl?: string;
}

export interface EducationBlock {
  _key: string;
  _type: "educationBlock";
  sectionTitle?: string;
  items?: EducationItem[];
}

export interface ExperienceBlock {
  _key: string;
  _id?: string;
  _type: "experienceBlock";
  sectionTitle?: string;
  items?: ExperienceItem[];
}

export interface ProjectsBlock {
  _key: string;
  _type: "projectsBlock";
  sectionTitle?: string;
  projects?: ProjectItem[];
  categories?: ProjectCategoryItem[];
}

export interface ContactBlock {
  _key: string;
  _type: "contactBlock";
  sectionTitle?: string;
  contactRef?: ContactDocument;
}

export interface RichTextBlock {
  _key: string;
  _type: "richTextBlock";
  content?: PortableTextBlock[];
}

export interface AboutBlock {
  _key: string;
  _type: "aboutBlock";
  sectionTitle?: string;
  variant?: "hero" | "detailed";
  profileRef?: ProfileItem;
}

export type PageBlock =
  | AboutBlock
  | EducationBlock
  | ExperienceBlock
  | ProjectsBlock
  | ContactBlock
  | RichTextBlock
  | BlogBlock;