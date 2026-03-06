/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$EdadMascotas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Edad de Perros y Gatos | Chieffin", "description": "Descubr\xED cu\xE1ntos a\xF1os humanos tiene tu mascota. C\xE1lculo preciso seg\xFAn tama\xF1o del perro y etapa del gato." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4">
Edad de <span class="text-yellow-500">Mascotas</span> 🐾
</h1> <p class="text-slate-500 text-lg font-medium">
¿Cuántos años humanos tiene realmente tu mejor amigo?
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Tipo de Mascota</label> <select id="tipoM" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-xl outline-none focus:ring-2 focus:ring-yellow-500"> <option value="perro_s">Perro Pequeño (hasta 10kg)</option> <option value="perro_m">Perro Mediano (10-25kg)</option> <option value="perro_l">Perro Grande (más de 25kg)</option> <option value="gato">Gato</option> </select> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3">Años Cronológicos</label> <input type="number" id="añosM" placeholder="Ej: 5" class="w-full p-4 bg-slate-50 rounded-2xl border-none font-bold text-xl outline-none focus:ring-2 focus:ring-yellow-500"> </div> <button id="btnMascota" class="w-full bg-yellow-500 text-white p-5 rounded-2xl font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-100">Calcular Edad Humana</button> </div> <div id="resMascota" class="hidden bg-slate-900 text-white p-10 rounded-[2.5rem] text-center flex flex-col justify-center animate-in zoom-in"> <p class="text-yellow-400 text-xs font-bold uppercase mb-2 tracking-widest">
Equivale a un humano de:
</p> <h2 id="valMascota" class="text-6xl font-black text-white mb-2"></h2> <p class="text-slate-400 text-xl font-medium">Años</p> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Por qué no se multiplica simplemente por 7?
</h2> <p>
El mito de los 7 años es inexacto porque las mascotas maduran mucho más
        rápido en sus dos primeros años de vida. Además, el tamaño influye: los
        perros grandes envejecen más rápido que los pequeños.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/edad-mascotas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/edad-mascotas.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/utiles/edad-mascotas.astro";
const $$url = "/utiles/edad-mascotas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EdadMascotas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
