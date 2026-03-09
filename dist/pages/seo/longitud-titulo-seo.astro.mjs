/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$LongitudTituloSeo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Longitud de T\xEDtulo SEO | Evit\xE1 el recorte en Google", "description": "Verific\xE1 si tu Meta Title tiene la extensi\xF3n correcta. Calcul\xE1 la longitud ideal en caracteres para maximizar tu visibilidad en buscadores." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Longitud de Título SEO
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Tu primera impresión en los buscadores debe ser completa."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Tu Meta Title</label> <input type="text" id="titleInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 focus:bg-white outline-none transition-all font-bold text-slate-800" placeholder="Ej: Las 10 Mejores Guías de SEO para Principiantes en 2026"> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="p-4 bg-cyan-50 rounded-2xl text-center border border-cyan-100"> <span class="block text-[10px] font-bold text-cyan-500 uppercase">Caracteres</span> <span id="charCount" class="text-3xl font-black text-cyan-700">0</span> </div> <div class="md:col-span-2 p-4 bg-slate-50 rounded-2xl flex items-center px-6"> <div class="w-full"> <div class="flex justify-between mb-1"> <span id="statusText" class="text-[10px] font-bold uppercase text-slate-400">Esperando texto...</span> <span class="text-[10px] font-bold text-slate-400">Máx 60</span> </div> <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden"> <div id="progressBar" class="h-full bg-cyan-500 transition-all" style="width: 0%"></div> </div> </div> </div> </div> <div class="mt-8 p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-300"> <span class="text-[10px] font-bold uppercase text-slate-400 block mb-4">Vista previa en Google (Escritorio)</span> <div class="max-w-[600px] bg-white p-4 rounded-lg shadow-sm border border-slate-200"> <div id="googleTitle" class="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer truncate mb-1">
Escribí un título arriba...
</div> <div class="text-[#006621] text-sm flex items-center mb-1">
https://tusitio.com › categoria <span class="ml-1 text-[10px]">▼</span> </div> <div class="text-[#545454] text-sm leading-snug line-clamp-2">
Esta es una simulación de cómo se verá tu descripción una vez que
              la optimices con nuestra herramienta de Meta Description...
</div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Por qué importa la longitud del título?
</h2> <p>
El título es el factor de SEO On-Page más importante después del
        contenido. Si es muy corto, perdés la oportunidad de incluir palabras
        clave. Si es muy largo, Google lo corta, eliminando contexto vital y
        reduciendo tu [CTR](/seo/calculadora-ctr).
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Píxeles vs Caracteres</h4> <p class="text-xs leading-relaxed">
Aunque hablamos de caracteres, Google mide por píxeles (aprox.
            600px). Por eso, un título con muchas mayúsculas puede cortarse
            antes que uno en minúsculas. Usá el [Analizador de Títulos
            SEO](/seo/analizador-titulos) para equilibrar estética y técnica.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Impacto en el Ranking</h4> <p class="text-xs leading-relaxed">
Poner la palabra clave principal al inicio del título tiene un mayor
            peso algorítmico. Una vez optimizado el título, asegurate de que tu
            [Slug de URL](/seo/generador-slugs) sea coherente.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/longitud-titulo-seo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/longitud-titulo-seo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/seo/longitud-titulo-seo.astro";
const $$url = "/seo/longitud-titulo-seo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LongitudTituloSeo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
