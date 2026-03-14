globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$PlazoFijo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Plazo Fijo | Chieffin", "description": "Calculá la rentabilidad de tu plazo fijo. Conocé cuánto vas a ganar en intereses según la TNA actual." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Ahorro e Inversión</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Plazo <span class="text-blue-600">Fijo</span> 🏦
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Simulá el rendimiento de tus ahorros y compará ganancias por tiempo.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Monto a Invertir ($)</label> <input type="number" id="capital" placeholder="Ej: 100000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">TNA (%)</label> <input type="number" id="tasa" placeholder="Ej: 40" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Días</label> <input type="number" id="plazo" value="30" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> </div> </div> <button id="btnCalcPlazo" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
Simular Ganancia
</button> <div id="resPlazo" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase mb-2">
Intereses Ganados
</p> <div id="interesGanado" class="text-5xl font-black text-blue-900 tracking-tighter mb-3">
$0
</div> <div class="h-px bg-blue-200 w-full mb-4"></div> <p class="text-blue-800 text-sm font-medium">
Monto final: <span id="montoTotal" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo se calcula el Plazo Fijo?
</h2> <p class="text-slate-600 leading-relaxed">
El cálculo se basa en la <strong>Tasa Nominal Anual (TNA)</strong>. El
          banco te paga un interés proporcional al tiempo que dejás tu dinero
          inmovilizado.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Fórmula utilizada:
</h3> <p class="text-slate-600 text-sm italic">
Interés = (Capital * TNA * Días) / (365 * 100)
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Tips de Ahorro:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Tasa Efectiva Anual (TEA):</strong> Si reinvertís el capital más
            los intereses cada 30 días, tu ganancia final al año será mayor a la TNA.
</li> <li> <strong>Plazo Mínimo:</strong> En Argentina, el plazo mínimo suele ser
            de 30 días.
</li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/plazo-fijo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/plazo-fijo.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/plazo-fijo.astro";
const $$url = "/finanzas/plazo-fijo";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PlazoFijo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
