export const profile = {
  name: "Umar Farooq",
  title: "Senior Software Engineer · Full-Stack & Platform",
  tagline:
    "I design and ship software that survives real users, real traffic, and real failure modes — commerce, ticketing ops, ACH rails, and production AI.",
  location: "Lahore, Pakistan · UTC+5",
  availability: "Open to senior and lead roles · Remote worldwide",
  years: "8+",
  projects: "8+",
  email: "umar7400@gmail.com",
  phone: "",
  website: "https://contactumar.com",
  github: "https://github.com/contacttoumar",
  githubRepo: "https://github.com/contacttoumar/umarfarooq-ai",
  linkedin: "https://www.linkedin.com/in/contacttoumar",
  resumeNote: "Senior Software Engineer · Full-Stack & Platform",
  photo: "/images/umar-farooq.webp",
  photoAlt: "Umar Farooq, Senior Software Engineer",
  bio: `I'm a Senior Software Engineer based in Lahore with 8+ years building production systems that cannot afford silent failure. Backend-heavy and systems-focused: checkout integrity, concurrent inventory locks, idempotent payments, Redis/Elasticsearch hot paths, AWS load balancing, and AI features that stay observable after the prototype. I work across React, Vue, Laravel, and Node when shipping requires it — but the problems I care about live at the integrity layer.`,
  focus: [
    "Laravel · Node",
    "React · Vue",
    "Redis · Elasticsearch",
    "AWS ALB",
    "Webhooks · Idempotency",
    "OpenAI · Production AI",
  ],
  education: "Master's in Computer Science · The Islamia University of Bahawalpur",
};

export const stats = [
  { label: "Years shipping", value: "8+" },
  { label: "Concurrent users", value: "50K+" },
  { label: "Featured platforms", value: "3" },
  { label: "Timezone", value: "UTC+5" },
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
    title: "Commerce & marketplace systems",
    blurb:
      "Buy/sell platforms where money, inventory, and trust collide — checkout integrity under concurrency, not just a pretty storefront.",
    points: [
      "React storefronts with API-driven catalogs",
      "Multi-rail checkout and sell-side payouts",
      "Loyalty ledgers that survive refunds",
      "Redis + Elasticsearch hot paths under sale spikes",
    ],
    stack: ["React", "Node/PHP", "Redis", "Elasticsearch", "AWS ALB"],
  },
  {
    code: "02",
    title: "Ticketing & ops platforms",
    blurb:
      "Broker/admin systems where seconds matter — inventory state machines, distributed holds, search that does not time out.",
    points: [
      "Vue admin SPAs with JWT + RBAC",
      "Redis holds across load-balanced API nodes",
      "Elasticsearch inventory search & autocomplete",
      "AI demand/pricing/match workers",
    ],
    stack: ["Vue.js", "React", "Node.js", "Redis", "Elasticsearch"],
  },
  {
    code: "03",
    title: "Payments & ACH rails",
    blurb:
      "Multi-repo fintech where webhooks are the product — idempotency, HMAC signatures, Woo plugins, invoice portals.",
    points: [
      "Laravel domain + Node agent APIs",
      "Idempotent payment writes and Redis locks",
      "HMAC webhooks with replay tooling",
      "WooCommerce + React/Vue merchant panels",
    ],
    stack: ["Laravel", "Node.js", "WooCommerce", "Redis", "AWS"],
  },
  {
    code: "04",
    title: "Production AI & platform reviews",
    blurb:
      "AI hooks that survive traffic — fraud/pricing copilots, tracing, budgets — plus architecture reviews before the rewrite.",
    points: [
      "Support/broker copilots with real context",
      "Fraud and pricing pipeline hooks",
      "Cost, retries, and graceful degradation",
      "Performance and concurrency root-cause sessions",
    ],
    stack: ["OpenAI", "Claude", "LangChain", "Laravel", "Observability"],
  },
];

export const projects = [
  {
    id: "001",
    year: "Featured",
    role: "Full-stack engineer",
    company: "LuckyCharmGold",
    title: "LuckyCharmGold AI commerce marketplace",
    summary:
      "React.js storefront for OSRS gold, items, accounts, and services—buy/sell checkout, loyalty ranks, Redis + Elasticsearch catalog, AWS ALB, and AI pricing/fraud copilots. Checkout conversion +41%; catalog p95 1.8s → 220ms.",
    stack: ["React.js", "Node.js", "PHP", "Redis", "Elasticsearch", "AWS", "OpenAI"],
    image: "/images/cover-luckycharmgold.svg",
    href: "https://luckycharmgold.com/",
  },
  {
    id: "002",
    year: "Featured",
    role: "Full-stack engineer",
    company: "Direct To You Tickets",
    title: "Direct To You Tickets ops platform",
    summary:
      "Vue.js DTYT admin + React customer widgets + Node.js services for broker inventory. Redis holds killed double-sells; Elasticsearch search for hot events; AI demand/pricing match. Time-to-match ↓70%; sell-through +33%.",
    stack: ["Vue.js", "React.js", "Node.js", "Redis", "Elasticsearch", "AWS"],
    image: "/images/cover-dtyt.svg",
    href: "https://directtoyoutickets.com/",
  },
  {
    id: "003",
    year: "Featured",
    role: "Platform engineer",
    company: "Greencard",
    title: "Greencard ACH payment ecosystem",
    summary:
      "Multi-repo fintech: Laravel core, Node agent API, React/Vue panels, WooCommerce plugin, invoice pay portal. Idempotent ACH, HMAC webhooks, Redis locks, AWS ALB—pay-by-bank for regulated commerce across all 50 U.S. states.",
    stack: ["Laravel", "Node.js", "React", "Vue.js", "WooCommerce", "Redis", "AWS"],
    image: "/images/cover-greencard.svg",
    href: "https://paygreencard.com/",
  },
  {
    id: "004",
    year: "Production",
    role: "Senior Laravel Developer",
    company: "TheTutor.me",
    title: "TheTutor.me learning platform",
    summary:
      "Laravel on AWS holding 50,000+ concurrent users. Request-scoped caching of third-party calls cut API time ~25%; course completion rose ~40% on the client's analytics.",
    stack: ["Laravel", "PHP", "AWS", "MySQL", "REST"],
    image: "/images/cover-thetutor-me.svg",
    href: "https://contactumar.com/projects/thetutor-me",
  },
  {
    id: "005",
    year: "Production",
    role: "Senior Developer",
    company: "EventBuizz",
    title: "EventBuizz real-time events",
    summary:
      "Laravel back office with Next.js/React tracking. Socket.IO + Redis adapter pushed live schedule changes to attendees—engagement up ~30%.",
    stack: ["Laravel", "Next.js", "React", "Socket.IO", "Redis"],
    image: "/images/cover-eventbuizz.svg",
    href: "https://contactumar.com/projects/eventbuizz",
  },
  {
    id: "006",
    year: "Production",
    role: "Senior Developer",
    company: "ParkFlow",
    title: "ParkFlow airport parking SaaS",
    summary:
      "Vue + Inertia over Laravel: advance booking, live availability, and an operator revenue dashboard. Pre-booking and revenue both moved ~25–30% per client reports.",
    stack: ["Vue.js", "Inertia", "Laravel", "MySQL"],
    image: "/images/cover-parkflow.svg",
    href: "https://contactumar.com/projects/parkflow",
  },
  {
    id: "007",
    year: "Production",
    role: "Development Lead",
    company: "Doocado",
    title: "Doocado multi-tenant food ordering",
    summary:
      "Led a single multi-tenant Laravel app for restaurant brands in the USA, Mexico, and Brazil—shared infra, separate data and branding per tenant, plus operator sales reporting. Every query scoped so one restaurant never sees another's orders.",
    stack: ["Laravel", "PHP", "MySQL", "SaaS architecture"],
    image: "/images/cover-doocado.svg",
    href: "https://contactumar.com/projects/doocado",
  },
  {
    id: "008",
    year: "Production",
    role: "Lead Developer",
    company: "DineHome",
    title: "DineHome Norway delivery platform",
    summary:
      "Food ordering and delivery for the Norwegian market (Foodpanda / Uber Eats category). Laravel with payment-gateway and CMS integrations, plus a written Git release path: local → development → staging → production.",
    stack: ["Laravel", "PHP", "MySQL", "Payments", "CMS"],
    image: "/images/cover-dinehome.svg",
    href: "https://contactumar.com/projects/dinehome",
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
    title: "Integrity before polish",
    body: "A beautiful checkout that double-charges is not shipped. Idempotency keys, locks, and state machines beat hope.",
  },
  {
    code: "02",
    title: "Measure before proposing",
    body: "Profile the slow path. On TheTutor.me the culprit was repeated third-party calls inside one request — not the database everyone blamed.",
  },
  {
    code: "03",
    title: "Concurrency is a product requirement",
    body: "Two brokers, one lot, multiple API nodes: Redis holds and inventory state machines make the failure mode visible and preventable.",
  },
  {
    code: "04",
    title: "Observability is part of the feature",
    body: "If you cannot see queue lag, webhook failure ratio, and checkout error rate, you do not own the system yet.",
  },
  {
    code: "05",
    title: "AI needs budgets and failure modes",
    body: "Prompts alone are not architecture. Production AI needs traces, spend controls, retries, and scoped data.",
  },
  {
    code: "06",
    title: "Write down how to deploy it",
    body: "The team should ship when I am offline. Staging parity and documented release paths are deliverables.",
  },
];
