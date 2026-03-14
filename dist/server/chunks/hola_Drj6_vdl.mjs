globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { m as maybeRenderHead, r as renderTemplate } from "./worker-entry_Bk4AUdbY.mjs";
const $$Hola = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Funciona</h1>`;
}, "C:/proyectos/seo-tools/src/pages/v/hola.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/v/hola.astro";
const $$url = "/v/hola";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Hola,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
