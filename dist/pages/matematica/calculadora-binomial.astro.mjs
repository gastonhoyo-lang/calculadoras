/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$CalculadoraBinomial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Probabilidad Binomial | Paso a Paso" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Probabilidad Binomial
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Calculá la probabilidad de obtener un número exacto de éxitos en una
        serie de experimentos independientes con solo dos resultados posibles.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-md mx-auto mb-16"> <div class="space-y-4 mb-6"> <div> <label class="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">Ensayos (n)</label> <input type="number" id="n" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Ej: 10"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">Éxitos (k)</label> <input type="number" id="k" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Ej: 3"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-500 mb-1 ml-1">Probabilidad de éxito (p)</label> <input type="number" step="0.01" id="p" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Ej: 0.5"> </div> </div> <button id="go" class="w-full py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 uppercase tracking-wider">
Calcular ahora
</button> <div id="out" class="mt-8 text-center hidden animate-in fade-in zoom-in duration-300"> <span class="text-xs font-bold text-blue-400 uppercase tracking-widest">Resultado</span> <div id="res-val" class="text-5xl font-black text-blue-700 mt-1"></div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> <div> <h2 class="text-2xl font-black text-slate-900 mb-4 italic">
¿Qué es la distribución binomial?
</h2> <p class="mb-4">
Es una distribución de probabilidad que cuenta el número de éxitos
            en una secuencia de <strong>n</strong> ensayos independientes entre sí,
            con una probabilidad fija <strong>p</strong> de ocurrencia del éxito.
</p> <p class="text-sm bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800"> <strong>Dato:</strong> Solo se puede aplicar cuando existen dos resultados
            únicos (éxito/fracaso, cara/seca, pasa/no pasa).
</p> </div> <div class="bg-slate-50 p-6 rounded-[2rem] border border-slate-200"> <h2 class="text-xl font-black text-slate-900 mb-4">La Fórmula</h2>
[Image of binomial probability distribution formula]
<div class="text-center py-4"> <p class="text-lg font-serif italic text-slate-800">
P(X = k) = (n! / (k!(n-k)!)) * p<sup>k</sup> * (1-p)<sup>n-k</sup> </p> </div> </div> </div> <h2 class="text-2xl font-black text-slate-900 mt-16 mb-6">
Ejemplos Prácticos
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"> <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mb-4 text-xl">
1
</div> <h3 class="text-lg font-bold mb-2">Lanzamiento de Monedas</h3> <p class="text-sm">
Si lanzamos una moneda <strong>10 veces</strong>, ¿qué probabilidad
            hay de sacar exactamente <strong>5 caras</strong>?
</p> <p class="text-xs mt-3 text-slate-500 font-mono">
n=10, k=5, p=0.5 → Resultado: 24.61%
</p> </div> <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"> <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mb-4 text-xl">
2
</div> <h3 class="text-lg font-bold mb-2">Control de Calidad</h3> <p class="text-sm">
En una fábrica el <strong>2%</strong> de las piezas son defectuosas. Si
            tomamos <strong>50 piezas</strong>, ¿cuál es la probabilidad de que <strong>2</strong> sean falladas?
</p> <p class="text-xs mt-3 text-slate-500 font-mono">
n=50, k=2, p=0.02 → Resultado: 18.58%
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro";
const $$url = "/matematica/calculadora-binomial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraBinomial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
