'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-mono text-[var(--accent)] text-xs tracking-widest uppercase mb-4"
        >
          05 / Contact
        </motion.p>

        {/* Full-width heading */}
        <motion.h2
          id="contact-heading"
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-display font-black text-[clamp(3rem,9vw,7rem)] leading-[0.95] text-[var(--text)] mb-12"
        >
          Let&apos;s build
          <br />
          <span className="text-[var(--accent)] italic">something.</span>
        </motion.h2>

        <motion.div
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="grid sm:grid-cols-[1fr_auto] gap-12 items-end border-t border-[var(--border)] pt-12"
        >
          <div>
            <motion.p variants={staggerItem} className="text-[var(--text-2)] text-lg leading-relaxed max-w-lg mb-8">
              Open to Ssr/Sr full stack and frontend roles, contract work, or just
              an interesting conversation about architecture. Bilingual English/Spanish,
              remote-first.
            </motion.p>
            <motion.a
              variants={staggerItem}
              href="mailto:julian.ferval@gmail.com"
              className="inline-flex items-center gap-3 font-display font-bold text-2xl sm:text-3xl text-[var(--text)] hover:text-[var(--accent)] transition-colors group"
              aria-label="Send email to Julian Fernandez"
            >
              julian.ferval@gmail.com
              <svg
                aria-hidden="true"
                width="28" height="28" viewBox="0 0 28 28" fill="none"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path d="M6 22L22 6M22 6H10M22 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

          {/* Social links */}
          <motion.nav
            variants={staggerItem}
            aria-label="Social links"
            className="flex sm:flex-col gap-4"
          >
            {[
              { label: 'GitHub',   href: 'https://github.com/julian-fernandez' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/julian-fernandez-valdes' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors flex items-center gap-2 group"
              >
                <span className="text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">→</span>
                {link.label}
              </a>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </section>
  );
}
