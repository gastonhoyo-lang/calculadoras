/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Ovulacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calendario de Ovulaci\xF3n | Calcul\xE1 tus D\xEDas F\xE9rtiles", "description": "Descubr\xED tus d\xEDas m\xE1s f\xE9rtiles y tu fecha de ovulaci\xF3n con nuestra calculadora. Ideal para quienes buscan concebir o conocer su ciclo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Calendario de <span class="text-pink-500">Ovulación</span> 🌸
</h1> <p class="text-slate-500 text-lg font-medium text-center">
Calculá tu ventana de fertilidad en segundos.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Último período (Fecha)</label> <input type="date" id="fechaPeriodo" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-lg outline-none focus:ring-2 focus:ring-pink-500"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Duración del ciclo (Días)</label> <input type="number" id="duracionCiclo" placeholder="Promedio: 28" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-lg outline-none focus:ring-2 focus:ring-pink-500"> </div> <button id="btnOvulacion" class="w-full bg-pink-500 text-white p-5 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100">Calcular Fertilidad</button> </div> <div id="resOvulacion" class="hidden bg-slate-900 text-white p-10 rounded-[2.5rem] text-center flex flex-col justify-center animate-in zoom-in"> <p class="text-pink-400 text-xs font-bold uppercase mb-2 tracking-widest">
Tu día más fértil es el:
</p> <h2 id="diaFertil" class="text-4xl font-black text-white mb-4"></h2> <p class="text-slate-400 text-sm">
Tu ventana de fertilidad comienza 3 días antes y termina 1 día después
          de esta fecha.
</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-2xl font-bold text-slate-800">
¿Cómo funciona el cálculo?
</h2> <p>
La ovulación generalmente ocurre a mitad del ciclo menstrual. En un
        ciclo de 28 días, suele suceder el día 14. Esta calculadora estima tu
        día de ovulación restando 14 días a la duración de tu ciclo habitual.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro";
const $$url = "/salud/ovulacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ovulacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
