globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$CalculadoraBinomial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraBinomial;
  const sN = "n";
  const sK = "k";
  const sP = "p";
  const sQ = "q";
  const sX = "X";
  const fFormulaBinomial = "$$ P(X = k) = \\binom{n}{k} p^k q^{n-k} $$";
  const fCombinaciones = "$$ \\binom{n}{k} = \\frac{n!}{k!(n-k)!} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Probabilidad Binomial Online | Paso a Paso", "description": "Calcula la probabilidad binomial de un evento. Halla la probabilidad exacta de obtener k éxitos en n ensayos con nuestra herramienta estadística." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Probabilidad <span class="text-rose-600">Binomial</span> 🎲
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Calculá la probabilidad exacta de éxito en experimentos de múltiples
        ensayos independientes.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-3 gap-6 mb-8"> <div class="space-y-3"> <label for="inputNBin" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Ensayos (${sN})</label> <input type="number" id="inputNBin" placeholder="Ej: 10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-3"> <label for="inputKBin" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Éxitos (${sK})</label> <input type="number" id="inputKBin" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-3"> <label for="inputPBin" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Probabilidad (${sP})</label> <input type="number" step="0.01" id="inputPBin" placeholder="Ej: 0.5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularBinomial" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-rose-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Probabilidad
</button> <div id="boxResultadoBinomial" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-rose-50 p-10 rounded-[2.5rem] border border-rose-100 text-center"> <span class="block text-xs font-bold text-rose-400 uppercase mb-2 tracking-widest">P(${sX} = ${sK})</span> <span id="resValorBinomial" class="block text-6xl font-black text-rose-700">0%</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resCombinaciones" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Combinaciones</span> </div> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resMediaBin" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Valor Esperado</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es la Probabilidad Binomial?
</h2> <p class="mb-6">
La <strong>distribución de probabilidad binomial</strong> es un modelo estadístico
        que describe el número de éxitos al realizar una serie de experimentos independientes
        entre sí, donde cada experimento tiene exactamente dos resultados posibles:
        éxito o fracaso.
</p> <p class="mb-6">
Este concepto es fundamental en campos tan diversos como el control de
        calidad industrial, la genética, el marketing digital (tests A/B) y las
        finanzas. Para que un fenómeno pueda ser analizado mediante una
        calculadora binomial, debe cumplir con cuatro condiciones: el número de
        ensayos es fijo, cada ensayo es independiente, solo hay dos resultados
        posibles y la probabilidad de éxito es constante en cada ensayo.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula Matemática
</h3> <p class="mb-6">
Para hallar la probabilidad de obtener exactamente ${sK} éxitos en ${sN} intentos,
        utilizamos la siguiente expresión:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fFormulaBinomial} </div> <p class="mb-6">Donde las variables se definen como:</p> <ul class="list-disc pl-6 mb-8 space-y-2"> <li><strong>${sN}:</strong> Número total de ensayos o experimentos.</li> <li><strong>${sK}:</strong> Número de éxitos deseados.</li> <li> <strong>${sP}:</strong> Probabilidad de éxito en un solo ensayo (expresada
          de 0 a 1).
</li> <li> <strong>${sQ}:</strong> Probabilidad de fracaso, calculada como 1 - ${sP}.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
El Coeficiente Binomial
</h3> <p class="mb-6">
La parte inicial de la fórmula representa las combinaciones posibles de ${sN} elementos tomados de ${sK} en ${sK}. Esto nos dice de cuántas formas
        distintas pueden ocurrir esos éxitos dentro de la secuencia de ensayos:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fCombinaciones} </div> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos Paso a Paso
</h2> <div class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm"> <h4 class="text-xl font-bold text-rose-700 mb-4">
Ejemplo 1: Lanzamiento de Monedas
</h4> <p class="mb-4 text-sm">
Si lanzas una moneda equilibrada (${sP} = 0.5) 10 veces, ¿cuál es la probabilidad
            de obtener exactamente 5 caras?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200"> ${sN} = 10, ${sK} = 5, ${sP} = 0.5 <br>
Resultado: ~24.61%.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm"> <h4 class="text-xl font-bold text-rose-700 mb-4">
Ejemplo 2: Control de Calidad
</h4> <p class="mb-4 text-sm">
Una fábrica produce componentes con un 2% de defectos (${sP} = 0.02). En
            un lote de 50 componentes, ¿qué probabilidad hay de encontrar exactamente
            1 defectuoso?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200"> ${sN} = 50, ${sK} = 1, ${sP} = 0.02 <br>
Resultado: ~37.16%.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm"> <h4 class="text-xl font-bold text-rose-700 mb-4">
Ejemplo 3: Baloncesto
</h4> <p class="mb-4 text-sm">
Un jugador tiene una efectividad del 80% en tiros libres. Si tira 5
            veces, ¿cuál es la probabilidad de que enceste los 5?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200"> ${sN} = 5, ${sK} = 5, ${sP} = 0.8 <br>
Resultado: ~32.77%.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre Probabilidad Exacta y Acumulada
</h3> <p class="mb-6">
Es importante distinguir entre la probabilidad de obtener <strong>exactamente</strong> ${sK} éxitos y la probabilidad de obtener <strong>al menos</strong> ${sK} éxitos. Esta calculadora se enfoca en el valor puntual. La probabilidad
        acumulada requiere sumar los resultados binomiales para todos los valores
        desde 0 hasta ${sK}, o desde ${sK} hasta ${sN}.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-rose-400 font-bold mb-2">Consejo Estadístico:</p> <p class="text-sm text-slate-400">
Cuando el número de ensayos (${sN}) es muy grande y la probabilidad (${sP}) es muy pequeña, la distribución binomial se puede aproximar a una
          distribución de Poisson para facilitar los cálculos manuales.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro";
const $$url = "/matematica/calculadora-binomial";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraBinomial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
