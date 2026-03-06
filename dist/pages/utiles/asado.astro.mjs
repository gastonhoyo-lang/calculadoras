/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Asado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Asado | \xBFCu\xE1nto comprar?", "description": "Calcul\xE1 la cantidad exacta de carne, achuras y bebida para tu asado o reuni\xF3n seg\xFAn la cantidad de invitados." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de <span class="text-red-600">Asado</span> 🥩
</h1> <p class="text-slate-500 text-lg">
Organizá tu reunión sin complicaciones.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Comensales (Adultos)</label> <input type="number" id="personas" placeholder="Ej: 10" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-xl outline-none focus:ring-2 focus:ring-red-500"> </div> <button id="btnAsado" class="w-full bg-red-600 text-white p-5 rounded-2xl font-bold hover:bg-red-700 transition-all">Calcular Cantidades</button> </div> <div id="resAsado" class="hidden space-y-4 animate-in fade-in zoom-in"> <div class="bg-slate-900 text-white p-6 rounded-3xl"> <h3 class="text-red-400 font-bold uppercase text-xs mb-4 text-center tracking-widest">
Lista de Compras Sugerida
</h3> <ul class="space-y-3 text-sm"> <li class="flex justify-between border-b border-slate-800 pb-2"> <span>Carne (Vacio/Tira):</span> <span id="valCarne" class="font-bold text-white"></span> </li> <li class="flex justify-between border-b border-slate-800 pb-2"> <span>Chorizos/Morcillas:</span> <span id="valAchuras" class="font-bold text-white"></span> </li> <li class="flex justify-between border-b border-slate-800 pb-2"> <span>Carbón:</span> <span id="valCarbon" class="font-bold text-white"></span> </li> <li class="flex justify-between"> <span>Pan:</span> <span id="valPan" class="font-bold text-white"></span> </li> </ul> </div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/asado.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/asado.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/utiles/asado.astro";
const $$url = "/utiles/asado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Asado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
