<div align="center">

# Umar Farooq

### AI Engineer & Solution Architect

Building platforms where money moves, inventory is contested, and AI has to behave under load.

I build the systems that carry **real money and real traffic**, then add AI where it removes manual work, wired in so it inherits the same guarantees as everything around it: **idempotent, isolated, observable, and able to fail safely.**

<p>
  <a href="https://contactumar.com"><strong>Portfolio</strong></a>
  ·
  <a href="https://www.linkedin.com/in/umarfarooq-ai/"><strong>LinkedIn</strong></a>
  ·
  <a href="https://github.com/contacttoumar/umarfarooq-ai"><strong>Portfolio source</strong></a>
  ·
  <a href="mailto:umar7400@gmail.com"><strong>Email</strong></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Experience-8%2B%20Years-0d1117?style=flat-square&labelColor=0d1117&color=14b8a6" alt="8+ years" />
  <img src="https://img.shields.io/badge/Scale-50K%2B%20Concurrent%20Users-0d1117?style=flat-square&labelColor=0d1117&color=14b8a6" alt="50K+ concurrent users" />
  <img src="https://img.shields.io/badge/Delivered-8%20Platforms-0d1117?style=flat-square&labelColor=0d1117&color=14b8a6" alt="8 platforms" />
  <img src="https://img.shields.io/badge/Location-Lahore%20%7C%20UTC%2B5-0d1117?style=flat-square&labelColor=0d1117&color=14b8a6" alt="Lahore Pakistan UTC+5" />
</p>

</div>

---

## About me

I'm an **AI Engineer and Solution Architect** from Lahore, Pakistan, with **8+ years** of shipping software that was already live when I joined it: learning platforms, event apps, multi-country ordering systems, a marketplace, a ticketing operations platform and an ACH payment suite.

Most of my useful instincts come from incidents. The problems I keep returning to:

* customers **charged, sold or delivered to twice**
* **webhooks** that arrive twice, late, or out of order
* **concurrent inventory** where two people act on the same item
* **search and catalog pages** that time out under real data
* **tenant isolation** that has to hold across queries, queues, cache and AI context
* **LLM features** that need an owner, a budget, a timeout and a fallback before they touch production
* **legacy systems** that must change in slices while still serving customers

> A feature is not finished when it works once. It is finished when it works the second time, concurrently, late, and while the provider is down.

---

## What I build

### AI inside live products

AI that sits in the pipeline of a business that already runs, not in a side window:

* **Support and broker copilots** that read real order and inventory context
* **Fraud and anomaly scoring** on order velocity and payout risk, as a step in order creation
* **Price intelligence** from market signals, and **demand forecasting** by artist, venue and season
* **Semantic matching**: embeddings plus structured filters in a hybrid ranker, beside the search index
* **Retrieval over documents** and agents that call internal tools
* **Listing-quality assistants** that normalise titles and flag incomplete data
* Per-call **ownership, budgets, timeouts, traces and deterministic fallbacks**

### Solution architecture

The decisions that are cheap on day one and expensive on day three hundred:

* **Multi-tenancy** across data, queues, cache, files and AI retrieval
* **State machines** for orders, inventory and payments, with one place that rejects illegal transitions
* **Idempotent writes** and **HMAC-signed webhooks** with an event ledger and replay
* **Distributed locks and holds** with TTL across load-balanced API nodes
* **Queue topology**: import, reindex, notifications, settlement, scoring
* **Circuit breakers** around payment, bank and identity providers
* **Shard-ready tables** for orders and payments; read replicas for reporting and browse traffic

### Reliability and performance

* Profiling with the real traffic shape before changing anything
* **Redis** caches with real invalidation and stampede protection
* **Elasticsearch / OpenSearch** with fuzzy analyzers replacing slow `LIKE` queries
* Async CSV import and reindex with failed-row reports and partial-commit safety
* **ALB + auto scaling**, CDN, health checks, alarms on error rate, queue depth and hit ratio
* Legacy upgrades in slices: Laravel 4 → 8, monolith → microservices, on live traffic

### Full-stack delivery

**React · Vue · Next.js · Inertia · TypeScript · Socket.IO** on top of **Laravel and Node** APIs. I work close enough to the product to understand the user's problem, and deep enough in the backend to know whether the system can carry it.

---

## Where it was proven

| System | The hard part | Public reference |
| --- | --- | --- |
| **TheTutor.me** | Traffic outgrew the API; the real cost was repeated upstream calls, not the database | 50K+ concurrent users on AWS |
| **LuckyCharmGold** | Checkout races, stale prices, risky payouts, slow catalog, AI fraud and pricing signals | Digital marketplace |
| **Direct To You Tickets** | Concurrent inventory, fuzzy search, async imports, AI matching and forecasting | Broker operations platform |
| **Greencard** | Idempotent ACH payments, signed webhooks, five codebases behind one API contract | Pay-by-bank suite |
| **Doocado** | One multi-tenant application serving restaurants in three countries | Multi-tenant ordering |
| **EventBuizz** | Live updates reaching every client across processes | Real-time events |

➡️ **Architecture notes, outcomes and work history:** [contactumar.com](https://contactumar.com) · [LinkedIn](https://www.linkedin.com/in/umarfarooq-ai/)

---

## Technology stack

<table>
<tr>
<td valign="top" width="33%">

### Backend

* PHP 8
* Laravel
* Node.js (Express, Fastify)
* CodeIgniter
* REST APIs
* Webhooks
* Queues and workers
* WooCommerce

</td>
<td valign="top" width="33%">

### Frontend

* React
* Vue.js
* Next.js
* Inertia.js
* TypeScript
* Socket.IO
* Redux / Zustand / Pinia
* Real-time UX

</td>
<td valign="top" width="33%">

### Data

* MySQL / MariaDB
* Read replicas
* Redis
* Elasticsearch / OpenSearch
* Shard-ready tables
* Query and index tuning
* Data modelling

</td>
</tr>

<tr>
<td valign="top">

### AI / LLM

* OpenAI and other LLM APIs
* Embeddings
* RAG
* Fraud and pricing scoring
* Copilots
* Semantic matching
* Prompting for product features

</td>
<td valign="top">

### Infrastructure

* AWS: ALB, ASG, EC2 / ECS
* RDS, ElastiCache, OpenSearch
* S3, CloudFront, SQS, SES
* WAF, Secrets Manager
* CloudWatch
* Docker
* CI/CD

</td>
<td valign="top">

### Architecture

* Multi-tenancy
* State machines
* Idempotency
* Distributed locks
* Circuit breakers
* Event ledgers and replay
* Observability

</td>
</tr>
</table>

---

## What you'll find here

This profile is the engineering side of my work. Most production code belongs to clients and stays private, so the public part is small:

* the source of my [portfolio site](https://github.com/contacttoumar/umarfarooq-ai)

---

## Get in touch

I'm based in **Lahore, Pakistan (UTC+5)** and work remotely with teams worldwide. Good reasons to write to me:

**AI features that need to hold up in production**
**Architecture for multi-tenant or payment-heavy platforms**
**Performance and reliability problems on live systems**
**Legacy upgrades without downtime**

<div align="center">

### Build it so the second delivery is boring.

[**Portfolio**](https://contactumar.com)
 · 
[**LinkedIn**](https://www.linkedin.com/in/umarfarooq-ai/)
 · 
[**Email**](mailto:umar7400@gmail.com)

<br />

<p>
  <a href="https://contactumar.com"><img src="https://img.shields.io/badge/Portfolio-contactumar.com-0f766e?style=flat-square" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/umarfarooq-ai/"><img src="https://img.shields.io/badge/LinkedIn-umarfarooq--ai-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:umar7400@gmail.com"><img src="https://img.shields.io/badge/Email-umar7400%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

<sub>
AI Engineer · Solution Architect · Production LLM Systems · Multi-Tenancy · Payments & Webhooks · Laravel · Node · React · Vue · Redis · Elasticsearch · AWS
</sub>

<br /><br />

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat-square" alt="profile views" />

</div>
