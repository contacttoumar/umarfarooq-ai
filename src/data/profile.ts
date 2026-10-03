export const profile = {
  name: "Umar Farooq",
  title: "Senior Full Stack & PHP Developer",
  tagline:
    "I ship Laravel ERPs, Next.js SaaS, and AI-backed products that hold up past the demo.",
  location: "Riyadh, SA · UTC+3",
  availability: "Open to remote · contract · full-time",
  years: "5+",
  projects: "80+",
  email: "work@itsumarfarooq.com",
  phone: "",
  website: "https://itsumarfarooq.com",
  github: "https://github.com/Umar-444",
  linkedin: "https://www.linkedin.com/in/umarfarooq-ai/",
  resumeNote: "Senior Full Stack · Senior PHP Developer",
  bio: `Senior engineer focused on production PHP/Laravel systems, modern Next.js frontends, and practical AI features. Co-founder at WorldWebTree. Currently modernizing manufacturing ERPs and leading multi-system delivery for leather-industry operations.`,
  focus: [
    "Laravel · PHP 8",
    "Next.js · React",
    "ERP · SaaS",
    "AI agents · RAG",
    "MySQL · Postgres",
  ],
};

export const stats = [
  { label: "Years shipping", value: "5+" },
  { label: "Projects delivered", value: "80+" },
  { label: "Verified credentials", value: "30+" },
  { label: "Public GitHub repos", value: "70+" },
];

export type StackScenario = {
  id: string;
  label: string;
  summary: string;
  pieces: { name: string; why: string; tier: "core" | "data" | "ai" | "edge" }[];
};

export const stackScenarios: StackScenario[] = [
  {
    id: "erp",
    label: "Modernize a legacy PHP ERP",
    summary:
      "Keep the business running. Upgrade modules in slices, lock behavior with tests, and retire the painful parts last.",
    pieces: [
      { name: "Laravel 11/12", why: "Structure, queues, auth, and APIs without a rewrite tax", tier: "core" },
      { name: "MySQL / Postgres", why: "Keep the source of truth; tune indexes before you migrate engines", tier: "data" },
      { name: "Filament / Livewire", why: "Admin panels ship fast when ops teams live in dashboards", tier: "core" },
      { name: "Pest + feature flags", why: "Prove parity, then cut over one workflow at a time", tier: "edge" },
      { name: "Redis + Horizon", why: "Reports and imports leave the request path", tier: "data" },
    ],
  },
  {
    id: "saas",
    label: "Ship a SaaS MVP in weeks",
    summary:
      "Boring stack on purpose. Auth, billing, and a clean Next.js UI so founders can sell before the rewrite itch starts.",
    pieces: [
      { name: "Next.js + TypeScript", why: "App Router, SEO-ready pages, fast UI iteration", tier: "core" },
      { name: "Laravel API", why: "Solid domain logic, policies, and jobs behind the SPA", tier: "core" },
      { name: "Stripe", why: "Subscriptions without inventing billing", tier: "core" },
      { name: "Postgres", why: "JSON when you need it, relations when you don't", tier: "data" },
      { name: "Tailwind + shadcn patterns", why: "Consistent UI without a design debt spiral", tier: "edge" },
    ],
  },
  {
    id: "ai",
    label: "Add AI that survives production",
    summary:
      "Agents, RAG, and chat are pipelines: queues, spend caps, streaming UX, and retrieval scoped like your tenants.",
    pieces: [
      { name: "OpenAI / Claude APIs", why: "Model layer you can swap; product logic stays yours", tier: "ai" },
      { name: "Python + FastAPI", why: "Model-adjacent services beside the PHP core", tier: "ai" },
      { name: "pgvector / embeddings", why: "Search the documents you already store", tier: "data" },
      { name: "Queued jobs", why: "Retries and fat pastes never block the web workers", tier: "core" },
      { name: "SSE streaming UX", why: "Users feel progress; you keep control of cost", tier: "edge" },
    ],
  },
  {
    id: "scale",
    label: "Make a slow app feel fast",
    summary:
      "Profile first. Cache the hot paths. Separate slow jobs from interactive requests. Measure p95, not vibes.",
    pieces: [
      { name: "Query profiling", why: "N+1 and missing indexes beat fancy architecture theater", tier: "data" },
      { name: "Redis cache", why: "Write-through with explicit invalidation beats mystery TTL", tier: "data" },
      { name: "Queue tiers", why: "Fast, slow, and critical work never share one lane", tier: "core" },
      { name: "Docker + CI", why: "Same build from laptop to server", tier: "edge" },
      { name: "AWS / Hostinger ops", why: "Right-sized hosting with backups and monitoring", tier: "edge" },
    ],
  },
];

export const services = [
  {
    code: "01",
    title: "Laravel & PHP Engineering",
    blurb:
      "Custom ERPs, REST APIs, and legacy PHP cleanup that keeps operations online while the codebase gets healthier.",
    points: [
      "ERP module design for manufacturing & inventory",
      "Laravel upgrades, security hardening, and refactors",
      "Admin panels, policies, queues, and API versioning",
      "MySQL performance and schema hygiene",
    ],
    stack: ["Laravel", "PHP 8", "MySQL", "Redis", "Filament"],
  },
  {
    code: "02",
    title: "Next.js SaaS & Product UI",
    blurb:
      "Turn wireframes into revenue-ready web products: dashboards, auth flows, and SEO-friendly marketing surfaces.",
    points: [
      "Next.js App Router + TypeScript apps",
      "React dashboards synced to Laravel backends",
      "Core Web Vitals and technical SEO passes",
      "Stripe-ready subscription shells",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Stripe"],
  },
  {
    code: "03",
    title: "AI Agents & Automation",
    blurb:
      "Practical AI inside real products—document Q&A, copilots, and workflow agents with cost control baked in.",
    points: [
      "RAG search over business documents",
      "Agent workflows with tool calling",
      "n8n / API automation bridges",
      "Chat UIs with streaming responses",
    ],
    stack: ["OpenAI", "Claude", "Python", "FastAPI", "pgvector"],
  },
  {
    code: "04",
    title: "Team Lead & Delivery",
    blurb:
      "Own the path from kickoff to production: requirements, sprints, reviews, and mentoring across Dev, QA, and design.",
    points: [
      "Cross-functional SDLC ownership",
      "Agile / Kanban delivery rituals",
      "Code review culture and Git workflows",
      "Client demos and scope clarity",
    ],
    stack: ["Git", "Scrum", "Kanban", "ClickUp", "Docker"],
  },
];

export const projects = [
  {
    id: "001",
    year: "2025",
    role: "Software Engineer",
    company: "AlShahin Metal Industries",
    title: "Manufacturing ERP on Laravel",
    summary:
      "Enterprise ERP modules for metal manufacturing—legacy PHP stabilization, query work, and agile delivery on live operations.",
    stack: ["Laravel", "PHP", "MySQL", "Git"],
  },
  {
    id: "002",
    year: "2025",
    role: "Software Team Lead",
    company: "MSN Leathers",
    title: "Multi-system leather ops platform",
    summary:
      "Lead for four business systems plus a custom PHP ERP—inventory, supply chain, production, and finance workflows kept in sync.",
    stack: ["PHP OOP", "Tailwind", "Node.js", "MySQL"],
  },
  {
    id: "003",
    year: "2022–now",
    role: "Co-Founder & Full Stack Lead",
    company: "WorldWebTree",
    title: "Client ERPs & web products",
    summary:
      "Agency delivery across 30+ systems: Laravel apps, WordPress, React fronts, and SDLC ownership from discovery to deploy.",
    stack: ["Laravel", "React", "Node.js", "Docker", "WordPress"],
  },
  {
    id: "004",
    year: "2025",
    role: "Co-Founder",
    company: "Homeify AI",
    title: "AI product architecture",
    summary:
      "Technical roadmap for AI-driven applications—model API integrations, automation pipelines, and scalable backend planning.",
    stack: ["Python", "FastAPI", "PHP", "AWS", "Docker"],
  },
  {
    id: "005",
    year: "GitHub",
    role: "Open source / practice",
    company: "Umar-444",
    title: "Commerce, attendance & tooling",
    summary:
      "Public work spanning PHP/PDO ecommerce, ZKTeco attendance APIs, Laravel URL shorteners, SlimPOS (VILT), and Laravel security guides.",
    stack: ["PHP", "Laravel", "Vue", "Inertia", "MySQL"],
    href: "https://github.com/Umar-444",
  },
];

export const experience = [
  {
    period: "May 2025 — Present",
    role: "Software Engineer",
    org: "AlShahin Metal Industries",
    place: "Riyadh, SA",
    focus: "Laravel ERP · manufacturing modules · legacy PHP",
  },
  {
    period: "Apr 2025 — Present",
    role: "Software Team Lead",
    org: "MSN Leathers Pvt Ltd",
    place: "Remote",
    focus: "4 systems + custom ERP · workflow automation",
  },
  {
    period: "Nov 2022 — Present",
    role: "Co-Founder & Full Stack Lead",
    org: "WorldWebTree",
    place: "Remote",
    focus: "30+ client systems · team lead · Laravel & React",
  },
  {
    period: "Mar 2025 — Present",
    role: "Co-Founder",
    org: "Homeify AI",
    place: "Remote",
    focus: "AI product roadmap · agents · cloud backends",
  },
  {
    period: "Dec 2024 — May 2025",
    role: "Software Developer",
    org: "Hint",
    place: "Riyadh, SA",
    focus: "ERPNext · Laravel CRM · agile delivery",
  },
  {
    period: "Dec 2023 — Aug 2024",
    role: "Project Manager & Full Stack Lead",
    org: "Bingtechs Solutions",
    place: "Islamabad, PK",
    focus: "AI platforms · 3 startup apps · Kanban",
  },
];

export const skills = {
  backend: ["PHP 8", "Laravel", "Core PHP / PDO", "Node.js", "Python", "FastAPI", "REST APIs"],
  frontend: ["Next.js", "React", "TypeScript", "Vue.js", "Inertia", "Tailwind CSS", "Bootstrap"],
  data: ["MySQL", "PostgreSQL", "Redis", "Eloquent", "pgvector"],
  ai: ["OpenAI", "Claude", "RAG pipelines", "Prompting", "n8n automation"],
  ops: ["Git", "Docker", "AWS", "Hostinger", "CI/CD", "Linux"],
  product: ["ERP / ERPNext", "SaaS billing patterns", "Agile / Scrum", "Tech leadership"],
};

export const testimonials = [
  {
    quote:
      "Umar turns vague product ideas into polished Next.js builds. Detail-oriented, fast, and the result felt production-ready.",
    name: "Usman Ali",
    role: "Founder & CEO · Cloud Breeze",
  },
  {
    quote:
      "Not just tickets closed—full solutions. Frontend through backend, with performance and reliability treated as features.",
    name: "Haris Ahmad",
    role: "Senior Engineering Lead · TechScale Solutions",
  },
  {
    quote:
      "Clear communication, steady deadlines, and delivery that ships at a production standard. Easy to trust on critical work.",
    name: "Hamza Khan",
    role: "Technical Director · WorldWebTree",
  },
  {
    quote:
      "Complex requirements came back as a simple, elegant system. Clean code and sharp problem framing.",
    name: "Fred Bee",
    role: "Operations Director · Bee Travels",
  },
];

export const principles = [
  {
    code: "01",
    title: "Ship the boring path first",
    body: "Stable Laravel and clear Next.js boundaries beat clever stacks that the next hire can't maintain.",
  },
  {
    code: "02",
    title: "Respect the operators",
    body: "ERP users live in the product all day. Latency, clarity, and recoverable errors matter more than demos.",
  },
  {
    code: "03",
    title: "AI with guardrails",
    body: "Models are components. Queues, budgets, and scoped retrieval decide whether AI helps or burns money.",
  },
  {
    code: "04",
    title: "Lead by unblocking",
    body: "Good delivery is clear scope, honest estimates, and reviews that teach—not heroics at 2 a.m.",
  },
];
