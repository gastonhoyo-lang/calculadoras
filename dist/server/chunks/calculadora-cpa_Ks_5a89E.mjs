globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$CalculadoraCpa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de CPA | Costo por Adquisición de Clientes", "description": "Calculá tu Costo por Adquisición (CPA) de forma exacta. Medí cuánto te cuesta cada venta y optimizá la rentabilidad de tu negocio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de CPA
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No se trata de cuánto gastás, sino de cuánto te cuesta cada cliente."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Inversión Total ($)</label> <input type="number" id="costIn" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 outline-none transition-all font-mono" placeholder="Ej: 2000"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Ventas Totales (Conversiones)</label> <input type="number" id="salesIn" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 outline-none transition-all font-mono" placeholder="Ej: 40"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-teal-50 rounded-[2rem] border border-teal-100 w-full"> <span class="block text-[10px] font-bold uppercase text-teal-400 mb-2">Costo por Adquisición</span> <div id="cpaResult" class="text-6xl font-black text-teal-700">
$0.00
</div> <p class="text-[10px] text-teal-400 mt-4 font-bold uppercase tracking-widest">
Inversión por venta real
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el CPA y por qué es el KPI definitivo?
</h2> <p>
El **CPA** es el costo total invertido para adquirir un cliente que
        realiza una acción de pago. A diferencia de otras métricas, el CPA tiene
        un impacto directo en tu flujo de caja. Si tu CPA es mayor que el margen
        de beneficio de tu producto, estás perdiendo dinero con cada venta.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo de Escalamiento de Negocio:
</h3> <div class="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500 my-6"> <p class="text-sm mb-4">
Supongamos que vendes un curso online de $100:
</p> <ul class="text-sm space-y-2"> <li> <strong>Escenario A:</strong> Inviertes $1,000 y consigues 10 ventas ($100
            CPA). Tu beneficio es $0.
</li> <li> <strong>Escenario B:</strong> Optimizas tu [Tasa de Conversión](/seo/tasa-conversion)
            y con los mismos $1,000 consigues 20 ventas (<strong>$50 CPA</strong>). Ahora tienes $1,000 de beneficio neto.
</li> </ul> <p class="text-sm mt-4 italic">
Bajar el CPA es la forma más directa de aumentar el
          [ROI](/seo/roi-marketing) de tu empresa.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">CPA vs CPL</h4> <p class="text-xs leading-relaxed">
El [CPL](/seo/calculadora-cpl) mide prospectos, pero el CPA mide
            cierres. Un CPL barato no sirve si el CPA termina siendo impagable
            porque los leads no compran nada.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Optimización del CPA</h4> <p class="text-xs leading-relaxed">
Para reducir el CPA, enfócate en mejorar el
            [CTR](/seo/calculadora-ctr) de tus anuncios y la usabilidad de tu
            checkout. Cada fricción eliminada baja tu costo de adquisición.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpa.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpa.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpa.astro";
const $$url = "/seo/calculadora-cpa";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraCpa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
