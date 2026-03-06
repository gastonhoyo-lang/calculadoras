/* empty css                                                  */
import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://chieffin.com");
const $$InputField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InputField;
  const { label, id, placeholder, unit } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2"> <label${addAttribute(id, "for")} class="text-sm font-semibold text-slate-700"> ${label} </label> <div class="relative"> <input type="number"${addAttribute(id, "id")}${addAttribute(placeholder, "placeholder")} class="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-lg"> ${unit && renderTemplate`<span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold"> ${unit} </span>`} </div> </div>`;
}, "C:/proyectos/seo-tools/src/components/InputField.astro", void 0);

const $$Astro = createAstro("https://chieffin.com");
const $$ResultBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResultBox;
  const { id, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${id}-container`, "id")} class="hidden mt-6 p-6 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200"> <p class="text-blue-100 text-sm font-bold uppercase tracking-wider"> ${label} </p> <div class="text-4xl font-black mt-1"> <span${addAttribute(id, "id")}>0</span> </div> </div>`;
}, "C:/proyectos/seo-tools/src/components/ResultBox.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Interescompuesto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inter\xE9s Compuesto" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-sm border border-slate-100"> <h1 class="text-2xl font-bold text-slate-900 mb-6">Inter\xE9s Compuesto</h1> <div class="grid gap-4"> ', " ", " ", ' <button onclick="calcular()" class="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors mt-2">\nCalcular Ganancia\n</button> ', ' </div> </div> <script>\n    function calcular() {\n      const p = parseFloat(document.getElementById("capital").value);\n      const r = parseFloat(document.getElementById("interes").value) / 100;\n      const t = parseFloat(document.getElementById("tiempo").value);\n\n      if (p && r && t) {\n        // F\xF3rmula: A = P(1 + r)^t\n        const res = p * Math.pow(1 + r, t);\n\n        document.getElementById("total").innerText = res.toLocaleString(\n          "es-ES",\n          { minimumFractionDigits: 2, maximumFractionDigits: 2 },\n        );\n        document.getElementById("total-container").classList.remove("hidden");\n      }\n    }\n  <\/script> '])), maybeRenderHead(), renderComponent($$result2, "InputField", $$InputField, { "id": "capital", "label": "Capital Inicial", "placeholder": "1000", "unit": "$" }), renderComponent($$result2, "InputField", $$InputField, { "id": "interes", "label": "Tasa de Inter\xE9s Anual", "placeholder": "5", "unit": "%" }), renderComponent($$result2, "InputField", $$InputField, { "id": "tiempo", "label": "Tiempo (A\xF1os)", "placeholder": "10", "unit": "a\xF1os" }), renderComponent($$result2, "ResultBox", $$ResultBox, { "id": "total", "label": "Monto Final Estimado" })) })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/interescompuesto.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/interescompuesto.astro";
const $$url = "/finanzas/interescompuesto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Interescompuesto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
