globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$CalculadoraProporcion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Proporciones Online | Hallar la Incógnita X", "description": "Resolvé proporciones matemáticas al instante. Ideal para escalado de imágenes, razones y proporciones directas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Proporción
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá tres valores para hallar el cuarto. Mantené la relación exacta
        entre dos razones.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"> <div class="flex flex-col gap-2 w-full max-w-[150px]"> <input type="number" id="valA" class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none text-center font-bold" placeholder="A"> <div class="h-1 bg-slate-200 rounded-full w-full"></div> <input type="number" id="valB" class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none text-center font-bold" placeholder="B"> </div> <div class="text-4xl font-black text-blue-500">=</div> <div class="flex flex-col gap-2 w-full max-w-[150px]"> <input type="number" id="valC" class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none text-center font-bold" placeholder="C"> <div class="h-1 bg-slate-200 rounded-full w-full"></div> <input type="number" id="valD" class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none text-center font-bold" placeholder="D"> </div> </div> <div class="mt-12 text-center"> <div id="resultBox" class="inline-block p-6 bg-blue-50 rounded-[2rem] border border-blue-100"> <span class="block text-[10px] font-bold uppercase text-blue-600 mb-1 tracking-widest">Resultado de X</span> <div id="resultOutput" class="text-5xl font-black text-blue-700">
?
</div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es una proporción?
</h2> <p>
Una proporción expresa que dos fracciones son equivalentes. Se lee como:
        "A es a B como C es a D". Para resolverla, aplicamos el producto
        cruzado:
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-blue-400 font-mono text-2xl">
A \\cdot D = B \\cdot C
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Escalado de Imágenes</h4> <p class="text-xs leading-relaxed">
Si tenés una imagen de 1920x1080 y querés que el ancho sea 1280,
            esta calculadora te dirá que el alto proporcional (D) debe ser 720.
</p> </div> <div class="p-10 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Proporciones en Diseño Web
</h4> <p class="text-xs leading-relaxed">
Ayuda a mantener la armonía visual usando la [Regla de
            3](/matematica/regla-de-tres) o buscando proporciones áureas en tus
            contenedores de Tailwind.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-proporcion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-proporcion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-proporcion.astro";
const $$url = "/matematica/calculadora-proporcion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraProporcion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
