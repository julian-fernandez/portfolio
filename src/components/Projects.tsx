'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const [featured, ...rest] = projects;

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

        {/* ── Featured ── */}
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
          className="mb-6"
        >
          <ProjectCard project={featured} tall />
        </motion.div>

        {/* ── Grid ── */}
        <motion.ul
          initial="hidden" whileInView="visible" variants={staggerContainer} viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {rest.map(project => (
            <motion.li key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function ProjectCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <article className="group flex flex-col">

      {/* ── Screenshot (title lives here) ── */}
      <a
        href={project.liveUrl ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        className={`relative block w-full overflow-hidden rounded-xl bg-[#0F0F0C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
          tall ? 'aspect-[21/9]' : 'aspect-[4/3]'
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes={tall ? '100vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.accent}22, #0F0F0C)` }}
          >
            <span className="text-6xl opacity-30 select-none">{project.icon}</span>
          </div>
        )}

        {/* Gradient — just enough to make the title readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
        />

        {/* Hover accent glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(to top, ${project.accent}33 0%, transparent 55%)` }}
        />

        {/* Title — only thing inside the image */}
        <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
          <h3 className={`font-display font-black text-white leading-tight drop-shadow-md ${tall ? 'text-2xl' : 'text-base'}`}>
            {project.title}
          </h3>
          <span className="shrink-0 flex items-center gap-1 text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
            Visit <ExternalIcon />
          </span>
        </div>
      </a>

      {/* ── Below the image: description + tags + github ── */}
      <div className="pt-4 flex flex-col gap-3 flex-1">
        <p className={`text-[var(--text-2)] leading-relaxed ${tall ? 'text-sm max-w-3xl' : 'text-sm'}`}>
          {project.description}
        </p>

        <div className="flex items-start justify-between gap-3 mt-auto pt-1">
          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.map(tag => (
              <li key={tag}>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="shrink-0 text-[var(--muted)] hover:text-[var(--text)] transition-colors mt-0.5"
            >
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
