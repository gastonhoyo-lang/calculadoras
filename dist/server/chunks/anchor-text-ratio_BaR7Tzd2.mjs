globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$AnchorTextRatio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Anchor Text Ratio | Auditoría de Perfil de Enlaces", "description": "Analizá la distribución de tus textos de ancla. Evitá penalizaciones de Google por sobreoptimización y mantené un perfil de enlaces natural." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Anchor Text Ratio
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"El equilibrio perfecto entre relevancia y naturalidad."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Anclajes de Marca (Ej: NombreWeb)</label> <input type="number" id="brandAnchors" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono" placeholder="0"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Palabra Clave Exacta (Ej: "comprar café")</label> <input type="number" id="exactAnchors" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono" placeholder="0"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Anclajes Genéricos (Ej: "clic aquí")</label> <input type="number" id="genericAnchors" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono" placeholder="0"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">URLs Nudas (Ej: https://site.com)</label> <input type="number" id="nakedAnchors" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-mono" placeholder="0"> </div> </div> <div class="p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100"> <div class="flex flex-col md:flex-row justify-around items-center gap-8"> <div class="text-center"> <span class="block text-[10px] font-bold uppercase text-indigo-400 mb-1">Ratio Palabra Exacta</span> <div id="exactRatio" class="text-4xl font-black text-indigo-700">
0%
</div> </div> <div class="h-12 w-px bg-indigo-200 hidden md:block"></div> <div class="text-center"> <span class="block text-[10px] font-bold uppercase text-indigo-400 mb-1">Nivel de Riesgo</span> <div id="riskLevel" class="text-sm font-bold text-slate-500 uppercase mt-2">
Introduce datos
</div> </div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el Anchor Text Ratio?
</h2> <p>
Es la proporción de los diferentes tipos de textos visibles en los
        enlaces que apuntan a tu web. Un perfil de enlaces natural contiene una
        gran mayoría de enlaces de marca y URLs desnudas, y solo un pequeño
        porcentaje de palabras clave exactas.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Distribución "Segura" Sugerida:
</h3> <ul class="space-y-2"> <li> <strong>Marca y URL (70-80%):</strong> El pilar de tu autoridad.
</li> <li> <strong>Genéricos (10-15%):</strong> "visitar sitio", "leer más", "fuente".
</li> <li> <strong>Palabra Clave Exacta (< 5%):</strong> Usar más de esto es la forma
          más rápida de atraer una penalización de Google Penguin.
</li> </ul> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">SEO On-Page vs Off-Page</h4> <p class="text-xs leading-relaxed">
Mientras que en el [Interlinking
            Interno](/seo/densidad-enlaces-internos) puedes ser más agresivo con
            las keywords, en los enlaces externos debes ser extremadamente
            precavido.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Optimización de Slugs</h4> <p class="text-xs leading-relaxed">
Cuando recibes enlaces con URLs desnudas, es vital que tu [Slug
            SEO](/seo/generador-slugs) sea descriptivo, ya que el slug actuará
            como el anclaje implícito.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/anchor-text-ratio.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/anchor-text-ratio.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/anchor-text-ratio.astro";
const $$url = "/seo/anchor-text-ratio/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AnchorTextRatio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
