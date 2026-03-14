globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$PulgadasACm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Pulgadas a Centímetros | Pulgadas a cm", "description": "Convertí pulgadas a centímetros y viceversa de forma instantánea. Herramienta precisa para medidas de pantallas, carpintería y más." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Pulgadas a Centímetros
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Pasá medidas del sistema imperial al métrico decimal con precisión
        quirúrgica.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center"> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Pulgadas (in o ")
</label> <input type="number" id="inchInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1" step="any"> </div> <div class="flex justify-center"> <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold rotate-90 md:rotate-0">
⇄
</div> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Centímetros (cm)
</label> <input type="number" id="cmInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-mono text-3xl text-center" placeholder="2.54" step="any"> </div> </div> <div class="mt-8 p-4 bg-blue-50 rounded-2xl text-center"> <p id="equivalenceText" class="text-blue-700 font-medium italic">
1 pulgada equivale exactamente a 2.54 centímetros
</p> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo convertir pulgadas a cm?
</h2> <p>
La relación entre estas dos unidades es constante y universal desde
        1959. Para realizar la conversión manual, se utiliza la siguiente
        fórmula:
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-blue-400 font-mono text-2xl font-bold">
$$cm = in \\cdot 2.54$$
</span> <p class="text-slate-500 text-[10px] uppercase tracking-widest mt-4">
Multiplicá tus pulgadas por 2.54
</p> </div> <h3 class="text-2xl font-bold text-slate-900 mb-4">
Tabla de Medidas Comunes
</h3> <div class="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm mb-12"> <table class="w-full text-sm text-left m-0"> <thead class="bg-slate-50 border-b border-slate-200 text-slate-500"> <tr> <th class="p-4 font-bold uppercase text-[10px]">Pulgadas (in)</th> <th class="p-4 font-bold uppercase text-[10px]">Centímetros (cm)</th> <th class="p-4 font-bold uppercase text-[10px]">Uso Típico</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr><td class="p-4 font-mono">1/4"</td><td class="p-4">0.64 cm</td><td class="p-4 italic">Tornillería fina</td></tr> <tr><td class="p-4 font-mono">1/2"</td><td class="p-4">1.27 cm</td><td class="p-4 italic">Tuberías de agua</td></tr> <tr><td class="p-4 font-mono">6.1"</td><td class="p-4">15.49 cm</td><td class="p-4 italic">iPhone estándar</td></tr> <tr><td class="p-4 font-mono">15.6"</td><td class="p-4">39.62 cm</td><td class="p-4 italic">Notebook clásica</td></tr> <tr><td class="p-4 font-mono">55"</td><td class="p-4">139.70 cm</td><td class="p-4 italic">TV Smart 4K</td></tr> </tbody> </table> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">💡 Dato Útil</h4> <p class="text-xs leading-relaxed">
Recordá que las medidas de pantallas (como TVs o celulares) se dan
            siempre en la <strong>diagonal</strong>. Si tu TV dice 50", esa es
            la distancia desde una esquina hasta la opuesta.
</p> </div> <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100"> <h4 class="font-bold text-blue-900 mb-2">📏 El origen</h4> <p class="text-xs leading-relaxed text-blue-800">
Originalmente, una pulgada se definía como el ancho del pulgar de un
            hombre adulto. Hoy en día es una medida exacta definida por el
            sistema internacional.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/pulgadas-a-cm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/pulgadas-a-cm.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/pulgadas-a-cm.astro";
const $$url = "/unidades/pulgadas-a-cm/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PulgadasACm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
