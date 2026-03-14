globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$ContadorDeVocales = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContadorDeVocales;
  const formulaFrecuencia = "$$ f_i = \\frac{n_v}{N_t} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Vocales Online | Analiza la Fonética de tu Texto", "description": "Cuenta vocales de forma rápida y precisa. Analiza la frecuencia de A, E, I, O, U en tus textos con nuestro contador gratuito y profesional." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Contador de <span class="text-orange-600">Vocales</span> 🗣️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Desglosa la estructura fonética de tus palabras. Ideal para lingüistas,
        estudiantes y optimización de legibilidad.
</p> </header> <section class="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-6"> <textarea id="vowelInput" rows="8" placeholder="Escribe o pega tu texto aquí..." class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-orange-500 font-normal text-lg outline-none transition-all shadow-inner resize-y"></textarea> <div class="bg-slate-900 rounded-3xl p-6 text-center shadow-xl"> <span class="text-orange-400 text-xs font-bold uppercase tracking-widest">Total de Vocales</span> <div id="totalVowels" class="text-5xl font-black text-white mt-2">
0
</div> </div> <div class="grid grid-cols-5 gap-3"> <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-center"> <span class="block text-xl font-black text-orange-600">A</span> <div id="countA" class="text-lg font-bold text-slate-700">0</div> </div> <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-center"> <span class="block text-xl font-black text-orange-600">E</span> <div id="countE" class="text-lg font-bold text-slate-700">0</div> </div> <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-center"> <span class="block text-xl font-black text-orange-600">I</span> <div id="countI" class="text-lg font-bold text-slate-700">0</div> </div> <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-center"> <span class="block text-xl font-black text-orange-600">O</span> <div id="countO" class="text-lg font-bold text-slate-700">0</div> </div> <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-center"> <span class="block text-xl font-black text-orange-600">U</span> <div id="countU" class="text-lg font-bold text-slate-700">0</div> </div> </div> <button id="clearVowels" class="w-full py-4 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-orange-600 transition-colors">
Limpiar análisis
</button> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Para qué sirve un contador de vocales?
</h2> <p class="mb-6">
El <strong>contador de vocales</strong> es una herramienta especializada en
        el análisis lingüístico y estadístico de textos. Aunque a primera vista pueda
        parecer una utilidad simple, su aplicación es vasta en campos como la criptografía
        básica, la enseñanza de idiomas, la métrica poética y el análisis de legibilidad.
        Las vocales son el núcleo de las sílabas en el idioma español, y su distribución
        determina gran parte de la sonoridad y el ritmo de una frase.
</p> <p class="mb-6">
Desde el punto de vista del <strong>SEO técnico</strong> y la redacción de
        contenidos, un análisis de la frecuencia de ciertos sonidos puede ayudar a
        identificar patrones de repetición excesiva (asonancia) que podrían dificultar
        la lectura fluida por parte del usuario. Una distribución equilibrada de las
        vocales suele correlacionarse con una mejor experiencia de lectura.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Matemática detrás de la Frecuencia Vocálica
</h3> <p class="mb-4">
Para los entusiastas de los datos, podemos calcular la frecuencia
        relativa de una vocal específica en un cuerpo de texto utilizando la
        siguiente fórmula:
</p> <div class="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100"> ${formulaFrecuencia} </div> <p class="mb-6">Donde:</p> <ul class="list-disc pl-6 mb-8 space-y-2"> <li> <strong>f_i:</strong> Es la frecuencia relativa de la vocal analizada.
</li> <li> <strong>n_v:</strong> Representa el número total de veces que aparece esa
          vocal.
</li> <li> <strong>N_t:</strong> Es el número total de caracteres (o letras totales)
          en el texto analizado.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Reales
</h3> <div class="grid md:grid-cols-2 gap-6 mb-12"> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-orange-600 mb-2">Educación Primaria</h4> <p class="text-sm">
Docentes utilizan esta herramienta para ayudar a niños en la etapa
            de lectoescritura a identificar visual y cuantitativamente la
            presencia de sonidos vocálicos en oraciones simples.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-orange-600 mb-2">Desarrollo de Software</h4> <p class="text-sm">
Programadores que están aprendiendo lógica de manipulación de
            strings utilizan el conteo de vocales como un ejercicio fundamental
            de algoritmos de iteración.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Conteo
</h3> <p class="mb-4 italic">
Analicemos algunas frases para observar cómo se distribuyen las vocales:
</p> <div class="space-y-6 mb-12"> <div class="p-6 bg-orange-50 rounded-3xl border border-orange-100"> <p class="font-bold mb-2">Ejemplo 1: El abecedario</p> <p class="text-sm leading-relaxed">
Texto: <em>"Murciélago"</em> <br><strong>Resultado:</strong> Contiene las 5 vocales (A, E, I, O,
            U) exactamente una vez. Es lo que se conoce como una palabra panvocálica.
</p> </div> <div class="p-6 bg-orange-50 rounded-3xl border border-orange-100"> <p class="font-bold mb-2">Ejemplo 2: Frase corta</p> <p class="text-sm leading-relaxed">
Texto: <em>"Astro es genial"</em> <br><strong>Análisis:</strong> A (2), E (2), I (1), O (1), U (0). Total
            de vocales: 6.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Comparativa: Vocales vs. Consonantes
</h3> <p class="mb-6">
En el idioma español, aproximadamente el 45% de los caracteres en un
        texto estándar son vocales. La "E" y la "A" suelen ser las más
        frecuentes debido a su presencia en artículos, preposiciones y
        terminaciones verbales comunes. Utilizar nuestro <strong>analizador de vocales</strong> te permite verificar si tu texto cumple con estos promedios estadísticos
        o si tiene una composición inusual.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12"> <p class="text-sm text-slate-400">
"Las vocales son la respiración del lenguaje; sin ellas, el habla
          sería un choque de piedras."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/contador-de-vocales.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/contador-de-vocales.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/contador-de-vocales.astro";
const $$url = "/utiles/contador-de-vocales";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorDeVocales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
