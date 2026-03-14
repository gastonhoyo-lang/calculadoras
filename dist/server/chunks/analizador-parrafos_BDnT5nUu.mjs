globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$AnalizadorParrafos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Analizador de Longitud de Párrafos | SEO Copywriting Tool", "description": "Auditá la legibilidad de tu contenido. Detectá párrafos demasiado largos que afectan la experiencia de usuario y el SEO de tu página." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Analizador de Párrafos
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
No dejes que tus lectores se cansen. Fragmentá tu contenido para una
        lectura ágil y efectiva.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <textarea id="paragraphInput" class="w-full h-64 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 focus:bg-white outline-none transition-all text-slate-700 resize-none" placeholder="Pegá tu artículo aquí..."></textarea> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="p-4 bg-teal-50 rounded-2xl text-center border border-teal-100"> <span class="block text-[10px] font-bold text-teal-600 uppercase">Párrafos Totales</span> <span id="totalParagraphs" class="text-2xl font-black text-teal-700">0</span> </div> <div class="p-4 bg-rose-50 rounded-2xl text-center border border-rose-100"> <span class="block text-[10px] font-bold text-rose-600 uppercase">Párrafos Largos</span> <span id="longParagraphs" class="text-2xl font-black text-rose-700">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">Palabras/Párrafo Promedio</span> <span id="avgWords" class="text-2xl font-black text-slate-700">0</span> </div> </div> <div id="paragraphFeedback" class="space-y-3 mt-4"></div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
La Regla de Oro del Copywriting Web
</h2> <p>
En el entorno digital, la atención es limitada. Un párrafo ideal no
        debería superar las <strong>3 o 4 líneas</strong> (unas 45-60 palabras). Esto
        crea "espacio en blanco", lo que reduce la fatiga visual y facilita la comprensión.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Optimización para Móviles
</h4> <p class="text-xs leading-relaxed">
Lo que en escritorio parecen 3 líneas, en un smartphone pueden ser
            8. Los párrafos cortos son vitales para que el usuario no abandone
            la lectura al ver un bloque interminable de texto.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Uso de Encabezados</h4> <p class="text-xs leading-relaxed">
Si un párrafo se extiende demasiado, considerá dividirlo con un
            [Encabezado H3](/seo/contador-encabezados) o usar una lista de
            puntos para enumerar conceptos.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/analizador-parrafos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/analizador-parrafos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/analizador-parrafos.astro";
const $$url = "/seo/analizador-parrafos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AnalizadorParrafos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
