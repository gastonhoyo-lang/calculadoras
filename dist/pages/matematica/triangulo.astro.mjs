/* empty css                                          */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRAynmVH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Triangulo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de \xC1rea de Tri\xE1ngulo", "description": "Calcul\xE1 la superficie de un tri\xE1ngulo con base y altura." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900">
Área del <span class="text-orange-500">Triángulo</span> </h1> </div> <div class="grid md:grid-cols-2 gap-8"> <section class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"> <div class="mb-4"> <label class="block text-sm font-bold text-slate-500 mb-2">Base</label> <input type="number" id="baseT" class="w-full p-4 bg-slate-50 rounded-xl border-none text-xl font-bold" placeholder="0"> </div> <div class="mb-6"> <label class="block text-sm font-bold text-slate-500 mb-2">Altura</label> <input type="number" id="alturaT" class="w-full p-4 bg-slate-50 rounded-xl border-none text-xl font-bold" placeholder="0"> </div> <button id="btnTri" class="w-full bg-orange-500 text-white p-4 rounded-xl font-bold text-lg">Calcular Área</button> </section> <section id="resTri" class="hidden"> <div class="bg-slate-900 text-white p-8 rounded-3xl text-center h-full flex flex-col justify-center"> <p class="text-orange-400 font-bold uppercase text-xs mb-2">
Resultado
</p> <div id="valTri" class="text-5xl font-black">0</div> <p class="text-slate-400 mt-2">unidades cuadradas</p> </div> </section> </div> <article class="mt-12 prose prose-slate"> <h2>Fórmula del área</h2> <p>
El área se calcula multiplicando la base por la altura y dividiendo por
        dos.
</p> <div class="bg-orange-50 p-4 rounded-xl font-mono text-center">
Área = (b × h) / 2
</div> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/triangulo.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/triangulo.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/triangulo.astro";
const $$url = "/matematica/triangulo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Triangulo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
