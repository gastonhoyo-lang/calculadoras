/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Logaritmos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Logaritmos | Hallar Base, Argumento y Resultado", "description": "Calcul\xE1 logaritmos de cualquier base. Herramienta gratuita para resolver logaritmos naturales (ln) y decimales (log10) al instante." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de Logaritmos
</h1> <p class="text-slate-600 text-lg">
Calculá el valor de $y$ en $\\log_${b}(a) = y$
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <div> <label class="block text-sm font-bold mb-2 text-slate-700">Base ($b$)</label> <input type="number" id="baseInput" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500" placeholder="Ej: 10 (Vacío para ln)"> </div> <div> <label class="block text-sm font-bold mb-2 text-slate-700">Argumento ($a$)</label> <input type="number" id="argInput" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500" placeholder="Ej: 100"> </div> </div> <button id="btnCalcular" class="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
Calcular Logaritmo
</button> <div id="resultado" class="mt-8 p-6 rounded-2xl hidden"></div> </div> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro";
const $$url = "/matematica/logaritmos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logaritmos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
