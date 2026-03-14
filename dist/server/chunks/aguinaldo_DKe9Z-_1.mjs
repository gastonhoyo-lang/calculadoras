globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Aguinaldo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Aguinaldo (SAC) | Chieffin", "description": "Calculá cuánto vas a cobrar de aguinaldo en junio o diciembre, incluyendo el cálculo proporcional por días trabajados." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Derecho Laboral</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculá tu <span class="text-emerald-600">Aguinaldo</span> 💰
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Descubrí cuánto te corresponde de SAC (Sueldo Anual Complementario) este
        semestre.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Mejor Sueldo Bruto del Semestre ($)</label> <input type="number" id="mejorSueldo" placeholder="Ej: 500000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Días Trabajados en el Semestre</label> <input type="number" id="diasTrabajados" value="180" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-bold text-xl"> <p class="text-[10px] text-slate-400 mt-2 italic">
Si trabajaste el semestre completo, dejá 180.
</p> </div> </div> <button id="btnCalcAguinaldo" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl">
Calcular Aguinaldo Bruto
</button> <div id="resAguinaldo" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-emerald-50 rounded-[2rem] border-2 border-emerald-100 border-dashed text-center"> <p class="text-emerald-600 font-bold text-sm uppercase mb-2">
Aguinaldo Estimado (Bruto)
</p> <div id="montoAguinaldo" class="text-5xl font-black text-emerald-900 tracking-tighter mb-3">
$0
</div> <p class="text-emerald-800 text-xs font-medium italic">
Recordá que a este monto se le aplican descuentos de ley (aprox.
              17%).
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Qué es el Aguinaldo o SAC?
</h2> <p class="text-slate-600">
El <strong>Sueldo Anual Complementario (SAC)</strong> es un sueldo número
          13 que se divide en dos cuotas anuales: una en junio y otra en diciembre.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
¿Cómo se calcula?
</h3> <p class="text-slate-600 text-sm">
Se toma el 50% de la mayor remuneración mensual devengada por todo
          concepto dentro de los dos semestres que culminan en los meses de
          junio y diciembre de cada año.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Cálculo Proporcional:
</h3> <p class="text-slate-600 text-sm italic">
Si no trabajaste los 6 meses completos, la fórmula es: <br> <strong>(Mejor Sueldo / 2) x (Días Trabajados / 180)</strong> </p> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/aguinaldo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/aguinaldo.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/aguinaldo.astro";
const $$url = "/finanzas/aguinaldo/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Aguinaldo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
