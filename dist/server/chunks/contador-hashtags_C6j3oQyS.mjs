globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$ContadorHashtags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Hashtags | Optimizador de Redes Sociales", "description": "Extraé y contá hashtags de tu contenido. Asegurá la cantidad ideal para Instagram, LinkedIn y Twitter sin caer en el spam." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Hashtags
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Categorizá tu contenido sin saturar el algoritmo."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <textarea id="hashtagInput" class="w-full h-48 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-700 resize-none font-medium" placeholder="Pegá tu post de Instagram o LinkedIn aquí..."></textarea> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="p-4 bg-sky-50 rounded-2xl text-center border border-sky-100"> <span class="block text-[10px] font-bold text-sky-600 uppercase">Hashtags Detectados</span> <span id="hashtagCount" class="text-3xl font-black text-sky-700">0</span> </div> <div class="md:col-span-2 p-4 bg-slate-50 rounded-2xl flex items-center px-6 border border-slate-100"> <div class="w-full"> <div class="flex justify-between mb-1"> <span id="limitLabel" class="text-[10px] font-bold uppercase text-slate-400">Límite Sugerido (IG)</span> <span class="text-[10px] font-bold text-slate-400">Máx 30</span> </div> <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden"> <div id="hashtagBar" class="h-full bg-sky-500 transition-all" style="width: 0%"></div> </div> </div> </div> </div> <div id="hashtagList" class="flex flex-wrap gap-2 min-h-[50px] p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200"> <p class="text-xs text-slate-400 italic">
Los hashtags aparecerán aquí...
</p> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Buenas Prácticas para Hashtags
</h2> <p>
Usar hashtags no se trata de cantidad, sino de relevancia. Un error
        común es usar etiquetas demasiado genéricas (como #love) que atraen
        bots, en lugar de etiquetas de nicho que atraen clientes reales.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Límites por Plataforma</h4> <p class="text-xs leading-relaxed"> <strong>Instagram:</strong> Máximo 30 (ideal 3-5 según nuevas guías).
<strong>LinkedIn:</strong> Ideal 3. <strong>Twitter/X:</strong> Ideal
            1-2 por la brevedad del texto.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Shadowban y Spam</h4> <p class="text-xs leading-relaxed">
Repetir siempre los mismos 30 hashtags en todos tus posts puede
            alertar a los algoritmos de spam. Variá tus etiquetas usando
            términos de nuestro [Analizador de
            Repetición](/seo/analizador-repeticion).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-hashtags.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-hashtags.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-hashtags.astro";
const $$url = "/seo/contador-hashtags/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorHashtags,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
