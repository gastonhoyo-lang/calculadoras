globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$LitrosAGalones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Litros a Galones | l a gal", "description": "Convertí litros a galones estadounidenses de forma rápida. Herramienta precisa para combustible, capacidad de tanques y líquidos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Litros a Galones
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Calculá el volumen de líquidos pasando del sistema métrico al sistema
        estadounidense con un solo clic.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center"> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Litros (l)
</label> <input type="number" id="lInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono text-3xl text-center" placeholder="3.78" step="any"> </div> <div class="flex justify-center"> <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold rotate-90 md:rotate-0 shadow-inner">
⇄
</div> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Galones (US gal)
</label> <input type="number" id="galInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1" step="any"> </div> </div> <div class="mt-8 p-4 bg-indigo-50 rounded-2xl text-center border border-indigo-100"> <p id="infoText" class="text-indigo-800 font-medium text-sm italic">
1 galón estadounidense equivale a exactamente 3.78541 litros.
</p> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
¿Cómo convertir litros a galones?
</h2> <p>
Existen dos tipos de galones: el <strong>estadounidense (US)</strong> y el <strong>imperial (UK)</strong>. Esta calculadora utiliza el
            estándar de EE.UU., que es el más común en América Latina y el
            comercio internacional.
</p> <p>
Para convertir litros a galones manualmente, dividí la cantidad de
            litros por <strong>3.785</strong>.
</p> <div class="bg-slate-900 p-6 rounded-2xl text-center my-6 shadow-xl"> <code class="text-indigo-400 font-mono text-lg">gal = litros / 3.7854</code> </div> </div> <div> <h3 class="text-xl font-bold text-slate-900 mb-4">
Tabla de Volumen Común
</h3> <div class="overflow-hidden rounded-2xl border border-slate-200"> <table class="w-full text-sm text-left m-0"> <thead class="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold"> <tr> <th class="px-4 py-2 border-b">Litros (l)</th> <th class="px-4 py-2 border-b">Galones (US gal)</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr><td class="px-4 py-2 font-mono">1 l</td><td class="px-4 py-2">0.26 gal</td></tr> <tr><td class="px-4 py-2 font-mono">5 l</td><td class="px-4 py-2">1.32 gal</td></tr> <tr><td class="px-4 py-2 font-mono">20 l</td><td class="px-4 py-2">5.28 gal</td></tr> <tr><td class="px-4 py-2 font-mono">50 l</td><td class="px-4 py-2">13.21 gal</td></tr> </tbody> </table> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-8 text-center">
Ejemplos Prácticos
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">⛽</span> <h4 class="font-bold text-slate-900 mb-2">Combustible</h4> <p class="text-xs leading-relaxed text-slate-600">
Un tanque de auto promedio tiene <strong>50 litros</strong>, lo que
            equivale a unos <strong>13.2 galones</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🐠</span> <h4 class="font-bold text-slate-900 mb-2">Acuarios</h4> <p class="text-xs leading-relaxed text-slate-600">
Una pecera pequeña de <strong>10 galones</strong> necesita <strong>37.8 litros</strong> de agua para llenarse.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">💧</span> <h4 class="font-bold text-slate-900 mb-2">Pinturas</h4> <p class="text-xs leading-relaxed text-slate-600">
El "balde" estándar de pintura de <strong>5 galones</strong> contiene
<strong>18.9 litros</strong>.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/litros-a-galones.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/litros-a-galones.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/litros-a-galones.astro";
const $$url = "/unidades/litros-a-galones";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$LitrosAGalones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
