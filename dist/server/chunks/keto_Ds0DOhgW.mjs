globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$Keto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora Dieta Keto | Macros Cetogénicos Precisos", "description": "Calculá tus macronutrientes para la dieta keto. Ajuste preciso de grasas, proteínas y carbohidratos para entrar en cetosis de forma segura." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
Macros <span class="text-yellow-600">Keto</span> 🥑
</h1> <p class="text-slate-500 mt-4 text-lg font-medium">
Mantené tus carbohidratos bajos y tus grasas en el nivel óptimo para la
        cetosis.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 max-w-2xl mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 text-center tracking-widest">Calorías diarias objetivo</label> <input type="number" id="caloriasK" placeholder="Ej: 2000" class="w-full p-6 bg-slate-50 rounded-[2rem] outline-none font-black text-center text-3xl text-yellow-700 border-2 border-transparent focus:border-yellow-500 transition-all"> </div> <button id="btnKeto" class="w-full bg-yellow-600 text-white p-5 rounded-2xl font-bold hover:bg-yellow-700 transition-all shadow-lg shadow-yellow-100 active:scale-95">
Calcular Mis Macros
</button> </div> <div id="resKeto" class="hidden mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in zoom-in duration-300"> <div class="bg-yellow-50 p-6 rounded-[2rem] text-center border-2 border-yellow-100"> <p class="text-yellow-700 text-xs font-bold uppercase mb-2">
Grasas (70%)
</p> <span id="gKeto" class="text-3xl font-black text-yellow-900"></span> </div> <div class="bg-slate-50 p-6 rounded-[2rem] text-center border-2 border-slate-200"> <p class="text-slate-500 text-xs font-bold uppercase mb-2">
Proteínas (25%)
</p> <span id="pKeto" class="text-3xl font-black text-slate-900"></span> </div> <div class="bg-green-50 p-6 rounded-[2rem] text-center border-2 border-green-100"> <p class="text-green-700 text-xs font-bold uppercase mb-2">
Carbos (5%)
</p> <span id="cKeto" class="text-3xl font-black text-green-900"></span> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué son los macros en la Dieta Keto?
</h2> <p>
En la dieta cetogénica, el objetivo es cambiar el combustible
            principal de tu cuerpo: de glucosa (azúcar) a <strong>cetonas</strong> (grasa). Para lograr este estado de <strong>cetosis</strong>, la
            distribución de macronutrientes debe ser muy específica.
</p> <p class="mt-4">
A diferencia de una dieta convencional, en Keto la grasa no es el
            enemigo, sino tu principal fuente de energía. Nuestra calculadora
            utiliza la proporción estándar de oro: <strong>70% grasas, 25% proteínas y 5% carbohidratos netos</strong>.
</p> </div> <div class="space-y-6"> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem]"> <h3 class="text-xl font-bold mb-4 text-yellow-500">
La regla de los Carbohidratos
</h3> <p class="text-sm text-slate-300">
Para la mayoría de las personas, entrar en cetosis requiere
              mantener los carbohidratos netos por debajo de los <strong>20g a 50g por día</strong>. Por eso, el 5% es el límite crítico que no debemos superar.
</p> </div> </div> </div> <div class="mt-16 bg-yellow-50 p-10 rounded-[3rem] border border-yellow-100 text-center"> <h3 class="text-2xl font-black text-yellow-900 mb-6">
Cómo leer tus resultados
</h3> <div class="grid md:grid-cols-3 gap-8 text-left"> <div> <h4 class="font-bold text-yellow-800 uppercase text-xs mb-2">
🥑 Grasas
</h4> <p class="text-sm">
Son tu límite máximo. No es obligatorio comer toda la grasa, pero
              es la que te dará saciedad.
</p> </div> <div> <h4 class="font-bold text-yellow-800 uppercase text-xs mb-2">
🥩 Proteínas
</h4> <p class="text-sm">
Son un objetivo. Debes consumirlas para mantener tu masa muscular
              mientras pierdes grasa.
</p> </div> <div> <h4 class="font-bold text-yellow-800 uppercase text-xs mb-2">
🥦 Carbohidratos
</h4> <p class="text-sm">
Son un límite estricto. Superar este número puede sacarte del
              estado de cetosis instantáneamente.
</p> </div> </div> </div> <div class="mt-16 text-center"> <p class="text-sm italic text-slate-400"> <strong>Importante:</strong> Antes de comenzar un régimen restrictivo como
          la dieta keto, consultá con un nutricionista o médico, especialmente si
          tenés condiciones preexistentes.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/keto.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/keto.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/salud/keto.astro";
const $$url = "/salud/keto";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Keto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
