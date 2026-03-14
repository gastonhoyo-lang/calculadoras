globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout } from "./Layout_Bg2NdVg7.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$TasasTnaTea = createComponent(($$result, $$props, $$slots) => {
  const title = "Calculadora de Tasas: TNA a TEA";
  const description = "Convertí Tasa Nominal Anual (TNA) a Tasa Efectiva Anual (TEA) y viceversa. Calculá el rendimiento real de tus inversiones y préstamos.";
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  const tnaInput = document.getElementById("tna");\n  const teaInput = document.getElementById("tea");\n  const periodoSelect = document.getElementById("periodo");\n  const explicacionP = document.getElementById("explicacion");\n\n  function calcularDesdeTNA() {\n    const tna = parseFloat(tnaInput.value) / 100;\n    const m = parseInt(periodoSelect.value);\n\n    if (isNaN(tna)) return;\n\n    // Fórmula: TEA = (1 + i/m)^m - 1\n    const tea = (Math.pow(1 + tna / m, m) - 1) * 100;\n    teaInput.value = tea.toFixed(2);\n    actualizarExplicacion(tna * 100, tea, m);\n  }\n\n  function calcularDesdeTEA() {\n    const tea = parseFloat(teaInput.value) / 100;\n    const m = parseInt(periodoSelect.value);\n\n    if (isNaN(tea)) return;\n\n    // Fórmula inversa: TNA = m * [(1 + TEA)^(1/m) - 1]\n    const tna = m * (Math.pow(1 + tea, 1 / m) - 1) * 100;\n    tnaInput.value = tna.toFixed(2);\n    actualizarExplicacion(tna, tea * 100, m);\n  }\n\n  function actualizarExplicacion(tna, tea, m) {\n    const periodosNombres = {\n      "365": "diariamente",\n      "12": "todos los meses",\n      "6": "cada 60 días",\n      "4": "trimestralmente",\n      "2": "cada 6 meses",\n      "1": "una vez al año",\n    };\n    explicacionP.innerHTML = `Si invertís al <b>${tna.toFixed(2)}% (TNA)</b> y reinvertís tus ganancias <b>${periodosNombres[m]}</b>, al final del año habrás obtenido un rendimiento real del <b>${tea.toFixed(2)}% (TEA)</b>.`;\n  }\n\n  // Event Listeners\n  tnaInput.addEventListener("input", calcularDesdeTNA);\n  teaInput.addEventListener("input", calcularDesdeTEA);\n  periodoSelect.addEventListener("change", calcularDesdeTNA);\n\n  // Inicializar\n  calcularDesdeTNA();\n<\/script>'], ["", ' <script>\n  const tnaInput = document.getElementById("tna");\n  const teaInput = document.getElementById("tea");\n  const periodoSelect = document.getElementById("periodo");\n  const explicacionP = document.getElementById("explicacion");\n\n  function calcularDesdeTNA() {\n    const tna = parseFloat(tnaInput.value) / 100;\n    const m = parseInt(periodoSelect.value);\n\n    if (isNaN(tna)) return;\n\n    // Fórmula: TEA = (1 + i/m)^m - 1\n    const tea = (Math.pow(1 + tna / m, m) - 1) * 100;\n    teaInput.value = tea.toFixed(2);\n    actualizarExplicacion(tna * 100, tea, m);\n  }\n\n  function calcularDesdeTEA() {\n    const tea = parseFloat(teaInput.value) / 100;\n    const m = parseInt(periodoSelect.value);\n\n    if (isNaN(tea)) return;\n\n    // Fórmula inversa: TNA = m * [(1 + TEA)^(1/m) - 1]\n    const tna = m * (Math.pow(1 + tea, 1 / m) - 1) * 100;\n    tnaInput.value = tna.toFixed(2);\n    actualizarExplicacion(tna, tea * 100, m);\n  }\n\n  function actualizarExplicacion(tna, tea, m) {\n    const periodosNombres = {\n      "365": "diariamente",\n      "12": "todos los meses",\n      "6": "cada 60 días",\n      "4": "trimestralmente",\n      "2": "cada 6 meses",\n      "1": "una vez al año",\n    };\n    explicacionP.innerHTML = \\`Si invertís al <b>\\${tna.toFixed(2)}% (TNA)</b> y reinvertís tus ganancias <b>\\${periodosNombres[m]}</b>, al final del año habrás obtenido un rendimiento real del <b>\\${tea.toFixed(2)}% (TEA)</b>.\\`;\n  }\n\n  // Event Listeners\n  tnaInput.addEventListener("input", calcularDesdeTNA);\n  teaInput.addEventListener("input", calcularDesdeTEA);\n  periodoSelect.addEventListener("change", calcularDesdeTNA);\n\n  // Inicializar\n  calcularDesdeTNA();\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <nav class="text-sm text-slate-500 mb-6"> <a href="/" class="hover:text-blue-600">Inicio</a> /
<a href="/finanzas" class="hover:text-blue-600">Finanzas</a> /
<span class="text-slate-900 font-medium">Conversor de Tasas</span> </nav> <header class="mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4">
🔄 Conversor TNA ↔ TEA
</h1> <p class="text-lg text-slate-600">
Entendé cuánto ganás o pagás realmente analizando la capitalización de
        intereses.
</p> </header> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2 space-y-6"> <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Tasa Nominal Anual (TNA) %</label> <div class="relative"> <input type="number" id="tna" value="110" step="0.01" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition font-bold text-xl"> <span class="absolute right-4 top-4 text-slate-400">%</span> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Capitalización cada:</label> <select id="periodo" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none cursor-pointer font-medium"> <option value="365">Diaria (365 días)</option> <option value="12" selected>Mensual (30 días)</option> <option value="6">Bimestral (60 días)</option> <option value="4">Trimestral (90 días)</option> <option value="2">Semestral (180 días)</option> <option value="1">Anual (360 días)</option> </select> </div> </div> <div class="mt-8 pt-8 border-t border-slate-100"> <label class="block text-sm font-bold text-slate-700 mb-2">Tasa Efectiva Anual (TEA) %</label> <div class="relative"> <input type="number" id="tea" step="0.01" class="w-full p-4 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition font-bold text-xl text-blue-700"> <span class="absolute right-4 top-4 text-blue-300">%</span> </div> <p class="text-xs text-slate-400 mt-2">
Podés modificar cualquiera de los dos valores para convertir en
              ambos sentidos.
</p> </div> </div> <div class="bg-slate-900 text-white p-6 rounded-2xl"> <h3 class="font-bold mb-2 flex items-center gap-2"> <span class="text-yellow-400">💡</span> ¿Qué significa este resultado?
</h3> <p id="explicacion" class="text-slate-300 text-sm leading-relaxed">
Con una TNA del 110% y capitalización mensual, la tasa real que
            recibirás al reinvertir los intereses cada mes es significativamente
            mayor.
</p> </div> </div> <aside class="space-y-6"> <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"> <h4 class="font-bold text-slate-900 mb-4">Fórmulas Utilizadas</h4> <div class="text-xs space-y-4 text-slate-600 italic"> <p>Para pasar de TNA a TEA:</p> <div class="bg-slate-50 p-3 rounded-lg text-center not-italic font-mono">
TEA = (1 + i/m)^m - 1
</div> <p>
Donde <b>i</b> es la TNA y <b>m</b> es la cantidad de capitalizaciones
              al año.
</p> </div> </div> <div class="space-y-3"> <a href="/finanzas/plazo-fijo" class="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition group"> <span class="text-xs font-bold text-blue-600 uppercase">Usar en:</span> <span class="block font-bold text-slate-900 group-hover:text-blue-600">Calculadora Plazo Fijo</span> </a> <a href="/finanzas/interes-compuesto" class="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition group"> <span class="text-xs font-bold text-blue-600 uppercase">Efecto:</span> <span class="block font-bold text-slate-900 group-hover:text-blue-600">Interés Compuesto</span> </a> </div> </aside> </div> <section class="mt-16 prose prose-slate max-w-none border-t pt-12"> <h2>Diferencia entre TNA y TEA: Lo que los bancos no te cuentan</h2> <p>
Cuando ves un cartel en un banco que dice <b>TNA</b>, te están dando una
        tasa nominal. Sin embargo, si ese producto (como un Plazo Fijo) te
        permite reinvertir los intereses mensualmente, la tasa que realmente
        percibís al final del año es la <b>TEA</b>.
</p> <p>
La <b>TEA</b> es el indicador real del costo o beneficio financiero porque
        tiene en cuenta el "interés sobre el interés". En economías con alta inflación,
        la brecha entre TNA y TEA puede ser de decenas de puntos porcentuales.
</p> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/tasas-tna-tea.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/tasas-tna-tea.astro";
const $$url = "/finanzas/tasas-tna-tea/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TasasTnaTea,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
