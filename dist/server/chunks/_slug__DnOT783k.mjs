globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let info = null;
  try {
    const response = await fetch(`${Astro2.url.origin}/unidades.json`);
    if (response.ok) {
      const unidades = await response.json();
      info = unidades.find((u) => u.slug === slug);
    }
  } catch (error) {
    console.error("Error al recuperar datos para el slug:", slug, error);
  }
  if (!info) {
    return Astro2.redirect("/404");
  }
  const seoDescription = `Calculá gratis: ${info.titulo}. Herramienta rápida, precisa y fácil de usar en Chieffin.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": info.titulo, "description": seoDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="calc-metadata"${addAttribute(info.valor, "data-valor")}${addAttribute(info.tipo, "data-tipo")}${addAttribute(info.unidad_origen, "data-origen")}${addAttribute(info.unidad_destino, "data-destino")} class="hidden"></div> <section class="py-12 px-4 bg-gradient-to-b from-blue-50 to-slate-50 min-h-[80vh]"> <div class="max-w-3xl mx-auto"> <nav class="flex mb-8 text-sm font-medium text-slate-500" aria-label="Breadcrumb"> <a href="/" class="hover:text-blue-600 transition">Inicio</a> <span class="mx-2">/</span> <a href="/utiles" class="hover:text-blue-600 transition">Herramientas</a> <span class="mx-2">/</span> <span class="text-slate-900 truncate">${info.h1 || info.titulo}</span> </nav> <div class="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden"> <div class="p-8 sm:p-12"> <header class="mb-10 text-center"> <span class="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"> ${info.tipo === "unidades" ? "Conversor" : "Finanzas"} </span> <h1 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight"> ${info.h1 || info.titulo} </h1> </header> <div class="grid gap-6"> <div class="relative"> <label for="input-main" class="block text-sm font-bold text-slate-700 mb-2 ml-1">
Ingresá el valor a ${info.tipo === "unidades" ? "convertir" : "calcular"} </label> <input type="number" id="input-main" placeholder="0.00" class="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl text-3xl font-bold text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300"> </div> <div class="flex justify-center"> <div class="bg-blue-600 p-3 rounded-full shadow-lg shadow-blue-200"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </div> <div id="panel-resultado" class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div> <div class="relative p-8 bg-white border border-slate-100 rounded-2xl text-center"> <p class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
Resultado Final
</p> <div id="resultado-texto" class="text-4xl sm:text-5xl font-black text-blue-600 italic">
--
</div> <p id="sub-texto" class="mt-2 text-slate-400 font-medium">
Esperando datos...
</p> </div> </div> </div> </div> <div class="bg-slate-50 border-t border-slate-100 p-8"> <h3 class="font-bold text-slate-900 mb-2">¿Cómo se calcula?</h3> <p class="text-slate-600 leading-relaxed text-sm"> ${info.faq_respuesta} </p> </div> </div> </div> </section> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/[slug].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/[slug].astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/[slug].astro";
const $$url = "/utiles/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
