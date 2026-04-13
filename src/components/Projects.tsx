'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-label="Projects">

      {/* ── Featured ── */}
      <div className="px-6 pb-6">
        <div className="max-w-6xl mx-auto">

          <motion.article
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={viewport}
            className="group grid lg:grid-cols-[1.1fr_0.9fr] gap-0 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--surface-card)]"
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
                  fill priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
            </a>

            {/* Details */}
            <div className="flex flex-col p-6 gap-4 border-t lg:border-t-0 lg:border-l border-[var(--border)]">
              <div>
                <p className="text-[11px] text-[var(--muted)] uppercase tracking-widest mb-2">Flagship project</p>
                <h2 className="font-display font-bold text-xl text-[var(--text)] leading-tight mb-1">
                  {featured.title}
                </h2>
                {featured.punchline && (
                  <p className="text-xs text-[var(--text-2)] leading-relaxed border-l border-[var(--accent)] pl-3 mt-2">
                    {featured.punchline}
                  </p>
                )}
              </div>

              <p className="text-[var(--text-2)] text-sm leading-relaxed">
                {featured.description}
              </p>

              {featured.highlights && (
                <ul className="flex flex-col gap-2">
                  {featured.highlights.map(point => (
                    <li key={point} className="flex gap-3 items-baseline">
                      <span className="text-[var(--muted)] text-xs shrink-0 select-none">—</span>
                      <span className="text-[var(--text-2)] text-xs leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-[var(--border)]">
                <p className="text-[11px] text-[var(--muted)]">
                  {featured.tags.join(' · ')}
                </p>
                <div className="flex items-center gap-4 shrink-0">
                  {featured.githubUrl && (
                    <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer"
                      aria-label="GitHub" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                      <GithubIcon />
                    </a>
                  )}
                  {featured.liveUrl && (
                    <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-[var(--text-2)] hover:text-[var(--text)] transition-colors flex items-center gap-1">
                      Live <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      {/* ── Other projects ── */}
      <div className="px-6 py-16 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">

          <p className="text-[11px] text-[var(--muted)] uppercase tracking-widest mb-8">More projects</p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
            {rest.map(project => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col gap-3">
      <a
        href={project.liveUrl ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        className="relative block w-full aspect-[4/3] overflow-hidden rounded-md bg-[var(--surface-card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
            style={{ background: `linear-gradient(135deg, ${project.accent}18, #100F0D)` }}>
            <span className="text-5xl opacity-20 select-none">{project.icon}</span>
          </div>
        )}
      </a>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-sm text-[var(--text)] leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 shrink-0 mt-0.5">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-[var(--muted)] hover:text-[var(--text-2)] transition-colors">
                <GithubIcon />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`${project.title} live`}
                className="text-[var(--muted)] hover:text-[var(--text-2)] transition-colors">
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <p className="text-[var(--text-2)] text-xs leading-relaxed">
          {project.description}
        </p>
        <p className="text-[11px] text-[var(--muted)]">
          {project.tags.join(' · ')}
        </p>
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
    <svg aria-hidden width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
