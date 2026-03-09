/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DvQkidL1.mjs';
import { c as calculadoras } from '../chunks/calculadoras_D3Wakt9k.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://chieffin.com");
async function getStaticPaths() {
  const categorias = [
    {
      id: "finanzas",
      nombre: "Finanzas y Econom\xEDa",
      desc: "Herramientas para gestionar tu dinero, calcular impuestos y proyectar inversiones."
    },
    {
      id: "hogar",
      nombre: "Hogar y Construcci\xF3n",
      desc: "Calcul\xE1 materiales para tu obra, consumo el\xE9ctrico y medidas para tu casa."
    },
    {
      id: "matematica",
      nombre: "Matem\xE1tica y Geometr\xEDa",
      desc: "Resolv\xE9 ecuaciones, calcul\xE1 \xE1reas y porcentajes de forma r\xE1pida."
    },
    {
      id: "negocios",
      nombre: "Negocios y Emprendedores",
      desc: "Calculadoras de rentabilidad, punto de equilibrio y gesti\xF3n comercial."
    },
    {
      id: "salud",
      nombre: "Salud y Bienestar",
      desc: "Monitore\xE1 tu IMC, gasto cal\xF3rico y h\xE1bitos saludables."
    },
    {
      id: "utiles",
      nombre: "Herramientas \xDAtiles",
      desc: "Calculadoras para el d\xEDa a d\xEDa: asado, propinas y gesti\xF3n del tiempo."
    },
    {
      id: "varios",
      nombre: "Varios",
      desc: "Otras herramientas \xFAtiles para diversas situaciones."
    }
  ];
  return categorias.map((cat) => ({
    params: { categoria: cat.id },
    props: { info: cat }
  }));
}
const $$categoria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categoria;
  const { categoria } = Astro2.params;
  const { info } = Astro2.props;
  const calcsFiltradas = calculadoras.filter(
    (calc) => calc.link.startsWith(`/${categoria}/`)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${info.nombre} - Herramientas y Calculadoras`, "description": info.desc }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-12"> <nav class="flex text-sm text-slate-500 mb-8" aria-label="Breadcrumb"> <a href="/" class="hover:text-blue-600">Inicio</a> <span class="mx-2">/</span> <span class="text-slate-900 font-medium">${info.nombre}</span> </nav> <header class="mb-12"> <h1 class="text-4xl font-black text-slate-900 mb-4">${info.nombre}</h1> <p class="text-xl text-slate-600 max-w-3xl"> ${info.desc} </p> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${calcsFiltradas.map((calc) => renderTemplate`<a${addAttribute(calc.link, "href")} class="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"> <div class="text-3xl mb-4">${calc.icon}</div> <h2 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition"> ${calc.titulo} </h2> <p class="text-slate-500 text-sm mt-2">${calc.descripcion}</p> <div class="mt-4 text-blue-600 text-sm font-bold flex items-center gap-1">
Usar calculadora
<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7-7"></path> </svg> </div> </a>`)} </div> <article class="mt-20 prose prose-slate max-w-none border-t pt-12"> <h2 class="text-2xl font-bold text-slate-900 mb-6">
Información sobre ${info.nombre} </h2> <p class="text-slate-600 leading-relaxed">
Bienvenido a nuestra sección especializada en <strong>${info.nombre.toLowerCase()}</strong>. En Chieffin hemos diseñado estas herramientas para simplificar tareas
        que suelen ser complejas o tediosas. Nuestras calculadoras de ${categoria} son gratuitas, rápidas y están actualizadas para ofrecerte resultados precisos.
</p> <p class="text-slate-600 leading-relaxed mt-4">
Ya sea que necesites resolver un problema puntual o estés planificando a
        largo plazo, estas utilidades te permiten ahorrar tiempo y evitar
        errores manuales. Explorá cada una de las opciones arriba listadas para
        encontrar la que mejor se adapte a tu necesidad actual.
</p> </article> </div> ` })}`;
}, "C:/proyectos/seo-tools/src/pages/[categoria].astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/[categoria].astro";
const $$url = "/[categoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categoria,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
