import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // 'directory' es el modo recomendado para Pages porque separa 
    // automáticamente lo que es servidor de lo que es estático (CSS/JS)
    mode: 'directory', 
  }),
  integrations: [tailwind()],
  // Forzamos a que las rutas de los assets sean relativas a la raíz
  build: {
    assets: '_astro'
  }
});