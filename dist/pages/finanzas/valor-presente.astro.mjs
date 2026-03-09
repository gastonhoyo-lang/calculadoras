/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$ValorPresente = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Valor Presente | Descuento de Capital", "description": "Calcul\xE1 cu\xE1nto vale hoy una suma de dinero que recibir\xE1s en el futuro. Tra\xE9 flujos de fondos al presente con nuestra calculadora financiera." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Valor Presente (VP)
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Descubrí cuánto vale hoy una suma futura aplicando una tasa de
        descuento.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Monto Futuro a Recibir ($)</label> <input type="number" id="fvInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 10000"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Tasa de Descuento (%)</label> <input type="number" id="rateInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 outline-none transition-all font-mono" placeholder="10"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Años</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 outline-none transition-all font-mono" placeholder="5"> </div> </div> </div> <div class="text-center p-10 bg-teal-600 rounded-[2.5rem] shadow-lg shadow-teal-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Valor Presente Actual</span> <div id="pvOutput" class="text-6xl font-black leading-none">$0</div> <div class="mt-8 p-4 bg-white/20 rounded-2xl backdrop-blur-sm inline-block"> <span id="discountLabel" class="text-sm font-bold">Descuento aplicado: $0</span> </div> </div> <span class="absolute -left-4 -top-10 text-[12rem] font-black text-white/10 select-none">VP</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
El Valor del Tiempo
</h2> <p>
El Valor Presente es el valor actual de una suma de dinero que se
        recibirá en el futuro. Se basa en el principio de que <strong>un dólar hoy vale más que un dólar mañana</strong>, porque el dinero de hoy puede invertirse para generar intereses.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl overflow-x-auto"> <span class="text-teal-400 font-mono text-xl">
$$VP = \\frac${VF}${1 + r ^ n}$$
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic">
Tasa de Descuento
</h4> <p class="text-xs leading-relaxed">
Representa el costo de oportunidad o la tasa de retorno que podrías
            obtener en una inversión alternativa de riesgo similar.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic text-sm">
Uso en Negocios
</h4> <p class="text-xs leading-relaxed">
Se usa para calcular el VAN (Valor Actual Neto) de un proyecto. Si
            el VP de lo que vas a ganar es mayor que lo que tenés que invertir
            hoy, el negocio es rentable.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro";
const $$url = "/finanzas/valor-presente";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ValorPresente,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
