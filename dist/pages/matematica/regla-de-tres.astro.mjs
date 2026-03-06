/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$ReglaDeTres = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Regla de Tres Simple | Directa e Inversa", "description": "Resolv\xE9 problemas de proporcionalidad con nuestra calculadora de regla de tres simple. Ideal para estudiantes, recetas y c\xE1lculos r\xE1pidos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Regla de <span class="text-emerald-600">Tres Simple</span> </h1> <p class="text-slate-500 text-lg font-medium">
Resolvé cualquier incógnita de proporcionalidad al instante.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm mb-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center"> <div class="text-center w-full"> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Si este valor (A)</label> <input type="number" id="valA" placeholder="A" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none text-center font-black text-2xl shadow-inner"> </div> <div class="text-slate-300 text-4xl hidden md:block">➞</div> <div class="text-center w-full"> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Es igual a este (B)</label> <input type="number" id="valB" placeholder="B" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none text-center font-black text-2xl shadow-inner"> </div> <div class="text-center w-full"> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Entonces este (C)</label> <input type="number" id="valC" placeholder="C" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none text-center font-black text-2xl shadow-inner"> </div> <div class="text-slate-300 text-4xl hidden md:block">➞</div> <div class="w-full bg-slate-900 p-4 rounded-2xl text-center"> <p class="text-emerald-400 text-xs font-bold uppercase mb-1">
Resultado (X)
</p> <div id="resX" class="text-white text-3xl font-black font-mono">
?
</div> </div> </div> <div class="flex flex-wrap gap-4 mt-10 justify-center"> <button id="btnDirecta" class="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all">Proporción Directa</button> <button id="btnInversa" class="bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all">Proporción Inversa</button> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo funciona la regla de tres?
</h2> <p>
Es el método más sencillo para resolver problemas de proporcionalidad.
        Conocemos tres datos y buscamos un cuarto.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro";
const $$url = "/matematica/regla-de-tres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ReglaDeTres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
