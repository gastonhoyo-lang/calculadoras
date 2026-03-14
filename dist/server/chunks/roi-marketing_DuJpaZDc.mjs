globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$RoiMarketing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de ROI Marketing | Medí tu Rentabilidad", "description": "Calculá el Retorno de Inversión (ROI) de tus campañas de marketing y publicidad. Descubrí si tus estrategias SEO y SEM son rentables." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de ROI Marketing
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Lo que no se mide, no se puede mejorar."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Inversión Total ($)</label> <input type="number" id="investment" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono" placeholder="Ej: 500"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Ingresos Generados ($)</label> <input type="number" id="revenue" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono" placeholder="Ej: 2500"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 w-full"> <span class="block text-[10px] font-bold uppercase text-emerald-400 mb-2">ROI Resultante</span> <div id="roiResult" class="text-6xl font-black text-emerald-700">
0%
</div> <div id="roiBadge" class="mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-emerald-400">
Esperando datos
</div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el ROI y cómo se interpreta?
</h2> <p>
El **ROI** (Return on Investment) es el valor económico generado como
        resultado de la realización de diversas actividades de marketing. Con
        este dato podemos medir la eficiencia de nuestra inversión.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Análisis de Inversión:
</h3> <div class="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 my-6"> <p class="text-sm mb-4">
Supongamos que invertís $1,000 en una campaña de Google Ads y generás
          ventas por un total de $5,000.
</p> <ul class="text-sm space-y-2"> <li><strong>Ganancia neta:</strong> $4,000 ($5,000 - $1,000).</li> <li> <strong>ROI:</strong> ($4,000 / $1,000) * 100 = <strong>400%</strong>.
</li> </ul> <p class="text-sm mt-4 italic">
Esto significa que por cada dólar invertido, recuperaste el dólar y
          ganaste 4 dólares adicionales.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">ROI en SEO vs SEM</h4> <p class="text-xs leading-relaxed">
El SEM (anuncios) suele dar un ROI rápido pero desaparece al dejar
            de pagar. El SEO, aunque tarda más en arrancar, suele ofrecer un ROI
            mucho más alto a largo plazo ya que el tráfico es "orgánico".
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Métricas Complementarias
</h4> <p class="text-xs leading-relaxed">
Para maximizar el ROI, es vital que tu landing page convierta. Usá
            nuestra [Calculadora de Conversión](/seo/tasa-conversion) para
            identificar si el problema está en la oferta o en el tráfico.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/roi-marketing.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/roi-marketing.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/roi-marketing.astro";
const $$url = "/seo/roi-marketing";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RoiMarketing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
