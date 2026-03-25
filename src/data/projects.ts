export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  accent: string;
  icon: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'l5r-client',
    title: 'L5R: Samurai Extended',
    tagline: 'Real-time multiplayer card game engine',
    description:
      'Full digital client for a complex CCG — real-time multiplayer via Socket.io, a custom turn engine modelling all rule phases, card manipulation, and an interrupt/reaction system for 200+ card interactions.',
    tags: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'Vite'],
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
    tagline: 'Search, build and share decks across 6,000+ cards',
    description:
      'Advanced card search with filtering, a two-column deck editor, Supabase auth, deck persistence, public sharing links, PDF export, and ban-list enforcement for the Samurai Extended format.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind', 'PWA'],
    liveUrl: 'https://samurai-extended.netlify.app',
    githubUrl: 'https://github.com/julian-fernandez/samurai-extended-deckbuilder',
    featured: false,
    accent: '#8B5CF6',
    icon: '🃏',
    image: '/screenshots/l5r-deckbuilder.png',
  },
  {
    id: 'pitchiq',
    title: 'PitchIQ',
    tagline: 'Premier League stats & match explorer',
    description:
      'Live Premier League standings, match explorer with head-to-head history, top scorers, and team/player detail pages — built on the football-data.org API with server-side caching.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'REST API'],
    liveUrl: 'https://pitchiq.netlify.app',
    githubUrl: 'https://github.com/julian-fernandez/pitchiq',
    featured: false,
    accent: '#3B82F6',
    icon: '⚽',
    image: '/screenshots/pitchiq.png',
  },
  {
    id: 'fiestas-pba',
    title: 'Fiestas PBA',
    tagline: 'Event discovery for Buenos Aires Province',
    description:
      'Consumer-facing event listing platform for the Province of Buenos Aires — interactive map, category filtering, search, and event detail pages. 900+ events across the province.',
    tags: ['React', 'Vite', 'Leaflet', 'CSS Modules'],
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
      'Live, interactive reference for CSS layout — every major Flexbox and Grid property rendered in real time with editable controls, visual diagrams, and copy-ready code snippets.',
    tags: ['React', 'Vite', 'CSS', 'Tailwind'],
    liveUrl: 'https://layoutcheatsheet.netlify.app',
    featured: false,
    accent: '#10B981',
    icon: '📐',
    image: '/screenshots/layout-cheatsheet.png',
  },
];
