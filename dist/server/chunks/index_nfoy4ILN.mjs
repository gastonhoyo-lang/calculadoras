globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categorias = [
    {
      id: "finanzas",
      nombre: "Finanzas y Negocios",
      icon: "💰",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      id: "negocios",
      nombre: "Negocios y Emprendedores",
      icon: "📈",
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      id: "hogar",
      nombre: "Hogar y Construcción",
      icon: "🏗️",
      color: "bg-slate-100 text-slate-700"
    },
    {
      id: "salud",
      nombre: "Salud y Bienestar",
      icon: "❤️",
      color: "bg-red-50 text-red-700"
    },
    {
      id: "utiles",
      nombre: "Herramientas Útiles",
      icon: "🛠️",
      color: "bg-blue-50 text-blue-700"
    },
    {
      id: "matematica",
      nombre: "Matemática y Geometría",
      icon: "📐",
      color: "bg-orange-50 text-orange-700"
    },
    {
      id: "seo",
      nombre: "SEO y Marketing",
      icon: "🚀",
      color: "bg-purple-50 text-purple-700"
    },
    {
      id: "unidades",
      nombre: "Conversores de Medida",
      icon: "↔️",
      color: "bg-amber-50 text-amber-700"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chieffin | Herramientas y Calculadoras Gratuitas Online", "description": "Más de 60,000 calculadoras y conversores gratuitos: Finanzas, Salud, Unidades y SEO. Rápidas, precisas y sin registro." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white pt-20 pb-16 border-b border-slate-100"> <div class="max-w-6xl mx-auto px-4 text-center"> <h1 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-6">
Herramientas que <br><span class="text-indigo-600">simplifican</span> tu
        vida.
</h1> <p class="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-10">
Accede a nuestra red de <span class="text-slate-900 font-bold">más de 60,000</span> herramientas de precisión. Gratis, instantáneo y diseñado para profesionales.
</p> <div class="relative max-w-2xl mx-auto px-4"> <div class="relative"> <input type="text" id="searchBox" placeholder="¿Qué necesitás calcular?" class="w-full p-6 pl-14 bg-white border-2 border-slate-200 rounded-2xl shadow-lg outline-none focus:border-indigo-500 text-lg transition-all" autocomplete="off"> <span class="absolute left-6 top-6 text-2xl text-slate-300">🔍</span> </div> <div id="search-suggestions" class="absolute z-[100] w-[calc(100%-2rem)] mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 hidden overflow-hidden"> <div id="suggestions-list" class="max-h-80 overflow-y-auto p-2"></div> </div> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </section> <div class="max-w-6xl mx-auto px-4 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${categorias.map((cat) => renderTemplate`<a${addAttribute(`/${cat.id}`, "href")} class="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all"> <div${addAttribute(`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`, "class")}> ${cat.icon} </div> <h3 class="font-bold text-slate-900">${cat.nombre}</h3> <p class="text-sm text-slate-500 mt-1">Explorar herramientas</p> </a>`)} </div> </div> ` })}`;
}, "C:/proyectos/seo-tools/src/pages/index.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
