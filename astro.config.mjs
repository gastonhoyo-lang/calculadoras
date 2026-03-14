// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', //
  adapter: cloudflare({
    platformProxy: { enabled: true },
    // Esto asegura que Astro no se pierda buscando archivos físicos
    runtime: { mode: 'complete', type: 'cloudflare-worker' } 
  }),
  // Evita que Astro busque /v/slug/index.html y falle
  build: {
    format: 'file' 
  },
  trailingSlash: 'ignore' //
});