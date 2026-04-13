'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section aria-label="Introduction" className="pt-24 pb-6 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display font-bold text-[clamp(2.4rem,5.5vw,3.8rem)] text-[var(--text)] leading-[1.02] tracking-tight mb-3"
        >
          Julián Fernández
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[var(--text-2)] text-sm mb-4"
        >
          Full Stack Developer — React · TypeScript · Angular · Node.js · 7+ yrs
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="max-w-md text-[var(--text-2)] leading-relaxed mb-8 text-[15px]"
        >
          Currently at Globant building enterprise apps for US clients.
          I lead on complex UI systems — state machines, real-time sync,
          component architecture at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="flex flex-wrap items-center gap-5"
        >
          <a
            href="https://github.com/julian-fernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href="mailto:julian.ferval@gmail.com"
            className="text-sm text-[var(--text)] underline underline-offset-4 decoration-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            julian.ferval@gmail.com
          </a>
          <a
            href="/julian-fernandez-cv.pdf"
            download
            className="text-sm text-[var(--muted)] hover:text-[var(--text-2)] transition-colors"
          >
            CV ↓
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
