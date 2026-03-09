/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$DensidadKeyword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Densidad de Keywords SEO | Analizador de Frecuencia", "description": "Analiz\xE1 la densidad de palabras clave de tus art\xEDculos. Evit\xE1 el keyword stuffing y optimiz\xE1 tu contenido para los algoritmos de Google." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Densidad de Keywords
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No escribas para los robots, pero asegurate de que te entiendan."
</p> </div> <div class="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <textarea id="inputText" class="w-full h-64 p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all resize-none text-slate-700 leading-relaxed mb-6" placeholder="Pegá tu artículo aquí para analizar la densidad de palabras clave..."></textarea> <button id="btnAnalizar" class="w-full py-4 bg-amber-500 text-white font-black rounded-2xl hover:bg-amber-600 transition-all uppercase tracking-widest">
Analizar Densidad
</button> <div id="resBox" class="hidden mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500"> <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"> <span>📊</span> Resultado del Análisis
</h3> <div class="overflow-hidden rounded-2xl border border-slate-100"> <table class="w-full text-left border-collapse"> <thead class="bg-slate-50 text-[10px] uppercase font-bold text-slate-400"> <tr> <th class="p-4">Palabra Clave</th> <th class="p-4">Repeticiones</th> <th class="p-4">Densidad (%)</th> </tr> </thead> <tbody id="tableBody" class="text-sm text-slate-600"></tbody> </table> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es la Densidad de Keywords?
</h2> <p>
La densidad de palabras clave es el porcentaje de veces que aparece una
        keyword en relación con el número total de palabras de un texto. Si tu
        artículo tiene 1000 palabras y tu keyword aparece 10 veces, la densidad
        es del 1%.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Análisis:
</h3> <div class="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 my-6"> <p class="text-sm mb-4">
Imagina que escribes sobre <strong>"Recetas de cocina"</strong>. Si
          usas la palabra "cocina" en cada oración, Google podría penalizarte
          por <em>Keyword Stuffing</em>.
</p> <p class="text-sm"> <strong>Escenario Ideal:</strong> Un artículo de 800 palabras donde "recetas"
          aparece 12 veces (1.5%) y "cocina" aparece 8 veces (1%). Esto se considera
          un texto natural y bien optimizado.
</p> </div> <p>
Históricamente, se recomendaba una densidad del 3% al 5%, pero hoy en
        día los algoritmos de búsqueda son mucho más inteligentes. Actualmente,
        se recomienda mantener la keyword principal entre el <strong>0.5% y el 2%</strong>, priorizando siempre la semántica y los sinónimos (LSI Keywords).
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Peligros del Keyword Stuffing
</h4> <p class="text-xs leading-relaxed">
Repetir excesivamente una palabra degrada la experiencia del usuario
            y puede provocar que Google ignore tu página o la hunda en los
            resultados de búsqueda.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Importancia de las Stop Words
</h4> <p class="text-xs leading-relaxed">
Nuestra herramienta filtra palabras como "y", "el", "los", "que", ya
            que no aportan valor semántico al análisis de densidad SEO.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/densidad-keyword.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/densidad-keyword.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/seo/densidad-keyword.astro";
const $$url = "/seo/densidad-keyword";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DensidadKeyword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
