globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$LbToKg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Libras a Kilogramos | lb a kg", "description": "Convertí libras a kilogramos de forma rápida y precisa. Calculadora ideal para gimnasio, cocina y comercio internacional." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Libras a Kilogramos
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Transformá unidades de masa del sistema imperial al métrico decimal con
        precisión total.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center"> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Libras (lb)
</label> <input type="number" id="lbInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1" step="any"> </div> <div class="flex justify-center"> <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold rotate-90 md:rotate-0 shadow-inner">
⇄
</div> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">
Kilogramos (kg)
</label> <input type="number" id="kgInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-mono text-3xl text-center" placeholder="0.45" step="any"> </div> </div> <div class="mt-8 p-4 bg-emerald-50 rounded-2xl text-center border border-emerald-100"> <p id="infoText" class="text-emerald-800 font-medium text-sm italic">
1 libra equivale a exactamente 0.45359237 kilogramos.
</p> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
Cómo pasar de lb a kg
</h2> <p>
La libra (lb) es una unidad de masa utilizada principalmente en
            Estados Unidos y otros países de influencia anglosajona. Para
            convertirla al sistema métrico (kilogramos), se utiliza la tasa de
            conversión internacional estándar.
</p> <p>
La fórmula matemática es dividir el valor de las libras por <strong>2.20462</strong> o multiplicarlo por <strong>0.45359</strong>.
</p> <div class="bg-slate-900 p-6 rounded-2xl text-center my-6 shadow-xl"> <code class="text-emerald-400 font-mono text-lg">kg = lb × 0.45359</code> </div> </div> <div> <h3 class="text-xl font-bold text-slate-900 mb-4">
Tabla de Referencia Rápida
</h3> <div class="overflow-hidden rounded-2xl border border-slate-200"> <table class="w-full text-sm text-left m-0"> <thead class="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold"> <tr> <th class="px-4 py-2 border-b">Libras (lb)</th> <th class="px-4 py-2 border-b">Kilogramos (kg)</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr><td class="px-4 py-2 font-mono">1 lb</td><td class="px-4 py-2">0.45 kg</td></tr> <tr><td class="px-4 py-2 font-mono">10 lb</td><td class="px-4 py-2">4.54 kg</td></tr> <tr><td class="px-4 py-2 font-mono">25 lb</td><td class="px-4 py-2">11.34 kg</td></tr> <tr><td class="px-4 py-2 font-mono">50 lb</td><td class="px-4 py-2">22.68 kg</td></tr> <tr><td class="px-4 py-2 font-mono">100 lb</td><td class="px-4 py-2">45.36 kg</td></tr> </tbody> </table> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-12 mb-8 text-center">
Usos comunes de esta conversión
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🥤</span> <h4 class="font-bold text-slate-900 mb-2">Suplementos</h4> <p class="text-xs leading-relaxed text-slate-600">
Muchos botes de proteína se venden por <strong>2 lbs</strong> o <strong>5 lbs</strong>, que equivalen a 0.9 kg y 2.26 kg respectivamente.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">🏋️</span> <h4 class="font-bold text-slate-900 mb-2">Mancuernas</h4> <p class="text-xs leading-relaxed text-slate-600">
En algunos gimnasios las pesas están marcadas en libras. Una
            mancuerna de <strong>20 lbs</strong> pesa cerca de <strong>9 kg</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"> <span class="text-2xl mb-2 block">👶</span> <h4 class="font-bold text-slate-900 mb-2">Peso Infantil</h4> <p class="text-xs leading-relaxed text-slate-600">
En países como EE.UU., el peso de un bebé se reporta en libras y
            onzas. <strong>8 lbs</strong> son aproximadamente <strong>3.6 kg</strong>.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/lb-to-kg.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/lb-to-kg.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/lb-to-kg.astro";
const $$url = "/unidades/lb-to-kg";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$LbToKg,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
