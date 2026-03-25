'use client';

import { motion } from 'framer-motion';

const STACK = ['React', 'TypeScript', 'Angular', 'Node.js', 'Next.js'];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[85vh] flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(129,140,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129,140,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          className="font-mono text-[var(--muted)] text-xs tracking-widest uppercase mb-5"
        >
          Tandil, Argentina · Open to remote
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-display font-black leading-[0.92] text-[clamp(3.5rem,10vw,8rem)] text-[var(--text)] mb-4"
        >
          Julián
          <br />
          <span className="text-[var(--accent)]">Fernández</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="font-display font-bold text-[clamp(1rem,2.5vw,1.5rem)] text-[var(--text-2)] mb-6"
        >
          Full Stack Developer · 7+ years
        </motion.p>

        {/* Stack chips */}
        <motion.ul
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
          aria-label="Core technologies"
        >
          {STACK.map(tech => (
            <li key={tech}>
              <span className="font-mono text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-2)]">
                {tech}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="max-w-lg text-[var(--text-2)] text-lg leading-relaxed mb-10"
        >
          Currently at Globant on enterprise React and Angular for US clients.
          Comfortable across the stack — from WebSocket game engines to geospatial
          data tools.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-2)] transition-colors"
          >
            See my work
            <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:julian.ferval@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--text-2)] font-semibold text-sm hover:border-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6 mt-14"
        >
          <a href="https://github.com/julian-fernandez" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/julian-fernandez-valdes" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
            <LinkedInIcon />
          </a>
          <span className="w-12 h-px bg-[var(--border)]" />
          <span className="text-[var(--muted)] text-xs font-mono tracking-wider">
            julian.ferval@gmail.com
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
