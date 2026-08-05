export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image?: string;
  /** YouTube/Vimeo embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID" or "https://player.vimeo.com/video/VIDEO_ID" */
  videoEmbedUrl?: string;
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
