/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$MilesToKm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Millas a Kil\xF3metros | Convertir mi a km", "description": "Calculadora online para convertir millas a kil\xF3metros de forma exacta. Utiliza la tasa oficial de 1.60934 km por milla." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Conversor de Millas a Kilómetros
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Convertí unidades del sistema imperial al métrico con precisión decimal.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div class="space-y-4"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
Distancia en Millas (mi)
</label> <input type="number" id="milesInput" step="any" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 10"> </div> <div class="flex items-center justify-center py-2"> <div class="h-px bg-slate-100 flex-1"></div> <span class="px-4 text-slate-300 text-xs font-bold uppercase tracking-tighter">Equivale a</span> <div class="h-px bg-slate-100 flex-1"></div> </div> <div class="space-y-4"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">
Distancia en Kilómetros (km)
</label> <input type="number" id="kmInput" step="any" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 16.09"> </div> </div> <div class="text-center p-10 bg-blue-600 rounded-[2.5rem] shadow-lg shadow-blue-200 relative overflow-hidden h-full flex flex-col justify-center min-h-[300px]"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Resultado Exacto</span> <div id="resultDisplay" class="text-6xl font-black leading-none break-all">
0 <small class="text-2xl opacity-60">km</small> </div> <p id="formulaHint" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
1 mi = 1.60934 km
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">KM</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo convertir millas a kilómetros?
</h2> <p>
Para convertir millas a kilómetros, se utiliza el factor de conversión
        internacional. Una milla terrestre equivale exactamente a <strong>1,609344 kilómetros</strong>.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-blue-400 font-mono text-xl">
$$Distancia_${km} = Distancia_${mi} \\times 1,609344$$
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic text-sm">
Uso Internacional
</h4> <p class="text-xs leading-relaxed">
Aunque la mayoría del mundo utiliza el sistema métrico (km), países
            como Estados Unidos y el Reino Unido siguen usando millas para medir
            distancias por carretera.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic text-sm">
Millas Náuticas
</h4> <p class="text-xs leading-relaxed">
Es importante no confundirlas: una milla náutica equivale a 1,852 km
            y se utiliza exclusivamente en navegación marítima y aérea.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro";
const $$url = "/unidades/miles-to-km";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MilesToKm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
