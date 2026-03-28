import { CaseStudy, Testimonial, Project } from './types';

export const TECH_STACK = [
  "Laravel", "React", "Vue", "n8n", "AI Agents", "RAG", "Qdrant", "MySQL", "PostgreSQL", "Tailwind", "Docker"
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "FinTech Data Pipeline",
    category: "Backend Architecture",
    industry: "FinTech",
    engagementType: "Full Build",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    challenge: "Legacy systems were taking 48 hours to process daily transaction reconciliation.",
    result: "75% Reduction in processing time via optimized SQL & Redis caching.",
    overview: "A mid-sized FinTech company was struggling with overnight batch jobs that reconciled thousands of daily transactions across multiple banking APIs. The 48-hour delay was causing compliance issues and blocking the finance team from making real-time decisions.",
    businessImpact: "Cutting reconciliation time from 48 hours to 12 meant the finance team could close books same-day and catch fraud 3× faster — directly reducing regulatory exposure and unlocking real-time decision-making they'd never had before.",
    solution: "Redesigned the ETL pipeline from a monolithic cron job into a distributed worker system using Laravel Queues backed by Redis. Introduced parallel processing lanes for different transaction types, replaced N+1 ORM queries with raw optimized SQL, and added a Redis-based result cache to avoid redundant API calls.",
    myRole: [
      "Architecture decisions — designed the distributed queue topology",
      "DB schema optimization — rewrote N+1 ORM calls as optimized raw SQL",
      "API design — modelled the banking API abstraction layer",
      "Deployment — containerized and staged rollout with feature flags"
    ],
    beforeAfter: [
      { label: "Processing Time", before: "48 hrs", after: "12 hrs" },
      { label: "Daily API Calls", before: "~500K (redundant)", after: "~200K (cached)" },
      { label: "Reconciliation", before: "Next-day close", after: "Same-day close" }
    ],
    process: [
      { step: "Discovery", description: "Audited existing cron jobs, identified N+1 query chains, and mapped all external banking API dependencies." },
      { step: "Design", description: "Designed a distributed worker topology with separate processing lanes per transaction type." },
      { step: "Build", description: "Rewrote ETL using Laravel Queues + Redis Horizon; replaced ORM calls with optimized raw SQL." },
      { step: "Deploy", description: "Containerized with Docker; staged rollout with feature flags to validate against live data." },
      { step: "Results", description: "Processing time dropped from 48hrs to 12hrs — finance team gained same-day book-close capability." }
    ],
    techStack: ["Laravel", "Redis", "MySQL", "Docker", "PostgreSQL", "Horizon"],
    metrics: [
      { label: "Processing Time", value: "–75%" },
      { label: "Daily Transactions", value: "500K+" },
      { label: "API Calls Saved", value: "~60%" },
      { label: "Downtime", value: "Zero" }
    ],
    timeline: "6 weeks",
    role: "Lead Backend Engineer",
    differently: "I'd introduce a dedicated data warehouse (e.g. ClickHouse) from the start rather than squeezing analytics queries into the transactional MySQL database. It would have decoupled reporting load from write performance even further, and avoided the indexing compromises we had to make late in the project.",
    testimonialId: 1
  },
  {
    id: 2,
    title: "AI Customer Support",
    category: "AI Automation",
    industry: "SaaS",
    engagementType: "Consulting",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop",
    challenge: "Client support team was overwhelmed by repetitive Tier-1 inquiries.",
    result: "Automated 60% of tickets with a RAG-based LLM bot using Qdrant.",
    overview: "A SaaS company's support team was spending 70% of their time answering the same product questions. They needed an intelligent bot that could answer accurately using their existing documentation without hallucinating or going off-topic.",
    businessImpact: "Automating 60% of Tier-1 tickets saved the support team 120 hours per month — time they reinvested into proactive customer success work that directly improved retention instead of answering the same 10 questions on loop.",
    solution: "Built a Retrieval-Augmented Generation (RAG) pipeline that chunks and embeds the client's documentation into a Qdrant vector database. Incoming support tickets are semantically matched against the knowledge base and a fine-tuned prompt routes the query to GPT-4 with relevant context injected. Escalation logic hands off to a human agent when confidence is low.",
    myRole: [
      "RAG pipeline architecture — chunking strategy, embedding model selection",
      "Vector DB setup — Qdrant schema, indexing, and retrieval tuning",
      "Prompt engineering — structured system prompts with confidence-based escalation",
      "Backend API — FastAPI service wiring the retrieval and LLM layers",
      "Frontend widget — chat UI integrated into the client's help center"
    ],
    beforeAfter: [
      { label: "Ticket Resolution", before: "Avg 4 hrs (human)", after: "< 2 sec (automated)" },
      { label: "Agent Hours / Month", before: "200+ hrs", after: "80 hrs" },
      { label: "CSAT Score", before: "Baseline", after: "+22%" }
    ],
    process: [
      { step: "Discovery", description: "Catalogued 6 months of support tickets to identify the 80% of questions answerable from documentation." },
      { step: "Design", description: "Designed the RAG pipeline: chunking strategy, embedding model, and confidence-based escalation thresholds." },
      { step: "Build", description: "Built the vector ingestion pipeline in Python + Qdrant, wired GPT-4 with structured prompts via FastAPI." },
      { step: "Deploy", description: "Integrated the widget into the client's help center; human-handoff hook delivered via n8n." },
      { step: "Results", description: "60% of tickets resolved without human intervention. Agent team refocused on complex, high-value cases." }
    ],
    techStack: ["Python", "Qdrant", "OpenAI", "n8n", "FastAPI", "React"],
    metrics: [
      { label: "Tickets Automated", value: "60%" },
      { label: "Avg Response Time", value: "< 2s" },
      { label: "Agent Hours Saved", value: "120/mo" },
      { label: "CSAT Score", value: "+22%" }
    ],
    timeline: "8 weeks",
    role: "Full-Stack AI Engineer",
    differently: "I'd build an evaluation harness from day one — automated tests that score the bot against a golden QA set. We added it retroactively, which meant the first few weeks of production data weren't captured as a training signal and we were flying blind on quality before launch.",
    testimonialId: 2
  },
  {
    id: 3,
    title: "E-Commerce Scale Up",
    category: "Full Stack",
    industry: "E-Commerce",
    engagementType: "Full Build",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    challenge: "Platform crashed during peak traffic events due to database locks.",
    result: "200% Traffic capacity increase and sub-100ms load times.",
    overview: "A growing e-commerce brand was experiencing database deadlocks and 500 errors during flash sales. Their single-server Laravel + MySQL stack couldn't handle concurrent cart and inventory writes, causing lost revenue and customer frustration.",
    businessImpact: "Eliminating flash-sale crashes and cutting load time to under 100ms translated directly into an 18% lift in conversion rate — meaning every major sale event now generates significantly more revenue without incident, and the engineering team stopped dreading launch days.",
    solution: "Migrated the architecture to a horizontally scalable setup with read replicas, introduced optimistic locking for inventory management, offloaded image delivery to a CDN, and implemented a Redis-backed session and cart store. Deployed via Docker on a managed Kubernetes cluster for auto-scaling during traffic spikes.",
    myRole: [
      "Database architecture — designed read/write replica split and optimistic locking strategy",
      "Caching layer — built Redis-backed session and cart store",
      "CDN integration — configured asset offloading and cache invalidation",
      "Kubernetes deployment — containerized app with autoscaling policies",
      "Load testing — designed and executed traffic simulation scenarios"
    ],
    beforeAfter: [
      { label: "Traffic Capacity", before: "Crashed at 2× baseline", after: "Handles 6× baseline" },
      { label: "Page Load Time", before: "~1.2s", after: "< 100ms" },
      { label: "Error Rate (peak)", before: "~15%", after: "< 0.1%" }
    ],
    process: [
      { step: "Discovery", description: "Profiled slow queries under load; identified deadlock patterns in concurrent cart and inventory writes." },
      { step: "Design", description: "Planned horizontal scaling: read replicas, optimistic locking, and Redis-backed session/cart layer." },
      { step: "Build", description: "Migrated to a read/write split, introduced optimistic locking, offloaded static assets to CDN." },
      { step: "Deploy", description: "Containerized with Docker; deployed to Kubernetes with autoscaling policies for traffic bursts." },
      { step: "Results", description: "+200% traffic capacity, sub-100ms load times, 18% conversion lift at the next flash sale." }
    ],
    techStack: ["Laravel", "MySQL", "Redis", "Docker", "Kubernetes", "Tailwind", "Vue"],
    metrics: [
      { label: "Traffic Capacity", value: "+200%" },
      { label: "Page Load Time", value: "< 100ms" },
      { label: "Error Rate", value: "–99%" },
      { label: "Conversion Rate", value: "+18%" }
    ],
    timeline: "10 weeks",
    role: "Full-Stack Engineer",
    differently: "I'd push for a controlled real-traffic ramp ('game day') earlier in the process. We validated against load testing tools, but a few edge cases in session state only appeared on launch day — a staged production traffic test would have caught them beforehand.",
    testimonialId: 3
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon SaaS Starter",
    description: "A production-ready Next.js boilerplate with Auth, Stripe, and Prisma integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind"],
    engagementType: "Open Source",
    problemStatement: "I built this because every new SaaS project I started wasted its first two weeks on identical auth, billing, and database plumbing. I wanted a starter that ships all of it — production-grade, not tutorial-grade — on day one.",
    longDescription: "A fully-featured SaaS starter kit designed to eliminate the 'boring setup' phase of every new product. Ships with a working auth system, Stripe subscription billing, a Prisma-powered database layer, and a polished Tailwind UI — so you can go from idea to launch in days, not weeks.",
    technicalDecisions: [
      {
        title: "NextAuth.js over a custom auth system",
        body: "Rolling a custom JWT system is tempting but introduces subtle security risks. NextAuth handles edge cases like token rotation, CSRF protection, and OAuth callback flows that most custom implementations miss — and its adapter pattern means swapping identity providers later requires changing a config line, not rewriting middleware."
      },
      {
        title: "Prisma over raw SQL or other ORMs",
        body: "Prisma's type-safe query builder catches schema drift at compile time rather than runtime. For a starter kit, this means consumers can modify the schema and immediately get TypeScript errors pointing to the exact query — not a 500 in production two sprints later."
      },
      {
        title: "Stripe Checkout over Elements",
        body: "Checkout handles SCA compliance, localization, and mobile UX automatically. For a starter kit serving diverse use cases, the opinionated path beats a flexible one that pushes per-project compliance work onto every adopter."
      }
    ],
    features: [
      "Email + OAuth authentication via NextAuth.js",
      "Stripe Checkout & Customer Portal integration",
      "Protected dashboard with role-based access",
      "Prisma ORM with migration scripts",
      "Transactional email via Resend",
      "Fully typed API routes"
    ],
    scope: [
      { label: "Type", value: "Solo project" },
      { label: "Duration", value: "3 weeks" },
      { label: "Quality", value: "Production-grade" },
      { label: "Codebase", value: "~6K lines" }
    ],
    lessonsLearned: "Abstractions that feel helpful in a starter kit can become constraints for adopters. I'd expose more escape hatches early — especially around the auth layer — so users aren't forced to eject the whole system just to make one customization."
  },
  {
    id: 2,
    title: "Crypto Sentinel",
    description: "Real-time cryptocurrency anomaly detection dashboard using WebSocket API.",
    tech: ["React", "WebSockets", "D3.js", "Node.js"],
    engagementType: "Personal Project",
    problemStatement: "I built this because existing crypto dashboards were either too simple (just price feeds) or too complex (full algo-trading platforms). I wanted something in between: a live anomaly detector I could actually understand and act on.",
    longDescription: "A live dashboard that streams cryptocurrency price feeds via WebSocket and uses statistical models to surface anomalies — sudden volume spikes, price divergences, and unusual order book depth — in real time. Built to help traders spot opportunities before they disappear.",
    technicalDecisions: [
      {
        title: "WebSocket over REST polling for price data",
        body: "REST polling at any meaningful frequency either floods the rate limits or introduces unacceptable latency. A persistent WebSocket connection delivers sub-100ms price updates with a fraction of the overhead — essential when a stale alert is worse than no alert."
      },
      {
        title: "D3.js over a charting library",
        body: "Recharts or Chart.js would have been faster to ship, but D3's lower level gives full control over candlestick rendering and anomaly highlight overlays — which are the core UI of this product. A chart library would have constrained exactly the thing I was building around."
      },
      {
        title: "Z-score anomaly detection over ML models",
        body: "A statistical baseline is interpretable and fast. An ML model would require training data, infrastructure, and explains nothing when it fires. For a trading tool, understanding *why* an alert fired is more valuable than marginally better recall."
      }
    ],
    features: [
      "Live price streaming via Binance WebSocket API",
      "Z-score anomaly detection with configurable thresholds",
      "D3.js candlestick + volume charts",
      "Multi-pair monitoring with custom watchlists",
      "Alert system with browser notifications",
      "Dark-mode first responsive design"
    ],
    scope: [
      { label: "Type", value: "Solo project" },
      { label: "Duration", value: "2 weeks" },
      { label: "Quality", value: "Production-grade" },
      { label: "Codebase", value: "~4K lines" }
    ],
    lessonsLearned: "Fixed Z-score thresholds create noise during high-volatility periods. I'd implement adaptive thresholds that adjust to rolling market volatility — it's a one-day change that would cut false positives by half."
  },
  {
    id: 3,
    title: "Neural Gallery",
    description: "Wrapper around Stable Diffusion API with a custom masonry gallery UI.",
    tech: ["Python", "FastAPI", "React", "Stable Diffusion"],
    engagementType: "Personal Project",
    problemStatement: "I built this because the default Stable Diffusion web UI felt like a dev tool, not a creative tool — no history, no organization, no way to iterate on a prompt systematically. I wanted something I'd actually enjoy using.",
    longDescription: "A personal creative tool that sits on top of the Stable Diffusion API and adds a structured prompt builder, generation history, and a masonry gallery for browsing outputs. Aimed at designers and creators who want a cleaner workflow than the default web UI.",
    technicalDecisions: [
      {
        title: "FastAPI over Flask for the generation backend",
        body: "Image generation is I/O-bound and users expect to queue multiple generations simultaneously. FastAPI's native async request handling and background task support let me do this without a separate worker process — Flask would have blocked on each generation request."
      },
      {
        title: "Masonry layout over a uniform grid",
        body: "Generated images come in variable aspect ratios and a rigid grid either crops them or wastes space. Masonry preserves the visual character of each image while maximizing density — for a gallery-first experience, layout is product."
      }
    ],
    features: [
      "Structured prompt builder with style presets",
      "FastAPI backend with async image generation queue",
      "Masonry gallery with infinite scroll",
      "Image variation and inpainting support",
      "Generation metadata stored with each image",
      "One-click download and share links"
    ],
    scope: [
      { label: "Type", value: "Solo project" },
      { label: "Duration", value: "2 weeks" },
      { label: "Quality", value: "Personal + open source" },
      { label: "Codebase", value: "~3.5K lines" }
    ],
    lessonsLearned: "Prompt building is easy; prompt management is hard. Users accumulate hundreds of generations with no way to find the great ones. I'd invest in a tagging and rating system from the start — it's what I reach for most in day-to-day use."
  },
  {
    id: 4,
    title: "Distributed Tasker",
    description: "High-throughput distributed task queue system built with Go.",
    tech: ["Go", "Redis", "Docker", "gRPC"],
    engagementType: "Open Source",
    problemStatement: "I built this because Celery works, but it's heavy. Every Go service I worked on deserved a task queue that didn't require a Python runtime, a Flower dashboard, or 40MB of dependencies.",
    longDescription: "A lightweight distributed task queue inspired by Celery but built in Go for lower latency and memory footprint. Supports priority queues, delayed tasks, retries with exponential backoff, and a minimal gRPC API for task submission and status polling.",
    technicalDecisions: [
      {
        title: "Redis Streams over traditional pub/sub",
        body: "Redis pub/sub is fire-and-forget — if a worker is down when a message arrives, the task is lost. Streams provide consumer groups with acknowledgement semantics, so tasks are retried automatically if a worker crashes mid-execution. For a task queue, at-least-once delivery is non-negotiable."
      },
      {
        title: "gRPC over REST for the task API",
        body: "Task submission and status polling are high-frequency, low-latency operations. gRPC's binary protocol and persistent connections cut overhead significantly vs HTTP/1.1 JSON, and the generated client code eliminates API contract drift — something a handwritten REST client introduces immediately."
      },
      {
        title: "Go over Node.js or Python",
        body: "A task queue's bottleneck is concurrency and memory. Go's goroutines let me run thousands of concurrent workers in a single process at a fraction of the memory cost of Node threads or Python async I/O — and the static binary makes deployment trivially simple."
      }
    ],
    features: [
      "Priority queue with configurable worker pools",
      "Delayed and scheduled task execution",
      "Automatic retries with exponential backoff",
      "gRPC API for task submission and introspection",
      "Redis Streams as the message broker",
      "Prometheus metrics endpoint"
    ],
    scope: [
      { label: "Type", value: "Solo project" },
      { label: "Duration", value: "4 weeks" },
      { label: "Quality", value: "Production-grade" },
      { label: "Codebase", value: "~8K lines" }
    ],
    lessonsLearned: "Building a distributed system solo is fast until you need to test failure modes. I'd set up a chaos testing harness from week one — most of the hard bugs only appeared when I started deliberately killing processes and partitioning the network."
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
