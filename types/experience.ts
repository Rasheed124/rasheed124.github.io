// types/experience.ts
export interface ExperienceItem {
  _id?: string;
  company: string;
  logo?: string;
  role: string;
  location?: string;
  website?: string;
  linkedin?: string;
  startDate?: string;
  endDate?: string;
  isCurrentRole?: boolean;
  technologies?: string[];
  description?: PortableTextBlock[] | string[];
}
export interface PortableTextBlock {
  _key: string;
  _type: string;
  children?: Array<{ _key: string; _type: string; text: string }>;
}