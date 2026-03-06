/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Edad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Edad Exacta | \xBFCu\xE1ntos d\xEDas viviste?", "description": "Descubr\xED tu edad exacta en a\xF1os, meses, d\xEDas y hasta segundos. Una herramienta divertida para conocer tu tiempo en el mundo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Tu Tiempo en el <span class="text-emerald-500">Mundo</span> </h1> <p class="text-slate-500 text-lg font-medium">
Ingresá tu fecha de nacimiento y sorprendete.
</p> </header> <div class="max-w-md mx-auto mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Fecha de Nacimiento</label> <input type="date" id="fechaNac" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none font-bold text-xl text-slate-700"> </div> <button id="btnEdad" class="w-full bg-emerald-500 text-white p-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100">¡Descubrir!</button> </div> </div> <div id="resEdad" class="hidden grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 animate-in zoom-in duration-500"> <div class="bg-white p-6 rounded-3xl border border-slate-100 text-center"> <p class="text-slate-400 text-xs font-bold uppercase mb-1">Años</p> <span id="resAnios" class="text-3xl font-black text-emerald-600"></span> </div> <div class="bg-white p-6 rounded-3xl border border-slate-100 text-center"> <p class="text-slate-400 text-xs font-bold uppercase mb-1">Meses</p> <span id="resMeses" class="text-3xl font-black text-emerald-600"></span> </div> <div class="bg-white p-6 rounded-3xl border border-slate-100 text-center"> <p class="text-slate-400 text-xs font-bold uppercase mb-1">Días</p> <span id="resDias" class="text-3xl font-black text-emerald-600"></span> </div> <div class="bg-white p-6 rounded-3xl border border-slate-100 text-center"> <p class="text-slate-400 text-xs font-bold uppercase mb-1">Horas</p> <span id="resHoras" class="text-3xl font-black text-emerald-600"></span> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/varios/edad.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/varios/edad.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/varios/edad.astro";
const $$url = "/varios/edad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
