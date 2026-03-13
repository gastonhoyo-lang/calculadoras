globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$Logaritmos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Logaritmos | Chieffin", "description": "Calculá logaritmos de cualquier base y logaritmos naturales (ln) rápidamente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de Logaritmos
</h1> <p class="text-slate-600 text-lg">
Calculá el valor de y en: log<sub>base</sub>(argumento) = y
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <div> <label class="block text-sm font-bold mb-2 text-slate-700">Base</label> <input type="number" id="baseInput" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500" placeholder="Ej: 10 (Vacío para ln)"> </div> <div> <label class="block text-sm font-bold mb-2 text-slate-700">Argumento</label> <input type="number" id="argInput" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500" placeholder="Ej: 100"> </div> </div> <button id="btnCalcular" class="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
Calcular Logaritmo
</button> <div id="resultado" class="mt-8 p-6 rounded-2xl hidden"></div> </div> <section class="mt-16 prose prose-slate max-w-none border-t border-slate-100 pt-10 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-4">
¿Qué es un logaritmo?
</h2> <p>
El logaritmo de un número es el exponente al cual se debe elevar una
        base fija para obtener dicho número.
</p> <div class="bg-orange-50 p-6 rounded-xl text-center text-xl my-6 border border-orange-100 italic">
Si b<sup>y</sup> = x, entonces log<sub>b</sub>(x) = y
</div> <h3 class="text-xl font-bold text-slate-900 mb-3 text-orange-600">
Ejemplos Rápidos
</h3> <ul class="list-disc pl-5 space-y-2"> <li><strong>log<sub>10</sub>(100) = 2</strong> (porque 10² = 100)</li> <li><strong>log<sub>2</sub>(8) = 3</strong> (porque 2³ = 8)</li> <li><strong>ln(e) = 1</strong> (logaritmo natural de base e)</li> </ul> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro";
const $$url = "/matematica/logaritmos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Logaritmos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
