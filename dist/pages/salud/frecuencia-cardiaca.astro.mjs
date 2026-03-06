/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$FrecuenciaCardiaca = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Frecuencia Card\xEDaca M\xE1xima", "description": "Calcul\xE1 tu FC M\xE1xima para entrenar en las zonas correctas de intensidad." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <div class="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-50 max-w-md mx-auto text-center"> <h2 class="text-2xl font-black mb-6">
Tu <span class="text-red-500">Corazón</span> ❤️
</h2> <input type="number" id="edadFC" placeholder="Tu edad" class="w-full p-4 bg-slate-50 rounded-2xl mb-6 outline-none font-bold text-center text-xl"> <button id="btnFC" class="w-full bg-red-600 text-white p-4 rounded-2xl font-bold hover:bg-red-700">Calcular FC Máx</button> <div id="resFC" class="hidden mt-8 space-y-2"> <p class="text-slate-500 font-medium">Tu máximo estimado es:</p> <div class="text-5xl font-black text-slate-900"> <span id="valFC"></span> PPM
</div> <p class="text-xs text-slate-400 mt-4 italic">
Fórmula de Tanaka: $208 - (0.7 \\times \\text${edad})$
</p> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro";
const $$url = "/salud/frecuencia-cardiaca";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FrecuenciaCardiaca,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
