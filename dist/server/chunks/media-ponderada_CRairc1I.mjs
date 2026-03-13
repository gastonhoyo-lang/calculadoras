globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout } from "./Layout_UeHtEn6s.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MediaPonderada = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script lang="ts" client:load>\n  const num1 = document.getElementById("num1") as HTMLInputElement;\n  const num2 = document.getElementById("num2") as HTMLInputElement;\n  const peso1 = document.getElementById("peso1") as HTMLInputElement;\n  const peso2 = document.getElementById("peso2") as HTMLInputElement;\n  const resultado = document.getElementById("resultado");\n\n  const calcularMedia = () => {\n    const n1 = parseFloat(num1.value) || 0;\n    const n2 = parseFloat(num2.value) || 0;\n    const p1 = parseFloat(peso1.value) || 0;\n    const p2 = parseFloat(peso2.value) || 0;\n\n    const media = (n1 * p1 + n2 * p2) / (p1 + p2 || 1);\n    if (resultado) resultado.innerText = media.toFixed(2);\n  };\n\n  [num1, num2, peso1, peso2].forEach((el) =>\n    el?.addEventListener("input", calcularMedia),\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Media Ponderada", "description": "Calculá la media ponderada de un conjunto de números y sus pesos de forma sencilla." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-black text-slate-900 mb-6">Media Ponderada</h1> <div class="bg-white p-8 rounded-2xl shadow-lg mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label class="block text-xs font-bold mb-2">Número 1</label> <input type="number" id="num1" class="w-full p-3 border rounded-lg" placeholder="Ej: 10"> <label class="block text-xs font-bold mt-2 mb-2">Peso 1</label> <input type="number" id="peso1" class="w-full p-3 border rounded-lg" placeholder="Ej: 2"> </div> <div> <label class="block text-xs font-bold mb-2">Número 2</label> <input type="number" id="num2" class="w-full p-3 border rounded-lg" placeholder="Ej: 8"> <label class="block text-xs font-bold mt-2 mb-2">Peso 2</label> <input type="number" id="peso2" class="w-full p-3 border rounded-lg" placeholder="Ej: 1"> </div> </div> <div class="mt-6 p-4 bg-slate-100 rounded-lg text-center"> <span class="font-bold">Media Ponderada: </span> <span id="resultado">0</span> </div> </div> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/media-ponderada.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/media-ponderada.astro";
const $$url = "/matematica/media-ponderada";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MediaPonderada,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
