globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$ValorPresente = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Valor Presente | Descuento de Capital", "description": "Calculá cuánto vale hoy una suma de dinero que recibirás en el futuro. Traé flujos de fondos al presente con nuestra calculadora financiera." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Valor Presente (VP)
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Descubrí cuánto vale hoy una suma futura aplicando una tasa de
        descuento.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Monto Futuro a Recibir ($)
</label> <input type="number" id="fvInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 10000"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Tasa de Descuento (%)
</label> <input type="number" id="rateInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 outline-none transition-all font-mono" placeholder="10"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Años
</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 outline-none transition-all font-mono" placeholder="5"> </div> </div> </div> <div id="pvCard" class="text-center p-10 bg-teal-600 rounded-[2.5rem] shadow-lg shadow-teal-200 relative overflow-hidden h-full flex flex-col justify-center min-h-[300px]"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">
Valor Presente Actual
</span> <div id="pvOutput" class="text-6xl font-black leading-none">$0</div> <div class="mt-8 p-4 bg-white/20 rounded-2xl backdrop-blur-sm inline-block border border-white/20"> <span id="discountLabel" class="text-sm font-bold">
Descuento aplicado: $0
</span> </div> </div> <span class="absolute -left-4 -top-10 text-[12rem] font-black text-white/10 select-none">VP</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
El Valor del Dinero en el Tiempo
</h2> <p>
El <strong>Valor Presente (VP)</strong> permite determinar el valor actual
            de una suma de dinero que se recibirá en el futuro. Es una herramienta
            vital para inversores, ya que ayuda a decidir si una inversión vale la
            pena hoy.
</p> <p>
Se basa en la premisa de que <strong>un dólar hoy vale más que un dólar mañana</strong>, debido a su capacidad de generar rendimientos (intereses) si se
            invierte de inmediato.
</p> </div> <div class="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-slate-800 text-center"> <span class="text-teal-400 font-mono text-xs mb-4 block uppercase tracking-widest font-bold">Fórmula de Descuento</span> <div class="text-white font-mono text-lg text-center leading-relaxed">
VP = FV / (1 + r)^n
<span class="block mt-2 text-[10px] text-slate-500 italic">Donde FV es el Monto Futuro, r la tasa y n el tiempo</span> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-16 mb-8 text-center">
Ejemplos de Aplicación Real
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🎁</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Promesa de Pago
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Si alguien te promete <strong>$10.000</strong> en 5 años, con una tasa
            del 10%, hoy ese dinero vale solo <strong>$6.209</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">📈</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Costo de Oportunidad
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Ayuda a comparar si es mejor recibir dinero hoy o esperar a una suma
            mayor en el futuro.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🏢</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Valuación de Activos
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Es el pilar para valuar bonos o acciones basándose en los dividendos
            futuros "traídos" a valor de hoy.
</p> </div> </div> <div class="p-8 bg-teal-50 rounded-[2rem] border border-teal-100 flex items-start gap-5 shadow-sm"> <div class="text-3xl bg-white p-3 rounded-2xl shadow-sm">💡</div> <div> <h4 class="text-teal-900 font-bold mb-1">
¿Qué es la Tasa de Descuento?
</h4> <p class="text-sm text-teal-800 leading-relaxed">
Es la tasa de interés que utilizas para "descontar" el flujo futuro.
            Generalmente refleja la inflación esperada o el retorno que
            obtendrías en una inversión segura (como un bono del tesoro).
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro";
const $$url = "/finanzas/valor-presente";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ValorPresente,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
