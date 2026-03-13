globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$CalculadoraMatrices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Matrices Online | Suma, Resta y Producto", "description": "Realizá operaciones con matrices de forma fácil. Suma, resta y multiplica matrices con explicaciones paso a paso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Matrices
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Operá con matrices de 2x2 de forma instantánea y aprendé las reglas de
        la ubicación de cada elemento.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-16"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <h3 class="text-center font-bold text-slate-400 uppercase text-xs">
Matriz A
</h3> <div class="grid grid-cols-2 gap-2 max-w-[200px] mx-auto"> <input type="number" id="a11" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="a11"> <input type="number" id="a12" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="a12"> <input type="number" id="a21" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="a21"> <input type="number" id="a22" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="a22"> </div> </div> <div class="space-y-4"> <h3 class="text-center font-bold text-slate-400 uppercase text-xs">
Matriz B
</h3> <div class="grid grid-cols-2 gap-2 max-w-[200px] mx-auto"> <input type="number" id="b11" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="b11"> <input type="number" id="b12" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="b12"> <input type="number" id="b21" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="b21"> <input type="number" id="b22" class="w-full p-4 bg-slate-50 rounded-xl text-center focus:ring-2 focus:ring-purple-500 outline-none" placeholder="b22"> </div> </div> </div> <div class="flex gap-2 mb-8"> <button id="btnSumar" class="flex-1 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 transition-all uppercase tracking-widest text-xs">Sumar</button> <button id="btnRestar" class="flex-1 py-4 bg-slate-800 text-white font-black rounded-2xl hover:bg-slate-900 transition-all uppercase tracking-widest text-xs">Restar</button> </div> <div id="resBox" class="hidden animate-in fade-in zoom-in duration-300 border-t pt-8"> <h3 class="text-center font-bold text-purple-600 uppercase text-xs mb-4 tracking-widest">
Matriz Resultante
</h3> <div class="grid grid-cols-2 gap-2 max-w-[160px] mx-auto"> <div id="r11" class="p-4 bg-purple-50 rounded-xl text-center font-black text-purple-800 border border-purple-100">
-
</div> <div id="r12" class="p-4 bg-purple-50 rounded-xl text-center font-black text-purple-800 border border-purple-100">
-
</div> <div id="r21" class="p-4 bg-purple-50 rounded-xl text-center font-black text-purple-800 border border-purple-100">
-
</div> <div id="r22" class="p-4 bg-purple-50 rounded-xl text-center font-black text-purple-800 border border-purple-100">
-
</div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-6">
Operaciones con Matrices
</h2> <p>
Una matriz es un conjunto bidimensional de números. Para sumar o restar
        matrices, estas deben tener la misma dimensión (mismo número de filas y
        columnas).
</p> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8"> <h3 class="text-lg font-bold mb-2">Regla de Oro</h3> <p class="text-sm">
En la suma y resta, operamos elemento por elemento. Es decir, el
          elemento en la posición <strong>(1,1)</strong> de la Matriz A se suma con
          el elemento <strong>(1,1)</strong> de la Matriz B.
</p> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-matrices.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-matrices.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-matrices.astro";
const $$url = "/matematica/calculadora-matrices";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraMatrices,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
