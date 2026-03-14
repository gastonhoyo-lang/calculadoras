globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$Indemnizacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Indemnización por Despido | Chieffin", "description": "Calculá tu liquidación estimada por despido sin causa según la Ley de Contrato de Trabajo (Art. 245)." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Derechos del Trabajador</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculá tu <span class="text-red-600">Indemnización</span> ⚖️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Estimación de liquidación final por despido injustificado (Art. 245
        LCT).
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Mejor Sueldo Bruto ($)</label> <input type="number" id="sueldoBruto" placeholder="Ej: 600000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Antigüedad (Años)</label> <input type="number" id="anios" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Meses extras</label> <input type="number" id="meses" placeholder="Ej: 4" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> </div> <p class="text-[10px] text-slate-400 italic">
Si trabajaste más de 3 meses, se cuenta como un año completo de
            antigüedad.
</p> </div> <button id="btnCalcIndem" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-red-600 transition-all shadow-xl">
Calcular Liquidación Base
</button> <div id="resIndem" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="p-8 bg-red-50 rounded-[2rem] border-2 border-red-100 border-dashed text-center"> <p class="text-red-600 font-bold text-sm uppercase mb-2">
Total Indemnización (Art. 245)
</p> <div id="montoIndem" class="text-5xl font-black text-red-900 tracking-tighter mb-3">
$0
</div> <p class="text-red-800 text-xs font-medium italic">
Estimación base por antigüedad y preaviso.
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Qué incluye este cálculo?
</h2> <p class="text-slate-600">
Esta herramienta calcula los rubros indemnizatorios principales por
          despido sin causa:
</p> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Antigüedad:</strong> Un mes de sueldo por cada año de servicio
            o fracción mayor a 3 meses.
</li> <li> <strong>Preaviso:</strong> Un mes de sueldo si la antigüedad es menor
            a 5 años, dos meses si es mayor.
</li> <li> <strong>SAC sobre rubros:</strong> Proporcional de aguinaldo sobre los
            ítems anteriores.
</li> </ul> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Nota importante:</p> <p class="text-xs text-slate-500 italic">
Este cálculo es <strong>estimativo</strong>. No incluye vacaciones
            no gozadas, integración del mes de despido ni multas específicas.
            Siempre consultá con un abogado laboralista.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/indemnizacion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/indemnizacion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/indemnizacion.astro";
const $$url = "/finanzas/indemnizacion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Indemnizacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
