/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$ContadorPalabras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Palabras y Caracteres SEO Online", "description": "Cont\xE1 palabras, caracteres y p\xE1rrafos en tiempo real. Analiz\xE1 la longitud de tus textos para cumplir con los est\xE1ndares de Google." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Palabras SEO
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Analizá tu contenido en tiempo real. Ideal para Meta Títulos,
        Descripciones y artículos de blog.
</p> </div> <div class="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center"> <div class="p-4 bg-blue-50 rounded-2xl border border-blue-100"> <span class="block text-[10px] font-bold uppercase text-blue-400">Palabras</span> <div id="countPalabras" class="text-3xl font-black text-blue-700">
0
</div> </div> <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100"> <span class="block text-[10px] font-bold uppercase text-emerald-400">Caracteres</span> <div id="countCaracteres" class="text-3xl font-black text-emerald-700">
0
</div> </div> <div class="p-4 bg-amber-50 rounded-2xl border border-amber-100"> <span class="block text-[10px] font-bold uppercase text-amber-400">Párrafos</span> <div id="countParrafos" class="text-3xl font-black text-amber-700">
0
</div> </div> <div class="p-4 bg-purple-50 rounded-2xl border border-purple-100"> <span class="block text-[10px] font-bold uppercase text-purple-400">Lectura</span> <div id="timeLectura" class="text-xl font-black text-purple-700">
0 min
</div> </div> </div> <textarea id="inputTexto" class="w-full h-64 p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all resize-none text-slate-700 leading-relaxed" placeholder="Pegá o escribí tu texto aquí..."></textarea> <button id="btnLimpiar" class="mt-4 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-2"> <span>🗑️</span> Limpiar Texto
</button> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-6 italic">
Longitudes Recomendadas
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"> <h3 class="text-blue-600 font-bold mb-2 uppercase text-xs tracking-widest">
Meta Título
</h3> <p class="text-sm">
Mantenelo entre <strong>50 y 60 caracteres</strong> para que no aparezca
            cortado en los resultados de Google.
</p> </div> <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"> <h3 class="text-emerald-600 font-bold mb-2 uppercase text-xs tracking-widest">
Meta Descripción
</h3> <p class="text-sm">
Lo ideal es entre <strong>120 y 155 caracteres</strong>. Debe ser
            persuasiva para mejorar el CTR.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro";
const $$url = "/seo/contador-palabras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContadorPalabras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
