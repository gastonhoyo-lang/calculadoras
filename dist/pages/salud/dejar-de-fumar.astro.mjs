/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$DejarDeFumar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ahorro: Dejar de Fumar", "description": "Descubr\xED cu\xE1nto dinero y tiempo de vida ahorr\xE1s al dejar el cigarrillo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-3xl font-black text-center mb-10 text-slate-800">
Vida sin <span class="text-emerald-600">Humo</span> 🚭
</h1> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-lg mx-auto space-y-4"> <input type="number" id="cigarrillosD" placeholder="Cigarrillos por día" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold"> <input type="number" id="precioPack" placeholder="Precio del paquete (20u)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold"> <button id="btnFumar" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold">Ver impacto en 1 año</button> <div id="resFumar" class="hidden mt-8 space-y-4 animate-in slide-in-from-top"> <div class="bg-emerald-50 p-6 rounded-2xl text-center"> <p class="text-emerald-600 font-bold uppercase text-xs">
Ahorro anual
</p> <span id="dineroA" class="text-3xl font-black text-emerald-900"></span> </div> <div class="bg-blue-50 p-6 rounded-2xl text-center"> <p class="text-blue-600 font-bold uppercase text-xs">
Vida recuperada (estimada)
</p> <span id="vidaA" class="text-3xl font-black text-blue-900"></span> </div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/dejar-de-fumar.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/dejar-de-fumar.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/dejar-de-fumar.astro";
const $$url = "/salud/dejar-de-fumar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DejarDeFumar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
