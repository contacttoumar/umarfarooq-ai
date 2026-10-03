<div align="center">

# Umar Farooq
### AI Engineer & Solution Architect

**Revenue-critical platforms, designed to hold up, with AI wired into the pipeline.**

Marketplace commerce · ticketing operations · regulated ACH payments · real-time and multi-tenant SaaS

📍 Lahore, Pakistan · UTC+5 · remote

[Portfolio](https://contactumar.com) · [`umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) · [LinkedIn](https://www.linkedin.com/in/contacttoumar) · [Email](mailto:umar7400@gmail.com)

**8+ years shipping** · **50K+ concurrent users (TheTutor.me)** · **8 platforms delivered** · **5-codebase payment suite (Greencard)**

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat" alt="profile views" />

</div>

---

## About

Eight years inside products that were already live: a learning platform at 50K+ concurrent users, a real-time events app, airport parking, multi-country restaurant ordering, and lately an OSRS marketplace, a ticket broker's operating system and an ACH payment suite.

The work I am drawn to is the failure list that costs real money: **double charges, double sells, stale prices, webhooks that arrive twice, search that times out, releases that depend on one person.** I fix those at the root, then add AI where it removes manual work, built so it inherits the same guarantees as the rest of the system.

---

## Solution architecture

The decisions that are cheap early and expensive later. Each row is a problem I have had to solve in production and the pieces I used.

| Problem | Design |
|---|---|
| Customers charged or delivered to twice | Idempotency keys on every money-moving write · Redis dedupe window shared by all API nodes · order create that is safe to retry |
| Two people sell the same inventory | State machine `available → held → sold → fulfilled / cancelled` · Redis hold with TTL · release on cancel · audit row per transition |
| Webhooks arrive twice, late or out of order | Signature verification (HMAC) · event ledger keyed by event id · replay tooling · at-least-once delivery, exactly-once effect |
| Many customers on one codebase | Tenant-scoped data access · tenant-aware queues and cache · per-tenant branding and config · isolation checks |
| Catalog and search time out | Elasticsearch/OpenSearch index with fuzzy analyzers · Redis cache invalidated on admin change · read replicas · async reindex |
| One provider outage kills checkout | Circuit breakers around payment, bank and ID-verification calls · degrade the feature, not the whole flow |
| Traffic spikes on sale or on-sale days | ALB + auto scaling · SQS workers scaled on queue depth · CDN for static assets · shard-ready order and payment tables |
| Live updates reach only some clients | Socket.IO with a Redis adapter so an update on one process reaches clients on every process |

<details>
<summary><b>Pattern sketch: idempotent write (Node)</b></summary>

```js
// Claim the key first; a retry replays the stored response instead of charging again.
async function idempotent(req, res, next) {
  const key = req.get("Idempotency-Key");
  if (!key) return res.status(400).json({ error: "Idempotency-Key required" });

  const slot = `idem:${req.merchantId}:${key}`;
  const claimed = await redis.set(slot, "in_flight", "NX", "EX", 86400);

  if (!claimed) {
    const saved = await redis.get(`${slot}:res`);
    return saved ? res.json(JSON.parse(saved)) : res.status(409).json({ error: "in progress" });
  }

  res.on("finish", () => redis.set(`${slot}:res`, res.locals.body, "EX", 86400));
  next();
}
```
</details>

<details>
<summary><b>Pattern sketch: inventory hold with expiry (Redis)</b></summary>

```text
SET hold:{lot_id} {broker_id}:{token} NX EX 300      # take the hold; fails if someone else has it
...                                                   # sell, or let it expire
release (Lua, compare-and-delete):
  if redis.call("GET", KEYS[1]) == ARGV[1] then return redis.call("DEL", KEYS[1]) end
```
The hold lives in Redis so every API node behind the load balancer sees it. The database stays the source of truth through the state machine.
</details>

---

## AI engineering

AI features I have built into live products, and how I wire them in.

| Capability | Where it runs | How it is built |
|---|---|---|
| **Support copilot** | Agent tooling in an OSRS marketplace | Drafts replies from order context and FAQs; agent reviews before sending |
| **Fraud and anomaly scoring** | Order creation and payout requests | Features from order velocity and payout method; scored as a step in the order pipeline |
| **Price intelligence** | Marketplace and ticketing | Suggestions from market signals; demand forecasting by artist, venue and season; suggestions per section and class |
| **Semantic matching** | Ticket broker platform | Embeddings plus structured filters (date, venue, section, quantity) in a hybrid ranker, beside the Elasticsearch index |
| **Listing-quality assistant** | Ticket inventory | Normalises titles and venues, flags incomplete listings |
| **Retrieval over documents** | Internal tools at my current role | RAG over internal documents; agents that call internal tools |

```text
order created ─► enqueue score job ─► features ─► model / rules ─► score + reason stored on the order
                                          │
                       timeout or provider error ─► deterministic rules take over, flow continues
```

What I treat as non-negotiable for any model call: it has an **owner** (who triggered it, which feature), a **scope** (retrieval obeys the same boundaries as the database), a **budget**, a **timeout with fallback**, and a **trace** I can replay.

---

## Featured platforms

### 1 · LuckyCharmGold · [luckycharmgold.com](https://luckycharmgold.com/)
**AI-assisted digital marketplace.** Customers buy OSRS gold, items, accounts and services, sell gold for payouts across crypto and bank rails, and earn loyalty ranks with permanent discounts.
Role: full-stack engineer (React storefront, Node/PHP APIs, integrations, caching, search, workers, AWS).

**Problem.** Sale-day spikes, item prices drifting from the market, orders left unpaid after a successful payment, double submits, risky payout methods, and a catalog that browsed slowly.

**Built and fixed**
- React SPA storefront with API-driven catalog, skeleton loaders and optimistic quantity updates
- Sell-gold flow with a rate calculator and payout rules for USDT, LTC, PayPal G&S, Revolut/Wise, Zelle, SEPA, UK bank transfer, Venmo and Chime
- Multi-payment checkout stabilised: paid-but-not-marked, double submit, retry-safe order creation
- Loyalty rank engine (Bronze to Torva) with automatic discounts and a ledger that survives refunds and cancels
- Admin: order assignment, delivery status, notes, rate management, account stock
- Redis for sessions, cart, rate cards and rate limiting; Elasticsearch for search; CloudFront and S3 for assets

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

**Hard problems:** idempotent order create with webhook-safe payment confirmation · rate cache invalidated the instant an admin changes a rate, with stampede protection · circuit breakers around payment and ID-verification providers · session-fixation hardening.
**Integrations:** multi-rail processors, Apple Pay / Google Pay, third-party ID verification, live chat and Discord ops, transactional and marketing email, price-feed sync, CloudWatch.
**Stack:** React · Node.js · PHP/Laravel-style APIs · MySQL · Redis · Elasticsearch/OpenSearch · SQS · AWS · LLM APIs

---

### 2 · Direct To You Tickets · [directtoyoutickets.com](https://directtoyoutickets.com/)
**Broker-owned ticketing operations platform.** Inventory, orders, fulfilment and customer handling for live-event sales, where answers are needed in seconds.
Role: full-stack engineer (Vue admin, React widgets, Node services, search, locking, AWS).

**Problem.** Brokers ran on spreadsheets and chat: two people could sell the same lot, search crawled across thousands of listings, imports timed out, and nobody could say who changed a price.

**Built and fixed**
- Vue admin with JWT and role-based access (super admin, broker, sales, finance/support); React widgets for customer requests and status
- Inventory for events, venues, classes, sections and rows; split and merge lots, soft holds, price floors and markup
- State machine `available → held → sold → fulfilled / cancelled` with Redis holds across API nodes
- Bulk CSV import with validation, duplicate-SKU detection and async reindex
- Orders from request to matched inventory to delivery (mobile transfer, PDF, will-call), invoices, partial fulfilment, refunds that return stock
- Ops dashboard: today's events, expiring holds, unpaid invoices, broker performance

```text
Route53 -> AWS ALB
              |
   +----------+-----------+
 Vue admin   Node API   React customer widgets
   |            |            |
 Redis holds  Elasticsearch  MySQL primary + replicas
 SQS: import / reindex / hold-expiry / notify / AI forecast
```

**Hard problems:** distributed holds with TTL and release-on-cancel · fuzzy artist/event matching ("ac/dc" vs "ACDC") · partial-commit-safe CSV pipeline with a failed-row report · UTC storage with venue-local display · audit trail that answers disputes.
**Stack:** Vue · React · Node.js (Express/Fastify) · MySQL with replicas · Redis · Elasticsearch/OpenSearch · SQS · AWS · LLM and embedding APIs

---

### 3 · Greencard · [paygreencard.com](https://paygreencard.com/)
**Compliance-first pay-by-bank (ACH) platform for regulated commerce.** Merchants take bank payments in store, online, by invoice and by SMS link, with white-label options.
Role: platform engineer across five codebases.

| Codebase | Component | Stack |
|---|---|---|
| `greencard-app` | Core: onboarding, invoices, payments, refunds, settlements | Laravel |
| `greencard-agent-api` | Payments API, bank-link sessions, signed webhooks, sandbox | Node.js |
| `greencard-extension-woocommerce` | Drop-in gateway (API key, secret, UUID, API v2) | WordPress / WooCommerce |
| `greencard-pg` | Customer invoice payment portal, mobile-first | Hosted portal |
| `greencard-agent` | Merchant and super-admin console | React / Vue |

**Problem.** Bank payments across several surfaces at once, with webhooks that can arrive twice, clients that retry, and bank partners that time out. A double debit is an incident, not a bug.

**Built and fixed**
- Laravel domain for merchants, invoices, payments, refunds, settlements, permissions and reconciliation reports
- Node API for create, retrieve, cancel and refund of ACH payments, and bank-link sessions
- Idempotency middleware, HMAC-signed webhooks (authorised, settled, returned, disputed) with replay
- Sandbox with forced return codes and settlement simulation
- WooCommerce gateway: checkout → ACH payment → hosted confirmation → order paid, failed or returned
- Invoice portal: expired-token and already-paid double-pay fixes; mobile-first SMS pay links

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

**Hard problems:** exactly-once effects from at-least-once delivery · Redis locks around invoice pay · designed failure paths (returns, re-authorising a bank link, partial timeouts) · sandbox and live isolated by keys, queues and environments · payments and webhook tables designed to shard by merchant and month.
**Integrations:** bank linking and ACH partners, dispensary POS systems, WooCommerce and Shopify paths, QuickBooks sync, SMS pay links, SES email, white-label theming.
**Stack:** Laravel · Node.js · React · Vue · WooCommerce · MySQL (RDS) · Redis · OpenSearch · SQS · AWS · Docker

---

## Earlier platforms

| Platform | Problem | What I did | Result |
|---|---|---|---|
| **[TheTutor.me](https://contactumar.com/projects/thetutor-me)** · learning platform | API slowed under load; everyone blamed the database | Traced repeated upstream calls inside one request, added a request-scoped cache in middleware, moved sessions off the app box so machines could be added on AWS | Held 50K+ concurrent users; API ~25% faster in my benchmark |
| **[EventBuizz](https://contactumar.com/projects/eventbuizz)** · live events | Schedule changes showed only after refresh | Socket.IO with a Redis adapter; Laravel for domain, Next.js for the live surface | Engagement up ~30% (client analytics) |
| **[ParkFlow](https://contactumar.com/projects/parkflow)** · airport parking | Travellers could not see availability; operators priced blind | Vue + Inertia on Laravel; operator analytics built first | Booking ~25% faster (staging); pre-booking up ~30% (client) |
| **[Doocado](https://contactumar.com/projects/doocado)** · restaurant ordering | Branded ordering per restaurant, without a deployment per restaurant | One multi-tenant Laravel app with tenant-scoped data and branding | Live in the USA, Mexico and Brazil |
| **[DineHome](https://contactumar.com/projects/dinehome)** · food delivery | Payments and CMS to integrate; releases depended on one person | Gateway and CMS integration with failure paths; documented local → staging → production route | Running in Norway with repeatable releases |

Figures are published on [contactumar.com](https://contactumar.com), client-reported, or my own staging benchmarks.

---

## How I work

| Stage | What I do | Why |
|---|---|---|
| **1 · Model** | Draw the state machine and a failure table before writing code: what if this runs twice, late, concurrently, or never? | Most production incidents are one of those four |
| **2 · Decide** | Settle tenancy, data ownership, queue topology, cache invalidation and the deploy path up front; write down the trade-offs | These are cheap on day one and expensive on day 300 |
| **3 · Build the thin slice** | One vertical flow end to end on real data, including its failure paths, then widen | Proves the design while changing it is still cheap |
| **4 · Make writes repeatable** | Idempotency keys, locks with TTL, signed webhooks, event ledger | Retries and double clicks are the normal case |
| **5 · Test the ugly paths** | Concurrency tests for holds, sandbox with forced return codes, contract tests on webhooks, a canary tenant that tries to reach another tenant's data | Happy-path tests do not find money bugs |
| **6 · Measure, then change** | Profile with real traffic shape, one hypothesis per change, benchmark before and after | Fixes the actual cause, not the usual suspect |
| **7 · Ship in slices** | Feature flags, expand-and-contract migrations, staged rollout, a rollback path; old path serves until the new one earns it | Live systems change without downtime |
| **8 · Govern AI like payments** | Every model call has an owner, scope, budget, timeout and fallback; traces and an eval set before any prompt change | A bad answer can be replayed and a change can be proven |
| **9 · Operate and document** | Alarms on checkout error rate, queue depth, Redis hit ratio, webhook success and API p95; a written release path and runbook | The system keeps working when I am not looking at it |

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

📍 Lahore, Pakistan (UTC+5) · 📧 [umar7400@gmail.com](mailto:umar7400@gmail.com) · 🌐 [contactumar.com](https://contactumar.com) · 💼 [LinkedIn](https://www.linkedin.com/in/contacttoumar)
