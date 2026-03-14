import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    // Esto es vital para que Astro gestione las rutas dinámicas en Workers
    runtime: { mode: 'complete', type: 'cloudflare-worker' }
  }),
  // Forzamos a que no añada barras extras que rompan el match del KV
  trailingSlash: 'ignore' 
});