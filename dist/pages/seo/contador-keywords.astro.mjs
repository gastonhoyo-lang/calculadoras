/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$ContadorKeywords = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Palabras Clave | Analizador de Densidad SEO", "description": "Analiz\xE1 la frecuencia de palabras en tu texto. Optimiz\xE1 la densidad de keywords y evit\xE1 penalizaciones de Google por sobreoptimizaci\xF3n." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Palabras Clave
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Pegá tu texto para descubrir cuáles son los términos que más se repiten
        y optimizá tu relevancia.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <textarea id="textInput" class="w-full h-64 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 focus:bg-white outline-none transition-all text-slate-700 resize-none" placeholder="Pegá tu artículo o descripción aquí..."></textarea> <div id="resultsWrapper" class="hidden animate-fade-in"> <h3 class="text-xs font-bold uppercase text-slate-400 mb-4 ml-1">
Top 10 Palabras más frecuentes
</h3> <div id="keywordList" class="grid grid-cols-1 sm:grid-cols-2 gap-3"></div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es la Densidad de Palabras Clave?
</h2> <p>
Es la relación porcentual entre la frecuencia de una palabra específica
        y el total de palabras de un texto. Mantener una densidad equilibrada
        ayuda a los buscadores a entender tu temática sin parecer contenido
        artificial.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Evitá el Keyword Stuffing
</h4> <p class="text-xs leading-relaxed">
Si una palabra clave supera el 3% o 4% de densidad, Google podría
            considerar que estás intentando manipular el algoritmo. Usá
            sinónimos para mantener la riqueza semántica.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Palabras de Parada (Stopwords)
</h4> <p class="text-xs leading-relaxed">
Nuestro contador filtra automáticamente artículos y preposiciones
            (el, la, de, y) para que puedas enfocarte en las palabras con carga
            semántica real.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro";
const $$url = "/seo/contador-keywords";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContadorKeywords,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
