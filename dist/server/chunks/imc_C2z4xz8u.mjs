globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$Imc = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de IMC | Índice de Masa Corporal", "description": "Calculá tu IMC de forma rápida y gratuita. Descubrí si estás en tu peso ideal según los estándares de la OMS." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Calculadora de <span class="text-emerald-500">IMC</span> </h1> <p class="text-slate-500 text-lg font-medium">
Tu salud empieza por conocer tu composición corporal.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Peso (kg)</label> <input type="number" id="peso" placeholder="Ej: 75" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-xl outline-none focus:ring-2 focus:ring-emerald-500"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Altura (cm)</label> <input type="number" id="altura" placeholder="Ej: 175" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-xl outline-none focus:ring-2 focus:ring-emerald-500"> </div> <button id="btnIMC" class="w-full bg-emerald-600 text-white p-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">Calcular mi IMC</button> </div> <div id="resIMC" class="hidden bg-slate-900 text-white p-10 rounded-[2.5rem] text-center flex flex-col justify-center animate-in zoom-in"> <p class="text-emerald-400 text-xs font-bold uppercase mb-2 tracking-widest">
Tu resultado es
</p> <h2 id="valIMC" class="text-6xl font-black text-white mb-2"></h2> <p id="descIMC" class="text-slate-400 text-xl font-medium"></p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">¿Qué es el IMC?</h2> <p>
El Índice de Masa Corporal (IMC) es una medida que asocia el peso y la
        altura de una persona. Es utilizado internacionalmente por médicos para
        determinar si un adulto se encuentra en un rango de peso saludable.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">
Rangos de la OMS:
</h3> <ul class="list-disc pl-5 space-y-2"> <li><strong>Bajo peso:</strong> Menos de 18.5</li> <li><strong>Peso normal:</strong> 18.5 – 24.9</li> <li><strong>Sobrepeso:</strong> 25.0 – 29.9</li> <li><strong>Obesidad:</strong> 30.0 o más</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/imc.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/imc.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/salud/imc.astro";
const $$url = "/salud/imc";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Imc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
