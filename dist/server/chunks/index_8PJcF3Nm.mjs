globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout } from "./Layout_UeHtEn6s.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  let unidades = [];
  try {
    const response = await fetch(`${Astro2.url.origin}/unidades.json`);
    if (response.ok) {
      unidades = await response.json();
    } else {
      console.error("No se pudo obtener unidades.json:", response.statusText);
    }
  } catch (error) {
    console.error("Error al leer unidades.json:", error);
  }
  const agrupados = unidades.reduce((acc, curr) => {
    if (!curr.titulo) return acc;
    const letra = curr.titulo[0].toUpperCase();
    if (!acc[letra]) acc[letra] = [];
    if (acc[letra].length < 20) {
      acc[letra].push(curr);
    }
    return acc;
  }, {});
  const letras = Object.keys(agrupados).sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Directorio Maestro de Herramientas | Chieffin", "description": "Explora nuestro catálogo completo de herramientas y conversores gratuitos." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto py-20 px-4"> <header class="mb-16"> <h1 class="text-5xl font-black text-slate-900 mb-4">
Directorio <span class="text-blue-600">Completo</span> </h1> <p class="text-slate-500 text-xl font-medium">
Navega por nuestro índice alfabético de herramientas precisas.
</p> </header> <nav class="flex flex-wrap gap-2 mb-12"> ${letras.map((l) => renderTemplate`<a${addAttribute(`#letra-${l}`, "href")} class="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all"> ${l} </a>`)} </nav> <div class="space-y-16"> ${letras.map((l) => renderTemplate`<section${addAttribute(`letra-${l}`, "id")} class="scroll-mt-20"> <h2 class="text-4xl font-black text-slate-200 mb-6 border-b border-slate-100 pb-2"> ${l} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${agrupados[l].map((tool) => renderTemplate`<a${addAttribute(`/utiles/${tool.slug}`, "href")} class="p-4 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-medium transition-colors border border-transparent hover:border-blue-100">
➔ ${tool.h1 || tool.titulo} </a>`)} </div> <p class="mt-6 p-4 bg-slate-50 rounded-xl text-sm text-slate-500 border border-dashed border-slate-200 text-center">
Hay cientos de herramientas más con la letra <strong>${l}</strong>${" "}
disponibles a través del buscador principal.
</p> </section>`)} </div> </main> ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/index.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/index.astro";
const $$url = "/utiles";
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
