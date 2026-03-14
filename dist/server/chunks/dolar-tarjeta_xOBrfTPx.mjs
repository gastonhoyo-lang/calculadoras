globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$DolarTarjeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Dólar Tarjeta | Chieffin", "description": "Calculá el precio final de tus compras con tarjeta de crédito en dólares, incluyendo Impuesto PAIS y percepciones." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Impuestos Argentina</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Dólar <span class="text-blue-600">Tarjeta</span> 💳
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Evitá sorpresas en el resumen. Calculá el valor real de Netflix, Spotify
        o tus compras afuera.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Cotización Dólar Oficial ($)</label> <input type="number" id="dolarOficial" placeholder="Ej: 950" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Monto de la Compra (USD)</label> <input type="number" id="montoCompra" placeholder="Ej: 10.99" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcDolar" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
Calcular Total en Pesos
</button> <div id="resDolar" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase mb-2">
Total estimado a pagar:
</p> <div id="pesosFinal" class="text-5xl font-black text-blue-900 tracking-tighter mb-3">
$0
</div> <p id="valorDolarFinal" class="text-blue-800 text-sm font-bold"></p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo se calcula el Dólar Tarjeta?
</h2> <p class="text-slate-600">
El valor del <strong>Dólar Tarjeta</strong> (o Turista) surge de sumarle
          a la cotización oficial del banco los impuestos vigentes determinados por
          la AFIP.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Carga Impositiva Incluida:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Impuesto PAIS (30%):</strong> Impuesto para una Argentina Inclusiva
            y Solidaria.
</li> <li> <strong>Percepción de Ganancias (30%):</strong> Adelanto de impuestos
            recuperable anualmente.
</li> </ul> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Aviso Importante:</p> <p class="text-xs text-slate-500 italic">
Las percepciones pueden variar según la normativa vigente. Esta
            calculadora utiliza la tasa unificada del 60% sobre el oficial
            (promedio actual). Verificá con tu banco la cotización exacta del
            día del cierre.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/dolar-tarjeta.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/dolar-tarjeta.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/dolar-tarjeta.astro";
const $$url = "/finanzas/dolar-tarjeta";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DolarTarjeta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
