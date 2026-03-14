globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$ConversorTemperatura = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Temperatura | Celsius, Fahrenheit y Kelvin", "description": "Calculadora profesional para convertir unidades de temperatura. Incluye fórmulas de Celsius a Fahrenheit y Kelvin con ejemplos prácticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Conversor de <span class="text-orange-600">Temperatura</span> 🌡️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Transforma grados Celsius, Fahrenheit y Kelvin con precisión científica.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-3xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="valIn" class="block text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest mb-2">
Valor a convertir
</label> <input type="number" id="valIn" placeholder="Ej: 37" step="any" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 font-bold text-xl outline-none transition-all"> </div> <div> <label for="unitIn" class="block text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest mb-2">
Unidad original
</label> <select id="unitIn" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 font-bold text-lg outline-none cursor-pointer"> <option value="C">Celsius (&deg;C)</option> <option value="F">Fahrenheit (&deg;F)</option> <option value="K">Kelvin (K)</option> </select> </div> </div> <button id="btnCalcTemp" class="w-full mt-6 bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-lg">
Realizar Conversión
</button> <div id="boxRes" class="hidden mt-10 p-8 bg-orange-50 rounded-[2.5rem] border-2 border-orange-100 animate-in fade-in zoom-in duration-500"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"> <div> <p id="lab1" class="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-2"></p> <div id="res1" class="text-4xl font-black text-orange-900 font-mono"></div> </div> <div> <p id="lab2" class="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-2"></p> <div id="res2" class="text-4xl font-black text-orange-900 font-mono"></div> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light"> <section class="mb-16"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
Entendiendo las Escalas Térmicas
</h2> <p class="text-lg leading-relaxed mb-6">
La conversión de temperatura es un proceso fundamental en ciencias,
          cocina y meteorología. A diferencia de otras unidades, las escalas de
          temperatura no siempre parten del mismo cero, lo que requiere fórmulas
          específicas para mantener la precisión.
</p>
[Image of temperature conversion formulas Celsius to Fahrenheit and
        Kelvin]
<div class="grid md:grid-cols-2 gap-6 my-10"> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center"> <p class="text-xs font-bold text-orange-400 mb-4 uppercase tracking-widest">
Celsius a Fahrenheit
</p> <p class="text-2xl font-mono">F = (C * 1.8) + 32</p> </div> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center"> <p class="text-xs font-bold text-orange-400 mb-4 uppercase tracking-widest">
Celsius a Kelvin
</p> <p class="text-2xl font-mono">K = C + 273.15</p> </div> </div> </section> <section class="mb-16"> <h2 class="text-3xl font-black text-slate-900 mb-6">
Puntos Críticos de Referencia
</h2> <div class="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200"> <ul class="space-y-4 list-none pl-0"> <li> <strong>Cero Absoluto:</strong> -273.15 &deg;C o 0 K. Es el punto donde
              el movimiento atómico se detiene.
</li> <li> <strong>Congelación del Agua:</strong> 0 &deg;C o 32 &deg;F.
</li> <li> <strong>Temperatura Corporal:</strong> Aproximadamente 37 &deg;C o 98.6
              &deg;F.
</li> <li> <strong>Ebullición del Agua:</strong> 100 &deg;C o 212 &deg;F a nivel
              del mar.
</li> </ul> </div> </section> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12"> <p class="text-sm text-slate-400">
"La precisión en la medida es la base de la ciencia moderna."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/unidades/conversor-temperatura.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/conversor-temperatura.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/conversor-temperatura.astro";
const $$url = "/unidades/conversor-temperatura";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ConversorTemperatura,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
