/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$InteresSimple = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inter\xE9s Simple | Chieffin", "description": "Calcul\xE1 el inter\xE9s generado por un capital inicial en un tiempo determinado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Interés <span class="text-blue-500">Simple</span> </h1> </header> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-md mx-auto space-y-4"> <input type="number" id="capI" placeholder="Capital Inicial ($)" class="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none font-bold"> <input type="number" id="tasaI" placeholder="Tasa de interés anual (%)" class="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none font-bold"> <input type="number" id="tiempoI" placeholder="Tiempo (Años)" class="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none font-bold"> <button id="btnIS" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold">Calcular</button> <div id="resIS" class="hidden p-6 bg-blue-50 rounded-3xl text-center"> <p class="text-blue-600 text-xs font-bold uppercase mb-1">
Interés Total Generado:
</p> <span id="valIS" class="text-4xl font-black text-blue-700"></span> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro";
const $$url = "/finanzas/interes-simple";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InteresSimple,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
