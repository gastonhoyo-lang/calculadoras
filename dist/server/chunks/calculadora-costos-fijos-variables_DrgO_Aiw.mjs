globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$CalculadoraCostosFijosVariables = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraCostosFijosVariables;
  const fCostoTotal = "$$ CT = CF + (CVu \\times Q) $$";
  const fCostoMedio = "$$ CMe = \\frac{CF + CV}{Q} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Costos Fijos y Variables | Gestión Financiera", "description": "Calcula fácilmente los costos totales de tu negocio. Aprende a diferenciar gastos fijos de variables con nuestra guía completa y ejemplos prácticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-blue-600">Costos Operativos</span> 🏭
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Analiza la estructura de gastos de tu empresa para optimizar la
        rentabilidad y el precio de venta.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <label for="inputFijos" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Costos Fijos Totales (Mes)</label> <input type="number" id="inputFijos" placeholder="Ej: 2000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputVariablesUnit" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Costo Variable por Unidad</label> <input type="number" id="inputVariablesUnit" placeholder="Ej: 15" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4 md:col-span-2"> <label for="inputCantidad" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Cantidad de Unidades Producidas/Vendidas</label> <input type="number" id="inputCantidad" placeholder="Ej: 500" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularCostos" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-xl">
Analizar Estructura de Costos
</button> <div id="boxResultadoCostos" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 text-center"> <span class="block text-xs font-bold text-blue-400 uppercase mb-2 tracking-widest">Costo Total de Operación</span> <span id="resCostoTotal" class="block text-6xl font-black text-blue-700">$0</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resCostoVariableTotal" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Costos Variables Totales</span> </div> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resCostoUnitarioMedio" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Costo Medio por Unidad</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
Dominando la Estructura de Costos: Fijos vs. Variables
</h2> <p class="mb-6">
Para que cualquier proyecto comercial sea sostenible, el emprendedor
        debe conocer a la perfección su estructura de costos. No basta con saber
        cuánto dinero entra; es vital entender cómo se comporta el gasto en
        relación con el volumen de actividad. Aquí es donde entra la distinción
        fundamental entre <strong>costos fijos</strong> y <strong>costos variables</strong>. Esta clasificación no es solo contable, sino estratégica, ya que
        determina el riesgo financiero y la escalabilidad del modelo de negocio.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Qué son los Costos Fijos?
</h3> <p class="mb-6">
Los costos fijos son aquellos que permanecen constantes durante un
        periodo de tiempo determinado, independientemente de si la empresa
        produce una unidad o un millón. Son gastos que "esperan" al dueño del
        negocio cada mañana, se venda o no. Son la base de la estructura y, a
        menudo, el mayor desafío de liquidez para las nuevas empresas.
</p> <p class="mb-6">
Ejemplos clásicos de costos fijos incluyen el alquiler del local, los
        salarios del personal administrativo (aquellos que no varían por
        producción), los seguros, las suscripciones de software y los servicios
        públicos básicos que tienen un cargo mínimo. El peligro de los costos
        fijos elevados es que aumentan el "punto de equilibrio", obligando a la
        empresa a vender grandes volúmenes solo para no perder dinero.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Qué son los Costos Variables?
</h3> <p class="mb-6">
A diferencia de los fijos, los costos variables fluctúan de forma
        proporcional al nivel de actividad de la empresa. Si no hay producción o
        ventas, el costo variable es cero. Son gastos "asociados a la acción".
        Cuanto más vendes, más incurres en ellos, pero también más ingresos
        generas para cubrirlos.
</p> <p class="mb-6">
En este grupo encontramos la materia prima, los insumos directos, las
        comisiones de venta, los costos de envío (logística) y la mano de obra
        contratada específicamente por obra o servicio. Un negocio con una
        estructura mayoritariamente variable es más flexible y menos riesgoso en
        tiempos de crisis, aunque suele tener márgenes de ganancia más ajustados
        por unidad.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula del Costo Total
</h3> <p class="mb-6">
Para gestionar un negocio, necesitamos consolidar ambos tipos de gastos
        en una sola ecuación que nos permita proyectar escenarios financieros:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fCostoTotal} </div> <p class="mb-6">Donde las variables son:</p> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>CT (Costo Total):</strong> El desembolso total necesario para operar
          en un nivel de producción dado.
</li> <li> <strong>CF (Costos Fijos):</strong> La suma de todos los gastos que no dependen
          de la producción.
</li> <li> <strong>CVu (Costo Variable Unitario):</strong> Lo que cuesta producir exactamente
          una unidad adicional.
</li> <li> <strong>Q (Cantidad):</strong> El número total de unidades producidas o
          servicios prestados.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La importancia del Costo Medio o Unitario
</h3> <p class="mb-6">
Un concepto derivado crucial es el costo medio. A medida que aumenta la
        producción, el costo fijo se reparte entre más unidades, haciendo que el
        costo unitario baje. Esto se conoce como <strong>economía de escala</strong>.
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fCostoMedio} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Comparativa: Negocios de Alto vs. Bajo Apalancamiento
</h3> <p class="mb-10">
Los negocios con altos costos fijos (como una fábrica o un hotel) se
        dicen que tienen un alto "apalancamiento operativo". Esto significa que
        una vez cubiertos los costos fijos, cada venta adicional cae casi
        íntegramente en la utilidad neta. Por otro lado, negocios con altos
        costos variables (como un servicio de dropshipping) tienen menos riesgo
        pero su rentabilidad crece de forma más lenta.
</p> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos Paso a Paso
</h2> <div class="space-y-12 mb-20"> <div class="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100"> <h3 class="text-xl font-bold text-blue-900 mb-4">
Ejemplo 1: Una Panadería Artesanal
</h3> <p class="mb-4">
Un panadero paga $1,200 de alquiler y servicios. Hacer cada pastel
            le cuesta $5 en ingredientes. En un mes produce 200 pasteles.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Fijos:</strong> $1,200 | <strong>Variable Unitario:</strong> $5 | <strong>Cantidad:</strong> 200
</li> <li> <strong>Cálculo:</strong> $$ 1200 + (5 \\times 200) = 1200 + 1000 $$
</li> <li> <strong>Resultado:</strong> Costo total de $2,200. El costo medio
                por pastel es de $11.
</li> </ul> </div> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Agencia de Marketing (Servicios)
</h3> <p class="mb-4">
Una agencia tiene gastos de oficina y software por $3,000. Por cada
            cliente nuevo, paga $500 en publicidad directa. Gestionan 10
            clientes.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Fijos:</strong> $3,000 | <strong>Variables:</strong> $500
                * 10 = $5,000
</li> <li><strong>Cálculo:</strong> $$ 3000 + 5000 = 8000 $$</li> <li> <strong>Resultado:</strong> Costo total de $8,000. Si quieren ganar
                dinero, deben cobrar más de $800 por cliente.
</li> </ul> </div> </div> <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100"> <h3 class="text-xl font-bold text-emerald-900 mb-4">
Ejemplo 3: Fabricación de Camisetas
</h3> <p class="mb-4">
Una pequeña fábrica tiene costos fijos de $5,000. El costo de tela y
            estampación es de $8 por prenda. Producen 1,000 unidades.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Fijos:</strong> $5,000 | <strong>Variables:</strong> $8,000
</li> <li><strong>Cálculo:</strong> $$ (5000 + 8000) / 1000 $$</li> <li> <strong>Resultado:</strong> Costo medio de $13 por camiseta. Si producen
                2,000, el costo medio bajaría a $10.50 (Economía de escala).
</li> </ul> </div> </div> </div> <h2 class="text-2xl font-bold text-slate-800 mb-4">
Consejos para optimizar tus costos
</h2> <ul class="list-disc pl-6 mb-12 space-y-4"> <li> <strong>Convierte fijos en variables:</strong> En lugar de comprar maquinaria
          pesada, considera el leasing o el pago por uso. Esto reduce el riesgo inicial.
</li> <li> <strong>Revisa tus proveedores:</strong> Un ahorro del 5% en costos variables
          (materias primas) impacta mucho más en la rentabilidad final que un ahorro
          en costos fijos pequeños.
</li> <li> <strong>Cuidado con los costos "semi-variables":</strong> Algunos costos
          como la electricidad pueden tener un componente fijo y otro que sube con
          la producción. Identifícalos bien.
</li> </ul> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-blue-400 font-bold mb-2">Tip de Gestión:</p> <p class="text-sm text-slate-400">
"No recortes costos que generen valor. Recortar en marketing o calidad
          de materia prima puede bajar el costo variable, pero destruirá tus
          ingresos a largo plazo."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-costos-fijos-variables.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-costos-fijos-variables.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-costos-fijos-variables.astro";
const $$url = "/utiles/calculadora-costos-fijos-variables";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraCostosFijosVariables,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
