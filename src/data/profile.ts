export const profile = {
  name: "Umar Farooq",
  title: "Senior Software Engineer · Laravel & AI",
  tagline:
    "Eight years on live Laravel systems—and the AI features that land on top of them.",
  location: "Lahore, Pakistan · UTC+5",
  availability: "Open to senior and lead roles",
  years: "8+",
  projects: "5+",
  email: "umar7400@gmail.com",
  phone: "",
  website: "https://contactumar.com",
  github: "https://github.com/Umar-444",
  linkedin: "https://www.linkedin.com/in/contacttoumar",
  resumeNote: "Senior Software Engineer · Senior PHP / Laravel",
  photo: "/images/umar-farooq.webp",
  photoAlt: "Umar Farooq, Senior Software Engineer",
  bio: `Senior software engineer in Lahore. Most of my work is Laravel on systems that were already live when I arrived—migrations, performance work, and codebases that grew faster than anyone planned for. Lately I also ship LLM features into those same products: retrieval, agents, and support assistants with tracing from day one.`,
  focus: ["Laravel · PHP", "Vue · Inertia", "Next.js · React", "Redis · MySQL", "OpenAI · RAG", "AWS"],
  education: "Master's in Computer Science · The Islamia University of Bahawalpur",
};

export const stats = [
  { label: "Years shipping Laravel", value: "8+" },
  { label: "Concurrent users sustained", value: "50K+" },
  { label: "Downtime cut (migration)", value: "~30%" },
  { label: "Core stack", value: "Laravel" },
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
    title: "Web Development",
    blurb: "Production Laravel and Vue applications built to be handed over—not locked to one person's laptop.",
    points: [
      "End-to-end Laravel platforms",
      "Vue / Inertia / Livewire front ends",
      "Legacy modernisation without a risky cutover",
      "Documented deploy paths from local to production",
    ],
    stack: ["Laravel", "Vue.js", "Inertia", "MySQL", "AWS"],
  },
  {
    code: "02",
    title: "AI & LLM Features",
    blurb: "Language-model features inside apps that already have users—with tracing and evaluation from day one.",
    points: [
      "Support assistants and in-product copilots",
      "RAG over company documents",
      "Agents that call internal tools",
      "OpenAI, Anthropic, LangChain, Langfuse",
    ],
    stack: ["OpenAI", "Claude", "LangChain", "RAG", "Langfuse"],
  },
  {
    code: "03",
    title: "Backend & APIs",
    blurb: "Data models, queues, and REST contracts that keep working as traffic grows.",
    points: [
      "API design with versioning",
      "Queues, caching, and background jobs",
      "Monolith to microservices in slices",
      "Performance profiling before big rewrites",
    ],
    stack: ["Laravel", "PHP", "Redis", "Node.js", "REST"],
  },
  {
    code: "04",
    title: "Consulting",
    blurb: "A second opinion on an existing codebase before you commit to a rewrite.",
    points: [
      "Architecture and migration reviews",
      "Performance root-cause sessions",
      "Code review culture for the team",
      "Honest fit assessment on the engagement",
    ],
    stack: ["Laravel", "AWS", "SaaS", "Git"],
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
      "Laravel on AWS holding 50,000+ concurrent users. Request-scoped caching of third-party calls cut API time ~25%; course completion rose ~40% on the client's analytics.",
    stack: ["Laravel", "PHP", "AWS", "MySQL", "REST"],
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
      "Laravel back office with Next.js/React tracking. Socket.IO + Redis adapter pushed live schedule changes to attendees—engagement up ~30%.",
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
      "Vue + Inertia over Laravel: advance booking, live availability, and an operator revenue dashboard. Pre-booking and revenue both moved ~25–30% per client reports.",
    stack: ["Vue.js", "Inertia", "Laravel", "MySQL"],
    image: "/images/cover-parkflow.svg",
    href: "https://contactumar.com/projects/parkflow",
  },
  {
    id: "004",
    year: "Production",
    role: "Development Lead",
    company: "Doocado",
    title: "Doocado multi-tenant ordering",
    summary:
      "One Laravel codebase for restaurant brands across the USA, Mexico, and Brazil—tenant-scoped data, branding, and sales reporting.",
    stack: ["Laravel", "PHP", "MySQL", "SaaS"],
    image: "/images/cover-doocado.svg",
    href: "https://contactumar.com/projects/doocado",
  },
  {
    id: "005",
    year: "Production",
    role: "Lead Developer",
    company: "DineHome",
    title: "DineHome Norway delivery",
    summary:
      "Food ordering platform with payments, CMS integration, and a written Git deploy path from local through staging to production.",
    stack: ["Laravel", "PHP", "MySQL"],
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
  backend: ["Laravel", "PHP", "Node.js", "CodeIgniter", "REST APIs", "Microservices"],
  frontend: ["Vue.js", "Inertia.js", "Livewire", "React.js", "Next.js", "JavaScript"],
  data: ["MySQL", "Redis", "Socket.IO"],
  ai: ["OpenAI API", "Anthropic Claude", "LangChain", "RAG", "Langfuse", "Prompt engineering"],
  ops: ["AWS", "SaaS architecture", "Git / GitHub"],
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
    title: "Measure before you propose",
    body: "On TheTutor.me the API was slow because the same third-party calls repeated inside one request. Caching them in middleware cut response time ~25%. Nobody had named that culprit going in.",
  },
  {
    code: "02",
    title: "Move one flow at a time",
    body: "Hello World's monolith became microservices in pieces while old paths still served traffic. Downtime fell ~30%. The Laravel 4→8 upgrade at In All Media ran the same way.",
  },
  {
    code: "03",
    title: "Write down how to deploy it",
    body: "On DineHome the local→dev→staging→production path was a deliverable. At BitClans I ran code review for the same reason: the team should ship when I am offline.",
  },
  {
    code: "04",
    title: "AI with evaluation",
    body: "LLM features need tracing (Langfuse), spend awareness, and retrieval scoped like the rest of the product—not a chat demo pasted on the side.",
  },
];
