export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  challenge: string;
  result: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}