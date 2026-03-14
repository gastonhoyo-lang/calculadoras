globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$Ecuaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ecuaciones de Primer Grado | Chieffin", "description": "Resolvé ecuaciones lineales de forma rápida. Introducí los valores y obtené el resultado de x con el desarrollo del problema." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Matemática</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Resuelve <span class="text-indigo-600">Ecuaciones</span> 🧮
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Ecuaciones lineales simples de la forma $ax + b = c$
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8"> <div class="flex items-center justify-center gap-2 text-2xl font-black text-slate-700"> <input type="number" id="coefA" placeholder="a" class="w-16 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 text-center outline-none"> <span>x +</span> <input type="number" id="coefB" placeholder="b" class="w-16 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 text-center outline-none"> <span>=</span> <input type="number" id="coefC" placeholder="c" class="w-16 p-3 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 text-center outline-none"> </div> <button id="btnEcuacion" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-xl">
Resolver ahora
</button> <div id="resEcuacion" class="hidden space-y-4 animate-in fade-in zoom-in duration-300"> <div class="p-6 bg-indigo-50 rounded-[2rem] border-2 border-indigo-100 border-dashed"> <p class="text-indigo-600 font-bold text-xs uppercase mb-4 text-center tracking-widest">
Resultado de X:
</p> <div id="valorX" class="text-5xl font-black text-indigo-900 text-center tracking-tighter mb-4">
x = 0
</div> <div class="space-y-2 text-sm font-mono text-indigo-800 bg-white/50 p-4 rounded-xl"> <p class="font-bold border-b border-indigo-100 pb-1 mb-2">
Procedimiento:
</p> <div id="paso1"></div> <div id="paso2"></div> <div id="paso3"></div> </div> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Qué es una ecuación lineal?
</h2> <p class="text-slate-600 text-sm leading-relaxed">
Es una igualdad matemática con una o más incógnitas (generalmente
          representadas por la letra <strong>x</strong>) que están elevadas a la
          primera potencia.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Pasos para resolverla:
</h3> <ol class="text-slate-600 space-y-2 text-sm"> <li> <strong>Agrupar:</strong> Pasar los términos independientes (números sin
            x) al otro lado del igual, cambiando su signo.
</li> <li> <strong>Operar:</strong> Sumar o restar los valores resultantes.
</li> <li> <strong>Despejar:</strong> El coeficiente que acompaña a la <strong>x</strong> (que está multiplicando) pasa dividiendo al otro lado.
</li> </ol> <div class="bg-indigo-900 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2 text-indigo-300">Recordatorio</h4> <p class="text-slate-300 text-xs leading-relaxed italic">
"Lo que está sumando pasa restando, lo que está multiplicando pasa
            dividiendo". Esa es la regla de oro del despeje.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/ecuaciones.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/ecuaciones.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/ecuaciones.astro";
const $$url = "/utiles/ecuaciones";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Ecuaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
