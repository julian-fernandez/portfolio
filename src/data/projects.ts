export interface Project {
  id: string;
  title: string;
  tagline: string;
  /** Hard one-liner shown at the top of the flagship card — no fluff, just signal */
  punchline?: string;
  description: string;
  /** Bullet points surfacing technical depth — used on the featured card */
  highlights?: string[];
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
    tagline: 'Real-time multiplayer card game client',
    punchline: 'Multiplayer CCG — server-authoritative state, deterministic rules engine, real-time sync over WebSockets',
    description:
      'Web client for a complex CCG with real-time multiplayer. The core challenge was implementing a rules engine that handles chained card effects, interrupt/reaction priority windows, and hidden information — while keeping both clients perfectly in sync through a server-authoritative state model over WebSockets.',
    highlights: [
      'Server-authoritative game state over WebSockets (Socket.io) — clients receive only the state they\'re allowed to see (opponent hand is opaque, deck order unknown)',
      'Rules engine models 8 turn phases, each with distinct legal actions; interrupt/reaction system can trigger mid-resolution of another effect, requiring a nested timing stack',
      'Finite-state machine for card lifecycle: bowed/unbowed, face-up/down, attached, in battle — all transitions validated server-side before being broadcast',
      'UI handles async state updates without race conditions — phase transitions, card animations, and context menus all driven by a single synchronized event stream',
    ],
    tags: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'Node.js', 'Vite'],
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
    tagline: 'Card search, deck editor & persistence for 6,000+ cards',
    description:
      'Built a custom XML parsing pipeline to extract structured keyword and effect data from inconsistently formatted card text across multiple card sets. The deck editor enforces format-specific rules (dynasty/fate split, honor requirements, uniqueness, ban lists) and persists decks to Supabase with tokenized public sharing.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind', 'PWA', 'Cloudflare R2'],
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
      'Next.js app with server-side API routes that proxy and cache football-data.org responses to stay within free-tier rate limits. Includes standings, head-to-head match history, top scorers, and team/player detail pages with Next.js Image optimization for team crests.',
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
      'Interactive map-based event listing platform for the Province of Buenos Aires — 900+ events rendered with Leaflet, with real-time filtering by location radius, city, date range, and category.',
    tags: ['React', 'Vite', 'Leaflet', 'GeoJSON'],
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
      'Every major Flexbox and Grid property rendered live with editable controls, visual diagrams, and copy-ready snippets. Built as a daily-use developer tool — no framework, just CSS doing the work.',
    tags: ['React', 'Vite', 'CSS'],
    liveUrl: 'https://layoutcheatsheet.netlify.app',
    featured: false,
    accent: '#10B981',
    icon: '📐',
    image: '/screenshots/layout-cheatsheet.png',
  },
];
