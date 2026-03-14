globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$GeneradorSlug = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Generador de Slugs SEO | Crear URLs Amigables Online", "description": "Convertí cualquier título en una URL limpia y optimizada para SEO. Eliminá tildes, caracteres especiales y espacios automáticamente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Generador de Slugs SEO
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"URLs limpias, indexación rápida."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-2xl mx-auto mb-16"> <div class="space-y-4 mb-6"> <div> <label class="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">Título del Artículo o Página</label> <input type="text" id="inputTitle" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Ej: 10 mejores herramientas para SEO en 2026!"> </div> </div> <div class="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 relative group"> <label class="block text-[10px] font-bold uppercase text-indigo-400 mb-2">Slug Optimizado (URL)</label> <div id="outputSlug" class="text-lg font-mono font-bold text-indigo-700 break-all">
esperando-input...
</div> <button id="btnCopy" class="absolute top-4 right-4 text-indigo-400 hover:text-indigo-600 transition-colors" title="Copiar URL"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path> </svg> </button> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es un Slug y por qué es vital para el SEO?
</h2> <p>
Un <strong>slug</strong> es la parte de la URL que identifica una página específica
        en un formato fácil de leer tanto para usuarios como para buscadores. Por
        ejemplo, en <code>tuweb.com/que-es-seo</code>, el slug es "que-es-seo".
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Optimización:
</h3> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-500 my-6"> <p class="text-sm mb-2"> <strong>Título Sucio:</strong> ¿Cómo bajar de peso rápido en este 2026?
          ¡Guía paso a paso!
</p> <p class="text-sm mb-2 text-red-600"> <strong>URL Automática (Mal):</strong> tuweb.com/%c2%bfcomo-bajar-de-peso-r%c3%a1pido-en-este-2026-guia-paso-a-paso
</p> <p class="text-sm text-emerald-600"> <strong>Slug Optimizado (Bien):</strong> tuweb.com/como-bajar-peso-rapido-guia
</p> </div> <p>
Como ves en el ejemplo anterior, una buena URL elimina las <strong>stop words</strong> (palabras de parada como "de", "en", "este"), quita los signos de interrogación
        y convierte las tildes. Esto hace que la URL sea más corta, más fácil de compartir
        en redes sociales y permite que las <strong>keywords principales</strong> tengan más peso ante los ojos de Google.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div> <h4 class="font-bold text-slate-900">Reglas de Oro para Slugs:</h4> <ul class="list-disc ml-5 space-y-2 text-sm"> <li> <strong>Usar solo minúsculas:</strong> Evita problemas de duplicidad
              de contenido.
</li> <li> <strong>Guiones medios (-):</strong> Nunca uses guiones bajos (_) ni
              espacios.
</li> <li> <strong>Brevedad:</strong> Menos es más. Apunta a 3-5 palabras máximo.
</li> <li> <strong>Keyword al principio:</strong> Coloca tu palabra clave principal
              lo más a la izquierda posible.
</li> </ul> </div> <div class="bg-indigo-900 text-white p-6 rounded-3xl"> <h4 class="font-bold mb-2 italic">Dato Curioso</h4> <p class="text-xs leading-relaxed opacity-90">
Google utiliza el slug para entender de qué trata tu página incluso
            antes de rastrear el contenido completo. Una URL descriptiva mejora
            el CTR significativamente en los resultados de búsqueda.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/generador-slug.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/generador-slug.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/generador-slug.astro";
const $$url = "/seo/generador-slug";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GeneradorSlug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
