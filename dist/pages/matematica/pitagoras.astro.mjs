/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Pitagoras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Pit\xE1goras | Hallar Hipotenusa y Catetos", "description": "Resolv\xE9 tri\xE1ngulos rect\xE1ngulos usando el Teorema de Pit\xE1goras. Calcul\xE1 la hipotenusa o los catetos de forma autom\xE1tica." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Teorema de <span class="text-blue-600">Pitágoras</span> </h1> <p class="text-slate-500 text-lg font-medium">
Calculá la longitud de los lados de un triángulo rectángulo.
</p> </header> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-md mx-auto space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Cateto A</label> <input type="number" id="catA" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Cateto B</label> <input type="number" id="catB" placeholder="Ej: 4" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold text-xl"> </div> <button id="btnPit" class="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
Calcular Hipotenusa
</button> <div id="resPit" class="hidden p-6 bg-slate-900 rounded-3xl text-center border-2 border-slate-800 animate-in fade-in zoom-in"> <p class="text-blue-400 text-xs font-bold uppercase mb-1">
La Hipotenusa (c) es:
</p> <span id="valPit" class="text-4xl font-black text-white"></span> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600 mt-12"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es el Teorema de Pitágoras?
</h2> <p>
Es una relación fundamental en geometría entre los tres lados de un <strong>triángulo rectángulo</strong>. Establece que el cuadrado de la hipotenusa (el lado más largo) es
        igual a la suma de los cuadrados de los catetos (los dos lados menores).
</p> <div class="bg-blue-50 p-8 rounded-3xl text-center my-8 border border-blue-100"> <p class="text-2xl font-mono font-bold text-blue-700">
$$a^2 + b^2 = c^2$$
</p> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">Ejemplo Práctico:</h3> <p>
Imaginemos que tenés un triángulo donde el <strong>Cateto A mide 3</strong> y el <strong>Cateto B mide 4</strong>. Para hallar la hipotenusa:
</p> <ul class="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100"> <li>1. Elevamos al cuadrado: $$3^2 = 9$$ y $$4^2 = 16$$.</li> <li>2. Sumamos los resultados: $$9 + 16 = 25$$.</li> <li>3. Aplicamos la raíz cuadrada: $$\\sqrt${25} = 5$$.</li> <li><strong>Resultado:</strong> La hipotenusa mide 5.</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/pitagoras.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/pitagoras.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/pitagoras.astro";
const $$url = "/matematica/pitagoras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pitagoras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
