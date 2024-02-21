const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        'hacl': {
          'dark-blue': '#014158',
          'med-blue': '#039CD5',
          'blue': '#0183B3',
          'sky-blue': '#E1F9FF',
          'trans-blue': '#EEFCFF',
          'trans-blue1': '#EBF9F0',
          'cyan': '#00C4D1',
          'green': '#34C565',
          'highlight-green': '#3ED973',
          'yellow': '#F6C94F',   
          'yellow2': '#F6C94F',          
        },        
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography','flowbite/plugin')],
  darkMode: 'class',
};
