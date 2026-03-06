/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Embarazo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Embarazo | Semanas y Fecha de Parto", "description": "Calcul\xE1 cu\xE1ntas semanas de embarazo ten\xE9s, en qu\xE9 trimestre est\xE1s y tu fecha probable de parto f\xE1cilmente con la Regla de Naegele." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4">
Gestación <span class="text-indigo-500">Semana a Semana</span> 👶
</h1> <p class="text-slate-500 text-lg font-medium">
Hacé el seguimiento de tu embarazo de forma precisa.
</p> </header> <div class="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 max-w-2xl mx-auto space-y-8"> <div> <label class="block text-center text-xs font-bold text-slate-400 uppercase mb-4">Fecha de tu última regla (FUM)</label> <input type="date" id="fum" class="w-full text-center p-6 bg-slate-50 rounded-[2rem] border-none font-black text-2xl text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-200"> </div> <button id="btnEmbarazo" class="w-full bg-indigo-600 text-white p-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all text-xl shadow-lg shadow-indigo-100">
Calcular Estado
</button> <div id="resEmbarazo" class="hidden space-y-4 animate-in fade-in zoom-in duration-300"> <div class="bg-slate-900 text-white p-8 rounded-[2rem] text-center"> <p class="text-indigo-400 font-bold uppercase text-xs mb-2">
Fecha probable de parto (FPP)
</p> <h2 id="fpp" class="text-3xl font-black"></h2> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-indigo-50 p-6 rounded-[2rem] text-center border border-indigo-100"> <span class="block text-indigo-600 font-bold text-xs uppercase">Semanas</span> <span id="semGen" class="text-4xl font-black text-indigo-900"></span> </div> <div class="bg-indigo-50 p-6 rounded-[2rem] text-center border border-indigo-100"> <span class="block text-indigo-600 font-bold text-xs uppercase">Trimestre</span> <span id="trimGen" class="text-4xl font-black text-indigo-900"></span> </div> </div> </div> </div>
[Image of fetal development stages by week]
<article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Cómo se calcula la fecha de parto?
</h2> <p>
La mayoría de los profesionales médicos utilizan la <strong>Regla de Naegele</strong>. Este método suma 280 días (40 semanas) a la fecha de inicio de tu
            última menstruación (FUM).
</p> <p class="mt-4">
Es importante recordar que solo el 5% de los bebés nacen exactamente
            en su fecha prevista. Lo normal es que el parto ocurra entre las
            semanas 37 y 42.
</p> </div> <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">
Etapas del Embarazo
</h3> <ul class="space-y-4 text-sm"> <li> <strong>Primer Trimestre (0-13 semanas):</strong> Formación de órganos
              vitales y primeros latidos.
</li> <li> <strong>Segundo Trimestre (14-26 semanas):</strong> El bebé empieza
              a moverse y el crecimiento es acelerado.
</li> <li> <strong>Tercer Trimestre (27-40+ semanas):</strong> Preparación para
              el nacimiento y desarrollo pulmonar final.
</li> </ul> </div> </div> <div class="mt-16 bg-indigo-900 text-white p-10 rounded-[2.5rem]"> <h3 class="text-2xl font-bold mb-4">¿Qué es la Edad Gestacional?</h3> <p class="text-indigo-100">
La edad gestacional mide qué tan avanzado está el embarazo. Se cuenta
          desde el primer día de tu última regla porque, técnicamente, ese es el
          inicio del ciclo que llevó a la concepción, aunque el bebé suele ser
          concebido unas dos semanas después.
</p> </div> <div class="mt-16 border-l-4 border-amber-400 pl-6 py-2 italic text-slate-500"> <strong>Nota médica:</strong> Esta calculadora es una herramienta informativa.
        Factores como la regularidad de tu ciclo o ecografías tempranas pueden modificar
        la fecha exacta. Consultá siempre con tu obstetra o partera para un seguimiento
        profesional.
</div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/embarazo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/embarazo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/embarazo.astro";
const $$url = "/salud/embarazo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Embarazo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
