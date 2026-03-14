globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$Margen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Margen;
  const formulaMargenBruto = "$$ \\text{Margen Bruto (\\%)} = \\left( \\frac{\\text{Ingresos} - \\text{Costo}}{\\text{Ingresos}} \\right) \\times 100 $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Margen de Ganancia | Calcula tu Rentabilidad Online", "description": "Calculá el margen de ganancia de tus productos. Aprendé la diferencia entre margen y marcado, con fórmulas de rentabilidad y ejemplos prácticos para tu negocio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-orange-600">Margen de Ganancia</span> 📈
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Optimizá tus precios y conocé la rentabilidad real de tu negocio en
        segundos.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 items-end"> <div class="space-y-3"> <label for="costoProducto" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Costo del Producto ($)</label> <input type="number" id="costoProducto" placeholder="Ej: 500" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="space-y-3"> <label for="precioVenta" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Precio de Venta ($)</label> <input type="number" id="precioVenta" placeholder="Ej: 800" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <button id="btnCalcularMargen" class="md:col-span-2 w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Rentabilidad
</button> </div> <div id="resultadoMargenBox" class="hidden mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="bg-orange-50 p-6 rounded-3xl border border-orange-100 text-center"> <span class="text-[10px] font-bold text-orange-400 uppercase block mb-1">Margen Bruto</span> <div id="resMargenPorcentaje" class="text-4xl font-black text-orange-600">
0%
</div> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span class="text-[10px] font-bold text-slate-400 uppercase block mb-1">Ganancia Neta</span> <div id="resGananciaAbsoluta" class="text-3xl font-black text-slate-800">
$ 0
</div> </div> <div class="bg-slate-900 p-6 rounded-3xl text-center shadow-xl"> <span class="text-[10px] font-bold text-slate-400 uppercase block mb-1">Marcado (Markup)</span> <div id="resMarkupPorcentaje" class="text-3xl font-black text-white">
0%
</div> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es el margen de ganancia y por qué define el éxito de tu empresa?
</h2> <p class="mb-6">
El <strong>margen de ganancia</strong> es, posiblemente, el indicador financiero
        más importante para cualquier comerciante o prestador de servicios. Representa
        el porcentaje de los ingresos que queda después de deducir los costos directos
        asociados a la producción o adquisición de un bien. Sin un conocimiento claro
        de este número, es imposible determinar si tu estructura de precios es sostenible
        a largo plazo.
</p> <p class="mb-6 text-balance">
Muchos emprendedores cometen el error de enfocarse solo en el volumen de
        ventas, pero como dice el refrán financiero: "Las ventas son vanidad, el
        margen es realidad". Un negocio que factura millones pero tiene un
        margen del 1% es mucho más frágil que uno que factura menos pero retiene
        el 30% de sus ingresos.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La diferencia crítica entre Margen y Marcado (Markup)
</h3> <p class="mb-4">
Este es el punto donde la mayoría de las personas se confunde. Aunque
        ambos términos se expresan en porcentajes, miden cosas distintas:
</p> <ul class="list-disc pl-6 mb-8 space-y-3"> <li> <strong>Margen de Ganancia:</strong> Se calcula sobre el <em>precio de venta</em>. Te dice cuánto del dinero que entra es beneficio.
</li> <li> <strong>Marcado (Markup):</strong> Se calcula sobre el <em>costo</em>.
          Te dice cuánto le sumaste al costo original para llegar al precio.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Fórmulas Matemáticas para el Éxito Financiero
</h3> <p class="mb-6">
Para calcular el margen bruto de un producto o de tu catálogo completo,
        aplicamos la siguiente fórmula en LaTeX:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaMargenBruto} </div> <p class="mb-6 italic text-center">
Por ejemplo, si vendés algo a $100 que te costó $70, tu ganancia es de
        $30. El margen es ($30 / $100) * 100 = 30%.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Reales
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-orange-600 mb-3 text-xl">
Retail y E-commerce
</h4> <p class="text-sm leading-relaxed text-slate-600">
En la venta de productos físicos, conocer el margen te permite saber
            cuánto podés invertir en publicidad (CAC) sin perder dinero en cada
            venta.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-orange-600 mb-3 text-xl">
Servicios Profesionales
</h4> <p class="text-sm leading-relaxed text-slate-600">
Si sos freelancer, tu costo es tu tiempo. Calcular el margen te
            ayuda a decidir si tus tarifas cubren no solo tu trabajo, sino
            también tus herramientas y ahorros.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos y Ejercicios
</h3> <div class="space-y-6 mb-12"> <div class="p-8 bg-orange-50 rounded-[3rem] border border-orange-100"> <p class="font-bold text-lg mb-2">Ejemplo 1: El error del 50%</p> <p class="text-sm">
Si querés ganar un 50% de margen y tu producto cuesta $100, muchos
            piensan que el precio es $150. Pero si vendés a $150 algo de $100,
            tu margen real es solo del 33.3%. Para ganar un 50% de margen, ¡el
            precio debería ser $200!
</p> </div> <div class="p-8 bg-slate-50 rounded-[3rem] border border-slate-100"> <p class="font-bold text-lg mb-2">Ejemplo 2: Descuentos agresivos</p> <p class="text-sm">
Tenés un margen del 20% en un producto. Si ofrecés un "15% de
            descuento" para liquidar stock, tu margen se reduce drásticamente al
            5.8%. Este cálculo es vital antes de lanzar promociones en
            CyberMonday o Black Friday.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Cómo mejorar tus márgenes
</h3> <p class="mb-6">
Existen solo tres formas de mejorar tu margen: aumentar tus precios,
        reducir tus costos de adquisición (negociando con proveedores) o mejorar
        la eficiencia operativa para reducir gastos indirectos. La mayoría de
        las empresas exitosas trabajan en las tres áreas simultáneamente.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-orange-400 font-bold mb-2">Consejo de Negocio:</p> <p class="text-sm text-slate-400">
Revisá tus márgenes al menos una vez por trimestre. En contextos
          inflacionarios, no actualizar los precios a tiempo puede hacer que
          termines trabajando a pérdida sin darte cuenta.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/negocios/margen.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/negocios/margen.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/negocios/margen.astro";
const $$url = "/negocios/margen/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Margen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
