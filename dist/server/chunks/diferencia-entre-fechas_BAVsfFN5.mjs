globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$DiferenciaEntreFechas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DiferenciaEntreFechas;
  const fDiferenciaTotal = "$$ \\Delta t = t_{final} - t_{inicial} $$";
  const fConversionDias = "$$ \\text{Días} = \\frac{\\Delta t \\text{ (ms)}}{1000 \\times 60 \\times 60 \\times 24} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Diferencia entre Fechas | Contar Días, Meses y Años", "description": "Calcula el tiempo exacto transcurrido entre dos fechas. Obtén el resultado en días, meses, años, horas y minutos de forma precisa y gratuita." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Diferencia entre <span class="text-blue-600">Fechas</span> 📅
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Calculá con precisión cuántos días, meses o años separan dos momentos en
        el tiempo.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-3"> <label for="fechaInicioId" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Fecha de Inicio</label> <input type="date" id="fechaInicioId" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-lg outline-none transition-all shadow-inner"> </div> <div class="space-y-3"> <label for="fechaFinId" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Fecha de Finalización</label> <input type="date" id="fechaFinId" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-lg outline-none transition-all shadow-inner"> </div> </div> <button id="btnCalcularDifId" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-xl mb-10">
Calcular Diferencia
</button> <div id="resultadoDifBoxId" class="hidden space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center"> <span id="resAnosId" class="block text-4xl font-black text-blue-700">0</span> <span class="text-xs font-bold text-blue-400 uppercase">Años</span> </div> <div class="bg-slate-900 p-6 rounded-3xl text-center"> <span id="resMesesId" class="block text-4xl font-black text-white">0</span> <span class="text-xs font-bold text-slate-400 uppercase">Meses</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span id="resDiasId" class="block text-4xl font-black text-slate-700">0</span> <span class="text-xs font-bold text-slate-400 uppercase">Días</span> </div> </div> <div class="bg-slate-100 p-4 rounded-2xl text-center"> <p id="resTextoPlanoId" class="text-slate-600 font-medium"></p> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Cómo calcular la diferencia entre dos fechas de forma exacta?
</h2> <p class="mb-6">
Calcular el tiempo transcurrido entre dos fechas parece una tarea
        sencilla, pero las irregularidades de nuestro calendario (años
        bisiestos, meses de 28, 30 o 31 días) hacen que el cálculo manual sea
        propenso a errores. Una <strong>calculadora de diferencia entre fechas</strong> elimina la incertidumbre, permitiéndote conocer con exactitud matemática
        cuántos días han pasado desde un evento histórico, cuántos meses faltan para
        un vencimiento o cuántos años de antigüedad tiene un registro laboral.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La matemática detrás del tiempo
</h3> <p class="mb-6">
Desde una perspectiva computacional, las fechas se manejan como
        "Timestamps" o marcas de tiempo, que representan la cantidad de
        milisegundos transcurridos desde una época específica (generalmente el 1
        de enero de 1970). La fórmula base para encontrar la diferencia absoluta
        es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDiferenciaTotal} </div> <p class="mb-6">
Una vez que obtenemos esa diferencia en milisegundos, debemos
        convertirla a unidades legibles por el ser humano. Para calcular los
        días totales, aplicamos la siguiente constante de conversión:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fConversionDias} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de uso comunes
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
Gestión de Proyectos
</h4> <p class="text-sm">
Calcular el <strong>Lead Time</strong> o el tiempo total de ejecución
            de una obra, comparando la fecha de inicio con la entrega final.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">Recursos Humanos</h4> <p class="text-sm">
Determinar la antigüedad exacta de un empleado para el cálculo de
            vacaciones, indemnizaciones o bonos por servicios prestados.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Cálculo
</h3> <div class="space-y-6 mb-12"> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500"> <p class="font-bold text-slate-800">
Ejemplo 1: Planificación de Eventos
</p> <p>
Si hoy es 15 de marzo y tu boda es el 20 de diciembre, la
            calculadora te mostrará que faltan exactamente 9 meses y 5 días (o
            280 días). Esto es vital para cronogramas de pagos a proveedores.
</p> </div> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500"> <p class="font-bold text-slate-800">Ejemplo 2: Edad y Aniversarios</p> <p>
Si naciste el 10 de octubre de 1990 y hoy es 11 de marzo de 2026,
            has vivido exactamente 35 años, 5 meses y 1 día. El cálculo
            automático tiene en cuenta todos los años bisiestos intermedios.
</p> </div> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500"> <p class="font-bold text-slate-800">
Ejemplo 3: Vencimiento Financiero
</p> <p>
Un pagaré emitido el 1 de enero con vencimiento el 1 de julio
            implica una diferencia de 181 días. Conocer el número exacto de días
            es fundamental para el cálculo de intereses diarios.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre Días Naturales y Días Hábiles
</h3> <p class="mb-6">
Es importante notar que esta calculadora mide <strong>días naturales</strong>. En contextos legales o financieros, podrías necesitar calcular solo
        los días hábiles (excluyendo fines de semana y feriados). Para esos
        casos, el resultado total en días es el punto de partida para restar los
        sábados y domingos correspondientes al período.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Consejos para una medición precisa
</h3> <ul class="list-disc pl-6 mb-8 space-y-2"> <li> <strong>Zona Horaria:</strong> Asegurate de que ambas fechas estén en la
          misma zona horaria para evitar desfases de 24 horas.
</li> <li> <strong>Inclusión de la Fecha Final:</strong> Por defecto, la mayoría de
          los cálculos excluyen el último día. Si necesitás que el día final cuente
          como "día trabajado", sumale 1 al resultado total.
</li> <li> <strong>Años Bisiestos:</strong> Nuestra herramienta ya contempla que febrero
          tiene 29 días cada 4 años, así que no tenés que preocuparte por eso.
</li> </ul> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-blue-400 font-bold mb-2">Tip de Productividad:</p> <p class="text-sm text-slate-400">
Si usás esta herramienta para el seguimiento de facturas, recordá que
          los términos de 30/60/90 días suelen ser días naturales exactos.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/diferencia-entre-fechas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/diferencia-entre-fechas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/diferencia-entre-fechas.astro";
const $$url = "/utiles/diferencia-entre-fechas";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DiferenciaEntreFechas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
