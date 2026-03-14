globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$Tiempo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Tiempo (Horas y Minutos) | Chieffin", "description": "Sumá o restá intervalos de tiempo. Ideal para calcular horas de trabajo o duración de eventos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Utilidad</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Suma de <span class="text-purple-600">Tiempo</span> </h1> </header> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-xl mx-auto space-y-6"> <div id="listaTiempos" class="space-y-3"> <div class="flex gap-2 items-center time-row"> <input type="number" placeholder="HH" class="hh w-full p-4 bg-slate-50 rounded-xl border-none font-bold text-center"> <span class="font-bold">:</span> <input type="number" placeholder="MM" class="mm w-full p-4 bg-slate-50 rounded-xl border-none font-bold text-center"> </div> </div> <button id="addTime" class="text-purple-600 font-bold text-sm">+ Agregar otro intervalo</button> <button id="btnCalcTime" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-purple-600 transition-all">Calcular Total</button> <div id="resTime" class="hidden p-8 bg-purple-50 rounded-[2rem] border-2 border-purple-100 border-dashed text-center"> <p class="text-purple-600 font-bold text-sm uppercase mb-2">
Duración Total:
</p> <div id="totalTime" class="text-5xl font-black text-purple-900">
0h 0m
</div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/tiempo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/tiempo.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/tiempo.astro";
const $$url = "/utiles/tiempo/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Tiempo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
