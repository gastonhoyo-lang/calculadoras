globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$Pintura = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Pintura | ¿Cuántos litros necesito?", "description": "Calculá la cantidad exacta de pintura para tus paredes. Evitá gastos innecesarios con nuestro simulador de litros por metro cuadrado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Calculadora de <span class="text-orange-500">Pintura</span> </h1> <p class="text-slate-500 text-lg font-medium">
Calculá cuántos litros necesitás para renovar tus ambientes.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Ancho de la pared (metros)</label> <input type="number" id="ancho" placeholder="5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold text-xl"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Alto de la pared (metros)</label> <input type="number" id="alto" placeholder="2.5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold text-xl"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Manos de pintura</label> <select id="manos" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-slate-700 outline-none focus:ring-2 focus:ring-orange-500"> <option value="1">1 Mano</option> <option value="2" selected>2 Manos (Recomendado)</option> <option value="3">3 Manos</option> </select> </div> <button id="btnPintura" class="w-full bg-orange-500 text-white p-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">Calcular Litros</button> </div> <div id="resPintura" class="hidden bg-orange-50 p-10 rounded-[2.5rem] border-2 border-orange-100 flex flex-col justify-center text-center animate-in fade-in zoom-in"> <p class="text-orange-600 font-bold uppercase tracking-widest mb-2">
Necesitás aproximadamente
</p> <h2 id="litrosVal" class="text-6xl font-black text-orange-700 mb-2"></h2> <p class="text-orange-800/60 text-sm font-medium">
Basado en un rendimiento de 10m² por litro.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20"> <h2 class="text-3xl font-black text-slate-800">
¿Cómo calcular cuánta pintura comprar?
</h2> <p>
La regla general es que <strong>1 litro de pintura cubre 10 metros cuadrados</strong> por mano. Sin embargo, esto puede variar según la porosidad de la pared
        y la calidad de la pintura.
</p> <h3 class="text-xl font-bold mt-6">Consejos pro para pintar:</h3> <ul class="list-disc pl-5 space-y-2 text-slate-600"> <li>
Descontá aberturas: Restá el área de ventanas (aprox 1.5m²) y puertas
          (aprox 2m²).
</li> <li>
Paredes nuevas: Absorben más, podrías necesitar una mano extra de
          fijador.
</li> <li>
Mejor que sobre: Siempre comprá un 10% más por si necesitás retocar en
          el futuro.
</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/pintura.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/pintura.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/hogar/pintura.astro";
const $$url = "/hogar/pintura";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Pintura,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
