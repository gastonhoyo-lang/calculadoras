/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$InflacionAcumulada = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <!-- TODO: Todo JS va dentro de client:load --> <script client:load>\n  const container = document.getElementById("inputsContainer");\n  const addButton = document.getElementById("addInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  function calculateAccumulated() {\n    const inputs = document.querySelectorAll(".inflation-input");\n    let totalMultiplier = 1;\n    let hasValues = false;\n\n    inputs.forEach((input) => {\n      const val = parseFloat(input.value);\n      if (!isNaN(val)) {\n        totalMultiplier *= 1 + val / 100;\n        hasValues = true;\n      }\n    });\n\n    if (!hasValues) {\n      output && (output.innerText = "0%");\n      return;\n    }\n\n    const totalInflation = (totalMultiplier - 1) * 100;\n    if (output)\n      output.innerText =\n        totalInflation.toLocaleString(undefined, { maximumFractionDigits: 2 }) +\n        "%";\n    if (step) step.innerText = "Inflaci\xF3n compuesta calculada";\n  }\n\n  addButton?.addEventListener("click", () => {\n    const newInput = document.createElement("div");\n    newInput.className = "flex gap-2";\n    newInput.innerHTML = `<input type="number" step="any" class="inflation-input w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-mono" placeholder="Nuevo %" />`;\n    container?.appendChild(newInput);\n\n    newInput\n      .querySelector("input")\n      ?.addEventListener("input", calculateAccumulated);\n    calculateAccumulated(); // recalcular al a\xF1adir input\n  });\n\n  document\n    .querySelectorAll(".inflation-input")\n    .forEach((el) => el.addEventListener("input", calculateAccumulated));\n<\/script>'], ["", ' <!-- TODO: Todo JS va dentro de client:load --> <script client:load>\n  const container = document.getElementById("inputsContainer");\n  const addButton = document.getElementById("addInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  function calculateAccumulated() {\n    const inputs = document.querySelectorAll(".inflation-input");\n    let totalMultiplier = 1;\n    let hasValues = false;\n\n    inputs.forEach((input) => {\n      const val = parseFloat(input.value);\n      if (!isNaN(val)) {\n        totalMultiplier *= 1 + val / 100;\n        hasValues = true;\n      }\n    });\n\n    if (!hasValues) {\n      output && (output.innerText = "0%");\n      return;\n    }\n\n    const totalInflation = (totalMultiplier - 1) * 100;\n    if (output)\n      output.innerText =\n        totalInflation.toLocaleString(undefined, { maximumFractionDigits: 2 }) +\n        "%";\n    if (step) step.innerText = "Inflaci\xF3n compuesta calculada";\n  }\n\n  addButton?.addEventListener("click", () => {\n    const newInput = document.createElement("div");\n    newInput.className = "flex gap-2";\n    newInput.innerHTML = \\`<input type="number" step="any" class="inflation-input w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-mono" placeholder="Nuevo %" />\\`;\n    container?.appendChild(newInput);\n\n    newInput\n      .querySelector("input")\n      ?.addEventListener("input", calculateAccumulated);\n    calculateAccumulated(); // recalcular al a\xF1adir input\n  });\n\n  document\n    .querySelectorAll(".inflation-input")\n    .forEach((el) => el.addEventListener("input", calculateAccumulated));\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inflaci\xF3n Acumulada | Calcular IPC Compuesto", "description": "Calcul\xE1 la inflaci\xF3n acumulada entre dos periodos. Sum\xE1 porcentajes de inflaci\xF3n mensual para conocer el impacto total en los precios." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Inflación Acumulada
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá los porcentajes de cada periodo para calcular el impacto total
        en el costo de vida.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> <div class="space-y-6"> <div id="inputsContainer" class="space-y-4"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
Tasas de Inflación (%)
</label> <div class="flex gap-2"> <input type="number" step="any" class="inflation-input w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-mono" placeholder="Ej: 4.2"> </div> <div class="flex gap-2"> <input type="number" step="any" class="inflation-input w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-mono" placeholder="Ej: 3.8"> </div> </div> <button id="addInput" class="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-bold hover:bg-slate-50 hover:border-slate-300 transition-all uppercase tracking-widest">
+ Añadir otro mes / periodo
</button> </div> <div class="text-center p-10 bg-red-600 rounded-[2.5rem] shadow-lg shadow-red-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">
Total Acumulado
</span> <div id="resultOutput" class="text-7xl font-black leading-none">
0%
</div> <p id="calcStep" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
Calculando impacto...
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">%</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo se calcula la inflación acumulada?
</h2> <p>
Mucha gente comete el error de sumar los porcentajes (ej: 10% + 10% =
        20%). Sin embargo, la inflación es <strong>compuesta</strong>.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl overflow-x-auto"> <span class="text-red-400 font-mono text-xl">
$$Inf_${total} = [(1 + i_1) \\cdot (1 + i_2) \\cdot ... \\cdot (1 + i_n) - 1]
          \\cdot 100$$
</span> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/inflacion-acumulada.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/inflacion-acumulada.astro";
const $$url = "/finanzas/inflacion-acumulada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InflacionAcumulada,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
