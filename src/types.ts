export type ProjectCategory = 'all' | 'ai' | 'web' | 'systems';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'ai' | 'web' | 'systems';
  featured?: boolean;
  featuredBadge?: string;
  tagline?: string;
  description: string;
  fullDetails?: {
    overview: string;
    architecture: string[];
    metrics: { label: string; value: string }[];
    features: string[];
  };
  technologies: string[];
  image: string;
  imageAlt: string;
  academicTag: string;
  githubUrl: string;
  demoUrl?: string;
  hasQueries?: boolean;
  hasSource?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  tags: { name: string; highlight?: boolean; colorClass?: string }[];
  bulletPoints: string[];
  colSpan?: string;
}

export interface TimelineItem {
  period: string;
  statusBadge?: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  coursework?: string[];
  dotColor?: string;
}

export interface Milestone {
  icon: string;
  iconColor: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
}

export interface Repository {
  name: string;
  isPublic: boolean;
  description: string;
  language: string;
  languageColor: string;
  status: string;
  url: string;
  iconColor: string;
}
