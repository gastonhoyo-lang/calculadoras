globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$Inflacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inflación | ¿Cuánto perdió tu dinero?", "description": "Calculá el impacto de la inflación en tus ahorros. Descubrí cuánto dinero necesitás hoy para mantener el mismo poder adquisitivo de hace un año." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Poder <span class="text-red-600">Adquisitivo</span> 💸
</h1> <p class="text-slate-500 text-lg font-medium">
Calculá cómo el aumento de precios afecta tu bolsillo.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 max-w-lg mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-2 tracking-widest text-center">Monto original ($)</label> <input type="number" id="montoI" placeholder="Ej: 1000" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none font-black text-2xl text-center transition-all"> </div> <div> <label class="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-2 tracking-widest text-center">Inflación acumulada (%)</label> <input type="number" id="pctI" placeholder="Ej: 150" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-red-500 outline-none font-black text-2xl text-center transition-all"> </div> <button id="btnInf" class="w-full bg-red-600 text-white p-5 rounded-2xl font-black hover:bg-red-700 transition-all shadow-xl shadow-red-100 active:scale-95 text-lg">
¿Cuánto valdría hoy?
</button> </div> <div id="resInf" class="hidden mt-10 p-8 bg-red-50 rounded-[2.5rem] border-2 border-red-100 text-center animate-in zoom-in duration-300"> <p class="text-red-600 text-[10px] font-black uppercase mb-2 tracking-widest">
Para comprar lo mismo hoy necesitás:
</p> <div id="valInf" class="text-5xl font-black text-slate-900 mb-2"></div> <div class="h-px bg-red-200 w-full my-4"></div> <p id="msgPerdida" class="text-xs text-red-700 font-medium"></p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es la inflación?
</h2> <p class="leading-relaxed">
La <strong>inflación</strong> es el aumento generalizado y sostenido de
            los precios de bienes y servicios en un mercado durante un periodo de
            tiempo. Cuando el nivel general de precios sube, con cada unidad de moneda
            se adquieren menos bienes y servicios.
</p> <p class="mt-4">
Esto se conoce como la pérdida del <strong>poder adquisitivo</strong>. Nuestra calculadora te ayuda a visualizar cuánto dinero extra
            necesitás para compensar ese aumento y mantener tu nivel de vida.
</p> </div> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem]"> <h3 class="text-xl font-bold mb-4 text-red-400">Conceptos clave</h3> <ul class="space-y-4 text-sm"> <li class="flex gap-3"> <span class="text-red-500">●</span> <span><strong>IPC:</strong> El Índice de Precios al Consumidor es el dato
                oficial que mide la inflación mes a mes.</span> </li> <li class="flex gap-3"> <span class="text-red-500">●</span> <span><strong>Canasta Básica:</strong> Es el conjunto de productos esenciales
                que se usan como referencia para el cálculo.</span> </li> <li class="flex gap-3"> <span class="text-red-500">●</span> <span><strong>Inflación Acumulada:</strong> Es la suma del impacto inflacionario
                a lo largo de varios meses o años.</span> </li> </ul> </div> </div> <div class="mt-16 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 text-center"> <h3 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo proteger tus ahorros?
</h3> <p class="text-slate-600 max-w-2xl mx-auto mb-8 text-sm">
Guardar "dinero bajo el colchón" en contextos inflacionarios es una
          pérdida segura de capital. Para combatir la inflación, los expertos
          suelen recomendar:
</p> <div class="grid md:grid-cols-3 gap-6"> <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"> <h4 class="font-bold text-red-600 mb-2">Inversión</h4> <p class="text-[11px]">
Activos que ajusten por inflación (bonos CER, propiedades, etc.).
</p> </div> <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"> <h4 class="font-bold text-red-600 mb-2">Moneda Fuerte</h4> <p class="text-[11px]">
Ahorrar en divisas con menor tasa de inflación histórica.
</p> </div> <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"> <h4 class="font-bold text-red-600 mb-2">Consumo Anticipado</h4> <p class="text-[11px]">
Adquirir bienes durables hoy antes de que vuelvan a subir.
</p> </div> </div> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro";
const $$url = "/finanzas/inflacion/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Inflacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
