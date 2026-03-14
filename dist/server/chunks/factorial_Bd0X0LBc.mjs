globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Factorial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Factorial Online (n!) | Paso a Paso", "description": "Calculá el factorial de cualquier número entero positivo. Incluye la fórmula explicada y el procedimiento detallado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Factorial
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
El factorial de un número es el producto de todos los números enteros
        positivos desde 1 hasta n.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-md mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-1 ml-1 text-center">Ingresá un número (n)</label> <input type="number" id="numN" class="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all text-center text-2xl font-black" placeholder="Ej: 5" min="0" max="170"> </div> <button id="btnFact" class="w-full py-4 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 hover:shadow-lg transition-all active:scale-95 uppercase tracking-widest">
Calcular Factorial
</button> <div id="resBox" class="hidden animate-in fade-in zoom-in duration-300"> <div class="text-center"> <span class="text-xs font-bold text-rose-400 uppercase tracking-widest">Resultado (n!)</span> <div id="resTotal" class="text-4xl font-black text-rose-700 mt-1 break-all"></div> </div> <div class="mt-6 p-4 bg-rose-50 rounded-xl border border-rose-100"> <span class="block text-[10px] font-bold text-rose-400 uppercase mb-2 text-center">Procedimiento</span> <div id="resPasos" class="text-xs font-mono text-rose-800 text-center leading-relaxed italic"></div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-6 italic text-center">
¿Cómo se calcula el factorial?
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"> <div class="p-6 rounded-2xl bg-white border border-slate-200"> <h3 class="text-rose-600 font-bold mb-3 flex items-center gap-2"> <span>💡</span> Definición
</h3> <p class="text-sm">
Se representa con un signo de exclamación <strong>!</strong> detrás del
            número. Es la base para cálculos de <strong>permutaciones</strong> y <strong>combinaciones</strong>.
</p> </div> <div class="p-6 rounded-2xl bg-white border border-slate-200"> <h3 class="text-rose-600 font-bold mb-3 flex items-center gap-2"> <span>⚠️</span> El caso del 0!
</h3> <p class="text-sm">
Por definición matemática y para que las fórmulas de probabilidad
            funcionen, el factorial de cero es siempre <strong>1</strong> (0! = 1).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/factorial.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/factorial.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/factorial.astro";
const $$url = "/matematica/factorial/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Factorial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
