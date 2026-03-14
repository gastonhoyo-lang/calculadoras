globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$InteresMora = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Interés por Mora | Chieffin", "description": "Calculá fácilmente el recargo por pagos fuera de término. Ideal para facturas, expensas y alquileres vencidos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Finanzas & Pagos</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Interés por <span class="text-red-600">Mora</span> 📉
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Pagaste tarde o te deben dinero? Calculá el punitorio exacto por los
        días de retraso.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Monto Original ($)</label> <input type="number" id="montoBase" placeholder="Ej: 50000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Tasa Mensual (%)</label> <input type="number" id="tasaMensual" placeholder="Ej: 5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Días de Atraso</label> <input type="number" id="diasMora" placeholder="Ej: 15" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> </div> </div> <button id="btnCalcMora" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-red-600 transition-all shadow-xl shadow-red-100">
Calcular Punitorio
</button> <div id="resMora" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="p-8 bg-red-50 rounded-[2rem] border-2 border-red-100 border-dashed text-center"> <p class="text-red-600 font-bold text-sm uppercase mb-2">
Recargo por Mora:
</p> <div id="montoInteres" class="text-5xl font-black text-red-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-red-200 w-full mb-4"></div> <p class="text-red-800 text-sm font-medium">
Total a pagar: <span id="totalConMora" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo se calculan los intereses?
</h2> <p class="text-slate-600 text-sm">
Cuando un pago se realiza después del vencimiento, se aplica un <strong>interés punitorio</strong>. Este se calcula de forma proporcional a los días de demora.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
La fórmula matemática:
</h3> <p class="text-slate-600 text-xs italic bg-slate-50 p-4 rounded-xl border border-slate-100">
Interés = (Monto × Tasa Mensual / 30) × Días de Atraso
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Tipos de tasas comunes:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Expensas:</strong> Suelen tener una tasa fija mensual definida
            por reglamento (3% a 6%).
</li> <li> <strong>Alquileres:</strong> Se pacta en el contrato, generalmente similar
            a la tasa de préstamos personales.
</li> <li> <strong>Impuestos:</strong> Las entidades gubernamentales (como AFIP)
            publican sus propias tasas de interés resarcitorio mensualmente.
</li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/interes-mora.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/interes-mora.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/interes-mora.astro";
const $$url = "/finanzas/interes-mora/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$InteresMora,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
