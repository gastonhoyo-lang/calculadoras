globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$Cuotas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Cuotas con Interés | Chieffin", "description": "Calculá el valor de la cuota mensual y el precio final de tus compras financiadas según la tasa de interés." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Finanzas Personales</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculadora de <span class="text-indigo-600">Cuotas</span> 💳
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Te conviene financiarlo? Descubrí cuánto vas a terminar pagando
        realmente.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Precio de Contado ($)</label> <input type="number" id="precioContado" placeholder="Ej: 100000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Cantidad Cuotas</label> <select id="cantCuotas" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-lg appearance-none"> <option value="3">3 Cuotas</option> <option value="6">6 Cuotas</option> <option value="9">9 Cuotas</option> <option value="12" selected>12 Cuotas</option> <option value="18">18 Cuotas</option> <option value="24">24 Cuotas</option> </select> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">TNA (%)</label> <input type="number" id="tnaCuotas" placeholder="Ej: 60" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-xl"> </div> </div> </div> <button id="btnCalcCuotas" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-xl">
Calcular Mi Cuota
</button> <div id="resCuotas" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-indigo-50 rounded-[2rem] border-2 border-indigo-100 border-dashed text-center"> <p class="text-indigo-600 font-bold text-sm uppercase mb-2">
Valor de cada cuota:
</p> <div id="valorCuotaIndividual" class="text-5xl font-black text-indigo-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-indigo-200 w-full mb-4"></div> <p class="text-indigo-800 text-sm font-medium">
Total financiado: <span id="totalFinanciado" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cuotas con o sin interés?
</h2> <p class="text-slate-600 text-sm">
A veces el "precio de lista" en cuotas es más caro que el de contado.
          Para decidir, compará el <strong>Costo Financiero Total (CFT)</strong> contra
          la inflación estimada.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Sistema Francés
</h3> <p class="text-slate-600 text-sm">
Esta calculadora utiliza el sistema de amortización francés (el más
          usado en tarjetas de crédito), donde el interés se calcula sobre el
          saldo deudor.
</p> <div class="bg-indigo-600 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2">Tip de Compra:</h4> <p class="text-indigo-100 text-sm italic">
"Si la tasa de interés de las cuotas es menor a la inflación
            esperada para los próximos meses, ¡conviene financiar!"
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/cuotas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/cuotas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/cuotas.astro";
const $$url = "/finanzas/cuotas/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Cuotas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
