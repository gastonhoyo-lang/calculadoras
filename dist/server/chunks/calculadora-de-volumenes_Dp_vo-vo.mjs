globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
import { $ as $$ResultBox } from "./ResultBox_ENN9c5Ka.mjs";
const $$CalculadoraDeVolumenes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Volúmenes | Metros Cúbicos (m3) y Litros | Chieffin", "description": "Calculá el volumen de piletas, tanques y habitaciones. Obtené el resultado en metros cúbicos y litros de forma instantánea." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Matemáticas y Construcción</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculadora de <span class="text-cyan-600">Volumen</span> 📦
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Calculá metros cúbicos ($m^3$) y capacidad en litros de cualquier
        espacio.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-4"> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Largo (m)</label> <input type="number" id="largo" placeholder="Ej: 6" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ancho (m)</label> <input type="number" id="ancho" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-bold text-xl"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Profundidad / Alto (m)</label> <input type="number" id="alto" placeholder="Ej: 1.5" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcVol" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-cyan-600 transition-all shadow-xl">
Calcular Volumen
</button> <div id="resBoxVol" class="hidden"> ${renderComponent($$result2, "ResultBox", $$ResultBox, { "id": "resultadoM3", "label": "Volumen Total" })} <div class="mt-4 p-4 bg-cyan-50 rounded-2xl text-center"> <p class="text-cyan-700 font-bold text-sm">Capacidad en agua:</p> <p id="totalLitros" class="text-2xl font-black text-cyan-900"></p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo calcular el volumen?
</h2> <p class="text-slate-600 text-sm italic">
El volumen mide el espacio ocupado por un objeto en tres dimensiones:
          largo, ancho y alto.
</p>
[Image of volume of a rectangular prism formula]
<h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
De metros cúbicos a litros
</h3> <p class="text-slate-600 text-sm">
Esta es la conversión más buscada: <strong>1 $m^3$ equivale a 1.000 litros</strong>. Si tu pileta tiene 20 metros cúbicos, cargará 20.000 litros de
          agua.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Preguntas Frecuentes
</h3> <div class="space-y-4 text-sm text-slate-600"> <p> <strong>¿Cómo calculo el volumen de una pileta?</strong><br>Multiplicá largo x ancho x profundidad promedio. Si tiene una
            parte honda de 2m y una playa de 1m, tu profundidad promedio es
            1.5m.
</p> <p> <strong>¿Para qué sirve el cálculo de m³?</strong><br>Es vital
            para pedir hormigón elaborado, comprar arena o calcular la capacidad
            de tanques de agua y cisternas.
</p> </div> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Herramientas relacionadas:
</h3> <ul class="text-cyan-600 space-y-2 text-sm font-bold list-none p-0"> <li> <a href="/matematicas/calculadora-de-areas" class="hover:underline">→ Calculadora de Áreas (m²)</a> </li> <li> <a href="/hogar/calculadora-frigorias" class="hover:underline">→ Calculadora de Frigorías (m³)</a> </li> <li> <a href="/finanzas/iva" class="hover:underline">→ Calculadora de IVA para materiales</a> </li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-volumenes.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-volumenes.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-volumenes.astro";
const $$url = "/matematica/calculadora-de-volumenes";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDeVolumenes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
