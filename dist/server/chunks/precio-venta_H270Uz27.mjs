globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$PrecioVenta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Precio de Venta | Chieffin", "description": "Establecé el precio ideal de tus productos basándote en tus costos y el margen de ganancia deseado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl font-black text-slate-900 mb-4">
Precio de <span class="text-blue-600">Venta</span> </h1> </header> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm max-w-md mx-auto space-y-6"> <input type="number" id="costoV" placeholder="Costo unitario ($)" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold"> <input type="number" id="margenDeseado" placeholder="% de margen deseado" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold"> <button id="btnPrecio" class="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold hover:bg-blue-700 transition-all">Calcular Precio Final</button> <div id="resPrecio" class="hidden p-6 bg-blue-50 rounded-3xl text-center border-2 border-blue-100"> <p class="text-blue-600 text-xs font-bold uppercase mb-1">
Precio sugerido:
</p> <span id="valPrecio" class="text-4xl font-black text-blue-700"></span> </div> </div> <article class="prose prose-slate max-w-none border-t mt-12 pt-10 text-slate-600"> <h3 class="text-xl font-bold text-slate-800">
¿Cómo poner precio a un producto?
</h3> <p>
La fórmula correcta para mantener el margen sobre la venta es: <strong>Costo / (1 - Margen)</strong>. Si usás la multiplicación simple sobre el costo, estarás perdiendo
        dinero sin saberlo.
</p> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/precio-venta.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/precio-venta.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/negocios/precio-venta.astro";
const $$url = "/negocios/precio-venta";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PrecioVenta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
