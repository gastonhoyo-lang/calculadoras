globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$ContadorPalabras = createComponent(($$result, $$props, $$slots) => {
  const fDensidadKeyword = "$$ D = \\frac{N_{kw}}{N_{total}} \\times 100 $$";
  const fPromedioLectura = "$$ T = \\frac{N_{total}}{200} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Palabras SEO | Analizador de Texto y Densidad", "description": "Contador de palabras avanzado para SEO. Analiza la longitud de tu contenido, tiempo de lectura y densidad de palabras clave para mejorar tu posicionamiento." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Contador de <span class="text-indigo-600">Palabras SEO</span> ✍️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Analizá la extensión de tus artículos, contá caracteres y optimizá tu
        contenido para los algoritmos de búsqueda.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-6"> <div class="space-y-3"> <label for="seoTextInput" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Tu contenido SEO</label> <textarea id="seoTextInput" placeholder="Pega o escribe tu artículo aquí para comenzar el análisis..." class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-indigo-500 font-medium text-lg outline-none transition-all shadow-inner min-h-[350px]"></textarea> </div> <button id="btnContarSeo" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-xl">
Analizar Texto
</button> </div> <div id="seoResultBox" class="hidden mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 text-center"> <span id="resPalabras" class="block text-4xl font-black text-indigo-700">0</span> <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Palabras</span> </div> <div class="bg-slate-900 p-6 rounded-3xl text-center"> <span id="resCaracteres" class="block text-4xl font-black text-white">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Caracteres</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span id="resLectura" class="block text-2xl font-black text-slate-700">0 min</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lectura</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span id="resParrafos" class="block text-4xl font-black text-slate-700">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Párrafos</span> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Por qué es vital contar las palabras en una estrategia SEO?
</h2> <p class="mb-6">
En el mundo del marketing de contenidos, la extensión de un texto no es
        solo una cuestión de volumen, sino de <strong>intención de búsqueda</strong>. Aunque Google ha declarado que no existe un conteo de palabras ideal
        para rankear, los datos de la industria muestran que los artículos con
        mayor profundidad (usualmente de más de 1000 a 1500 palabras) tienden a
        posicionarse mejor para consultas informativas complejas.
</p> <p class="mb-6">
Un <strong>contador de palabras SEO</strong> profesional te permite medir
        si estás cumpliendo con los estándares mínimos de competitividad para tu nicho.
        No se trata de "rellenar" texto, sino de asegurar que la cobertura del tema
        sea exhaustiva y aporte valor real al usuario.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Métricas clave en el análisis de texto
</h3> <p class="mb-4">
Para optimizar un contenido, debemos prestar atención a dos métricas
        fundamentales que se derivan del conteo total:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> <p class="text-xs font-bold text-indigo-400 uppercase mb-4 tracking-widest">
Fórmula de Densidad de Keyword
</p> ${fDensidadKeyword} </div> <p class="mb-6">
Esta fórmula nos ayuda a entender el peso de una palabra clave
        específica dentro del total. Mantener una densidad equilibrada (entre el
        1% y el 2.5%) evita el "Keyword Stuffing", una técnica penalizada por
        los algoritmos modernos.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Estimación del Tiempo de Lectura
</h3> <p class="mb-4">
Otro factor crítico para la experiencia del usuario (UX) es informar
        cuánto tardará el visitante en consumir el contenido. La fórmula
        estándar se basa en una velocidad promedio de 200 palabras por minuto:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fPromedioLectura} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Longitud según el Formato
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-indigo-600 mb-3 text-xl">
1. Descripciones de Producto
</h4> <p class="text-sm">
Para e-commerce, se recomiendan entre **300 y 600 palabras**. Deben
            ser concisas pero incluir todas las especificaciones técnicas y
            beneficios para el usuario.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-indigo-600 mb-3 text-xl">
2. Guías Definitivas
</h4> <p class="text-sm">
Contenidos que buscan autoridad ("Pillar Pages"). El rango ideal
            suele estar entre las **1,500 y 3,000 palabras**, cubriendo subtemas
            relacionados.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Uso de Caracteres en Metadatos
</h3> <p class="mb-6">
Aunque el cuerpo del artículo se mide en palabras, el SEO técnico para
        metadatos se rige por caracteres. Una Meta Descripción no debe superar
        los 155-160 caracteres para no ser cortada en las SERPs. Nuestra
        herramienta te permite validar ambas métricas simultáneamente para
        asegurar una visibilidad perfecta en Google.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Reales
</h3> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Redactores Freelance:</strong> Para validar el cumplimiento de la
          extensión contratada por el cliente.
</li> <li> <strong>Especialistas SEO:</strong> Para auditar la longitud del contenido
          de la competencia y superarlos en profundidad.
</li> <li> <strong>Copywriters:</strong> Para ajustar la longitud de guiones de video
          o anuncios de redes sociales con límites estrictos.
</li> </ul> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-indigo-400 font-bold mb-2">Tip de Optimización:</p> <p class="text-sm text-slate-400">
Recordá que la calidad siempre vence a la cantidad. Es preferible un
          artículo de 800 palabras bien estructurado que uno de 2,000 lleno de
          redundancias.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro";
const $$url = "/seo/contador-palabras";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorPalabras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
