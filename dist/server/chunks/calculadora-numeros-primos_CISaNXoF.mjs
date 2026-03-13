globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$CalculadoraNumerosPrimos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Números Primos Online | Test de Primalidad", "description": "Verificá si un número es primo o compuesto al instante. Incluye buscador del siguiente número primo y explicación detallada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Números Primos
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá cualquier número entero para comprobar si es primo o compuesto.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Número a verificar</label> <input type="number" id="primeInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 13"> </div> <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Próximo número primo</span> <span id="nextPrime" class="text-lg font-bold text-emerald-600">-</span> </div> </div> <div id="statusCard" class="text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-colors duration-500 relative overflow-hidden"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest">Resultado</span> <div id="primeResult" class="text-4xl font-black text-slate-300 uppercase">
Esperando...
</div> <p id="primeDesc" class="text-xs text-slate-500 mt-4 leading-relaxed px-4">
Ingresá un número mayor a 1 para comenzar el análisis.
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es un número primo?
</h2> <p>
Un número primo es un número natural mayor que 1 que tiene únicamente
        dos divisores positivos distintos: él mismo y el 1. Los números que
        tienen más de dos divisores se llaman números compuestos.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">¿El número 1 es primo?</h4> <p class="text-xs leading-relaxed">
No. Por definición, los números primos deben tener exactamente <strong>dos</strong> divisores. El 1 solo tiene uno, por lo que no se considera ni primo
            ni compuesto.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">El único primo par</h4> <p class="text-xs leading-relaxed">
El número <strong>2</strong> es el único número primo par. Todos los demás
            números pares pueden dividirse por 2, lo que los convierte en compuestos.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-numeros-primos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-numeros-primos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-numeros-primos.astro";
const $$url = "/matematica/calculadora-numeros-primos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraNumerosPrimos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
