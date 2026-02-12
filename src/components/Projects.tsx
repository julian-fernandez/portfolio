'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { projects } from '@/data/projects';

export function Projects() {
  const featured   = projects.find(p => p.featured);
  const rest        = projects.filter(p => !p.featured);

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

        {/* Featured project */}
        {featured && (
          <motion.article
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
            className="group relative rounded-2xl border border-[var(--border)] bg-[#0F0F0C] p-8 lg:p-12 mb-6 overflow-hidden hover:border-[var(--accent)] transition-colors duration-300"
          >
            {/* Accent corner */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at top right, rgba(232,100,44,0.12), transparent 70%)' }}
            />

            <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <span className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase">Featured</span>
                <h3 className="font-display font-black text-[clamp(1.5rem,3vw,2.25rem)] text-[var(--text)] mt-2 mb-4 leading-tight">
                  {featured.title}
                </h3>
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

              <div className="flex lg:flex-col gap-4 lg:items-end">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${featured.title} live`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-2)] transition-colors"
                  >
                    Live demo
                    <ExternalIcon />
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${featured.title} source on GitHub`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--text-2)] text-sm font-semibold hover:border-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                  >
                    GitHub
                    <GithubSmallIcon />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        )}

        {/* Rest of projects */}
        <motion.ul
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {rest.map(project => (
            <motion.li key={project.id} variants={staggerItem}>
              <article className="group h-full rounded-xl border border-[var(--border)] bg-[#0F0F0C] p-6 flex flex-col hover:border-[var(--muted)] transition-colors duration-200">
                <h3 className="font-display font-bold text-xl text-[var(--text)] mb-3 leading-tight group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-2)] text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies">
                  {project.tags.map(tag => (
                    <li key={tag}>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      className="flex items-center gap-1.5 text-sm text-[var(--accent)] font-semibold hover:gap-2.5 transition-all"
                    >
                      Live <ExternalIcon />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="flex items-center gap-1.5 text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
                    >
                      GitHub <GithubSmallIcon />
                    </a>
                  )}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubSmallIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
