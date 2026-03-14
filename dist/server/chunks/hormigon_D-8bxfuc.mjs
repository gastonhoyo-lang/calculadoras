globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Hormigon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Hormigón y Materiales | Chieffin", "description": "Calculá cuántos metros cúbicos de hormigón necesitás y la cantidad de cemento, arena y piedra para tu construcción." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Construcción Técnica</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Cálculo de <span class="text-slate-600">Hormigón</span> 🏗️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Determiná el volumen de tu estructura y la dosificación exacta de
        materiales.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-4"> <div class="grid grid-cols-3 gap-3"> <div> <label class="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Largo (m)</label> <input type="number" id="largoH" placeholder="4" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-slate-500 outline-none transition-all font-bold"> </div> <div> <label class="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Ancho (m)</label> <input type="number" id="anchoH" placeholder="3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-slate-500 outline-none transition-all font-bold"> </div> <div> <label class="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Espesor (m)</label> <input type="number" id="espesorH" placeholder="0.10" step="0.01" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-slate-500 outline-none transition-all font-bold"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Mezcla (Dosificación)</label> <select id="dosificacionH" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-slate-500 outline-none transition-all font-bold"> <option value="1:2:3">Estructural (1 Cemento : 2 Arena : 3 Piedra)</option> <option value="1:3:3">Contrapiso (1 Cemento : 3 Arena : 3 Piedra)</option> </select> </div> </div> <button id="btnCalcH" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-slate-700 transition-all shadow-xl">
Calcular Materiales
</button> <div id="resH" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="p-6 bg-slate-900 rounded-[2rem] text-center text-white"> <p class="text-slate-400 text-xs font-bold uppercase mb-1">
Volumen Total:
</p> <div id="volumenH" class="text-4xl font-black mb-1">0 m³</div> </div> <div class="grid grid-cols-1 gap-2"> <div class="bg-slate-50 p-4 rounded-2xl flex justify-between items-center border border-slate-100"> <span class="text-sm font-bold text-slate-600">Cemento (Bolsas 50kg)</span> <span id="cantCemento" class="font-black text-slate-900 text-xl">0</span> </div> <div class="bg-slate-50 p-4 rounded-2xl flex justify-between items-center border border-slate-100"> <span class="text-sm font-bold text-slate-600">Arena (m³)</span> <span id="cantArena" class="font-black text-slate-900 text-xl">0</span> </div> <div class="bg-slate-50 p-4 rounded-2xl flex justify-between items-center border border-slate-100"> <span class="text-sm font-bold text-slate-600">Piedra (m³)</span> <span id="cantPiedra" class="font-black text-slate-900 text-xl">0</span> </div> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo calcular el hormigón?
</h2> <p class="text-slate-600 text-sm">
El cálculo base es multiplicar <strong>Largo x Ancho x Espesor</strong>. El resultado es el volumen en metros cúbicos ($m^3$).
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Dosificación 1:2:3
</h3> <p class="text-slate-600 text-sm">
Es la más común para losas y vigas. Por cada metro cúbico se estima:
</p> <ul class="text-slate-600 space-y-2 text-sm"> <li><strong>7.5 a 8 bolsas</strong> de cemento.</li> <li><strong>0.63 $m^3$</strong> de arena.</li> <li><strong>0.63 $m^3$</strong> de piedra partida.</li> </ul> <div class="bg-amber-50 p-6 rounded-2xl mt-8 border border-amber-100"> <p class="text-sm font-bold text-amber-800 mb-1">Consejo de obra:</p> <p class="text-xs text-amber-700 italic">
Siempre comprá un 10% extra de materiales. En el hormigón, es mejor
            que sobre un poco a que falte medio balde para terminar de llenar.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/hormigon.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/hormigon.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/hogar/hormigon.astro";
const $$url = "/hogar/hormigon/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Hormigon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
