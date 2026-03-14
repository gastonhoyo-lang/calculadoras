globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$ReglaDel72 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora Regla del 72 | Duplicar tu Inversión", "description": "Calculá cuánto tiempo tardará tu dinero en duplicarse con el interés compuesto. La regla del 72 es la herramienta más rápida para inversores." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Regla del 72
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
La forma más sencilla de entender el poder del interés compuesto:
        calculá cuándo se duplicará tu capital.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Tasa de Interés Anual (%)</label> <input type="number" id="rateInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 8"> </div> <div class="relative"> <div class="absolute inset-0 flex items-center" aria-hidden="true"> <div class="w-full border-t border-slate-100"></div> </div> <div class="relative flex justify-center"> <span class="bg-white px-2 text-xs text-slate-300 font-bold uppercase tracking-tighter italic">O también</span> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Años para duplicar</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 9"> </div> </div> <div class="text-center p-10 bg-amber-500 rounded-[2.5rem] shadow-lg shadow-amber-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span id="resultLabel" class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Tiempo estimado</span> <div id="resultOutput" class="text-6xl font-black leading-none">
0
</div> <div id="unitLabel" class="text-xl font-bold mt-2">Años</div> <p id="calcStep" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
Ingresá un valor
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">72</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es la Regla del 72?
</h2> <p>
Es una fórmula rápida y sorprendentemente precisa para estimar el efecto
        del interés compuesto. En lugar de usar logaritmos complejos,
        simplemente dividimos el número 72 por la tasa de interés anual
        esperada.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-amber-400 font-mono text-2xl">
Años = 72 / Tasa de Interés
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">¿Por qué el número 72?</h4> <p class="text-xs leading-relaxed">
El número 72 es un "número mágico" en finanzas porque tiene muchos
            divisores (2, 3, 4, 6, 8, 9, 12) y se aproxima mucho al logaritmo
            natural de 2 multiplicado por 100.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Limitación de la Regla</h4> <p class="text-xs leading-relaxed">
Es muy precisa para tasas entre el 5% y el 20%. Para tasas
            extremadamente altas o bajas, la precisión disminuye, pero sigue
            siendo una excelente referencia rápida.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/regla-del-72.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/regla-del-72.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/regla-del-72.astro";
const $$url = "/finanzas/regla-del-72/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ReglaDel72,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
