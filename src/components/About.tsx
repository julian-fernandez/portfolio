'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';

const STATS = [
  { value: '7+',  label: 'Years of experience' },
  { value: '30+', label: 'Projects shipped' },
  { value: '2',   label: 'Continents worked across' },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-mono text-[var(--accent)] text-xs tracking-widest uppercase mb-16"
        >
          01 / About
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

          {/* Left — statement */}
          <motion.div
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          >
            <h2
              id="about-heading"
              className="font-display font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-[var(--text)]"
            >
              I care about the{' '}
              <em className="text-[var(--accent)] not-italic">craft</em>
              {' '}as much as the output.
            </h2>

            {/* Stats */}
            <motion.dl
              initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
              className="grid grid-cols-3 gap-6 mt-14 pt-14 border-t border-[var(--border)]"
            >
              {STATS.map(stat => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <dt className="text-[var(--text-2)] text-xs font-mono tracking-wide uppercase leading-tight mb-1">
                    {stat.label}
                  </dt>
                  <dd className="font-display font-black text-4xl text-[var(--text)]">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.p variants={staggerItem} className="text-[var(--text-2)] text-lg leading-relaxed">
              I&apos;m a full stack developer (frontend-heavy) based in Argentina with 7+ years
              of experience. I&apos;ve worked at Globant on enterprise React and Angular apps
              for US clients, and before that spent six years at BeeReal IT building
              everything from live streaming platforms to geospatial data tools.
            </motion.p>
            <motion.p variants={staggerItem} className="text-[var(--text-2)] text-lg leading-relaxed">
              I&apos;m comfortable across the stack — Node.js on the backend, design systems
              and component libraries on the frontend, and the full CI/CD pipeline in between.
              I&apos;ve led small teams, done a lot of PR reviews, and generally prefer
              fixing the root cause over the symptom.
            </motion.p>
            <motion.p variants={staggerItem} className="text-[var(--text-2)] text-lg leading-relaxed">
              On the side I&apos;m building a real-time multiplayer card game client from scratch —
              it&apos;s the kind of project that forces you to think hard about state, architecture,
              and edge cases, which is exactly why I keep working on it.
            </motion.p>

            <motion.a
              variants={staggerItem}
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[var(--accent)] hover:gap-4 transition-all group"
              aria-label="Download CV as PDF"
            >
              Download CV
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-y-0.5 transition-transform">
                <path d="M8 3v8M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
