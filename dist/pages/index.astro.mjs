/* empty css                                       */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BRAynmVH.mjs';
import { c as calculadoras } from '../chunks/calculadoras_DNBY-rJk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const categorias = [
    {
      id: "finanzas",
      nombre: "Finanzas y Negocios",
      icon: "\u{1F4B0}",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      id: "negocios",
      nombre: "Negocios y Emprendedores",
      icon: "\u{1F4C8}",
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      id: "hogar",
      nombre: "Hogar y Construcci\xF3n",
      icon: "\u{1F3D7}\uFE0F",
      color: "bg-slate-100 text-slate-700"
    },
    {
      id: "salud",
      nombre: "Salud y Bienestar",
      icon: "\u2764\uFE0F",
      color: "bg-red-50 text-red-700"
    },
    {
      id: "utiles",
      nombre: "Herramientas \xDAtiles",
      icon: "\u{1F6E0}\uFE0F",
      color: "bg-blue-50 text-blue-700"
    },
    {
      id: "matematica",
      // <--- AGREGAR ESTO (Importante: sin la S, como tus carpetas)
      nombre: "Matem\xE1tica y Geometr\xEDa",
      icon: "\u{1F4D0}",
      color: "bg-orange-50 text-orange-700"
    },
    {
      id: "matematica",
      // <--- AGREGAR ESTO (Importante: sin la S, como tus carpetas)
      nombre: "Matem\xE1tica y Geometr\xEDa",
      icon: "\u{1F4D0}",
      color: "bg-orange-50 text-orange-700"
    }
  ];
  const getCalcsByCat = (cat) => calculadoras.filter((c) => c.link.includes(`/${cat}/`));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chieffin | Herramientas y Calculadoras Gratuitas Online", "description": "M\xE1s de 25 calculadoras gratuitas: Finanzas, Construcci\xF3n, Salud y herramientas de texto. R\xE1pidas, precisas y sin registro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white pt-16 pb-12 border-b border-slate-100"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
Herramientas que <br><span class="text-indigo-600">simplifican</span> tu
        vida.
</h1> <p class="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-10">
Calculadoras precisas para finanzas, hogar y salud. <span class="text-slate-900 font-bold">Gratis y sin vueltas.</span> </p> <div class="relative max-w-xl mx-auto mb-8"> <input type="text" id="searchBox" placeholder="¿Qué necesitás calcular hoy? (ej: IVA, Ladrillos...)" class="w-full p-6 pl-14 bg-slate-50 border-2 border-transparent focus:border-indigo-500 rounded-[2rem] shadow-sm outline-none font-bold text-lg transition-all"> <span class="absolute left-6 top-6 text-2xl">🔍</span> </div> </div> </section> <main class="max-w-6xl mx-auto px-4 py-16"> ${categorias.map((cat) => renderTemplate`<div class="mb-20 category-section"${addAttribute(cat.id, "data-category")}> <div class="flex items-center gap-4 mb-10"> <div${addAttribute(`${cat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm`, "class")}> ${cat.icon} </div> <h2 class="text-3xl font-black text-slate-800 tracking-tight"> ${cat.nombre} </h2> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${getCalcsByCat(cat.id).map((calc) => renderTemplate`<a${addAttribute(calc.link, "href")} class="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full card-calc"${addAttribute(calc.titulo.toLowerCase(), "data-title")}${addAttribute((calc.titulo + " " + (calc.description || calc.descripcion) + " " + (calc.keywords || "")).toLowerCase(), "data-keywords")}> <div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left"> ${calc.icon} </div> <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors"> ${calc.titulo} </h3> <p class="text-slate-500 text-sm leading-relaxed font-medium"> ${calc.description || calc.descripcion} </p> <div class="mt-auto pt-6 flex items-center text-indigo-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
Ir a calcular <span class="ml-2">→</span> </div> </a>`)} </div> </div>`)} <div id="noResults" class="hidden text-center py-20"> <div class="text-6xl mb-4">🛸</div> <h3 class="text-2xl font-black text-slate-800">
No encontramos esa calculadora
</h3> <p class="text-slate-500">Probá con otra palabra clave...</p> </div> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/index.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
