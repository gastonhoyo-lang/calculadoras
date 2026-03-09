/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$InteresSimple = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inter\xE9s Simple | Ganancias en Pr\xE9stamos e Inversiones", "description": "Calcul\xE1 el inter\xE9s generado por un capital inicial. Aprend\xE9 la f\xF3rmula de inter\xE9s simple y c\xF3mo aplicarla a tus finanzas personales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Interés <span class="text-blue-600">Simple</span> 📈
</h1> <p class="text-slate-500 text-lg font-medium">
Calculá cuánto crece tu dinero de forma lineal.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm max-w-lg mx-auto space-y-6 mb-16"> <div class="space-y-4"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2 tracking-widest">Capital Inicial ($)</label> <input type="number" id="capI" placeholder="Ej: 10000" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2 tracking-widest">Tasa Anual (%)</label> <input type="number" id="tasaI" placeholder="Ej: 15" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2 tracking-widest">Tiempo (Años)</label> <input type="number" id="tiempoI" placeholder="Ej: 3" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all"> </div> </div> <button id="btnIS" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-lg">
Calcular Ganancia
</button> </div> <div id="resIS" class="hidden p-8 bg-blue-50 rounded-[2.5rem] text-center border-2 border-blue-100 animate-in zoom-in duration-300"> <p class="text-blue-600 text-xs font-bold uppercase mb-2 tracking-widest">
Interés Total Generado:
</p> <div id="valIS" class="text-5xl font-black text-blue-900 mb-2"></div> <div class="h-px bg-blue-200 w-full my-4"></div> <p class="text-[11px] text-blue-700 leading-relaxed italic">
Tu capital final sería de <strong id="valTotal"></strong> </p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es el Interés Simple?
</h2> <p class="leading-relaxed">
El <strong>interés simple</strong> es aquel que se calcula siempre sobre
            el capital inicial, sin que los intereses generados se sumen para producir
            nuevos intereses. Es la forma más básica de rentabilidad financiera.
</p> <p class="mt-4">
Se utiliza comúnmente en préstamos personales a corto plazo, notas
            de crédito y en ciertos tipos de bonos. A diferencia del interés
            compuesto, su crecimiento es <strong>lineal</strong>.
</p> </div> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem]"> <h3 class="text-xl font-bold mb-4 text-blue-400 text-center">
La Fórmula Matemática
</h3> <p class="text-sm text-slate-300 mb-6 text-center">
Para calcular el interés simple usamos la fórmula:
</p> <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center"> <p class="text-2xl font-mono text-blue-300">
$$I = C \\cdot i \\cdot t$$
</p> </div> <ul class="mt-6 space-y-2 text-xs text-slate-400"> <li><strong>I:</strong> Interés generado.</li> <li><strong>C:</strong> Capital inicial invertido.</li> <li><strong>i:</strong> Tasa de interés anual (decimal).</li> <li><strong>t:</strong> Tiempo en años.</li> </ul> </div> </div> <div class="mt-16 bg-blue-50 p-10 rounded-[3rem] border border-blue-100"> <h3 class="text-2xl font-bold text-blue-900 mb-6 text-center text-balance">
Diferencia clave: Simple vs. Compuesto
</h3> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white p-6 rounded-2xl shadow-sm"> <h4 class="font-bold text-slate-800 mb-2">Simple</h4> <p class="text-xs">
Los intereses se retiran o no se reinvierten. El capital se
              mantiene estático y el crecimiento es constante mes a mes.
</p> </div> <div class="bg-white p-6 rounded-2xl shadow-sm"> <h4 class="font-bold text-slate-800 mb-2">Compuesto</h4> <p class="text-xs">
Los intereses se suman al capital original. Esto genera el "efecto
              bola de nieve", donde ganás intereses sobre los intereses.
</p> </div> </div> </div> <div class="mt-16 text-center"> <p class="text-[11px] text-slate-400 italic"> <strong>Importante:</strong> Este cálculo es educativo y asume una tasa
          fija sin cargos adicionales ni capitalización. Para decisiones financieras
          complejas, consultá con un asesor profesional.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro";
const $$url = "/finanzas/interes-simple";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InteresSimple,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
