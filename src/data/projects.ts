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
    punchline: 'Multiplayer CCG client — server-authoritative state, deterministic rules engine with interrupt / nested resolution support',
    description:
      'Web client for a complex CCG with real-time multiplayer. The core challenge was implementing a rules engine that handles chained card effects, interrupt/reaction priority windows, and hidden information — while keeping both clients perfectly in sync through a server-authoritative state model over WebSockets.',
    highlights: [
      'Designed for information asymmetry: server filters state per-player before broadcast — opponent hand is opaque, deck order unknown; no client can observe state it shouldn\'t have access to',
      'Rules engine handles 8 distinct turn phases; interrupts can fire mid-resolution of another effect, requiring a reentrant timing stack — the same problem that trips up most card game implementations',
      'Card lifecycle is a 6-state FSM (bowed, attached, in-battle, face-down, leaving play, etc.) — every transition is validated server-side so illegal game states never reach a client',
      'Client event loop tolerates out-of-order WebSocket messages and mid-animation state updates — all driven from a single immutable event stream with no local reconciliation hacks',
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
    id: 'applyiq',
    title: 'ApplyIQ',
    tagline: 'AI-powered CV analyser and cover letter generator',
    description:
      'Next.js fullstack app that scores a CV against a job description, identifies ATS keyword gaps, suggests honest wording upgrades (never fabricated), and streams a cover letter via Groq. Parses uploaded PDF/DOCX files server-side; architecture is wired for Supabase auth and per-user history.',
    tags: ['Next.js', 'TypeScript', 'Groq AI', 'Tailwind', 'Supabase'],
    liveUrl: 'https://applyiq-app.netlify.app',
    githubUrl: 'https://github.com/julian-fernandez/cover-letter-generator',
    featured: false,
    accent: '#C2622B',
    icon: '📄',
    image: '/screenshots/applyiq.png',
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
