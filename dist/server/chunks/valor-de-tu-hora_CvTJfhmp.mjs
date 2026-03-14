globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$ValorDeTuHora = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Valor de tu Hora Freelance | Chieffin", "description": "Descubrí cuánto deberías cobrar por tu hora de trabajo considerando tus gastos, impuestos y el sueldo que deseás ganar." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Productividad & Negocios</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Valor de tu <span class="text-blue-600">Hora</span> ⏱️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
No regales tu trabajo. Calculá tu tarifa real basándote en tus costos y
        metas financieras.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Sueldo Mensual Deseado ($)</label> <input type="number" id="sueldo" placeholder="Ej: 800000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Gastos Fijos (Luz, Internet, Alquiler) ($)</label> <input type="number" id="gastos" placeholder="Ej: 150000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Horas/Día</label> <input type="number" id="horas" placeholder="6" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Días/Mes</label> <input type="number" id="dias" placeholder="20" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-xl"> </div> </div> </div> <button id="btnCalcularHora" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-100">
Calcular Mi Tarifa
</button> <div id="resultadoHora" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">
Tu hora mínima debe valer:
</p> <div id="montoHora" class="text-5xl font-black text-blue-900 tracking-tighter mb-3">
$0
</div> <div class="h-px bg-blue-200 w-full mb-4"></div> <p class="text-blue-800 text-sm font-medium">
Esto cubre tu sueldo ideal y tus gastos operativos.
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Por qué es vital saber el valor de tu hora?
</h2> <p class="text-slate-600 leading-relaxed">
Muchos profesionales independientes fallan al calcular sus precios
          porque solo consideran el tiempo de trabajo directo. Para que tu
          negocio sea sostenible, tu hora debe cubrir:
</p> <ul class="text-slate-600 space-y-2"> <li> <strong>Tus gastos operativos:</strong> Software, electricidad, internet
            y oficina.
</li> <li> <strong>Días no facturables:</strong> Considerá que hay días que no trabajás
            por enfermedad o vacaciones.
</li> <li> <strong>Impuestos:</strong> Recordá que del total, una parte se irá en
            obligaciones legales.
</li> </ul> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
El factor "Tiempo Productivo"
</h3> <p class="text-slate-600 italic text-sm">
Tip Pro: En un día de 8 horas, raramente se facturan las 8. Siempre
          hay tiempo dedicado a ventas, mails y administración. Recomendamos
          calcular sobre 6 horas reales.
</p> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/valor-de-tu-hora.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/valor-de-tu-hora.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/negocios/valor-de-tu-hora.astro";
const $$url = "/negocios/valor-de-tu-hora";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ValorDeTuHora,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
