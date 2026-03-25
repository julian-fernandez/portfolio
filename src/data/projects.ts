export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  /** accent colour used on the card */
  accent: string;
  /** emoji / icon character for the card */
  icon: string;
  /** path relative to /public — drop a screenshot here when ready */
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'l5r-client',
    title: 'L5R: Samurai Extended',
    tagline: 'Real-time multiplayer card game engine',
    description:
      'Full-featured digital client for a complex CCG with real-time multiplayer via Socket.io, a custom turn-engine modelling all rule phases, an interrupt/reaction system, province management, and an in-game right-click context menu for manual card actions during playtesting.',
    tags: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'Vite', 'Render'],
    liveUrl: 'https://l5r-sx-client.netlify.app',
    githubUrl: 'https://github.com/julian-fernandez/l5r-sx-client',
    featured: true,
    accent: '#C0392B',
    icon: '⚔️',
    image: '/screenshots/l5r-client.png',
  },
  {
    id: 'l5r-deckbuilder',
    title: 'L5R Card DB & Deckbuilder',
    tagline: 'Search, build and share 6 000+ card decks',
    description:
      'Card search app with advanced filtering across 6 000+ cards, a two-column dynasty/fate deck editor, Supabase auth, deck persistence, public sharing links, PDF export, and a Samurai Extended ban-list enforcement layer that flags illegal cards inline.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind', 'PWA', 'Cloudflare R2'],
    liveUrl: 'https://samurai-extended.netlify.app',
    githubUrl: 'https://github.com/julian-fernandez/samurai-extended-deckbuilder',
    featured: false,
    accent: '#8B5CF6',
    icon: '🃏',
    image: '/screenshots/l5r-deckbuilder.png',
  },
  {
    id: 'fiestas-pba',
    title: 'Fiestas PBA',
    tagline: 'Event discovery platform for Buenos Aires',
    description:
      'Consumer-facing event listing site for the Province of Buenos Aires. Clean, fast, fully responsive UI with category filtering, search, and event detail pages. Deployed on Netlify with zero-downtime CI.',
    tags: ['React', 'Vite', 'CSS Modules', 'Netlify'],
    liveUrl: 'https://fiestas-pba.netlify.app',
    featured: false,
    accent: '#F59E0B',
    icon: '🎉',
    image: '/screenshots/fiestas-pba.png',
  },
  {
    id: 'layout-cheatsheet',
    title: 'CSS Layout Cheatsheet',
    tagline: 'Interactive Flexbox & Grid reference',
    description:
      'Living reference for CSS layout patterns: every major Flexbox and Grid property rendered live with editable values, copy-ready snippets, and visual diagrams. Built as a developer tool for everyday use.',
    tags: ['React', 'Vite', 'CSS', 'Tailwind'],
    liveUrl: 'https://layoutcheatsheet.netlify.app',
    featured: false,
    accent: '#10B981',
    icon: '📐',
    image: '/screenshots/layout-cheatsheet.png',
  },
];
