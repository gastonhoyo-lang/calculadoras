globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$ContadorKeywords = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContadorKeywords;
  const fDensidadSimple = "$$ D = \\left( \\frac{n_k}{N_t} \\right) \\times 100 $$";
  const fDensidadIdeal = "$$ 1\\% < D < 2.5\\% $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Densidad de Keywords | Analizador SEO Online", "description": "Analizá la frecuencia y densidad de palabras clave en tu contenido. Evitá el keyword stuffing y optimizá tu relevancia para Google de forma gratuita." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Analizador de <span class="text-orange-600">Densidad de Keywords</span> 📊
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Detectá sobre-optimización y asegurate de que tus palabras clave
        principales tengan el peso justo.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-6"> <div class="space-y-3"> <label for="areaTextoKeywords" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Contenido del Artículo</label> <textarea id="areaTextoKeywords" placeholder="Pegá tu texto aquí para analizar la frecuencia de palabras..." class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-orange-500 font-medium text-lg outline-none transition-all shadow-inner min-h-[300px]"></textarea> </div> <button id="btnAnalizarKeywords" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-xl">
Analizar Densidad
</button> </div> <div id="contenedorResultadosK" class="hidden mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="bg-orange-50 p-4 rounded-3xl border border-orange-100 text-center"> <span id="statTotalPalabras" class="block text-2xl font-black text-orange-700">0</span> <span class="text-[10px] font-bold text-orange-400 uppercase">Palabras</span> </div> <div class="bg-slate-50 p-4 rounded-3xl border border-slate-100 text-center"> <span id="statUnicas" class="block text-2xl font-black text-slate-700">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase">Únicas</span> </div> </div> <div class="overflow-x-auto"> <table class="w-full text-left"> <thead> <tr class="text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100"> <th class="p-4">Palabra Clave</th> <th class="p-4">Repeticiones</th> <th class="p-4 text-right">Densidad</th> </tr> </thead> <tbody id="tablaKeywordsBody" class="text-slate-700 font-medium"></tbody> </table> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es la densidad de palabras clave y por qué importa?
</h2> <p class="mb-6">
La <strong>densidad de palabras clave</strong> (keyword density) es el porcentaje
        de veces que una palabra o frase aparece en un texto en comparación con el
        número total de palabras. En los inicios del SEO, repetir una palabra cientos
        de veces era suficiente para rankear, pero hoy Google utiliza algoritmos mucho
        más sofisticados como BERT o RankBrain. Sin embargo, la densidad sigue siendo
        un indicador fundamental para entender de qué trata un contenido.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula Matemática de la Densidad
</h3> <p class="mb-6">
Para calcular este valor de forma técnica, utilizamos la siguiente
        relación:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDensidadSimple} </div> <p class="mb-6">Donde:</p> <ul class="list-disc pl-6 mb-8"> <li><strong>D:</strong> Densidad porcentual de la palabra clave.</li> <li> <strong>n_k:</strong> Número de veces que aparece esa palabra específica.
</li> <li> <strong>N_t:</strong> Número total de palabras en el texto analizado.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Cuál es la densidad ideal para SEO?
</h3> <p class="mb-6">
No existe un número mágico universal, pero la mayoría de los expertos en
        SEO técnico coinciden en un rango saludable para evitar penalizaciones
        por <em>Keyword Stuffing</em> (sobre-optimización):
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDensidadIdeal} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Análisis
</h3> <div class="space-y-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-orange-600 mb-3 text-xl">
Ejemplo 1: Artículo de Blog Informativo
</h4> <p class="mb-4">
Supongamos un texto de 1000 palabras sobre "recetas de cocina".
</p> <ul class="text-sm space-y-2"> <li>
Palabra "Receta" aparece 15 veces: <strong>1.5%</strong> (Óptimo)
</li> <li>
Palabra "Cocinar" aparece 45 veces: <strong>4.5%</strong> (¡Peligro
              de spam!)
</li> </ul> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-orange-600 mb-3 text-xl">
Ejemplo 2: Descripción de Producto
</h4> <p class="mb-4">
En textos cortos (e.g. 200 palabras), la densidad tiende a ser más
            alta naturalmente.
</p> <p class="text-sm">
Si "Zapatillas" aparece 4 veces, la densidad es del 2%. En este
            contexto, es aceptable por la brevedad del texto.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Keyword Stuffing: El error que debés evitar
</h3> <p class="mb-6">
El <em>Keyword Stuffing</em> ocurre cuando intentás manipular los rankings
        de Google repitiendo la palabra clave de forma antinatural. Esto no solo degrada
        la experiencia del usuario, sino que puede resultar en una degradación algorítmica
        de tu sitio. Nuestra herramienta te ayuda a identificar esas palabras que
        "saltan" por encima del 3% para que puedas reemplazarlas por sinónimos.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Uso de Semántica Latente (LSI)
</h3> <p class="mb-6">
En lugar de repetir siempre la misma keyword, Google valora el uso de
        palabras relacionadas semánticamente. Por ejemplo, si hablás de
        "Contador de Caracteres", palabras como "longitud", "texto",
        "herramienta" y "redacción" ayudan a contextualizar sin necesidad de
        aumentar la densidad de la keyword principal.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-orange-400 font-bold mb-2">Consejo de Experto:</p> <p class="text-sm text-slate-400">
Escribí primero para humanos, luego usá esta herramienta para pulir
          los excesos técnicos antes de publicar.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro";
const $$url = "/seo/contador-keywords";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorKeywords,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
