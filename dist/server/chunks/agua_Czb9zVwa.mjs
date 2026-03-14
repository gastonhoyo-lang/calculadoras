globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$Agua = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Agua Diaria | ¿Cuántos litros tomar?", "description": "Descubrí cuánta agua necesita tu cuerpo por día según tu peso y actividad física. Herramienta de salud basada en recomendaciones médicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Hidratación <span class="text-blue-500">Perfecta</span> </h1> <p class="text-slate-500 text-lg font-medium">
Calculá tu consumo ideal de agua por día
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Tu Peso Actual (kg)</label> <input type="number" id="pesoAgua" placeholder="70" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Nivel de Actividad</label> <select id="actividad" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"> <option value="0">Sedentario (Sin ejercicio)</option> <option value="0.5">Moderado (30 min ejercicio)</option> <option value="1">Intenso (Más de 1 hora)</option> </select> </div> <button id="btnAgua" class="w-full bg-blue-500 text-white p-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">Calcular Litros</button> </div> <div id="resAgua" class="hidden bg-blue-50 p-10 rounded-[2.5rem] border-2 border-blue-100 flex flex-col justify-center text-center animate-in fade-in zoom-in"> <p class="text-blue-600 font-bold uppercase tracking-widest mb-2">
Tu objetivo diario es
</p> <h2 id="aguaVal" class="text-6xl font-black text-blue-700 mb-2"></h2> <p class="text-blue-800/60 text-sm font-medium">
Equivalente a unos <span id="vasosVal"></span> vasos de 250ml.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800">
¿Cuánta agua hay que tomar realmente?
</h2> <p>
La vieja regla de los "2 litros" es solo una aproximación. La ciencia
        sugiere que el requerimiento hídrico depende directamente de tu masa
        corporal y el gasto energético.
</p> <h3 class="text-xl font-bold mt-6 text-slate-800">
La fórmula que usamos:
</h3> <p>
Multiplicamos <strong>35ml de agua por cada kilo de peso</strong>,
        sumando un adicional según la intensidad de tu actividad física para
        compensar la pérdida por sudoración.
</p> <div class="grid md:grid-cols-2 gap-4 my-6"> <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 italic">
"El agua representa aproximadamente el 60% del peso corporal en
          adultos."
</div> <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 italic">
"Estar bien hidratado mejora la concentración y el rendimiento
          físico."
</div> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/agua.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/agua.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/salud/agua.astro";
const $$url = "/salud/agua";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Agua,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
