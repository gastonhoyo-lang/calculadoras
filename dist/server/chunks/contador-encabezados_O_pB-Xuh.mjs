globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$ContadorEncabezados = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Encabezados H1, H2, H3 | Auditoría de Estructura SEO", "description": "Analizá la jerarquía de etiquetas de encabezado de tu contenido. Asegurá una estructura H1-H6 perfecta para mejorar el posicionamiento en buscadores." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Encabezados
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"Una estructura clara es el mapa que Google usa para entender tu web."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Pegá tu contenido o código HTML</label> <textarea id="headerInput" class="w-full h-48 p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all font-mono text-sm text-slate-700 resize-none" placeholder="<h1>Título principal</h1>\n<h2>Subtítulo importante</h2>..."></textarea> </div> <div class="grid grid-cols-3 md:grid-cols-6 gap-4"> <div class="p-4 bg-amber-50 rounded-2xl text-center border border-amber-100"> <span class="block text-[10px] font-bold text-amber-500 uppercase">H1</span> <span id="h1Count" class="text-2xl font-black text-amber-700">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">H2</span> <span id="h2Count" class="text-2xl font-black text-slate-600">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">H3</span> <span id="h3Count" class="text-2xl font-black text-slate-600">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">H4</span> <span id="h4Count" class="text-2xl font-black text-slate-600">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">H5</span> <span id="h5Count" class="text-2xl font-black text-slate-600">0</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-[10px] font-bold text-slate-400 uppercase">H6</span> <span id="h6Count" class="text-2xl font-black text-slate-600">0</span> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Importancia de los Encabezados (Tags Hx)
</h2> <p>
Los encabezados no son solo elementos de diseño para agrandar el texto;
        son etiquetas semánticas. El **H1** define el tema principal de la
        página, los **H2** las secciones clave, y los **H3** los puntos dentro
        de esas secciones.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Reglas de Oro de la Jerarquía:
</h3> <div class="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 my-6"> <ul class="text-sm space-y-2 mb-0"> <li> <strong>Un solo H1 por página:</strong> Es el título de tu libro. No pongas
            dos.
</li> <li> <strong>No te saltes niveles:</strong> Después de un H2 debe ir un H3,
            no un H4 directamente.
</li> <li> <strong>SEO dinámico:</strong> Incluí palabras clave en tus H2 y H3 para
            ayudar a Google a posicionarte por términos secundarios.
</li> </ul> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Análisis de Títulos</h4> <p class="text-xs leading-relaxed">
Asegurate de que tu H1 sea atractivo. Podés validarlo con nuestro
            [Analizador de Títulos SEO](/seo/analizador-titulos) para garantizar
            un alto impacto.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Longitud de Párrafos</h4> <p class="text-xs leading-relaxed">
Dividir el texto con encabezados mejora la legibilidad. Usá el
            [Contador de Palabras](/seo/contador-palabras) para verificar que
            tus secciones no sean demasiado densas entre cada H2.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-encabezados.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-encabezados.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-encabezados.astro";
const $$url = "/seo/contador-encabezados/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorEncabezados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
