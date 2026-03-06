/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Margen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Margen de Ganancia | Chieffin", "description": "Calcul\xE1 el margen de utilidad bruta de tus productos. Conoc\xE9 cu\xE1nto gan\xE1s realmente por cada venta." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Margen de <span class="text-emerald-600">Ganancia</span> </h1> </header> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-md mx-auto space-y-6"> <input type="number" id="costoM" placeholder="Costo del producto ($)" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none font-bold"> <input type="number" id="ventaM" placeholder="Precio de venta ($)" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none font-bold"> <button id="btnMargen" class="w-full bg-emerald-600 text-white p-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all">Calcular Margen</button> <div id="resMargen" class="hidden p-6 bg-emerald-50 rounded-3xl text-center border-2 border-emerald-100"> <p class="text-emerald-600 text-xs font-bold uppercase mb-1">
Tu margen es del:
</p> <span id="valMargen" class="text-4xl font-black text-emerald-700"></span> </div> </div> <article class="prose prose-slate max-w-none border-t mt-12 pt-10 text-slate-600"> <h2 class="text-2xl font-bold text-slate-800">
¿Qué es el Margen de Ganancia?
</h2> <p>
Es el porcentaje que representa la utilidad sobre el precio de venta. Es
        vital no confundirlo con el "markup" o recargo sobre el costo.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/margen.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/margen.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/negocios/margen.astro";
const $$url = "/negocios/margen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Margen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
