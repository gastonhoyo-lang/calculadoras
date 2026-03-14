globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$PuntoEquilibrio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Punto de Equilibrio | Finanzas para Emprendedores", "description": "Calculá el punto de equilibrio de tu negocio. Descubrí cuántas unidades necesitás vender para cubrir tus costos fijos y variables." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Punto de <span class="text-indigo-600">Equilibrio</span> </h1> <p class="text-slate-500 text-lg font-medium">
La métrica clave para saber si tu negocio es rentable.
</p> </header> <div class="grid md:grid-cols-2 gap-8 mb-16"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 text-left">Costos Fijos Totales ($)</label> <input type="number" id="fijos" placeholder="Alquiler, sueldos, servicios..." class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none font-bold text-xl text-slate-700"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 text-left">Precio de Venta por Unidad ($)</label> <input type="number" id="precio" placeholder="A cuánto lo vendés" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none font-bold text-xl text-slate-700"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 text-left">Costo Variable por Unidad ($)</label> <input type="number" id="variable" placeholder="Materia prima, envío, comisiones" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none font-bold text-xl text-slate-700"> </div> <button id="btnEquilibrio" class="w-full bg-indigo-600 text-white p-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
Calcular Unidades
</button> </div> <div id="resEquilibrio" class="hidden flex flex-col gap-4 animate-in fade-in zoom-in duration-500"> <div class="bg-slate-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl"> <p class="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-2">
Debés vender al menos
</p> <h2 id="unidadesVal" class="text-6xl font-black text-white mb-2">
0
</h2> <p class="text-slate-400 text-xl font-medium">
unidades para no perder plata.
</p> </div> <div class="bg-indigo-50 p-6 rounded-[2rem] border border-indigo-100 text-center"> <p class="text-indigo-600 text-xs font-bold uppercase mb-1">
Ingresos de equilibrio
</p> <span id="dineroVal" class="text-2xl font-black text-indigo-900">$0</span> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es el punto de equilibrio y para qué sirve?
</h2> <p>
El punto de equilibrio (o <em>break-even point</em>) es el volumen de
        ventas donde los ingresos totales igualan a los costos totales. En este
        punto, <strong>tu utilidad es cero</strong>: no estás ganando, pero
        tampoco estás perdiendo dinero.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">
La Fórmula Maestra:
</h3> <div class="bg-indigo-50 p-6 rounded-2xl font-mono text-center my-6 border border-indigo-100"> <p class="text-indigo-800 text-lg font-bold">
Punto de Equilibrio = Costos Fijos / (Precio - Costo Variable)
</p> </div> <h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">
Conceptos clave para entender tu resultado:
</h3> <ul class="list-disc pl-5 space-y-3"> <li> <strong>Costos Fijos:</strong> Son los gastos que tenés que pagar sí o sí,
          vendas o no (alquiler, internet, sueldos administrativos).
</li> <li> <strong>Costo Variable Unitario:</strong> Lo que te cuesta producir o adquirir
          una sola unidad (materia prima, comisiones, packaging).
</li> <li> <strong>Margen de Contribución:</strong> Es la diferencia entre el precio
          de venta y el costo variable. Es el dinero que "sobra" de cada venta para
          cubrir los costos fijos.
</li> </ul> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/punto-equilibrio.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/punto-equilibrio.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/negocios/punto-equilibrio.astro";
const $$url = "/negocios/punto-equilibrio/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PuntoEquilibrio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
