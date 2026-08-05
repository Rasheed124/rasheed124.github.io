export interface ExperienceItem {
  _id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  logo?: string;
  website?: string;
  linkedin?: string;
  description: string[];
  techStack: string[];
}


export interface ProjectItem {
  _id: string
  title: string
  description: string
  image: string
  bannerBg?: string
  status?: 'In Progress' | 'Completed'
  liveUrl?: string
  codeUrl?: string
  techStack: string[]
}

export interface ProjectCategoryItem {
  _id: string
  title: string
  projects?: ProjectItem[]
}

export interface ProjectsBlock {
  _key: string
  _type: 'projectsBlock'
  sectionTitle?: string
  projects?: ProjectItem[]
  categories?: ProjectCategoryItem[]
}