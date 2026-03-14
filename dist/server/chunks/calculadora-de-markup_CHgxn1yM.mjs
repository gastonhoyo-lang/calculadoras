globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$CalculadoraDeMarkup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraDeMarkup;
  const fMarkupFormula = "$$ Markup = \\left( \\frac{Precio\\ de\\ Venta - Costo}{Costo} \\right) \\times 100 $$";
  const fPrecioVenta = "$$ Precio\\ de\\ Venta = Costo \\times (1 + \\frac{Markup}{100}) $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Markup Online | Define tus Precios de Venta", "description": "Calcula el markup de tus productos de forma sencilla. Aprende la diferencia entre markup y margen de ganancia con ejemplos detallados." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-orange-600">Markup</span> 🏷️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Establece precios inteligentes asegurando la rentabilidad de cada unidad
        vendida.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <label for="inputCostoProd" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Costo del Producto ($)</label> <input type="number" id="inputCostoProd" placeholder="Ej: 50" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputMarkupPerc" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Markup Deseado (%)</label> <input type="number" id="inputMarkupPerc" placeholder="Ej: 40" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularMarkup" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Precio de Venta
</button> <div id="boxResultadoMarkup" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-orange-50 p-10 rounded-[2.5rem] border border-orange-100 text-center"> <span class="block text-xs font-bold text-orange-400 uppercase mb-2 tracking-widest">Precio de Venta Sugerido</span> <span id="resPrecioFinal" class="block text-6xl font-black text-orange-700">$0</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resGananciaBruta" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ganancia por Unidad</span> </div> <div id="resMargenLabel" class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resMargenEquiv" class="block text-xl font-bold text-slate-800">0%</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Margen de Ganancia</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es el Markup y cómo impacta en tu negocio?
</h2> <p class="mb-6">
El <strong>markup</strong> es un índice utilizado en la fijación de precios
        que determina cuánto se le suma al costo de adquisición o producción de un
        producto para obtener el precio de venta final. A diferencia de otros indicadores
        financieros, el markup se calcula sobre el costo unitario del producto, permitiendo
        a los comerciantes asegurarse de que cubren sus gastos operativos y obtienen
        el margen de beneficio deseado.
</p> <p class="mb-6">
Establecer un markup adecuado es uno de los mayores desafíos para
        cualquier emprendedor. Si el markup es demasiado bajo, el negocio corre
        el riesgo de no cubrir sus costos fijos y terminar con pérdidas. Si es
        demasiado alto, el producto puede quedar fuera de mercado frente a la
        competencia. Por ello, dominar esta métrica es fundamental para la salud
        financiera de cualquier proyecto de retail, manufactura o servicios.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Diferencia Crítica: Markup vs Margen de Ganancia
</h3> <p class="mb-6">
Este es el punto donde más errores cometen los dueños de negocios.
        Aunque ambos conceptos se relacionan con la rentabilidad, no son lo
        mismo:
</p> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Markup:</strong> Se calcula sobre el <strong>costo</strong>.
          Es el porcentaje que añades al costo para llegar al precio.
</li> <li> <strong>Margen de Ganancia:</strong> Se calcula sobre el <strong>precio de venta</strong>. Es el porcentaje del precio final que representa utilidad.
</li> </ul> <p class="mb-6 italic">
Nota importante: Un markup del 50% no significa que tengas un margen del
        50%. De hecho, un markup del 100% (duplicar el costo) equivale a un
        margen de ganancia del 50%.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula del Markup
</h3> <p class="mb-6">
Para calcular el markup que estás aplicando actualmente a un producto,
        utilizamos la siguiente expresión matemática:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fMarkupFormula} </div> <p class="mb-6">
Por otro lado, si conoces tu costo y quieres fijar un precio basado en
        un markup específico, la fórmula es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fPrecioVenta} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Variables que influyen en el Markup
</h3> <p class="mb-6">
Para definir un markup competitivo y seguro, debes considerar más que
        solo el costo del producto. Los expertos recomiendan incluir:
</p> <ul class="list-decimal pl-6 mb-8 space-y-4"> <li> <strong>Costos Variables:</strong> Materia prima, flete, embalaje y comisiones
          de venta.
</li> <li> <strong>Costos Fijos:</strong> Alquiler, salarios, servicios públicos y
          seguros prorrateados por unidad.
</li> <li> <strong>Impuestos:</strong> Debes considerar el IVA u otros impuestos locales
          que gravan la venta.
</li> <li> <strong>Posicionamiento de Marca:</strong> Marcas de lujo suelen utilizar
          markups mucho más altos basados en el valor percibido.
</li> </ul> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos Paso a Paso
</h2> <div class="space-y-12 mb-20"> <div class="p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100"> <h3 class="text-xl font-bold text-orange-900 mb-4">
Ejemplo 1: Tienda de Calzado
</h3> <p class="mb-4">
Un comerciante compra un par de zapatillas a un distribuidor por
            $40. Desea aplicar un markup del 60% para cubrir gastos y obtener
            ganancia.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Costo:</strong> $40</li> <li><strong>Markup:</strong> 60% (0.60)</li> <li> <strong>Cálculo:</strong> $$ 40 \\times (1 + 0.60) = 40 \\times 1.60
                $$
</li> <li> <strong>Resultado:</strong> El precio de venta será de <strong>$64</strong>. La ganancia bruta es de $24.
</li> </ul> </div> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Restaurante (Costo de Plato)
</h3> <p class="mb-4">
Un chef calcula que los ingredientes de un plato de pasta cuestan
            $5. Para que el restaurante sea rentable, aplica un markup estándar
            del 300%.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Costo:</strong> $5</li> <li><strong>Markup:</strong> 300% (3.0)</li> <li> <strong>Cálculo:</strong> $$ 5 \\times (1 + 3.0) = 5 \\times 4 $$
</li> <li> <strong>Resultado:</strong> El precio en carta será de <strong>$20</strong>. Esto cubre el personal, el local y la merma.
</li> </ul> </div> </div> <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100"> <h3 class="text-xl font-bold text-emerald-900 mb-4">
Ejemplo 3: Análisis de Competencia
</h3> <p class="mb-4">
Sabes que tu competencia vende un producto a $100 y tú sabes que el
            costo de fábrica es de $70. ¿Qué markup están aplicando?
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Precio Venta:</strong> $100 | <strong>Costo:</strong> $70
</li> <li> <strong>Cálculo:</strong> $$ ((100 - 70) / 70) \\times 100 $$
</li> <li> <strong>Resultado:</strong> Están aplicando un markup del <strong>42.86%</strong>.
</li> </ul> </div> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Por qué usar Markup en lugar de Margen?
</h3> <p class="mb-6">
El markup es mucho más sencillo de usar para los equipos de compras. Es
        más fácil decir "añade un 50% a todo lo que llegue" que calcular el
        margen inverso para cada producto. Sin embargo, para los informes
        financieros de fin de mes, el margen de ganancia es el que te dirá
        realmente cuánto dinero del total facturado es tuyo.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-orange-400 font-bold mb-2">Consejo de Negocios:</p> <p class="text-sm text-slate-400">
Nunca olvides que el Markup es una herramienta de fijación de precios,
          pero el mercado es quien tiene la última palabra. Siempre compara tu
          resultado con los precios de tu competencia directa.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-markup.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-markup.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-markup.astro";
const $$url = "/utiles/calculadora-de-markup";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDeMarkup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
