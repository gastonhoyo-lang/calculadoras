/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DesviacionMedia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script lang="ts" client:load>\n  const val1 = document.getElementById("val1") as HTMLInputElement;\n  const val2 = document.getElementById("val2") as HTMLInputElement;\n  const resultado = document.getElementById("resultado");\n\n  const calcular = () => {\n    const v1 = parseFloat(val1.value) || 0;\n    const v2 = parseFloat(val2.value) || 0;\n    const res = v1 + v2; // Aqu\xED cambia la f\xF3rmula seg\xFAn la calculadora\n    if (resultado) resultado.innerText = res.toFixed(2);\n  };\n\n  [val1, val2].forEach((el) => el?.addEventListener("input", calcular));\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Nombre de la Calculadora", "description": "Descripci\xF3n de la herramienta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-black mb-6">Título de la Calculadora</h1> <div class="bg-white p-8 rounded-2xl shadow-lg mb-12"> <!-- Inputs --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label class="block text-xs font-bold mb-2">Valor 1</label> <input type="number" id="val1" class="w-full p-3 border rounded-lg"> </div> <div> <label class="block text-xs font-bold mb-2">Valor 2</label> <input type="number" id="val2" class="w-full p-3 border rounded-lg"> </div> </div> <!-- Resultado --> <div class="mt-6 p-4 bg-slate-100 rounded-lg text-center"> <span class="font-bold">Resultado: </span><span id="resultado">0</span> </div> </div> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/matematica/desviacion-media.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/desviacion-media.astro";
const $$url = "/matematica/desviacion-media";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DesviacionMedia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
