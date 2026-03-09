/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$AmortizacionPrestamo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Amortizaci\xF3n de Pr\xE9stamo | Sistema Franc\xE9s", "description": "Gener\xE1 tu tabla de amortizaci\xF3n completa. Descubr\xED cu\xE1nto pag\xE1s de intereses y capital en cada cuota de tu pr\xE9stamo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Simulador de Amortización
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Calculá tu cuota mensual y visualizá cómo se descompone tu pago mes a
        mes.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"> <div class="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Monto del Préstamo ($)</label> <input type="number" id="montoInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono" placeholder="Ej: 500000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Tasa Nominal Anual (TNA %)</label> <input type="number" id="tasaInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono" placeholder="Ej: 60"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Plazo (Meses)</label> <input type="number" id="plazoInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-mono" placeholder="Ej: 12"> </div> <button id="btnCalcular" class="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Calcular Tabla</button> </div> <div class="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-center relative overflow-hidden"> <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left"> <div> <span class="block text-[10px] font-bold uppercase opacity-50 mb-2 tracking-widest">Cuota Mensual Estimada</span> <div id="cuotaOutput" class="text-5xl font-black text-indigo-400">
$0
</div> </div> <div> <span class="block text-[10px] font-bold uppercase opacity-50 mb-2 tracking-widest">Total de Intereses</span> <div id="totalInteresOutput" class="text-3xl font-black text-rose-400">
$0
</div> </div> </div> <span class="absolute -right-10 -bottom-10 text-[15rem] font-black text-white/5 select-none">$$$</span> </div> </div> <div class="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden"> <div class="overflow-x-auto"> <table class="w-full text-left border-collapse"> <thead> <tr class="bg-slate-50 border-b border-slate-100"> <th class="p-6 text-[10px] font-bold uppercase text-slate-400 tracking-widest">Mes</th> <th class="p-6 text-[10px] font-bold uppercase text-slate-400 tracking-widest">Cuota</th> <th class="p-6 text-[10px] font-bold uppercase text-slate-400 tracking-widest">Interés</th> <th class="p-6 text-[10px] font-bold uppercase text-slate-400 tracking-widest">Capital</th> <th class="p-6 text-[10px] font-bold uppercase text-slate-400 tracking-widest">Saldo Pendiente</th> </tr> </thead> <tbody id="tablaCuerpo" class="divide-y divide-slate-50 font-mono text-sm text-slate-600"> <tr><td colspan="5" class="p-10 text-center italic text-slate-300">Ingresá los datos para generar la tabla</td></tr> </tbody> </table> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 mt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el Sistema Francés?
</h2> <p>
Es el método de amortización más utilizado en préstamos personales e
        hipotecarios. Su característica principal es que las <strong>cuotas son fijas</strong> (siempre pagás lo mismo), pero la composición interna cambia:
</p> <ul class="list-disc pl-6 space-y-2"> <li> <strong>Al principio:</strong> La mayor parte de la cuota se destina a pagar
          intereses.
</li> <li> <strong>Al final:</strong> La mayor parte de la cuota se destina a devolver
          el capital original.
</li> </ul> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/amortizacion-prestamo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/amortizacion-prestamo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/amortizacion-prestamo.astro";
const $$url = "/finanzas/amortizacion-prestamo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AmortizacionPrestamo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
