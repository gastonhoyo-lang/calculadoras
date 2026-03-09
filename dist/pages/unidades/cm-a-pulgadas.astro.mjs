/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$CmAPulgadas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Cent\xEDmetros a Pulgadas | cm a pulgadas", "description": "Convert\xED cent\xEDmetros a pulgadas de forma r\xE1pida y precisa. Ideal para televisores, ropa y medidas t\xE9cnicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Centímetros a Pulgadas
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Transformá medidas métricas al sistema imperial con resultados
        instantáneos.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center"> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">Centímetros (cm)</label> <input type="number" id="cmInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono text-3xl text-center" placeholder="2.54" step="any"> </div> <div class="flex justify-center"> <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold rotate-90 md:rotate-0">
⇆
</div> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest text-center">Pulgadas (in)</label> <input type="number" id="inchInput" class="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono text-3xl text-center" placeholder="1" step="any"> </div> </div> <div class="mt-8 p-4 bg-indigo-50 rounded-2xl text-center"> <p id="resultText" class="text-indigo-700 font-medium italic">
1 centímetro equivale a 0.3937 pulgadas
</p> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Fórmula de Conversión
</h2> <p>
Para pasar de centímetros a pulgadas, dividimos la cantidad de
        centímetros por <strong>2.54</strong>. Esto se debe a que una pulgada
        está definida exactamente como 2.54 cm.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-indigo-400 font-mono text-xl">
$$pulgadas = \\frac${cm}${2.54}$$
</span> </div> <h3 class="text-2xl font-bold text-slate-900 mb-4">
Equivalencias Rápidas
</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-xs text-slate-400 uppercase font-bold">10 cm</span> <span class="text-xl font-black text-slate-800">3.94"</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-xs text-slate-400 uppercase font-bold">25 cm</span> <span class="text-xl font-black text-slate-800">9.84"</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-xs text-slate-400 uppercase font-bold">50 cm</span> <span class="text-xl font-black text-slate-800">19.69"</span> </div> <div class="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100"> <span class="block text-xs text-slate-400 uppercase font-bold">100 cm</span> <span class="text-xl font-black text-slate-800">39.37"</span> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro";
const $$url = "/unidades/cm-a-pulgadas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CmAPulgadas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
