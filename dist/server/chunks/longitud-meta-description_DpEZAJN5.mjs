globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$LongitudMetaDescription = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Longitud de Meta Description | SEO Snippet Tool", "description": "Asegurá que tus meta descripciones no se corten en Google. Calculá la longitud ideal y optimizá tu CTR con nuestra herramienta gratuita." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Longitud de Meta Description
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Tu anuncio gratuito en los resultados de Google."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Escribí tu Meta Descripción</label> <textarea id="descriptionInput" class="w-full h-32 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-slate-700 resize-none font-medium" placeholder="Ej: Descubrí las mejores herramientas SEO para potenciar tu web. Calculadoras gratuitas, generadores de slugs y mucho más para expertos..."></textarea> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="p-6 bg-slate-50 rounded-2xl flex flex-col justify-center items-center border border-slate-100"> <span class="text-[10px] font-bold text-slate-400 uppercase mb-1">Caracteres</span> <span id="charCount" class="text-4xl font-black text-slate-800">0</span> <span id="statusLabel" class="text-[10px] font-bold uppercase mt-2 text-slate-400">Esperando...</span> </div> <div class="space-y-3"> <div class="h-4 w-full bg-slate-100 rounded-full overflow-hidden"> <div id="progressBar" class="h-full bg-blue-500 transition-all duration-300" style="width: 0%"></div> </div> <p class="text-[11px] text-slate-500 leading-relaxed"> <strong>Tip:</strong> Google suele cortar las descripciones después
              de los 960 píxeles (aprox. 155-160 caracteres). Mantenelo entre 120
              y 150 para ir a lo seguro.
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Para qué sirve la Meta Description?
</h2> <p>
Aunque no es un factor de ranking directo para el algoritmo de Google,
        la meta descripción es el factor #1 para que el usuario decida hacer
        clic. Actúa como el "texto de venta" de tu página en las SERPs (páginas
        de resultados).
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Cómo escribir una descripción ganadora:
</h3> <ul class="space-y-2"> <li> <strong>Palabra Clave:</strong> Incluí tu keyword principal. Google la pondrá
          en <strong>negrita</strong> si coincide con la búsqueda del usuario.
</li> <li> <strong>Llamado a la acción (CTA):</strong> Usá verbos como "Aprendé", "Descubrí"
          o "Comprá".
</li> <li> <strong>Propuesta de valor:</strong> Explicá qué problema resuelve tu página
          en menos de dos frases.
</li> </ul> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Relación con el Título</h4> <p class="text-xs leading-relaxed">
La descripción debe complementar lo que dice tu título. Usá el
            [Analizador de Títulos SEO](/seo/analizador-titulos) para que ambos
            trabajen juntos.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Densidad de Keywords</h4> <p class="text-xs leading-relaxed">
No satures la descripción con palabras clave. Un solo uso natural es
            suficiente. Verificá tu texto completo con el [Contador de
            Keywords](/seo/contador-keywords).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/longitud-meta-description.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/longitud-meta-description.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/longitud-meta-description.astro";
const $$url = "/seo/longitud-meta-description";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$LongitudMetaDescription,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
