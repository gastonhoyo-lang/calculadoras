/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Porcentaje = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Porcentajes Online | R\xE1pida y Precisa", "description": "Calcul\xE1 porcentajes, descuentos, aumentos y variaciones entre dos n\xFAmeros. Tres herramientas en una para resolver tus dudas matem\xE1ticas al instante." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Calculadora de <span class="text-blue-600">Porcentajes</span> </h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
Resolvé cualquier cálculo de porcentaje en segundos: descuentos,
        incrementos y proporciones.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"> <h2 class="text-sm font-black text-blue-600 uppercase tracking-widest mb-6">
1. Obtener un valor
</h2> <div class="space-y-6 text-xl text-slate-700 font-medium"> <p>¿Cuánto es el</p> <div class="flex items-center gap-2"> <input type="number" id="p1_porc" placeholder="10" class="w-20 border-b-4 border-blue-500 text-center outline-none font-black text-blue-600 focus:bg-blue-50 transition-all pb-1"> <span>% de</span> <input type="number" id="p1_num" placeholder="500" class="w-32 border-b-4 border-blue-500 text-center outline-none font-black text-blue-600 focus:bg-blue-50 transition-all pb-1"> </div> <button id="btn1" class="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">Calcular</button> <div id="res1" class="hidden p-4 bg-blue-50 rounded-2xl text-center"> <span class="text-sm text-blue-600 block mb-1 font-bold uppercase">Resultado</span> <span id="val1" class="text-3xl font-black text-blue-700 tracking-tighter"></span> </div> </div> </div> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"> <h2 class="text-sm font-black text-indigo-600 uppercase tracking-widest mb-6">
2. Obtener el porcentaje
</h2> <div class="space-y-6 text-xl text-slate-700 font-medium"> <p>¿Qué porcentaje es</p> <div class="flex items-center gap-2"> <input type="number" id="p2_num1" placeholder="50" class="w-24 border-b-4 border-indigo-500 text-center outline-none font-black text-indigo-600 focus:bg-indigo-50 transition-all pb-1"> <span>de</span> <input type="number" id="p2_num2" placeholder="200" class="w-32 border-b-4 border-indigo-500 text-center outline-none font-black text-indigo-600 focus:bg-indigo-50 transition-all pb-1"> </div> <button id="btn2" class="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100">Calcular %</button> <div id="res2" class="hidden p-4 bg-indigo-50 rounded-2xl text-center"> <span class="text-sm text-indigo-600 block mb-1 font-bold uppercase">Es el</span> <span id="val2" class="text-3xl font-black text-indigo-700 tracking-tighter"></span> </div> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo calcular porcentajes manualmente?
</h2> <p class="text-slate-600 text-lg leading-relaxed mb-6">
Entender cómo funcionan los porcentajes es fundamental para las finanzas
        personales, compras y estudios. Un porcentaje representa una fracción
        con denominador 100.
</p> <div class="grid md:grid-cols-2 gap-8 my-10"> <div class="p-8 bg-slate-50 rounded-3xl"> <h3 class="text-xl font-bold mb-4">La regla de tres simple</h3> <p class="text-sm text-slate-600 mb-4">
Es el método más confiable. Si 500 es el 100%, ¿cuánto es el 10%?
</p> <div class="bg-white p-4 rounded-xl font-mono text-sm border border-slate-200">
(10 × 500) ÷ 100 = 50
</div> </div> <div class="p-8 bg-slate-50 rounded-3xl"> <h3 class="text-xl font-bold mb-4">Multiplicación por decimales</h3> <p class="text-sm text-slate-600 mb-4">
La forma más rápida. Para el 21%, multiplicá el valor por 0.21.
</p> <div class="bg-white p-4 rounded-xl font-mono text-sm border border-slate-200">
1500 × 0.21 = 315
</div> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos comunes de uso
</h3> <ul class="space-y-4 text-slate-600"><li class< ul></li></ul></article> </div>` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro";
const $$url = "/finanzas/porcentaje";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Porcentaje,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
