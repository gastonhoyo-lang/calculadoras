globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$Porcentaje = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Porcentaje;
  const formulaBasica = "$$ \\text{Resultado} = \\left( \\frac{\\text{Porcentaje}}{100} \\right) \\times \\text{Cantidad} $$";
  const formulaVariacion = "$$ \\text{Variación \\%} = \\left( \\frac{\\text{Valor Final} - \\text{Valor Inicial}}{\\text{Valor Inicial}} \\right) \\times 100 $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Porcentajes Online | Calcular % Gratis", "description": "Calculá porcentajes de forma rápida y fácil. Incrementos, descuentos, variaciones y proporciones con nuestra calculadora interactiva y guía paso a paso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-emerald-600">Porcentajes</span> 📊
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Resolvé cualquier problema de porcentajes en segundos: descuentos,
        aumentos, variaciones y partes de un total.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-1 gap-12"> <div class="space-y-6"> <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2"> <span class="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
¿Cuánto es el X% de Y?
</h3> <div class="grid md:grid-cols-3 gap-4 items-end"> <div class="space-y-2"> <label for="percInput1" class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Porcentaje (%)</label> <input type="number" id="percInput1" placeholder="Ej: 20" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 font-bold outline-none transition-all shadow-inner"> </div> <div class="space-y-2"> <label for="valInput1" class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">De la cantidad</label> <input type="number" id="valInput1" placeholder="Ej: 500" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 font-bold outline-none transition-all shadow-inner"> </div> <button id="btnCalc1" class="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95">Calcular</button> </div> <div id="resBox1" class="hidden p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 font-bold text-center animate-in fade-in duration-300"></div> </div> <hr class="border-slate-100"> <div class="space-y-6"> <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2"> <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
¿Qué porcentaje es X de Y?
</h3> <div class="grid md:grid-cols-3 gap-4 items-end"> <div class="space-y-2"> <label for="valInput2A" class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">La cantidad X</label> <input type="number" id="valInput2A" placeholder="Ej: 50" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold outline-none transition-all shadow-inner"> </div> <div class="space-y-2"> <label for="valInput2B" class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Del total Y</label> <input type="number" id="valInput2B" placeholder="Ej: 200" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold outline-none transition-all shadow-inner"> </div> <button id="btnCalc2" class="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95">Calcular %</button> </div> <div id="resBox2" class="hidden p-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-800 font-bold text-center animate-in fade-in duration-300"></div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es un porcentaje y cómo se calcula realmente?
</h2> <p class="mb-6">
El concepto de <strong>porcentaje</strong> es una de las herramientas matemáticas
        más utilizadas en nuestra vida cotidiana. Desde entender los descuentos en
        un centro comercial hasta analizar las tasas de interés bancarias o el crecimiento
        poblacional, el porcentaje nos permite expresar una cantidad como una fracción
        de 100 partes iguales. Etimológicamente, proviene del latín "per centum",
        que significa literalmente "por cada ciento".
</p> <p class="mb-6">
Calcular un porcentaje no es más que realizar una regla de tres simple o
        una multiplicación fraccionaria. Cuando decimos que algo tiene un 20% de
        descuento, estamos indicando que por cada 100 unidades de valor, se
        restarán 20. Esta estandarización facilita enormemente la comparación
        entre magnitudes de diferentes tamaños, permitiéndonos entender
        proporciones de manera intuitiva.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula Universal del Porcentaje
</h3> <p class="mb-4">
Para obtener un porcentaje específico de una cantidad, utilizamos la
        siguiente expresión matemática:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaBasica} </div> <p class="mb-6">Donde las variables representan:</p> <ul class="list-disc pl-6 mb-8 space-y-2"> <li> <strong>Porcentaje:</strong> La tasa o proporción que deseamos hallar (por
          ejemplo, 15, 20, 50).
</li> <li> <strong>Cantidad:</strong> El valor total o base sobre el cual se aplica
          el cálculo.
</li> <li> <strong>Resultado:</strong> El valor numérico equivalente a esa proporción.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Cómo calcular variaciones porcentuales (Aumentos y Disminuciones)
</h3> <p class="mb-6">
A menudo necesitamos saber cuánto ha cambiado un valor respecto a su
        estado original. Esto es vital en economía para medir la inflación o en
        negocios para ver el crecimiento de ventas. La fórmula de variación
        porcentual es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaVariacion} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de la Vida Real
</h3> <div class="space-y-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-emerald-600 mb-3 text-xl">
1. Calculando un Descuento en Tiendas
</h4> <p class="mb-4 italic text-sm text-slate-500">
Escenario: Querés comprar una campera que cuesta $12.500 y tiene un
            25% de descuento.
</p> <p class="leading-relaxed">
Primero calculamos el monto del descuento: $$ (25 / 100) \\times
            12.500 = 3.125 $$. <br>
Luego lo restamos del precio original: $$ 12.500 - 3.125 = 9.375 $$. <br> <strong>Resultado:</strong> Pagarás $9.375 por la campera.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-emerald-600 mb-3 text-xl">
2. Propinas en Restaurantes
</h4> <p class="mb-4 italic text-sm text-slate-500">
Escenario: La cuenta de la cena fue de $8.400 y querés dejar el 10%
            de propina sugerida.
</p> <p class="leading-relaxed">
Cálculo rápido: $$ 8.400 \\times 0.10 = 840 $$. <br> <strong>Resultado:</strong> Deberías dejar $840 de propina.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-emerald-600 mb-3 text-xl">
3. Incremento Salarial
</h4> <p class="mb-4 italic text-sm text-slate-500">
Escenario: Ganás $450.000 y te anuncian un aumento del 12% por
            paritarias.
</p> <p class="leading-relaxed">
Cálculo del aumento: $$ 450.000 \\times 0.12 = 54.000 $$. <br>
Nuevo total: $$ 450.000 + 54.000 = 504.000 $$. <br> <strong>Resultado:</strong> Tu nuevo sueldo será de $504.000.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejercicios para entrenar la mente
</h3> <p class="mb-6">
Intentá resolver estos casos antes de usar la calculadora para agilizar
        tu razonamiento lógico:
</p> <ol class="list-decimal pl-6 mb-8 space-y-4"> <li> <strong>El IVA:</strong> Si un producto neto cuesta $1.000 y el IVA es del
          21%, ¿cuánto es el total? (Respuesta: $1.210).
</li> <li> <strong>Rendimiento académico:</strong> Si un examen tiene 40 preguntas
          y respondiste bien 32, ¿qué porcentaje de aciertos tuviste? (Respuesta:
          80%).
</li> <li> <strong>Capacidad:</strong> Una batería de celular tiene 5.000 mAh. Si está
          al 15%, ¿cuántos mAh le quedan? (Respuesta: 750 mAh).
</li> </ol> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Preguntas Frecuentes sobre Porcentajes
</h3> <p class="mb-6 text-balance">
Muchas personas se confunden al intentar "volver atrás" en un
        porcentaje. Por ejemplo, si un precio sube un 20% y luego baja un 20%, <strong>no vuelve al precio original</strong>. Esto sucede porque la base del segundo cálculo es mayor que la del
        primero. Entender estas sutilezas es lo que diferencia a un usuario
        promedio de alguien con verdadera educación financiera.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-emerald-400 font-bold mb-2">Tip de Experto:</p> <p class="text-sm text-slate-400">
Para calcular el 10% de cualquier número, simplemente mové la coma
          decimal un lugar hacia la izquierda. ¡Es el truco más rápido para el
          día a día!
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro";
const $$url = "/finanzas/porcentaje";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Porcentaje,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
