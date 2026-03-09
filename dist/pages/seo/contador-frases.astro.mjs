/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$ContadorFrases = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Frases | Analizador de Ritmo y Lectura SEO", "description": "Cont\xE1 el n\xFAmero de frases de tu texto y analiz\xE1 su longitud. Mejor\xE1 la legibilidad de tu contenido para que sea f\xE1cil de entender por humanos y buscadores." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Frases
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Frases cortas para ideas claras. Puntos seguidos para dar respiro."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <textarea id="sentenceInput" class="w-full h-64 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 focus:bg-white outline-none transition-all text-slate-700 resize-none font-medium" placeholder="Pegá tu texto aquí para analizar el ritmo de tus frases..."></textarea> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="p-4 bg-violet-50 rounded-2xl text-center border border-violet-100"> <span class="block text-[10px] font-bold text-violet-500 uppercase">Total Frases</span> <span id="totalSentences" class="text-2xl font-black text-violet-700">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">Promedio Palabras</span> <span id="avgSentenceLength" class="text-2xl font-black text-slate-700">0</span> </div> <div class="p-4 bg-amber-50 rounded-2xl text-center border border-amber-100"> <span class="block text-[10px] font-bold text-amber-500 uppercase">Frases Largas</span> <span id="longSentences" class="text-2xl font-black text-amber-700">0</span> </div> <div class="p-4 bg-emerald-50 rounded-2xl text-center border border-emerald-100"> <span class="block text-[10px] font-bold text-emerald-500 uppercase">Puntos Seguidos</span> <span id="dotCount" class="text-2xl font-black text-emerald-700">0</span> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
El impacto de las frases en el SEO
</h2> <p>
Google utiliza algoritmos de procesamiento de lenguaje natural (NLP)
        para entender tu contenido. Las frases simples, con estructura <strong>Sujeto + Verbo + Predicado</strong>, son más fáciles de indexar y categorizar. Además, mejoran el tiempo
        de permanencia porque el usuario no se pierde en oraciones subordinadas
        infinitas.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Variedad de Ritmo</h4> <p class="text-xs leading-relaxed">
Combinar frases cortas con algunas de longitud media crea un "ritmo"
            musical que mantiene al lector enganchado. Evitá que todas tus
            frases midan lo mismo.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Escritura para Escáneres
</h4> <p class="text-xs leading-relaxed">
Muchos usuarios solo leen la primera frase de cada párrafo.
            Asegurate de que esas sean potentes y claras usando nuestro
            [Analizador de Párrafos](/seo/analizador-parrafos).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-frases.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-frases.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-frases.astro";
const $$url = "/seo/contador-frases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContadorFrases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
