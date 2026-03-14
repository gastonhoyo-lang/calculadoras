globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$RendimientoInversion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Rendimiento de Inversión (ROI) | Ganancia Real", "description": "Calculá el retorno de tu inversión de forma sencilla. Conocé el porcentaje de ganancia o pérdida neta de tus operaciones financieras." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Rendimiento de Inversión (ROI)
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Medí la rentabilidad de tus negocios o inversiones comparando lo
        invertido con lo obtenido.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Inversión Inicial ($)
</label> <input type="number" id="initialInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Valor Final / Retornado ($)
</label> <input type="number" id="finalInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1250"> </div> </div> <div id="roiCard" class="text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[250px]"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-emerald-600 mb-2 tracking-widest">
Retorno de Inversión
</span> <div id="roiOutput" class="text-6xl font-black text-slate-800 leading-none">
0%
</div> <div class="mt-6 p-4 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/50"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">
Ganancia Neta
</span> <span id="profitOutput" class="text-2xl font-bold text-emerald-600">
$0
</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-emerald-200/20 select-none">
ROI
</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
¿Qué es el ROI y cómo se mide?
</h2> <p class="text-lg leading-relaxed">
El <strong>ROI</strong> es una métrica financiera que permite comparar
            el beneficio obtenido en relación a la inversión realizada. Es fundamental
            para determinar si una operación financiera ha sido exitosa.
</p> </div> <div class="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-slate-800 text-center"> <span class="text-emerald-400 font-mono text-xs mb-4 block uppercase tracking-widest font-bold">Fórmula Aplicada</span> <div class="text-white font-mono text-lg">
ROI = ((Valor Final - Inversión) / Inversión) x 100
</div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-16 mb-8 text-center">
Ejemplos de Rentabilidad
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">📊</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Inversión Simple
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Invertís <strong>$1.000</strong> y obtenés <strong>$1.500</strong>.
            Tu ROI es del <strong>50%</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">📉</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Pérdida
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Invertís <strong>$1.000</strong> y recuperás <strong>$800</strong>.
            Tu ROI es de <strong>-20%</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🚀</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Alto Impacto
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Invertís <strong>$100</strong> y generás <strong>$1.000</strong>. Tu
            ROI es del <strong>900%</strong>.
</p> </div> </div> <div class="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex items-start gap-5"> <div class="text-3xl">💡</div> <div> <h4 class="text-emerald-900 font-bold mb-1">Interpretación rápida</h4> <p class="text-sm text-emerald-800 leading-relaxed">
Un ROI positivo indica ganancias, mientras que uno negativo indica
            que la inversión no cubrió el capital inicial. No olvides considerar
            el tiempo de la inversión para un análisis completo.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro";
const $$url = "/finanzas/rendimiento-inversion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RendimientoInversion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
