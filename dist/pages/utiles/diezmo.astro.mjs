/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Diezmo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Donaciones y Diezmo | Chieffin", "description": "Calcul\xE1 f\xE1cilmente el porcentaje de tus ingresos que dese\xE1s destinar a donaciones, caridad o diezmo religioso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Solidaridad</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Donaciones y <span class="text-blue-600">Diezmo</span> 🙏
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Organizá tu presupuesto solidario. Calculá el monto exacto para tus
        contribuciones mensuales.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ingresos Mensuales ($)</label> <input type="number" id="ingresoD" placeholder="Ej: 900000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Porcentaje a Donar (%)</label> <input type="number" id="porcentajeD" value="10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> <p class="text-[10px] text-slate-400 mt-2 italic">
El 10% es el estándar para el diezmo tradicional.
</p> </div> </div> <button id="btnCalcDiezmo" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
Calcular Monto
</button> <div id="resDiezmo" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase mb-2">
Monto Sugerido:
</p> <div id="montoFinalD" class="text-5xl font-black text-blue-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-blue-200 w-full mb-4"></div> <p class="text-blue-800 text-sm font-medium">
Resto disponible: <span id="montoRestanteD" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
La práctica de dar
</h2> <p class="text-slate-600 text-sm">
Ya sea por motivos religiosos (diezmo) o por compromiso social
          (donaciones), separar un porcentaje de los ingresos es una práctica
          común en muchas culturas para apoyar a la comunidad.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
¿Bruto o Neto?
</h3> <p class="text-slate-600 text-sm">
Muchas personas debaten si el cálculo debe hacerse sobre el sueldo
          bruto (antes de impuestos) o neto (en mano). La mayoría de los
          expertos financieros sugieren hacerlo sobre el <strong>neto</strong> para
          no comprometer el presupuesto básico de supervivencia.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Generosidad planificada
</h3> <p class="text-slate-600 text-sm italic">
Incluir las donaciones en tu plan financiero (como en la regla
          50/30/20) te permite ser generoso de forma constante sin afectar tus
          metas de ahorro personales.
</p> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/diezmo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/diezmo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/utiles/diezmo.astro";
const $$url = "/utiles/diezmo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Diezmo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
