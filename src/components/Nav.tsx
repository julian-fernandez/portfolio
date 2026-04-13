'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); return; }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[var(--nav-scrolled-bg)] backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
        >
          <span className="font-display font-bold text-sm text-[var(--text)] tracking-tight select-none">
            JF
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); go(link.href); }}
                  aria-current={active === link.href.slice(1) ? 'location' : undefined}
                  className={`text-sm transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? 'text-[var(--text)]'
                      : 'text-[var(--text-2)] hover:text-[var(--text)]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block w-5 h-px bg-[var(--text)] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-5 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[var(--text)] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 bg-[var(--bg)]"
          >
            <ul className="flex flex-col gap-8" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); go(link.href); }}
                    className="font-display font-bold text-4xl text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex gap-6 border-t border-[var(--border)] pt-8">
              <a href="https://github.com/julian-fernandez" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/julian-fernandez" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-2)] hover:text-[var(--text)] transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
