<div align="center">

# Umar Farooq
### AI Engineer & Solution Architect

**I build revenue-critical platforms, then add the AI layer that makes them cheaper to run and harder to abuse.**

Marketplace commerce · ticketing operations · regulated ACH payments · real-time and multi-tenant SaaS

📍 Lahore, Pakistan · UTC+5 · working remotely with teams worldwide

[Portfolio](https://contactumar.com) · [`umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) · [LinkedIn](https://www.linkedin.com/in/contacttoumar) · [Email](mailto:umar7400@gmail.com)

**8+ years shipping** · **50K+ concurrent users on TheTutor.me** · **8 platforms delivered** · **Open to AI engineering, architecture and lead roles**

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat" alt="profile views" />

</div>

---

## Who I am

I am a senior engineer from Lahore who has spent eight years inside products that were already live: learning platforms, event apps, airport parking, restaurant ordering, and most recently an OSRS marketplace, a ticket broker's operating system, and an ACH payment suite.

What I am known for is the unglamorous failure list that costs real money: **double charges, double sells, stale prices, silent webhook retries, search that times out, releases that depend on one person.** I fix those at the root, then I add AI where it removes manual work, and I build it so it inherits the same guarantees as the rest of the system.

| I lead with | Meaning in practice |
|---|---|
| **Architecture first** | Tenancy, state machines, queues, caching, search and the deploy path are decided before features pile on |
| **AI inside the pipeline** | Support copilots, price signals, fraud scoring and semantic matching hooked into orders, not bolted on as a chat window |
| **Root-cause fixes** | Profile, find the actual cause, change it in slices on live traffic |
| **Handover** | Documented release paths and runbooks so the team does not need me online |

---

## How I can help you

### If you are hiring for AI engineering
- Support and broker **copilots** that read real order and inventory context
- **Fraud and anomaly scoring** on order velocity and payout risk, running in the order pipeline
- **Price intelligence** from market signals, and demand forecasting by artist, venue and season
- **Semantic matching** from a customer request to the best inventory (embeddings plus structured filters)
- Fallbacks, so a slow or wrong model never blocks checkout

### If you are hiring for architecture
- Multi-tenant SaaS where one wrong join cannot show one customer another's data
- **Idempotent writes and signed webhooks** wherever money moves
- Concurrent inventory modelled as a state machine with Redis holds, not a spreadsheet
- Load-balanced AWS layouts: ALB, auto scaling, read replicas, search cluster, queue workers

### If you are inheriting a live system
- Profile first, fix the real cause (not the usual suspect)
- Framework upgrades and monolith splits one flow at a time
- A written local → development → staging → production route
- Code review and handover as deliverables

### My first 30 days

| Days | What happens |
|---|---|
| 1 to 7 | Map the paths that touch money, inventory and customer data, and list what breaks first |
| 8 to 20 | Ship one guarded win behind a flag (an AI assist, a lock, a cache, an idempotency fix), measured before and after |
| 21 to 30 | Add traces, alerts and a short runbook so the gain outlasts my attention |

---

## Featured platforms

### 1 · LuckyCharmGold · [luckycharmgold.com](https://luckycharmgold.com/)
**AI-assisted digital marketplace.** Customers buy OSRS gold, items, accounts and services, sell gold for payouts across crypto and bank rails, and earn loyalty ranks with permanent discounts.
Role: full-stack engineer (React storefront, Node/PHP APIs, integrations, caching, search, workers, AWS).

**Problem.** Sale-day traffic spikes, item prices drifting from the market, orders left unpaid after a successful payment, double submits, risky payout methods, and a catalog that browsed slowly.

**What I built and fixed**
- React SPA storefront for gold, items, accounts and services with API-driven catalog, skeleton loaders and optimistic quantity updates
- Sell-gold flow with a rate calculator and payout rules for USDT, LTC, PayPal G&S, Revolut/Wise, Zelle, SEPA, UK bank transfer, Venmo and Chime
- Multi-payment checkout stabilised: paid-but-not-marked, double-submit and retry-safe order creation
- Loyalty rank engine (Bronze to Torva) with automatic checkout discounts and a ledger that survives refunds and cancels
- Admin tools for order assignment, delivery status, internal notes, rate management and account stock
- Redis for sessions, cart, rate cards and rate limiting; Elasticsearch for catalog search and filters; CloudFront and S3 for assets

**AI layer**
- Support copilot for agents (order context plus FAQ drafting)
- Price-intelligence suggestions from market signals
- Fraud and anomaly scoring on order velocity and payout risk, wired into the order pipeline
- Personalised upsell and loyalty recommendations; AI-assisted drafts for long-tail item pages

```text
CloudFront CDN
      |
 AWS ALB + WAF
      |
 +----+-----------+
 React SPA     Node/PHP API nodes (ASG)
 (S3 + CF)          |
        Redis cluster | Elasticsearch
        MySQL primary + read replicas
        SQS workers: pricing / email / loyalty / fraud scoring
```

**Hard problems solved:** idempotent order create with webhook-safe payment confirmation (no double delivery) · a rate cache invalidated the instant an admin changes a rate · cache-stampede protection on hot rate endpoints · circuit breakers around payment and ID-verification providers · session-fixation hardening.

**Why it beats a typical gold shop.** Controlled stock instead of a seller lottery, order-context tooling for support, live price sync instead of stale cards, loyalty instead of one-off purchases, risk scoring instead of hoping.

**Integrations:** multi-rail payment processors and wallet checkout (Apple Pay, Google Pay), third-party ID verification for high-risk methods, live chat and Discord ops, transactional and marketing email, analytics and ad platforms, Trustpilot embeds, price-feed sync jobs, CloudWatch and error tracking.

**Stack:** React · React Router · Node.js · PHP/Laravel-style APIs · MySQL · Redis · Elasticsearch/OpenSearch · SQS · AWS (ALB, ASG, S3, CloudFront, RDS, ElastiCache, SES, WAF, CloudWatch) · OpenAI/LLM APIs

---

### 2 · Direct To You Tickets · [directtoyoutickets.com](https://directtoyoutickets.com/)
**Broker-owned ticketing operations platform.** Inventory, orders, fulfilment and customer handling for live-event sales, where answers are needed in seconds.
Role: full-stack engineer (Vue admin, React customer widgets, Node services, search, locking, AWS).

**Problem.** Brokers ran on spreadsheets and chat: two people could sell the same lot, search crawled across thousands of listings, imports timed out, and nobody could say who changed a price.

**What I built and fixed**
- Vue admin with JWT login and role-based access (super admin, broker, sales, finance/support); React widgets for customer requests and status
- Inventory for events, venues, classes, sections, rows and quantities, with split and merge of lots, soft holds, price floors and markup
- **Inventory state machine:** available → held → sold → fulfilled / cancelled
- Bulk CSV import with validation, duplicate-SKU detection and an async reindex queue
- Order flow from customer request to matched inventory to delivery (mobile transfer, PDF, will-call), invoices, partial fulfilment, refunds that return stock
- Ops dashboard: today's events, holds about to expire, unpaid invoices, broker performance
- Fixed LIKE-query searches that timed out, silent timezone bugs in sales windows, and staging versus production config drift

**AI layer**
- Demand forecasting by artist, venue and seasonality
- Dynamic price suggestions per section and ticket class
- Listing-quality copilot (titles, venue normalisation, incomplete listings)
- Semantic match from a customer request to the best inventory, using embeddings plus structured filters
- Anomaly alerts on suspicious orders; a broker assistant for customer replies and event briefings

```text
Route53 -> AWS ALB
              |
   +----------+-----------+
 Vue admin   Node API   React customer widgets
   |            |            |
 Redis holds  Elasticsearch  MySQL primary + replicas
 SQS: import / reindex / hold-expiry / notify / AI forecast
```

**Hard problems solved:** distributed holds in Redis with TTL and release-on-cancel across multiple API nodes · Elasticsearch analyzers for fuzzy artist and event names ("ac/dc" vs "ACDC") · partial-commit-safe CSV pipeline with a failed-row report · UTC storage with venue-local display · an audit trail good enough for a dispute.

**Stack:** Vue (Router, Pinia/Vuex) · React · Node.js (Express/Fastify) · PHP where legacy needs it · MySQL with replicas · Redis · Elasticsearch/OpenSearch · SQS · AWS (ALB, ASG, RDS, ElastiCache, S3 signed URLs, SES, CloudFront, CloudWatch) · LLM and embedding APIs

---

### 3 · Greencard · [paygreencard.com](https://paygreencard.com/)
**Compliance-first pay-by-bank (ACH) platform for regulated commerce**, available across the United States. Merchants take bank payments in store, online, by invoice and by SMS link, with white-label options for platforms.
Role: platform engineer across five codebases.

| Codebase | Component | Stack |
|---|---|---|
| `greencard-app` | Core merchant backend: onboarding, invoices, payments, refunds, settlements | Laravel |
| `greencard-agent-api` | Payments API, bank-link sessions, signed webhooks, sandbox | Node.js |
| `greencard-extension-woocommerce` | Drop-in payment gateway (API key, secret, UUID, API v2) | WordPress / WooCommerce |
| `greencard-pg` | Customer invoice payment portal, mobile-first | Hosted portal |
| `greencard-agent` | Merchant and super-admin console | React / Vue |

**Problem.** Bank payments across several surfaces at once, with webhooks that can arrive twice, clients that retry, and bank partners that time out. A double debit is not a bug, it is an incident.

**What I built and fixed**
- Laravel domain services for merchants, customers, invoices, payments, refunds and settlements; roles and permissions; credential issuance; reconciliation reports
- Node API for create, retrieve, cancel and refund of ACH payments, bank-link sessions, request logging and health checks
- **Idempotency middleware** so a client retry never debits twice
- **HMAC-signed webhooks** (authorised, settled, returned, disputed) with a replay tool
- **Sandbox mode** with forced return codes and settlement simulation, so partners test real failure paths
- WooCommerce gateway: checkout → ACH payment → hosted confirmation → order marked paid, failed or returned
- Invoice portal: expired-token and already-paid double-pay bugs fixed; mobile-first pay flow for SMS links
- Merchant and super consoles: payments list and export, invoicing, API key management, role-based menus

```text
Route53 + WAF -> AWS ALB
        |
 +------+---------+----------+-------------+
 Agent panel   Node agent   Laravel core   Invoice pay
 (React/Vue)   API          (domain+jobs)  portal
        |          |            |              |
        +----- Redis (locks, idempotency) ----+
        +----- SQS (webhooks, settlement, SMS)
        +----- MySQL primary + replicas, OpenSearch
        +----- bank-link and ACH partners
```

**Hard problems solved:** exactly-once effects from at-least-once delivery · Redis locks around invoice pay · circuit breakers on bank calls · designed failure modes (returns, re-authorising a bank link, partial timeouts) rather than only the happy path · sandbox and live isolated by keys, queues and environments · payments and webhook tables designed to shard by merchant and month.

**Integrations:** instant bank linking and ACH settlement partners, POS systems for dispensaries, WooCommerce and Shopify paths, QuickBooks sync, SMS pay links, SES email, white-label theming.

**Stack:** Laravel · Node.js · React · Vue · WooCommerce (PHP) · MySQL on RDS · Redis · OpenSearch · SQS · AWS (ALB, ASG, CloudFront, SES, Secrets Manager, WAF, CloudWatch) · Docker

---

## Earlier platforms

| Platform | Problem | What I did | Result |
|---|---|---|---|
| **[TheTutor.me](https://contactumar.com/projects/thetutor-me)** · learning platform | API slowed under load; everyone blamed the database | Traced repeated upstream calls inside one request, added a request-scoped cache in middleware, moved sessions off the app box so machines could be added on AWS | Held 50K+ concurrent users; API ~25% faster in my own benchmark |
| **[EventBuizz](https://contactumar.com/projects/eventbuizz)** · live events | Schedule changes showed only after refresh | Socket.IO with a Redis adapter so every process reaches every client; Laravel for domain, Next.js for the live surface | Engagement up ~30% (client analytics) |
| **[ParkFlow](https://contactumar.com/projects/parkflow)** · airport parking | Travellers could not see availability; operators priced blind | Vue + Inertia on Laravel; operator analytics built before booking polish | Booking ~25% faster (staging); pre-booking up ~30% (client) |
| **[Doocado](https://contactumar.com/projects/doocado)** · restaurant ordering | Branded ordering per restaurant without a deployment per restaurant | One multi-tenant Laravel app with tenant-scoped data, branding and analytics | Live in the USA, Mexico and Brazil |
| **[DineHome](https://contactumar.com/projects/dinehome)** · food delivery | Payments and CMS to integrate; releases depended on one person | Gateway and CMS integration with failure paths; documented local → staging → production route over Git | Running in Norway with repeatable releases |

Numbers above are published on [contactumar.com](https://contactumar.com), client-reported, or my own staging benchmarks. Where I do not have a measured figure I describe the result instead of inventing one.

---

## Problem → fix patterns I reuse

| Problem | Fix |
|---|---|
| Customers charged or sold twice | Idempotency keys · Redis holds with expiry · explicit state machine · audit rows |
| Webhooks arrive twice, late or out of order | Signature check · event ledger · replay tooling · circuit breakers |
| Search and catalog time out | Elasticsearch index · Redis cache with real invalidation · read replicas · async reindex |
| Many customers on one codebase | Tenant-scoped access · tenant-aware queues and cache · per-tenant config · isolation tests |
| AI feature works in the demo only | Scoped retrieval · per-call owner and budget · queued calls · traces · deterministic fallback |

---

## Toolkit

| Area | What I work with |
|---|---|
| **AI / LLM** | OpenAI and other LLM APIs · embeddings and RAG over FAQs and orders · fraud and pricing scoring hooks · support and broker copilots · semantic matching |
| **Architecture** | Multi-tenancy · state machines · idempotency · HMAC webhooks · distributed locks · circuit breakers · worker services · shard-ready tables |
| **Backend** | PHP 8 · Laravel · Node.js (Express/Fastify) · CodeIgniter · REST · WooCommerce |
| **Frontend** | React · Vue · Next.js · Inertia · TypeScript · Redux/Zustand/Pinia · Socket.IO |
| **Data** | MySQL/MariaDB with replicas · Redis · Elasticsearch/OpenSearch |
| **Cloud** | AWS ALB, ASG, EC2/ECS, RDS, ElastiCache, S3, CloudFront, SQS, SES, WAF, Secrets Manager, CloudWatch · Docker · CI/CD |

---

## Experience

| Period | Role | Where | Focus |
|---|---|---|---|
| Oct 2024 to Present | Senior Software Engineer | Wanological Solutions | Modularised legacy Laravel, automated diagnostics (~40% faster data processing), LLM features: document retrieval and agents that call internal tools |
| Aug 2023 to Sep 2024 | Senior Laravel Developer | BitClans IT Solutions | End-to-end Laravel delivery with ownership of code review, testing and release quality |
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

If you have a platform that carries real money, an AI feature that needs to survive production, or a live system that needs careful hands, send me a short note about the problem. I reply within a working day, and I will tell you plainly if I am not the right fit.

📍 Lahore, Pakistan (UTC+5) · remote worldwide  
📧 [umar7400@gmail.com](mailto:umar7400@gmail.com) · 🌐 [contactumar.com](https://contactumar.com) · 💼 [LinkedIn](https://www.linkedin.com/in/contacttoumar)
