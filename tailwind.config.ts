import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg:       'var(--bg)',
        surface:  'var(--surface)',
        border:   'var(--border)',
        muted:    'var(--muted)',
        text:     'var(--text)',
        'text-2': 'var(--text-2)',
        accent:   'var(--accent)',
        'accent-2': 'var(--accent-2)',
      },
    },
  },
  plugins: [],
};

export default config;
