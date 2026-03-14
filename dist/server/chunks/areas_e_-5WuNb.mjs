globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
import { $ as $$ResultBox } from "./ResultBox_Cg_djAPC.mjs";
const $$Areas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Áreas | Calcular Metros Cuadrados (m2) | Chieffin", "description": "Calculá la superficie de cualquier espacio rectangular o cuadrado. Herramienta fácil para medir paredes, pisos y terrenos con ejemplos paso a paso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Matemáticas Prácticas</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculadora de <span class="text-blue-600">Áreas</span> 📐
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Obtené los metros cuadrados ($m^2$) de cualquier superficie en segundos.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Largo / Base (metros)</label> <input type="number" id="base" placeholder="Ej: 5.5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ancho / Altura (metros)</label> <input type="number" id="altura" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcularArea" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl">
Calcular Superficie
</button> <div id="resBoxArea" class="hidden"> ${renderComponent($$result2, "ResultBox", $$ResultBox, { "id": "resultadoM2", "label": "Superficie Total" })} </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo se calcula el área?
</h2> <p class="text-slate-600 text-sm">
Para superficies cuadradas o rectangulares, simplemente debés
          multiplicar el <strong>largo por el ancho</strong>. El resultado se
          expresa en metros cuadrados ($m^2$).
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Preguntas Frecuentes (FAQ)
</h3> <div class="space-y-4 text-sm text-slate-600"> <p> <strong>¿Cómo calculo m² de una pared?</strong><br>Medí el ancho y
            el alto de la pared. Si tiene una ventana, restá su superficie al
            total.
</p> <p> <strong>¿Cuánta pintura necesito?</strong><br>Un litro suele
            rendir entre 10 y 12 $m^2$. Dividí tu resultado por 10 para saber
            los litros mínimos.
</p> </div> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Interlinking Útil:
</h3> <ul class="text-blue-600 space-y-2 text-sm font-bold list-none p-0"> <li> <a href="/finanzas/calculadora-iva" class="hover:underline">→ ¿Vas a comprar materiales? Calculá el IVA</a> </li> <li> <a href="/hogar/calculadora-frigorias" class="hover:underline">→ ¿Mediste tu cuarto? Calculá el Aire Acondicionado</a> </li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/areas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/areas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/areas.astro";
const $$url = "/matematica/areas";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Areas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
