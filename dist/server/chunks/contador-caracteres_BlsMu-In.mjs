globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$ContadorCaracteres = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Caracteres SEO | Simulador de Google", "description": "Validá la longitud de tus Meta Títulos y Meta Descripciones. Evitá que Google recorte tu contenido en los resultados de búsqueda." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Caracteres SEO
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Asegurate de que tus títulos y descripciones se vean completos en la
        SERP de Google.
</p> </div> <div class="max-w-2xl mx-auto space-y-8"> <div class="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100"> <div class="flex justify-between items-end mb-2 px-1"> <label class="text-xs font-bold uppercase text-slate-400">Meta Título (Recomendado: 60)</label> <span id="metaTitleCount" class="text-sm font-black text-blue-600">0 / 60</span> </div> <input type="text" id="inputTitle" class="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Escribí el título de tu página..."> <div class="w-full bg-slate-100 h-2 mt-4 rounded-full overflow-hidden"> <div id="barTitle" class="h-full bg-blue-500 transition-all duration-300" style="width: 0%"></div> </div> </div> <div class="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100"> <div class="flex justify-between items-end mb-2 px-1"> <label class="text-xs font-bold uppercase text-slate-400">Meta Descripción (Recomendado: 155)</label> <span id="metaDescCount" class="text-sm font-black text-emerald-600">0 / 155</span> </div> <textarea id="inputDesc" class="w-full h-32 p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none resize-none" placeholder="Escribí tu meta descripción..."></textarea> <div class="w-full bg-slate-100 h-2 mt-4 rounded-full overflow-hidden"> <div id="barDesc" class="h-full bg-emerald-500 transition-all duration-300" style="width: 0%"></div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 mt-12 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-6 italic">
¿Por qué es vital el conteo de caracteres?
</h2> <p>
Google no mide los títulos solo por caracteres, sino por <strong>píxeles</strong> (aprox. 600px). Sin embargo, el conteo de caracteres es la métrica más fiable
        para los redactores.
</p> <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100 mt-8"> <h3 class="text-amber-900 font-bold mb-2">💡 Tip Pro:</h3> <p class="text-sm">
Si tu título es demasiado largo, Google lo cortará con <strong>"..."</strong>, lo que reduce drásticamente tu CTR (clics por cada 100
          impresiones). Usar un [contador de caracteres
          preciso](/seo/contador-caracteres) evita este problema.
</p> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-caracteres.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-caracteres.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-caracteres.astro";
const $$url = "/seo/contador-caracteres/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorCaracteres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
