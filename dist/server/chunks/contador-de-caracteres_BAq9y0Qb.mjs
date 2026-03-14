globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$ContadorDeCaracteres = createComponent(($$result, $$props, $$slots) => {
  const formulaDensidad = "$$ \\text{Densidad} = \\left( \\frac{\\text{Repeticiones}}{\\text{Total de Palabras}} \\right) \\times 100 $$";
  const formulaLectura = "$$ \\text{Tiempo} = \\frac{\\text{Palabras}}{200} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Caracteres y Palabras Online | Herramienta de Redacción SEO", "description": "Contá caracteres, palabras y párrafos en tiempo real. Analizá la legibilidad y optimizá tus textos para redes sociales y SEO con nuestra herramienta gratuita." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Contador de <span class="text-violet-600">Caracteres y Palabras</span> ✍️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Analizá la extensión de tu contenido, optimizá para límites de redes
        sociales y mejorá tu redacción SEO.
</p> </header> <section class="bg-white p-6 md:p-10 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-4"> <label for="textAreaContador" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Pegá o escribí tu texto aquí</label> <textarea id="textAreaContador" rows="10" placeholder="Comenzá a escribir..." class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-violet-500 font-medium text-lg outline-none transition-all shadow-inner resize-y"></textarea> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"> <div class="bg-violet-50 p-6 rounded-3xl border border-violet-100 text-center"> <span id="countCaracteres" class="block text-3xl font-black text-violet-700">0</span> <span class="text-xs font-bold text-violet-400 uppercase">Caracteres</span> </div> <div class="bg-slate-900 p-6 rounded-3xl text-center"> <span id="countPalabras" class="block text-3xl font-black text-white">0</span> <span class="text-xs font-bold text-slate-400 uppercase">Palabras</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span id="countParrafos" class="block text-3xl font-black text-slate-700">0</span> <span class="text-xs font-bold text-slate-400 uppercase">Párrafos</span> </div> <div id="boxLectura" class="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center"> <span id="timeLectura" class="block text-3xl font-black text-emerald-700">0m</span> <span class="text-xs font-bold text-emerald-400 uppercase">Lectura</span> </div> </div> <div class="mt-8"> <button id="btnLimpiarTexto" class="w-full md:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95">
Limpiar Texto
</button> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Por qué es vital usar un contador de caracteres y palabras?
</h2> <p class="mb-6">
En la era de la comunicación digital, la brevedad y la precisión son
        activos invaluables. Un <strong>contador de caracteres</strong> no es solo
        una herramienta de medición; es un aliado estratégico para redactores, especialistas
        en marketing digital y estudiantes. Ya sea que estés redactando una meta-descripción
        para Google, un tweet con límite de caracteres o un ensayo académico, conocer
        la extensión exacta de tu texto te permite ajustar el mensaje para que sea
        más efectivo.
</p> <p class="mb-6">
La longitud del contenido influye directamente en la <strong>legibilidad</strong> y el <strong>SEO</strong>. Google, por ejemplo, suele truncar los
        títulos de los resultados de búsqueda después de los 60 caracteres,
        mientras que las publicaciones de redes sociales tienen límites
        específicos que, si se superan, pueden arruinar la experiencia del
        usuario al esconder información relevante bajo un botón de "ver más".
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Cómo funciona nuestra herramienta?
</h3> <p class="mb-6">
Nuestra herramienta procesa el texto en tiempo real utilizando
        algoritmos de JavaScript que identifican espacios en blanco, saltos de
        línea y patrones de puntuación. A diferencia de otros contadores
        simples, este analiza la estructura de los párrafos y calcula el tiempo
        estimado de lectura basado en un promedio de 200 palabras por minuto.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La importancia del Tiempo de Lectura
</h3> <p class="mb-4">
El tiempo de lectura es una métrica de UX (User Experience) que ayuda al
        lector a decidir si desea comprometerse con el contenido. La fórmula
        utilizada para este cálculo es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaLectura} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Límites de caracteres en Redes Sociales
</h3> <p class="mb-6">
Cada plataforma tiene sus propias reglas. Mantenerse dentro de estos
        límites asegura que tu mensaje se visualice correctamente:
</p> <div class="grid md:grid-cols-2 gap-6 mb-12"> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-violet-600 mb-2">X (Twitter)</h4> <p class="text-sm">
El límite estándar es de <strong>280 caracteres</strong>. Nuestra
            herramienta te ayuda a no excederte ni un solo espacio.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-violet-600 mb-2">Meta Descripciones SEO</h4> <p class="text-sm">
Se recomienda mantenerlas entre <strong>150 y 160 caracteres</strong> para evitar que Google las corte en los resultados.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-violet-600 mb-2">Instagram (Bio)</h4> <p class="text-sm">
Tenés un límite de <strong>150 caracteres</strong> para presentarte al
            mundo. Cada letra cuenta.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-violet-600 mb-2">LinkedIn (Posts)</h4> <p class="text-sm">
Aunque el límite es amplio (3000 caracteres), los primeros <strong>210</strong> son cruciales antes del corte.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Análisis de Densidad de Palabras Clave
</h3> <p class="mb-6">
Aunque hoy en día el SEO se basa más en entidades y semántica, evitar la
        sobreoptimización (Keyword Stuffing) sigue siendo importante. Podés
        calcular la densidad de tus palabras clave principales usando:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaDensidad} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Optimización
</h3> <ol class="list-decimal pl-6 mb-8 space-y-4"> <li> <strong>Redacción de Copys:</strong> Un copywriter necesita que su título
          de anuncio no pase de 30 caracteres. Pega su idea y ajusta sinónimos hasta
          lograr la medida justa.
</li> <li> <strong>Ensayos Académicos:</strong> Si un profesor pide un resumen de exactamente
          500 palabras, el contador le permite al alumno ver el progreso párrafo a
          párrafo.
</li> <li> <strong>Guiones de Video:</strong> Un locutor sabe que lee aproximadamente
          150 palabras por minuto. Si su guion tiene 450 palabras, sabe que el video
          durará 3 minutos.
</li> </ol> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Consejos para mejorar la legibilidad
</h3> <p class="mb-6">
No se trata solo de cuántas palabras escribís, sino de cómo las
        distribuís. Intentá que tus párrafos no superen las 4 o 5 líneas (unas
        60-80 palabras). Esto genera "aire" visual y facilita la lectura en
        dispositivos móviles. Usá oraciones cortas para temas complejos y variá
        la longitud para crear un ritmo agradable.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-violet-400 font-bold mb-2">Tip de Escritura:</p> <p class="text-sm text-slate-400">
Menos es más. Si podés decir en 50 palabras lo que ibas a decir en
          100, tu lector te lo agradecerá.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/contador-de-caracteres.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/contador-de-caracteres.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/contador-de-caracteres.astro";
const $$url = "/utiles/contador-de-caracteres/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorDeCaracteres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
