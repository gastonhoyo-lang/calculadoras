globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraDesviacionEstandar = createComponent(($$result, $$props, $$slots) => {
  const sMedia = "x̄";
  const sSigma = "σ";
  const sS = "s";
  const sN = "n";
  const fMedia = "$$ \\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} $$";
  const fDesviacion = "$$ \\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}} $$";
  const fDesviacionMuestral = "$$ s = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n - 1}} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Desviación Estándar Online | Poblacional y Muestral", "description": "Calcula la desviación estándar, varianza y media de un conjunto de datos. Guía completa sobre dispersión estadística con ejemplos prácticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Desviación <span class="text-indigo-600">Estándar</span> 📉
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Analizá la dispersión de tus datos de forma profesional. Obtené la
        media, varianza y desviación instantáneamente.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-8"> <div class="space-y-3"> <label for="inputDatosStd" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Conjunto de valores (separados por comas o espacios)</label> <textarea id="inputDatosStd" placeholder="Ej: 10, 12, 23, 23, 16, 23, 21, 16" class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-indigo-500 font-mono text-lg outline-none transition-all shadow-inner min-h-[120px]"></textarea> </div> <button id="btnCalcularStd" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Dispersión
</button> </div> <div id="resultadoStdBox" class="hidden mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 text-center"> <span class="block text-xs font-bold text-indigo-400 uppercase mb-2">Desviación Estándar (${sS})</span> <span id="resStdMuestral" class="block text-5xl font-black text-indigo-700">0</span> <p class="text-[10px] text-indigo-400 mt-2 font-bold uppercase">
Resultado Muestral
</p> </div> <div class="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-center"> <span class="block text-xs font-bold text-slate-400 uppercase mb-2">Desviación Poblacional (${sSigma})</span> <span id="resStdPob" class="block text-5xl font-black text-slate-700">0</span> <p class="text-[10px] text-slate-400 mt-2 font-bold uppercase">
Resultado Poblacional
</p> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center"> <span id="resMedia" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] text-slate-400 uppercase font-bold">Media (${sMedia})</span> </div> <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center"> <span id="resVarianza" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] text-slate-400 uppercase font-bold">Varianza (${sS}²)</span> </div> <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center"> <span id="resSumatoria" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] text-slate-400 uppercase font-bold">Suma Σ</span> </div> <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center"> <span id="resCount" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] text-slate-400 uppercase font-bold">Muestra (${sN})</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es la Desviación Estándar y por qué es vital?
</h2> <p class="mb-6">
La <strong>desviación estándar</strong> es una medida que informa sobre cuánto
        se alejan los valores de un conjunto de datos respecto a su media aritmética.
        En términos simples, nos indica qué tan dispersos están los números. Si la
        desviación es baja, los datos están muy agrupados cerca del promedio; si es
        alta, los datos están muy extendidos.
</p> <p class="mb-6">
Imagina dos equipos de tiro al blanco. En ambos, el promedio de los
        disparos está en el centro. Sin embargo, en el Equipo A todos los
        disparos están a milímetros del centro, mientras que en el Equipo B los
        disparos están repartidos por todo el tablero. El Equipo A tiene una <strong>desviación estándar baja</strong>, mientras que el Equipo B tiene una <strong>desviación alta</strong>.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Las Fórmulas Estadísticas
</h3> <p class="mb-4">
Para calcular la desviación estándar, primero debemos obtener la media:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fMedia} </div> <p class="mb-4">
Luego, aplicamos la fórmula de la desviación estándar poblacional:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDesviacion} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre Muestral y Poblacional
</h3> <p class="mb-6">
Esta es la duda más común. La <strong>poblacional</strong> se usa cuando tienes
        los datos de todos los individuos del grupo. La <strong>muestral</strong> se usa cuando trabajas con una pequeña parte de un grupo más grande. En
        la muestra, usamos el valor menos uno en el denominador para evitar sesgos:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDesviacionMuestral} </div> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de Aplicación
</h2> <div class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm"> <h4 class="text-xl font-bold text-indigo-700 mb-4">
Ejemplo 1: Control de Calidad en una Fábrica
</h4> <p class="mb-4 text-sm">
Una máquina llena botellas de 500ml. Si medimos 5 botellas y los
            valores son: 500, 502, 498, 501, 499.
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
Media: 500ml <br>
Desviación: ~1.58ml <br>
Interpretación: El proceso es muy estable porque la desviación es mínima.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm"> <h4 class="text-xl font-bold text-indigo-700 mb-4">
Ejemplo 2: Finanzas e Inversiones
</h4> <p class="mb-4 text-sm">
En la bolsa, la desviación estándar se conoce como volatilidad. Si
            una acción tiene una rentabilidad promedio del 10% con una
            desviación del 15%, es una inversión de alto riesgo porque los
            resultados pueden variar drásticamente de ese 10%.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm"> <h4 class="text-xl font-bold text-indigo-700 mb-4">
Ejemplo 3: Notas de un Examen
</h4> <p class="mb-4 text-sm">
Si el promedio de una clase es 7, pero la desviación es 3, significa
            que hay muchos alumnos con notas excelentes y muchos con notas
            bajas. Si la desviación fuera 0.5, casi todos estarían cerca del 7.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Pasos para calcularla manualmente
</h3> <ol class="list-decimal pl-6 mb-8 space-y-4"> <li>Calculá el promedio de todos los números.</li> <li>
A cada número, restale el promedio y elevá el resultado al cuadrado.
</li> <li>Sumá todos esos cuadrados obtenidos.</li> <li>
Dividí esa suma por el total de números (población) o total menos uno
          (muestra).
</li> <li>
Calculá la raíz cuadrada del resultado final. ¡Esa es tu desviación!
</li> </ol> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-indigo-400 font-bold mb-2">Tip Educativo:</p> <p class="text-sm text-slate-400">
La desviación estándar siempre se expresa en las mismas unidades que
          los datos originales. Si mides metros, la desviación está en metros.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-desviacion-estandar.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-desviacion-estandar.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-desviacion-estandar.astro";
const $$url = "/utiles/calculadora-desviacion-estandar/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDesviacionEstandar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
