globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$CostoAuto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Costo Mensual del Auto | Chieffin", "description": "Calculá cuánto gastás realmente en tu vehículo por mes sumando seguro, patente, combustible y mantenimiento." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Finanzas Personales</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Costo del <span class="text-blue-600">Auto</span> 🚗
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Sabés cuánto dinero se lleva tu auto cada mes? Sumá todos los gastos y
        obtené el total.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="grid grid-cols-1 gap-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Seguro Mensual ($)</label> <input type="number" id="seguro" placeholder="Ej: 45000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Patente (Mes)</label> <input type="number" id="patente" placeholder="Ej: 12000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Cochera / Estac.</label> <input type="number" id="cochera" placeholder="0" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Nafta / Combustible (Mes)</label> <input type="number" id="nafta" placeholder="Ej: 80000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Mantenimiento (Service prorrateado)</label> <input type="number" id="service" placeholder="Ej: 15000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold"> <p class="text-[10px] text-slate-400 mt-1 italic">
Dividí el costo del service anual por 12.
</p> </div> </div> <button id="btnCalcAuto" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl">
Calcular Gasto Mensual
</button> <div id="resAuto" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase mb-2">
Total Mensual Estimado
</p> <div id="gastoTotal" class="text-5xl font-black text-blue-900 tracking-tighter mb-3">
$0
</div> <p class="text-blue-800 text-xs font-medium">
Equivale a <span id="gastoAnual" class="font-bold"></span> por año.
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Por qué calcular el gasto mensual?
</h2> <p class="text-slate-600">
Tener un auto no es solo pagar la cuota o cargarlo de nafta. Existen
          los <strong>costos fijos</strong> (seguro, patente) y los <strong>costos variables</strong> (mantenimiento, repuestos).
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Gastos Ocultos:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Depreciación:</strong> Tu auto pierde valor cada día, incluso
            parado.
</li> <li> <strong>Mantenimiento Preventivo:</strong> Aceite, filtros, cubiertas
            y frenos deben ser prorrateados mensualmente para evitar sorpresas.
</li> <li> <strong>Lavado y Varios:</strong> Peajes, estacionamientos eventuales
            y productos de limpieza.
</li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/costo-auto.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/costo-auto.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/costo-auto.astro";
const $$url = "/finanzas/costo-auto/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CostoAuto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
