globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout } from "./Layout_UeHtEn6s.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CalculadoraRaizCubica = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script client:load>\n  const input = document.getElementById("numberInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  input?.addEventListener("input", () => {\n    const val = parseFloat(input.value);\n\n    if (isNaN(val)) {\n      output.innerText = "0";\n      step.innerText = "Introduce un valor";\n      return;\n    }\n\n    // Math.cbrt maneja correctamente números negativos\n    const root = Math.cbrt(val);\n\n    output.innerText = Number.isInteger(root)\n      ? root.toString()\n      : root.toFixed(4);\n    step.innerText = `${output.innerText}³ ≈ ${val}`;\n  });\n<\/script>'], ["", ' <script client:load>\n  const input = document.getElementById("numberInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  input?.addEventListener("input", () => {\n    const val = parseFloat(input.value);\n\n    if (isNaN(val)) {\n      output.innerText = "0";\n      step.innerText = "Introduce un valor";\n      return;\n    }\n\n    // Math.cbrt maneja correctamente números negativos\n    const root = Math.cbrt(val);\n\n    output.innerText = Number.isInteger(root)\n      ? root.toString()\n      : root.toFixed(4);\n    step.innerText = \\`\\${output.innerText}³ ≈ \\${val}\\`;\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Raíz Cúbica Online | Resultados Precisos", "description": "Calculá la raíz cúbica de cualquier número de forma instantánea. Herramienta matemática gratuita con soporte para números negativos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Raíz Cúbica
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"¿Qué número multiplicado tres veces por sí mismo da tu valor?"
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Número (Radicando)
</label> <div class="relative group"> <span class="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-slate-300 font-light group-focus-within:text-cyan-500 transition-colors"> <sup class="text-xs font-bold -mr-1">3</sup>√
</span> <input type="number" id="numberInput" class="w-full p-5 pl-14 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 focus:bg-white outline-none transition-all font-mono text-2xl text-slate-800" placeholder="Ej: 27 o -8"> </div> </div> </div> <div class="text-center p-10 bg-cyan-50 rounded-[2.5rem] border border-cyan-100 relative overflow-hidden"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-cyan-600 mb-2 tracking-widest">
Resultado (Raíz)
</span> <div id="resultOutput" class="text-6xl font-black text-cyan-700 leading-none">
0
</div> <p id="calcStep" class="text-[10px] text-cyan-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-3 py-1 rounded-full">
Introduce un valor
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-cyan-100/50 select-none">³√</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es la Raíz Cúbica?
</h2> <p>
La raíz cúbica de un número <strong>x</strong> es aquel número <strong>y</strong> que, al ser elevado a la potencia de 3 (<strong>y³</strong>), resulta
        en <strong>x</strong>. A diferencia de la raíz cuadrada, la raíz cúbica
        está definida para todos los números reales, incluyendo los negativos.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <!-- LaTeX como string para evitar error SSR --> <span class="text-cyan-400 font-mono text-3xl"> ${"$$\\sqrt[3]{x} = y \\iff y^3 = x$$"} </span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Cálculo con Negativos</h4> <p class="text-xs leading-relaxed">
Si calculas √[3]${-8}, el resultado es -2, porque (-2) × (-2) × (-2)
            = -8. Esto es posible porque el exponente es impar.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Uso en Geometría</h4> <p class="text-xs leading-relaxed">
Es fundamental para encontrar la longitud de la arista de un cubo si
            conoces su volumen total. Muy útil en diseño 3D y cálculos de
            capacidad de contenedores.
</p> </div> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-raiz-cubica.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-raiz-cubica.astro";
const $$url = "/matematica/calculadora-raiz-cubica";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraRaizCubica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
