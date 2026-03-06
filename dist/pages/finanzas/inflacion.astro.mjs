/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Inflacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inflaci\xF3n | Chieffin", "description": "Calcul\xE1 cu\xE1nto poder adquisitivo perdi\xF3 tu dinero debido a la inflaci\xF3n acumulada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <div class="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-50 max-w-md mx-auto"> <h2 class="text-2xl font-black mb-6 text-center text-slate-800">
Poder <span class="text-red-500">Adquisitivo</span> </h2> <input type="number" id="montoI" placeholder="Monto hace un año ($)" class="w-full p-4 bg-slate-50 rounded-2xl mb-4 outline-none font-bold"> <input type="number" id="pctI" placeholder="Inflación Anual (%)" class="w-full p-4 bg-slate-50 rounded-2xl mb-6 outline-none font-bold"> <button id="btnInf" class="w-full bg-red-600 text-white p-4 rounded-2xl font-bold">¿Cuánto valdría hoy?</button> <div id="resInf" class="hidden mt-8 text-center"> <p class="text-slate-500 text-sm mb-1">
Para comprar lo mismo hoy necesitás:
</p> <div id="valInf" class="text-4xl font-black text-slate-900"></div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro";
const $$url = "/finanzas/inflacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Inflacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
