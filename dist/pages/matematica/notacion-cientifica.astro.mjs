/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$NotacionCientifica = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Notaci\xF3n Cient\xEDfica | Convertir paso a paso", "description": "Convert\xED n\xFAmeros est\xE1ndar a notaci\xF3n cient\xEDfica y viceversa. Aprend\xE9 a usar potencias de 10 de forma f\xE1cil." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Notación Científica
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Pasá de números decimales a formato científico <span class="font-mono font-bold">a × 10<sup>n</sup></span> al instante.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-xl mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-1 ml-1 text-center">Número Estándar</label> <input type="text" id="estandar" class="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-center text-xl font-mono" placeholder="Ej: 0.00045 o 125000"> </div> <div class="flex justify-center py-2"> <div class="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path> </svg> </div> </div> <div class="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 text-center"> <label class="block text-xs font-bold uppercase text-indigo-400 mb-2">Notación Científica</label> <div id="resultado" class="text-2xl md:text-3xl font-black text-indigo-900 font-mono tracking-tighter">
-
</div> </div> </div> <p class="text-[10px] text-slate-400 mt-6 text-center italic uppercase tracking-widest">
Escribí para convertir automáticamente
</p> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-6 italic text-center">
¿Cómo funciona la Notación Científica?
</h2>
[Image of scientific notation parts coefficient and exponent]
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"> <div class="p-6 rounded-2xl bg-white border border-slate-200"> <h3 class="text-indigo-600 font-bold mb-3 flex items-center gap-2"> <span>🚀</span> Números Grandes
</h3> <p class="text-sm italic">
Si movés la coma hacia la <strong>izquierda</strong>, el exponente
            es <strong>positivo</strong>.
</p> <div class="mt-4 p-3 bg-slate-50 rounded-lg font-mono text-xs">
150.000 → 1,5 × 10⁵
</div> </div> <div class="p-6 rounded-2xl bg-white border border-slate-200"> <h3 class="text-indigo-600 font-bold mb-3 flex items-center gap-2"> <span>🔬</span> Números Pequeños
</h3> <p class="text-sm italic">
Si movés la coma hacia la <strong>derecha</strong>, el exponente es <strong>negativo</strong>.
</p> <div class="mt-4 p-3 bg-slate-50 rounded-lg font-mono text-xs">
0,00045 → 4,5 × 10⁻⁴
</div> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro";
const $$url = "/matematica/notacion-cientifica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NotacionCientifica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
