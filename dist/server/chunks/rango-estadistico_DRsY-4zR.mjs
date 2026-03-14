globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$RangoEstadistico = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Rango Estadístico Online | Amplitud de Datos", "description": "Calculá el rango de un conjunto de datos al instante. Descubrí la diferencia entre el valor máximo y el mínimo de tu muestra." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Rango Estadístico
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"La medida de dispersión más rápida: la distancia entre los extremos."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Conjunto de Datos (separados por comas)</label> <textarea id="dataInput" rows="5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-mono text-sm" placeholder="Ej: 5, 12, 8, 24, 15"></textarea> </div> <div class="grid grid-cols-2 gap-4"> <div class="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-center"> <span class="block text-[10px] font-bold text-emerald-600 uppercase">Valor Mínimo</span> <span id="minOutput" class="text-xl font-black text-emerald-700">-</span> </div> <div class="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-center"> <span class="block text-[10px] font-bold text-emerald-600 uppercase">Valor Máximo</span> <span id="maxOutput" class="text-xl font-black text-emerald-700">-</span> </div> </div> </div> <div class="text-center p-10 bg-emerald-600 rounded-[2.5rem] shadow-lg shadow-emerald-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Rango (Amplitud)</span> <div id="resultOutput" class="text-7xl font-black leading-none">
0
</div> <p id="calcStep" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
Esperando datos...
</p> </div> <span class="absolute -right-6 -bottom-10 text-[12rem] font-black text-white/10 select-none">R</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el Rango en Estadística?
</h2> <p>
El rango es la diferencia numérica entre el valor más alto y el valor
        más bajo de un conjunto de datos. Es una forma sencilla de ver qué tan
        "estirada" está la distribución.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-emerald-400 font-mono text-3xl">
Rango = Máximo - Mínimo
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Ventajas del Rango</h4> <p class="text-xs leading-relaxed">
Su principal ventaja es la facilidad de cálculo. Ofrece una idea
            inmediata de la variabilidad total, útil para descartar errores de
            entrada de datos o valores imposibles.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Limitación Importante</h4> <p class="text-xs leading-relaxed">
El rango es extremadamente sensible a los <strong>valores atípicos</strong> (outliers). Un solo número muy alto o muy bajo puede dar una imagen
            falsa de la dispersión general de los datos.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/rango-estadistico.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/rango-estadistico.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/rango-estadistico.astro";
const $$url = "/matematica/rango-estadistico";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RangoEstadistico,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
