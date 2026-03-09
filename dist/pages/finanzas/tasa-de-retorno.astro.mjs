/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$TasaDeRetorno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script client:load>\n  const initialIn = document.getElementById("initialValue");\n  const finalIn = document.getElementById("finalValue");\n  const yearsIn = document.getElementById("yearsInput");\n\n  const cagrOut = document.getElementById("cagrOutput");\n  const totalOut = document.getElementById("totalReturnOutput");\n  const card = document.getElementById("resultCard");\n\n  function calculate() {\n    const start = parseFloat(initialIn.value);\n    const end = parseFloat(finalIn.value);\n    const t = parseFloat(yearsIn.value);\n\n    if (isNaN(start) || isNaN(end) || isNaN(t) || start <= 0 || t <= 0) {\n      cagrOut.innerText = "0%";\n      totalOut.innerText = "0%";\n      return;\n    }\n\n    const cagr = (Math.pow(end / start, 1 / t) - 1) * 100;\n    const total = ((end - start) / start) * 100;\n\n    cagrOut.innerText = cagr.toFixed(2) + "%";\n    totalOut.innerText = total.toFixed(1) + "%";\n\n    if (cagr > 0) {\n      card.className =\n        "text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n    } else if (cagr < 0) {\n      card.className =\n        "text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n    } else {\n      card.className =\n        "text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n    }\n  }\n\n  [initialIn, finalIn, yearsIn].forEach((el) =>\n    el.addEventListener("input", calculate),\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Tasa de Retorno (CAGR) | Rendimiento Anualizado", "description": "Calcul\xE1 la tasa de retorno anual de tus inversiones. Compar\xE1 diferentes activos normalizando sus ganancias en el tiempo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Tasa de Retorno Anualizada
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No importa cuánto ganaste, sino a qué velocidad lo hiciste."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Inicial ($)</label> <input type="number" id="initialValue" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Final ($)</label> <input type="number" id="finalValue" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1500"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Tiempo (en años)</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 3"> </div> </div> <div id="resultCard" class="text-center p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-amber-600 mb-2 tracking-widest">Tasa Anual (CAGR)</span> <div id="cagrOutput" class="text-6xl font-black text-slate-800 leading-none">
0%
</div> <div class="mt-6 p-4 bg-white/50 rounded-2xl backdrop-blur-sm"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Retorno Total</span> <span id="totalReturnOutput" class="text-2xl font-bold text-amber-600">0%</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-amber-200/20 select-none">%</span> </div> </div> </div> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro";
const $$url = "/finanzas/tasa-de-retorno";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TasaDeRetorno,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
