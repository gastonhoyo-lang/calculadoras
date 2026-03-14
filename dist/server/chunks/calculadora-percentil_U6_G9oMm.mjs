globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$CalculadoraPercentil = createComponent(($$result, $$props, $$slots) => {
  const fPosicion = "$$ P = \\frac{k \\times (n + 1)}{100} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Percentil Online | Hallar Rango Estadístico", "description": "Calcula el percentil de cualquier conjunto de datos. Aprende qué significa el percentil k, cómo se calcula y ejemplos prácticos de interpretación estadística." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-violet-600">Percentil</span> 📊
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Descubrí la posición relativa de un valor dentro de un grupo de datos de
        forma instantánea.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-8"> <div class="space-y-3"> <label for="inputDatosPercentil" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Conjunto de datos (separados por comas)</label> <textarea id="inputDatosPercentil" placeholder="Ej: 10, 25, 30, 45, 50, 60, 75, 80, 95" class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-violet-500 font-mono text-lg outline-none transition-all shadow-inner min-h-[150px]"></textarea> </div> <div class="grid md:grid-cols-2 gap-6"> <div class="space-y-3"> <label for="inputKPercentil" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Percentil a calcular (k)</label> <input type="number" id="inputKPercentil" placeholder="Ej: 75" min="1" max="99" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="flex items-end"> <button id="btnCalcularPercentil" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-violet-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Percentil
</button> </div> </div> </div> <div id="resultadoPercentilBox" class="hidden mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-violet-50 p-10 rounded-[2.5rem] border border-violet-100 text-center"> <span class="block text-xs font-bold text-violet-400 uppercase tracking-widest mb-2">Resultado del Percentil</span> <span id="resValorPercentil" class="block text-6xl font-black text-violet-700">0</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="bg-slate-900 p-6 rounded-3xl text-center"> <span id="resNTotal" class="block text-2xl font-black text-white">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase">Muestra (n)</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span id="resOrdenado" class="block text-sm font-medium text-slate-500 truncate px-4">---</span> <span class="text-[10px] font-bold text-slate-400 uppercase">Datos Ordenados</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es un Percentil y para qué sirve en estadística?
</h2> <p class="mb-6">
El <strong>percentil</strong> es una medida de posición no central que nos
        indica, una vez ordenados los datos de menor a mayor, el valor por debajo
        del cual se encuentra un determinado porcentaje de la muestra. Por ejemplo,
        si estás en el percentil 90 de una prueba, significa que obtuviste una puntuación
        igual o superior al 90% de los participantes.
</p> <p class="mb-6">
A diferencia del promedio, que puede verse afectado por valores extremos
        (outliers), los percentiles ofrecen una visión mucho más robusta de la
        distribución de los datos. Son fundamentales en pediatría (curvas de
        crecimiento), psicometría (pruebas de CI) y análisis financiero para
        determinar la exposición al riesgo.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula Matemática
</h3> <p class="mb-6">
Para calcular la posición ($P$) del percentil $k$ en una serie de $n$
        datos ordenados, utilizamos la siguiente fórmula:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fPosicion} </div> <p class="mb-6">Donde:</p> <ul class="list-disc pl-6 mb-8"> <li><strong>k:</strong> El percentil deseado (de 1 a 99).</li> <li><strong>n:</strong> El número total de elementos en la muestra.</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Reales
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-violet-600 mb-3 text-xl">Salud Infantil</h4> <p class="text-sm">
Los médicos utilizan percentiles para comparar el peso y la altura
            de un bebé con el promedio de su edad. Un percentil 50 indica que el
            bebé está exactamente en la media.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-violet-600 mb-3 text-xl">
Recursos Humanos
</h4> <p class="text-sm">
En bandas salariales, las empresas suelen fijar sueldos en el
            "percentil 75" para asegurarse de ser más competitivos que el 75%
            del mercado laboral.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos Paso a Paso
</h3> <section class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 1: Puntuaciones en un examen
</h4> <p class="mb-4">
Supongamos los siguientes datos de 10 estudiantes: 55, 60, 65, 70,
            75, 80, 85, 90, 95, 100. Queremos hallar el percentil 25 (Q1).
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
n = 10 | k = 25 <br>
Posición = (25 * (10 + 1)) / 100 = 2.75 <br>
Resultado: Se interpola entre el segundo y tercer valor. Valor aprox:
            63.75.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Velocidad de conexión
</h4> <p class="mb-4">
Si tu velocidad es de 50 Mbps y estás en el percentil 80 de tu
            ciudad, el 80% de tus vecinos navega a 50 Mbps o menos.
</p> </div> </section> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre Percentil y Porcentaje
</h3> <p class="mb-6">
Es un error común confundirlos. El <strong>porcentaje</strong> es una cantidad
        sobre 100 (ej: saqué un 80% de respuestas correctas). El <strong>percentil</strong> es una posición comparativa (ej: mi nota fue mejor que la del 80% de los
        alumnos). Podés tener un porcentaje bajo (ej: 40%) pero estar en un percentil
        alto (ej: 90) si el examen fue extremadamente difícil para todos.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-violet-400 font-bold mb-2">Tip Estadístico:</p> <p class="text-sm text-slate-400">
Los percentiles 25, 50 y 75 se conocen como cuartiles (Q1, Q2 y Q3).
          El percentil 50 es siempre equivalente a la Mediana del conjunto de
          datos.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-percentil.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-percentil.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-percentil.astro";
const $$url = "/matematica/calculadora-percentil";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraPercentil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
