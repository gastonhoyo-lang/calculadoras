globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
import { $ as $$ResultBox } from "./ResultBox_5gX7kxQe.mjs";
const $$CalculadoraDeAngulos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Ángulos | Grados, Radianes y Complementarios | Chieffin", "description": "Herramienta gratuita para calcular ángulos complementarios, suplementarios y convertir grados a radianes de forma fácil." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Geometría y Diseño</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Calculadora de <span class="text-indigo-600">Ángulos</span> 📐
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Convertí unidades y encontrá ángulos relacionados en un segundo.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ingresá los Grados (°)</label> <input type="number" id="grados" placeholder="Ej: 45" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-xl"> </div> <button id="btnCalcAng" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-xl">
Calcular Ángulos
</button> <div id="resBoxAng" class="hidden space-y-4"> ${renderComponent($$result2, "ResultBox", $$ResultBox, { "id": "resRelacionados", "label": "Ángulos Relacionados" })} <div class="p-4 bg-indigo-50 rounded-2xl text-center"> <p class="text-indigo-700 font-bold text-sm">En Radianes:</p> <p id="totalRad" class="text-2xl font-black text-indigo-900"></p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
Conceptos básicos de ángulos
</h2> <p class="text-slate-600 text-sm">
Comprender cómo se relacionan los ángulos es fundamental para la
          carpintería, la arquitectura y la ingeniería.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Tipos de ángulos
</h3> <ul class="text-slate-600 text-sm space-y-2"> <li> <strong>Complementarios:</strong> Suman 90°. Si tenés 30°, su complemento
            es 60°.
</li> <li> <strong>Suplementarios:</strong> Suman 180°. Si tenés 100°, su suplemento
            es 80°.
</li> <li> <strong>Radianes:</strong> Es la unidad de medida de ángulos en el sistema
            internacional.
</li> </ul> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Preguntas Frecuentes
</h3> <div class="space-y-4 text-sm text-slate-600"> <p> <strong>¿Cómo paso de grados a radianes?</strong><br>Multiplicá
            los grados por π (3.1415) y dividí por 180.
</p> <p> <strong>¿Qué es un ángulo recto?</strong><br>Es aquel que mide
            exactamente 90°. Es la base de las esquinas en construcción y
            diseño.
</p> </div> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
También te puede servir:
</h3> <ul class="text-indigo-600 space-y-2 text-sm font-bold list-none p-0"> <li> <a href="/matematicas/calculadora-de-areas" class="hover:underline">→ Calculadora de Áreas (m²)</a> </li> <li> <a href="/matematicas/calculadora-de-volumenes" class="hover:underline">→ Calculadora de Volúmenes (m³)</a> </li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-angulos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-angulos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-angulos.astro";
const $$url = "/matematica/calculadora-de-angulos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDeAngulos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
