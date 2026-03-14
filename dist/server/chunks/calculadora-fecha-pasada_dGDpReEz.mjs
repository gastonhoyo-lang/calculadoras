globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraFechaPasada = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraFechaPasada;
  const formulaFechaPasada = "$$ F_p = F_i - (d + s \\times 7 + m \\times 30.44 + a \\times 365.25) $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Fecha Pasada | Restar Días, Meses y Años a una Fecha", "description": "Calcula fechas hacia atrás de forma precisa. Resta días, semanas o años a cualquier fecha inicial. Ideal para trámites, historia y plazos legales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-cyan-600">Fecha Pasada</span> ⏪
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Descubre qué día fue exactamente restando tiempo al calendario.
        Precisión histórica y técnica para tus cálculos temporales.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-10"> <div class="space-y-3"> <label for="baseDateInput" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Fecha de Referencia</label> <input type="date" id="baseDateInput" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="grid grid-cols-2 gap-4"> <div class="space-y-2"> <label class="block text-[10px] font-bold text-slate-400 uppercase">Restar Días</label> <input type="number" id="subDays" placeholder="0" class="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all shadow-inner font-mono"> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold text-slate-400 uppercase">Semanas</label> <input type="number" id="subWeeks" placeholder="0" class="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all shadow-inner font-mono"> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold text-slate-400 uppercase">Meses</label> <input type="number" id="subMonths" placeholder="0" class="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all shadow-inner font-mono"> </div> <div class="space-y-2"> <label class="block text-[10px] font-bold text-slate-400 uppercase">Años</label> <input type="number" id="subYears" placeholder="0" class="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all shadow-inner font-mono"> </div> </div> </div> <button id="calcPastBtn" class="w-full bg-slate-900 text-white p-6 rounded-2xl font-bold hover:bg-cyan-600 transition-all shadow-lg active:scale-95 text-xl mb-10">
Calcular Fecha Pasada
</button> <div id="pastResultBox" class="hidden animate-in fade-in zoom-in duration-500"> <div class="bg-cyan-50 rounded-[2rem] p-8 border border-cyan-100 text-center"> <span class="text-cyan-600 font-bold uppercase text-xs tracking-widest">La fecha en el pasado fue:</span> <div id="pastDateDisplay" class="text-3xl md:text-5xl font-black text-slate-900 my-4">
--
</div> <div id="pastDayNameDisplay" class="text-cyan-700 font-medium text-lg italic">
--
</div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es una Calculadora de Fecha Pasada y para qué sirve?
</h2> <p class="mb-6">
Una <strong>calculadora de fecha pasada</strong> es una herramienta técnica
        diseñada para realizar sustracciones cronológicas precisas sobre el calendario
        gregoriano. A diferencia de un cálculo aritmético simple, restar tiempo a
        una fecha requiere considerar las irregularidades inherentes a nuestro sistema
        temporal, como la duración variable de los meses y la presencia de años bisiestos.
</p> <p class="mb-6">
Esta herramienta es fundamental para determinar hitos históricos,
        cumplir con normativas legales que exigen mirar hacia atrás (como
        periodos de retroactividad o prescripción) y para el análisis de datos
        donde se requiere establecer una ventana de tiempo específica hacia el
        pasado.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Lógica de la Sustracción Temporal
</h3> <p class="mb-4">
Matemáticamente, para encontrar una fecha pasada ($$ F_p $$), aplicamos
        una resta vectorial sobre los componentes de la fecha inicial ($$ F_i
        $$):
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-mono overflow-x-auto"> ${formulaFechaPasada} </div> <p class="mb-6">Variables explicadas:</p> <ul class="list-disc pl-6 mb-8 space-y-2"> <li> <strong>d:</strong> Cantidad de días naturales a sustraer del total.
</li> <li> <strong>s:</strong> Semanas de 7 días que impactan directamente en el nombre
          del día de la semana.
</li> <li> <strong>m:</strong> Meses, donde la resta puede desplazar el día si el mes
          destino es más corto (ej. restar un mes al 31 de marzo).
</li> <li> <strong>a:</strong> Años solares, ajustando automáticamente los desfases
          por días bisiestos acumulados.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Comunes
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-cyan-600 mb-3">
Trámites Legales y Administrativos
</h4> <p class="text-sm leading-relaxed">
Muchos derechos legales tienen una validez "hacia atrás". Por
            ejemplo, para reclamar una deuda con una prescripción de 5 años,
            necesitas saber exactamente qué día fue hace 5 años desde hoy para
            verificar si el plazo ha expirado.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-cyan-600 mb-3">
Investigación Histórica y Genealogía
</h4> <p class="text-sm leading-relaxed">
Si un documento antiguo menciona que un evento ocurrió "80 semanas
            antes de la Navidad de 1850", esta calculadora permite obtener el
            día exacto de la semana y la fecha, aportando rigor al estudio
            histórico.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Cálculo
</h3> <div class="space-y-6 mb-12"> <div class="p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100"> <p class="font-bold mb-3">Ejemplo 1: Garantías de Productos</p> <p class="text-sm italic">
"Si compraste un equipo el 15 de agosto de 2023 con una garantía
            retroactiva de 18 meses..."
<br><strong>Análisis:</strong> Restar 18 meses nos permite saber la
            fecha de fabricación o el inicio del soporte técnico original.
</p> </div> <div class="p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100"> <p class="font-bold mb-3">Ejemplo 2: Plazos de Arrepentimiento</p> <p class="text-sm italic">
"Hoy es 20 de mayo y tienes un plazo de 45 días hacia atrás para
            devoluciones."
<br><strong>Resultado:</strong> Al restar 45 días, la calculadora atraviesa
            mayo y abril para aterrizar en la fecha límite de compra válida.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Comparativa: Diferencia de Días vs. Resta de Tiempo
</h3> <p class="mb-6">
Es importante no confundir esta herramienta con un contador de días.
        Mientras que el contador te dice cuántos días han pasado entre A y B, la <strong>calculadora de fecha pasada</strong> te permite navegar el tiempo de forma relativa (semanas, meses, años). Esta
        distinción es clave en finanzas, donde los plazos suelen medirse en trimestres
        o semestres fiscales completos, no solo en días naturales.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-sm text-slate-400">
"Entender el pasado es el primer paso para proyectar el futuro con
          exactitud."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-pasada.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-pasada.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-pasada.astro";
const $$url = "/utiles/calculadora-fecha-pasada/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraFechaPasada,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
