import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gastonhoyo-lang.github.io',
  base: '/Calculadoras', // <-- QUE COINCIDA CON EL NOMBRE DEL REPO NUEVO
  integrations: [tailwind()],
});