/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Calorias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Calor\xEDas | TMB y Gasto Energ\xE9tico", "description": "Calcul\xE1 cu\xE1ntas calor\xEDas quema tu cuerpo en reposo (Tasa Metab\xF3lica Basal) y cu\xE1ntas necesit\xE1s para mantener o perder peso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Gasto <span class="text-orange-500">Calórico</span> 🔥
</h1> <p class="text-slate-500 text-lg font-medium">
Descubrí tu Tasa Metabólica Basal y optimizá tu nutrición.
</p> </header> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 max-w-md mx-auto mb-16"> <select id="sexoC" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500 transition-all"> <option value="H">Hombre</option> <option value="M">Mujer</option> </select> <input type="number" id="pesoC" placeholder="Peso (kg)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500 transition-all"> <input type="number" id="alturaC" placeholder="Altura (cm)" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500 transition-all"> <input type="number" id="edadC" placeholder="Edad" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500 transition-all"> <button id="btnCal" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-black transition-all shadow-lg">Calcular TMB</button> <div id="resCal" class="hidden p-6 bg-orange-50 rounded-3xl text-center border-2 border-orange-100 animate-in fade-in zoom-in"> <p class="text-orange-600 text-xs font-bold uppercase tracking-widest mb-1">
Tu metabolismo basal es de:
</p> <div class="text-4xl font-black text-orange-900"> <span id="valCal"></span> kcal
</div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es la Tasa Metabólica Basal (TMB)?
</h2> <p>
La Tasa Metabólica Basal es el número de calorías que tu cuerpo quema
        para realizar las funciones básicas de supervivencia (respirar, bombear
        sangre, regenerar células) en reposo total.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/calorias.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/calorias.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/calorias.astro";
const $$url = "/salud/calorias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calorias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
