'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { projects } from '@/data/projects';

export function Projects() {
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

        <motion.ul
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="grid sm:grid-cols-2 gap-6"
          role="list"
        >
          {projects.map(project => (
            <motion.li key={project.id} variants={staggerItem}>
              <a
                href={project.liveUrl ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[#0F0F0C] overflow-hidden hover:border-[var(--muted)] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {/* Screenshot / placeholder */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    /* Placeholder gradient until real screenshot is dropped in */
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}22 0%, #0F0F0C 60%)`,
                      }}
                    >
                      <span className="text-5xl select-none opacity-40">{project.icon}</span>
                    </div>
                  )}

                  {/* Hover overlay with "Visit →" */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <span
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                      style={{ background: project.accent }}
                    >
                      Visit site <ExternalIcon />
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display font-bold text-lg text-[var(--text)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        onClick={e => e.stopPropagation()}
                        className="shrink-0 text-[var(--muted)] hover:text-[var(--text)] transition-colors mt-0.5"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </div>

                  <p className="font-mono text-[11px] tracking-wide mb-3" style={{ color: project.accent }}>
                    {project.tagline}
                  </p>

                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.tags.map(tag => (
                      <li key={tag}>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
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

function GithubIcon() {
  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
