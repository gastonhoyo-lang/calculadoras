/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Roi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de ROI | Retorno de Inversi\xF3n", "description": "Calcul\xE1 la rentabilidad de tus proyectos o inversiones de forma simple y r\xE1pida." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">\nCalculadora de <span class="text-blue-600">ROI</span> \u{1F4C8}\n</h1> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm max-w-lg mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-[10px] font-black text-slate-400 uppercase mb-2 text-center">Inversi\xF3n ($)</label> <input type="number" id="i" placeholder="0" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none text-center font-black text-2xl"> </div> <div> <label class="block text-[10px] font-black text-slate-400 uppercase mb-2 text-center">Retorno ($)</label> <input type="number" id="r" placeholder="0" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none text-center font-black text-2xl"> </div> <button id="b" class="w-full bg-blue-600 text-white p-5 rounded-2xl font-black hover:bg-blue-700 active:scale-95">\nCalcular\n</button> </div> <div id="res" class="hidden mt-10 p-8 bg-blue-50 rounded-[2.5rem] text-center"> <div id="v" class="text-5xl font-black text-slate-900">0%</div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-600"> <h2 class="text-2xl font-black text-slate-800">\xBFQu\xE9 es el ROI?</h2> <p>\nEl ROI mide cu\xE1nto ganaste o perdiste en relaci\xF3n al dinero invertido.\n</p> <div class="bg-slate-50 p-6 rounded-2xl font-mono text-center my-6"> <p class="text-sm font-bold">F\xF3rmula:</p> <p class="text-lg">ROI = [(Beneficio - Inversi\xF3n) / Inversi\xF3n] x 100</p> </div> </article> </div> <script>\n    // Script blindado\n    (function () {\n      const btn = document.getElementById("b");\n      if (btn) {\n        btn.addEventListener("click", function () {\n          const inv = parseFloat(document.getElementById("i").value);\n          const ret = parseFloat(document.getElementById("r").value);\n          const valDisplay = document.getElementById("v");\n          const resBox = document.getElementById("res");\n\n          if (inv > 0 && !isNaN(ret)) {\n            const resultado = ((ret - inv) / inv) * 100;\n            if (valDisplay) valDisplay.innerText = resultado.toFixed(2) + "%";\n            if (resBox) resBox.classList.remove("hidden");\n          } else {\n            alert("Ingres\xE1 valores v\xE1lidos (Inversi\xF3n mayor a 0)");\n          }\n        });\n      }\n    })();\n  <\/script> '])), maybeRenderHead()) })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/roi.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/negocios/roi.astro";
const $$url = "/negocios/roi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Roi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
