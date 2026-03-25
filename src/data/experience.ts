export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'globant',
    company: 'Globant',
    role: 'Web Developer',
    period: '2023 — Present',
    location: 'Remote',
    bullets: [
      'Working on high-complexity React and Angular enterprise applications for US-based clients in fast-paced, production environments.',
      'Guided development of critical frontend features used by 500k+ monthly active users.',
      'Designed and implemented reusable component libraries now adopted across multiple teams.',
      'Identified and resolved performance bottlenecks, cutting API-driven UI latency by up to 40%.',
      'Expanded unit and e2e test coverage, meaningfully reducing regression incidents in production.',
      'Conducting in-depth PR reviews and contributing architectural suggestions to improve consistency and long-term maintainability.',
    ],
  },
  {
    id: 'beereal',
    company: 'BeeReal IT',
    role: 'Web Developer',
    period: '2017 — 2023',
    location: 'Buenos Aires, Argentina',
    bullets: [
      'Delivered full-stack frontend solutions across media streaming, CMS, ticketing, and geospatial applications.',
      'Maintained high-traffic live streaming platforms supporting thousands of concurrent users.',
      'Built modular file-upload platforms that significantly reduced client content deployment time.',
      'Implemented interactive geospatial visualizations using GeoJSON and D3.js, enabling real-time filtering across 10k+ data points.',
      'Standardized frontend architecture across Angular and React projects, cutting onboarding time for new developers.',
      'Led cross-functional teams of 3–6 developers, coordinating delivery timelines, technical decisions, and stakeholder communication.',
    ],
  },
  {
    id: 'education',
    company: 'UNICEN',
    role: 'UX/UI Design Diploma',
    period: '2020 — 2021',
    location: 'Tandil, Argentina',
    bullets: [
      'Universidad Nacional del Centro de la Provincia de Buenos Aires.',
    ],
  },
];
