globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout } from "./Layout_CdraH9S2.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CalculadoraRaizCuadrada = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraRaizCuadrada;
  return renderTemplate(_a || (_a = __template(["", ' <script client:load>\n  const input = document.getElementById("numberInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  input?.addEventListener("input", () => {\n    const val = parseFloat(input.value);\n\n    if (isNaN(val)) {\n      output.innerText = "0";\n      step.innerText = "Introduce un valor";\n      step.classList.replace("text-rose-500", "text-emerald-500");\n      return;\n    }\n\n    if (val < 0) {\n      output.innerText = "Error";\n      step.innerText = "No existen raíces reales negativas";\n      step.classList.replace("text-emerald-500", "text-rose-500");\n    } else {\n      const root = Math.sqrt(val);\n      output.innerText = Number.isInteger(root)\n        ? root.toString()\n        : root.toFixed(4);\n      step.innerText = `${output.innerText}² = ${val}`;\n      step.classList.replace("text-rose-500", "text-emerald-500");\n    }\n  });\n<\/script>'], ["", ' <script client:load>\n  const input = document.getElementById("numberInput");\n  const output = document.getElementById("resultOutput");\n  const step = document.getElementById("calcStep");\n\n  input?.addEventListener("input", () => {\n    const val = parseFloat(input.value);\n\n    if (isNaN(val)) {\n      output.innerText = "0";\n      step.innerText = "Introduce un valor";\n      step.classList.replace("text-rose-500", "text-emerald-500");\n      return;\n    }\n\n    if (val < 0) {\n      output.innerText = "Error";\n      step.innerText = "No existen raíces reales negativas";\n      step.classList.replace("text-emerald-500", "text-rose-500");\n    } else {\n      const root = Math.sqrt(val);\n      output.innerText = Number.isInteger(root)\n        ? root.toString()\n        : root.toFixed(4);\n      step.innerText = \\`\\${output.innerText}² = \\${val}\\`;\n      step.classList.replace("text-rose-500", "text-emerald-500");\n    }\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Raíz Cuadrada Online | Resultados Precisos", "description": "Calculá la raíz cuadrada de cualquier número de forma instantánea. Herramienta matemática gratuita con explicación paso a paso." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Raíz Cuadrada
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"La operación inversa de elevar al cuadrado."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Número (Radicando)
</label> <div class="relative group"> <span class="absolute left-5 top-1/2 -translate-y-1/2 text-3xl text-slate-300 font-light group-focus-within:text-emerald-500 transition-colors">
√
</span> <input type="number" id="numberInput" class="w-full p-5 pl-12 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-mono text-2xl text-slate-800" placeholder="Ej: 144"> </div> </div> </div> <div class="text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 relative overflow-hidden"> <div class="relative z-10"> <span class="block text-[10px] font-bold uppercase text-emerald-600 mb-2 tracking-widest">
Resultado (Raíz)
</span> <div id="resultOutput" class="text-6xl font-black text-emerald-700 leading-none">
0
</div> <p id="calcStep" class="text-[10px] text-emerald-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-3 py-1 rounded-full">
Introduce un valor
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-emerald-100/50 select-none">√</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es la Raíz Cuadrada?
</h2> <p>
La raíz cuadrada de un número <strong>x</strong> es aquel número <strong>y</strong> que, al ser multiplicado por sí mismo (elevado al cuadrado), da como resultado
        el número original. Se representa con el símbolo radical.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <!-- LaTeX como string para que Astro no lo interprete --> <span class="text-emerald-400 font-mono text-3xl"> ${"$$\\sqrt{x} = y \\iff y^2 = x$$"} </span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Raíces Exactas</h4> <p class="text-xs leading-relaxed">
Son números cuyo resultado es un entero. Por ejemplo, √16 = 4.
            Conocer estos "cuadrados perfectos" ayuda a agilizar cálculos
            mentales en ingeniería y diseño.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Aplicación en SEO</h4> <p class="text-xs leading-relaxed">
Aunque parece puramente matemático, fórmulas como la de <strong>Desviación Estándar</strong> (que usa raíces) son vitales para entender la volatilidad de las keywords
            en los rankings.
</p> </div> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/calculadora-raiz-cuadrada.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/calculadora-raiz-cuadrada.astro";
const $$url = "/matematica/calculadora-raiz-cuadrada/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraRaizCuadrada,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
