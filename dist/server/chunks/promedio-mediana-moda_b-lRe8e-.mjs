globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$PromedioMedianaModa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Promedio, Mediana y Moda | Estadística Básica", "description": "Calculá la media, mediana y moda de un conjunto de números. Incluye ejemplos paso a paso y explicación de cada medida de tendencia central." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de Promedio, Mediana y Moda
</h1> <p class="text-slate-600 text-lg">
Ingresá tu lista de datos para obtener las medidas de tendencia central.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="mb-6"> <label class="block text-sm font-bold mb-2 text-slate-700 italic">Tus datos (separados por comas o espacios):</label> <input type="text" id="dataInput" class="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none text-xl font-bold transition-all text-center" placeholder="Ej: 10, 15, 20, 15, 30"> </div> <button id="btnCalcular" class="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-lg">
Analizar Datos
</button> <div id="resultado" class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 hidden"> <div class="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-center"> <span class="block text-blue-600 font-bold uppercase tracking-wider text-xs mb-1">Promedio (Media)</span> <div id="mediaRes" class="text-3xl font-black text-blue-900">-</div> </div> <div class="p-6 rounded-2xl bg-purple-50 border border-purple-100 text-center"> <span class="block text-purple-600 font-bold uppercase tracking-wider text-xs mb-1">Mediana</span> <div id="medianaRes" class="text-3xl font-black text-purple-900">
-
</div> </div> <div class="p-6 rounded-2xl bg-pink-50 border border-pink-100 text-center"> <span class="block text-pink-600 font-bold uppercase tracking-wider text-xs mb-1">Moda</span> <div id="modaRes" class="text-3xl font-black text-pink-900">-</div> </div> </div> </div> <section class="mt-16 prose prose-slate max-w-none border-t border-slate-100 pt-10 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6 text-center">
Entendiendo las Medidas de Tendencia Central
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10"> <div class="p-4 rounded-xl border border-slate-200"> <h3 class="text-blue-600 font-bold text-lg mb-2">Media (Promedio)</h3> <p class="text-sm">
Es la suma de todos los valores dividida por la cantidad total de
            datos. Es sensible a valores extremos.
</p> </div> <div class="p-4 rounded-xl border border-slate-200"> <h3 class="text-purple-600 font-bold text-lg mb-2">Mediana</h3> <p class="text-sm">
Es el valor que queda justo en el centro cuando los datos están
            ordenados de menor a mayor.
</p> </div> <div class="p-4 rounded-xl border border-slate-200"> <h3 class="text-pink-600 font-bold text-lg mb-2">Moda</h3> <p class="text-sm">
Es el valor que más veces se repite en el conjunto. Puede haber más
            de una (bimodal o multimodal).
</p> </div> </div> <h3 class="text-2xl font-black text-slate-900 mb-4 italic">
Ejemplo Real: Salarios en una oficina
</h3> <p>
Imaginemos estos sueldos: <strong>$500, $500, $600, $700, $2500</strong> </p> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4"> <p> <strong>1. Cálculo de la Media:</strong> ($500 + $500 + $600 + $700 + $2500)
          / 5 = <strong>$960</strong>. (Notá cómo el sueldo alto de $2500 sube
          mucho el promedio).
</p> <p> <strong>2. Cálculo de la Mediana:</strong> Ordenamos: 500, 500, <u>600</u>, 700, 2500. El centro es <strong>$600</strong>.
</p> <p> <strong>3. Cálculo de la Moda:</strong> El valor que más se repite es <strong>$500</strong>.
</p> </div> <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">
¿Cuál es mejor usar?
</h3> <p>
El <strong>Promedio</strong> es ideal cuando los datos son parecidos entre
        sí. La <strong>Mediana</strong> es mucho mejor cuando hay valores muy altos
        o muy bajos que podrían "mentir" en el promedio (como en el ejemplo de los
        sueldos).
</p> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/promedio-mediana-moda.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/promedio-mediana-moda.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/promedio-mediana-moda.astro";
const $$url = "/matematica/promedio-mediana-moda";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PromedioMedianaModa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
