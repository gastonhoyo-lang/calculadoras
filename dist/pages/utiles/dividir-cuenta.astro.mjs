/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$DividirCuenta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora para Dividir Cuenta y Propina | Chieffin", "description": "Divid\xED la cuenta del restaurante de forma justa. Calcul\xE1 la propina y cu\xE1nto debe pagar cada persona f\xE1cilmente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Utilidades</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Dividir la <span class="text-amber-600">Cuenta</span> 🍕
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Ideal para cenas en grupo. Calculá la propina y dividí el total sin
        vueltas.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Total de la Cuenta ($)</label> <input type="number" id="totalCuenta" placeholder="Ej: 25000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Propina (%)</label> <input type="number" id="propinaPerc" value="10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Personas</label> <input type="number" id="cantidadPersonas" value="2" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all font-bold text-xl"> </div> </div> </div> <button id="btnDividir" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-amber-600 transition-all shadow-xl shadow-amber-100">
Dividir Cuenta
</button> <div id="resDividir" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-amber-50 rounded-[2rem] border-2 border-amber-100 border-dashed text-center"> <p class="text-amber-600 font-bold text-sm uppercase mb-2">
Cada uno paga:
</p> <div id="montoPorPersona" class="text-5xl font-black text-amber-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-amber-200 w-full mb-4"></div> <p class="text-amber-800 text-xs font-medium">
Total (con propina): <span id="totalFinalGroup" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cuánto dejar de propina?
</h2> <p class="text-slate-600 text-sm">
Aunque en Argentina no es obligatoria por ley, la costumbre sugiere
          dejar un <strong>10%</strong> si el servicio fue bueno.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Reglas de etiqueta:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Mal servicio:</strong> Podés no dejar nada o dejar un porcentaje
            simbólico.
</li> <li> <strong>Servicio excelente:</strong> Algunos clientes optan por dejar
            entre el 15% y el 20%.
</li> <li> <strong>Grupos grandes:</strong> Dividir el total incluyendo la propina
            evita que alguien termine pagando de más por error.
</li> </ul> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Tip de ahorro:</p> <p class="text-xs text-slate-500 italic">
Revisá siempre si el ticket ya incluye el "Cubierto" o "Servicio de
            mesa", aunque esto no reemplaza legalmente a la propina del mozo.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/dividir-cuenta.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/dividir-cuenta.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/utiles/dividir-cuenta.astro";
const $$url = "/utiles/dividir-cuenta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DividirCuenta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
