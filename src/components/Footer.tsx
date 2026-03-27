'use client';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--border)] px-6 py-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[var(--muted)] text-xs">
          © {year} Julian Fernandez. Built with Next.js &amp; Tailwind.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[var(--muted)] text-xs hover:text-[var(--accent)] transition-colors"
          aria-label="Scroll back to top"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
