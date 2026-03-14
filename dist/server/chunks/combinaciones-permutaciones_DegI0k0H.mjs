globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$CombinacionesPermutaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Combinaciones y Permutaciones (nCr y nPr) | Paso a Paso", "description": "Calculá fácilmente combinaciones y permutaciones. Incluye fórmulas, ejemplos y explicación de cuándo importa el orden." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Combinaciones y Permutaciones
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"¿Importa el orden o no? Esa es la cuestión."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-md mx-auto mb-16"> <div class="space-y-4 mb-6"> <div> <label class="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">Total de elementos (n)</label> <input type="number" id="n" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Ej: 10"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">Elementos elegidos (r)</label> <input type="number" id="r" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Ej: 3"> </div> </div> <button id="btnCalc" class="w-full py-4 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-700 hover:shadow-lg transition-all active:scale-95 uppercase tracking-wider">
Calcular resultados
</button> <div id="resBox" class="mt-8 grid grid-cols-2 gap-4 hidden animate-in fade-in zoom-in duration-300"> <div class="p-4 rounded-2xl bg-orange-50 border border-orange-100 text-center"> <span class="text-[10px] font-black text-orange-400 uppercase">Combinaciones (nCr)</span> <div id="resC" class="text-2xl font-black text-orange-700 mt-1"></div> <p class="text-[9px] text-orange-600 mt-1 uppercase tracking-tighter text-center leading-none">
El orden NO importa
</p> </div> <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center"> <span class="text-[10px] font-black text-slate-400 uppercase">Permutaciones (nPr)</span> <div id="resP" class="text-2xl font-black text-slate-700 mt-1"></div> <p class="text-[9px] text-slate-600 mt-1 uppercase tracking-tighter text-center leading-none">
El orden SÍ importa
</p> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <div> <h2 class="text-2xl font-black text-slate-900 mb-4 italic">
¿Cuál es la diferencia?
</h2> <ul class="space-y-4 list-none p-0"> <li class="flex gap-3"> <span class="text-orange-600 font-bold text-xl">●</span> <span><strong>Combinaciones:</strong> Se usan cuando queremos seleccionar
                elementos y NO nos interesa el orden (ej. elegir 3 frutas para una
                ensalada).</span> </li> <li class="flex gap-3"> <span class="text-slate-600 font-bold text-xl">●</span> <span><strong>Permutaciones:</strong> Se usan cuando el orden SÍ es importante
                (ej. el orden de llegada en una carrera o un código de candado).</span> </li> </ul> </div> <div class="bg-slate-50 p-6 rounded-[2rem] border border-slate-200"> <h2 class="text-xl font-black text-slate-900 mb-4">Las Fórmulas</h2>
[Image of the formulas for permutations and combinations]
<div class="space-y-4 font-serif italic text-slate-800 text-center py-2"> <p class="bg-white p-2 rounded-lg shadow-sm text-sm">
Combinación: n! / (r! * (n-r)!)
</p> <p class="bg-white p-2 rounded-lg shadow-sm text-sm">
Permutación: n! / (n-r)!
</p> </div> </div> </div> <h2 class="text-2xl font-black text-slate-900 mt-16 mb-6">
Ejemplos para entender mejor
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="p-6 rounded-2xl bg-orange-50 border border-orange-100 shadow-sm"> <h3 class="text-orange-900 font-bold mb-2 uppercase text-xs tracking-widest">
Ejemplo nCr
</h3> <p class="text-sm">
En un grupo de 10 amigos, queremos elegir a 3 para ir a comprar
            pizza. <strong>¿De cuántas formas podemos elegirlos?</strong> </p> <p class="mt-4 font-black text-orange-700">120 combinaciones</p> </div> <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"> <h3 class="text-slate-900 font-bold mb-2 uppercase text-xs tracking-widest">
Ejemplo nPr
</h3> <p class="text-sm">
Hay 10 corredores en una carrera. <strong>¿De cuántas formas pueden repartirse las medallas de Oro, Plata y
              Bronce?</strong> </p> <p class="mt-4 font-black text-slate-700">720 permutaciones</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/combinaciones-permutaciones.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/combinaciones-permutaciones.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/combinaciones-permutaciones.astro";
const $$url = "/matematica/combinaciones-permutaciones";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CombinacionesPermutaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
