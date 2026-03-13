globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$Fracciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Fracciones Online | Chieffin", "description": "Resolvé operaciones con fracciones: suma, resta, multiplicación y división con simplificación automática." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Matemática</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculadora de <span class="text-orange-600">Fracciones</span> </h1> </header> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-2xl mx-auto"> <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"> <div class="flex flex-col gap-2"> <input type="number" id="num1" placeholder="Num" class="w-20 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 text-center font-bold"> <div class="h-1 bg-slate-300 w-full rounded-full"></div> <input type="number" id="den1" placeholder="Den" class="w-20 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 text-center font-bold"> </div> <select id="operacionFrac" class="p-3 bg-slate-900 text-white rounded-xl font-black outline-none"> <option value="+">+</option> <option value="-">-</option> <option value="*">×</option> <option value="/">÷</option> </select> <div class="flex flex-col gap-2"> <input type="number" id="num2" placeholder="Num" class="w-20 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 text-center font-bold"> <div class="h-1 bg-slate-300 w-full rounded-full"></div> <input type="number" id="den2" placeholder="Den" class="w-20 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 text-center font-bold"> </div> <span class="text-3xl font-black text-slate-300">=</span> <div id="resFrac" class="flex flex-col gap-2 opacity-30"> <div id="resNum" class="w-20 p-3 bg-orange-50 text-orange-700 rounded-xl text-center font-black text-xl">
-
</div> <div class="h-1 bg-orange-200 w-full rounded-full"></div> <div id="resDen" class="w-20 p-3 bg-orange-50 text-orange-700 rounded-xl text-center font-black text-xl">
-
</div> </div> </div> <button id="btnCalcFrac" class="w-full bg-orange-600 text-white p-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-orange-100">Calcular y Simplificar</button> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/fracciones.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/fracciones.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/fracciones.astro";
const $$url = "/utiles/fracciones";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Fracciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
