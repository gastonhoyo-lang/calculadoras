globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$CalculadoraCtr = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de CTR SEO | Analizá tu Tasa de Clics", "description": "Calculá el CTR de tus campañas y resultados de búsqueda. Aprendé a optimizar tus Meta Títulos para atraer más clics en Google." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de CTR
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No basta con aparecer, hay que lograr que hagan clic."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Impresiones Totales</label> <input type="number" id="impressions" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono" placeholder="Ej: 5000"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Clics Totales</label> <input type="number" id="clicks" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono" placeholder="Ej: 150"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-blue-50 rounded-[2rem] border border-blue-100 w-full"> <span class="block text-[10px] font-bold uppercase text-blue-400 mb-2">Tu CTR Resultante</span> <div id="ctrResult" class="text-6xl font-black text-blue-700">
0%
</div> <div id="ctrStatus" class="mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-blue-400">
Esperando datos
</div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el CTR y cómo se calcula?
</h2> <p>
El **CTR** (Click-Through Rate) representa el porcentaje de personas que
        hicieron clic en tu enlace después de haberlo visto. Es la métrica reina
        para medir la efectividad de tu **copywriting**.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Optimización:
</h3> <div class="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-6"> <p class="text-sm mb-4">
Supongamos que tu página sobre "Mejores Cafeteras" aparece 10,000
          veces en Google (Impresiones) pero solo recibe 100 clics. Tu CTR es
          del **1%**.
</p> <p class="text-sm"> <strong>Acción SEO:</strong> Al mejorar tu título con palabras de poder
          como "Mejores Cafeteras 2026: Guía Definitiva", lográs subir a 500 clics.
          Tu CTR ahora es del **5%**, quintuplicando tu tráfico sin necesidad de subir
          de posición en el ranking.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
El papel del Título y la Meta
</h4> <p class="text-xs leading-relaxed">
Un CTR bajo suele indicar que tu título no es relevante para la
            búsqueda del usuario. Usá nuestro [Contador de Caracteres
            SEO](/seo/contador-caracteres) para asegurarte de que no se corte el
            mensaje principal.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Fragmentos Enriquecidos</h4> <p class="text-xs leading-relaxed">
Las estrellas de valoración o los FAQs en la SERP aumentan el
            espacio visual de tu resultado, lo que tiende a disparar el CTR de
            forma natural.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/calculadora-ctr.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/calculadora-ctr.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/calculadora-ctr.astro";
const $$url = "/seo/calculadora-ctr";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraCtr,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
