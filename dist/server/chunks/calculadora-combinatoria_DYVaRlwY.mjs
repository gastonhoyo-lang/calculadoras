globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraCombinatoria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Combinatoria | Combinaciones y Variaciones", "description": "Calculá combinaciones, variaciones y permutaciones online. Herramienta matemática para agrupar elementos con o sin orden." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Combinatoria
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Calculá cuántas formas existen de agrupar "r" elementos de un total de
        "n".
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Total de elementos (n)</label> <input type="number" id="nInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-fuchsia-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 10"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Elementos elegidos (r)</label> <input type="number" id="rInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-fuchsia-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 3"> </div> <div class="flex gap-4 p-1 bg-slate-100 rounded-2xl"> <button id="btnComb" class="flex-1 py-2 px-4 rounded-xl text-[10px] font-bold transition-all bg-white shadow-sm text-fuchsia-600 uppercase">Combinación (Sin orden)</button> <button id="btnVar" class="flex-1 py-2 px-4 rounded-xl text-[10px] font-bold transition-all text-slate-400 hover:text-slate-600 uppercase">Variación (Con orden)</button> </div> </div> <div class="text-center p-10 bg-fuchsia-600 rounded-[2.5rem] shadow-lg shadow-fuchsia-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span id="resultLabel" class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Combinaciones Posibles</span> <div id="resultOutput" class="text-6xl font-black leading-tight break-words">
0
</div> <p id="formulaText" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full">
n! / (r!(n-r)!)
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">C</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Diferencia entre Combinación y Variación
</h2> <p>
La clave para usar esta calculadora es saber si el orden de los
        elementos importa:
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-fuchsia-700 mb-2 uppercase text-xs">
Combinación (El orden NO importa)
</h4> <p class="text-sm">
Ejemplo: Elegir 3 frutas para un jugo. Da igual si eliges primero
            manzana o pera, el jugo es el mismo.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-fuchsia-700 mb-2 uppercase text-xs">
Variación (El orden SÍ importa)
</h4> <p class="text-sm">
Ejemplo: Un código de candado. El código 1-2-3 es diferente al
            3-2-1.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-combinatoria.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-combinatoria.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-combinatoria.astro";
const $$url = "/matematica/calculadora-combinatoria/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraCombinatoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
