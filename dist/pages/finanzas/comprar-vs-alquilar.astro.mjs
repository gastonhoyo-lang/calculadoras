/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$ComprarVsAlquilar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Comprar vs Alquilar Casa | Calculadora", "description": "\xBFEs mejor comprar una propiedad o seguir alquilando? Compar\xE1 costos, intereses y rentabilidad." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-3xl font-black text-center mb-10">
¿Conviene <span class="text-blue-600">Comprar o Alquilar</span>? 🏠
</h1> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm grid md:grid-cols-2 gap-8"> <div class="space-y-4"> <h3 class="font-bold text-slate-400 uppercase text-xs">
Datos del Alquiler
</h3> <input type="number" id="p_alquiler" placeholder="Precio Alquiler Mensual ($)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none"> <input type="number" id="p_ahorro" placeholder="Ahorro inicial disponible ($)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none"> </div> <div class="space-y-4"> <h3 class="font-bold text-slate-400 uppercase text-xs">
Datos de Compra
</h3> <input type="number" id="p_casa" placeholder="Valor Propiedad ($)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none"> <input type="number" id="p_hipoteca" placeholder="Cuota Hipoteca Mensual ($)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none"> </div> <button id="btnComparar" class="md:col-span-2 bg-slate-900 text-white p-5 rounded-2xl font-bold">Comparar Escenarios a 10 años</button> </div> <div id="resCasa" class="hidden mt-8 p-8 bg-blue-50 rounded-[2.5rem] border-2 border-blue-100 text-center"> <p id="veredictoCasa" class="text-2xl font-black text-blue-900"></p> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/comprar-vs-alquilar.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/comprar-vs-alquilar.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/comprar-vs-alquilar.astro";
const $$url = "/finanzas/comprar-vs-alquilar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComprarVsAlquilar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
