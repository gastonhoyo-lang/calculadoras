/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$SistemasEcuaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script lang="ts" client:load>\n  const decInput = document.getElementById("decInput") as HTMLInputElement;\n  const fractionResult = document.getElementById("fractionResult");\n  const calcStep = document.getElementById("calcStep");\n\n  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);\n\n  const convertDecimal = () => {\n    const val = parseFloat(decInput.value);\n    if (isNaN(val)) {\n      if (fractionResult) fractionResult.innerText = "?";\n      if (calcStep) calcStep.innerText = "Introduce un valor";\n      return;\n    }\n\n    if (Number.isInteger(val)) {\n      if (fractionResult) fractionResult.innerText = val + "/1";\n      if (calcStep) calcStep.innerText = "N\xFAmero Entero";\n      return;\n    }\n\n    const decimalPlaces = decInput.value.split(".")[1]?.length || 0;\n    const denominator = 10 ** decimalPlaces;\n    const numerator = Math.round(val * denominator);\n    const common = gcd(numerator, denominator);\n\n    if (fractionResult)\n      fractionResult.innerText = `${numerator / common}/${denominator / common}`;\n    if (calcStep) calcStep.innerText = "Fracci\xF3n Simplificada";\n  };\n\n  decInput?.addEventListener("input", convertDecimal);\n<\/script>'], ["", ' <script lang="ts" client:load>\n  const decInput = document.getElementById("decInput") as HTMLInputElement;\n  const fractionResult = document.getElementById("fractionResult");\n  const calcStep = document.getElementById("calcStep");\n\n  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);\n\n  const convertDecimal = () => {\n    const val = parseFloat(decInput.value);\n    if (isNaN(val)) {\n      if (fractionResult) fractionResult.innerText = "?";\n      if (calcStep) calcStep.innerText = "Introduce un valor";\n      return;\n    }\n\n    if (Number.isInteger(val)) {\n      if (fractionResult) fractionResult.innerText = val + "/1";\n      if (calcStep) calcStep.innerText = "N\xFAmero Entero";\n      return;\n    }\n\n    const decimalPlaces = decInput.value.split(".")[1]?.length || 0;\n    const denominator = 10 ** decimalPlaces;\n    const numerator = Math.round(val * denominator);\n    const common = gcd(numerator, denominator);\n\n    if (fractionResult)\n      fractionResult.innerText = \\`\\${numerator / common}/\\${denominator / common}\\`;\n    if (calcStep) calcStep.innerText = "Fracci\xF3n Simplificada";\n  };\n\n  decInput?.addEventListener("input", convertDecimal);\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Decimal a Fracci\xF3n | Simplificaci\xF3n Autom\xE1tica", "description": "Convert\xED cualquier n\xFAmero decimal en una fracci\xF3n simplificada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black mb-4">Decimal a Fracción</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá un número decimal y obtené su equivalente en fracción
        irreducible.
</p> </div> <div class="bg-white p-8 rounded-2xl shadow-xl mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div> <label class="block text-xs font-bold mb-2">Número Decimal</label> <input id="decInput" type="number" step="any" placeholder="Ej: 0.75" class="w-full p-4 border rounded-lg font-mono text-xl text-center"> </div> <div id="fractionCard" class="text-center p-8 bg-teal-50 rounded-2xl flex flex-col justify-center items-center"> <div class="text-2xl font-bold text-teal-800" id="fractionResult">
?
</div> <div class="text-xs mt-2 text-teal-700" id="calcStep">
Introduce un valor
</div> </div> </div> </div> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/sistemas-ecuaciones.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/sistemas-ecuaciones.astro";
const $$url = "/matematica/sistemas-ecuaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemasEcuaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
