globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout } from "./Layout_Bg2NdVg7.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$InflacionAcumulada = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script client:load>\n  const container = document.getElementById("inputsContainer");\n  const addButton = document.getElementById("addInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  function calculateAccumulated() {\n    const inputs = document.querySelectorAll(".inflation-input");\n    let totalMultiplier = 1;\n    let hasValues = false;\n\n    inputs.forEach((input) => {\n      const val = parseFloat(input.value);\n      if (!isNaN(val)) {\n        totalMultiplier *= 1 + val / 100;\n        hasValues = true;\n      }\n    });\n\n    if (!hasValues) {\n      if (output) output.innerText = "0%";\n      return;\n    }\n\n    const totalInflation = (totalMultiplier - 1) * 100;\n    if (output)\n      output.innerText =\n        totalInflation.toLocaleString(undefined, { maximumFractionDigits: 2 }) +\n        "%";\n    if (step) step.innerText = "Inflación compuesta calculada";\n  }\n\n  addButton?.addEventListener("click", () => {\n    const newInput = document.createElement("input");\n    newInput.type = "number";\n    newInput.step = "any";\n    newInput.placeholder = "Nuevo %";\n    newInput.className = "inflation-input w-full p-4 border rounded";\n    container?.appendChild(newInput);\n    newInput.addEventListener("input", calculateAccumulated);\n  });\n\n  document\n    .querySelectorAll(".inflation-input")\n    .forEach((el) => el.addEventListener("input", calculateAccumulated));\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inflación Acumulada", "description": "Calculá la inflación acumulada entre periodos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-black text-slate-900 mb-8 text-center">
Inflación Acumulada
</h1> <div class="grid md:grid-cols-2 gap-12"> <div id="inputsContainer" class="space-y-4"> <input type="number" step="any" class="inflation-input w-full p-4 border rounded" placeholder="Ej: 4.2"> <input type="number" step="any" class="inflation-input w-full p-4 border rounded" placeholder="Ej: 3.8"> <button id="addInput" class="w-full py-2 border-dashed border rounded">+ Añadir periodo</button> </div> <div class="text-center p-6 bg-red-600 text-white rounded"> <div id="resultOutput" class="text-5xl font-black">0%</div> <p id="calcStep">Calculando impacto...</p> </div> </div> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/inflacion-acumulada.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/inflacion-acumulada.astro";
const $$url = "/finanzas/inflacion-acumulada/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$InflacionAcumulada,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
