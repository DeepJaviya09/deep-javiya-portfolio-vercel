import { CaseStudy, Testimonial, Project } from './types';

export const TECH_STACK = [
  "Laravel", "React", "Vue", "n8n", "AI Agents", "RAG", "Qdrant", "MySQL", "PostgreSQL", "Tailwind", "Docker"
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "FinTech Data Pipeline",
    category: "Backend Architecture",
    image: "https://picsum.photos/800/600?random=1",
    challenge: "Legacy systems were taking 48 hours to process daily transaction reconciliation.",
    result: "75% Reduction in processing time via optimized SQL & Redis caching."
  },
  {
    id: 2,
    title: "AI Customer Support",
    category: "AI Automation",
    image: "https://picsum.photos/800/600?random=2",
    challenge: "Client support team was overwhelmed by repetitive Tier-1 inquiries.",
    result: "Automated 60% of tickets with a RAG-based LLM bot using Qdrant."
  },
  {
    id: 3,
    title: "E-Commerce Scale Up",
    category: "Full Stack",
    image: "https://picsum.photos/800/600?random=3",
    challenge: "Platform crashed during peak traffic events due to database locks.",
    result: "200% Traffic capacity increase and sub-100ms load times."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon SaaS Starter",
    description: "A production-ready Next.js boilerplate with Auth, Stripe, and Prisma integration.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    github: "#"
  },
  {
    id: 2,
    title: "Crypto Sentinel",
    description: "Real-time cryptocurrency anomaly detection dashboard using WebSocket API.",
    tech: ["React", "WebSockets", "D3.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Neural Gallery",
    description: "Wrapper around Stable Diffusion API with a custom masonry gallery UI.",
    tech: ["Python", "FastAPI", "React"],
    github: "#"
  },
  {
    id: 4,
    title: "Distributed Tasker",
    description: "High-throughput distributed task queue system built with Go.",
    tech: ["Go", "Redis", "Docker"],
    github: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "NexFin Solutions",
    text: "Deep didn't just write code; he re-engineered our entire mental model of how data should flow. The performance gains were immediate and massive.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Product Owner",
    company: "Orbit Retail",
    text: "I've never worked with an engineer who understood the business logic as well as the tech stack. The AI integration he built is now our core USP.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Velocify",
    text: "Minimalist code, maximum impact. Deep is the definition of a 10x engineer.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];