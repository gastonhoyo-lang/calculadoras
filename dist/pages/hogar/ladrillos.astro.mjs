/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Ladrillos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ladrillos para Pared | Chieffin", "description": "Calcul\xE1 la cantidad exacta de ladrillos (comunes, huecos o blocks) que necesit\xE1s para tu obra o refacci\xF3n." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Construcción & Hogar</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Cálculo de <span class="text-orange-600">Ladrillos</span> 🧱
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Ingresá las medidas de tu pared y conocé la cantidad de materiales
        necesaria.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-4"> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Largo Pared (m)</label> <input type="number" id="largoP" placeholder="Ej: 4" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Alto Pared (m)</label> <input type="number" id="altoP" placeholder="Ej: 2.6" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Tipo de Ladrillo</label> <select id="tipoL" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold"> <option value="60">Común (24x12x5)</option> <option value="15">Hueco 18x18x33 (Pared de 18)</option> <option value="15">Hueco 12x18x33 (Pared de 12)</option> <option value="12.5">Block de Cemento (20x20x40)</option> </select> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">% Desperdicio (Roturas)</label> <input type="number" id="desperdicio" value="10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold"> </div> </div> <button id="btnCalcL" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl">
Calcular Unidades
</button> <div id="resL" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-orange-50 rounded-[2rem] border-2 border-orange-100 border-dashed text-center"> <p class="text-orange-600 font-bold text-sm uppercase mb-2">
Necesitás aproximadamente:
</p> <div id="totalL" class="text-5xl font-black text-orange-900 tracking-tighter mb-2">
0
</div> <p class="text-orange-800 font-bold mb-3">Unidades</p> <div class="h-px bg-orange-200 w-full mb-4"></div> <p class="text-orange-600 text-xs font-medium italic">
Superficie total: <span id="m2Pared" class="font-bold"></span> m²
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo se calcula?
</h2> <p class="text-slate-600 text-sm">
El cálculo se basa en la superficie de la pared (Largo x Alto)
          multiplicada por la cantidad de ladrillos necesarios para cubrir un
          metro cuadrado, incluyendo la junta de mezcla.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Valores de referencia (m²):
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li><strong>Ladrillos comunes:</strong> ~60 unidades por m².</li> <li> <strong>Ladrillos huecos (12 o 18):</strong> ~15-16 unidades por m².
</li> <li><strong>Blocks de cemento:</strong> ~12.5 unidades por m².</li> </ul> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Importante:</p> <p class="text-xs text-slate-500 italic">
No olvides descontar de la superficie total las aberturas (puertas y
            ventanas) para obtener un número más preciso.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro";
const $$url = "/hogar/ladrillos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ladrillos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
