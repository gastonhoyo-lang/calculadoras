globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$ContadorDePalabrasUnicas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContadorDePalabrasUnicas;
  const formulaTTR = "$$ TTR = \\frac{V}{N} $$";
  const formulaHeredan = "$$ H = \\frac{\\log V}{\\log N} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Palabras Únicas | Analizador de Riqueza Léxica Online", "description": "Calcula el número de palabras únicas en tu texto. Analiza el Type-Token Ratio (TTR) y la diversidad de vocabulario para mejorar tu SEO y redacción." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Contador de <span class="text-emerald-600">Palabras Únicas</span> 🧠
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Mide la riqueza de tu vocabulario y evita la repetición excesiva. La
        herramienta definitiva para escritores y analistas SEO.
</p> </header> <section class="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-6"> <textarea id="uniqueWordsInput" rows="10" placeholder="Pega tu ensayo, artículo o lista de palabras aquí..." class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-emerald-500 font-normal text-lg outline-none transition-all shadow-inner resize-y"></textarea> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center shadow-sm"> <span class="block text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">Palabras Totales</span> <div id="totalWords" class="text-3xl font-black text-slate-900">
0
</div> </div> <div class="bg-emerald-500 p-6 rounded-3xl text-center shadow-lg transform hover:scale-105 transition-transform"> <span class="block text-xs font-bold text-emerald-100 uppercase tracking-widest mb-2">Palabras Únicas</span> <div id="uniqueWords" class="text-3xl font-black text-white">0</div> </div> <div class="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center shadow-sm"> <span class="block text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">Riqueza Léxica</span> <div id="lexicalRichness" class="text-3xl font-black text-slate-900">
0%
</div> </div> </div> <button id="clearUniqueBtn" class="w-full py-4 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
Borrar contenido y reiniciar
</button> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es un Contador de Palabras Únicas y por qué es vital para el SEO?
</h2> <p class="mb-6">
El <strong>contador de palabras únicas</strong> es una herramienta de análisis
        lingüístico avanzada que permite identificar cuántos términos distintos componen
        un texto, eliminando las repeticiones. A diferencia de un contador de palabras
        tradicional, esta métrica se enfoca en la <strong>diversidad léxica</strong>. En el mundo del marketing de contenidos y el SEO, la variedad de
        vocabulario es un indicador de calidad que Google valora positivamente,
        ya que suele estar asociado a un contenido experto, profundo y bien
        estructurado.
</p> <p class="mb-6">
Cuando un redactor utiliza repetidamente las mismas palabras, el texto
        se vuelve monótono para el usuario y puede ser interpretado como "pobre"
        por los algoritmos de procesamiento de lenguaje natural (NLP). Al
        analizar las palabras únicas, podemos optimizar nuestro escrito para
        incluir sinónimos y términos semánticamente relacionados (LSI),
        mejorando así la relevancia temática.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Matemática de la Diversidad Léxica
</h3> <p class="mb-4">
Lingüistas y analistas de datos utilizan principalmente el <strong>Type-Token Ratio (TTR)</strong> para medir qué tan variado es un texto. La fórmula matemática es la siguiente:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaTTR} </div> <p class="mb-6">Donde las variables se definen como:</p> <ul class="list-disc pl-6 mb-8 space-y-2"> <li> <strong>V:</strong> Representa el número de tipos (palabras únicas).
</li> <li> <strong>N:</strong> Representa el número total de tokens (todas las palabras
          del texto).
</li> </ul> <p class="mb-6">
Un TTR cercano a 1 (o 100%) indica que casi no hay repeticiones, algo
        común en textos muy cortos o listas de vocabulario. Sin embargo, en
        textos largos, el TTR tiende a bajar naturalmente. Para corregir este
        sesgo en documentos extensos, se utiliza a veces el Índice de Guiraud o
        la fórmula de Herdan:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaHeredan} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Prácticos
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-emerald-600 mb-3">Optimización SEO</h4> <p class="text-sm leading-relaxed">
Permite identificar si estás abusando de tu palabra clave principal
            (keyword stuffing) y te obliga a buscar términos relacionados para
            enriquecer el perfil semántico del artículo.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-emerald-600 mb-3">Análisis Académico</h4> <p class="text-sm leading-relaxed">
Útil para evaluar el nivel de vocabulario de estudiantes o para el
            análisis de estilo literario en obras clásicas, comparando la
            riqueza entre diferentes autores.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos y Ejercicios
</h3> <div class="space-y-6 mb-12"> <div class="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100"> <p class="font-bold mb-3">Ejemplo 1: Frase con repetición</p> <p class="text-sm italic">
"El gato corre porque el gato tiene hambre."
</p> <ul class="mt-3 text-xs space-y-1"> <li><strong>Totales:</strong> 8 palabras.</li> <li> <strong>Únicas:</strong> 6 ("el", "gato", "corre", "porque", "tiene",
              "hambre").
</li> <li><strong>TTR:</strong> 75%.</li> </ul> </div> <div class="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100"> <p class="font-bold mb-3">Ejemplo 2: Diversidad alta</p> <p class="text-sm italic">
"Aquel felino huye velozmente, pues necesita alimentarse pronto."
</p> <ul class="mt-3 text-xs space-y-1"> <li><strong>Totales:</strong> 8 palabras.</li> <li><strong>Únicas:</strong> 8.</li> <li><strong>TTR:</strong> 100%.</li> </ul> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Conclusión y Consejos Técnicos
</h3> <p class="mb-6">
No busques siempre un 100% de riqueza léxica; la repetición de ciertas
        palabras funcionales (preposiciones, artículos) es necesaria para la
        coherencia. Sin embargo, en tus palabras clave y sustantivos
        principales, trata de mantener un equilibrio. Nuestra herramienta te
        permite monitorizar esta salud textual en tiempo real.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-sm text-slate-400">
"La riqueza léxica es el reflejo de una mente que explora todos los
          rincones del diccionario."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/contador-de-palabras-unicas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/contador-de-palabras-unicas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/contador-de-palabras-unicas.astro";
const $$url = "/utiles/contador-de-palabras-unicas/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorDePalabrasUnicas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
