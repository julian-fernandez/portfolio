export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS / Sass'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Angular', 'Node.js'],
  },
  {
    label: 'Styling',
    items: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Design Systems'],
  },
  {
    label: 'State & Data',
    items: ['Zustand', 'Redux Toolkit', 'React Query', 'GraphQL'],
  },
  {
    label: 'Testing',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'],
  },
  {
    label: 'Tooling',
    items: ['Vite', 'Webpack', 'Git', 'CI/CD', 'Docker', 'Nx'],
  },
];
