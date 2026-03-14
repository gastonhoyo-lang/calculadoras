globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$Ovulacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calendario de Ovulación | Calculá tus Días Fértiles", "description": "Descubrí tus días más fértiles y tu fecha de ovulación con nuestra calculadora. Ideal para quienes buscan concebir o conocer su ciclo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Calendario de <span class="text-pink-500">Ovulación</span> 🌸
</h1> <p class="text-slate-500 text-lg font-medium text-center">
Calculá tu ventana de fertilidad en segundos.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Último período (Fecha de inicio)</label> <input type="date" id="fechaPeriodo" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-lg outline-none focus:ring-2 focus:ring-pink-500 transition-all"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Duración del ciclo (Días)</label> <input type="number" id="duracionCiclo" placeholder="Promedio: 28" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-lg outline-none focus:ring-2 focus:ring-pink-500 transition-all"> </div> <button id="btnOvulacion" class="w-full bg-pink-500 text-white p-5 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100 active:scale-95">
Calcular Fertilidad
</button> </div> <div id="resOvulacion" class="hidden bg-slate-900 text-white p-10 rounded-[2.5rem] text-center flex flex-col justify-center animate-in zoom-in duration-300"> <p class="text-pink-400 text-xs font-bold uppercase mb-2 tracking-widest">
Tu día más fértil es el:
</p> <h2 id="diaFertil" class="text-4xl font-black text-white mb-4"></h2> <div class="h-px bg-slate-800 w-full my-4"></div> <p class="text-slate-400 text-sm leading-relaxed">
Tu <strong>ventana de fertilidad</strong> comienza 3 días antes y termina
          1 día después de esta fecha. Son los días con mayor probabilidad de concepción.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo funciona el cálculo de la ovulación?
</h2> <p class="leading-relaxed">
La ovulación es el proceso en el que un ovario libera un óvulo
            maduro. Una vez liberado, el óvulo desciende por la trompa de
            Falopio y permanece allí entre <strong>12 y 24 horas</strong>, donde
            puede ser fertilizado.
</p> <p class="mt-4">
Nuestra calculadora utiliza el método del calendario basado en tu <strong>duración de ciclo</strong>. Generalmente, la ovulación ocurre unos 14 días antes de que
            comience tu siguiente período. Si tu ciclo es de 28 días, ovularás
            el día 14, pero si es de 30, será cerca del día 16.
</p> </div> <div class="bg-pink-50 p-8 rounded-[2rem] border border-pink-100"> <h3 class="text-xl font-bold text-pink-900 mb-4 text-center">
La Ventana Fértil
</h3> <p class="text-sm text-pink-800">
Aunque el óvulo solo vive 24 horas, los espermatozoides pueden
            sobrevivir dentro del cuerpo hasta <strong>5 días</strong>. Por eso,
            tu "ventana fértil" incluye:
</p> <ul class="mt-4 space-y-2 text-sm text-pink-800 font-medium"> <li>• Los 3 a 5 días previos a la ovulación.</li> <li>• El día de la ovulación (pico máximo).</li> <li>• El día posterior a la ovulación.</li> </ul> </div> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <div class="text-4xl mb-4">🌡️</div> <h4 class="font-bold text-slate-800 mb-2">Temperatura Basal</h4> <p class="text-sm">
Un ligero aumento de temperatura (0.5°C) indica que ya has ovulado.
</p> </div> <div class="text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <div class="text-4xl mb-4">💧</div> <h4 class="font-bold text-slate-800 mb-2">Moco Cervical</h4> <p class="text-sm">
Si tiene consistencia elástica (clara de huevo), estás en tus días
            más fértiles.
</p> </div> <div class="text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <div class="text-4xl mb-4">⚡</div> <h4 class="font-bold text-slate-800 mb-2">Tests de LH</h4> <p class="text-sm">
Detectan el pico de la hormona luteinizante 24-48h antes de ovular.
</p> </div> </div> <div class="mt-16 bg-slate-50 p-8 rounded-[2rem] border border-slate-100"> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Es fiable este calendario?
</h3> <p class="text-sm italic text-slate-500"> <strong>Aviso importante:</strong> Esta herramienta proporciona una estimación
          basada en promedios estadísticos. No debe utilizarse como método anticonceptivo
          ni para reemplazar el consejo de un profesional médico. Los ciclos pueden
          variar por estrés, alimentación o condiciones de salud. Siempre consultá
          con tu ginecólogo.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro";
const $$url = "/salud/ovulacion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Ovulacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
