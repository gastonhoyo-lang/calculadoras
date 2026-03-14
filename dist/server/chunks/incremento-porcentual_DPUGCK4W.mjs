globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$IncrementoPorcentual = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Incremento Porcentual | Medir Crecimiento Online", "description": "Calculá la diferencia porcentual entre dos valores. Ideal para métricas SEO, finanzas y estadísticas de crecimiento." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Incremento Porcentual
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Medí la variación entre un valor inicial y uno final de forma precisa.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Inicial (V1)</label> <input type="number" id="val1" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 100"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Final (V2)</label> <input type="number" id="val2" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 150"> </div> </div> <div id="resultCard" class="text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-colors duration-500 relative overflow-hidden"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest" id="resultLabel">Variación</span> <div id="resultOutput" class="text-6xl font-black text-slate-700 leading-none">
0%
</div> <p id="calcStep" class="text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full">
Introduce datos
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo se calcula el incremento?
</h2> <p>
Para hallar la variación porcentual, restamos el valor inicial al valor
        final, dividimos el resultado por el valor inicial y multiplicamos por
        100.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-orange-400 font-mono text-2xl">
% Variación = ((V2 - V1) / V1) * 100
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Interpretación en SEO</h4> <p class="text-xs leading-relaxed">
Si pasaste de 1.000 clics a 1.250 clics mensuales, has tenido un <strong>incremento del 25%</strong>. Esta métrica es vital para tus informes de rendimiento.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Variación Negativa</h4> <p class="text-xs leading-relaxed">
Si el resultado es negativo, significa que hubo una disminución o
            pérdida. Por ejemplo, una caída en la [Frecuencia de
            Palabras](/seo/frecuencia-palabras) clave en el Top 10.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/incremento-porcentual.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/incremento-porcentual.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/incremento-porcentual.astro";
const $$url = "/matematica/incremento-porcentual/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$IncrementoPorcentual,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
