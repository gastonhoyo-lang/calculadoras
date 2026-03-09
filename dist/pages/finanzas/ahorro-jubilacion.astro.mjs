/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$AhorroJubilacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ahorro para Jubilaci\xF3n | Planific\xE1 tu Retiro", "description": "Calcul\xE1 cu\xE1nto dinero necesit\xE1s ahorrar para tu jubilaci\xF3n. Proyect\xE1 tu fondo de retiro considerando inflaci\xF3n y rentabilidad esperada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Planificador de Retiro
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Descubrí cuánto capital necesitás acumular para mantener tu nivel de
        vida actual en el futuro.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"> <div class="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-5"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Edad Actual / Edad de Retiro</label> <div class="flex gap-2"> <input type="number" id="currentAge" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Hoy"> <input type="number" id="retirementAge" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Retiro"> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Gasto Mensual Deseado ($)</label> <input type="number" id="monthlySpend" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 2000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Ahorro Actual ($)</label> <input type="number" id="currentSavings" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 5000"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Rendimiento Anual (%)</label> <input type="number" id="annualReturn" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-mono" placeholder="Ej: 7"> </div> <button id="btnCalcRetiro" class="w-full py-4 bg-cyan-600 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100">Proyectar Mi Retiro</button> </div> <div class="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase opacity-50 mb-4 tracking-widest">Objetivo Final (Fondo de Libertad)</span> <div id="targetFund" class="text-7xl font-black text-cyan-400 mb-2">
$0
</div> <p class="text-slate-400 text-sm max-w-md">
Este es el monto total que deberías tener invertido para vivir de
            tus rentas sin agotar el capital (basado en la Regla del 4%).
</p> </div> <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"> <div class="bg-white/5 p-6 rounded-3xl border border-white/10"> <span class="block text-[10px] font-bold uppercase opacity-50 mb-1">Ahorro Mensual Necesario</span> <div id="monthlyNeed" class="text-3xl font-bold text-white">$0</div> </div> <div class="bg-white/5 p-6 rounded-3xl border border-white/10"> <span class="block text-[10px] font-bold uppercase opacity-50 mb-1">Años de Ahorro</span> <div id="yearsLeft" class="text-3xl font-bold text-white">0</div> </div> </div> <span class="absolute -right-10 -bottom-10 text-[18rem] font-black text-white/5 select-none text-right leading-none">🌅</span> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">La Regla del 4%</h2> <p>
Para este cálculo utilizamos un estándar de la industria financiera: si
        lográs acumular un capital tal que tus gastos anuales representen solo
        el <strong>4% del total</strong>, podrías retirarte indefinidamente sin
        que tu dinero se acabe, ya que el rendimiento de las inversiones
        compensaría tus retiros.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-cyan-400 font-mono text-xl">
Fondo Necesario = Gasto Anual / 0.04
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-cyan-50 rounded-2xl border border-cyan-100"> <h4 class="font-bold text-cyan-900 mb-2 italic">
El Factor Inflación
</h4> <p class="text-xs leading-relaxed">
Recordá que $2.000 hoy no comprarán lo mismo en 30 años. Es vital
            que tu rendimiento anual supere la inflación histórica para que tu
            ahorro no pierda poder de compra.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic text-sm">
¿Por qué empezar temprano?
</h4> <p class="text-xs leading-relaxed">
Gracias al interés compuesto, cada dólar ahorrado a los 20 años vale
            mucho más que un dólar ahorrado a los 40. El tiempo es tu mejor
            activo financiero.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro";
const $$url = "/finanzas/ahorro-jubilacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AhorroJubilacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
