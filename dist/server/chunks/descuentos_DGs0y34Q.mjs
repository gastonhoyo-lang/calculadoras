globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$Descuentos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Propinas", "description": "Calculá rápido cuánto dejar de propina según el total de la cuenta y el porcentaje de servicio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-md mx-auto px-4 py-12"> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50"> <h2 class="text-2xl font-black mb-6 text-center text-slate-800">
Calculadora de <span class="text-emerald-500">Propinas</span> </h2> <input type="number" id="totalCuenta" placeholder="Total de la cuenta ($)" class="w-full p-4 bg-slate-50 rounded-2xl mb-4 border-none font-bold outline-none focus:ring-2 focus:ring-emerald-500"> <select id="pctPropina" class="w-full p-4 bg-slate-50 rounded-2xl mb-6 border-none font-bold outline-none"> <option value="0.10">10% (Sugerido)</option> <option value="0.15">15% (Muy buen servicio)</option> <option value="0.05">5% (Servicio regular)</option> </select> <button id="btnPropina" class="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold shadow-lg shadow-emerald-100">Calcular Total</button> <div id="resPropina" class="hidden mt-8 p-6 bg-slate-900 rounded-3xl text-center text-white"> <p class="text-xs font-bold text-emerald-400 uppercase mb-1">
Propina sugerida
</p> <div id="montoPropina" class="text-3xl font-black mb-2">$0</div> <p class="text-xs font-bold text-slate-400 uppercase mb-1">
Total a pagar
</p> <div id="totalConPropina" class="text-xl font-bold">$0</div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/descuentos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/descuentos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/descuentos.astro";
const $$url = "/utiles/descuentos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Descuentos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
