globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$CalculadoraDividendos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Dividendos | Proyectá tu Renta Pasiva", "description": "Calculá cuánto vas a cobrar en dividendos por tus acciones. Estimá tu pago mensual, anual y el rendimiento de tu cartera de inversión." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Dividendos
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Estimá tus ingresos pasivos proyectando los pagos de tus acciones o ETFs
        de forma sencilla.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Inversión o Cantidad de Acciones
</label> <div class="flex gap-2"> <input type="number" id="sharesInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 outline-none transition-all font-mono" placeholder="Cant. Acciones"> <input type="number" id="priceInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 outline-none transition-all font-mono" placeholder="Precio ($)"> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Dividendo Anual por Acción ($)
</label> <input type="number" id="divInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1.50"> </div> </div> <div id="dividendCard" class="text-center p-10 bg-violet-600 rounded-[2.5rem] shadow-lg shadow-violet-200 relative overflow-hidden h-full flex flex-col justify-center min-h-[300px]"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">
Cobro Anual Estimado
</span> <div id="annualOutput" class="text-6xl font-black leading-none">
$0
</div> <div class="mt-6 flex justify-around gap-4"> <div class="bg-white/10 p-3 rounded-xl flex-1 border border-white/10"> <span class="block text-[8px] font-bold uppercase opacity-70">Mensual</span> <span id="monthlyOutput" class="text-lg font-bold">$0</span> </div> <div class="bg-white/10 p-3 rounded-xl flex-1 border border-white/10"> <span class="block text-[8px] font-bold uppercase opacity-70">Yield %</span> <span id="yieldOutput" class="text-lg font-bold">0%</span> </div> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">$$</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
Vivir de rentas: El poder de los dividendos
</h2> <p>
Los <strong>dividendos</strong> representan la distribución de una parte
            de los beneficios de una empresa a sus accionistas. Es la base de la inversión
            en renta pasiva: recibir flujos de dinero sin necesidad de vender tus
            activos.
</p> <p>
Para proyectar tu libertad financiera, es vital entender el <strong>Dividend Yield</strong> (rentabilidad por dividendo), que indica qué porcentaje de tu inversión
            recuperás anualmente solo vía pagos.
</p> </div> <div class="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-slate-800 text-center"> <span class="text-violet-400 font-mono text-xs mb-4 block uppercase tracking-widest font-bold text-center">Fórmula del Rendimiento</span> <div class="text-white font-mono text-lg text-center leading-relaxed">
Yield % = (Dividendo Anual / Precio Acción) x 100
</div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-16 mb-8 text-center">
Cómo interpretar los resultados
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🏦</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Blue Chips
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Empresas estables que suelen pagar entre un <strong>3% y 5%</strong> anual.
            Ideales para carteras de bajo riesgo.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🏗️</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
REITs / Inmobiliario
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Fideicomisos que por ley distribuyen la mayoría de sus rentas.
            Suelen ofrecer Yields superiores al <strong>6%</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">⚠️</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
High Yield Trap
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Cuidado con rendimientos mayores al <strong>10%</strong>; a veces
            indican que el precio de la acción cayó por problemas financieros.
</p> </div> </div> <div class="p-8 bg-violet-50 rounded-[2rem] border border-violet-100 flex items-start gap-5 shadow-sm"> <div class="text-3xl bg-white p-3 rounded-2xl shadow-sm">💰</div> <div> <h4 class="text-violet-900 font-bold mb-1">
Estrategia de Interés Compuesto
</h4> <p class="text-sm text-violet-800 leading-relaxed">
Si en lugar de gastar tus dividendos los usás para <strong>recomprar más acciones</strong> (Estrategia DRIP), tu bola de nieve de ingresos pasivos crecerá de forma
            exponencial con el tiempo.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro";
const $$url = "/finanzas/calculadora-dividendos/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDividendos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
