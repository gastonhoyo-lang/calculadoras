globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraDeEscalas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraDeEscalas;
  const sCm = "cm";
  const sM = "m";
  const fEscalaGen = "$$ E = \\frac{D_{dibujo}}{D_{real}} $$";
  const fDistReal = "$$ D_{real} = D_{dibujo} \\times Escala $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Escalas Online | Conversor de Dibujo a Realidad", "description": "Calcula escalas de mapas, planos y maquetas. Pasa de medidas reales a dibujo y viceversa con nuestra calculadora de escala arquitectónica y cartográfica." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-emerald-600">Escalas</span> 📐
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Convertí medidas de planos, mapas o maquetas a dimensiones reales de
        forma precisa.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-6"> <h3 class="text-sm font-bold text-emerald-600 uppercase tracking-widest">
Definir Escala
</h3> <div class="flex items-center space-x-4"> <div class="flex-1"> <label class="block text-[10px] font-bold text-slate-400 uppercase mb-2 ml-2">Dibujo</label> <div class="p-4 bg-slate-50 rounded-2xl border-2 border-slate-100 text-center font-bold text-slate-400">
1
</div> </div> <div class="text-2xl font-bold text-slate-300 self-end mb-4">:</div> <div class="flex-1"> <label for="inputEscalaN" class="block text-[10px] font-bold text-slate-400 uppercase mb-2 ml-2">Realidad (N)</label> <input type="number" id="inputEscalaN" placeholder="Ej: 50" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all shadow-inner font-bold"> </div> </div> </div> <div class="space-y-6"> <h3 class="text-sm font-bold text-emerald-600 uppercase tracking-widest">
¿Qué quieres calcular?
</h3> <select id="tipoCalculoEscala" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all shadow-inner font-bold text-slate-700"> <option value="real">Hallar Medida Real</option> <option value="dibujo">Hallar Medida en Plano</option> </select> </div> </div> <div class="mb-10"> <label for="inputMedidaBase" class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Ingresa la medida a convertir</label> <input type="number" id="inputMedidaBase" placeholder="Ej: 15" class="w-full p-5 bg-slate-100 rounded-3xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-black text-3xl text-emerald-700 shadow-inner"> </div> <button id="btnCalcularEscala" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Conversión
</button> <div id="boxResultadoEscala" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 text-center"> <span class="block text-xs font-bold text-emerald-400 uppercase mb-2 tracking-widest">Resultado Convertido</span> <span id="resValorEscala" class="block text-6xl font-black text-emerald-700">0</span> </div> <p id="resExplicacionEscala" class="text-center text-slate-400 text-sm italic font-medium"></p> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
Guía Completa: Cómo entender y calcular escalas
</h2> <p class="mb-6">
Una <strong>escala</strong> es la relación matemática que existe entre las
        dimensiones reales de un objeto y el dibujo que lo representa en un plano,
        mapa o maqueta. Es la herramienta que nos permite "encoger" el mundo real
        para que quepa en una hoja de papel o en una pantalla, manteniendo proporciones
        exactas para que la información siga siendo útil.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
1. La Fórmula Fundamental
</h3> <p class="mb-6">
La escala se expresa generalmente como una fracción o razón (1:N). La
        fórmula básica para cualquier cálculo de escala es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fEscalaGen} </div> <p class="mb-6">
Donde el numerador (generalmente 1) representa la unidad en el dibujo y
        el denominador representa cuántas veces esa unidad se multiplica en la
        realidad. Por ejemplo, en una escala 1:100, 1 ${sCm} en el papel representa
        100 ${sCm} (o 1 ${sM}) en la vida real.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
2. Cómo pasar del Plano a la Realidad
</h3> <p class="mb-6">
Si tienes un plano y quieres saber cuánto mide una pared en la
        construcción real, debes multiplicar la medida del dibujo por el factor
        de escala:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDistReal} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Tipos de Escalas más comunes
</h3> <div class="grid md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-emerald-600 mb-2">Escala Natural (1:1)</h4> <p class="text-xs">
El objeto dibujado tiene el mismo tamaño que el real. Se usa para
            piezas mecánicas pequeñas.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-emerald-600 mb-2">Escala de Reducción</h4> <p class="text-xs">
El dibujo es más pequeño que la realidad (Ej: 1:50, 1:100). Es la
            norma en arquitectura y mapas.
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm"> <h4 class="font-bold text-emerald-600 mb-2">Escala de Ampliación</h4> <p class="text-xs">
El dibujo es más grande que el objeto real (Ej: 2:1, 10:1). Se usa
            en microelectrónica o joyería.
</p> </div> </div> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de Cálculo
</h2> <div class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Caso A: Arquitectura (Escala 1:50)
</h4> <p class="mb-4 text-sm">
Medimos una habitación en un plano y el largo es de 8 ${sCm}. ¿Cuánto
            mide en la realidad?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
D_real = 8 ${sCm} * 50 = 400 ${sCm} = 4 metros.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Caso B: Cartografía (Escala 1:250.000)
</h4> <p class="mb-4 text-sm">
La distancia entre dos ciudades en un mapa es de 12 ${sCm}. ¿Cuál es
            la distancia real?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
D_real = 12 ${sCm} * 250.000 = 3.000.000 ${sCm} = 30 kilómetros.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Caso C: Modelismo (Escala 1:24)
</h4> <p class="mb-4 text-sm">
Queremos hacer una maqueta de un coche que mide 4.5 metros (450 ${sCm}). ¿Cuánto debe medir el modelo?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
D_dibujo = 450 ${sCm} / 24 = 18.75 ${sCm}.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre Escala Numérica y Gráfica
</h3> <p class="mb-6">
La <strong>escala numérica</strong> es la que hemos visto (1:100). La <strong>escala gráfica</strong> es una pequeña regla dibujada en el plano. La ventaja de la escala gráfica
        es que si fotocopias el plano y este cambia de tamaño, la regla se encoge
        proporcionalmente, por lo que sigue siendo válida, mientras que la numérica
        (1:100) dejaría de ser exacta.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-emerald-400 font-bold mb-2">Consejo Profesional:</p> <p class="text-sm text-slate-400">
Siempre verifica las unidades. Si tu escala es 1:100, la relación es 1
          unidad de lo que sea por 100 de lo mismo. No mezcles centímetros con
          pulgadas en el mismo cálculo.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-escalas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-escalas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-escalas.astro";
const $$url = "/utiles/calculadora-de-escalas/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDeEscalas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
