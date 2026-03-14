globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$CalculadoraRentabilidadProducto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraRentabilidadProducto;
  const fRentabilidadPorcentual = "$$ Rentabilidad\\ (%) = \\left( \\frac{Precio\\ de\\ Venta - Costo\\ Total}{Precio\\ de\\ Venta} \\right) \\times 100 $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Rentabilidad de Producto | Optimiza tu Inventario", "description": "Calcula la rentabilidad real de tus productos. Guía paso a paso sobre márgenes, costos ocultos y cómo mejorar el retorno de inversión de tu catálogo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-orange-600">Rentabilidad de Producto</span> 📦
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Analiza si tus productos están generando ganancias reales o si los
        costos ocultos están devorando tu margen.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <label for="inputPrecioVenta" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Precio de Venta Final</label> <input type="number" id="inputPrecioVenta" placeholder="Ej: 150" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputCostoAdquisicion" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Costo de Adquisición/Fabricación</label> <input type="number" id="inputCostoAdquisicion" placeholder="Ej: 60" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputCostosLogisticos" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Logística, Envío y Comisiones</label> <input type="number" id="inputCostosLogisticos" placeholder="Ej: 15" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputOtrosGastos" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Otros Gastos (Marketing, Packing)</label> <input type="number" id="inputOtrosGastos" placeholder="Ej: 5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularRentabilidad" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Rentabilidad Real
</button> <div id="boxResultadoRentabilidad" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-orange-50 p-10 rounded-[2.5rem] border border-orange-100 text-center"> <span class="block text-xs font-bold text-orange-400 uppercase mb-2 tracking-widest">Margen de Rentabilidad Unitario</span> <span id="resRentabilidadPor" class="block text-6xl font-black text-orange-700">0%</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resUtilidadMonetaria" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ganancia por Unidad</span> </div> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resCostoTotalAcum" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Costo Total Unitario</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
Rentabilidad de Producto: El Análisis Profundo para Negocios Saludables
</h2> <p class="mb-6">
La <strong>rentabilidad de producto</strong> es la medida que indica cuánta
        ganancia neta genera un artículo específico después de deducir todos los costos
        directos e indirectos asociados a su venta. A diferencia del simple margen
        comercial, que suele mirar solo la diferencia entre compra y venta, el análisis
        de rentabilidad real desglosa cada centavo invertido para asegurar que el
        producto sea financieramente viable para la empresa.
</p> <p class="mb-6">
Muchos emprendedores caen en la trampa del "volumen": venden miles de
        unidades de un producto pensando que son rentables, pero al no
        considerar las comisiones de pasarelas de pago, los costos de
        devoluciones o el packing especializado, terminan descubriendo que en
        realidad están perdiendo dinero con cada venta. Este fenómeno se conoce
        como la "trampa del crecimiento no rentable".
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Por qué analizar la rentabilidad a nivel de SKU?
</h3> <p class="mb-6">
Un SKU (Stock Keeping Unit) es el código que identifica a cada producto.
        Analizar la rentabilidad a este nivel permite tomar decisiones drásticas
        pero necesarias:
</p> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Eliminar productos "zombies":</strong> Aquellos que ocupan espacio
          en el almacén pero su margen es tan bajo que no cubren ni su propio almacenamiento.
</li> <li> <strong>Optimizar la inversión en marketing:</strong> Invertir más presupuesto
          en anuncios para los productos que tienen mayor rentabilidad, no necesariamente
          para los más baratos.
</li> <li> <strong>Renegociar con proveedores:</strong> Identificar qué componentes
          del costo total están afectando la viabilidad del artículo.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula de la Rentabilidad del Producto
</h3> <p class="mb-6">
Para obtener un porcentaje preciso, debemos sumar todos los desembolsos
        antes de aplicar la ecuación:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fRentabilidadPorcentual} </div> <p class="mb-6">Variables fundamentales del cálculo:</p> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Precio de Venta:</strong> El monto final que paga el cliente después
          de descuentos pero antes de impuestos indirectos (si los manejas por separado).
</li> <li> <strong>Costo de Adquisición/Fabricación:</strong> Lo que pagaste al proveedor
          o lo que te costó la materia prima y mano de obra directa.
</li> <li> <strong>Costos Logísticos:</strong> Fletes, envíos, comisiones de plataformas
          (como Amazon o Shopify) y tarifas de pasarelas de pago.
</li> <li> <strong>Gastos Variables Adicionales:</strong> Publicidad por unidad (CPA),
          embalaje y porcentaje estimado de roturas o devoluciones.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Márgenes Brutos vs. Rentabilidad Real
</h3> <p class="mb-6">
Es vital entender la diferencia. El <strong>margen bruto</strong> suele ser
        superficial: "Lo compro a 10, lo vendo a 20, gano 50%". La <strong>rentabilidad real</strong> es cruda: "Lo compro a 10, pago 2 de envío, 1 de comisión de tarjeta, 2
        de publicidad y 1 de empaque. Me quedan 4 libres sobre 20 vendidos: mi rentabilidad
        real es del 20%".
</p> <p class="mb-10">
Esta diferencia de 30 puntos porcentuales es donde mueren la mayoría de
        los negocios de ecommerce que no utilizan una calculadora especializada
        de rentabilidad.
</p> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de Rentabilidad Paso a Paso
</h2> <div class="space-y-12 mb-20"> <div class="p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100"> <h3 class="text-xl font-bold text-orange-900 mb-4">
Ejemplo 1: Venta de Gadgets en Ecommerce
</h3> <p class="mb-4">
Un reloj inteligente se vende por $120. El costo de fábrica es de
            $50. Los envíos cuestan $10 y la plataforma cobra $12 de comisión.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Suma de Costos:</strong> 50 + 10 + 12 = $72</li> <li><strong>Utilidad:</strong> 120 - 72 = $48</li> <li><strong>Cálculo:</strong> $$ (48 / 120) \\times 100 $$</li> <li> <strong>Resultado:</strong> 40% de rentabilidad. Es un producto estrella.
</li> </ul> </div> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Producto de Supermercado (Gran Consumo)
</h3> <p class="mb-4">
Un paquete de café se vende a $8. El costo es de $6. Logística y
            reposición cuestan $1.20 por unidad.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Suma de Costos:</strong> 6 + 1.20 = $7.20</li> <li><strong>Utilidad:</strong> 8 - 7.20 = $0.80</li> <li><strong>Cálculo:</strong> $$ (0.80 / 8) \\times 100 $$</li> <li> <strong>Resultado:</strong> 10% de rentabilidad. Requiere alto volumen
                para ser viable.
</li> </ul> </div> </div> <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100"> <h3 class="text-xl font-bold text-emerald-900 mb-4">
Ejemplo 3: Artesanía Personalizada
</h3> <p class="mb-4">
Un cuadro pintado a mano se vende en $300. Materiales cuestan $40.
            El tiempo del artista (mano de obra) se valora en $150. El envío
            especial cuesta $30.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Suma de Costos:</strong> 40 + 150 + 30 = $220</li> <li><strong>Utilidad:</strong> 300 - 220 = $80</li> <li><strong>Cálculo:</strong> $$ (80 / 300) \\times 100 $$</li> <li><strong>Resultado:</strong> 26.6% de rentabilidad.</li> </ul> </div> </div> </div> <h2 class="text-2xl font-bold text-slate-800 mb-4">
Estrategias para incrementar la rentabilidad unitaria
</h2> <ol class="list-decimal pl-6 mb-12 space-y-4"> <li> <strong>Reducción del costo de empaque:</strong> Sin sacrificar la seguridad,
          buscar materiales más ligeros o compras por mayor cantidad para bajar el
          costo unitario.
</li> <li> <strong>Mejora del Average Order Value (AOV):</strong> Si el cliente compra
          dos productos en lugar de uno, el costo logístico se diluye, aumentando
          la rentabilidad del paquete.
</li> <li> <strong>Automatización del Marketing:</strong> Bajar el CPA (Costo por Adquisición)
          mediante SEO o contenido orgánico mejora drásticamente el margen neto del
          producto.
</li> <li> <strong>Selección de Canales:</strong> A veces, vender en tu propia web
          tiene una rentabilidad del 40% mientras que en un Marketplace baja al 15%.
          Prioriza los canales más rentables.
</li> </ol> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-orange-400 font-bold mb-2">Consejo de Oro:</p> <p class="text-sm text-slate-400">
"No todos los productos que venden mucho son buenos. A veces, el
          producto que menos vendes es el que más dinero deja en tu bolsillo.
          Analiza tus datos."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-producto.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-producto.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-producto.astro";
const $$url = "/utiles/calculadora-rentabilidad-producto";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraRentabilidadProducto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
