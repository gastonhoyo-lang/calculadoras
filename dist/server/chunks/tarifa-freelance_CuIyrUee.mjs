globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$TarifaFreelance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Tarifa Freelance | ¿Cuánto cobrar por hora?", "description": "Calculá tu valor hora profesional de forma precisa. Considerá gastos, impuestos, días de vacaciones y tu sueldo deseado para no perder dinero." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
Tu Valor <span class="text-indigo-600">Hora</span> 💼
</h1> <p class="text-slate-500 text-lg mt-4 font-medium">
No pongas precios al azar. Basá tu tarifa en datos reales.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm max-w-2xl mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2 tracking-widest">Sueldo neto deseado (Mensual)</label> <input type="number" id="sueldoD" placeholder="Ej: 1500" class="w-full p-5 bg-slate-50 rounded-[2rem] outline-none font-black text-2xl text-slate-800 border-2 border-transparent focus:border-indigo-500 transition-all text-center"> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2 tracking-widest">Gastos Fijos</label> <input type="number" id="gastosF" placeholder="Software, Luz, Internet" class="w-full p-5 bg-slate-50 rounded-[2rem] outline-none font-bold text-xl border-2 border-transparent focus:border-indigo-500 transition-all text-center"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2 tracking-widest">Horas facturables/mes</label> <input type="number" id="horasM" placeholder="Ej: 140" class="w-full p-5 bg-slate-50 rounded-[2rem] outline-none font-bold text-xl border-2 border-transparent focus:border-indigo-500 transition-all text-center"> </div> </div> <button id="btnFreelance" class="w-full bg-indigo-600 text-white p-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 text-xl">
Calcular Mi Tarifa
</button> </div> <div id="resFreelance" class="hidden mt-10 p-10 bg-indigo-900 text-white rounded-[2.5rem] text-center animate-in zoom-in duration-300"> <p class="text-indigo-300 text-xs font-bold uppercase mb-2 tracking-widest">
Tu tarifa mínima recomendada:
</p> <div class="text-5xl font-black mb-2"> <span id="valFreelance"></span> </div> <p class="text-indigo-400 text-sm">por hora de trabajo</p> <div class="h-px bg-indigo-800 w-full my-6"></div> <p class="text-[11px] text-indigo-200 italic leading-relaxed">
Recordá sumar impuestos y un margen para ahorros/emergencias a este
          valor base.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo calcular cuánto cobrar?
</h2> <p>
Muchos profesionales cometen el error de dividir el sueldo de un
            empleado por las horas del mes. Sin embargo, como <strong>freelance</strong>, vos sos responsable de tus propios beneficios: vacaciones, días
            por enfermedad, equipo y capacitaciones.
</p> <p class="mt-4">
Nuestra calculadora te ayuda a encontrar el <strong>"punto de equilibrio"</strong>, asegurando que todos tus costos operativos estén cubiertos antes
            de empezar a generar ganancias reales.
</p> </div> <div class="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100"> <h3 class="text-xl font-bold text-indigo-900 mb-4 text-center">
Factores que no debés olvidar
</h3> <ul class="space-y-3 text-sm text-indigo-800"> <li> <strong>• Horas Reales:</strong> No trabajás 8 horas netas. Considerá
              el tiempo de reuniones, presupuestos y administración.
</li> <li> <strong>• Impuestos:</strong> Dependiendo de tu país, reservá entre
              un 20% y un 35% para obligaciones fiscales.
</li> <li> <strong>• El "Colchón":</strong> Sumá un 10% extra para renovar tu computadora
              o herramientas de software.
</li> </ul> </div> </div> <div class="mt-16 bg-slate-900 text-white p-10 rounded-[3rem]"> <h3 class="text-2xl font-bold mb-6 text-center">
La Regla de Oro del Freelance
</h3> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="text-3xl mb-3">🏖️</div> <h4 class="font-bold text-indigo-400">Vacaciones</h4> <p class="text-xs text-slate-400">
Tus horas facturables deben cubrir los días que decidas descansar
              al año.
</p> </div> <div class="text-center"> <div class="text-3xl mb-3">📉</div> <h4 class="font-bold text-indigo-400">Baja Demanda</h4> <p class="text-xs text-slate-400">
Habrá meses lentos. Tu tarifa debe permitirte crear un fondo de
              emergencia.
</p> </div> <div class="text-center"> <div class="text-3xl mb-3">🎓</div> <h4 class="font-bold text-indigo-400">Especialización</h4> <p class="text-xs text-slate-400">
A mayor experiencia y nicho, mayor puede ser tu multiplicador de
              valor.
</p> </div> </div> </div> <div class="mt-16 text-center"> <p class="text-sm italic text-slate-400"> <strong>Aviso:</strong> Este cálculo es una base técnica. La tarifa final
          también depende de los precios de mercado, la urgencia del cliente y el
          valor específico que aportás al proyecto.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/tarifa-freelance.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/tarifa-freelance.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/negocios/tarifa-freelance.astro";
const $$url = "/negocios/tarifa-freelance";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TarifaFreelance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
