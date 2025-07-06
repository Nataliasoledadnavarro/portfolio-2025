export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}

export interface Resources {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export interface MenuItem {
  href: string;
  label: string;
}

export interface ContactItem {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}