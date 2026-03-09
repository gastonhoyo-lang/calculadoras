/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RendimientoInversion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script client:load>\n  // Todo dentro de client:load para que solo corra en navegador\n  const initialIn = document.getElementById("initialInput");\n  const finalIn = document.getElementById("finalInput");\n  const roiOut = document.getElementById("roiOutput");\n  const profitOut = document.getElementById("profitOutput");\n  const card = document.getElementById("roiCard");\n\n  function calculateROI() {\n    const initial = parseFloat(initialIn.value);\n    const final = parseFloat(finalIn.value);\n\n    if (isNaN(initial) || isNaN(final) || initial === 0) {\n      roiOut.innerText = "0%";\n      profitOut.innerText = "$0";\n      return;\n    }\n\n    const profit = final - initial;\n    const roi = (profit / initial) * 100;\n\n    roiOut.innerText = roi.toFixed(2) + "%";\n    profitOut.innerText = "$" + Math.round(profit).toLocaleString();\n\n    if (roi > 0) {\n      card.className =\n        "text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n      profitOut.className = "text-2xl font-bold text-emerald-600";\n    } else if (roi < 0) {\n      card.className =\n        "text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n      profitOut.className = "text-2xl font-bold text-rose-600";\n    } else {\n      card.className =\n        "text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center";\n      profitOut.className = "text-2xl font-bold text-slate-600";\n    }\n  }\n\n  [initialIn, finalIn].forEach((el) =>\n    el.addEventListener("input", calculateROI),\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Rendimiento de Inversi\xF3n (ROI) | Ganancia Real", "description": "Calcul\xE1 el retorno de tu inversi\xF3n de forma sencilla. Conoc\xE9 el porcentaje de ganancia o p\xE9rdida neta de tus operaciones financieras." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Rendimiento de Inversión (ROI)
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Medí la rentabilidad de tus negocios o inversiones comparando lo
        invertido con lo obtenido.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Inversión Inicial ($)</label> <input type="number" id="initialInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Final / Retornado ($)</label> <input type="number" id="finalInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1250"> </div> </div> <div id="roiCard" class="text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-emerald-600 mb-2 tracking-widest">Retorno de Inversión</span> <div id="roiOutput" class="text-6xl font-black text-slate-800 leading-none">
0%
</div> <div class="mt-6 p-4 bg-white/50 rounded-2xl backdrop-blur-sm"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Ganancia Neta</span> <span id="profitOutput" class="text-2xl font-bold text-emerald-600">$0</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-emerald-200/20 select-none">ROI</span> </div> </div> </div> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro";
const $$url = "/finanzas/rendimiento-inversion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RendimientoInversion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
