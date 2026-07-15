export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string;
  description: string;
  highlights?: string[];
};

export type Profile = {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};
