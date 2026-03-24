'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const featured = projects.find(p => p.featured)!;
  const rest = projects.filter(p => !p.featured);
  const [active, setActive] = useState<Project>(rest[0]);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-mono text-[var(--accent)] text-xs tracking-widest uppercase mb-4"
        >
          02 / Projects
        </motion.p>

        <motion.h2
          id="projects-heading"
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="font-display font-black text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-16"
        >
          Selected work
        </motion.h2>

        {/* ── Featured project ── */}
        <motion.article
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="group relative rounded-2xl border border-[var(--border)] bg-[#0F0F0C] mb-6 overflow-hidden"
        >
          {/* Glow blob */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: featured.accent }}
          />

          <div className="relative p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                {/* Icon + badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden>{featured.icon}</span>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border"
                    style={{ color: featured.accent, borderColor: `${featured.accent}55`, background: `${featured.accent}15` }}
                  >
                    Featured
                  </span>
                </div>

                <h3 className="font-display font-black text-[clamp(1.5rem,3vw,2.25rem)] text-[var(--text)] mb-2 leading-tight">
                  {featured.title}
                </h3>
                <p className="font-mono text-xs tracking-wide mb-4" style={{ color: featured.accent }}>
                  {featured.tagline}
                </p>
                <p className="text-[var(--text-2)] text-base leading-relaxed mb-6">
                  {featured.description}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {featured.tags.map(tag => (
                    <li key={tag}>
                      <span className="font-mono text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-2)] bg-[var(--surface)]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex lg:flex-col gap-3 lg:items-end shrink-0">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${featured.title} live`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
                    style={{ background: featured.accent }}
                  >
                    Live demo <ExternalIcon />
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${featured.title} on GitHub`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--text-2)] text-sm font-semibold hover:border-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                  >
                    GitHub <GithubSmallIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── Interactive project explorer ── */}
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="grid lg:grid-cols-5 gap-4"
        >
          {/* Tab list */}
          <motion.ul
            variants={staggerContainer}
            className="lg:col-span-2 flex lg:flex-col gap-2"
            role="tablist"
            aria-label="Other projects"
          >
            {rest.map(project => (
              <motion.li key={project.id} variants={staggerItem} className="flex-1 lg:flex-none">
                <button
                  role="tab"
                  aria-selected={active.id === project.id}
                  aria-controls={`panel-${project.id}`}
                  onClick={() => setActive(project)}
                  className={`w-full text-left rounded-xl border p-4 transition-all duration-200 cursor-pointer group ${
                    active.id === project.id
                      ? 'border-[var(--border)] bg-[#0F0F0C]'
                      : 'border-transparent hover:border-[var(--border)] hover:bg-[#0F0F0C]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        background: `${project.accent}20`,
                      }}
                    >
                      {project.icon}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold leading-tight truncate transition-colors ${active.id === project.id ? 'text-[var(--text)]' : 'text-[var(--text-2)] group-hover:text-[var(--text)]'}`}>
                        {project.title}
                      </p>
                      <p className="text-[10px] font-mono mt-0.5 truncate" style={{ color: project.accent }}>
                        {project.tagline}
                      </p>
                    </div>
                    {active.id === project.id && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="ml-auto w-1 h-5 rounded-full shrink-0"
                        style={{ background: active.accent }}
                      />
                    )}
                  </div>
                </button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Detail panel */}
          <div className="lg:col-span-3" role="tabpanel" id={`panel-${active.id}`}>
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full rounded-xl border border-[var(--border)] bg-[#0F0F0C] p-6 flex flex-col overflow-hidden relative"
              >
                {/* Subtle corner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-30 blur-2xl"
                  style={{ background: `radial-gradient(circle at top right, ${active.accent}, transparent 70%)` }}
                />

                <div className="relative flex-1 flex flex-col">
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-2 mb-5 bg-[var(--surface)] rounded-lg px-3 py-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-3 font-mono text-[11px] text-[var(--muted)] truncate flex-1">
                      {active.liveUrl ?? 'localhost:3000'}
                    </span>
                    {active.liveUrl && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${active.title}`}
                        className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        <ExternalIcon />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[var(--text)] mb-1">{active.title}</h3>
                  <p className="font-mono text-xs mb-4" style={{ color: active.accent }}>{active.tagline}</p>

                  <p className="text-[var(--text-2)] text-sm leading-relaxed flex-1 mb-5">
                    {active.description}
                  </p>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies">
                    {active.tags.map(tag => (
                      <li key={tag}>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA row */}
                  <div className="flex gap-3 flex-wrap">
                    {active.liveUrl && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${active.title} live`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
                        style={{ background: active.accent }}
                      >
                        Live demo <ExternalIcon />
                      </a>
                    )}
                    {active.githubUrl && (
                      <a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${active.title} source on GitHub`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text-2)] text-sm font-semibold hover:border-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                      >
                        GitHub <GithubSmallIcon />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubSmallIcon() {
  return (
    <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
