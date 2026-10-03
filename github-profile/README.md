<div align="center">

# Umar Farooq
### AI Engineer & Solution Architect

**I put LLM features inside live products, and design the systems underneath so they hold up.**

Retrieval, copilots and scoring for platforms that already carry real traffic and real money. Architecture first, then AI that inherits its guarantees.

[Portfolio](https://contactumar.com) · [`umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) · [LinkedIn](https://www.linkedin.com/in/contacttoumar) · [Email](mailto:umar7400@gmail.com)

**8+ years shipping** · **50K+ concurrent users handled** · **8 platforms delivered** · **Open to AI engineering, architecture and lead roles**

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat" alt="profile views" />

</div>

---

## In one minute

- **AI that ships.** Support copilots, semantic matching, price and fraud signals, wired into order pipelines with budgets, traces and fallbacks.
- **Architecture that holds.** Multi-tenancy, idempotent payments, signed webhooks, inventory state machines, load-balanced AWS.
- **Fixes that find the real cause.** Profile first. On TheTutor.me the slowdown was repeated upstream calls inside one request, not the database everyone blamed.
- **Delivery that leaves a team stronger.** Reviews, runbooks and release paths that work when I am offline.

---

## How I can help you

### Hiring for AI engineering?
You want someone who has put LLM features inside systems that already make money.

- Support and broker copilots that read real order or inventory context
- Fraud, anomaly and pricing signals scored inside the order pipeline, not on a side dashboard
- Retrieval, embeddings and prompts treated as product code: owned, budgeted, traced
- A written fallback for every AI call, so a slow model never blocks checkout

### Hiring for architecture?
You want someone who decides the boundaries before the code is written.

- Tenant isolation that holds across queries, queues, cache and retrieval
- Idempotent writes and signed webhooks wherever money moves
- Inventory and order state machines that survive concurrent users
- Load-balanced AWS layouts with replicas, search and workers sized to the traffic

### Inheriting a live system?
You want someone who changes it in slices while it keeps serving customers.

- Profile first, then fix the actual cause instead of the usual suspect
- Framework upgrades and monolith splits, one flow at a time
- Documented release paths so the team ships without me online
- Code review and handover treated as deliverables

### My first 30 days with a team

| Days | What happens |
|---|---|
| 1 to 7 | Map the system and its failure modes: the paths that touch money, inventory and customer data |
| 8 to 20 | Ship one guarded win behind a flag (an AI assist, a lock, a cache, an idempotency fix), measured before and after |
| 21 to 30 | Instrument and hand over: traces, alerts and a short runbook so the gain keeps working |

---

## Problem → fix: the stacks I reach for

| The problem | What I put in place |
|---|---|
| **The AI demo works. Now it has to ship.** | Scoped retrieval, per-call ownership and spend ceiling, queued model calls with retry policy, traces plus an eval set, deterministic fallback |
| **Customers are charged or sold twice.** | Idempotency keys, Redis holds with expiry, an explicit state machine, audit rows |
| **Search and catalog pages time out.** | Elasticsearch index, Redis cache with real invalidation, read replicas, async reindex |
| **Webhooks arrive twice, late or out of order.** | Signature verification, an event ledger, replay tooling, circuit breakers |
| **Many customers share one codebase.** | Tenant-scoped data access, tenant-aware queues and cache, per-tenant config, isolation tests on every release |

---

## Selected work

### Established platforms

| | Platform | Problem | Fix | Outcome |
|---|---|---|---|---|
| 01 | **[TheTutor.me](https://contactumar.com/projects/thetutor-me)** · learning platform | API slowed as traffic grew; the database got the blame | Traced duplicate upstream calls, added a request-scoped cache, moved sessions off the app box for horizontal scale on AWS | Held 50K+ concurrent users; API ~25% faster in my benchmark |
| 02 | **[EventBuizz](https://contactumar.com/projects/eventbuizz)** · real-time events | Schedule changes only appeared after refresh | Socket.IO with a Redis adapter so every process reaches every client; Laravel for domain, Next.js for the live surface | Engagement up ~30% (client analytics) |
| 03 | **[ParkFlow](https://contactumar.com/projects/parkflow)** · airport parking SaaS | Travellers could not see availability; operators priced blind | Vue + Inertia on Laravel; operator analytics built before booking polish | Booking ~25% faster (staging); pre-booking up ~30% (client) |
| 04 | **[Doocado](https://contactumar.com/projects/doocado)** · multi-tenant ordering | Branded ordering per restaurant without a deployment per restaurant | One multi-tenant Laravel app with scoped data, branding and built-in analytics | Live in the USA, Mexico and Brazil |
| 05 | **[DineHome](https://contactumar.com/projects/dinehome)** · food ordering | Payments and CMS to integrate; releases depended on one person | Gateway and CMS integration with failure paths; documented local → dev → staging → production route over Git | Running in Norway with a repeatable release process |

### Recent builds, with AI in the pipeline

| | Platform | Problem | Fix | AI layer |
|---|---|---|---|---|
| 06 | **[LuckyCharmGold](https://luckycharmgold.com/)** · digital marketplace | Sale-day spikes, price drift, orders marked unpaid after payment, risky payouts | Idempotent orders and payment confirmation, Redis rate cache, Elasticsearch catalog, ALB + SQS workers | Support copilot, price-suggestion signals, anomaly scoring |
| 07 | **[Direct To You Tickets](https://directtoyoutickets.com/)** · broker operations | Double-sold lots, slow search, timing-out imports | Inventory state machine, Redis holds, Elasticsearch fuzzy search, queued CSV import | Demand forecasting, section pricing, semantic matching, reply assistant |
| 08 | **[Greencard](https://paygreencard.com/)** · pay-by-bank (ACH) | Five surfaces needing safe, non-duplicating payments | Laravel core + Node API, idempotency keys, HMAC-signed webhooks with replay, Redis locks, sandbox with forced return codes | Duplicate-event and double-pay paths closed |

Metrics above are either published on [contactumar.com](https://contactumar.com), client-reported, or my own staging benchmarks. Where I do not have a measured number I describe the result instead.

---

## Production AI readiness checklist

The questions I answer before an LLM feature goes live:

- [ ] **Scope**: can retrieval only see what the current user or tenant may see?
- [ ] **Ownership**: does every model call record who, which feature and how much it cost?
- [ ] **Budget**: is there a spend ceiling and a rate limit per feature?
- [ ] **Failure**: what does the user get when the model is slow, wrong or down?
- [ ] **Evidence**: can I replay a bad answer and prove a prompt change improved it?
- [ ] **Rollout**: is it behind a flag, on a thin slice of real data first?

---

## Toolkit

| Area | What I work with |
|---|---|
| **AI / LLM** | OpenAI API · Anthropic Claude · LangChain · RAG and embeddings · Langfuse tracing · copilots and scoring hooks · prompting for product features |
| **Architecture** | Multi-tenancy · state machines · idempotency and webhooks · microservice boundaries · API contracts · observability |
| **Backend** | PHP · Laravel · Node.js · CodeIgniter · REST · queues and workers · WooCommerce |
| **Frontend** | React · Vue · Next.js · Inertia · TypeScript · admin SPAs · real-time UX |
| **Data** | MySQL · Redis · Elasticsearch / OpenSearch · read replicas · Socket.IO |
| **Cloud** | AWS ALB · SQS · S3 and CloudFront · RDS · CloudWatch · CI/CD · Docker |

---

## How I work

1. **Prove it on a thin slice of real data.** One workflow, one measurement, then widen.
2. **Every model call has an owner.** Who triggered it, what it may read, what it may spend.
3. **Isolate before you retrieve.** Search, memory and caches follow the database's boundaries.
4. **Fix the cause, not the usual suspect.** Profile before you decide.
5. **Change live systems in slices.** The old path keeps serving traffic until the new one earns it.
6. **Leave a runbook behind.** If the release path lives in one head, it is not finished.

---

## Experience

| Period | Role | Where | Focus |
|---|---|---|---|
| Oct 2024 to Present | Senior Software Engineer | Wanological Solutions | Modularised legacy Laravel, automated diagnostics (~40% faster data processing), LLM features: document retrieval and agents that call internal tools |
| Aug 2023 to Sep 2024 | Senior Laravel Developer | BitClans IT Solutions | End-to-end Laravel delivery, ownership of code review, testing and release quality |
| Feb 2022 to Dec 2022 | Senior PHP Developer | In All Media | Laravel 4 → 8 migration, Next.js and React Native features |
| Jun 2018 to Feb 2022 | Senior Web Developer | Hello World Technologies | Laravel APIs, monolith to microservices (downtime down ~30%), CodeIgniter |

Education: Master's in Computer Science, The Islamia University of Bahawalpur.

---

## What colleagues say

> "I started under Umar's mentorship at Hello World Technologies. He is profound, tackles hard problems, and would strengthen any team." — **Sohail Idrees**, Digital Growth Strategist

> "As a team lead he juggled several projects at once. Multitasking and delivery that deserve recognition." — **Junaid Tahir**, Project Manager, CSPO

> "Long-time colleague at Hello World. Outstanding at complex business logic, and a reliable team player." — **Jahanzaib Ramzan**, Senior Software Engineer

---

## Let's talk

If you have an AI feature that needs to survive production, a platform that needs a sound architecture, or a live system that needs careful hands, send me a short note about the problem. I reply within a working day, and I will tell you plainly if I am not the right fit.

📧 [umar7400@gmail.com](mailto:umar7400@gmail.com) · 🌐 [contactumar.com](https://contactumar.com) · 💼 [LinkedIn](https://www.linkedin.com/in/contacttoumar)
