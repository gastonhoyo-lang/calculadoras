globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Horas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Diferencia de Horas | Calcular tiempo transcurrido", "description": "Calculá fácilmente cuántas horas y minutos hay entre dos momentos del día. Ideal para control de horarios laborales y horas de sueño." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Diferencia de <span class="text-blue-600">Horas</span> </h1> <p class="text-slate-500 text-lg font-medium">
Calculá el tiempo transcurrido entre dos horas de forma exacta.
</p> </header> <div class="grid md:grid-cols-2 gap-8 items-start mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Hora de Inicio</label> <input type="time" id="horaInicio" class="w-full p-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold text-2xl text-slate-700"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Hora de Finalización</label> <input type="time" id="horaFin" class="w-full p-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all font-bold text-2xl text-slate-700"> </div> <button id="btnCalcularHoras" class="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
Calcular Diferencia
</button> </div> <div id="resHorasCont" class="hidden space-y-4 animate-in fade-in zoom-in duration-500"> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center shadow-xl"> <p class="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">
Tiempo Transcurrido
</p> <h2 id="tiempoTotal" class="text-5xl font-black text-blue-400"></h2> </div> <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center"> <p class="text-blue-600 text-xs font-bold uppercase mb-1">
En formato decimal (para facturar)
</p> <span id="decimalTotal" class="text-2xl font-black text-blue-800"></span> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Para qué sirve calcular la diferencia horaria?
</h2> <p>
Saber exactamente cuánto tiempo ha pasado entre dos puntos del día es
        esencial para diversas actividades diarias. Nuestra herramienta elimina
        la confusión de los cálculos sexagesimales (base 60).
</p> <div class="grid md:grid-cols-3 gap-6 my-10"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100"> <h4 class="font-bold text-slate-900 mb-2">Gestión Laboral</h4> <p class="text-sm">
Calculá tus horas de entrada y salida para llevar un control preciso
            de tu jornada.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100"> <h4 class="font-bold text-slate-900 mb-2">Planificación</h4> <p class="text-sm">
Ideal para calcular tiempos de viaje, duración de clases o turnos
            médicos.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100"> <h4 class="font-bold text-slate-900 mb-2">Salud</h4> <p class="text-sm">
Medí tus ciclos de sueño para asegurarte de descansar lo suficiente
            cada noche.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Cómo pasar de minutos a decimal?
</h3> <p>
Si trabajás por hora, necesitás el formato decimal para multiplicar por
        tu tarifa. Por ejemplo, 1 hora y 30 minutos no son "1.30", sino <strong>1.5 horas</strong>. Dividimos los minutos por 60 para obtener el decimal correcto.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/horas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/horas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/horas.astro";
const $$url = "/utiles/horas/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Horas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
