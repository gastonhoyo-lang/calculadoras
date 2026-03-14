globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$CostoPorUso = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Costo por Uso | ¿Vale la pena la compra? | Chieffin", "description": "Aprendé a comprar de forma inteligente. Calculá el costo real de cualquier producto basándote en la cantidad de veces que lo vas a utilizar." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Consumo Inteligente</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Costo por <span class="text-emerald-600">Uso</span> 🏷️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Es realmente una buena inversión o un gasto innecesario? Los números te
        ayudan a decidir.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Precio del Producto ($)</label> <input type="number" id="precio" placeholder="Ej: 80000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">¿Cuántas veces lo vas a usar?</label> <input type="number" id="usos" placeholder="Ej: 365" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-xl"> <p class="text-xs text-slate-400 mt-2 italic">
Tip: Si es algo diario, usá 365 para un año.
</p> </div> </div> <button id="btnAnalizar" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-100">
Analizar Compra
</button> <div id="resultado" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-emerald-50 rounded-[2rem] border-2 border-emerald-100 border-dashed text-center"> <p class="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2">
Costo por cada uso
</p> <div id="montoUso" class="text-5xl font-black text-emerald-900 tracking-tighter mb-3">
$0
</div> <div class="h-px bg-emerald-200 w-full mb-4"></div> <p id="veredicto" class="text-emerald-800 font-medium italic"></p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Qué es el Costo por Uso (CPUs)?
</h2> <p class="text-slate-600 leading-relaxed">
El <strong>Costo por Uso</strong> es la métrica definitiva para los compradores
          conscientes. Nos ayuda a entender que un producto "caro" puede ser mucho
          más barato a largo plazo que uno "económico" que se rompe rápido o se usa
          poco.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
La importancia de la calidad
</h3> <p class="text-slate-600">
A veces, gastar el doble en un producto que dura cinco veces más
          reduce tu gasto real significativamente. Esta calculadora te permite
          ver la "foto completa" antes de pasar la tarjeta.
</p> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">
Ejemplo comparativo:
</p> <p class="text-sm text-slate-600">
- Unas zapatillas de <strong>$40.000</strong> que usás 10 veces: <strong>$4.000</strong> por uso.<br>
- Unas zapatillas de <strong>$100.000</strong> que usás 200 veces: <strong>$500</strong> por uso.<br> <strong>La opción más cara terminó siendo 8 veces más barata.</strong> </p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/costo-por-uso.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/costo-por-uso.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/costo-por-uso.astro";
const $$url = "/utiles/costo-por-uso";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CostoPorUso,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
