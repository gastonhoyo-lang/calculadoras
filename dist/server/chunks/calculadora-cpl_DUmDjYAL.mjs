globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$CalculadoraCpl = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de CPL | Costo por Lead en Marketing Digital", "description": "Calculá tu Costo por Lead (CPL) de forma rápida. Medí la eficiencia de tus campañas de captación y optimizá tu embudo de ventas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de CPL (Costo por Lead)
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No todos los leads valen lo mismo, pero todos tienen un precio."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Inversión Total en la Campaña ($)</label> <input type="number" id="costIn" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono" placeholder="Ej: 1000"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Total de Leads Obtenidos</label> <input type="number" id="leadsIn" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono" placeholder="Ej: 50"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100 w-full"> <span class="block text-[10px] font-bold uppercase text-indigo-400 mb-2">Costo por Lead (CPL)</span> <div id="cplResult" class="text-6xl font-black text-indigo-700">
$0.00
</div> <p id="cplHint" class="text-[10px] text-indigo-400 mt-4 font-bold uppercase tracking-widest">
Inversión por contacto
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Por qué es vital medir el CPL?
</h2> <p>
El **CPL** es la métrica que te indica si estás pagando demasiado por
        atraer a personas interesadas. Es el paso previo a la venta: si tu CPL
        es más alto que tu beneficio por venta, tu modelo de negocio no es
        escalable.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo de Análisis de Rentabilidad:
</h3> <div class="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 my-6"> <p class="text-sm mb-4">
Si gastás $500 en anuncios y conseguís 20 personas que se registran en
          tu formulario:
</p> <ul class="text-sm space-y-2"> <li> <strong>Fórmula:</strong> $500 / 20 = <strong>$25 CPL</strong>.
</li> <li> <strong>Optimización:</strong> Si de esos 20 leads, cerrás 1 venta de
            $1000, tu campaña es un éxito rotundo. Pero si cerrás una venta de $10,
            estás perdiendo dinero.
</li> </ul> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Calidad vs Cantidad</h4> <p class="text-xs leading-relaxed">
Un CPL muy bajo puede ser engañoso. Si los contactos son de mala
            calidad, tu equipo de ventas perderá tiempo. Usá el [Engagement
            Rate](/seo/engagement-rate) para medir si el público que atraes es
            el correcto.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Estrategia de Contenidos
</h4> <p class="text-xs leading-relaxed">
Mejorar la [Tasa de Conversión](/seo/tasa-conversion) de tu landing
            page es la forma más rápida de bajar el CPL sin reducir la inversión
            publicitaria.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpl.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpl.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/calculadora-cpl.astro";
const $$url = "/seo/calculadora-cpl";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraCpl,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
