globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$AhorroJubilacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ahorro para Jubilación | Planificá tu Retiro", "description": "Calculá cuánto dinero necesitás ahorrar para tu jubilación. Proyectá tu fondo de retiro considerando inflación y rentabilidad esperada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Planificador de Retiro
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Descubrí cuánto capital necesitás acumular para mantener tu nivel de
        vida actual en el futuro.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"> <div class="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-5"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Edad Actual / Edad de Retiro
</label> <div class="flex gap-2"> <input type="number" id="currentAge" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Hoy"> <input type="number" id="retirementAge" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Retiro"> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Gasto Mensual Deseado ($)
</label> <input type="number" id="monthlySpend" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 2000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Ahorro Actual ($)
</label> <input type="number" id="currentSavings" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 5000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Rendimiento Anual (%)
</label> <input type="number" id="annualReturn" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 7"> </div> <button id="btnCalcRetiro" class="w-full py-4 bg-cyan-600 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100">
Proyectar Mi Retiro
</button> </div> <div class="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase opacity-50 mb-4 tracking-widest">
Objetivo Final (Fondo de Libertad)
</span> <div id="targetFund" class="text-7xl font-black text-cyan-400 mb-2">
$0
</div> <p class="text-slate-400 text-sm max-w-md leading-relaxed">
Este es el monto total que deberías tener invertido para vivir de
            tus rentas sin agotar el capital, basado en la <strong>Regla del 4%</strong>.
</p> </div> <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"> <div class="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm"> <span class="block text-[10px] font-bold uppercase opacity-50 mb-1 italic">
Ahorro Mensual Necesario
</span> <div id="monthlyNeed" class="text-3xl font-bold text-white">$0</div> </div> <div class="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm"> <span class="block text-[10px] font-bold uppercase opacity-50 mb-1 italic">
Años de Ahorro Restantes
</span> <div id="yearsLeft" class="text-3xl font-bold text-white">0</div> </div> </div> <span class="absolute -right-10 -bottom-10 text-[18rem] font-black text-white/5 select-none leading-none">🌅</span> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"> <div> <h2 class="text-3xl font-black text-slate-900 mb-6 tracking-tight">
¿Cómo funciona la Regla del 4%?
</h2> <p>
También conocida como la <strong>Regla de Trinity</strong>,
            establece que podés retirar el 4% del valor total de tu cartera de
            inversiones durante el primer año de jubilación (y ajustar los años
            siguientes según la inflación) con una probabilidad extremadamente
            alta de que el dinero dure al menos 30 años.
</p> <p>
En términos prácticos, esto significa que necesitás acumular un
            fondo que sea <strong>25 veces tu gasto anual deseado</strong>.
</p> </div> <div class="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-center border border-slate-800 text-center"> <span class="text-cyan-400 font-mono text-xs mb-4 block uppercase tracking-widest font-bold text-center">Fórmula de Libertad Financiera</span> <div class="text-white font-mono text-lg text-center leading-relaxed">
Fondo Objetivo = Gasto Mensual x 12 x 25
</div> </div> </div> <h3 class="text-2xl font-bold text-slate-900 mt-16 mb-8 text-center">
Ejemplos de Proyección de Retiro
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🧘</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Retiro Austero
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Para un gasto de <strong>$1.000/mes</strong>, necesitás un fondo de <strong>$300.000</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🏠</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Retiro Estándar
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Para un gasto de <strong>$2.500/mes</strong>, tu objetivo es un
            fondo de <strong>$750.000</strong>.
</p> </div> <div class="p-6 bg-slate-50 rounded-3xl border border-slate-200"> <div class="text-3xl mb-4 text-center">🏎️</div> <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase italic text-center">
Retiro Premium
</h4> <p class="text-xs leading-relaxed text-slate-600 text-center">
Para un gasto de <strong>$5.000/mes</strong>, el capital acumulado
            debe ser de <strong>$1.500.000</strong>.
</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12"> <div class="p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100 shadow-sm"> <h4 class="text-cyan-900 font-bold mb-3">
El impacto de la inflación
</h4> <p class="text-sm text-cyan-800 leading-relaxed">
Recordá que el costo de vida sube cada año. Si planeás retirarte en
            20 años, tus gastos serán nominalmente más altos. Es fundamental que
            el <strong>Rendimiento Anual</strong> de tu inversión sea "real" (descontando
            la inflación).
</p> </div> <div class="p-8 bg-slate-900 rounded-[2rem] text-white shadow-sm border border-slate-800"> <h4 class="text-cyan-400 font-bold mb-3 font-mono text-sm uppercase">
Poder del Interés Compuesto
</h4> <p class="text-sm text-slate-300 leading-relaxed italic">
"La fuerza más poderosa del universo". Comenzar a ahorrar a los 25
            años requiere una inversión mensual mucho menor que comenzar a los
            40, debido al tiempo que el dinero tiene para multiplicarse solo.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro";
const $$url = "/finanzas/ahorro-jubilacion/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AhorroJubilacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
