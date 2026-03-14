globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$ValorFuturo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Valor Futuro | Proyección de Inversiones", "description": "Calculá cuánto valdrá tu inversión en el futuro. Proyectá el crecimiento de tu capital con interés compuesto y aportes mensuales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Valor Futuro (VF)
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Proyectá el crecimiento de tu patrimonio basándote en el tiempo y la
        tasa de retorno.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Inversión Inicial ($)
</label> <input type="number" id="pvInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 5000"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Tasa Anual (%)
</label> <input type="number" id="rateInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono" placeholder="8"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Años
</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono" placeholder="10"> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Aporte Mensual ($)
</label> <input type="number" id="pmtInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono" placeholder="Opcional"> </div> </div> <div id="fvCard" class="text-center p-10 bg-lime-500 rounded-[2.5rem] shadow-lg shadow-lime-200 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px]"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">
Monto Final Estimado
</span> <div id="fvOutput" class="text-6xl font-black leading-none">$0</div> <div class="mt-8 p-4 bg-white/20 rounded-2xl backdrop-blur-sm inline-block border border-white/20"> <span id="interestEarned" class="text-sm font-bold">
Ganancia por intereses: $0
</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">VF</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
El Poder del Interés Compuesto
</h2> <p>
El <strong>Valor Futuro (VF)</strong> es el monto que alcanzará una inversión
            después de un tiempo determinado, aplicado a una tasa de interés. La magia
            ocurre cuando los intereses generados se reinvierten, creando un crecimiento
            exponencial.
</p> <p>
Esta calculadora no solo proyecta una suma fija, sino que permite
            incluir <strong>aportes mensuales</strong>, simulando un plan de
            ahorro sistemático que acelera drásticamente el resultado final.
</p> </div> <div class="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-slate-800 text-center"> <span class="text-lime-400 font-mono text-xs mb-4 block uppercase tracking-widest font-bold">Lógica de Proyección</span> <div class="text-white font-mono text-sm leading-relaxed opacity-90">
VF = VP * (1 + r)^n + PMT * [((1 + r)^n - 1) / r]
<span class="block mt-2 text-[10px] text-slate-500 italic">Donde VP es Capital Inicial y PMT el aporte mensual</span> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-16 mb-8 text-center">
Ejemplos de Crecimiento de Capital
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🌱</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Ahorro Moderado
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Invertís <strong>$1.000</strong> con <strong>$100/mes</strong> al 8% anual.
            En 10 años tenés unos <strong>$20.400</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🌳</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Inversión a Largo Plazo
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Con <strong>$5.000</strong> iniciales y <strong>$300/mes</strong> por
            20 años al 10%, alcanzás los <strong>$230.000</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🚀</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Efecto Tiempo
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Si dejás esos mismos <strong>$300/mes</strong> por 30 años en lugar de
            20, terminás con más de <strong>$650.000</strong>.
</p> </div> </div> <div class="p-8 bg-lime-50 rounded-[2rem] border border-lime-100 flex items-start gap-5 shadow-sm"> <div class="text-3xl bg-white p-3 rounded-2xl shadow-sm">💡</div> <div> <h4 class="text-lime-900 font-bold mb-1">
Dato de Oro para Inversores
</h4> <p class="text-sm text-lime-800 leading-relaxed">
La variable más importante en el Valor Futuro no es la tasa ni el
            capital, sino el <strong>TIEMPO</strong>. Cuanto antes empieces,
            menos esfuerzo mensual tendrás que hacer para alcanzar tus metas
            financieras.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro";
const $$url = "/finanzas/valor-futuro";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ValorFuturo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
