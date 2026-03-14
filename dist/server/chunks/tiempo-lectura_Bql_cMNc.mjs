globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$TiempoLectura = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Tiempo de Lectura | Estimación para Blogs y SEO", "description": "Calculá cuánto tardará un usuario en leer tu contenido. Optimizá la experiencia de usuario (UX) de tu blog con tiempos precisos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Tiempo de Lectura
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Estimá el tiempo que le tomará a tu audiencia consumir tu contenido
        basándote en la velocidad de lectura promedio.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="flex flex-col md:flex-row gap-8 mb-8"> <div class="flex-1"> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Contenido del artículo</label> <textarea id="textInput" class="w-full h-64 p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-purple-500 focus:bg-white outline-none transition-all resize-none text-slate-700 leading-relaxed" placeholder="Pegá tu texto aquí..."></textarea> </div> <div class="md:w-64 space-y-6"> <div class="p-6 bg-purple-50 rounded-3xl border border-purple-100 text-center"> <span class="block text-[10px] font-bold uppercase text-purple-400 mb-1">Tiempo Estimado</span> <div id="readTime" class="text-4xl font-black text-purple-700">
0 min
</div> <p id="wordCount" class="text-[10px] text-purple-400 mt-2 font-mono">
0 palabras
</p> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 text-center">Velocidad (palabras/min)</label> <select id="speedSelect" class="w-full p-3 bg-slate-100 rounded-xl border-none text-sm font-bold text-slate-600 outline-none cursor-pointer"> <option value="150">Lento (150 ppm)</option> <option value="200" selected>Promedio (200 ppm)</option> <option value="250">Rápido (250 ppm)</option> <option value="300">Experto (300 ppm)</option> </select> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Cómo se calcula el tiempo de lectura?
</h2> <p>
El cálculo se basa en la velocidad de procesamiento de información del
        cerebro humano. En promedio, un adulto lee a una velocidad de <strong>200 a 250 palabras por minuto (ppm)</strong> cuando se trata de contenido digital.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Planificación de Contenido:
</h3> <div class="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-500 my-6"> <p class="text-sm mb-4">
Si estás redactando un <strong>Whitepaper</strong> técnico de 3,000 palabras,
          el tiempo de lectura será de aproximadamente 15 minutos. Para un usuario
          de internet, esto es un compromiso alto.
</p> <p class="text-sm"> <strong>Estrategia SEO:</strong> Si ves que tu tiempo supera los 7 minutos,
          considera añadir una tabla de contenidos o dividir el texto con subtítulos
          frecuentes para facilitar el escaneo visual y mejorar la retención.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Impacto en el SEO</h4> <p class="text-xs leading-relaxed">
Indicar el tiempo de lectura aumenta la probabilidad de que el
            usuario se quede en la página si sabe que solo le tomará 2 o 3
            minutos, reduciendo el "Pogo-sticking" (entrar y salir rápido de tu
            web).
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Accesibilidad</h4> <p class="text-xs leading-relaxed">
Considerar diferentes velocidades de lectura es una excelente
            práctica de accesibilidad, permitiendo que personas con distintas
            capacidades de procesamiento planifiquen su lectura.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/tiempo-lectura.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/tiempo-lectura.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/tiempo-lectura.astro";
const $$url = "/seo/tiempo-lectura";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TiempoLectura,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
