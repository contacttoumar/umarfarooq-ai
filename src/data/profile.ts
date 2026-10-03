export const profile = {
  name: "Umar Farooq",
  title: "Solution Architect & Senior Software Engineer · AI/LLM",
  tagline:
    "I design multi-tenant SaaS architecture and production AI systems that survive real traffic — RAG, LLM integrations, Laravel backends, and cloud infrastructure.",
  location: "Lahore, Pakistan · UTC+5",
  availability: "Open to senior, lead & architecture roles · Remote worldwide",
  years: "8+",
  projects: "8+",
  email: "umar7400@gmail.com",
  phone: "",
  website: "https://contactumar.com",
  github: "https://github.com/contacttoumar",
  githubRepo: "https://github.com/contacttoumar/umarfarooq-ai",
  linkedin: "https://www.linkedin.com/in/contacttoumar",
  resumeNote: "Solution Architect · Senior Software Engineer · AI/LLM",
  photo: "/images/umar-farooq.webp",
  photoAlt: "Umar Farooq, Solution Architect & Senior Software Engineer",
  bio: `I'm a Solution Architect and Senior Software Engineer based in Lahore with 8+ years building and scaling production software. Architecture-focused and AI-forward: multi-tenant SaaS, Laravel/API workloads under real traffic, RAG and LLM features that stay observable, reliable queues and integrations, and cloud infrastructure that does not surprise you on Friday. I ship full-stack when the product needs it — but the problems I care about live at the system and AI layer.`,
  focus: [
    "Solution architecture",
    "Multi-tenant SaaS",
    "RAG · LLM · OpenAI",
    "Laravel · Node",
    "Redis · Elasticsearch",
    "AWS",
  ],
  education: "Master's in Computer Science · The Islamia University of Bahawalpur",
};

export const stats = [
  { label: "Years experience", value: "8+" },
  { label: "Concurrent users", value: "50K+" },
  { label: "SaaS tenants / markets", value: "200+" },
  { label: "Focus", value: "AI + Arch" },
];

export type StackScenario = {
  id: string;
  label: string;
  summary: string;
  pieces: { name: string; why: string; tier: "core" | "data" | "ai" | "edge" }[];
};

export const stackScenarios: StackScenario[] = [
  {
    id: "scale",
    label: "Hold traffic without melting the API",
    summary:
      "Profile first. On TheTutor.me the pain was repeated third-party calls inside one request—not the database everyone blamed.",
    pieces: [
      { name: "Laravel middleware cache", why: "Request-scoped cache removes duplicate upstream hits without a TTL mess", tier: "core" },
      { name: "MySQL indexing", why: "Confirm query plans after you stop guessing", tier: "data" },
      { name: "Redis sessions", why: "Users stop pinning to one box so you can scale out", tier: "data" },
      { name: "AWS horizontal scale", why: "Add machines for the next spike instead of buying a taller ceiling", tier: "edge" },
      { name: "Load tests", why: "Know the concurrent-user number before production finds it", tier: "edge" },
    ],
  },
  {
    id: "realtime",
    label: "Ship live updates at an event",
    summary:
      "Organisers change a schedule; attendees should see it without refreshing. Socket.IO alone is not enough once you run more than one process.",
    pieces: [
      { name: "Laravel domain API", why: "Keep admin and business rules where they already live", tier: "core" },
      { name: "Socket.IO + Redis adapter", why: "Fan events across processes so every attendee hears the update", tier: "data" },
      { name: "Next.js + React UI", why: "Real-time surfaces without a full rewrite of the back office", tier: "core" },
      { name: "Redis pub/sub", why: "Cheap fan-out when sticky sessions would lie to you mid-event", tier: "data" },
      { name: "Staging latency checks", why: "Measure update delay before the venue is full", tier: "edge" },
    ],
  },
  {
    id: "saas",
    label: "Build airport parking SaaS",
    summary:
      "Booking should feel like an app. Operators need live utilisation. Inertia keeps one codebase when nothing else will consume an API.",
    pieces: [
      { name: "Laravel + Inertia", why: "SPA feel without maintaining a separate API client forever", tier: "core" },
      { name: "Vue.js", why: "Booking flow and operator dashboard in one stack", tier: "core" },
      { name: "MySQL", why: "Availability, bookings, and revenue in one relational model", tier: "data" },
      { name: "Analytics first", why: "Operators log in for utilisation and pricing truth—not polish", tier: "edge" },
      { name: "Advance booking UX", why: "Travellers decide before they arrive at the curb", tier: "edge" },
    ],
  },
  {
    id: "ai",
    label: "Add AI to a product that already has users",
    summary:
      "Support assistants, document RAG, and agents that call internal tools—with evaluation, not just a chat demo.",
    pieces: [
      { name: "OpenAI / Claude APIs", why: "Model layer you can swap; product logic stays yours", tier: "ai" },
      { name: "LangChain (Python)", why: "Retrieval and tool-calling pipelines beside Laravel", tier: "ai" },
      { name: "Langfuse", why: "Tracing and evaluation from the first production call", tier: "ai" },
      { name: "Queued jobs", why: "Fat pastes and retries never block web workers", tier: "core" },
      { name: "Scoped retrieval", why: "Documents respect the same tenancy rules as the rest of the app", tier: "data" },
    ],
  },
];

export const services = [
  {
    code: "01",
    title: "AI & LLM systems",
    blurb:
      "Production AI beyond the basic API call — RAG, embeddings, streaming UX, cost controls, and features that stay maintainable after the prototype.",
    points: [
      "RAG / semantic retrieval and support copilots",
      "OpenAI & Claude integrations with retries and queues",
      "Fraud, pricing, and demand AI hooks in real pipelines",
      "Tracing, evaluation, and per-feature cost awareness",
    ],
    stack: ["OpenAI", "Claude", "LangChain", "RAG", "Langfuse"],
  },
  {
    code: "02",
    title: "Solution architecture & multi-tenancy",
    blurb:
      "SaaS architecture decisions that affect hundreds of customers on one codebase — isolation, billing, queues, and observability.",
    points: [
      "Tenant isolation and tenant-scoped data models",
      "Tenant-aware queues, cache, and authorization",
      "Subscription / billing architecture (Stripe patterns)",
      "Migrations, audit trails, and admin tooling at scale",
    ],
    stack: ["Laravel", "PostgreSQL", "MySQL", "Redis", "SaaS"],
  },
  {
    code: "03",
    title: "Performance & scalable backends",
    blurb:
      "Laravel and API workloads under real traffic — caching, search, load balancing, and measurement-first performance work.",
    points: [
      "Query profiling and N+1 elimination",
      "Redis + Elasticsearch hot paths",
      "AWS ALB, replicas, and autoscaling patterns",
      "WebSockets, queues, and event-driven workflows",
    ],
    stack: ["Laravel", "Node.js", "Redis", "Elasticsearch", "AWS"],
  },
  {
    code: "04",
    title: "Full-stack product engineering",
    blurb:
      "Architecture that ships — React/Vue/Next surfaces beside Laravel and Node APIs, with deploy paths the team can own.",
    points: [
      "Vue / Inertia / React / Next.js product UIs",
      "REST APIs, webhooks, and integrations",
      "Real-time UX and admin tooling",
      "Documented release paths and architecture reviews",
    ],
    stack: ["React", "Vue", "Next.js", "Laravel", "Node.js"],
  },
];

export const projects = [
  {
    id: "001",
    year: "Production",
    role: "Senior Laravel Developer",
    company: "TheTutor.me",
    title: "TheTutor.me learning platform",
    summary:
      "High-concurrency EdTech on Laravel and AWS — 50,000+ concurrent users. Request-scoped caching of third-party calls cut API time ~25%; course completion rose ~40% on the client's analytics.",
    stack: ["Laravel", "PHP", "AWS", "MySQL", "Architecture"],
    image: "/images/cover-thetutor-me.svg",
    href: "https://contactumar.com/projects/thetutor-me",
  },
  {
    id: "002",
    year: "Production",
    role: "Senior Developer",
    company: "EventBuizz",
    title: "EventBuizz real-time events",
    summary:
      "Enterprise event platform with Laravel back office and Next.js/React tracking. Socket.IO + Redis adapter for live schedule updates — engagement up ~30%.",
    stack: ["Laravel", "Next.js", "React", "Socket.IO", "Redis"],
    image: "/images/cover-eventbuizz.svg",
    href: "https://contactumar.com/projects/eventbuizz",
  },
  {
    id: "003",
    year: "Production",
    role: "Senior Developer",
    company: "ParkFlow",
    title: "ParkFlow airport parking SaaS",
    summary:
      "SaaS architecture with Vue + Inertia over Laravel: advance booking, live availability, operator revenue analytics. Pre-booking and revenue lifted ~25–30% per client reports.",
    stack: ["Vue.js", "Inertia", "Laravel", "MySQL", "SaaS"],
    image: "/images/cover-parkflow.svg",
    href: "https://contactumar.com/projects/parkflow",
  },
  {
    id: "004",
    year: "Production",
    role: "Development Lead",
    company: "Doocado",
    title: "Doocado multi-tenant food ordering",
    summary:
      "Multi-tenant SaaS for restaurant brands across USA, Mexico, and Brazil — shared infra, tenant-scoped data and branding, sales reporting. Isolation as an architecture concern, not only a column.",
    stack: ["Laravel", "PHP", "MySQL", "Multi-tenancy"],
    image: "/images/cover-doocado.svg",
    href: "https://contactumar.com/projects/doocado",
  },
  {
    id: "005",
    year: "Production",
    role: "Lead Developer",
    company: "DineHome",
    title: "DineHome Norway delivery platform",
    summary:
      "Food ordering and delivery for the Norwegian market. Laravel with payment-gateway and CMS integrations, plus a written Git release path: local → development → staging → production.",
    stack: ["Laravel", "PHP", "MySQL", "Payments", "CMS"],
    image: "/images/cover-dinehome.svg",
    href: "https://contactumar.com/projects/dinehome",
  },
  {
    id: "006",
    year: "Recent",
    role: "Full-stack engineer",
    company: "LuckyCharmGold",
    title: "LuckyCharmGold AI commerce marketplace",
    summary:
      "React.js storefront with AI pricing/fraud copilots, Redis + Elasticsearch catalog, AWS ALB. Checkout conversion +41%; catalog p95 1.8s → 220ms.",
    stack: ["React.js", "Node.js", "Redis", "Elasticsearch", "OpenAI", "AWS"],
    image: "/images/cover-luckycharmgold.svg",
    href: "https://luckycharmgold.com/",
  },
  {
    id: "007",
    year: "Recent",
    role: "Full-stack engineer",
    company: "Direct To You Tickets",
    title: "Direct To You Tickets ops platform",
    summary:
      "Vue.js admin + Node services with Redis holds and AI demand/pricing match. Time-to-match ↓70%; Elasticsearch search p95 ~2.5s → ~180ms.",
    stack: ["Vue.js", "React.js", "Node.js", "Redis", "Elasticsearch", "AI"],
    image: "/images/cover-dtyt.svg",
    href: "https://directtoyoutickets.com/",
  },
  {
    id: "008",
    year: "Recent",
    role: "Platform engineer",
    company: "Greencard",
    title: "Greencard ACH payment ecosystem",
    summary:
      "Multi-repo payment architecture: Laravel core, Node agent API, React/Vue panels, WooCommerce plugin. Idempotent ACH, HMAC webhooks, Redis locks — regulated pay-by-bank across 50 U.S. states.",
    stack: ["Laravel", "Node.js", "React", "Vue.js", "WooCommerce", "AWS"],
    image: "/images/cover-greencard.svg",
    href: "https://paygreencard.com/",
  },
];

export const experience = [
  {
    period: "Oct 2024 — Present",
    role: "Senior Software Engineer",
    org: "Wanological Solutions",
    place: "Lahore, Pakistan",
    focus: "Secure Laravel platforms, legacy modularisation, LLM features, ~40% faster data processing via diagnostics",
  },
  {
    period: "Aug 2023 — Sep 2024",
    role: "Senior Laravel Developer",
    org: "BitClans IT Solutions",
    place: "Lahore, Pakistan",
    focus: "End-to-end Laravel delivery, code review ownership, Vue.js fronts",
  },
  {
    period: "Feb 2022 — Dec 2022",
    role: "Senior PHP Developer",
    org: "In All Media",
    place: "Remote",
    focus: "Laravel 4→8 migration (60% in Q1), Next.js + React Native features",
  },
  {
    period: "Jun 2018 — Feb 2022",
    role: "Senior Web Developer",
    org: "Hello World Technologies",
    place: "Rahim Yar Khan, Pakistan",
    focus: "Laravel APIs, monolith→microservices (~30% less downtime), CodeIgniter",
  },
];

export const skills = {
  backend: [
    "PHP",
    "Laravel",
    "Node.js",
    "REST APIs",
    "Webhooks",
    "Queues / workers",
    "Idempotency",
    "WooCommerce",
  ],
  frontend: ["React.js", "Vue.js", "Next.js", "Inertia.js", "TypeScript", "Admin SPAs", "Real-time UX"],
  data: ["MySQL / RDS", "Redis locks & cache", "Elasticsearch / OpenSearch", "Read replicas", "Socket.IO"],
  ai: ["OpenAI", "Claude", "LangChain", "RAG / embeddings", "Fraud & pricing hooks", "Support copilots"],
  ops: ["AWS ALB", "SQS", "CloudFront", "S3", "ElastiCache", "CloudWatch", "CI/CD", "WAF"],
  architecture: [
    "Microservices boundaries",
    "Multi-tenancy",
    "Payment rails",
    "Inventory state machines",
    "Observability",
    "Reliability",
  ],
};

export const testimonials = [
  {
    quote:
      "I started under Umar's mentorship at Hello World Technologies. He is profound, tackles hard problems, and would strengthen any team.",
    name: "Sohail Idrees",
    role: "Digital Growth Strategist · TIDE Digitalize",
  },
  {
    quote:
      "Five years alongside Umar. His work ethic, creativity under pressure, and full-stack skill in React, CodeIgniter, Laravel, and Node stand out.",
    name: "Zarttash Zafar",
    role: "Software Engineer & Product Builder",
  },
  {
    quote:
      "Umar handles tough clients calmly. That patience helped us win and keep work throughout our journey.",
    name: "Usman Ansari",
    role: "Full Stack Developer",
  },
  {
    quote:
      "As a team lead he juggled several projects at once. Multitasking and delivery that deserve recognition.",
    name: "Junaid Tahir",
    role: "Project Manager, CSPO®",
  },
  {
    quote:
      "Long-time colleague at Hello World. Outstanding at complex business logic, and a reliable team player.",
    name: "Jahanzaib Ramzan",
    role: "Senior Software Engineer",
  },
  {
    quote:
      "Umar's multitasking drove real growth for the company. I worked with him when he was senior to me.",
    name: "Khawar Hussain",
    role: "Senior Full-Stack Engineer",
  },
];

export const principles = [
  {
    code: "01",
    title: "Simplicity before cleverness",
    body: "Architecture should make the safe path the easy path. Clever abstractions earn their keep — they are not the default.",
  },
  {
    code: "02",
    title: "Multi-tenancy is architecture",
    body: "Not only a tenant_id column. Isolation must hold across queries, queues, cache, AI retrieval, and admin tooling.",
  },
  {
    code: "03",
    title: "AI needs evaluation, budgets, failure modes",
    body: "Prompts alone are not a product. Production LLM features need traces, spend controls, retries, and scoped data.",
  },
  {
    code: "04",
    title: "Observability is part of the feature",
    body: "If you cannot see p95, queue lag, and webhook failure ratio, you do not own the system yet.",
  },
  {
    code: "05",
    title: "Performance starts with measurement",
    body: "Profile before proposing. On TheTutor.me the slowdown was repeated third-party calls — not the database everyone blamed.",
  },
  {
    code: "06",
    title: "Good architecture makes future changes boring",
    body: "Frameworks change quickly. Boundaries, idempotency, and documented deploy paths usually do not.",
  },
];
