globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$GalToL = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Galones a Litros | gal a l", "description": "Convertí galones estadounidenses a litros de forma exacta. Calculadora ideal para mecánica, acuarios y productos importados." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Galones a Litros
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Obtené la equivalencia exacta de galones estadounidenses en litros para
        tus proyectos y compras.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center"> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Galones (US gal)
</label> <input type="number" id="galInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1" step="any"> </div> <div class="flex justify-center"> <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold rotate-90 md:rotate-0 shadow-inner">
⇄
</div> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Litros (l)
</label> <input type="number" id="lInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono text-3xl text-center" placeholder="3.78" step="any"> </div> </div> <div class="mt-8 p-4 bg-indigo-50 rounded-2xl text-center border border-indigo-100"> <p id="infoText" class="text-indigo-800 font-medium text-sm italic">
1 galón (US) equivale a 3.785 litros.
</p> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
Cálculo de galones a litros
</h2> <p>
Aunque el litro es la unidad estándar de volumen en el Sistema
            Internacional, el galón estadounidense sigue siendo la medida de
            referencia para grandes volúmenes de líquidos en Norteamérica.
</p> <p>
Para realizar la conversión, debés multiplicar la cantidad de
            galones por <strong>3.78541</strong>.
</p> <div class="bg-slate-900 p-6 rounded-2xl text-center my-6 shadow-xl"> <code class="text-indigo-400 font-mono text-lg">litros = gal × 3.7854</code> </div> </div> <div> <h3 class="text-xl font-bold text-slate-900 mb-4">
Referencia de Galones a Litros
</h3> <div class="overflow-hidden rounded-2xl border border-slate-200"> <table class="w-full text-sm text-left m-0"> <thead class="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold"> <tr> <th class="px-4 py-2 border-b">Galones (gal)</th> <th class="px-4 py-2 border-b">Litros (l)</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr><td class="px-4 py-2 font-mono">1/2 gal</td><td class="px-4 py-2">1.89 l</td></tr> <tr><td class="px-4 py-2 font-mono">1 gal</td><td class="px-4 py-2">3.78 l</td></tr> <tr><td class="px-4 py-2 font-mono">5 gal</td><td class="px-4 py-2">18.92 l</td></tr> <tr><td class="px-4 py-2 font-mono">10 gal</td><td class="px-4 py-2">37.85 l</td></tr> </tbody> </table> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-8 text-center">
Contextos de uso común
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🛢️</span> <h4 class="font-bold text-slate-900 mb-2 italic">Aceite de Motor</h4> <p class="text-xs leading-relaxed text-slate-600">
Muchos aceites importados vienen en presentaciones de <strong>1 galón</strong> o <strong>5 cuartos</strong> (4.73 litros).
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🥛</span> <h4 class="font-bold text-slate-900 mb-2 italic">Bebidas</h4> <p class="text-xs leading-relaxed text-slate-600">
En EE.UU., la leche y los jugos suelen venderse en envases de <strong>medio galón</strong> (1.89 l) o <strong>un galón</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🏊</span> <h4 class="font-bold text-slate-900 mb-2 italic">Mantenimiento</h4> <p class="text-xs leading-relaxed text-slate-600">
Los productos químicos para piscinas a menudo indican dosis por cada <strong>10,000 galones</strong> (37,854 litros).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/gal-to-l.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/gal-to-l.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/gal-to-l.astro";
const $$url = "/unidades/gal-to-l";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GalToL,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
