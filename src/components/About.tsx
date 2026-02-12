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
              I&apos;m a senior frontend engineer based in Buenos Aires with a focus on
              React, TypeScript, and building interfaces people actually enjoy using.
              I&apos;ve shipped production code at scale — from SaaS monetisation platforms
              serving millions of users to niche tools built out of genuine curiosity.
            </motion.p>
            <motion.p variants={staggerItem} className="text-[var(--text-2)] text-lg leading-relaxed">
              I take accessibility seriously, not as a checkbox but as a design constraint
              that makes products better. I&apos;m comfortable leading technical decisions,
              mentoring engineers, and pushing back when something doesn&apos;t make sense.
            </motion.p>
            <motion.p variants={staggerItem} className="text-[var(--text-2)] text-lg leading-relaxed">
              Outside of work I build a fully-featured digital card game client — a project
              that&apos;s taught me more about state machines, real-time architecture, and
              domain modelling than any professional role.
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
