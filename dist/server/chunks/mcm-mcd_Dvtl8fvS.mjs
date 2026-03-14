globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$McmMcd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de MCM y MCD | Mínimo Común Múltiplo y Máximo Común Divisor", "description": "Calculá el MCM y el MCD de dos o más números de forma rápida. Ideal para simplificar fracciones y resolver problemas matemáticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de MCM y MCD
</h1> <p class="text-slate-600 text-lg">
Ingresá los números separados por espacios o comas.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="mb-6"> <label class="block text-sm font-bold mb-2 text-slate-700">Tus números:</label> <input type="text" id="numInput" class="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none text-xl font-bold transition-all text-center" placeholder="Ej: 12, 18, 24"> </div> <button id="btnCalcular" class="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 text-lg">
Calcular MCM y MCD
</button> <div id="resultado" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 hidden"> <div class="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 text-center"> <span class="block text-indigo-600 font-bold uppercase tracking-wider text-xs mb-1">Mínimo Común Múltiplo</span> <div id="mcmRes" class="text-4xl font-black text-indigo-900">-</div> </div> <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-center"> <span class="block text-emerald-600 font-bold uppercase tracking-wider text-xs mb-1">Máximo Común Divisor</span> <div id="mcdRes" class="text-4xl font-black text-emerald-900">-</div> </div> </div> </div> <section class="mt-16 prose prose-slate max-w-none border-t border-slate-100 pt-10 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6 text-center">
¿Qué son el MCM y el MCD?
</h2> <p class="mb-6 text-center text-lg">
Estas dos operaciones son fundamentales en aritmética para trabajar con
        grupos de números y encontrar sus relaciones de divisibilidad.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10"> <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100"> <h3 class="text-indigo-700 font-bold text-xl mb-3">
MCM (Mínimo Común Múltiplo)
</h3> <p class="text-sm mb-4">
Es el número más pequeño que es múltiplo de todos los números del
            grupo. Es útil para:
</p> <ul class="list-disc pl-5 text-sm space-y-2"> <li>Sumar y restar fracciones con distinto denominador.</li> <li>
Calcular cuándo coincidirán dos eventos con distintas frecuencias.
</li> </ul> </div> <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-100"> <h3 class="text-emerald-700 font-bold text-xl mb-3">
MCD (Máximo Común Divisor)
</h3> <p class="text-sm mb-4">
Es el mayor número que divide exactamente a todos los números del
            grupo. Es útil para:
</p> <ul class="list-disc pl-5 text-sm space-y-2"> <li>Simplificar fracciones hasta su mínima expresión.</li> <li>Dividir objetos en grupos iguales lo más grandes posible.</li> </ul> </div> </div> <h3 class="text-2xl font-black text-slate-900 mb-4 italic">
Ejemplo Práctico: Números 12 y 18
</h3> <div class="space-y-4"> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200"> <p class="font-bold text-slate-800 mb-2 underline">
Paso 1: Descomposición en factores primos
</p> <ul class="font-mono text-sm space-y-1"> <li>12 = 2² × 3</li> <li>18 = 2 × 3²</li> </ul> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center"> <div class="p-4 bg-white border-2 border-indigo-200 rounded-xl"> <p class="font-bold text-indigo-800">Cálculo del MCM:</p> <p class="text-sm italic">
Comunes y no comunes con mayor exponente:
</p> <p class="font-mono mt-2 text-xl">
2² × 3² = 4 × 9 = <strong>36</strong> </p> </div> <div class="p-4 bg-white border-2 border-emerald-200 rounded-xl"> <p class="font-bold text-emerald-800">Cálculo del MCD:</p> <p class="text-sm italic">
Solo factores comunes con menor exponente:
</p> <p class="font-mono mt-2 text-xl">2 × 3 = <strong>6</strong></p> </div> </div> </div> <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">
¿Cuándo usar cada uno?
</h3> <p class="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400"> <strong>Regla de oro:</strong> Si el problema implica <strong>repetición o futuro</strong> (¿cuándo vuelven a verse?), usá el <strong>MCM</strong>. Si el
        problema implica <strong>repartir o cortar</strong> (¿cuántos caben?), usá
        el <strong>MCD</strong>.
</p> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro";
const $$url = "/matematica/mcm-mcd";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$McmMcd,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
