import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chieffin.com',
  // Si apuntas el dominio a la raíz del repo, usa '/'
  base: '/', 
  integrations: [
    tailwind(), 
    sitemap()
    
  ],
});