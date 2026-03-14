globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout } from "./Layout_C1P3Y1KY.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Bebidas = createComponent(($$result, $$props, $$slots) => {
  const title = "Calculadora de Bebidas para Fiestas";
  const description = "Calculá cuánta bebida comprar para tu evento o asado. Cantidades exactas de alcohol, gaseosas y agua por persona.";
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  const adultosInput = document.getElementById("adultos");\n  const ninosInput = document.getElementById("ninos");\n  const duracionInput = document.getElementById("duracion");\n  const resultadosDiv = document.getElementById("resultados");\n\n  function calcular() {\n    const adultos = parseInt(adultosInput.value) || 0;\n    const ninos = parseInt(ninosInput.value) || 0;\n    const horas = parseInt(duracionInput.value) || 4;\n\n    // Multiplicador por duración (base 4 horas)\n    const factorDuracion = horas / 4;\n\n    const gaseosa = (adultos * 0.6 + ninos * 0.5) * factorDuracion;\n    const cerveza = adultos * 0.8 * factorDuracion;\n    const vino = adultos * 0.3 * factorDuracion;\n    const hielo = (adultos + ninos) * 0.4;\n\n    resultadosDiv.innerHTML = `\n      <div class="flex justify-between border-b border-blue-200 pb-2">\n        <span class="text-blue-800">🥤 Gaseosas / Agua</span>\n        <span class="font-bold text-blue-900">${gaseosa.toFixed(1)} Litros</span>\n      </div>\n      <div class="flex justify-between border-b border-blue-200 pb-2">\n        <span class="text-blue-800">🍺 Cerveza</span>\n        <span class="font-bold text-blue-900">${cerveza.toFixed(1)} Litros</span>\n      </div>\n      <div class="flex justify-between border-b border-blue-200 pb-2">\n        <span class="text-blue-800">🍷 Vino</span>\n        <span class="font-bold text-blue-900">${Math.ceil(vino / 0.75)} Botellas</span>\n      </div>\n      <div class="flex justify-between">\n        <span class="text-blue-800">🧊 Hielo</span>\n        <span class="font-bold text-blue-900">${Math.ceil(hielo)} kg</span>\n      </div>\n    `;\n  }\n\n  [adultosInput, ninosInput, duracionInput].forEach((input) => {\n    input.addEventListener("input", calcular);\n  });\n\n  // Ejecutar al cargar\n  calcular();\n<\/script>'], ["", ' <script>\n  const adultosInput = document.getElementById("adultos");\n  const ninosInput = document.getElementById("ninos");\n  const duracionInput = document.getElementById("duracion");\n  const resultadosDiv = document.getElementById("resultados");\n\n  function calcular() {\n    const adultos = parseInt(adultosInput.value) || 0;\n    const ninos = parseInt(ninosInput.value) || 0;\n    const horas = parseInt(duracionInput.value) || 4;\n\n    // Multiplicador por duración (base 4 horas)\n    const factorDuracion = horas / 4;\n\n    const gaseosa = (adultos * 0.6 + ninos * 0.5) * factorDuracion;\n    const cerveza = adultos * 0.8 * factorDuracion;\n    const vino = adultos * 0.3 * factorDuracion;\n    const hielo = (adultos + ninos) * 0.4;\n\n    resultadosDiv.innerHTML = \\`\n      <div class="flex justify-between border-b border-blue-200 pb-2">\n        <span class="text-blue-800">🥤 Gaseosas / Agua</span>\n        <span class="font-bold text-blue-900">\\${gaseosa.toFixed(1)} Litros</span>\n      </div>\n      <div class="flex justify-between border-b border-blue-200 pb-2">\n        <span class="text-blue-800">🍺 Cerveza</span>\n        <span class="font-bold text-blue-900">\\${cerveza.toFixed(1)} Litros</span>\n      </div>\n      <div class="flex justify-between border-b border-blue-200 pb-2">\n        <span class="text-blue-800">🍷 Vino</span>\n        <span class="font-bold text-blue-900">\\${Math.ceil(vino / 0.75)} Botellas</span>\n      </div>\n      <div class="flex justify-between">\n        <span class="text-blue-800">🧊 Hielo</span>\n        <span class="font-bold text-blue-900">\\${Math.ceil(hielo)} kg</span>\n      </div>\n    \\`;\n  }\n\n  [adultosInput, ninosInput, duracionInput].forEach((input) => {\n    input.addEventListener("input", calcular);\n  });\n\n  // Ejecutar al cargar\n  calcular();\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <nav class="text-sm text-slate-500 mb-6"> <a href="/" class="hover:text-blue-600">Inicio</a> /
<a href="/utiles" class="hover:text-blue-600">Útiles</a> /
<span class="text-slate-900 font-medium">Bebidas</span> </nav> <header class="mb-10 text-center"> <h1 class="text-4xl font-black text-slate-900 mb-4">
🥤 Calculadora de Bebidas
</h1> <p class="text-lg text-slate-600">
Organizá tu evento sin que falte nada (ni sobre de más).
</p> </header> <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="space-y-6"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Cantidad de Adultos</label> <input type="number" id="adultos" value="10" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Cantidad de Niños</label> <input type="number" id="ninos" value="0" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Duración del evento (horas)</label> <select id="duracion" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none"> <option value="2">2 horas (Brunch/Corto)</option> <option value="4" selected>4 horas (Asado estándar)</option> <option value="6">6 horas (Fiesta larga)</option> </select> </div> </div> <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100"> <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
Lista de compras sugerida:
</h3> <div id="resultados" class="space-y-4"></div> <p class="text-xs text-blue-400 mt-6">
* Cálculos basados en consumo promedio moderado.
</p> </div> </div> </div> <section class="prose prose-slate max-w-none"> <h2 class="text-2xl font-bold">
¿Cómo se calcula la bebida por persona?
</h2> <p>
Para un evento estándar de 4 horas, calculamos los siguientes promedios
        que garantizan que nadie se quede con sed:
</p> <ul> <li> <strong>Gaseosas y Agua:</strong> 600ml por adulto y 400ml por niño.
</li> <li> <strong>Cerveza:</strong> 1 litro por adulto (si es la bebida principal).
</li> <li><strong>Vino:</strong> 1 botella cada 3 adultos.</li> <li> <strong>Hielo:</strong> 1kg cada 3 personas para enfriar y servir.
</li> </ul> <div class="my-10 p-6 bg-slate-100 rounded-2xl"> <h3 class="mt-0">Preguntas Frecuentes</h3> <details class="mb-4 bg-white p-4 rounded-xl shadow-sm cursor-pointer"> <summary class="font-bold text-slate-800">¿Qué pasa si hace mucho calor?</summary> <p class="mt-2 text-slate-600 text-sm">
En verano, el consumo de agua, gaseosas y cerveza aumenta un 25%. Te
            recomendamos sumar un pack extra de agua mineral.
</p> </details> <details class="mb-4 bg-white p-4 rounded-xl shadow-sm cursor-pointer"> <summary class="font-bold text-slate-800">¿Cómo calculo el Fernet o tragos blancos?</summary> <p class="mt-2 text-slate-600 text-sm">
Calculá una botella de 750ml cada 10 adultos. No olvides comprar el
            triple de gaseosa cola para la mezcla.
</p> </details> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-12"> <a href="/utiles/asado" class="p-4 border border-slate-200 rounded-xl hover:bg-blue-50 transition flex items-center gap-3"> <span class="text-2xl">🥩</span> <div> <span class="block font-bold text-slate-900">Calculadora de Asado</span> <span class="text-xs text-slate-500">¿Cuánta carne comprar?</span> </div> </a> <a href="/utiles/dividir-cuenta" class="p-4 border border-slate-200 rounded-xl hover:bg-blue-50 transition flex items-center gap-3"> <span class="text-2xl">💸</span> <div> <span class="block font-bold text-slate-900">Dividir Cuenta</span> <span class="text-xs text-slate-500">Repartí los gastos del súper.</span> </div> </a> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/utiles/bebidas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/bebidas.astro";
const $$url = "/utiles/bebidas";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Bebidas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
