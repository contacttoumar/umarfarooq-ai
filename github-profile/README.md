<div align="center">

# Umar Farooq
### Senior Software Engineer · Full-Stack & Platform
**Production commerce · Ticketing ops · ACH fintech · Laravel · React/Vue · Node · AWS · AI/LLM**

I design and ship software that has to survive real users, real traffic, and real failure modes — from marketplace checkout under sale spikes and concurrent inventory locks, to idempotent ACH payments, Redis/Elasticsearch search paths, and AI features that stay observable after the demo.

[Portfolio](https://contactumar.com) · [Repo `umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) · [LinkedIn](https://www.linkedin.com/in/contacttoumar) · [Email](mailto:umar7400@gmail.com)

**8+ years** · **50K+ concurrent users** · **Multi-repo fintech** · **Lahore, Pakistan · UTC+5**

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat" alt="profile views" />

</div>

---

## About me

I'm a **Senior Software Engineer** based in Lahore, Pakistan, with **8+ years** building and hardening production systems for product teams that cannot afford silent failure.

My background is **backend-heavy and systems-focused**. I work across the full product stack when shipping requires it, but the problems I care most about live at the integrity layer:

- designing checkout, inventory, and payment flows that stay correct under concurrency  
- scaling Laravel / Node / React-Vue workloads with Redis, Elasticsearch, and AWS load balancing  
- building AI and LLM features that survive production (budgets, traces, failure modes)  
- designing reliable REST APIs, webhooks, queues, and third-party integrations  
- eliminating race conditions: double-charge, double-sell, double-delivery  
- improving observability, performance, security, and cloud infrastructure  
- turning messy business processes into maintainable state machines and admin tooling  

Today, much of my engineering focus sits where **commerce, ops platforms, and AI infrastructure** meet: marketplace loyalty and fraud scoring, broker inventory matching, ACH idempotency, RAG-style support copilots, and cost-aware LLM hooks inside real products.

I care less about making the AI demo work and more about what happens when thousands of users, brokers, or merchants start using it on a Friday night.

---

## What I build

### Commerce & marketplace systems
I work on buy/sell platforms where money, inventory, and trust collide:

- React.js storefronts with API-driven catalogs  
- multi-rail checkout (card, crypto, fintech payouts)  
- sell-side rate calculators and payout method rules  
- loyalty ledgers that survive refunds and cancels  
- Redis rate caches and Elasticsearch catalog search  
- AWS ALB + CDN paths for sale-spike traffic  
- AI pricing assist, fraud/anomaly scoring, agent support copilots  

### Ticketing & ops platforms
I build broker/admin systems where seconds matter before an event sells out:

- Vue.js admin SPAs with JWT + RBAC  
- inventory state machines: available → held → sold → fulfilled  
- Redis distributed holds / locks across load-balanced API nodes  
- Elasticsearch multi-filter search and autocomplete  
- CSV import pipelines, reindex queues, audit logs  
- AI demand forecasting, dynamic pricing suggestions, semantic match  

### Payments & fintech rails
I ship multi-repo payment ecosystems where webhooks *are* the product:

- Laravel domain cores (merchants, invoices, settlements, credentials)  
- Node.js agent APIs (create/cancel/refund, bank-link sessions)  
- HMAC-signed webhooks with replay + idempotency keys  
- WooCommerce gateway plugins and public invoice pay portals  
- React/Vue merchant + super-admin panels  
- Redis locks against double-capture; sandbox forced-return kits  
- ACH / pay-by-bank flows for regulated commerce  

### AI & LLM systems (production, not slideware)
Beyond the basic API call:

- support / broker copilots with order or inventory context  
- pricing intelligence and fraud feature hooks in the pipeline  
- semantic match: request → best inventory / FAQ  
- streaming UX where it helps operators move faster  
- Langfuse / tracing-minded observability  
- retries, queues, fallbacks, and graceful degradation  
- tenant- or merchant-aware attribution when cost matters  

### SaaS, multi-tenancy & full-stack product work
Architecture decisions that affect many customers on one codebase:

- tenant-scoped queries, branding, and reporting  
- Laravel + Vue/Inertia product surfaces  
- Next.js / React customer widgets beside Node or PHP APIs  
- subscriptions, invoices, SMS pay links, admin tooling  
- deploy paths documented enough that the team ships without me  

---

## Production impact

| System | Engineering challenge | Impact |
|---|---|---|
| **[LuckyCharmGold](https://luckycharmgold.com/)** | React marketplace, checkout races, Redis/ES catalog, ALB, AI fraud/pricing | Checkout conversion **+41%** · catalog p95 **1.8s → 220ms** · loyalty repeat **2.4×** |
| **[Direct To You Tickets](https://directtoyoutickets.com/)** | Concurrent inventory, Redis holds, ES search, Vue/Node ops | Time-to-match **↓70%** · double-sell ≈ **0** · sell-through **+33%** |
| **[Greencard](https://paygreencard.com/)** | Multi-repo ACH suite, idempotency, HMAC webhooks, Woo + PG | Woo onboarding **days → &lt;1 day** · webhook duplicates **↓~90%** |
| **[TheTutor.me](https://contactumar.com/projects/thetutor-me)** | High-concurrency Laravel APIs, AWS scale | **50K+** concurrent users · API ~**25%** faster |
| **[EventBuizz](https://contactumar.com/projects/eventbuizz)** | Real-time event flows (Socket.IO + Redis) | Engagement **+~30%** · live update latency down |
| **[ParkFlow](https://contactumar.com/projects/parkflow)** | Airport parking SaaS (Vue + Inertia + Laravel) | Pre-booking / revenue lifts ~**25–30%** (client) |
| **[Doocado](https://contactumar.com/projects/doocado)** | Multi-tenant restaurant ordering | Live across **US / MX / BR** |
| **[DineHome](https://contactumar.com/projects/dinehome)** | Delivery platform + payments + release path | Norway market · documented Git deploy path |

➡️ Portfolio site template: [`contacttoumar/umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) · Live: [contactumar.com](https://contactumar.com)

---

## Current engineering focus

The problems I'm most interested in sit where **commerce integrity**, **ops speed**, and **production AI** meet:

```text
production-systems/
├── checkout-and-payment-integrity
├── concurrent-inventory-locks
├── webhook-exactly-once-effects
├── redis-elasticsearch-hot-paths
├── aws-alb-autoscaling
└── multi-repo-api-contracts

production-ai/
├── fraud-and-pricing-hooks
├── support-broker-copilots
├── semantic-inventory-match
├── cost-and-usage-controls
├── tracing-and-evaluation
└── graceful-degradation
```

Questions I keep returning to:

- Can two brokers sell the same lot on different API nodes?  
- Can a retry double-debit ACH or double-deliver gold?  
- Can AI retrieval or memory leak across merchants/tenants?  
- Can we attribute AI cost and failures to the feature that caused them?  
- Can architecture rules (idempotency, tenant scope, audit) become checks agents and humans both respect?  

---

## Technology stack

<details open>
<summary><strong>Backend</strong></summary>

PHP · Laravel · Node.js (Express/Fastify-style services) · REST APIs · Webhooks · Queues / workers · Background jobs · Auth (JWT, sessions, API keys) · Idempotency · Integrations
</details>

<details open>
<summary><strong>Frontend</strong></summary>

React.js · Vue.js · Next.js · Inertia.js · TypeScript / JavaScript · SPA routing · Admin panels · Real-time UX · Server-driven Laravel UIs when that is the right call
</details>

<details open>
<summary><strong>Data & search</strong></summary>

MySQL / MariaDB (RDS primary + read replicas) · Redis (cache, sessions, locks, rate limits) · Elasticsearch / OpenSearch · Query optimization · Shard-ready order/payment patterns
</details>

<details open>
<summary><strong>AI / LLM</strong></summary>

OpenAI API · Anthropic Claude · LangChain · Embeddings · RAG-style retrieval · Prompting for product features · Fraud / pricing / support copilots · Langfuse-minded observability
</details>

<details open>
<summary><strong>Infrastructure</strong></summary>

AWS (ALB, EC2/ECS, RDS, ElastiCache, OpenSearch, S3, CloudFront, SQS, SES, CloudWatch, Route53, WAF, Secrets Manager) · Docker · CI/CD · GitHub · Staging / sandbox / prod isolation
</details>

<details open>
<summary><strong>Architecture</strong></summary>

Microservices / worker boundaries · Multi-tenancy · SaaS admin tooling · Real-time systems · Payment rails · Marketplace & inventory state machines · Observability · Reliability
</details>

---

## How I think about engineering

1. **Integrity before polish.** A beautiful checkout that double-charges is not shipped.  
2. **Measure before proposing.** Profile the slow path; don't assume the database is guilty.  
3. **Concurrency is a product requirement.** Locks, idempotency keys, and state machines beat hope.  
4. **Observability is part of the feature.** If you can't see queue lag and webhook failure ratio, you don't own it.  
5. **AI needs budgets and failure modes.** Prompts alone are not an architecture.  
6. **Boring infrastructure is usually good infrastructure.** ALB + Redis + replicas before clever rewrites.  
7. **Write down how to deploy it.** The team should ship when I'm offline.  
8. **Architecture should make the safe path the easy path.**  

Frameworks change quickly. The engineering principles underneath them usually don't.

---

## Experience

| Period | Role | Org | Focus |
|---|---|---|---|
| Oct 2024 – Present | Senior Software Engineer | Wanological Solutions | Secure Laravel platforms, legacy modularisation, LLM features |
| Aug 2023 – Sep 2024 | Senior Laravel Developer | BitClans IT Solutions | End-to-end Laravel delivery, code review bar, Vue fronts |
| Feb 2022 – Dec 2022 | Senior PHP Developer | In All Media | Laravel 4→8 migration, Next.js / React Native features |
| Jun 2018 – Feb 2022 | Senior Web Developer | Hello World Technologies | Laravel APIs, monolith→microservices, CodeIgniter |

**Education:** Master's in Computer Science — The Islamia University of Bahawalpur

---

## What you'll find here

This GitHub profile ([**contacttoumar**](https://github.com/contacttoumar)) is the public engineering side of my work.

Expect repositories and templates around:

- production commerce / marketplace patterns  
- ticketing & inventory concurrency  
- ACH / webhook / idempotency suites  
- Laravel + Node + React/Vue multi-repo products  
- Redis / Elasticsearch hot paths  
- practical AI hooks (fraud, pricing, copilots)  
- portfolio and profile templates such as [`umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai)  

I prefer a few useful, maintained projects over dozens of demo repositories.

---

## Work with me

I work with product teams on:

**Marketplace & commerce engineering** · **Ticketing / ops platforms** · **ACH & payment rails** · **Laravel + Node backends** · **React / Vue admin & storefronts** · **Performance (Redis, ES, AWS)** · **Production AI features** · **Architecture reviews**

Based in **Lahore, Pakistan (UTC+5)** · remote with teams worldwide.

### Let's build systems that survive production.

[contactumar.com](https://contactumar.com) · [umarfarooq-ai](https://github.com/contacttoumar/umarfarooq-ai) · [LinkedIn](https://www.linkedin.com/in/contacttoumar) · [umar7400@gmail.com](mailto:umar7400@gmail.com)

---

<div align="center">

**Senior Software Engineer · Full-Stack & Platform · Commerce · Ticketing · Fintech · Laravel · React/Vue · Node · Redis · Elasticsearch · AWS · AI/LLM**

</div>
