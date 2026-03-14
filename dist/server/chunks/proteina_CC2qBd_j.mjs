globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Proteina = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Proteína Diaria | Chieffin Fitness", "description": "Calculá cuánta proteína necesitás por día según tu peso y nivel de entrenamiento para ganar músculo o mantenerte." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900">
Calculadora de <span class="text-blue-600">Proteína</span> 🥩
</h1> <p class="text-slate-500 mt-2">
Optimizá tu recuperación y crecimiento muscular.
</p> </header> <div class="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 max-w-2xl mx-auto"> <div class="grid md:grid-cols-2 gap-6 mb-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Peso Actual (kg)</label> <input type="number" id="pesoP" placeholder="Ej: 75" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-blue-500"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Nivel de Actividad</label> <select id="actividadP" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold"> <option value="0.8">Sedentario (0.8g/kg)</option> <option value="1.2">Activo / Cardio (1.2g/kg)</option> <option value="1.8">Gimnasio / Hipertrofia (1.8g/kg)</option> <option value="2.2">Atleta de Élite (2.2g/kg)</option> </select> </div> </div> <button id="btnProt" class="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">Calcular Gramos</button> <div id="resProt" class="hidden mt-8 p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-center animate-in slide-in-from-bottom"> <p class="text-blue-600 font-bold uppercase text-xs mb-2">
Debés consumir diariamente
</p> <div class="text-5xl font-black text-blue-900"> <span id="valProt"></span>g
</div> <p class="text-blue-400 text-sm mt-2">de proteína de alta calidad</p> </div> </div> <article class="prose prose-slate max-w-none mt-16 border-t pt-10"> <h2 class="text-2xl font-bold text-slate-800">
¿Cuánta proteína es necesaria?
</h2> <p>
La proteína es el bloque de construcción de tus músculos. Mientras que
        una persona sedentaria necesita lo mínimo para funciones vitales,
        quienes entrenan fuerza rompen fibras musculares que necesitan ser
        reparadas con un mayor aporte proteico.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/proteina.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/proteina.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/salud/proteina.astro";
const $$url = "/salud/proteina/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Proteina,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
