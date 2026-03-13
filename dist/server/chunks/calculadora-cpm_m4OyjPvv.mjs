globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$CalculadoraCpm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de CPM Online | Costo por Mil Impresiones", "description": "Calculá el CPM de tus campañas de publicidad. Herramienta ideal para medir el costo de visibilidad en Facebook Ads, Instagram y Google Display." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de CPM
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Medí el valor de la visibilidad de tu marca."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Costo Total ($)</label> <input type="number" id="cost" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 150"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Impresiones Totales</label> <input type="number" id="impressions" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 50000"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100 w-full"> <span class="block text-[10px] font-bold uppercase text-cyan-400 mb-2">Costo por Mil (CPM)</span> <div id="cpmResult" class="text-6xl font-black text-cyan-700">
$0.00
</div> <p class="text-[10px] text-cyan-400 mt-4 font-bold uppercase tracking-widest">
Costo cada 1.000 vistas
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el CPM y cuándo usarlo?
</h2> <p>
El **CPM** mide el costo de mostrar un anuncio mil veces. Es la métrica
        estándar para campañas de **Display, Video y Redes Sociales** donde el
        objetivo principal es el alcance y la frecuencia, más que la conversión
        inmediata.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Campaña de Branding:
</h3> <div class="bg-cyan-50 p-6 rounded-2xl border-l-4 border-cyan-500 my-6"> <p class="text-sm mb-4">
Si lanzás un nuevo producto y querés que lo vean 100,000 personas en
          Instagram con un presupuesto de $300:
</p> <ul class="text-sm space-y-2"> <li> <strong>Fórmula:</strong> ($300 / 100,000) * 1,000 = <strong>$3.00 CPM</strong>.
</li> <li> <strong>Interpretación:</strong> Te cuesta 3 dólares impactar a mil potenciales
            clientes.
</li> </ul> <p class="text-sm mt-4 italic">
Comparativamente, si otra plataforma te ofrece un CPM de $1.50,
          podrías duplicar tu alcance con el mismo presupuesto.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">CPM vs SEO</h4> <p class="text-xs leading-relaxed">
El SEO no tiene un CPM directo porque el tráfico es orgánico. Sin
            embargo, si calculás cuántas impresiones recibís en Search Console,
            verás que el valor de esa visibilidad gratuita ahorra miles de
            dólares en CPM pagado.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Relación con el CTR</h4> <p class="text-xs leading-relaxed">
En campañas de CPM, un [CTR](/seo/calculadora-ctr) alto es un gran
            indicador de que tu creatividad es excelente, ya que estás logrando
            clics en un formato diseñado solo para impresiones.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpm.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpm.astro";
const $$url = "/seo/calculadora-cpm";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraCpm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
