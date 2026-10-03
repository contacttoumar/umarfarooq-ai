"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/profile";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-rule bg-paper-deep/50 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">What clients say</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Feedback from people who shipped with me
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="border-l-2 border-accent bg-white/50 py-5 pl-5 pr-4"
            >
              <p className="text-base leading-relaxed text-ink-soft">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5">
                <div className="font-semibold text-ink">{item.name}</div>
                <div className="mt-1 text-sm text-muted">{item.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
