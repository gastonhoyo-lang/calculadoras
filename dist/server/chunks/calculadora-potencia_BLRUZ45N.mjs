globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout } from "./Layout_BJlGIyyB.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CalculadoraPotencia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script client:load>\n  const baseInput = document.getElementById("baseInput");\n  const exponentInput = document.getElementById("exponentInput");\n  const powerOutput = document.getElementById("powerOutput");\n  const card = document.getElementById("powerCard");\n\n  function calculatePower() {\n    const base = parseFloat(baseInput.value);\n    const exponent = parseFloat(exponentInput.value);\n\n    if (isNaN(base) || isNaN(exponent)) {\n      powerOutput.innerText = "?";\n      card.className =\n        "text-center p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n      return;\n    }\n\n    const result = Math.pow(base, exponent);\n    powerOutput.innerText = result;\n\n    // Color dinámico según positivo/negativo\n    if (result > 0) {\n      card.className =\n        "text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n    } else if (result < 0) {\n      card.className =\n        "text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n    } else {\n      card.className =\n        "text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n    }\n  }\n\n  [baseInput, exponentInput].forEach((el) =>\n    el.addEventListener("input", calculatePower),\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Potencia | Base y Exponente", "description": "Calculá rápidamente cualquier potencia ingresando la base y el exponente. Herramienta gratuita y fácil de usar." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Potencia
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá la base y el exponente para obtener el resultado de la potencia.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Base</label> <input type="number" id="baseInput" step="any" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 2"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Exponente</label> <input type="number" id="exponentInput" step="any" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 3"> </div> </div> <div id="powerCard" class="text-center p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-amber-600 mb-2 tracking-widest">Resultado</span> <div id="powerOutput" class="text-6xl font-black text-slate-800 leading-none">
?
</div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-amber-200/20 select-none">^</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">¿Cómo se calcula?</h2> <p>
La potencia se calcula multiplicando la base por sí misma tantas veces
        como indique el exponente.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-amber-400 font-mono text-xl">
Ejemplo: 2³ = 2 × 2 × 2 = 8
</span> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-potencia.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-potencia.astro";
const $$url = "/matematica/calculadora-potencia";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraPotencia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
