globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$AnalizadorRepeticion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Analizador de Repetición de Palabras | Mejora tu Redacción SEO", "description": "Detectá palabras repetidas en tu texto y mejorá la fluidez de tu contenido. Herramienta gratuita para escritores y expertos en SEO." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Analizador de Repetición
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Evitá la redundancia. Identificá qué palabras estás abusando y encontrá
        el equilibrio perfecto.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <textarea id="textInput" class="w-full h-64 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 focus:bg-white outline-none transition-all text-slate-700 resize-none" placeholder="Pegá tu texto aquí para analizar la variedad de vocabulario..."></textarea> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="p-4 bg-lime-50 rounded-2xl text-center border border-lime-100"> <span class="block text-[10px] font-bold text-lime-600 uppercase">Diversidad Léxica</span> <span id="diversityScore" class="text-2xl font-black text-lime-700">0%</span> </div> <div class="md:col-span-2 p-4 bg-slate-50 rounded-2xl flex items-center px-6 border border-slate-100"> <p id="adviceText" class="text-xs text-slate-500 italic">
Analizando la riqueza de tu contenido...
</p> </div> </div> <div id="repeatList" class="flex flex-wrap gap-2 mt-4"></div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Por qué evitar la repetición excesiva?
</h2> <p>
La repetición innecesaria de términos (pleonasmos o muletillas) cansa al
        lector y reduce el tiempo de permanencia en página. Google valora la <strong>riqueza semántica</strong>; un texto con sinónimos y variaciones demuestra autoridad sobre el
        tema.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Semántica Latente (LSI)</h4> <p class="text-xs leading-relaxed">
En lugar de repetir "zapatillas de correr", usá "calzado deportivo",
            "tenis de running" o "equipo para corredores". Esto ayuda al
            [Ranking SEO](/seo/tiempo-ranking-seo) para múltiples búsquedas.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Legibilidad y UX</h4> <p class="text-xs leading-relaxed">
Un texto variado es más fácil de procesar. Combiná esto con una
            buena estructura de [Encabezados H1-H3](/seo/contador-encabezados)
            para que la lectura fluya naturalmente.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/analizador-repeticion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/analizador-repeticion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/analizador-repeticion.astro";
const $$url = "/seo/analizador-repeticion/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AnalizadorRepeticion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
