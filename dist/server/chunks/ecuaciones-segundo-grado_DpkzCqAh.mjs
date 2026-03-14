globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$EcuacionesSegundoGrado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ecuaciones de Segundo Grado | Paso a Paso", "description": "Resolvé ecuaciones cuadráticas usando la fórmula de Bhaskara. Incluye ejemplos resueltos y explicación del discriminante." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de Ecuaciones de Segundo Grado
</h1> <p class="text-slate-600">
Resolvé ecuaciones de la forma: <span class="font-mono bg-slate-100 px-2 py-1 rounded">ax² + bx + c = 0</span> </p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-3 gap-4 mb-8"> <div> <label class="block text-sm font-bold mb-2">Valor a</label> <input type="number" id="valA" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500" placeholder="Ej: 1"> </div> <div> <label class="block text-sm font-bold mb-2">Valor b</label> <input type="number" id="valB" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500" placeholder="Ej: -5"> </div> <div> <label class="block text-sm font-bold mb-2">Valor c</label> <input type="number" id="valC" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500" placeholder="Ej: 6"> </div> </div> <button id="btnCalcular" class="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
Calcular Raíces
</button> <div id="resultado" class="mt-8 p-6 rounded-2xl hidden text-center font-bold"></div> </div> <section class="mt-16 prose prose-slate max-w-none border-t border-slate-100 pt-10 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Guía: Cómo resolver ecuaciones cuadráticas
</h2> <p class="mb-4">
Resolver una ecuación de segundo grado consiste en encontrar los valores
        de <strong>x</strong> que hacen que la igualdad sea cero. Para esto, utilizamos
        la <strong>Fórmula General (Bhaskara)</strong>:
</p> <div class="bg-indigo-50 p-6 rounded-xl text-center text-2xl my-6 text-indigo-900 border border-indigo-100 font-serif italic">
x = (-b ± √(b² - 4ac)) / 2a
</div> <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 italic">
Ejemplos Paso a Paso
</h3> <div class="space-y-6"> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200"> <h4 class="font-black text-indigo-600 mb-2">
Ejemplo 1: Dos soluciones reales
</h4> <p class="font-mono mb-2 text-lg">x² - 5x + 6 = 0</p> <ul class="text-sm space-y-1"> <li><strong>Valores:</strong> a=1, b=-5, c=6</li> <li> <strong>Discriminante:</strong> (-5)² - 4(1)(6) = 25 - 24 = <strong>1</strong> (Positivo)
</li> <li><strong>Resultado:</strong> x₁ = 3, x₂ = 2</li> </ul> </div> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200"> <h4 class="font-black text-indigo-600 mb-2">
Ejemplo 2: Una solución única
</h4> <p class="font-mono mb-2 text-lg">x² - 4x + 4 = 0</p> <ul class="text-sm space-y-1"> <li><strong>Valores:</strong> a=1, b=-4, c=4</li> <li> <strong>Discriminante:</strong> (-4)² - 4(1)(4) = 16 - 16 = <strong>0</strong> </li> <li><strong>Resultado:</strong> x = 2</li> </ul> </div> </div> <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">
¿Qué significa el Discriminante (Δ)?
</h3> <p>
El valor obtenido dentro de la raíz cuadrada ($b^2 - 4ac$) es
        fundamental para entender la naturaleza de las raíces:
</p> <table class="w-full border-collapse mt-4"> <thead> <tr class="bg-slate-100 text-left"> <th class="p-3 border">Valor del Δ</th> <th class="p-3 border">Tipo de Solución</th> </tr> </thead> <tbody> <tr> <td class="p-3 border font-bold text-emerald-600">Mayor a 0</td> <td class="p-3 border">Dos raíces reales distintas.</td> </tr> <tr> <td class="p-3 border font-bold text-blue-600">Igual a 0</td> <td class="p-3 border">Una raíz real única (doble).</td> </tr> <tr> <td class="p-3 border font-bold text-red-600">Menor a 0</td> <td class="p-3 border">Sin raíces reales (números complejos).</td> </tr> </tbody> </table> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/ecuaciones-segundo-grado.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/ecuaciones-segundo-grado.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/ecuaciones-segundo-grado.astro";
const $$url = "/matematica/ecuaciones-segundo-grado";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$EcuacionesSegundoGrado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
