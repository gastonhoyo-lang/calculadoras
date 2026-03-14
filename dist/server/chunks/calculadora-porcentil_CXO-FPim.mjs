globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraPorcentil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Percentiles Online | Estadística Fácil", "description": "Calculá el percentil de un conjunto de datos de forma rápida. Herramienta ideal para análisis de datos, educación y salud." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Percentil
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Descubrí qué valor corresponde a un determinado percentil dentro de tu
        muestra de datos.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Conjunto de Datos (separados por comas)</label> <textarea id="dataInput" rows="4" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 focus:bg-white outline-none transition-all font-mono text-sm" placeholder="Ej: 10, 20, 35, 40, 50, 70, 80"></textarea> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Percentil deseado (0-100)</label> <div class="relative"> <input type="number" id="percentileInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 90" min="0" max="100"> <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-300 text-xl">%</span> </div> </div> </div> <div class="text-center p-10 bg-violet-50 rounded-[2.5rem] border border-violet-100 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-violet-600 mb-2 tracking-widest">Valor del Percentil</span> <div id="resultOutput" class="text-6xl font-black text-violet-700 leading-none">
0
</div> <p id="calcStep" class="text-[10px] text-violet-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full italic">
Ingresá tus datos
</p> </div> <span class="absolute -right-6 -bottom-10 text-[12rem] font-black text-violet-100/50 select-none">Pₙ</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es un Percentil?
</h2> <p>
Un percentil es una medida estadística que indica el valor por debajo
        del cual se encuentra un determinado porcentaje de observaciones en un
        grupo. Por ejemplo, si estás en el <strong>percentil 90</strong> de una prueba,
        significa que obtuviste una puntuación mejor que el 90% de las personas.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-violet-400 font-mono text-xl">
Posición (i) = (P / 100) * (N + 1)
</span> <p class="text-[10px] text-slate-500 mt-2 italic">
P = Percentil, N = Número de datos
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Uso en SEO y Web</h4> <p class="text-xs leading-relaxed">
Las **Core Web Vitals** de Google usan el percentil 75 (P75) para
            determinar si un sitio es rápido o lento para la mayoría de sus
            usuarios.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Interpretación</h4> <p class="text-xs leading-relaxed">
No confundir con porcentaje. El percentil es una posición relativa.
            El percentil 50 coincide siempre con la <strong>Mediana</strong> del conjunto
            de datos.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-porcentil.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-porcentil.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-porcentil.astro";
const $$url = "/matematica/calculadora-porcentil/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraPorcentil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
