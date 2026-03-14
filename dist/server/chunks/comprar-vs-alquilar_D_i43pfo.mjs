globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout } from "./Layout_C1P3Y1KY.mjs";
const $$ComprarVsAlquilar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "¿Comprar o Alquilar Casa? | Calculadora de Comparación Financiera", "description": "Compará si te conviene comprar una propiedad con hipoteca o seguir alquilando e invirtiendo. Análisis de costos a 10 años." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
¿Comprar o <span class="text-blue-600">Alquilar</span>? 🏠
</h1> <p class="text-slate-500 text-lg font-medium">
Analizá tu futuro financiero más allá de la cuota mensual.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm grid md:grid-cols-2 gap-8 mb-16"> <div class="space-y-4"> <h3 class="font-black text-slate-400 uppercase text-xs tracking-widest mb-4 flex items-center gap-2"> <span class="w-2 h-2 bg-slate-300 rounded-full"></span> Escenario Alquiler
</h3> <div> <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-2">Precio Alquiler Mensual ($)</label> <input type="number" id="p_alquiler" placeholder="Ej: 500" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl transition-all"> </div> <div> <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-2">Ahorro inicial disponible ($)</label> <input type="number" id="p_ahorro" placeholder="Dinero para invertir" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl transition-all"> </div> </div> <div class="space-y-4"> <h3 class="font-black text-blue-600 uppercase text-xs tracking-widest mb-4 flex items-center gap-2"> <span class="w-2 h-2 bg-blue-500 rounded-full"></span> Escenario Compra
</h3> <div> <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-2">Valor de la Propiedad ($)</label> <input type="number" id="p_casa" placeholder="Ej: 120000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl transition-all"> </div> <div> <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-2">Cuota Hipoteca Mensual ($)</label> <input type="number" id="p_hipoteca" placeholder="Capital + Interés" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl transition-all"> </div> </div> <button id="btnComparar" class="md:col-span-2 bg-slate-900 text-white p-6 rounded-[2rem] font-black hover:bg-blue-700 transition-all shadow-xl active:scale-95 text-lg">
Comparar Escenarios a 10 años
</button> </div> <div id="resCasa" class="hidden mt-8 p-10 bg-blue-50 rounded-[3rem] border-2 border-blue-100 text-center animate-in slide-in-from-bottom duration-500"> <div class="inline-block p-3 bg-blue-600 text-white rounded-full mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <p id="veredictoCasa" class="text-2xl md:text-3xl font-black text-blue-900 leading-tight"></p> <p class="mt-4 text-blue-700 text-sm max-w-lg mx-auto italic">
Este cálculo asume proyecciones de ahorro versus capitalización
        inmobiliaria estándar.
</p> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
El dilema del propietario
</h2> <p class="leading-relaxed">
La decisión de <strong>comprar o alquilar</strong> no debe basarse únicamente
            en si la cuota de la hipoteca es menor que el alquiler. Para un análisis
            financiero serio, debemos considerar el <strong>Costo de Oportunidad</strong>.
</p> <p class="mt-4"></p> </div> </div> </article> </div>` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/comprar-vs-alquilar.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/comprar-vs-alquilar.astro";
const $$url = "/finanzas/comprar-vs-alquilar";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ComprarVsAlquilar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
