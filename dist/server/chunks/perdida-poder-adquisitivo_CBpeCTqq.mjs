globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$PerdidaPoderAdquisitivo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Pérdida de Poder Adquisitivo | Valor del Dinero", "description": "Calculá cuánto valor perdió tu dinero debido a la inflación. Descubrí cuánto valen hoy tus ahorros o tu sueldo comparado con el pasado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Pérdida de Poder Adquisitivo
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No es que los precios suban, es que tu dinero vale cada vez menos."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Monto de Dinero ($)</label> <input type="number" id="amountInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 100000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Inflación del Periodo (%)</label> <input type="number" id="inflationInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 50"> </div> </div> <div class="text-center p-10 bg-slate-900 rounded-[2.5rem] shadow-lg relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-rose-400 mb-2 tracking-widest text-center">Valor Real Actual</span> <div id="realValueOutput" class="text-6xl font-black text-white leading-none">
$0
</div> <div class="mt-6 p-4 bg-white/10 rounded-2xl border border-white/10"> <span class="block text-[10px] font-bold text-slate-400 uppercase">Pérdida de Valor</span> <span id="lossOutput" class="text-2xl font-bold text-rose-500">0%</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/5 select-none">📉</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el Poder Adquisitivo?
</h2> <p>
El poder adquisitivo es la cantidad de bienes o servicios que podés
        comprar con una cantidad fija de dinero. Cuando hay inflación, los
        precios suben y, por lo tanto, con la misma cantidad de billetes comprás
        menos cosas.
</p> <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-8"> <h3 class="text-xl font-bold mb-4">La Fórmula del Valor Real</h3> <p class="text-sm">
Para saber cuánto valen hoy tus ahorros de ayer, usamos la siguiente
          relación:
</p> <div class="text-center py-4"> <span class="text-rose-600 font-mono text-xl bg-white px-6 py-3 rounded-xl shadow-sm inline-block">
Valor Real = Monto / (1 + Inflación)
</span> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Inflación vs Poder Adquisitivo
</h4> <p class="text-xs leading-relaxed">
No son lo mismo. Si la inflación es del 100%, tu poder adquisitivo
            no cae un 100% (eso significaría que tu dinero vale cero), sino que
            cae un 50% (comprás exactamente la mitad).
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">El Impuesto Invisible</h4> <p class="text-xs leading-relaxed">
A menudo se llama a la inflación "el impuesto a los pobres", ya que
            afecta más a quienes mantienen su riqueza en efectivo y no tienen
            acceso a activos que protejan su valor.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/perdida-poder-adquisitivo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/perdida-poder-adquisitivo.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/perdida-poder-adquisitivo.astro";
const $$url = "/finanzas/perdida-poder-adquisitivo";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PerdidaPoderAdquisitivo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
