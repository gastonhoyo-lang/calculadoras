/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Combustible = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Consumo de Combustible | Costo por Viaje", "description": "Calcul\xE1 cu\xE1nto combustible consume tu auto por kil\xF3metro y el costo total de tu pr\xF3ximo viaje. Ideal para ahorrar en nafta o diesel." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Consumo de <span class="text-orange-600">Combustible</span> </h1> <p class="text-slate-500 text-lg font-medium">
Planificá los gastos de tu próximo viaje en segundos.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-5"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Distancia a recorrer (km)</label> <input type="number" id="distancia" placeholder="Ej: 450" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold text-xl text-slate-700"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Consumo Promedio (L/100km)</label> <input type="number" id="consumo" placeholder="Ej: 8.5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold text-xl text-slate-700"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Precio por Litro ($)</label> <input type="number" id="precioL" placeholder="Ej: 900" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none font-bold text-xl text-slate-700"> </div> <button id="btnCombustible" class="w-full bg-orange-600 text-white p-5 rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100">
Calcular Gasto
</button> </div> <div id="resCombustible" class="hidden space-y-4 animate-in fade-in slide-in-from-right duration-500"> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center shadow-xl"> <p class="text-orange-400 text-sm font-bold uppercase tracking-widest mb-2">
Costo Total del Viaje
</p> <h2 id="costoTotal" class="text-5xl font-black text-white mb-2"></h2> <p class="text-slate-400 text-sm">basado en los precios ingresados</p> </div> <div class="bg-orange-50 p-6 rounded-[2rem] border border-orange-100 text-center"> <p class="text-orange-600 text-xs font-bold uppercase mb-1">
Litros Necesarios
</p> <span id="litrosTotal" class="text-3xl font-black text-orange-900"></span> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo calcular el gasto de combustible?
</h2> <p>
Para saber cuánto vas a gastar en tu viaje, primero necesitas conocer el <strong>consumo promedio</strong> de tu vehículo. La mayoría de los autos modernos muestran este valor en
        el tablero como <strong>L/100km</strong>.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">
La Fórmula Matemática:
</h3> <div class="bg-slate-100 p-6 rounded-2xl font-mono text-center my-6">
Litros = (Distancia / 100) × Consumo Promedio <br>
Costo = Litros × Precio del Combustible
</div> <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">
Consejos para ahorrar combustible:
</h3> <ul class="list-disc pl-5 space-y-2"> <li> <strong>Mantén una velocidad constante:</strong> Evitar acelerones bruscos
          reduce el consumo significativamente.
</li> <li> <strong>Presión de neumáticos:</strong> Unas cubiertas desinfladas aumentan
          la resistencia y el gasto de nafta.
</li> <li> <strong>Uso del Aire Acondicionado:</strong> A altas velocidades es mejor
          que las ventanillas bajas, pero en ciudad consume bastante energía.
</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/combustible.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/combustible.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/utiles/combustible.astro";
const $$url = "/utiles/combustible";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Combustible,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
