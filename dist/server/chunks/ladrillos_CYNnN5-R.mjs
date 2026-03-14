globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Ladrillos = createComponent(($$result, $$props, $$slots) => {
  const fAreaMuro = "$$ A_m = L \\times H $$";
  const fLadrillosPorM2 = "$$ C = \\frac{1}{(L_l + j) \\times (H_l + j)} $$";
  const fDesperdicio = "$$ T = C \\times 1.10 $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ladrillos | Calcular cantidad para un muro", "description": "Calculá cuántos ladrillos necesitás para tu pared o muro. Incluye cálculo de mortero, porcentaje de desperdicio y ejemplos según el tipo de ladrillo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-orange-700">Ladrillos</span> 🧱
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Planificá tu obra con precisión. Calculá la cantidad exacta de
        materiales según las dimensiones de tu muro.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-6"> <h3 class="text-sm font-bold text-orange-600 uppercase tracking-widest">
Dimensiones del Muro
</h3> <div class="space-y-4"> <div> <label for="muroLargo" class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Largo del Muro (metros)</label> <input type="number" id="muroLargo" placeholder="Ej: 5" step="0.1" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> <div> <label for="muroAlto" class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Alto del Muro (metros)</label> <input type="number" id="muroAlto" placeholder="Ej: 2.4" step="0.1" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold"> </div> </div> </div> <div class="space-y-6"> <h3 class="text-sm font-bold text-orange-600 uppercase tracking-widest">
Tipo de Ladrillo
</h3> <div class="space-y-4"> <div> <label for="tipoLadrillo" class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Seleccionar Formato</label> <select id="tipoLadrillo" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none transition-all shadow-inner font-bold text-slate-700"> <option value="0.12,0.18">Ladrillo Común (12x18 cm vista)</option> <option value="0.18,0.33">Ladrillo Hueco 18x33 cm</option> <option value="0.12,0.24">Ladrillo Block 12x24 cm</option> <option value="custom">Personalizado (Metros)</option> </select> </div> <div id="customLadrilloGroup" class="hidden grid grid-cols-2 gap-2"> <input type="number" id="ladrilloL" placeholder="Largo (m)" step="0.01" class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none shadow-inner text-sm"> <input type="number" id="ladrilloH" placeholder="Alto (m)" step="0.01" class="p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-orange-500 outline-none shadow-inner text-sm"> </div> </div> </div> </div> <button id="btnCalcularLadrillos" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Materiales
</button> <div id="resultadoLadrillosBox" class="hidden mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100 text-center"> <span class="block text-xs font-bold text-orange-400 uppercase mb-2">Total de Ladrillos (inc. 10% desperdicio)</span> <span id="resTotalLadrillos" class="block text-6xl font-black text-orange-700">0</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="bg-slate-900 p-6 rounded-3xl text-center"> <span id="resAreaMuro" class="block text-2xl font-black text-white">0 m²</span> <span class="text-[10px] font-bold text-slate-400 uppercase">Superficie Total</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center"> <span id="resPorM2" class="block text-2xl font-black text-slate-700">0</span> <span class="text-[10px] font-bold text-slate-400 uppercase">Ladrillos por m²</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
Guía Profesional: Cómo calcular ladrillos para un muro
</h2> <p class="mb-6">
Calcular correctamente la cantidad de ladrillos es el primer paso
        crítico en cualquier proyecto de construcción, ya sea una pequeña
        remodelación o una edificación desde cero. Un cálculo erróneo puede
        derivar en falta de materiales, retrasando la obra, o en un excedente
        innecesario que afecte tu presupuesto.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
1. Cálculo de la Superficie del Muro
</h3> <p class="mb-6">
Lo primero es determinar cuántos metros cuadrados ($$m^2$$) tiene la
        pared. Para esto multiplicamos el largo por el alto:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fAreaMuro} </div> <p class="mb-6">
Es vital descontar las aberturas (ventanas y puertas). Por ejemplo, si
        tenés un muro de 12 $$m^2$$ pero incluye una puerta de 2 $$m^2$$, el
        área real de ladrillos será de 10 $$m^2$$.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
2. Fórmula de Ladrillos por Metro Cuadrado
</h3> <p class="mb-4">
La cantidad de ladrillos por metro cuadrado depende de las dimensiones
        del ladrillo elegido y del espesor de la junta de mortero (la mezcla que
        une los ladrillos, usualmente de 1 a 1.5 cm). La fórmula técnica es:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fLadrillosPorM2} </div> <p class="mb-6">Donde:</p> <ul class="list-disc pl-6 mb-8"> <li><strong>L_l:</strong> Largo del ladrillo.</li> <li><strong>H_l:</strong> Alto del ladrillo.</li> <li> <strong>j:</strong> Espesor de la junta (ej: 0.015 para 1.5 cm).
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
El Factor de Desperdicio (Regla de Oro)
</h3> <p class="mb-6">
En construcción, nunca se compra la cantidad exacta teórica. Los
        ladrillos se rompen durante el transporte, la descarga o al realizar
        cortes para las esquinas. Por eso, siempre aplicamos un **10% de
        desperdicio**:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fDesperdicio} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Cálculo
</h3> <div class="space-y-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-orange-600 mb-3 text-xl">
Caso A: Muro de Ladrillo Hueco
</h4> <p class="text-sm mb-4">
Pared de 3m de largo por 2.5m de alto (7.5 $$m^2$$). Ladrillo de
            18x33 cm.
</p> <ul class="text-xs space-y-1"> <li>Ladrillos por m²: ~15 unidades.</li> <li>Total teórico: 112.5 unidades.</li> <li><strong>Total con desperdicio: 124 unidades.</strong></li> </ul> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-orange-600 mb-3 text-xl">
Caso B: Muro Perimetral de Ladrillo Común
</h4> <p class="text-sm mb-4">
Pared de 10m de largo por 2m de alto (20 $$m^2$$). Ladrillo de 12x24
            cm.
</p> <ul class="text-xs space-y-1"> <li>Ladrillos por m²: ~30 unidades.</li> <li>Total teórico: 600 unidades.</li> <li><strong>Total con desperdicio: 660 unidades.</strong></li> </ul> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Consideraciones del Mortero
</h3> <p class="mb-6">
No olvides que además de los ladrillos, necesitarás arena, cemento y cal
        (o mezcla preparada). La cantidad de mortero varía según el tipo de
        ladrillo; los ladrillos huecos consumen menos mezcla en las juntas,
        mientras que el ladrillo común, al ser más pequeño y requerir más
        juntas, aumenta el consumo de materiales húmedos.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-orange-400 font-bold mb-2">Consejo Técnico:</p> <p class="text-sm text-slate-400">
Si vas a construir una pared de carga, asegúrate de consultar con un
          profesional sobre el tipo de ladrillo y la dosificación de la mezcla
          estructural.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro";
const $$url = "/hogar/ladrillos/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Ladrillos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
