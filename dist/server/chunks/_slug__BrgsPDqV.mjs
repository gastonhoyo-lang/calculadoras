globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  let { slug } = Astro2.params;
  if (slug) {
    slug = slug.replace(/\/$/, "").toLowerCase();
  }
  const runtime = Astro2.locals.runtime;
  const { CALCULADORAS } = runtime.env;
  const rawData = await CALCULADORAS.get(slug);
  const info = rawData ? JSON.parse(rawData) : null;
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<div id="calc-metadata"', "", "", "", ' class="hidden"></div> <section class="py-12 px-4 bg-gradient-to-b from-blue-50 to-slate-50 min-h-[80vh]"> <div class="max-w-3xl mx-auto"> <nav class="flex mb-8 text-sm font-medium text-slate-500" aria-label="Breadcrumb"> <a href="/" class="hover:text-blue-600 transition">Inicio</a> <span class="mx-2">/</span> <a href="/utiles" class="hover:text-blue-600 transition">Herramientas</a> <span class="mx-2">/</span> <span class="text-slate-900 truncate">', '</span> </nav> <div class="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden"> <div class="p-8 sm:p-12"> <header class="mb-10 text-center"> <span class="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"> ', ' </span> <h1 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight"> ', ' </h1> </header> <div class="grid gap-6"> <div class="mb-4 p-8 bg-blue-600 rounded-2xl text-center text-white shadow-lg"> <p class="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">\nResultado Actual:\n</p> <div class="text-4xl sm:text-5xl font-black"> ', ' <span class="text-xl opacity-70 font-normal">', '</span> </div> </div> <div class="relative"> <label for="input-main" class="block text-sm font-bold text-slate-700 mb-2 ml-1">\nIngresá el valor a ', ' </label> <input type="number" id="input-main"', ' class="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl text-3xl font-bold text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-300"> </div> <div class="flex justify-center"> <div class="bg-blue-600 p-3 rounded-full shadow-lg shadow-blue-200"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </div> <div id="panel-resultado" class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div> <div class="relative p-8 bg-white border border-slate-100 rounded-2xl text-center"> <p class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">\nNuevo Resultado\n</p> <div id="resultado-texto" class="text-4xl sm:text-5xl font-black text-blue-600 italic">\n--\n</div> <p id="sub-texto" class="mt-2 text-slate-400 font-medium">\nEsperando datos...\n</p> </div> </div> </div> </div> <div class="bg-slate-50 border-t border-slate-100 p-8"> <h3 class="font-bold text-slate-900 mb-2">¿Cómo se calcula?</h3> <p class="text-slate-600 leading-relaxed text-sm"> ', ' </p> <div class="mt-4 p-4 bg-white rounded-lg border border-slate-200"> <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">\nFórmula:\n</p> <code class="text-blue-600 font-mono font-bold"> ', " </code> </div> </div> </div> </div> </section> ", " "])), unescapeHTML(JSON.stringify(jsonLd)), maybeRenderHead(), addAttribute(info.valor, "data-valor"), addAttribute(info.tipo, "data-tipo"), addAttribute(info.unidad_origen || info.orig, "data-origen"), addAttribute(info.unidad_destino || info.dest, "data-destino"), displayTitle, info.tipo === "unidades" ? "Conversor" : "Finanzas", displayTitle, info.resultado, info.dest || info.unidad_destino, info.tipo === "unidades" ? "convertir" : "calcular", addAttribute(info.n ? info.n.toString() : "0.00", "placeholder"), info.faq_respuesta, info.tipo === "unidades" ? `Valor × ${info.valor}` : `(Valor × ${info.valor}) / 100`, renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/[slug].astro?astro&type=script&index=0&lang.ts")) })}`;
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
