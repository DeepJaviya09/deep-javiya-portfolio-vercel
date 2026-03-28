export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  challenge: string;
  result: string;
  // Detail page fields
  industry: string;
  engagementType: string;
  overview: string;
  businessImpact: string;
  solution: string;
  myRole: string[];
  beforeAfter: { label: string; before: string; after: string }[];
  process: { step: string; description: string }[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  timeline: string;
  role: string;
  differently: string;
  testimonialId?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  // Detail page fields
  problemStatement: string;
  longDescription: string;
  technicalDecisions: { title: string; body: string }[];
  features: string[];
  scope: { label: string; value: string }[];
  lessonsLearned: string;
  engagementType: string;
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
