globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { m as maybeRenderHead, r as renderTemplate } from "./worker-entry_Bk4AUdbY.mjs";
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const runtime = Astro2.locals.runtime;
  if (!slug) {
    return new Response("No se detectó el parámetro slug", { status: 400 });
  }
  const { CALCULADORAS } = runtime.env;
  const rawData = await CALCULADORAS.get(slug);
  if (!rawData) {
    return new Response(`El KV no tiene nada para la llave: ${slug}`, {
      status: 404
    });
  }
  const info = JSON.parse(rawData);
  return renderTemplate`<html> ${maybeRenderHead()}<body> <h1>Calculadora: ${slug}</h1> <pre>${JSON.stringify(info, null, 2)}</pre> </body></html>`;
}, "C:/proyectos/seo-tools/src/pages/v/[slug].astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/v/[slug].astro";
const $$url = "/v/[slug]";
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
