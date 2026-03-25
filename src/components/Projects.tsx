'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-label="Projects">

      {/* ── Featured — sits right below the hero, no padding overhead ── */}
      <div className="px-6 pb-4">
        <div className="max-w-6xl mx-auto">

          {/* Tiny label — doesn't take up much space */}
          <p className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase mb-2">
            Flagship Project
          </p>

          <motion.article
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
            className="group grid lg:grid-cols-[1.1fr_0.9fr] gap-0 rounded-2xl overflow-hidden border border-[var(--border)]"
            style={{ background: '#0C0C14' }}
          >
            {/* Screenshot */}
            <a
              href={featured.liveUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${featured.title}`}
              className="relative block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              style={{ minHeight: '280px' }}
            >
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={`Screenshot of ${featured.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="font-display font-black text-xl text-white drop-shadow-md">
                  {featured.title}
                </span>
              </div>
            </a>

            {/* Details panel — compact */}
            <div className="flex flex-col p-5 gap-3 border-t lg:border-t-0 lg:border-l border-[var(--border)]">
              {featured.punchline && (
                <p className="font-mono text-xs text-[var(--text)] leading-relaxed border-l-2 border-[var(--accent)] pl-3">
                  {featured.punchline}
                </p>
              )}
              <p className="text-[var(--text-2)] text-sm leading-relaxed">
                {featured.description}
              </p>

              {featured.highlights && (
                <ul className="flex flex-col gap-2">
                  {featured.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2 items-baseline">
                      <span className="text-[var(--accent)] text-xs shrink-0">▸</span>
                      <span className="text-[var(--text-2)] text-xs leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center gap-3 flex-wrap mt-auto pt-3 border-t border-[var(--border)]">
                <ul className="flex flex-wrap gap-1.5 flex-1" aria-label="Technologies">
                  {featured.tags.map(tag => (
                    <li key={tag}>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted)]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 shrink-0">
                  {featured.githubUrl && (
                    <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer"
                      aria-label="GitHub" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                      <GithubIcon />
                    </a>
                  )}
                  {featured.liveUrl && (
                    <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80"
                      style={{ background: featured.accent }}>
                      Live demo <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      {/* ── Other projects grid ── */}
      <div className="px-6 py-16 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">

          <motion.p
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
            className="font-mono text-[var(--accent)] text-[10px] tracking-widest uppercase mb-6"
          >
            More projects
          </motion.p>

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
      </div>

    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col">
      <a
        href={project.liveUrl ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        className="relative block w-full aspect-[4/3] overflow-hidden rounded-xl bg-[#0C0C14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.accent}22, #0C0C14)` }}>
            <span className="text-6xl opacity-30 select-none">{project.icon}</span>
          </div>
        )}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(to top, ${project.accent}33 0%, transparent 55%)` }}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
          <h3 className="font-display font-black text-base text-white leading-tight drop-shadow-md">
            {project.title}
          </h3>
          <span className="shrink-0 flex items-center gap-1 text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
            Visit <ExternalIcon />
          </span>
        </div>
      </a>

      <div className="pt-4 flex flex-col gap-3 flex-1">
        <p className="text-[var(--text-2)] text-sm leading-relaxed">
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
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="shrink-0 text-[var(--muted)] hover:text-[var(--text)] transition-colors mt-0.5">
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
