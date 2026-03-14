globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$CalculadoraDivisores = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Divisores de un Número | Lista Completa", "description": "Calculá todos los divisores de cualquier número entero. Descubrí si un número es primo y cuántos divisores exactos tiene." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Divisores
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá un número para obtener su lista completa de divisores y sus
        propiedades matemáticas.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Número a analizar</label> <input type="number" id="numInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 100"> </div> <div class="grid grid-cols-2 gap-4"> <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center"> <span class="block text-[10px] font-bold text-slate-400 uppercase">Cantidad</span> <span id="countOutput" class="text-xl font-black text-slate-700">-</span> </div> <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center"> <span class="block text-[10px] font-bold text-slate-400 uppercase">¿Es Primo?</span> <span id="primeOutput" class="text-xl font-black text-slate-700">-</span> </div> </div> </div> <div class="text-center p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 min-h-[200px] flex flex-col"> <span class="block text-[10px] font-bold uppercase text-amber-600 mb-4 tracking-widest">Lista de Divisores</span> <div id="divisorsList" class="flex flex-wrap justify-center gap-2 overflow-y-auto max-h-[300px] p-2"> <span class="text-slate-300 italic text-sm">Esperando número...</span> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es un divisor?
</h2> <p>
Un divisor es un número que divide a otro de forma exacta, es decir, el
        resto de la división es cero. Por ejemplo, los divisores de 10 son 1, 2,
        5 y 10.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic">Números Primos</h4> <p class="text-xs leading-relaxed">
Si un número tiene exactamente <strong>dos divisores</strong> (el 1 y
            él mismo), se clasifica como número primo.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic">
Números Compuestos
</h4> <p class="text-xs leading-relaxed">
Son aquellos que tienen más de dos divisores. El número 1 no es
            primo ni compuesto, ya que solo tiene un divisor.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-divisores.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-divisores.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-divisores.astro";
const $$url = "/matematica/calculadora-divisores";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDivisores,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
