"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stackScenarios } from "@/data/profile";

const tierColor: Record<string, string> = {
  core: "bg-accent/15 text-accent-deep",
  data: "bg-highlight/15 text-[#92400e]",
  ai: "bg-sky-500/15 text-sky-900",
  edge: "bg-ink/8 text-ink-soft",
};

export function StackPicker() {
  const [active, setActive] = useState(stackScenarios[0].id);
  const scenario = stackScenarios.find((s) => s.id === active) ?? stackScenarios[0];

  return (
    <section id="stack" className="section-rule bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Stack judgment</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            What I reach for, when
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Pick a scenario. You get the stack I would actually ship—and one line on why each piece earns its seat.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {stackScenarios.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={`rounded-md px-3.5 py-2 text-left text-sm font-medium transition ${
                  isActive
                    ? "bg-ink text-paper"
                    : "border border-[var(--line)] bg-white/60 text-ink-soft hover:border-accent hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70"
          >
            <div className="border-b border-[var(--line)] bg-paper-deep/60 px-5 py-4 font-mono text-xs text-muted md:px-6">
              $ consider --for &quot;{scenario.label.toLowerCase()}&quot;
            </div>
            <div className="px-5 py-6 md:px-6 md:py-8">
              <p className="max-w-3xl text-base leading-relaxed text-ink-soft">{scenario.summary}</p>
              <div className="mt-6 divide-y divide-[var(--line)]">
                {scenario.pieces.map((piece) => (
                  <div
                    key={piece.name}
                    className="grid gap-2 py-4 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr_auto] md:items-center md:gap-6"
                  >
                    <div className="font-semibold text-ink">{piece.name}</div>
                    <div className="text-sm leading-relaxed text-muted">{piece.why}</div>
                    <span
                      className={`w-fit rounded px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${tierColor[piece.tier]}`}
                    >
                      {piece.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
