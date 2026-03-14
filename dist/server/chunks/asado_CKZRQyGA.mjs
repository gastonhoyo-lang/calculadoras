globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$Asado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Asado | ¿Cuánto comprar para tu reunión?", "description": "Calculá la cantidad exacta de carne, achuras y carbón para tu asado. No te quedes corto ni desperdicies comida con nuestra guía parrillera." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-red-600">Asado</span> 🥩
</h1> <p class="text-slate-500 text-lg font-medium text-center">
Organizá tu reunión sin complicaciones. Calculá como un experto.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 flex flex-col justify-center"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 text-center tracking-widest">Cantidad de Comensales (Adultos)</label> <input type="number" id="personas" placeholder="Ej: 10" class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-red-500 font-black text-3xl text-center text-slate-800 outline-none transition-all"> </div> <button id="btnAsado" class="w-full bg-red-600 text-white p-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-95 text-xl">
Calcular Cantidades
</button> </div> <div id="resAsado" class="hidden space-y-4 animate-in fade-in zoom-in duration-300"> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl"> <h3 class="text-red-400 font-bold uppercase text-xs mb-6 text-center tracking-widest">
Lista de Compras Sugerida
</h3> <ul class="space-y-4"> <li class="flex justify-between border-b border-slate-800 pb-3 items-center"> <span class="text-slate-300">Carne (Vacío/Tira):</span> <span id="valCarne" class="font-black text-xl text-white"></span> </li> <li class="flex justify-between border-b border-slate-800 pb-3 items-center"> <span class="text-slate-300">Chorizos/Morcillas:</span> <span id="valAchuras" class="font-black text-xl text-white"></span> </li> <li class="flex justify-between border-b border-slate-800 pb-3 items-center"> <span class="text-slate-300">Carbón:</span> <span id="valCarbon" class="font-black text-xl text-white"></span> </li> <li class="flex justify-between items-center"> <span class="text-slate-300">Pan:</span> <span id="valPan" class="font-black text-xl text-white"></span> </li> </ul> <button id="btnCompartirAsado" class="hidden mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"> <span>Compartir en WhatsApp</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg> </button> <div class="mt-8 p-4 bg-slate-800 rounded-2xl text-center"> <p class="text-[11px] text-slate-400 uppercase font-bold italic">
* Cantidades estimadas para un asado estándar
</p> </div> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo calculamos las cantidades?
</h2> <p class="leading-relaxed">
Un buen asador sabe que no hay nada peor que quedarse corto, pero
            tampoco queremos desperdiciar. Nuestra calculadora utiliza la <strong>regla del medio kilo</strong>: estimamos 500g de carne por adulto, lo que permite un equilibrio
            perfecto entre cortes principales y achuras.
</p> <p class="mt-4">
Si incluís muchas ensaladas o entradas, estas cantidades pueden
            rendir un poco más, pero para un asado "puro", estos son los números
            que no fallan.
</p> </div> <div class="bg-red-50 p-8 rounded-[2.5rem] border border-red-100"> <h3 class="text-xl font-bold text-red-900 mb-4 text-center">
Tips de Parrillero 🇦🇷
</h3> <ul class="space-y-3 text-sm text-red-800 font-medium"> <li>
• <strong>El Carbón:</strong> Calculamos casi 1kg por persona para cortes
              que requieren fuego lento como el costillar.
</li> <li>
• <strong>Las Achuras:</strong> Estimamos 1.5 unidades (entre chorizo
              y morcilla) por cada comensal.
</li> <li>
• <strong>El Pan:</strong> Siempre calculamos 2 unidades (mignones o
              flautitas) para los choripanes y acompañar.
</li> </ul> </div> </div> <div class="mt-16 bg-slate-50 p-10 rounded-[3rem] border border-slate-100"> <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center text-balance">
Consejos para un asado exitoso
</h3> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="text-3xl mb-3">🔥</div> <h4 class="font-bold text-slate-800">El Fuego</h4> <p class="text-xs text-slate-500">
Empezá el fuego una hora antes de tirar la carne. Nunca uses
              maderas tratadas o pintadas.
</p> </div> <div class="text-center"> <div class="text-3xl mb-3">🧂</div> <h4 class="font-bold text-slate-800">La Sal</h4> <p class="text-xs text-slate-500">
Usá sal entrefina para que la carne absorba solo lo necesario.
              Salá justo antes de poner en la parrilla.
</p> </div> <div class="text-center"> <div class="text-3xl mb-3">🕒</div> <h4 class="font-bold text-slate-800">El Tiempo</h4> <p class="text-xs text-slate-500">
Primero van las achuras, luego los cortes finos y finalmente los
              cortes con hueso a fuego lento.
</p> </div> </div> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/asado.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/asado.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/asado.astro";
const $$url = "/utiles/asado";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Asado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
