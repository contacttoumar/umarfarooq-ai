<div align="center">

# Umar Farooq

### AI Engineer & Solution Architect

**Revenue-critical platforms · Production AI/LLM · Payments & Webhooks · Multi-Tenant SaaS · Laravel · Node · AWS**

I build the systems that carry **real money and real traffic**, then add AI where it removes manual work, wired in so it inherits the same guarantees as everything around it: **idempotent, isolated, observable, and able to fail safely.**

<p>
  <a href="https://contactumar.com"><strong>Portfolio</strong></a>
  ·
  <a href="https://www.linkedin.com/in/contacttoumar"><strong>LinkedIn</strong></a>
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

➡️ **Architecture notes, outcomes and work history:** [contactumar.com](https://contactumar.com) · [LinkedIn](https://www.linkedin.com/in/contacttoumar)

---

## Current engineering focus

The questions I find most interesting sit where **AI features, payments-grade reliability and multi-tenant architecture** meet.

```text
production-ai/
├── scoring-in-the-pipeline
├── copilots-with-real-context
├── semantic-matching
├── cost-and-ownership-controls
├── fallbacks-and-degradation
└── evaluation-and-tracing

reliable-platforms/
├── idempotency-and-replay
├── state-machines
├── distributed-holds
├── tenant-isolation
├── queues-and-workers
└── load-balanced-aws
```

What I keep asking once a prototype works:

**What happens to checkout when the model is slow, wrong, or down?**

**Can retrieval, a cache or a trace cross a tenant boundary the database never would?**

**Who triggered this model call, what did it read, and what did it cost?**

**If this webhook is delivered three times out of order, how many effects happen?**

**How do I change this flow without a maintenance window?**

---

## Patterns I reach for

Sketches of the approach, not excerpts from client code.

<details>
<summary><b>Idempotent write: a retry never charges twice</b></summary>

```js
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
<summary><b>Webhooks: at-least-once delivery, exactly-once effect</b></summary>

```js
function verify(rawBody, signature, secret) {
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// the unique key on event_id turns a duplicate delivery into a no-op
const { affectedRows } = await db.query(
  "INSERT IGNORE INTO webhook_events (event_id, type, payload) VALUES (?, ?, ?)",
  [event.id, event.type, rawBody]
);
if (affectedRows === 0) return res.sendStatus(200);
await queue.add("apply-event", { eventId: event.id });
```
</details>

<details>
<summary><b>Inventory hold with expiry (Redis)</b></summary>

```text
SET hold:{lot_id} {broker_id}:{token} NX EX 300     # take the hold; fails if someone has it
...                                                  # sell it, or let it expire
release (Lua, compare-and-delete):
  if redis.call("GET", KEYS[1]) == ARGV[1] then return redis.call("DEL", KEYS[1]) end
```
Every API node behind the load balancer sees the hold. The database remains the source of truth through an explicit state machine: `available → held → sold → fulfilled / cancelled`.
</details>

<details>
<summary><b>Tenant isolation at the model layer (Laravel)</b></summary>

```php
class TenantScope implements Scope
{
    public function apply(Builder $query, Model $model): void
    {
        $query->where($model->getTable() . '.tenant_id', app('tenant')->id);
    }
}

trait BelongsToTenant
{
    protected static function bootBelongsToTenant(): void
    {
        static::addGlobalScope(new TenantScope);
        static::creating(fn ($m) => $m->tenant_id ??= app('tenant')->id);
    }
}
```
The same rule has to reach queues, cache keys, file paths and AI retrieval.
</details>

<details>
<summary><b>A model call with an owner, a budget and a fallback (TypeScript)</b></summary>

```ts
async function guardedCall<T>({ feature, tenantId, userId, run, fallback }: Call<T>): Promise<T> {
  if (await budget.exceeded(feature, tenantId)) return fallback();
  const started = Date.now();
  try {
    const result = await withTimeout(run(), 4000);
    await trace.record({ feature, tenantId, userId, ms: Date.now() - started, usage: result.usage });
    return result.value;
  } catch (error) {
    await trace.record({ feature, tenantId, userId, ms: Date.now() - started, error: String(error) });
    return fallback();
  }
}
```
</details>

```text
order created ─► enqueue score job ─► features ─► model / rules ─► score + reason stored on the order
                                          │
                       timeout or provider error ─► deterministic rules take over, flow continues
```

---

## Open-source direction

I would rather publish a few small, sharp tools than a shelf of demos. The ideas I'm shaping:

### Webhook replay harness

A test kit that throws the delivery patterns real providers produce at an endpoint, and asserts the effect happens once.

```bash
replay-harness run --endpoint /webhooks/payments \
  --scenarios duplicate,late,out-of-order,concurrent,bad-signature
```

### Guarded model calls

A small library that makes the safe path the easy path for AI features: every call carries an owner, a budget, a timeout, a trace and a fallback, or it does not compile.

```ts
const reply = await ai.call({
  feature: "support-copilot",
  tenant, user,
  budget: { perDay: 200 },
  timeoutMs: 4000,
  fallback: () => rulesBasedReply(order),
});
```

### Money-path checklist as tests

The questions I ask before any payment or inventory flow ships, written as executable checks: retried, concurrent, late, and provider-down.

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

## How I think about engineering

```text
01. Design for the second delivery, not the first.
02. A retry is a normal request. Treat it like one.
03. Illegal states should be rejected in exactly one place.
04. Measure first. The usual suspect is often innocent.
05. A model call is a dependency: owner, budget, timeout, fallback.
06. Isolation is a property of the whole system, not a column.
07. Change live systems in slices, and keep the old path until the new one earns it.
08. If it is not written down, it is not released.
```

Frameworks change every year. Failure modes mostly do not.

---

## What you'll find here

This profile holds the engineering side of my work. Most of my production code belongs to clients and stays private, so expect the public part to be:

* small tools for **payments-grade reliability** (idempotency, replay, locks)
* **production AI patterns** (guarded calls, scoring hooks, fallbacks)
* **multi-tenant** isolation helpers and checks
* notes and sketches from systems I have shipped
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
[**LinkedIn**](https://www.linkedin.com/in/contacttoumar)
 · 
[**Email**](mailto:umar7400@gmail.com)

<br />

<sub>
AI Engineer · Solution Architect · Production LLM Systems · Multi-Tenancy · Payments & Webhooks · Laravel · Node · React · Vue · Redis · Elasticsearch · AWS
</sub>

<br /><br />

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat-square" alt="profile views" />

</div>
