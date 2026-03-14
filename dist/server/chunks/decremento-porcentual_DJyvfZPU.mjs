globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$DecrementoPorcentual = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Decremento Porcentual | Medir Caídas y Descuentos", "description": "Calculá la disminución porcentual entre dos valores. Herramienta ideal para medir pérdidas de tráfico SEO o rebajas de precios." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Decremento Porcentual
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
¿Cuánto ha bajado el valor? Medí la reducción exacta entre un punto
        inicial y uno final.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Original (V1)</label> <input type="number" id="val1" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 200"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Reducido (V2)</label> <input type="number" id="val2" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 150"> </div> </div> <div id="resultCard" class="text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 relative overflow-hidden"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-rose-600 mb-2 tracking-widest">Reducción Final</span> <div id="resultOutput" class="text-6xl font-black text-rose-700 leading-none">
0%
</div> <p id="calcStep" class="text-[10px] text-rose-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full">
Introduce datos
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-rose-100/30 select-none">↓</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo calcular la disminución porcentual?
</h2> <p>
El decremento porcentual mide cuánto se ha reducido un valor respecto al
        original. La fórmula es similar a la del incremento, pero el resultado
        nos indica el porcentaje de "pérdida":
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-rose-400 font-mono text-2xl">
% Decremento = ((V1 - V2) / V1) * 100
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Análisis de Descuentos</h4> <p class="text-xs leading-relaxed">
Si una herramienta de suscripción bajó de $50 a $35, podés usar esta
            calculadora para confirmar que el descuento aplicado fue del 30%.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Pérdida de Posiciones SEO
</h4> <p class="text-xs leading-relaxed">
Ideal para medir caídas en el [CTR](/seo/calculadora-ctr) o
            impresiones. Si tus impresiones bajaron de 10k a 8k, el decremento
            fue del 20%.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/decremento-porcentual.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/decremento-porcentual.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/decremento-porcentual.astro";
const $$url = "/matematica/decremento-porcentual/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DecrementoPorcentual,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
