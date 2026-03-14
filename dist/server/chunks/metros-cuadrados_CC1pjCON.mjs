globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$MetrosCuadrados = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Metros Cuadrados (m²) | Chieffin", "description": "Calculá la superficie de paredes, pisos o terrenos. Herramienta simple para saber cuántos metros cuadrados tiene un espacio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Mediciones</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Metros <span class="text-blue-600">Cuadrados</span> 📐
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
La forma más fácil de medir superficies para tus proyectos.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Largo / Base (m)</label> <input type="number" id="largoM2" placeholder="Ej: 5.5" step="0.01" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ancho / Altura (m)</label> <input type="number" id="anchoM2" placeholder="Ej: 3.2" step="0.01" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Precio por m² (Opcional)</label> <input type="number" id="precioM2" placeholder="Ej: 1200" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcM2" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl">
Calcular Superficie
</button> <div id="resM2" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase mb-2">
Superficie Total:
</p> <div id="valorM2" class="text-5xl font-black text-blue-900 tracking-tighter mb-2">
0 m²
</div> <div id="contenedorCostoM2" class="hidden"> <div class="h-px bg-blue-200 w-full mb-4"></div> <p class="text-blue-800 text-sm font-medium">
Presupuesto estimado: <span id="costoFinalM2" class="font-bold"></span> </p> </div> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo calcular m²?
</h2> <p class="text-slate-600 text-sm">
Para calcular los metros cuadrados de una superficie rectangular o
          cuadrada, simplemente debés aplicar la fórmula:
</p> <div class="bg-slate-50 p-4 rounded-xl font-mono text-center text-blue-700 font-bold my-4">
Largo × Ancho = Metros Cuadrados
</div> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Casos comunes:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Habitaciones:</strong> Medí el largo y el ancho del piso.
</li> <li> <strong>Paredes:</strong> Medí el largo de la pared y su altura. No olvides
            restar el área de ventanas y puertas.
</li> <li> <strong>Terrenos:</strong> Si el terreno es irregular, lo ideal es dividirlo
            en triángulos o rectángulos más pequeños y sumar sus áreas.
</li> </ul> <div class="bg-slate-900 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2 text-blue-400">¿Cuánto comprar?</h4> <p class="text-slate-300 text-xs leading-relaxed italic">
Si vas a comprar pisos o cerámicos, se recomienda añadir un <strong>10% extra</strong> por desperdicio y cortes en las esquinas.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/metros-cuadrados.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/metros-cuadrados.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/hogar/metros-cuadrados.astro";
const $$url = "/hogar/metros-cuadrados";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MetrosCuadrados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
