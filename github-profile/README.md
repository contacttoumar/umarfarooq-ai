<div align="center">

# Umar Farooq
### AI Engineer & Solution Architect

**I design systems that carry real money and real traffic, and add AI where it removes manual work.**

📍 Lahore, Pakistan · UTC+5 · remote

[Portfolio](https://contactumar.com) · [LinkedIn](https://www.linkedin.com/in/contacttoumar) · [`umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) · [Email](mailto:umar7400@gmail.com)

<img src="https://komarev.com/ghpvc/?username=contacttoumar&label=Profile%20views&color=0f766e&style=flat" alt="profile views" />

</div>

---

## About this profile

Most of what I build is commercial work in private repositories: marketplaces, ticketing operations, payment platforms, SaaS. So this profile is not a project gallery.

- **Projects and work history:** [contactumar.com](https://contactumar.com) and [LinkedIn](https://www.linkedin.com/in/contacttoumar).
- **This GitHub:** how I think about engineering, the patterns I reach for, and the stack I work in.

---

## What I work on

| Area | Focus |
|---|---|
| **Solution architecture** | Multi-tenancy, state machines, idempotent writes, signed webhooks, distributed locks, queue topology, load-balanced AWS layouts, shard-ready data |
| **AI engineering** | Copilots with real order context, fraud and anomaly scoring in the pipeline, price and demand signals, semantic matching, retrieval over internal documents |
| **Reliability and performance** | Profiling before changing, Redis caching with real invalidation, Elasticsearch search, async imports, legacy upgrades in slices |

---

## Patterns I reach for

Small sketches of problems I keep meeting in production systems. They are illustrations of the approach, not excerpts from client code.

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

// event ledger: the unique key on event_id makes a duplicate delivery a no-op
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
The hold lives in Redis so every API node behind the load balancer sees it. The database stays the source of truth through an explicit state machine: `available → held → sold → fulfilled / cancelled`.
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
The same rule has to reach queues, cache keys, file paths and AI retrieval, so a canary tenant tries to read another tenant's data on every release.
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
Fraud scoring, copilots and matching all run through a wrapper like this. A slow or wrong model degrades a feature, never the checkout.
</details>

```text
order created ─► enqueue score job ─► features ─► model / rules ─► score + reason stored on the order
                                          │
                       timeout or provider error ─► deterministic rules take over, flow continues
```

---

## How I work

| Stage | What I do | Why |
|---|---|---|
| **1 · Model** | Draw the state machine and a failure table before code: what if this runs twice, late, concurrently, or never? | Most production incidents are one of those four |
| **2 · Decide** | Settle tenancy, data ownership, queue topology, cache invalidation and the deploy path up front; write down the trade-offs | Cheap on day one, expensive on day 300 |
| **3 · Build the thin slice** | One vertical flow end to end on real data, including its failure paths, then widen | Proves the design while changing it is still cheap |
| **4 · Make writes repeatable** | Idempotency keys, locks with TTL, signed webhooks, an event ledger | Retries and double clicks are the normal case |
| **5 · Test the ugly paths** | Concurrency tests for holds, a sandbox with forced failures, contract tests on webhooks, a canary tenant | Happy-path tests do not find money bugs |
| **6 · Measure, then change** | Profile with the real traffic shape, one hypothesis per change, benchmark before and after | Fixes the actual cause, not the usual suspect |
| **7 · Ship in slices** | Feature flags, expand-and-contract migrations, staged rollout, a rollback path | Live systems change without downtime |
| **8 · Govern AI like payments** | Every model call has an owner, scope, budget, timeout and fallback; traces and an eval set before any prompt change | A bad answer can be replayed and a change can be proven |
| **9 · Operate and document** | Alarms on checkout errors, queue depth, Redis hit ratio, webhook success and API p95; a written release path and runbook | The system keeps working when I am not watching it |

---

## Toolkit

| Area | What I work with |
|---|---|
| **AI / LLM** | OpenAI and other LLM APIs · embeddings and RAG · fraud and pricing scoring hooks · copilots · semantic matching |
| **Architecture** | Multi-tenancy · state machines · idempotency · HMAC webhooks · distributed locks · circuit breakers · worker services · shard-ready tables |
| **Backend** | PHP 8 · Laravel · Node.js (Express/Fastify) · CodeIgniter · REST · WooCommerce |
| **Frontend** | React · Vue · Next.js · Inertia · TypeScript · Redux/Zustand/Pinia · Socket.IO |
| **Data** | MySQL/MariaDB with replicas · Redis · Elasticsearch/OpenSearch |
| **Cloud** | AWS ALB, ASG, EC2/ECS, RDS, ElastiCache, S3, CloudFront, SQS, SES, WAF, Secrets Manager, CloudWatch · Docker · CI/CD |

---

## Repositories

| Repo | What it is |
|---|---|
| [`umarfarooq-ai`](https://github.com/contacttoumar/umarfarooq-ai) | Source of my portfolio site (Next.js, TypeScript, Tailwind) |

Client and commercial work is private by agreement.

---

📍 Lahore, Pakistan (UTC+5) · 📧 [umar7400@gmail.com](mailto:umar7400@gmail.com) · 🌐 [contactumar.com](https://contactumar.com) · 💼 [LinkedIn](https://www.linkedin.com/in/contacttoumar)
