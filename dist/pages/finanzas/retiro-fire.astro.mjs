/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$RetiroFire = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora FIRE | \xBFCu\xE1nto dinero necesit\xE1s para jubilarte?", "description": "Calcul\xE1 tu n\xFAmero de Independencia Financiera basado en la Regla del 4%. Descubr\xED cu\xE1nto capital necesit\xE1s para vivir de tus rentas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
Libertad <span class="text-emerald-600">Financiera</span> 🏖️
</h1> <p class="text-slate-500 text-lg mt-4 font-medium">
Calculá tu número FIRE (Financial Independence, Retire Early).
</p> </header> <div class="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm max-w-lg mx-auto space-y-6 mb-16"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 ml-2 tracking-widest">Gasto Mensual Deseado ($)</label> <input type="number" id="gastoFire" placeholder="Ej: 2000" class="w-full p-5 bg-slate-50 rounded-[2rem] outline-none font-black text-2xl text-slate-800 border-2 border-transparent focus:border-emerald-500 transition-all text-center"> <p class="text-[10px] text-slate-400 mt-2 text-center uppercase font-bold italic">
Incluí alquiler, comida, ocio y salud
</p> </div> <button id="btnFire" class="w-full bg-emerald-600 text-white p-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95 text-lg">
Calcular Mi Número
</button> <div id="resFire" class="hidden p-8 bg-emerald-50 rounded-[2.5rem] text-center border-2 border-emerald-100 animate-in zoom-in duration-300"> <p class="text-emerald-600 text-xs font-bold uppercase mb-2 tracking-widest">
Tu patrimonio objetivo es:
</p> <div id="valFire" class="text-4xl font-black text-emerald-900 mb-4"></div> <div class="h-px bg-emerald-200 w-full my-4"></div> <p class="text-[11px] text-emerald-700 leading-relaxed italic">
Según la <strong>Regla del 4%</strong>, con este capital invertido
          podrías retirar el equivalente a tu gasto mensual de por vida sin
          agotar el dinero.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es el movimiento FIRE?
</h2> <p class="leading-relaxed">
FIRE son las siglas de <strong>Financial Independence, Retire Early</strong>. No se trata necesariamente de dejar de trabajar, sino de tener el
            patrimonio suficiente para que el trabajo sea una opción y no una
            obligación.
</p> <p class="mt-4">
Para lograrlo, la clave es acumular un capital que, invertido en
            activos que generen rentabilidad, te permita cubrir tus gastos
            anuales de forma indefinida.
</p> </div> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem]"> <h3 class="text-xl font-bold mb-4 text-emerald-400">
La Regla del 4%
</h3> <p class="text-sm text-slate-300 leading-relaxed">
Originada en el famoso "Estudio Trinity", esta regla sugiere que
            podés retirar el 4% de tu cartera de inversión durante el primer año
            de jubilación (y ajustar ese monto por inflación cada año siguiente)
            con una probabilidad altísima de que tu dinero dure al menos 30
            años.
</p> <div class="mt-4 p-4 bg-slate-800 rounded-xl border border-slate-700"> <p class="text-xs font-mono">Fórmula: Gastos Anuales x 25</p> </div> </div> </div> <div class="mt-16 grid md:grid-cols-3 gap-8"> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center"> <div class="text-3xl mb-4">📈</div> <h4 class="font-bold text-slate-800 mb-2">Inversión Inteligente</h4> <p class="text-xs">
Este cálculo asume que tu dinero está invertido en una cartera
            diversificada (como el S&P 500).
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center"> <div class="text-3xl mb-4">📉</div> <h4 class="font-bold text-slate-800 mb-2">Control de Gastos</h4> <p class="text-xs">
Cuanto menores sean tus gastos fijos, más rápido alcanzarás tu
            número FIRE.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center"> <div class="text-3xl mb-4">⌛</div> <h4 class="font-bold text-slate-800 mb-2">Interés Compuesto</h4> <p class="text-xs">
El tiempo es tu mayor aliado. Empezar a invertir temprano reduce
            drásticamente el esfuerzo necesario.
</p> </div> </div> <div class="mt-16 bg-slate-50 p-8 rounded-[2rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">
¿Es realista este número?
</h3> <p class="text-sm italic text-center">
Este cálculo es una guía teórica. Factores como la inflación extrema,
          cambios en los impuestos o crisis de mercado prolongadas pueden
          afectar los resultados. Siempre es recomendable apuntar a un margen de
          seguridad adicional.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro";
const $$url = "/finanzas/retiro-fire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RetiroFire,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
