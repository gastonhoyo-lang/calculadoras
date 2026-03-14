globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$ConsumoElectrico = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Consumo Eléctrico | Chieffin", "description": "Calculá el consumo en kWh de tus electrodomésticos y estimá cuánto vas a pagar en tu próxima factura de energía." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Ahorro en el Hogar</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Consumo <span class="text-yellow-500">Eléctrico</span> ⚡
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Querés bajar la factura de luz? Identificá qué aparatos consumen más.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Potencia del Aparato (Watts)</label> <input type="number" id="potenciaW" placeholder="Ej: Aire Acondicionado (2000)" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-yellow-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Horas al día</label> <input type="number" id="horasDia" placeholder="Ej: 5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-yellow-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Días al mes</label> <input type="number" id="diasMes" value="30" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-yellow-500 outline-none transition-all font-bold text-xl"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Costo por kWh ($)</label> <input type="number" id="costoKwh" placeholder="Ej: 45" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-yellow-500 outline-none transition-all font-bold text-xl"> <p class="text-[10px] text-slate-400 mt-2 italic">
Revisá este valor en tu última factura de luz.
</p> </div> </div> <button id="btnCalcLuz" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-xl">
Calcular Gasto
</button> <div id="resLuz" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-yellow-50 rounded-[2rem] border-2 border-yellow-200 border-dashed text-center"> <p class="text-yellow-700 font-bold text-sm uppercase mb-2">
Costo mensual estimado:
</p> <div id="costoMensualLuz" class="text-5xl font-black text-yellow-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-yellow-200 w-full mb-4"></div> <p class="text-yellow-800 text-xs font-medium">
Consumo: <span id="kwhTotales" class="font-bold"></span> kWh al mes
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
Referencia de Consumo
</h2> <p class="text-slate-600 text-sm">
No todos los electrodomésticos gastan igual. Conocer la potencia
          (Watts) es clave para ahorrar.
</p> <div class="overflow-x-auto"> <table class="w-full text-xs text-left text-slate-600 mt-4"> <thead class="text-slate-700 font-bold bg-slate-50"> <tr> <th class="p-2">Aparato</th> <th class="p-2">Watts aprox.</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr><td class="p-2">Heladera con Freezer</td><td class="p-2">150W - 200W</td></tr> <tr><td class="p-2">Aire Acondicionado (3000 frig)</td><td class="p-2">1350W - 1600W</td></tr> <tr><td class="p-2">Lavarropas (agua fría)</td><td class="p-2">500W</td></tr> <tr><td class="p-2">Pava Eléctrica / Estufa</td><td class="p-2">1500W - 2000W</td></tr> <tr><td class="p-2">Notebook</td><td class="p-2">50W - 100W</td></tr> </tbody> </table> </div> <div class="bg-slate-900 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2 text-yellow-400">
¿Cómo bajar el gasto?
</h4> <p class="text-slate-300 text-xs leading-relaxed italic">
El "Consumo Vampiro" (aparatos en stand-by con la luz roja
            encendida) puede representar hasta un 10% de tu factura mensual.
            ¡Desenchufalos!
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/consumo-electrico.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/consumo-electrico.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/hogar/consumo-electrico.astro";
const $$url = "/hogar/consumo-electrico";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ConsumoElectrico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
