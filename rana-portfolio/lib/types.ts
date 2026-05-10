export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  _id: string;
  name: string;
  title: string;
  shortBio: string;
  bio: unknown[]; // Portable Text
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  cvUrl: string;
  avatar?: {
    asset: { _ref: string };
    hotspot?: { x: number; y: number };
  };
  socialLinks: SocialLink[];
}

export interface Skill {
  _id: string;
  category: string;
  items: string[];
  order: number;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: {
    asset: { _ref: string };
    hotspot?: { x: number; y: number };
  };
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
}

export interface Experience {
  _id: string;
  type: 'work' | 'education';
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: unknown[]; // Portable Text
  field?: string;
  grade?: string;
  highlights?: string[];
  order: number;
}
