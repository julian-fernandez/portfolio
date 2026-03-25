'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { stack } from '@/data/stack';

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-mono text-[var(--accent)] text-xs tracking-widest uppercase mb-4"
        >
          02 / Stack
        </motion.p>

        <motion.h2
          id="stack-heading"
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-display font-black text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-20"
        >
          Tools I trust
        </motion.h2>

        <motion.dl
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="flex flex-col gap-10"
        >
          {stack.map((group, i) => (
            <motion.div
              key={group.label}
              variants={staggerItem}
              className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-baseline"
            >
              <dt className="font-mono text-[var(--muted)] text-xs tracking-widest uppercase pt-1">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2" aria-label={`${group.label} technologies`} role="list">
                  {group.items.map(item => (
                    <li key={item}>
                      <span
                        className={`
                          inline-block font-mono text-sm px-4 py-1.5 rounded-full border transition-colors duration-200
                          ${i === 0
                            ? 'border-[var(--accent)]/40 text-[var(--accent)] bg-[var(--accent)]/5 hover:bg-[var(--accent)]/10'
                            : 'border-[var(--border)] text-[var(--text-2)] hover:border-[var(--muted)] hover:text-[var(--text)]'
                          }
                        `}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Divider */}
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="mt-20 pt-16 border-t border-[var(--border)] grid sm:grid-cols-3 gap-8"
        >
          {[
            { label: 'Performance', desc: 'Lighthouse 90+, Core Web Vitals, bundle analysis' },
            { label: 'Accessibility', desc: 'WCAG 2.1 AA, screen reader testing, semantic HTML' },
            { label: 'Quality',       desc: 'Typed APIs, >80% test coverage, CI enforcement' },
          ].map(item => (
            <div key={item.label}>
              <h3 className="font-display font-bold text-lg text-[var(--text)] mb-2">
                {item.label}
              </h3>
              <p className="text-[var(--text-2)] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
