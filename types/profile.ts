export interface FocusArea {
  title: string;
  description: string;
}

export interface ProfileItem {
  _id: string;
  fullName: string;
  tagline?: string;
  shortBio?: string;
  fullBioHeading?: string;
  fullBio?: string;
  avatarUrl?: string;
  bannerImageUrl?: string;
  resumeUrl?: string;
  focusAreas?: FocusArea[];
  closingText?: string;
  email?: string;
}

