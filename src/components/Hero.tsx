'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Full Stack Developer',
  'React Engineer',
  'TypeScript Advocate',
  'UI Systems Builder',
  'Angular Developer',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = ROLES[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < target.length) {
        setDisplayed(target.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === target.length) {
        // Pause before deleting
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex > 0) {
        setDisplayed(target.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % ROLES.length);
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* Background grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,100,44,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,100,44,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,100,44,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-6"
        >
          Available for new opportunities
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black leading-[0.9] text-[clamp(4rem,12vw,9rem)] text-[var(--text)] mb-6"
        >
          Julian
          <br />
          <span className="text-[var(--accent)] italic">Fernandez</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-10"
          aria-live="polite"
          aria-label={`Senior ${displayed}`}
        >
          <span className="font-display font-bold text-[clamp(1.25rem,3vw,2rem)] text-[var(--text-2)]">
            Senior
          </span>
          <span className="font-display font-bold text-[clamp(1.25rem,3vw,2rem)] text-[var(--text)]">
            {displayed}
            <span
              aria-hidden="true"
              className="inline-block w-[3px] h-[1em] bg-[var(--accent)] ml-1 align-middle animate-pulse"
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-[var(--text-2)] text-lg leading-relaxed mb-12"
        >
          7+ years building web apps that scale — enterprise platforms at Globant,
          geospatial tools, streaming products, and a few things just for fun.
          React and TypeScript are home, but I&apos;m comfortable across the stack.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-2)] transition-colors shadow-lg shadow-orange-900/20"
          >
            View my work
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-3 rounded-full border border-[var(--border)] text-[var(--text)] font-semibold text-sm hover:border-[var(--text-2)] transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex items-center gap-6 mt-16"
        >
          <a
            href="https://github.com/julian-fernandez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/julian-fernandez-valdes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            <LinkedInIcon />
          </a>
          <span className="w-16 h-px bg-[var(--border)]" />
          <span className="text-[var(--muted)] text-xs font-mono tracking-wider">
            Buenos Aires, Argentina
          </span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--muted)] text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[var(--muted)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
