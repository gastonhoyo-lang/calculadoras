/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Embarazo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Embarazo | Semanas y Fecha de Parto", "description": "Calcul\xE1 cu\xE1ntas semanas de embarazo ten\xE9s, en qu\xE9 trimestre est\xE1s y tu fecha probable de parto f\xE1cilmente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4">
Gestación <span class="text-indigo-500">Semana a Semana</span> 👶
</h1> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 max-w-2xl mx-auto space-y-8"> <div> <label class="block text-center text-xs font-bold text-slate-400 uppercase mb-4">Fecha de tu última regla (FUM)</label> <input type="date" id="fum" class="w-full text-center p-6 bg-slate-50 rounded-[2rem] border-none font-black text-2xl text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-200"> </div> <button id="btnEmbarazo" class="w-full bg-indigo-600 text-white p-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all text-xl">Calcular Estado</button> <div id="resEmbarazo" class="hidden space-y-4 animate-in fade-in"> <div class="bg-slate-900 text-white p-8 rounded-[2rem] text-center"> <p class="text-indigo-400 font-bold uppercase text-xs mb-2">
Fecha probable de parto
</p> <h2 id="fpp" class="text-3xl font-black"></h2> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-indigo-50 p-6 rounded-[2rem] text-center"> <span class="block text-indigo-600 font-bold text-xs uppercase">Semanas</span> <span id="semGen" class="text-4xl font-black text-indigo-900"></span> </div> <div class="bg-indigo-50 p-6 rounded-[2rem] text-center"> <span class="block text-indigo-600 font-bold text-xs uppercase">Trimestre</span> <span id="trimGen" class="text-4xl font-black text-indigo-900"></span> </div> </div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/embarazo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/embarazo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/embarazo.astro";
const $$url = "/salud/embarazo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Embarazo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
