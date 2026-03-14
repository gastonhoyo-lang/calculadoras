globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$MetaAhorro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Meta de Ahorro | Chieffin", "description": "Planificá tus sueños. Calculá cuánto dinero necesitás ahorrar mensualmente para alcanzar tu objetivo en el tiempo que desees." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Planificación</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Meta de <span class="text-emerald-600">Ahorro</span> 🎯
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Ponéle fecha a tus sueños. Descubrí el plan mensual para llegar a tu
        objetivo.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">¿Cuánto dinero necesitás juntar? ($)</label> <input type="number" id="montoMeta" placeholder="Ej: 2000000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">¿En cuántos meses querés lograrlo?</label> <input type="number" id="plazoMeses" placeholder="Ej: 12" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ahorro previo disponible ($)</label> <input type="number" id="ahorroPrevio" placeholder="Ej: 50000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-bold text-xl"> <p class="text-[10px] text-slate-400 mt-2 italic">
Si empezás de cero, dejá 0.
</p> </div> </div> <button id="btnCalcMeta" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100">
Crear Mi Plan
</button> <div id="resMeta" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="p-8 bg-emerald-50 rounded-[2rem] border-2 border-emerald-100 border-dashed text-center"> <p class="text-emerald-600 font-bold text-sm uppercase mb-2">
Ahorro Mensual Necesario:
</p> <div id="ahorroMensual" class="text-5xl font-black text-emerald-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-emerald-200 w-full mb-4"></div> <p class="text-emerald-800 text-sm font-medium">
Faltan juntar <span id="montoFaltante" class="font-bold"></span> para
              la meta.
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
Estrategias para alcanzar tu meta
</h2> <p class="text-slate-600 text-sm">
Ahorrar no es solo guardar lo que sobra a fin de mes, sino separar lo
          que necesitás apenas cobrás tu sueldo.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
1. Automatizá el proceso
</h3> <p class="text-slate-600 text-sm">
Configurá una transferencia automática a otra cuenta o invertí ese
          dinero en un Plazo Fijo o Fondo Común apenas lo cobres.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
2. Combatí la inflación
</h3> <p class="text-slate-600 text-sm italic">
Si tu meta es a largo plazo, recordá que el dinero guardado "bajo el
          colchón" pierde valor. Considerá activos que protejan tu poder
          adquisitivo.
</p> <div class="bg-emerald-600 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2">Regla de Oro:</h4> <p class="text-emerald-100 text-sm leading-relaxed">
"No ahorres lo que queda después de gastar, gasta lo que queda
            después de ahorrar". - Warren Buffett.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/meta-ahorro.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/meta-ahorro.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/meta-ahorro.astro";
const $$url = "/finanzas/meta-ahorro";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MetaAhorro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
