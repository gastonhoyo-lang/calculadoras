/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$KmAMillas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Kil\xF3metros a Millas | km a millas", "description": "Convert\xED kil\xF3metros a millas de forma r\xE1pida y precisa. Ideal para viajes, mapas y distancias internacionales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Kilómetros a Millas
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Traducí distancias métricas al sistema imperial utilizado en EE.UU. y
        Reino Unido.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center"> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">Kilómetros (km)</label> <input type="number" id="kmInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1.609" step="any"> </div> <div class="flex justify-center"> <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold rotate-90 md:rotate-0 shadow-inner">
⇄
</div> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">Millas (mi)</label> <input type="number" id="mileInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1" step="any"> </div> </div> <div class="mt-8 p-4 bg-amber-50 rounded-2xl text-center border border-amber-100"> <p id="infoText" class="text-amber-800 font-medium">
1 milla terrestre equivale exactamente a 1.60934 kilómetros
</p> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo calcular la conversión?
</h2> <p>
Para pasar de kilómetros a millas terrestres, dividimos la cantidad de
        kilómetros por <strong>1.60934</strong>. Si lo que buscas es una
        estimación rápida para conducir, podés usar 1.6 como referencia.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-amber-400 font-mono text-xl">
$$millas = \\frac${km}${1.60934}$$
</span> </div> <h3 class="text-2xl font-bold text-slate-900 mb-4">
Equivalencias en Carretera
</h3> <div class="overflow-x-auto"> <table class="w-full text-sm text-left"> <thead class="bg-slate-50 border-b border-slate-200"> <tr> <th class="p-4 font-bold uppercase tracking-wider text-slate-400 text-[10px]">Kilómetros</th> <th class="p-4 font-bold uppercase tracking-wider text-slate-400 text-[10px]">Millas (aprox.)</th> <th class="p-4 font-bold uppercase tracking-wider text-slate-400 text-[10px]">Referencia</th> </tr> </thead> <tbody class="divide-y divide-slate-100 font-mono"> <tr><td class="p-4 font-bold">5 km</td><td class="p-4">3.1 mi</td><td class="p-4 text-slate-500 font-sans">Carrera recreativa</td></tr> <tr><td class="p-4 font-bold">42.2 km</td><td class="p-4">26.2 mi</td><td class="p-4 text-slate-500 font-sans">Maratón</td></tr> <tr><td class="p-4 font-bold">100 km</td><td class="p-4">62.1 mi</td><td class="p-4 text-slate-500 font-sans">Velocidad en autopista</td></tr> <tr><td class="p-4 font-bold">160.9 km</td><td class="p-4">100 mi</td><td class="p-4 text-slate-500 font-sans">Hito de las 100 millas</td></tr> </tbody> </table> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro";
const $$url = "/unidades/km-a-millas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KmAMillas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
