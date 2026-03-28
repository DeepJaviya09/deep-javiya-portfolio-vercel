import { CaseStudy, Testimonial, Project } from './types';

export const TECH_STACK = [
  "Laravel", "React", "Vue", "n8n", "AI Agents", "RAG", "Qdrant", "MySQL", "PostgreSQL", "Tailwind", "Docker"
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "PrimeCX — AI Chatbot Platform",
    category: "Full Stack Architecture",
    industry: "AI SaaS",
    engagementType: "Full Build",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop",
    challenge: "A growing digital agency had no scalable delivery model, no white-label infrastructure, and no way to monetize recurring chatbot usage across multiple tenants.",
    result: "Built a fully white-labeled, multi-tenant SaaS — agencies onboard clients in minutes, deploy chatbots instantly, and collect recurring revenue without writing a single line of code per client.",
    overview: "A growing digital agency needed a way to sell AI-powered chatbots to their clients without building a new product for every customer. They had no scalable delivery model, no white-label infrastructure, and no way to monetize recurring chatbot usage across multiple tenants.",
    businessImpact: "Going from zero to a fully billable, white-label AI chatbot platform meant the agency could onboard new clients in minutes instead of weeks, charge recurring subscriptions, and let customers self-serve — turning a services business into a scalable SaaS product with predictable monthly revenue.",
    solution: "Architected a three-tier system: a Laravel backend for multi-tenant user management, subscriptions, and API orchestration; a Python/Flask microservice for AI operations (embeddings, RAG, document processing, web scraping) backed by ChromaDB for vector storage; and a React widget for embeddable chatbot delivery. Integrated Stripe Connect for agency-level billing and sub-account management, and Google Calendar API for appointment scheduling inside the chatbot flow.",
    myRole: [
      "System architecture — designed the three-tier service topology and API contracts between Laravel, Python, and React",
      "AI pipeline — built the RAG pipeline with multi-provider support (OpenAI, Groq, Ollama, HuggingFace) and ChromaDB vector storage",
      "Multi-tenancy — implemented custom domain middleware, agency sub-accounts, and role-based access control",
      "Billing — integrated Stripe subscriptions + Stripe Connect with credit-based message metering",
      "Widget — built the React chatbot widget with lead forms, appointment booking, and agent handoff"
    ],
    beforeAfter: [
      { label: "Client Onboarding", before: "Days (manual setup)", after: "Minutes (self-serve)" },
      { label: "Chatbot Deployment", before: "Custom dev per client", after: "Instant embed widget" },
      { label: "Billing", before: "Manual invoicing", after: "Automated via Stripe" },
      { label: "AI Training", before: "None", after: "Docs, PDFs, website scraping" }
    ],
    process: [
      { step: "Discovery", description: "Mapped agency workflow: how clients would be onboarded, how chatbots would be trained, and what billing model would support white-labeling." },
      { step: "Architecture", description: "Designed the three-service topology (Laravel + Python AI microservice + React widget) with clean API contracts between each layer." },
      { step: "Build", description: "Built Laravel multi-tenant auth with custom domain routing, Python RAG pipeline with ChromaDB, and React embed widget with lead collection, appointment booking, and agent handoff." },
      { step: "Billing", description: "Integrated Stripe + Stripe Connect for platform-level subscriptions and agency sub-account payouts; implemented credit-based message metering per plan tier." },
      { step: "Deploy", description: "Deployed Laravel on shared/VPS hosting with Python microservice running separately; React widget served as a distributable embed script." }
    ],
    techStack: ["Laravel", "PHP", "Python", "Flask", "React", "MySQL", "ChromaDB", "OpenAI", "Stripe", "AWS S3", "Google Calendar API", "Vite"],
    metrics: [
      { label: "AI Providers", value: "3" },
      { label: "Training Sources", value: "4" },
      { label: "Manual Onboarding", value: "Zero" },
      { label: "Multi-tenant", value: "Agency + Sub-accounts" }
    ],
    timeline: "10 weeks",
    role: "Lead Full Stack Engineer",
    differently: "I'd decouple the Python microservice earlier with an async job queue (Celery + Redis) rather than synchronous HTTP calls from Laravel. Long-running training jobs — especially website crawls and large PDF processing — block the request cycle under load. An event-driven training pipeline would have made the system more resilient and opened the door to real-time training progress feedback in the UI without polling.",
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
    title: "ProducOps — B2B Order & Inventory Management System",
    category: "Operations Automation",
    industry: "Food & Beverage",
    engagementType: "Full Build",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    challenge: "A traditional bakery and confectionery business was managing their entire order-to-production workflow manually — spreadsheets, WhatsApp messages, and verbal handoffs — with no traceability, no cutoff enforcement, and no inventory visibility.",
    result: "Replaced a fully manual operation with a centralised, role-based system covering real-time order management, automated cutoff enforcement, live inventory tracking, and one-click Excel import/export.",
    overview: "A traditional bakery and confectionery business producing handcrafted treats was managing their entire order-to-production workflow manually — spreadsheets, WhatsApp messages, and verbal handoffs between the sales desk, production floor, and warehouse. The business was growing, and the manual approach was becoming a liability — both operationally and in terms of customer satisfaction.",
    businessImpact: "A system like this transforms a food production business from reactive to proactive. When staff can see in real-time which orders landed before cutoff, what stock is available, and what needs to be produced — you stop firefighting and start executing. The production team stops spending time on 'do we have enough?' and starts focusing on making great product. The sales team stops digging through WhatsApp threads and starts closing orders confidently.",
    solution: "Built a full-stack web application with a React + TypeScript SPA frontend and a Laravel 10 REST API backend, backed by PostgreSQL. The core of the system is a dedicated InventoryService handling UoM conversion math and ledger transactions — when an order for 2 BOX2 packages is imported, the service applies the conversion factor and deducts the correct quantity from the ledger, cascading through BOM recipes and packaging compositions. Orders are automatically tagged before or after the 2 PM production cutoff at the point of creation or import. A 6-sheet Excel import pipeline handles master data initialisation (UOM → Ingredients → Packaging → Products → Recipes → Packaging Composition) with referential validation at each step.",
    myRole: [
      "System architecture — database schema design, API contract definition, frontend state management strategy",
      "Backend (Laravel) — all 12+ controllers, Eloquent models, Sanctum auth, Excel import/export, UoM conversion service, RBAC middleware",
      "Frontend (React/TypeScript) — full SPA: routing, protected routes, all 19 page components, Shadcn/ui integration, React Query data layer, form validation",
      "Business logic — UoM conversion formula implementation, cutoff time enforcement, inventory ledger with full audit trail",
      "Documentation — user story guides, import format specs, execution plans for client handoff"
    ],
    beforeAfter: [
      { label: "Order Visibility", before: "Fragmented (WhatsApp + spreadsheets)", after: "Centralised, real-time dashboard" },
      { label: "Cutoff Enforcement", before: "Manual / inconsistent", after: "Automated — flagged at ingestion" },
      { label: "Inventory Tracking", before: "Manual spreadsheet", after: "Live ledger with full audit trail" },
      { label: "Bulk Order Import", before: "Manual re-entry", after: "One-click Excel import + auto stock deduction" },
      { label: "Reporting", before: "None", after: "Daily/Monthly/Yearly Excel export" },
      { label: "Multi-user Access", before: "None", after: "Role-based (HR Admin, Manager, Employee)" }
    ],
    process: [
      { step: "Discovery", description: "Mapped the entire operational workflow end-to-end: how orders arrive, how production cutoff is decided, how warehouse staff consume stock, and what management needs to see. Catalogued all product SKUs, raw materials, packaging types, and UoM conversion relationships." },
      { step: "Design", description: "Designed the database schema with referential integrity across all master data tables. Defined the UoM conversion formula and where it fires in the import pipeline. Designed the RBAC model and wireframed all 10+ pages with the client." },
      { step: "Build", description: "Backend first: all 12+ API controllers, Eloquent models, and Excel import/export classes. Frontend second: full React SPA — AppSidebar with permission-filtered navigation, Dashboard KPI cards, Orders table, Inventory dashboard with ledger view, all Master Data CRUD pages, and Reports archive." },
      { step: "Data Import", description: "Built a 6-sheet Excel import flow for master data initialisation with validation at each step, referencing previously loaded data. Documented the exact import order and field mapping for the client's ongoing use." },
      { step: "Handoff", description: "Produced full documentation: user journey guides per persona, inventory deduction mechanics, and import format specs. Delivered a production-ready build with all test users seeded." }
    ],
    techStack: ["React", "TypeScript", "Laravel", "PostgreSQL", "TailwindCSS", "Shadcn/ui", "TanStack Query", "React Hook Form", "Recharts", "Laravel Sanctum", "Google OAuth", "Vite"],
    metrics: [
      { label: "API Controllers", value: "12+" },
      { label: "Page Components", value: "19" },
      { label: "User Roles", value: "5" },
      { label: "Manual Processes", value: "Zero" }
    ],
    timeline: "10–12 weeks",
    role: "Full-Stack Engineer",
    differently: "The UoM conversion logic was built as a service method inside the import pipeline. In hindsight, I'd extract it into a standalone, unit-tested UomConversionEngine class from day one — because it underpins every inventory calculation and any bug there silently corrupts the entire ledger. I'd also build the RBAC permission matrix as a config file (JSON/YAML) rather than hardcoded in middleware and frontend logic, so the client can adjust role permissions without a code deploy.",
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
