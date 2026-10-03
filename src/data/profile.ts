export const profile = {
  name: "Umar Farooq",
  title: "AI Engineer & Solution Architect",
  tagline:
    "I take AI features from promising prototype to something a business can depend on: retrieval, copilots and scoring wired into platforms that already carry real traffic and real money.",
  availability: "Open to AI engineering, architecture and lead roles",
  location: "Lahore, Pakistan · UTC+5 · remote worldwide",
  email: "umar7400@gmail.com",
  website: "https://contactumar.com",
  github: "https://github.com/contacttoumar",
  githubRepo: "https://github.com/contacttoumar/umarfarooq-ai",
  linkedin: "https://www.linkedin.com/in/contacttoumar",
  resumeNote: "AI Engineer · Solution Architect · Senior Software Engineer",
  photo: "/images/umar-farooq.webp",
  photoAlt: "Umar Farooq, AI Engineer and Solution Architect",
  bio: `Eight years of shipping software for products that were already live, and increasingly the AI layer that goes on top of them. I design the architecture first (tenancy, queues, caching, search, deploy path) and then add LLM features that inherit those guarantees: scoped retrieval, per-call ownership, spend limits, traces and a fallback when the model is slow or wrong. Most of my reputation comes from fixing the unglamorous failures: double charges, double sells, stale prices, silent webhook retries.`,
  focus: [
    "Production AI / LLM",
    "Solution architecture",
    "Multi-tenant SaaS",
    "Laravel · Node",
    "Redis · Elasticsearch",
    "AWS",
  ],
  education: "Master's in Computer Science, The Islamia University of Bahawalpur",
};

export const stats = [
  { label: "Years in production", value: "8+" },
  { label: "Peak concurrent users", value: "50K+" },
  { label: "Platforms shipped", value: "8" },
  { label: "With AI in the pipeline", value: "3" },
];

export const expertise = [
  {
    code: "A",
    area: "Solution architecture",
    headline: "Boundaries decided before the code is written.",
    points: [
      "Tenant isolation that holds across queries, queues, cache and retrieval",
      "State machines for orders, inventory and payments, with one place that rejects illegal jumps",
      "Idempotent writes and HMAC-signed webhooks with replay wherever money moves",
      "ALB and auto scaling, read replicas, search cluster and queue workers sized to the traffic",
      "Circuit breakers around payment and bank providers; shard-ready tables for orders and payments",
    ],
  },
  {
    code: "B",
    area: "AI engineering",
    headline: "LLM features that live inside the pipeline.",
    points: [
      "Support and broker copilots that read real order and inventory context",
      "Fraud and anomaly scoring hooked into order creation as a scoring step",
      "Price intelligence from market signals; demand forecasting by artist, venue and season",
      "Semantic matching: embeddings plus structured filters to rank the best inventory",
      "Per-call owner and budget, traces, and a deterministic fallback for every model call",
    ],
  },
  {
    code: "C",
    area: "Reliability and performance",
    headline: "Find the real cause, then fix only that.",
    points: [
      "Profiling before changing anything: on TheTutor.me the cost was repeated upstream calls, not the database",
      "Redis caches with real invalidation and stampede protection on hot rate and catalog endpoints",
      "Elasticsearch with fuzzy analyzers replacing LIKE queries that timed out",
      "Async CSV import and reindex with failed-row reports and partial-commit safety",
      "Legacy upgrades in slices: Laravel 4 to 8, monolith to microservices on live traffic",
    ],
  },
];

export type StackScenario = {
  id: string;
  label: string;
  summary: string;
  pieces: { name: string; why: string; tier: "core" | "data" | "ai" | "edge" }[];
};

export const stackScenarios: StackScenario[] = [
  {
    id: "ai-product",
    label: "The AI demo works. Now it has to ship.",
    summary:
      "A prototype proves the idea. Production asks who called the model, what it cost, what it was allowed to see, and what happens when it fails.",
    pieces: [
      { name: "Scoped retrieval", why: "Documents and memory obey the same boundaries as the database, so one customer never surfaces in another's answer", tier: "ai" },
      { name: "Per-call ownership + budget", why: "Every model call carries who, which feature and a spend ceiling, so cost has an address", tier: "ai" },
      { name: "Queue + retry policy", why: "Long prompts and flaky providers go through workers, never the web request", tier: "core" },
      { name: "Traces and an eval set", why: "You can see a bad answer, replay it, and prove a prompt change helped", tier: "edge" },
      { name: "Deterministic fallback", why: "A rule-based path takes over when the model is slow, wrong or down", tier: "core" },
    ],
  },
  {
    id: "double-spend",
    label: "Customers are charged or sold twice.",
    summary:
      "Retries, double clicks and two operators acting at once are normal. The system has to treat them as the default case.",
    pieces: [
      { name: "Idempotency keys", why: "A retried request returns the first result instead of creating a second order or charge", tier: "core" },
      { name: "Redis holds with expiry", why: "A lot is reserved for a short window across every API node, then released automatically", tier: "data" },
      { name: "State machine", why: "available, held, sold, fulfilled: illegal jumps are rejected in one place", tier: "core" },
      { name: "Audit rows", why: "Disputes get an answer: who changed what, and when", tier: "edge" },
    ],
  },
  {
    id: "slow-search",
    label: "Search and catalog pages time out.",
    summary:
      "Slow browse pages usually come from LIKE queries, N+1 loads and cold caches, not from the database being too small.",
    pieces: [
      { name: "Elasticsearch index", why: "Filters, fuzzy names and autocomplete leave MySQL entirely", tier: "data" },
      { name: "Redis cache with real invalidation", why: "Hot rates and fragments refresh the moment an admin changes them", tier: "data" },
      { name: "Read replicas", why: "Reporting and browse traffic stop competing with writes", tier: "data" },
      { name: "Async reindex", why: "Imports and updates reach the index through a queue, not a page request", tier: "core" },
    ],
  },
  {
    id: "webhooks",
    label: "Webhooks arrive twice, late or out of order.",
    summary:
      "Providers deliver at least once. Your side has to make the effect happen exactly once, whatever the delivery does.",
    pieces: [
      { name: "Signature verification", why: "Reject anything that is not signed by the provider or by you", tier: "core" },
      { name: "Event ledger", why: "Every event id is stored, so a duplicate is recognised and ignored", tier: "data" },
      { name: "Replay tooling", why: "Support can safely re-run a failed event from a dashboard", tier: "edge" },
      { name: "Circuit breakers", why: "One provider outage degrades a feature instead of the whole checkout", tier: "core" },
    ],
  },
  {
    id: "tenancy",
    label: "Many customers share one codebase.",
    summary:
      "Tenancy is a property of the whole system. A scoped query is one layer; queues, cache, files and AI context need the same rule.",
    pieces: [
      { name: "Scoped data access", why: "Every read and write passes through a tenant-aware layer that is hard to bypass", tier: "core" },
      { name: "Tenant-aware queues and cache", why: "One noisy tenant cannot starve or leak into another", tier: "data" },
      { name: "Per-tenant branding and config", why: "One deployment, many identities", tier: "core" },
      { name: "Isolation tests", why: "A canary tenant tries to reach another's data on every release", tier: "edge" },
    ],
  },
];

export const services = [
  {
    code: "01",
    title: "AI features inside real products",
    blurb:
      "Copilots, retrieval and scoring that live in your existing workflow and respect its rules, instead of a chat window bolted on the side.",
    points: [
      "Support and operator copilots with order or inventory context",
      "Semantic matching from a customer request to the right item",
      "Fraud, anomaly and price-suggestion signals inside the pipeline",
      "Traces, eval sets, spend limits and fallbacks from the first release",
    ],
    stack: ["OpenAI", "Claude", "LangChain", "Embeddings", "Langfuse"],
  },
  {
    code: "02",
    title: "Solution architecture",
    blurb:
      "The structural decisions that are cheap now and expensive later: tenancy, state, queues, search and the deploy path.",
    points: [
      "Tenant isolation across data, jobs, cache and AI context",
      "State machines for orders, inventory and payments",
      "Service boundaries and API contracts across multiple repos",
      "Architecture reviews before a rewrite is approved",
    ],
    stack: ["Laravel", "Node.js", "MySQL", "Redis", "AWS"],
  },
  {
    code: "03",
    title: "Performance and reliability",
    blurb:
      "Measured fixes for the slow and fragile parts: the request path, the catalog, the worker queue, the webhook handler.",
    points: [
      "Profiling that finds the real bottleneck first",
      "Redis and Elasticsearch on the hot paths",
      "Load-balanced AWS layouts with replicas and workers",
      "Idempotency, locks and retries for money-moving flows",
    ],
    stack: ["Redis", "Elasticsearch", "SQS", "ALB", "CloudWatch"],
  },
  {
    code: "04",
    title: "Delivery and team lift",
    blurb:
      "Full-stack delivery with the habits that make a team faster: review, documentation and releases that do not depend on one person.",
    points: [
      "React, Vue, Next.js and Inertia surfaces beside Laravel or Node APIs",
      "Code review standards and a written release path",
      "Legacy upgrades in slices on live traffic",
      "Mentoring and handover as part of the engagement",
    ],
    stack: ["React", "Vue", "Next.js", "Laravel", "Git"],
  },
];

export type Project = {
  id: string;
  group: "core" | "recent";
  company: string;
  title: string;
  role: string;
  problem: string;
  fix: string;
  ai?: string;
  hard?: string[];
  architecture?: string;
  outcome: string;
  stack: string[];
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "01",
    group: "core",
    company: "TheTutor.me",
    title: "Learning platform built for 50,000+ concurrent users",
    role: "Senior Laravel Developer",
    problem:
      "Traffic outgrew the platform and the API slowed under load. Everyone suspected the database; nobody had traced it.",
    fix:
      "Profiling showed the same third-party endpoints being called several times inside one request. A request-scoped cache in middleware removed the duplicates. Sessions moved off the app box so machines could be added horizontally on AWS.",
    outcome:
      "Held 50,000+ concurrent users. API about 25% faster in my own before/after benchmark; course completion up roughly 40% on the client's analytics.",
    stack: ["Laravel", "PHP", "AWS", "MySQL", "REST"],
    image: "/images/cover-thetutor-me.svg",
    href: "https://contactumar.com/projects/thetutor-me",
  },
  {
    id: "02",
    group: "core",
    company: "EventBuizz",
    title: "Real-time event platform",
    role: "Senior Developer",
    problem:
      "Attendees and organisers only saw schedule changes after a refresh, which at a live event is already too late.",
    fix:
      "Socket.IO for live updates with a Redis adapter, so an update on one process reaches clients connected to every other. Laravel kept the domain and administration; Next.js and React drive the live surface.",
    outcome:
      "Engagement up about 30% (client analytics); real-time update latency down roughly 25% and event processing about 20% faster in staging.",
    stack: ["Laravel", "Next.js", "React", "Socket.IO", "Redis"],
    image: "/images/cover-eventbuizz.svg",
    href: "https://contactumar.com/projects/eventbuizz",
  },
  {
    id: "03",
    group: "core",
    company: "ParkFlow",
    title: "Airport parking SaaS",
    role: "Senior Developer",
    problem:
      "Travellers could not tell if parking would be free before arriving, and operators priced spaces without a live view of occupancy or revenue.",
    fix:
      "Vue with Inertia on Laravel, so booking feels like an app without maintaining a second API codebase. The operator analytics dashboard was built before the booking polish because it was the screen operators logged in for.",
    outcome:
      "Booking about 25% faster (staging); pre-booking up roughly 30% and operator revenue up about 25%, as reported by the client.",
    stack: ["Vue.js", "Inertia", "Laravel", "MySQL"],
    image: "/images/cover-parkflow.svg",
    href: "https://contactumar.com/projects/parkflow",
  },
  {
    id: "04",
    group: "core",
    company: "Doocado",
    title: "Multi-tenant restaurant ordering",
    role: "Development Lead",
    problem:
      "Restaurant owners in three countries each needed their own branded ordering system, without a separate deployment per restaurant.",
    fix:
      "One multi-tenant Laravel application with tenant-scoped data and branding, server architecture configured for shared infrastructure, and built-in sales analytics. Every query is scoped, because one wrong join would show one restaurant another's orders.",
    outcome: "Live across the USA, Mexico and Brazil with sales reporting for operators.",
    stack: ["Laravel", "PHP", "MySQL", "Multi-tenancy"],
    image: "/images/cover-doocado.svg",
    href: "https://contactumar.com/projects/doocado",
  },
  {
    id: "05",
    group: "core",
    company: "DineHome",
    title: "Food ordering and delivery platform",
    role: "Lead Developer",
    problem:
      "Payments and content management had to be integrated, and releases depended on one person being at their desk.",
    fix:
      "Payment gateway and CMS integration with attention to failure paths, plus a written deployment route from local through development and staging to production over Git.",
    outcome: "Running in the Norwegian market with a documented release process instead of ad-hoc deploys.",
    stack: ["Laravel", "PHP", "MySQL", "Payments", "CMS"],
    image: "/images/cover-dinehome.svg",
    href: "https://contactumar.com/projects/dinehome",
  },
  {
    id: "06",
    group: "recent",
    company: "LuckyCharmGold",
    title: "Digital marketplace with AI pricing and fraud scoring",
    role: "Full-stack engineer",
    problem:
      "Sale-day spikes, prices drifting from the market, orders marked unpaid after payment, and exposure on high-risk payout methods, all on a catalog that browsed slowly.",
    fix:
      "React storefront over APIs; idempotent order creation and payment confirmation; a Redis rate cache refreshed when admins change rates; Elasticsearch for catalog search; ALB with auto scaling and SQS workers for pricing, email and loyalty.",
    ai:
      "Support copilot for agents with order context, price-suggestion signals from market data, and anomaly scoring hooked into the order pipeline.",
    hard: [
      "Idempotent order create plus webhook-safe payment confirmation, so gold is never delivered twice",
      "Distributed rate cache invalidated the moment an admin changes a rate, with cache-stampede protection on hot endpoints",
      "Loyalty ledger (Bronze to Torva) that recalculates safely after refunds and cancels, with audit rows",
      "Circuit breakers around payment and ID-verification providers so one gateway outage does not stop checkout",
      "AI fraud features wired into the order pipeline as a scoring hook, not a demo chatbot",
    ],
    architecture: `CloudFront CDN
      |
 AWS ALB + WAF
      |
 +----+-----------+
 React SPA     Node/PHP API nodes (ASG)
 (S3 + CF)          |
        Redis cluster | Elasticsearch
        MySQL primary + read replicas
        SQS workers: pricing / email / loyalty / fraud scoring`,
    outcome:
      "Checkout races closed, catalog and rate refresh moved off the database hot path, and loyalty recalculation made safe across refunds.",
    stack: ["React", "Node.js", "Redis", "Elasticsearch", "AWS", "OpenAI"],
    image: "/images/cover-luckycharmgold.svg",
    href: "https://luckycharmgold.com/",
  },
  {
    id: "07",
    group: "recent",
    company: "Direct To You Tickets",
    title: "Broker operations platform with AI matching",
    role: "Full-stack engineer",
    problem:
      "Brokers ran on spreadsheets and chat: two people could sell the same lot, search crawled across thousands of listings, and imports timed out.",
    fix:
      "Vue admin with role-based access; an inventory state machine; Redis holds with expiry across load-balanced API nodes; Elasticsearch search with fuzzy artist and event names; queued CSV import and reindex.",
    ai:
      "Demand forecasting, price suggestions per section, semantic match from a customer request to the best inventory, and a reply assistant for brokers.",
    hard: [
      "Inventory state machine (available, held, sold, fulfilled) with Redis TTL holds shared by every API node behind the load balancer",
      "Elasticsearch analyzers so fuzzy artist and event names match (\"ac/dc\" and \"ACDC\")",
      "Queue-based CSV import and reindex with a failed-row report and partial-commit safety",
      "Timezone-correct sales windows: UTC in storage, venue-local on screen",
      "Audit trail that answers disputes: who changed which price, and when",
    ],
    architecture: `Route53 -> AWS ALB
              |
   +----------+-----------+
 Vue admin   Node API   React customer widgets
   |            |            |
 Redis holds  Elasticsearch  MySQL primary + replicas
 SQS: import / reindex / hold-expiry / notify / AI forecast`,
    outcome:
      "Double-sell path closed, broker search fast enough to use mid-call, and large imports run in the background with a failed-row report.",
    stack: ["Vue.js", "React", "Node.js", "Redis", "Elasticsearch", "AI"],
    image: "/images/cover-dtyt.svg",
    href: "https://directtoyoutickets.com/",
  },
  {
    id: "08",
    group: "recent",
    company: "Greencard",
    title: "Pay-by-bank (ACH) platform across five codebases",
    role: "Platform engineer",
    problem:
      "Regulated merchants needed bank payments through several surfaces at once: a core app, an API, a WooCommerce store, an invoice page and an admin panel, with webhooks that could not double-process.",
    fix:
      "Laravel core for merchants, invoices and settlements; a Node API for payments and bank-link sessions; idempotency keys on every write; HMAC-signed webhooks with replay; Redis locks against double-pay; a sandbox with forced return codes.",
    hard: [
      "Idempotency keys on every payment write, with Redis-backed dedupe windows shared across all API nodes",
      "HMAC-signed webhooks with at-least-once delivery, exactly-once effects, and a dashboard replay",
      "Redis locks on invoice pay so a double click cannot capture twice",
      "Designed failure paths: returns, re-authorising a bank link, partial timeouts from the bank partner",
      "WooCommerce gateway edge cases: currency and minor units, thank-you page race, webhook versus redirect confirmation",
    ],
    architecture: `Route53 + WAF -> AWS ALB
        |
 +------+---------+----------+-------------+
 Agent panel   Node agent   Laravel core   Invoice pay
 (React/Vue)   API          (domain+jobs)  portal
        |          |            |              |
        +----- Redis (locks, idempotency) ----+
        +----- SQS (webhooks, settlement, SMS)
        +----- MySQL primary + replicas, OpenSearch
        +----- bank-link and ACH partners`,
    outcome:
      "Merchants connect through a drop-in WooCommerce gateway or the API, customers pay invoices on a mobile-first page, and duplicate-event and double-pay paths are closed.",
    stack: ["Laravel", "Node.js", "React", "Vue.js", "WooCommerce", "AWS"],
    image: "/images/cover-greencard.svg",
    href: "https://paygreencard.com/",
  },
];

export const experience = [
  {
    period: "Oct 2024 to Present",
    role: "Senior Software Engineer",
    org: "Wanological Solutions",
    focus:
      "Modularised legacy Laravel codebases, added automated diagnostics (about 40% faster data processing) and built LLM features: retrieval over internal documents and agents that call internal tools.",
  },
  {
    period: "Aug 2023 to Sep 2024",
    role: "Senior Laravel Developer",
    org: "BitClans IT Solutions",
    focus: "End-to-end Laravel delivery with ownership of code review, testing and release quality for the team.",
  },
  {
    period: "Feb 2022 to Dec 2022",
    role: "Senior PHP Developer",
    org: "In All Media",
    focus: "Laravel 4 to 8 migration (60% complete in the first quarter) and Next.js and React Native features.",
  },
  {
    period: "Jun 2018 to Feb 2022",
    role: "Senior Web Developer",
    org: "Hello World Technologies",
    focus: "Laravel APIs, a monolith to microservices migration (downtime down about 30%) and CodeIgniter work.",
  },
];

export const skills = {
  "AI / LLM": [
    "OpenAI API",
    "Anthropic Claude",
    "LangChain",
    "RAG and embeddings",
    "Langfuse tracing",
    "Copilots and scoring hooks",
    "Prompting for product features",
  ],
  Architecture: [
    "Multi-tenancy",
    "State machines",
    "Idempotency and webhooks",
    "Microservice boundaries",
    "API contracts",
    "Observability",
  ],
  Backend: ["PHP", "Laravel", "Node.js", "CodeIgniter", "REST", "Queues and workers", "WooCommerce"],
  Frontend: ["React", "Vue", "Next.js", "Inertia", "TypeScript", "Admin SPAs", "Real-time UX"],
  Data: ["MySQL", "Redis", "Elasticsearch / OpenSearch", "Read replicas", "Socket.IO"],
  Cloud: ["AWS ALB", "SQS", "S3 and CloudFront", "RDS", "CloudWatch", "CI/CD", "Docker"],
};

export const principles = [
  {
    code: "01",
    title: "Model the failure before the feature",
    body: "Before code, I draw the state machine and a failure table: what if this runs twice, late, concurrently, or never? Most production incidents are one of those four.",
  },
  {
    code: "02",
    title: "Make every write safe to repeat",
    body: "Idempotency keys on money and inventory writes, Redis dedupe windows, signed webhooks and an event ledger. At-least-once delivery, exactly-once effects.",
  },
  {
    code: "03",
    title: "Measure, then change one thing",
    body: "Profile with the real traffic shape, form one hypothesis, change it, benchmark before and after. That is how a slow API turned out to be duplicate upstream calls and not the database.",
  },
  {
    code: "04",
    title: "Ship in slices with a way back",
    body: "Expand and contract migrations, feature flags, staged rollout and a rollback path. The old path keeps serving traffic until the new one has earned it.",
  },
  {
    code: "05",
    title: "AI gets the discipline of payments",
    body: "Every model call has an owner, a scope, a budget, a timeout and a fallback. Traces and an eval set come first, so a prompt change can be proven and a bad answer replayed.",
  },
  {
    code: "06",
    title: "Operate it, then document it",
    body: "Alarms on checkout error rate, queue depth, Redis hit ratio and webhook success. A sandbox with forced failures, and a written release path from local to production.",
  },
];
