import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.galvix.com',
  integrations: [tailwind(), react(), sitemap({
    filter: (page) => page !== 'https://www.galvix.com/sandbox/'
  })],
  redirects: {
    "/resources/[slug]": "/article/[slug]",
    "/free-nexus-study": "/request-demo"
  }
});