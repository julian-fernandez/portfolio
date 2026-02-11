export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

// TODO: Fill in your real experience
export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Squarespace',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    location: 'Remote',
    bullets: [
      'Led frontend development for monetisation platform features serving millions of users.',
      'Drove adoption of TypeScript-first patterns across the team, reducing runtime errors by 40%.',
      'Championed accessibility initiatives, bringing key flows to WCAG 2.1 AA compliance.',
    ],
  },
  {
    id: 'exp-2',
    company: 'Previous Company',
    role: 'Frontend Engineer',
    period: '2019 — 2022',
    location: 'Buenos Aires',
    bullets: [
      'Built and maintained component libraries used across multiple product teams.',
      'Migrated a legacy AngularJS application to Angular 14, improving performance and maintainability.',
      'Mentored junior engineers and conducted technical interviews.',
    ],
  },
  {
    id: 'exp-3',
    company: 'Previous Company',
    role: 'Frontend Developer',
    period: '2017 — 2019',
    location: 'Buenos Aires',
    bullets: [
      'Delivered e-commerce frontends with a focus on performance and conversion.',
      'Introduced automated testing practices (Jest + Cypress) to the team workflow.',
    ],
  },
];
