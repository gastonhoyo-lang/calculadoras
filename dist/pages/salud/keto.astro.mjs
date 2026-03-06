/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Keto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora Dieta Keto | Macros Cetog\xE9nicos", "description": "Calcul\xE1 tus macronutrientes para la dieta keto. Ajuste preciso de grasas, prote\xEDnas y carbohidratos para entrar en cetosis." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900">
Macros <span class="text-yellow-600">Keto</span> 🥑
</h1> <p class="text-slate-500 mt-2">
Mantené tus carbohidratos bajos y tus grasas en el nivel óptimo.
</p> </header> <div class="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 max-w-2xl mx-auto"> <div class="space-y-6"> <input type="number" id="caloriasK" placeholder="Calorías diarias totales (Ej: 2000)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold text-center text-2xl focus:ring-2 focus:ring-yellow-500"> <button id="btnKeto" class="w-full bg-yellow-600 text-white p-5 rounded-2xl font-bold hover:bg-yellow-700 transition-all shadow-lg">Calcular Distribución</button> </div> <div id="resKeto" class="hidden mt-10 grid grid-cols-3 gap-4 animate-in zoom-in"> <div class="bg-yellow-50 p-4 rounded-2xl text-center border border-yellow-100"> <p class="text-yellow-700 text-xs font-bold uppercase">
Grasas (70%)
</p> <span id="gKeto" class="text-2xl font-black text-yellow-900"></span> </div> <div class="bg-slate-50 p-4 rounded-2xl text-center border border-slate-200"> <p class="text-slate-500 text-xs font-bold uppercase">Prot (25%)</p> <span id="pKeto" class="text-2xl font-black text-slate-900"></span> </div> <div class="bg-green-50 p-4 rounded-2xl text-center border border-green-100"> <p class="text-green-700 text-xs font-bold uppercase">Carbs (5%)</p> <span id="cKeto" class="text-2xl font-black text-green-900"></span> </div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/keto.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/keto.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/keto.astro";
const $$url = "/salud/keto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Keto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
