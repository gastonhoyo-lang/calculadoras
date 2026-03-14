globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$Comisiones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Comisiones de Venta | Chieffin", "description": "Calculá cuánto dinero recibís realmente después de las comisiones de plataformas y costos de envío." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">E-Commerce</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Comisiones de <span class="text-orange-600">Venta</span> 🛒
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Cuánto te queda en mano? Descontá comisiones, costos fijos y envíos.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Precio de Venta ($)</label> <input type="number" id="precioVenta" placeholder="Ej: 15000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold text-xl"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Comisión (%)</label> <input type="number" id="porcentajeComision" placeholder="Ej: 13" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Costo Fijo ($)</label> <input type="number" id="costoFijo" placeholder="Ej: 300" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold text-xl"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Costo de Envío a tu cargo ($)</label> <input type="number" id="costoEnvio" placeholder="0" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcComision" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl">
Calcular Mi Ganancia
</button> <div id="resComision" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-orange-50 rounded-[2rem] border-2 border-orange-100 border-dashed text-center"> <p class="text-orange-600 font-bold text-sm uppercase mb-2">
Recibís en tu cuenta:
</p> <div id="montoNeto" class="text-5xl font-black text-orange-900 tracking-tighter mb-2">
$0
</div> <div class="h-px bg-orange-200 w-full mb-4"></div> <p class="text-orange-800 text-sm font-medium">
La plataforma te descuenta: <span id="montoDescuento" class="font-bold"></span> </p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
Cuidá tu margen de ganancia
</h2> <p class="text-slate-600 text-sm italic">
Muchos vendedores olvidan que las plataformas cobran una comisión
          porcentual y, a veces, un cargo fijo por cada unidad vendida.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
¿Qué descontar?
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Comisión por categoría:</strong> Depende de si es una publicación
            Clásica o Premium.
</li> <li> <strong>Cargos fijos:</strong> Montos que se aplican a productos de bajo
            costo.
</li> <li> <strong>Retenciones impositivas:</strong> Según tu condición fiscal (IVA,
            Ganancias, Ingresos Brutos).
</li> </ul> <div class="bg-slate-100 p-6 rounded-2xl mt-8"> <p class="text-sm font-bold text-slate-700 mb-2">Consejo:</p> <p class="text-xs text-slate-500 italic">
Siempre calculá tus costos de reposición antes de fijar el precio de
            venta final para no "perder plata vendiendo".
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/comisiones.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/comisiones.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/negocios/comisiones.astro";
const $$url = "/negocios/comisiones";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Comisiones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
