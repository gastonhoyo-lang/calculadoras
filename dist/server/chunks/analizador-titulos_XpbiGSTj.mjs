globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$AnalizadorTitulos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Analizador de Títulos SEO | Optimizá tu Click-Through Rate", "description": "Analizá tus títulos para Google. Evaluá la longitud, el sentimiento y la efectividad de tus encabezados para atraer más clics." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Analizador de Títulos SEO
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Escribí tu título y descubrí qué tan efectivo es para posicionar y
        atraer visitas.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <input type="text" id="headlineInput" class="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 focus:bg-white outline-none transition-all text-xl font-bold text-slate-800" placeholder="Ej: 7 Herramientas Increíbles para mejorar tu SEO hoy mismo"> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="p-4 bg-slate-50 rounded-2xl text-center"> <span class="block text-[10px] font-bold text-slate-400 uppercase">Caracteres</span> <span id="charCount" class="text-2xl font-black text-slate-700">0</span> </div> <div class="p-4 bg-violet-50 rounded-2xl text-center border border-violet-100"> <span class="block text-[10px] font-bold text-violet-400 uppercase">Score Total</span> <span id="scoreDisplay" class="text-2xl font-black text-violet-700">0/100</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center"> <span class="block text-[10px] font-bold text-slate-400 uppercase">Legibilidad</span> <span id="readingLevel" class="text-sm font-bold text-slate-700 mt-1 block">Esperando...</span> </div> </div> <div id="feedbackList" class="space-y-2 mt-4 text-sm font-medium"></div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué hace que un título sea perfecto?
</h2> <p>
Un gran título debe equilibrar las necesidades de los algoritmos (SEO)
        con los deseos humanos (Psicología). El objetivo es aparecer en Google,
        pero sobre todo, convencer al usuario de que tu enlace es el más
        valioso.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Longitud Visual</h4> <p class="text-xs leading-relaxed">
Google suele cortar los títulos después de los 60 caracteres.
            Mantené tu palabra clave al principio para que siempre sea visible,
            incluso en móviles.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Psicología del Clic</h4> <p class="text-xs leading-relaxed">
El uso de números (listas) y palabras emocionales como "Definitivo",
            "Gratis" o "Secreto" aumentan el [CTR](/seo/calculadora-ctr) de
            forma comprobada.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/analizador-titulos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/analizador-titulos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/analizador-titulos.astro";
const $$url = "/seo/analizador-titulos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AnalizadorTitulos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
