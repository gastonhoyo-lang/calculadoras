globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$DescuentoDoble = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Descuento Doble o Sucesivo | Chieffin", "description": "Calculá el descuento real cuando se aplican dos rebajas juntas (ej: 20% + 10%). No se suman, se encadenan." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Matemática Comercial</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Descuento <span class="text-pink-600">Doble</span> 🏷️+🏷️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Te ofrecen un 20% y luego un 10% extra? Descubrí cuál es el descuento
        real final.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Precio Original ($)</label> <input type="number" id="precioBaseDoble" placeholder="Ej: 10000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-pink-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">1er Descuento (%)</label> <input type="number" id="desc1" placeholder="20" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-pink-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">2do Descuento (%)</label> <input type="number" id="desc2" placeholder="10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-pink-500 outline-none transition-all font-bold text-xl"> </div> </div> </div> <button id="btnCalcDoble" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-pink-600 transition-all shadow-xl">
Calcular Descuento Final
</button> <div id="resDoble" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-pink-50 rounded-[2rem] border-2 border-pink-100 border-dashed text-center"> <p class="text-pink-600 font-bold text-sm uppercase mb-2">
Descuento Real Total:
</p> <div id="totalPorcentajeDoble" class="text-5xl font-black text-pink-900 tracking-tighter mb-2">
0%
</div> <div class="h-px bg-pink-200 w-full mb-4"></div> <p class="text-pink-800 text-sm font-medium">
Precio final: <span id="precioFinalDoble" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
La trampa de la suma
</h2> <p class="text-slate-600 text-sm">
Es un error común pensar que un 20% + un 10% de descuento extra
          equivale a un 30%. <strong>Esto es falso.</strong> </p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
¿Cómo funciona?
</h3> <p class="text-slate-600 text-sm italic">
Los descuentos son sucesivos. Primero se aplica el primer porcentaje
          al precio original, y luego el segundo porcentaje se aplica sobre el <strong>nuevo precio ya rebajado</strong>.
</p> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Ejemplo:</p> <p class="text-xs text-slate-500">
Si algo sale \\$100 y tiene un 20% + 10%: <br>
1. Baja a \\$80 (20% de 100). <br>
2. Luego baja a \\$72 (10% de 80). <br>
El descuento total real es del <strong>28%</strong>, no del 30%.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/descuento-doble.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/descuento-doble.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/descuento-doble.astro";
const $$url = "/utiles/descuento-doble";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DescuentoDoble,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
