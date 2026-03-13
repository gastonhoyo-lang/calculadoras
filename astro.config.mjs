import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Mantenemos el modo servidor
  adapter: cloudflare({
    platformProxy: { enabled: true },
    mode: 'advanced', // Modo estándar
  }),
  integrations: [tailwind()],
});