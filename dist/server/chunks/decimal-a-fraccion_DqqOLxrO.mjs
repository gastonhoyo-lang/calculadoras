globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout } from "./Layout_Bg2NdVg7.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DecimalAFraccion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script lang="ts" client:load>\n  const decIn = document.getElementById("decInput") as HTMLInputElement;\n  const resNum = document.getElementById("resNum");\n  const resDen = document.getElementById("resDen");\n  const resLine = document.getElementById("resLine");\n  const step = document.getElementById("calcStep");\n\n  const getGCD = (a: number, b: number): number => (b ? getGCD(b, a % b) : a);\n\n  const convertToFraction = () => {\n    const val = parseFloat(decIn.value);\n    if (isNaN(val)) {\n      if (resNum) resNum.innerText = "?";\n      if (resDen) resDen.innerText = "";\n      if (resLine) resLine.classList.add("hidden");\n      if (step) step.innerText = "Introduce un valor";\n      return;\n    }\n\n    if (Number.isInteger(val)) {\n      if (resNum) resNum.innerText = val.toString();\n      if (resDen) resDen.innerText = "1";\n      if (resLine) resLine.classList.remove("hidden");\n      if (step) step.innerText = "Número Entero";\n      return;\n    }\n\n    const sVal = val.toString();\n    const decimalPlaces = sVal.split(".")[1].length;\n    const denominator = Math.pow(10, decimalPlaces);\n    const numerator = Math.round(val * denominator);\n    const common = getGCD(numerator, denominator);\n\n    if (resNum) resNum.innerText = (numerator / common).toString();\n    if (resDen) resDen.innerText = (denominator / common).toString();\n    if (resLine) resLine.classList.remove("hidden");\n    if (step) step.innerText = "Fracción Simplificada";\n  };\n\n  decIn?.addEventListener("input", convertToFraction);\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Decimal a Fracción | Simplificación Automática", "description": "Convertí cualquier número decimal en una fracción simplificada. Herramienta gratuita para pasar decimales exactos a quebrados." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Decimal a Fracción
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá un número decimal y obtené su equivalente en fracción
        irreducible.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Número Decimal</label> <input type="number" id="decInput" step="any" class="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-teal-500 text-center font-mono text-3xl outline-none transition-all" placeholder="Ej: 0.75"> </div> <div id="fractionCard" class="text-center p-10 bg-teal-600 rounded-[2.5rem] shadow-lg shadow-teal-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Fracción Resultante</span> <div id="fractionDisplay" class="flex flex-col items-center justify-center min-h-[100px]"> <div id="resNum" class="text-4xl font-black">?</div> <div id="resLine" class="h-1 bg-white/40 w-16 my-2 rounded-full hidden"></div> <div id="resDen" class="text-4xl font-black"></div> </div> <p id="calcStep" class="text-[10px] mt-4 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
Introduce un valor
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">½</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo convertir un decimal a fracción?
</h2> <p>
El proceso varía según el tipo de decimal, pero para decimales exactos
        seguimos estos pasos:
</p> <ol class="list-decimal pl-6 space-y-2"> <li> <strong>Escribir el número:</strong> Se coloca el decimal como numerador
          sobre el número 1.
</li> <li> <strong>Eliminar la coma:</strong> Se multiplican ambos por 10, 100 o 1000
          (según cuántos decimales haya).
</li> <li> <strong>Simplificar:</strong> Se divide el numerador y el denominador por
          su Máximo Común Divisor.
</li> </ol> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-teal-400 font-mono text-xl">
0.75 → 75/100 → Simplificar por 25 → 3/4
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Decimales a Porcentajes</h4> <p class="text-xs leading-relaxed">
0.5 es igual a 1/2 y también al 50%. Podés validar esto en nuestra <a href="/matematica/calculadora-probabilidad" class="text-teal-600 underline">Calculadora de Probabilidad</a>.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Uso en Programación</h4> <p class="text-xs leading-relaxed">
Útil para motores de juegos o CSS donde es más preciso usar
            fracciones que decimales largos.
</p> </div> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/decimal-a-fraccion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/decimal-a-fraccion.astro";
const $$url = "/matematica/decimal-a-fraccion/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DecimalAFraccion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
