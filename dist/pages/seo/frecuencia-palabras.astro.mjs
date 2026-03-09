/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$FrecuenciaPalabras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Frecuencia de Palabras | An\xE1lisis Sem\xE1ntico", "description": "Cont\xE1 cu\xE1ntas veces aparece cada palabra en tu texto. Identific\xE1 patrones de escritura y optimiz\xE1 la relevancia sem\xE1ntica de tu contenido." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Frecuencia
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Analizá la estructura de tu mensaje contando la repetición exacta de
        cada término.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <textarea id="freqInput" class="w-full h-64 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all text-slate-700 resize-none" placeholder="Pegá tu texto para analizar la frecuencia..."></textarea> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100"> <h3 class="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">
Estadísticas Generales
</h3> <div class="space-y-3"> <div class="flex justify-between border-b border-slate-200 pb-2"> <span class="text-sm text-slate-500">Palabras Totales</span> <span id="totalWords" class="font-bold text-slate-800">0</span> </div> <div class="flex justify-between border-b border-slate-200 pb-2"> <span class="text-sm text-slate-500">Palabras Únicas</span> <span id="uniqueWords" class="font-bold text-slate-800">0</span> </div> </div> </div> <div class="bg-indigo-50 p-6 rounded-3xl border border-indigo-100"> <h3 class="text-xs font-bold uppercase text-indigo-400 mb-4 tracking-widest">
Frecuencia por Término
</h3> <div id="freqResults" class="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar"> <p class="text-xs text-indigo-300 italic">
Esperando contenido...
</p> </div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Frecuencia vs. Relevancia
</h2> <p>
No todas las palabras frecuentes son importantes. En el análisis de
        datos, separamos las palabras funcionales (artículos, preposiciones) de
        las palabras de contenido (sustantivos, verbos). Una alta frecuencia en
        tus conceptos clave confirma que Google entenderá de qué trata tu
        página.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Análisis de la Competencia
</h4> <p class="text-xs leading-relaxed">
Podés pegar el texto de un competidor que esté en el Top 1 de Google
            para ver qué términos usa con más frecuencia. Luego, usá el
            [Contador de Keywords](/seo/contador-keywords) para replicar esa
            estrategia.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Limpieza Semántica</h4> <p class="text-xs leading-relaxed">
Si detectás palabras frecuentes que no aportan valor, usá el
            [Analizador de Repetición](/seo/analizador-repeticion) para
            reemplazarlas por sinónimos y mejorar la calidad de tu redacción.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/frecuencia-palabras.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/frecuencia-palabras.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/seo/frecuencia-palabras.astro";
const $$url = "/seo/frecuencia-palabras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FrecuenciaPalabras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
