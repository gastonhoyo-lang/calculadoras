import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory', // Este modo es el que mejor se lleva con los archivos estáticos
  }),
  integrations: [tailwind()],
  base: '/',
});