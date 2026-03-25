'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-mono text-[var(--accent)] text-xs tracking-widest uppercase mb-8"
        >
          04 / About
        </motion.p>

        <motion.div
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="max-w-2xl flex flex-col gap-5"
        >
          <motion.h2
            id="about-heading"
            variants={staggerItem}
            className="font-display font-black text-2xl text-[var(--text)] mb-1"
          >
            Background
          </motion.h2>

          <motion.p variants={staggerItem} className="text-[var(--text-2)] leading-relaxed">
            Full stack developer (frontend-heavy) based in Argentina, 7+ years in.
            At Globant since 2023 working on enterprise React and Angular for US clients.
            Before that, six years at BeeReal IT across live streaming, geospatial tools,
            CMS, and ticketing platforms.
          </motion.p>

          <motion.p variants={staggerItem} className="text-[var(--text-2)] leading-relaxed">
            Comfortable leading small teams, doing thorough PR reviews, and debugging
            problems from the root — not just the symptom. Bilingual English/Spanish,
            remote-first.
          </motion.p>

          <motion.a
            variants={staggerItem}
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[var(--accent)] hover:gap-4 transition-all group self-start"
            aria-label="Download CV as PDF"
          >
            Download CV
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none"
              className="group-hover:translate-y-0.5 transition-transform">
              <path d="M8 3v8M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
