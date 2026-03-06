export interface NavItem {
  id: string;
  label: string;
}

export interface HeroCodeLine {
  type: 'keyword' | 'type' | 'string' | 'comment' | 'plain';
  text: string;
}

export interface HeroContent {
  heading: string;
  highlightedHeading: string;
  description: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  imageUrl: string;
  imageAlt: string;
  codeLines: HeroCodeLine[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  tags: string[];
}

export interface ExperienceItem {
  dateRange: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tech: string[];
  highlights: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  navItems: NavItem[];
  hero: HeroContent;
  about: {
    intro: string[];
    availability: string;
    stats: StatItem[];
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: {
    heading: string;
    description: string;
  };
  footer: {
    copyright: string;
    links: SocialLink[];
  };
}

