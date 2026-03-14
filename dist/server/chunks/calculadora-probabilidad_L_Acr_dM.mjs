globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$CalculadoraProbabilidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Probabilidad Simple | Calcular Posibilidades Online", "description": "Calculá la probabilidad de que ocurra un evento. Herramienta fácil para determinar casos favorables sobre casos posibles." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Probabilidad
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Determiná la posibilidad de que un evento ocurra basándote en la Ley de
        Laplace.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Casos Favorables</label> <input type="number" id="favInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 1"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Total de Casos Posibles</label> <input type="number" id="totalInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 6"> </div> </div> <div class="text-center p-10 bg-indigo-600 rounded-[2.5rem] shadow-lg shadow-indigo-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Probabilidad</span> <div id="resultPerc" class="text-7xl font-black leading-none">
0%
</div> <div id="resultDec" class="text-xl font-medium mt-2 opacity-90">
Decimal: 0.00
</div> <p id="calcStep" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
Introduce los valores
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">P</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo se calcula la probabilidad?
</h2> <p>
La probabilidad simple se calcula mediante la <strong>Regla de Laplace</strong>. Esta fórmula establece que la probabilidad de un suceso es el
        cociente entre el número de resultados favorables y el número total de
        resultados posibles, siempre que todos sean igualmente probables.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-indigo-400 font-mono text-2xl">
P(A) = Casos Favorables / Casos Totales
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Ejemplo del Dado</h4> <p class="text-xs leading-relaxed">
Si querés saber la probabilidad de sacar un "5" en un dado de 6
            caras, tenés <strong>1 caso favorable</strong> y <strong>6 casos totales</strong>. La probabilidad es 1/6 ≈ 16.67%.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Uso en Programación</h4> <p class="text-xs leading-relaxed">
En desarrollo de videojuegos, esto define el "RNG" (generador de
            números aleatorios). Si un enemigo tiene un 5% de soltar un ítem,
            significa que hay 5 casos favorables en 100 intentos.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-probabilidad.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-probabilidad.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-probabilidad.astro";
const $$url = "/matematica/calculadora-probabilidad/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraProbabilidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
