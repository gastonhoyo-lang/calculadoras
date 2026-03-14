import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Eliminamos mode: 'directory' para que Astro gestione 
    // correctamente las rutas dinámicas en el Edge de Cloudflare.
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
  base: '/',
});