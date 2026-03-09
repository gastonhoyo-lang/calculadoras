/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CalculadoraDividendos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <!-- Script del cliente --> <script lang="ts" client:load>\n  const sharesIn = document.getElementById("sharesInput") as HTMLInputElement;\n  const priceIn = document.getElementById("priceInput") as HTMLInputElement;\n  const divIn = document.getElementById("divInput") as HTMLInputElement;\n\n  const annualOut = document.getElementById("annualOutput");\n  const monthlyOut = document.getElementById("monthlyOutput");\n  const yieldOut = document.getElementById("yieldOutput");\n\n  const calculateDividends = () => {\n    const shares = parseFloat(sharesIn.value) || 0;\n    const price = parseFloat(priceIn.value) || 0;\n    const divPerShare = parseFloat(divIn.value) || 0;\n\n    const totalAnnual = shares * divPerShare;\n    const totalMonthly = totalAnnual / 12;\n\n    if (annualOut)\n      annualOut.innerText = "$" + Math.round(totalAnnual).toLocaleString();\n    if (monthlyOut)\n      monthlyOut.innerText = "$" + Math.round(totalMonthly).toLocaleString();\n\n    const yieldVal = price > 0 ? (divPerShare / price) * 100 : 0;\n    if (yieldOut) yieldOut.innerText = yieldVal.toFixed(2) + "%";\n  };\n\n  [sharesIn, priceIn, divIn].forEach((el) =>\n    el?.addEventListener("input", calculateDividends),\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Dividendos | Proyect\xE1 tu Renta Pasiva", "description": "Calcul\xE1 cu\xE1nto vas a cobrar en dividendos por tus acciones. Estim\xE1 tu pago mensual, anual y el rendimiento de tu cartera de inversi\xF3n." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Dividendos
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Estimá tus ingresos pasivos proyectando los pagos de tus acciones o
        ETFs.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Inversión Total o Cantidad de Acciones</label> <div class="flex gap-2"> <input type="number" id="sharesInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 outline-none transition-all font-mono" placeholder="Cant. Acciones"> <input type="number" id="priceInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 outline-none transition-all font-mono" placeholder="Precio ($)"> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">Dividendo Anual por Acción ($)</label> <input type="number" id="divInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 1.50"> </div> </div> <div class="text-center p-10 bg-violet-600 rounded-[2.5rem] shadow-lg shadow-violet-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Cobro Anual Estimado</span> <div id="annualOutput" class="text-6xl font-black leading-none">
$0
</div> <div class="mt-6 flex justify-around gap-4"> <div class="bg-white/10 p-3 rounded-xl flex-1"> <span class="block text-[8px] font-bold uppercase opacity-70">Mensual</span> <span id="monthlyOutput" class="text-lg font-bold">$0</span> </div> <div class="bg-white/10 p-3 rounded-xl flex-1"> <span class="block text-[8px] font-bold uppercase opacity-70">Yield %</span> <span id="yieldOutput" class="text-lg font-bold">0%</span> </div> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">$$</span> </div> </div> </div> <!-- Información adicional --> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué son los dividendos?
</h2> <p>
Los dividendos son la parte de las ganancias de una empresa que se
        distribuye a sus accionistas. Es una forma de obtener rentabilidad sin
        necesidad de vender tus activos.
</p> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro";
const $$url = "/finanzas/calculadora-dividendos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDividendos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
