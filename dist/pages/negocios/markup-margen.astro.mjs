/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$MarkupMargen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Markup vs Margen de Ganancia | Chieffin", "description": "No confundas cu\xE1nto le sum\xE1s al costo con tu ganancia real. Calcul\xE1 el Markup y el Margen de tus productos f\xE1cilmente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Estrategia de Precios</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Markup vs <span class="text-indigo-600">Margen</span> 📈
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Entendé la rentabilidad real de tus productos para no perder dinero.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Costo del Producto ($)</label> <input type="number" id="costoProd" placeholder="Ej: 1000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Precio de Venta ($)</label> <input type="number" id="ventaProd" placeholder="Ej: 1500" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcM" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-xl">
Analizar Rentabilidad
</button> <div id="resM" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="grid grid-cols-2 gap-4 text-center"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-100"> <p class="text-slate-500 text-[10px] font-bold uppercase">
Markup
</p> <div id="valMarkup" class="text-3xl font-black text-slate-900">
0%
</div> <p class="text-[9px] text-slate-400 italic">Sobre el costo</p> </div> <div class="p-6 bg-indigo-50 rounded-3xl border border-indigo-100"> <p class="text-indigo-600 text-[10px] font-bold uppercase">
Margen
</p> <div id="valMargen" class="text-3xl font-black text-indigo-900">
0%
</div> <p class="text-[9px] text-indigo-400 italic">Sobre la venta</p> </div> </div> <div class="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center"> <p class="text-emerald-600 text-[10px] font-bold uppercase">
Ganancia Bruta
</p> <div id="gananciaBruta" class="text-4xl font-black text-emerald-900">
$0
</div> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cuál es la diferencia?
</h2> <p class="text-slate-600 text-sm">
Aunque se usan para lo mismo, miden cosas distintas y confundirlos es
          un error fatal en el comercio.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">1. Markup</h3> <p class="text-slate-600 text-sm">
Es el porcentaje que le sumás al <strong>costo</strong> para llegar al precio
          de venta. Si algo te sale \\$100 y lo vendés a \\$150, tu markup es del 50%.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
2. Margen de Ganancia
</h3> <p class="text-slate-600 text-sm italic">
Es el porcentaje del <strong>precio de venta</strong> que es utilidad. En
          el ejemplo anterior, de los \\$150 que cobrás, \\$50 son ganancia. Eso equivale
          a un 33.3% de margen.
</p> <div class="bg-slate-900 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2 text-indigo-400">Dato clave:</h4> <p class="text-slate-300 text-sm leading-relaxed">
Tu margen nunca puede ser del 100% o más (a menos que el costo sea
            cero), pero tu markup puede ser de 200%, 500% o infinito.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/markup-margen.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/markup-margen.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/negocios/markup-margen.astro";
const $$url = "/negocios/markup-margen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MarkupMargen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
