/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Circulo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de C\xEDrculo | \xC1rea, Per\xEDmetro y Di\xE1metro", "description": "Calcul\xE1 el \xE1rea y el per\xEDmetro de un c\xEDrculo con solo ingresar el radio. Incluye f\xF3rmulas y explicaci\xF3n paso a paso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Calculadora de <span class="text-orange-500">Círculo</span> </h1> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 text-center"> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Ingresá el Radio (r)</label> <input type="number" id="radio" placeholder="Ej: 5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none text-center font-black text-2xl"> <button id="btnCirculo" class="w-full bg-orange-500 text-white p-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">Calcular</button> </div> <div id="resCirculo" class="hidden space-y-4 animate-in zoom-in"> <div class="bg-slate-900 text-white p-6 rounded-3xl text-center"> <p class="text-slate-400 text-xs font-bold uppercase mb-1">
Área (π × r²)
</p> <span id="resArea" class="text-3xl font-black text-orange-400"></span> </div> <div class="bg-orange-50 p-6 rounded-3xl border border-orange-100 text-center"> <p class="text-orange-600 text-xs font-bold uppercase mb-1">
Perímetro (2 × π × r)
</p> <span id="resPerim" class="text-3xl font-black text-orange-700"></span> </div> </div> </div> <article class="prose prose-slate max-w-none border-t pt-10 text-slate-600"> <h2 class="text-2xl font-bold text-slate-800">Fórmulas del Círculo</h2> <p>
Para realizar estos cálculos utilizamos la constante <strong>Pi (π ≈ 3.14159)</strong>:
</p> <ul> <li> <strong>Área:</strong> Es la superficie interna. Se calcula multiplicando
          Pi por el radio al cuadrado.
</li> <li> <strong>Perímetro:</strong> También llamado circunferencia, es la longitud
          del borde.
</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/circulo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/circulo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/circulo.astro";
const $$url = "/matematica/circulo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Circulo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
