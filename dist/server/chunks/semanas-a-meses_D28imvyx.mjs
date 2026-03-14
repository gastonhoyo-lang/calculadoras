globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$SemanasAMeses = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Semanas a Meses | Calculadora de Tiempo Precisa", "description": "Convierte semanas a meses de forma exacta. Guía sobre el mes promedio (4.345 semanas) y ejemplos para proyectos y gestación." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Semanas a <span class="text-indigo-600">Meses</span> 🗓️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Herramienta de conversión temporal para planificación de proyectos,
        finanzas y salud.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-2xl mx-auto mb-20"> <div class="space-y-6"> <div> <label for="inputWeeksFinal" class="block text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest mb-2">
Cantidad de Semanas
</label> <input type="number" id="inputWeeksFinal" placeholder="Ej: 12" step="any" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 font-bold text-xl outline-none transition-all shadow-sm"> </div> <button id="btnCalcFinal" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-lg">
Calcular Meses
</button> </div> <div id="resBoxFinal" class="hidden mt-10 p-8 bg-indigo-50 rounded-[2.5rem] border-2 border-indigo-100 animate-in fade-in zoom-in duration-500 text-center"> <p class="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-2">
Resultado Final
</p> <div id="outputValFinal" class="text-5xl font-black text-indigo-900 mb-2 font-mono"></div> <div class="h-px bg-indigo-200 w-full my-6"></div> <p id="detailFinal" class="text-sm text-indigo-700 font-medium italic"></p> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light"> <section class="mb-16"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Por qué es difícil calcular semanas a meses?
</h2> <p class="text-lg leading-relaxed mb-6">
A diferencia de otras conversiones temporales, pasar de semanas a
          meses no es una operación lineal simple. Esto se debe a que los meses
          en el calendario gregoriano no tienen una duración uniforme. Mientras
          que febrero tiene 28 o 29 días, otros meses tienen 30 o 31. Esta
          irregularidad hace que una "semana" no encaje perfectamente dentro de
          un "mes" de forma constante.
</p> <p class="text-lg leading-relaxed mb-6">
Muchas personas cometen el error de asumir que un mes tiene
          exactamente 4 semanas. Sin embargo, si multiplicamos 4 semanas por 7
          días, obtenemos solo 28 días. Esto solo sería exacto para el mes de
          febrero en años no bisiestos. Para obtener una conversión profesional
          y precisa, debemos utilizar el <strong>mes promedio</strong>.
</p> </section> <section class="mb-16"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic text-center">
La Constante del Mes Promedio
</h2> <p class="mb-6 leading-relaxed">
Para propósitos de cálculo financiero, médico y de planificación, se
          utiliza el valor de semanas promedio por mes. Un año tiene 52.14
          semanas repartidas en 12 meses. Al realizar la división, descubrimos
          que un mes promedio tiene aproximadamente 4.345 semanas.
</p> <div class="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl text-center mb-10 overflow-hidden"> <h4 class="text-indigo-400 font-bold mb-6 uppercase tracking-widest text-xs">
Fórmula Estándar
</h4> <div class="text-3xl font-mono">Meses = Semanas / 4.345</div> </div> </section> <section class="mb-16"> <h2 class="text-3xl font-black text-slate-900 mb-8 text-center italic">
Ejemplos Prácticos
</h2> <div class="space-y-6"> <div class="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Ejemplo 1: Planificación de Proyectos
</h4> <p class="text-sm text-slate-600">
Un hito se cumple en 12 semanas.
</p> <p class="text-sm font-bold mt-2 text-indigo-700 italic">
Cálculo: 12 / 4.345 = 2.76 Meses (Casi 3 meses).
</p> </div> <div class="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Ejemplo 2: Período de Gestación
</h4> <p class="text-sm text-slate-600">Un embarazo de 40 semanas.</p> <p class="text-sm font-bold mt-2 text-indigo-700 italic">
Cálculo: 40 / 4.345 = 9.2 Meses.
</p> </div> </div> </section> <section class="mb-16"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic text-center text-balance">
Comparativa: Duración por Mes
</h2> <div class="overflow-x-auto rounded-3xl border border-slate-100"> <table class="w-full text-left bg-white"> <thead class="bg-slate-900 text-white"> <tr> <th class="p-4">Días del Mes</th> <th class="p-4">Semanas Totales</th> <th class="p-4">Frecuencia</th> </tr> </thead> <tbody> <tr class="border-b"> <td class="p-4">28 días</td> <td class="p-4">4.00 semanas</td> <td class="p-4">Febrero (Normal)</td> </tr> <tr class="border-b bg-slate-50"> <td class="p-4">30 días</td> <td class="p-4">4.28 semanas</td> <td class="p-4">4 meses al año</td> </tr> <tr class="border-b"> <td class="p-4">31 días</td> <td class="p-4">4.42 semanas</td> <td class="p-4">7 meses al año</td> </tr> </tbody> </table> </div> </section> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12"> <p class="text-sm text-slate-400">
"Administrar el tiempo requiere precisión, no suposiciones."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/unidades/semanas-a-meses.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/semanas-a-meses.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/semanas-a-meses.astro";
const $$url = "/unidades/semanas-a-meses";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SemanasAMeses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
