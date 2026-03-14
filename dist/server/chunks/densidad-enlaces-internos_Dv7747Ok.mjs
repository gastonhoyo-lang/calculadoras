globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$DensidadEnlacesInternos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Densidad de Enlaces Internos | SEO On-Page", "description": "Analizá la proporción de links internos en tu contenido. Maximizá el flujo de autoridad (Link Juice) y mejorá la navegación de tu sitio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Densidad de Enlaces Internos
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Guiá a Google y a tus usuarios a través de tu contenido."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Cuerpo del Contenido (HTML o Texto)</label> <textarea id="linkInput" class="w-full h-48 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all text-sm text-slate-700 resize-none" placeholder="Pegá el contenido de tu artículo aquí para contar los links..."></textarea> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="p-4 bg-orange-50 rounded-2xl text-center border border-orange-100"> <span class="block text-[10px] font-bold text-orange-500 uppercase">Total Enlaces</span> <span id="totalLinks" class="text-3xl font-black text-orange-700">0</span> </div> <div class="md:col-span-2 p-6 bg-slate-50 rounded-[2rem] flex items-center justify-around border border-slate-100"> <div class="text-center"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Ratio de Enlaces</span> <div id="linkRatio" class="text-3xl font-black text-slate-800">
0%
</div> </div> <div class="h-12 w-px bg-slate-200"></div> <div class="text-center"> <span class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Estado</span> <div id="linkStatus" class="text-xs font-bold text-slate-500 uppercase">
Sin Datos
</div> </div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es la Densidad de Enlaces Internos?
</h2> <p>
Es la frecuencia con la que insertas hipervínculos hacia otras páginas
        de tu propio dominio dentro de un texto. Los enlaces internos ayudan a
        distribuir la autoridad de la página (<strong>PageRank</strong>) y
        permiten que Google descubra contenido nuevo más rápido.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Estrategia de Interlinking
</h4> <p class="text-xs leading-relaxed">
No pongas enlaces por poner. Usá palabras clave descriptivas en el <strong>Anchor Text</strong>. Por ejemplo, en lugar de "hacé clic aquí", usá "[Calculadora de
            ROI](/seo/roi-marketing)".
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Evitá el "Link Stuffing"
</h4> <p class="text-xs leading-relaxed">
Demasiados enlaces pueden distraer al usuario y diluir la autoridad
            que transmites. Intentá mantener un equilibrio de 1 enlace cada
            150-200 palabras aproximadamente.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/densidad-enlaces-internos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/densidad-enlaces-internos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/densidad-enlaces-internos.astro";
const $$url = "/seo/densidad-enlaces-internos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DensidadEnlacesInternos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
