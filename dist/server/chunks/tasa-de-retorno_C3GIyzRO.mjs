globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$TasaDeRetorno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Tasa de Retorno (CAGR) | Rendimiento Anualizado", "description": "Calculá la tasa de retorno anual de tus inversiones. Compará diferentes activos normalizando sus ganancias en el tiempo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Tasa de Retorno Anualizada
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No importa cuánto ganaste, sino a qué velocidad lo hiciste."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Valor Inicial ($)
</label> <input type="number" id="initialValue" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Valor Final ($)
</label> <input type="number" id="finalValue" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1500"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Tiempo (en años)
</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 3"> </div> </div> <div id="resultCard" class="text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px]"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest" id="statusLabel">
Esperando datos...
</span> <div id="cagrOutput" class="text-6xl font-black text-slate-800 leading-none">
0%
</div> <div class="mt-6 p-4 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/50"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Retorno Total Acumulado</span> <span id="totalReturnOutput" class="text-2xl font-bold text-slate-600">0%</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-slate-200/20 select-none">%</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
¿Qué es el CAGR?
</h2> <p>
La <strong>Tasa de Crecimiento Anual Compuesto (CAGR)</strong> es la medida
            que describe la tasa a la cual una inversión crecería si lo hiciera a
            una tasa constante cada año, reinvirtiendo todas las ganancias.
</p> <p>
A diferencia del retorno simple, el CAGR suaviza las fluctuaciones
            del mercado y te permite comparar, por ejemplo, el rendimiento de
            una acción frente a un plazo fijo o un inmueble de forma justa.
</p> </div> <div class="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-slate-800 text-center"> <span class="text-amber-400 font-mono text-xs mb-4 block uppercase tracking-widest font-bold">Fórmula CAGR</span> <div class="text-white font-mono text-lg text-center leading-relaxed">
CAGR = [(VF / VI)^(1 / n)] - 1
<span class="block mt-2 text-[10px] text-slate-500 italic">Donde VF es Valor Final, VI Valor Inicial y n los años</span> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-16 mb-8 text-center">
Ejemplos: ¿Quién ganó más?
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">📈</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Inversión A
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Ganaste <strong>100%</strong> de retorno total, pero te tomó <strong>10 años</strong>. Tu CAGR es de <strong>7.18%</strong> anual.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">⚡</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Inversión B
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Ganaste solo un <strong>40%</strong> de retorno total, pero en <strong>2 años</strong>. Tu CAGR es de <strong>18.32%</strong> anual.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🏆</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Conclusión
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Aunque la Inversión A duplicó el dinero, la <strong>Inversión B</strong> fue mucho más eficiente y rentable por año.
</p> </div> </div> <div class="p-8 bg-amber-50 rounded-[2rem] border border-amber-100 flex items-start gap-5 shadow-sm"> <div class="text-3xl bg-white p-3 rounded-2xl shadow-sm">💡</div> <div> <h4 class="text-amber-900 font-bold mb-1">Para qué usar el CAGR</h4> <p class="text-sm text-amber-800 leading-relaxed">
Es la herramienta estándar para evaluar el desempeño de gestores de
            fondos, comparar activos con diferentes periodos de tiempo y
            proyectar cuánto tiempo te tomará duplicar tu capital bajo una tasa
            constante.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro";
const $$url = "/finanzas/tasa-de-retorno";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TasaDeRetorno,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
