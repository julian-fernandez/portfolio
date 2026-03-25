export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'CSS / Sass', 'Node.js'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'MUI'],
  },
  {
    label: 'State & Data',
    items: ['Zustand', 'Redux Toolkit', 'React Query'],
  },
  {
    label: 'Testing',
    items: ['Jest', 'React Testing Library', 'Playwright'],
  },
  {
    label: 'Tooling & Other',
    items: ['Git', 'Vite', 'CI/CD', 'Jira', 'GeoJSON', 'D3.js'],
  },
];
