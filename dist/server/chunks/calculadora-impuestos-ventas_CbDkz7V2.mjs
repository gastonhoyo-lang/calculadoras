globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$CalculadoraImpuestosVentas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraImpuestosVentas;
  const fImpuestoDirecto = "$$ Impuesto = Precio\\ Base \\times \\left( \\frac{Tasa\\ %}{100} \\right) $$";
  const fPrecioFinal = "$$ Precio\\ Total = Precio\\ Base + Impuesto $$";
  const fDesglose = "$$ Base = \\frac{Precio\\ Total}{1 + \\frac{Tasa}{100}} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Impuestos de Ventas Online | Calcula IVA y Tax", "description": "Calcula fácilmente el impuesto sobre ventas o IVA. Guía completa sobre impuestos indirectos, cómo desglosar precios y ejemplos prácticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-blue-600">Impuestos de Ventas</span> ⚖️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Calcula el IVA, Sales Tax o cualquier impuesto sobre el consumo de forma
        instantánea y precisa.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <label for="inputBaseImpuesto" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Precio Base (Sin Impuestos)</label> <input type="number" id="inputBaseImpuesto" placeholder="Ej: 1000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputTasaImpuesto" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Tasa de Impuesto (%)</label> <input type="number" id="inputTasaImpuesto" placeholder="Ej: 21" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularImpuesto" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Precio Total
</button> <div id="boxResultadoImpuestos" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 text-center"> <span class="block text-xs font-bold text-blue-400 uppercase mb-2 tracking-widest">Precio Final a Pagar</span> <span id="resPrecioTotal" class="block text-6xl font-black text-blue-700">$0</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resMontoImpuesto" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monto del Impuesto</span> </div> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resMultiplicador" class="block text-xl font-bold text-slate-800">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Factor Multiplicador</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es el Impuesto sobre las Ventas y cómo afecta al consumidor?
</h2> <p class="mb-6">
El <strong>impuesto sobre las ventas</strong>, conocido en muchos países
        como IVA o Sales Tax, es un tributo indirecto que se aplica al consumo
        de bienes y servicios. A diferencia de los impuestos directos, como el
        impuesto sobre la renta que grava lo que ganas, el impuesto a las ventas
        grava lo que gastas. Es una de las principales fuentes de recaudación
        para los estados modernos y su gestión es fundamental tanto para
        comercios como para compradores.
</p> <p class="mb-6">
Desde una perspectiva técnica, el impuesto sobre las ventas se considera
        un "impuesto regresivo". Esto significa que, aunque la tasa es igual
        para todos, tiene un impacto proporcionalmente mayor en las personas con
        menores ingresos, ya que destinan una parte más grande de su presupuesto
        al consumo básico. Por esta razón, muchos países aplican tasas
        diferenciadas: menores para alimentos y medicinas, y mayores para
        artículos de lujo.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencias entre IVA y Sales Tax
</h3> <p class="mb-6">
Aunque a menudo se usan como sinónimos en las calculadoras online,
        existen diferencias estructurales importantes que todo profesional de
        finanzas o dueño de negocio debe conocer:
</p> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>IVA (Impuesto al Valor Agregado):</strong> Se recauda en cada etapa
          de la cadena de producción. El fabricante paga IVA, el distribuidor paga
          IVA y el consumidor final también. Sin embargo, las empresas pueden "deducir"
          el IVA que pagaron, por lo que el peso recae finalmente en el usuario final.
</li> <li> <strong>Sales Tax (Impuesto sobre Ventas):</strong> Es muy común en Estados
          Unidos. Solo se cobra al consumidor final en el punto de venta. No hay créditos
          fiscales entre empresas en la cadena de suministro, lo que simplifica la
          facturación B2B pero complica el precio final en estantería.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Fórmulas Matemáticas para el Cálculo de Impuestos
</h3> <p class="mb-6">
Para calcular cuánto pagarás de impuesto, primero debemos determinar el
        monto tributario individual y luego sumarlo a la base neta:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fImpuestoDirecto} </div> <p class="mb-6">
Una vez obtenido el monto del impuesto, el precio final se define por la
        suma simple del valor original y el tributo generado:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fPrecioFinal} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Variables Explicadas
</h3> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Precio Base (Neto):</strong> Es el valor real del producto antes
          de que el gobierno aplique cualquier cargo adicional.
</li> <li> <strong>Tasa de Impuesto:</strong> El porcentaje establecido por la ley.
          En España el IVA general es del 21%, en México el IVA es del 16%, y en Argentina
          es del 21%.
</li> <li> <strong>Factor Multiplicador:</strong> Una forma rápida de calcular el total
          es multiplicar la base por 1 más la tasa dividida por 100. Por ejemplo,
          para un IVA del 21%, el factor es 1.21.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Cómo desglosar un precio (Cálculo inverso)
</h3> <p class="mb-6">
A veces tienes el precio final (con impuesto incluido) y necesitas saber
        cuál era el precio base. Un error común es restar el porcentaje
        directamente, lo cual es matemáticamente incorrecto. La fórmula exacta
        para desglosar el precio neto es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fDesglose} </div> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de Cálculo Paso a Paso
</h2> <div class="space-y-12 mb-20"> <div class="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100"> <h3 class="text-xl font-bold text-blue-900 mb-4">
Ejemplo 1: Compra de Electrónica
</h3> <p class="mb-4">
Un ordenador tiene un precio base de 1,200 €. Se le debe aplicar un
            impuesto del 21%.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Paso 1 (Monto):</strong> $$ 1,200 \\times 0.21 = 252 $$
</li> <li> <strong>Paso 2 (Total):</strong> $$ 1,200 + 252 = 1,452 $$
</li> <li> <strong>Resultado:</strong> El cliente paga un total de <strong>1,452 €</strong>.
</li> </ul> </div> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Servicio Profesional
</h3> <p class="mb-4">
Un consultor cobra $5,000 MXN netos por sus servicios. Debe agregar
            el 16% de IVA.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Paso 1 (Monto):</strong> $$ 5,000 \\times 0.16 = 800 $$
</li> <li> <strong>Paso 2 (Total):</strong> $$ 5,000 + 800 = 5,800 $$
</li> <li> <strong>Resultado:</strong> La factura total será de <strong>$5,800 MXN</strong>.
</li> </ul> </div> </div> <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100"> <h3 class="text-xl font-bold text-emerald-900 mb-4">
Ejemplo 3: Sales Tax en Estados Unidos
</h3> <p class="mb-4">
Un turista compra ropa por un valor de $150 USD. El Sales Tax es del
            7%.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Paso 1 (Monto):</strong> $$ 150 \\times 0.07 = 10.50 $$
</li> <li> <strong>Paso 2 (Total):</strong> $$ 150 + 10.50 = 160.50 $$
</li> <li> <strong>Resultado:</strong> El pago en caja será de <strong>$160.50 USD</strong>.
</li> </ul> </div> </div> </div> <h2 class="text-2xl font-bold text-slate-800 mb-4">
Consideraciones Finales
</h2> <p class="mb-12">
Es vital que los negocios mantengan sus registros actualizados, ya que
        las tasas impositivas pueden cambiar por decreto gubernamental. Usar una
        calculadora precisa ayuda a evitar errores en el presupuesto y garantiza
        transparencia con el cliente final.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-blue-400 font-bold mb-2">Tip Educativo:</p> <p class="text-sm text-slate-400">
"Verifica siempre si el precio exhibido ya incluye impuestos o no para
          evitar sorpresas al momento del pago final."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-impuestos-ventas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-impuestos-ventas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-impuestos-ventas.astro";
const $$url = "/utiles/calculadora-impuestos-ventas";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraImpuestosVentas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
