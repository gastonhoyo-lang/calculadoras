/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Luz = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Consumo El\xE9ctrico | Estim\xE1 tu factura de luz", "description": "Calcul\xE1 cu\xE1ntos kWh consumen tus electrodom\xE9sticos por mes. Herramienta para ahorrar energ\xEDa y anticipar el costo de tu factura el\xE9ctrica." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Consumo de <span class="text-yellow-500">Energía</span> </h1> <p class="text-slate-500 text-lg font-medium">
Estimá tu gasto mensual en Watts
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Aparato (Watts aprox)</label> <select id="aparato" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-slate-700 outline-none focus:ring-2 focus:ring-yellow-500"> <option value="2000">Aire Acondicionado (2000W)</option> <option value="1500">Estufa Eléctrica (1500W)</option> <option value="1000">Plancha / Secador (1000W)</option> <option value="200">Heladera (200W)</option> <option value="100">Televisor LED (100W)</option> <option value="10">Lamparita LED (10W)</option> </select> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Horas de uso por día</label> <input type="number" id="horas" placeholder="5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-yellow-500 outline-none font-bold text-xl"> </div> <button id="btnLuz" class="w-full bg-yellow-500 text-white p-5 rounded-2xl font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-100">Calcular Consumo</button> </div> <div id="resLuz" class="hidden bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-center text-center animate-in fade-in zoom-in"> <p class="text-yellow-400 font-bold uppercase tracking-widest mb-2">
Consumo Mensual
</p> <h2 id="luzVal" class="text-6xl font-black mb-2 text-yellow-500"></h2> <p class="text-slate-400 text-sm">
Kilovatios hora (kWh) estimados por mes.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800">
¿Cómo se calcula el consumo eléctrico?
</h2> <p>Para saber cuánto gasta un aparato, se usa la siguiente fórmula:</p> <div class="bg-slate-100 p-4 rounded-xl font-mono text-center my-6">
(Watts × Horas × 30 días) ÷ 1000 = kWh mensuales
</div> <h3 class="text-xl font-bold mt-6 text-slate-800">Tips para ahorrar:</h3> <ul class="list-disc pl-5 space-y-2"> <li> <strong>Etiqueta A:</strong> Comprá electrodomésticos con eficiencia energética
          clase A o superior.
</li> <li> <strong>Modo Stand-by:</strong> Los aparatos apagados pero enchufados pueden
          representar hasta un 10% de tu factura.
</li> <li> <strong>Iluminación:</strong> Cambiá todas tus lámparas a LED; consumen
          hasta 8 veces menos que las halógenas.
</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/luz.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/luz.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/hogar/luz.astro";
const $$url = "/hogar/luz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Luz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
