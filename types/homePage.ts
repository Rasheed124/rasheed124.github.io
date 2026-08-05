// // sanity/types.ts

// import { ProjectCategoryItem } from "./project";

// export interface EducationItem {
//   _id: string;
//   institution: string;
//   degree: string;
//   fieldOfStudy?: string;
//   certificateUrl?: string;
//   startDate?: string;
//   endDate?: string;
//   description?: string;
// }

// export interface ExperienceItem {
//   _id: string;
//   company: string;
//   logo?: string;
//   role: string;
//   location?: string;
//   website?: string;
//   linkedin?: string;
//   startDate: string;
//   endDate?: string;
//   isCurrentRole?: boolean;
//   technologies?: string[];
//   description?: PortableTextBlock[] | string[];
// }

// export interface ProjectCategory {
//   _id: string;
//   title: string;
//   slug: string;
// }

// export interface ProjectItem {
//   _id: string;
//   title: string;
//   description?: string;
//   image?: string;
//   bannerBg?: string;
//   status?: string;
//   liveUrl?: string;
//   codeUrl?: string;
//   techStack?: string[];
// }

// export interface ContactRef {
//   _id: string;
//   email?: string;
//   phone?: string;
//   location?: string;
//   socialLinks?: Record<string, string>[];
// }

// // Block Union Types
// export interface EducationBlock {
//   _key: string;
//   _type: "educationBlock";
//   sectionTitle?: string;
//   items?: EducationItem[];
// }

// export interface ExperienceBlock {
//   _key: string;
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

// // types/homePage.ts

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
//   footerBgImage?: string;
//   developerName?: string;
//   developerUrl?: string;
// }

// export interface ContactBlock {
//   _key: string;
//   _type: "contactBlock";
//   sectionTitle?: string;
//   contactRef?: ContactDocument;
// }

// export interface BaseBlock {
//   _key: string;
//   _type: string;
// }

// export interface RichTextBlock {
//   _key: string;
//   _type: "richTextBlock";
//   content?: any[]; // PortableText array
// }

// export type HomeBlock =
//   | EducationBlock
//   | ExperienceBlock
//   | ProjectsBlock
//   | ContactBlock
//   | RichTextBlock;

// export interface HomePageData {
//   _id: string;
//   title: string;
//   description?: string;
//   ogImageUrl?: string;
//   blocks?: HomeBlock[];
// }

// // ====================================================================

// export interface PortableTextBlock {
//   _key: string;
//   _type: string;
//   children?: Array<{ _key: string; _type: string; text: string }>;
// }

// export interface ExperienceBlock {
//   _key: string;
//   _type: "experienceBlock";
//   sectionTitle?: string;
//   items?: ExperienceItem[];

// }


import type { PageBlock } from "./blocks";

export type HomeBlock = PageBlock;

export interface HomePageData {
  _id: string;
  title: string;
  description?: string;
  ogImageUrl?: string;
  blocks?: HomeBlock[] ;
}

