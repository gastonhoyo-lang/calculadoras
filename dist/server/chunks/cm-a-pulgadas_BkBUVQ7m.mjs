globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CmAPulgadas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de cm a pulgadas | Herramienta de Medida Precisa", "description": "Convertí centímetros a pulgadas de forma rápida y precisa. Incluye tabla de conversión y ejemplos comunes para costura, pantallas y más." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Centímetros a Pulgadas
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Pasá de sistema métrico a imperial en un segundo con precisión decimal.
</p> </div> <div class="max-w-md mx-auto bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Longitud en Centímetros (cm)
</label> <input id="cmInput" type="number" placeholder="Ej: 100" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono text-xl text-center"> </div> <div class="flex justify-center py-2 text-slate-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> <div class="text-center p-6 bg-cyan-50 rounded-3xl border border-cyan-100 relative overflow-hidden"> <span class="block text-[10px] font-bold uppercase text-cyan-600 mb-1 tracking-widest relative z-10">
Resultado en Pulgadas (in)
</span> <div id="inchesOutput" class="text-5xl font-black text-cyan-800 relative z-10">
0
</div> <span class="absolute -right-2 -bottom-6 text-8xl font-black text-cyan-200/30 select-none">"</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
Cómo convertir cm a pulgadas
</h2> <p>
Para convertir centímetros a pulgadas manualmente, debes saber que <strong>1 pulgada equivale exactamente a 2,54 centímetros</strong>.
</p> <p>
La fórmula es sencilla: dividís el valor en centímetros por 2,54 (o
            lo multiplicás por 0,3937).
</p> <div class="bg-slate-900 p-6 rounded-2xl text-center my-6"> <code class="text-cyan-400 font-mono text-lg">Pulgadas = cm / 2.54</code> </div> </div> <div> <h3 class="text-xl font-bold text-slate-900 mb-4">
Referencias rápidas
</h3> <div class="overflow-hidden rounded-2xl border border-slate-200"> <table class="w-full text-sm text-left m-0"> <thead class="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold"> <tr> <th class="px-4 py-2 border-b">Centímetros</th> <th class="px-4 py-2 border-b">Pulgadas (aprox)</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr><td class="px-4 py-2 italic font-mono">1 cm</td><td class="px-4 py-2">0.39 in</td></tr> <tr><td class="px-4 py-2 italic font-mono">10 cm</td><td class="px-4 py-2">3.93 in</td></tr> <tr><td class="px-4 py-2 italic font-mono">30 cm</td><td class="px-4 py-2">11.81 in</td></tr> <tr><td class="px-4 py-2 italic font-mono">100 cm</td><td class="px-4 py-2">39.37 in</td></tr> </tbody> </table> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-8 text-center">
Ejemplos de la vida real
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">📱</span> <h4 class="font-bold text-slate-900 mb-2">Pantallas</h4> <p class="text-xs leading-relaxed text-slate-600">
Si una pantalla mide <strong>15 cm</strong> de ancho, tiene aproximadamente
<strong>5.9 pulgadas</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🧵</span> <h4 class="font-bold text-slate-900 mb-2">Costura y Ropa</h4> <p class="text-xs leading-relaxed text-slate-600">
Un talle de <strong>80 cm</strong> de cintura equivale a <strong>31.5 pulgadas</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">📏</span> <h4 class="font-bold text-slate-900 mb-2">Bricolaje</h4> <p class="text-xs leading-relaxed text-slate-600">
Un tornillo de <strong>5 cm</strong> de largo es prácticamente un tornillo
            de <strong>2 pulgadas</strong>.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro";
const $$url = "/unidades/cm-a-pulgadas/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CmAPulgadas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
