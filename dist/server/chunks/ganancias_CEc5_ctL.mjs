globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$Ganancias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Impuesto a las Ganancias 2026 | Chieffin", "description": "Calculá el impacto del Impuesto a las Ganancias en tu sueldo. Estimá retenciones según el mínimo no imponible vigente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Impuestos</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Impuesto a las <span class="text-red-600">Ganancias</span> 💸
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Estimá cuánto de tu sueldo bruto se destina al impuesto según las
        escalas actuales.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Sueldo Bruto Mensual ($)</label> <input type="number" id="brutoGan" placeholder="Ej: 2500000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Mínimo No Imponible (Piso)</label> <input type="number" id="pisoGan" value="1800000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none transition-all font-bold text-xl"> <p class="text-[10px] text-slate-400 mt-2 italic">
Ajustalo según la ley vigente al momento de la consulta.
</p> </div> </div> <button id="btnCalcGan" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-red-600 transition-all shadow-xl shadow-red-100">
Calcular Retención
</button> <div id="resGan" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-red-50 rounded-[2rem] border-2 border-red-100 border-dashed text-center"> <p class="text-red-600 font-bold text-sm uppercase mb-2">
Retención Estimada:
</p> <div id="montoRetencion" class="text-5xl font-black text-red-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-red-200 w-full mb-4"></div> <p class="text-red-800 text-sm font-medium italic">
Sueldo neto aproximado: <span id="sueldoNetoGan" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo funciona el impuesto?
</h2> <p class="text-slate-600 text-sm">
El Impuesto a las Ganancias es un tributo <strong>progresivo</strong>.
          Esto significa que a medida que tu sueldo supera el mínimo no
          imponible, la alícuota (el porcentaje) que pagás va subiendo.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Deducciones Permitidas
</h3> <p class="text-slate-600 text-sm">
Existen ciertos gastos que podés declarar para bajar el monto del
          impuesto, como:
</p> <ul class="text-slate-600 space-y-2 text-sm"> <li>Cargas de familia (hijos, cónyuge).</li> <li>Alquiler de vivienda.</li> <li>Seguros de vida y retiro.</li> <li>Gastos médicos y donaciones.</li> </ul> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Nota:</p> <p class="text-xs text-slate-500 italic">
Esta calculadora realiza una estimación simplificada basada en el
            excedente sobre el piso. Para un cálculo exacto, consultá tu recibo
            con un contador.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/ganancias.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/ganancias.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/ganancias.astro";
const $$url = "/finanzas/ganancias";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Ganancias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
