'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">

        <p className="text-[11px] text-[var(--muted)] uppercase tracking-widest mb-4">Experience</p>

        <motion.h2
          id="experience-heading"
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-display font-bold text-[clamp(1.8rem,4vw,2.6rem)] text-[var(--text)] mb-14"
        >
          Where I&apos;ve worked
        </motion.h2>

        <motion.ol
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="relative flex flex-col gap-0"
          aria-label="Work history"
        >
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--border)] hidden sm:block"
          />

          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              variants={staggerItem}
              className="relative sm:pl-12 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div
                aria-hidden="true"
                className={`
                  hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors
                  ${i === 0
                    ? 'bg-[var(--accent)] border-[var(--accent)]'
                    : 'bg-[var(--surface)] border-[var(--border)]'
                  }
                `}
              />

              <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
                {/* Meta */}
                <div>
                  <time
                    dateTime={item.period}
                    className="text-[var(--muted)] text-xs"
                  >
                    {item.period}
                  </time>
                  <h3 className="font-display font-bold text-lg text-[var(--text)] mt-1 leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-[var(--accent)] text-sm font-semibold mt-0.5">{item.company}</p>
                  <p className="text-[var(--muted)] text-xs mt-1">{item.location}</p>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5 mt-1" aria-label={`${item.role} at ${item.company} responsibilities`}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-baseline">
                      <span aria-hidden="true" className="text-[var(--muted)] text-xs mt-1 shrink-0 select-none">—</span>
                      <span className="text-[var(--text-2)] text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
