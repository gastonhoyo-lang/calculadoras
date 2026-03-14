globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$CuotaMaxima = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Cuota Máxima de Préstamo | Salud Financiera", "description": "Calculá cuánto podés pagar de cuota mensual sin comprometer tus finanzas. Basado en la regla del 30% de ingresos netos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Cuota Máxima Recomendada
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Determiná el monto mensual que podés destinar a un préstamo sin asfixiar
        tu presupuesto.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Ingresos Netos Mensuales ($)</label> <input type="number" id="incomeInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 800000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Otros Gastos Fijos ($)</label> <input type="number" id="expensesInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-mono text-xl" placeholder="Alquiler, servicios, etc."> </div> </div> <div id="statusCard" class="text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest">Cuota Ideal (30%)</span> <div id="maxQuotaOutput" class="text-6xl font-black text-slate-800 leading-none">
$0
</div> <div class="mt-8 flex justify-between text-[10px] font-bold uppercase tracking-tighter"> <span id="labelSafe" class="text-slate-300 transition-colors">Seguro</span> <span id="labelWarning" class="text-slate-300 transition-colors">Precaución</span> <span id="labelDanger" class="text-slate-300 transition-colors">Riesgo</span> </div> <div class="w-full h-2 bg-slate-200 rounded-full mt-2 overflow-hidden flex"> <div id="barSafe" class="h-full w-1/3 bg-slate-300 transition-colors"></div> <div id="barWarning" class="h-full w-1/3 bg-slate-300 border-x border-white transition-colors"></div> <div id="barDanger" class="h-full w-1/3 bg-slate-300 transition-colors"></div> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/5 select-none">🏦</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">La Regla del 30%</h2> <p>
Los expertos en finanzas personales sugieren que el total de tus cuotas
        de deudas (hipotecarias, prendarias o personales) nunca debería superar
        el <strong>30% o 35% de tus ingresos netos</strong>.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100"> <h4 class="font-bold text-blue-900 mb-2 italic">Capacidad de Pago</h4> <p class="text-xs leading-relaxed">
No es solo lo que sobra. Es el margen que te permite seguir
            ahorrando y afrontar imprevistos sin que una cuota te deje en rojo a
            mitad de mes.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic">
¿Y si ya tengo deudas?
</h4> <p class="text-xs leading-relaxed">
Debes restar esas cuotas actuales de tu capacidad máxima. Si tu
            límite es $100.000 y ya pagás $40.000 por el auto, solo podés tomar
            una deuda nueva de $60.000.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/cuota-maxima.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/cuota-maxima.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/cuota-maxima.astro";
const $$url = "/finanzas/cuota-maxima/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CuotaMaxima,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
