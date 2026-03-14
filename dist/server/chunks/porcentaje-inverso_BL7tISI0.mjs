globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$PorcentajeInverso = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Porcentaje Inverso | Hallar Valor Original", "description": "Calculá el valor inicial de un número antes de aplicarle un aumento o descuento porcentual. Herramienta gratuita y precisa." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Porcentaje Inverso
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
¿Querés saber el precio original antes del descuento o el aumento?
        Calculalo al instante.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div class="flex gap-4 p-1 bg-slate-100 rounded-2xl"> <button id="btnDescuento" class="flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all bg-white shadow-sm text-amber-600">ERA UN DESCUENTO</button> <button id="btnAumento" class="flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-slate-600">ERA UN AUMENTO</button> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Valor Final (Actual)</label> <input type="number" id="finalValue" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 80"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Porcentaje (%)</label> <input type="number" id="percentage" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all font-mono text-xl" placeholder="Ej: 20"> </div> </div> <div class="text-center p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 relative overflow-hidden"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-amber-600 mb-2 tracking-widest">Valor Original</span> <div id="resultOutput" class="text-6xl font-black text-amber-700 leading-none">
0
</div> <p id="calcStep" class="text-[10px] text-amber-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full">
Resultado
</p> </div> <span class="absolute -right-6 -bottom-10 text-[12rem] font-black text-amber-100/50 select-none">%</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo calcular el valor original?
</h2> <p>
El porcentaje inverso no se calcula restando el mismo porcentaje al
        valor final. Si un producto de $100 tiene un 20% de aumento ($120),
        restarle el 20% a $120 no te devolverá $100. Se requiere una fórmula
        específica:
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-amber-400 font-mono text-2xl">
Original = Valor Final / (1 ± (Porcentaje / 100))
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Caso de Descuento</h4> <p class="text-xs leading-relaxed">
Si compraste algo a $80 con un 20% de descuento, el cálculo es $80 /
            0.80. El precio original era $100.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Utilidad Financiera</h4> <p class="text-xs leading-relaxed">
Es fundamental para desglosar impuestos o entender cuánto ha crecido
            una inversión en tu proyecto de [Interés
            Compuesto](/finanzas/interes-compuesto).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/porcentaje-inverso.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/porcentaje-inverso.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/porcentaje-inverso.astro";
const $$url = "/matematica/porcentaje-inverso";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PorcentajeInverso,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
