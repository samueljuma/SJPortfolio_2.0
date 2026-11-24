// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://samueljuma.com',

  adapter: node({
    mode: 'standalone',
  }),

  // The old Vue site had one route per section; keep those links working.
  redirects: {
    '/about': '/#about',
    '/service': '/#services',
    '/work': '/#work',
    '/contact': '/#contact',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({ filter: (page) => !page.endsWith('/thanks/') })],
});
