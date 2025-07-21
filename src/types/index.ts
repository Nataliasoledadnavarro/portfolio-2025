import { ReactNode } from "react";
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

export interface TimeLineItem {
  side: "left" | "right";
  icon: ReactNode;
  title: string;
  description: string;
  year: string;
}

export interface TitlesProps {
  text: string;
}

export interface Skills {
  name: string;
  icon: ReactNode;
}
export interface ButtonLinkProps {
  variant?: "primary" | "secondary" 
  url: string
  text: string
}
export interface IconButtonProps {
  href: string
  ariaLabel: string
  icon: React.ReactNode 
  hovered?: boolean
}