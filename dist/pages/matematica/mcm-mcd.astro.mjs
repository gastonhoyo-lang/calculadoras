/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$McmMcd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de MCM y MCD | M\xEDnimo Com\xFAn M\xFAltiplo y M\xE1ximo Com\xFAn Divisor", "description": "Calcul\xE1 el MCM y el MCD de dos o m\xE1s n\xFAmeros de forma r\xE1pida. Ideal para simplificar fracciones y resolver problemas matem\xE1ticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de MCM y MCD
</h1> <p class="text-slate-600 text-lg">
Ingresá los números separados por espacios o comas.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="mb-6"> <label class="block text-sm font-bold mb-2 text-slate-700">Tus números:</label> <input type="text" id="numInput" class="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none text-xl font-bold transition-all" placeholder="Ej: 12, 18, 24"> </div> <button id="btnCalcular" class="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 text-lg">
Calcular MCM y MCD
</button> <div id="resultado" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 hidden"> <div class="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-center"> <span class="block text-indigo-600 font-bold uppercase tracking-wider text-xs mb-1">Mínimo Común Múltiplo</span> <div id="mcmRes" class="text-3xl font-black text-indigo-900">-</div> </div> <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-center"> <span class="block text-emerald-600 font-bold uppercase tracking-wider text-xs mb-1">Máximo Común Divisor</span> <div id="mcdRes" class="text-3xl font-black text-emerald-900">-</div> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro";
const $$url = "/matematica/mcm-mcd";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$McmMcd,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
