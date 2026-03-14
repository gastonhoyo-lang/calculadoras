globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$VarianzaDesviacionEstandar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Varianza y Desviación Estándar | Chieffin", "description": "Calculá la dispersión de tus datos de forma fácil. Incluye ejemplos paso a paso de varianza poblacional y muestral." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Varianza y Desviación Estándar
</h1> <p class="text-slate-600 text-lg">
Analizá qué tan dispersos están tus números respecto al promedio.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="mb-6"> <label class="block text-sm font-bold mb-2 text-slate-700">Tus datos (separados por comas o espacios):</label> <input type="text" id="dataInput" class="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-purple-500 outline-none text-xl font-bold transition-all text-center" placeholder="Ej: 5, 8, 12, 15, 20"> </div> <button id="btnCalcular" class="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 text-lg">
Calcular Dispersión
</button> <div id="resultado" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 hidden"> <div class="p-6 rounded-2xl bg-purple-50 border border-purple-100 text-center"> <span class="block text-purple-600 font-bold uppercase tracking-wider text-xs mb-1">Varianza</span> <div id="varianzaRes" class="text-4xl font-black text-purple-900">
-
</div> </div> <div class="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-center"> <span class="block text-indigo-600 font-bold uppercase tracking-wider text-xs mb-1">Desviación Estándar (σ)</span> <div id="desviacionRes" class="text-4xl font-black text-indigo-900">
-
</div> </div> </div> </div> <section class="mt-16 prose prose-slate max-w-none border-t border-slate-100 pt-10 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Para qué sirven estas medidas?
</h2> <p>
Mientras que el promedio te dice dónde está el "centro" de tus datos, la <strong>desviación estándar</strong> te dice qué tan lejos están los datos de ese centro.
</p> <div class="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-400 my-8"> <p class="m-0 text-amber-900"> <strong>Ejemplo rápido:</strong> Si dos ciudades tienen una temperatura
          promedio de 20°C, pero la Ciudad A tiene una desviación estándar de 2°C
          y la Ciudad B tiene 10°C, significa que en la Ciudad B el clima es mucho
          más extremo y variable.
</p> </div> <h3 class="text-2xl font-black text-slate-900 mb-4 italic">
Ejemplo de Cálculo Paso a Paso
</h3> <p>Imaginemos los números: <strong>2, 4, 6</strong></p> <div class="space-y-4"> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200"> <ol class="list-decimal pl-5 space-y-3"> <li> <strong>Promedio:</strong> (2 + 4 + 6) / 3 = <strong>4</strong>.
</li> <li> <strong>Diferencias al cuadrado:</strong> <br>(2 - 4)² = 4
<br>(4 - 4)² = 0
<br>(6 - 4)² = 4
</li> <li> <strong>Varianza:</strong> Es el promedio de esas diferencias: (4 +
              0 + 4) / 3 = <strong>2.67</strong>.
</li> <li> <strong>Desviación Estándar:</strong> Es la raíz cuadrada de la varianza:
              √2.67 = <strong>1.63</strong>.
</li> </ol> </div> </div> <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4 text-center">
Interpretación de Resultados
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="p-4 border border-slate-200 rounded-xl"> <h4 class="font-bold text-slate-800 mb-2">Desviación Baja</h4> <p class="text-sm">
Los datos están agrupados cerca del promedio. Indica estabilidad y
            consistencia.
</p> </div> <div class="p-4 border border-slate-200 rounded-xl"> <h4 class="font-bold text-slate-800 mb-2">Desviación Alta</h4> <p class="text-sm">
Los datos están muy dispersos. Indica alta variabilidad, riesgo o
            desigualdad.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/varianza-desviacion-estandar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/varianza-desviacion-estandar.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/varianza-desviacion-estandar.astro";
const $$url = "/matematica/varianza-desviacion-estandar";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$VarianzaDesviacionEstandar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
