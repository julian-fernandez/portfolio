export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// TODO: Replace placeholder URLs with your Netlify project links
export const projects: Project[] = [
  {
    id: 'l5r-client',
    title: 'L5R Samurai Extended Client',
    description:
      'Full-featured digital client for a complex card game with real-time multiplayer, a custom game engine, and an interrupt/reaction system modelling 200+ card interactions.',
    tags: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'Vite'],
    liveUrl: 'https://l5r-sx-client.netlify.app',
    githubUrl: 'https://github.com/julian-fernandez/l5r-sx-client',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Project Title',
    description:
      'Short description of what this project does and the problem it solves. What makes it interesting technically?',
    tags: ['React', 'TypeScript', 'Next.js'],
    liveUrl: 'https://your-project.netlify.app',
    featured: false,
  },
  {
    id: 'project-3',
    title: 'Project Title',
    description:
      'Short description of what this project does and the problem it solves. What makes it interesting technically?',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    liveUrl: 'https://your-project.netlify.app',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Project Title',
    description:
      'Short description of what this project does and the problem it solves. What makes it interesting technically?',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://your-project.netlify.app',
    featured: false,
  },
];
