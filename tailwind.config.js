/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['VT323', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        red: 'var(--red)',
        green: 'var(--green)',
        yellow: 'var(--yellow)',
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        aqua: 'var(--aqua)',
        orange: 'var(--orange)',
      },
    },
  },
  plugins: [],
} 