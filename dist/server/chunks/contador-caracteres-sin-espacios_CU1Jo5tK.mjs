globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$ContadorCaracteresSinEspacios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contador de Caracteres sin Espacios | Herramienta de Conteo Neto", "description": "Contá caracteres excluyendo espacios en blanco automáticamente. Ideal para límites de texto académicos y técnicos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Contador de Caracteres sin Espacios
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Obtené el recuento neto de tu contenido eliminando espacios, saltos de
        línea y tabulaciones del total.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center"> <span class="block text-[10px] font-bold uppercase text-slate-400 mb-1">Caracteres (Con espacios)</span> <div id="conEspacios" class="text-4xl font-black text-slate-400">
0
</div> </div> <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center"> <span class="block text-[10px] font-bold uppercase text-emerald-500 mb-1">Caracteres NETOS (Sin espacios)</span> <div id="sinEspacios" class="text-5xl font-black text-emerald-700">
0
</div> </div> </div> <textarea id="inputContador" class="w-full h-64 p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all resize-none text-slate-700 font-serif" placeholder="Pegá tu texto aquí para contar los caracteres netos..."></textarea> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Por qué contar caracteres sin espacios?
</h2> <p>
En el mundo de la redacción profesional y académica, los espacios a
        menudo se consideran "ruido visual" que no aporta a la densidad
        informativa. Muchas plataformas de concursos literarios o sistemas de
        gestión de bases de datos establecen sus límites basándose únicamente en
        caracteres alfanuméricos.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de la diferencia:
</h3> <div class="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 my-6 italic"> <p class="text-md mb-2"> <strong>Frase:</strong> "El SEO es fundamental"
</p> <ul class="text-sm space-y-1"> <li> <strong>Con espacios:</strong> 22 caracteres (incluye los 3 espacios).
</li> <li><strong>Sin espacios:</strong> 19 caracteres (solo letras).</li> </ul> </div> <p>
Esta diferencia, aunque pequeña en frases cortas, puede representar
        hasta un <strong>15% o 20%</strong> del total en artículos largos. Por ejemplo,
        en una página con 2000 caracteres totales, podrías tener unos 350 espacios.
        Si tu límite es "2000 caracteres netos", nuestra [herramienta de conteo](/seo/contador-caracteres-sin-espacios)
        te permite aprovechar ese espacio extra para añadir más contenido valioso.
</p> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem] mt-10"> <h4 class="text-xl font-bold mb-4">
Diferencia técnica: Espacios vs. Caracteres Invisibles
</h4> <p class="text-sm opacity-80 leading-relaxed">
Nuestro algoritmo no solo elimina el espacio tradicional (barra
          espaciadora), sino también los saltos de línea (enters) y los
          tabuladores. Esto garantiza que el número que ves sea exactamente la
          cantidad de símbolos, letras y números que componen tu mensaje.
</p> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/contador-caracteres-sin-espacios.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/contador-caracteres-sin-espacios.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/contador-caracteres-sin-espacios.astro";
const $$url = "/seo/contador-caracteres-sin-espacios";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ContadorCaracteresSinEspacios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
