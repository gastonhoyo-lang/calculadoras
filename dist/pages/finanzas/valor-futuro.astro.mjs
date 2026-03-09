/* empty css                                          */
import { a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ValorFuturo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <!-- C\xF3digo JS solo para el cliente --> <script client:load>\n  const pvIn = document.getElementById("pvInput");\n  const rateIn = document.getElementById("rateInput");\n  const yearsIn = document.getElementById("yearsInput");\n  const pmtIn = document.getElementById("pmtInput");\n  const fvOut = document.getElementById("fvOutput");\n  const intOut = document.getElementById("interestEarned");\n\n  const calculateFV = () => {\n    const PV = parseFloat(pvIn.value) || 0;\n    const annualRate = (parseFloat(rateIn.value) || 0) / 100;\n    const years = parseFloat(yearsIn.value) || 0;\n    const PMT = parseFloat(pmtIn.value) || 0;\n\n    if (years === 0 && PV === 0) return;\n\n    const r = annualRate / 12;\n    const n = years * 12;\n\n    // VF de la inversi\xF3n inicial + VF de las anualidades (aportes)\n    let fv = PV * Math.pow(1 + annualRate, years);\n\n    if (r > 0) {\n      fv += PMT * ((Math.pow(1 + r, n) - 1) / r);\n    } else {\n      fv += PMT * n;\n    }\n\n    const totalInvested = PV + PMT * n;\n    const profit = fv - totalInvested;\n\n    if (fvOut) fvOut.innerText = "$" + Math.round(fv).toLocaleString();\n    if (intOut)\n      intOut.innerText = `Ganancia por intereses: $${Math.round(profit).toLocaleString()}`;\n  };\n\n  [pvIn, rateIn, yearsIn, pmtIn].forEach((el) =>\n    el?.addEventListener("input", calculateFV),\n  );\n<\/script>'], ["", ' <!-- C\xF3digo JS solo para el cliente --> <script client:load>\n  const pvIn = document.getElementById("pvInput");\n  const rateIn = document.getElementById("rateInput");\n  const yearsIn = document.getElementById("yearsInput");\n  const pmtIn = document.getElementById("pmtInput");\n  const fvOut = document.getElementById("fvOutput");\n  const intOut = document.getElementById("interestEarned");\n\n  const calculateFV = () => {\n    const PV = parseFloat(pvIn.value) || 0;\n    const annualRate = (parseFloat(rateIn.value) || 0) / 100;\n    const years = parseFloat(yearsIn.value) || 0;\n    const PMT = parseFloat(pmtIn.value) || 0;\n\n    if (years === 0 && PV === 0) return;\n\n    const r = annualRate / 12;\n    const n = years * 12;\n\n    // VF de la inversi\xF3n inicial + VF de las anualidades (aportes)\n    let fv = PV * Math.pow(1 + annualRate, years);\n\n    if (r > 0) {\n      fv += PMT * ((Math.pow(1 + r, n) - 1) / r);\n    } else {\n      fv += PMT * n;\n    }\n\n    const totalInvested = PV + PMT * n;\n    const profit = fv - totalInvested;\n\n    if (fvOut) fvOut.innerText = "$" + Math.round(fv).toLocaleString();\n    if (intOut)\n      intOut.innerText = \\`Ganancia por intereses: $\\${Math.round(profit).toLocaleString()}\\`;\n  };\n\n  [pvIn, rateIn, yearsIn, pmtIn].forEach((el) =>\n    el?.addEventListener("input", calculateFV),\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Valor Futuro | Proyecci\xF3n de Inversiones", "description": "Calcul\xE1 cu\xE1nto valdr\xE1 tu inversi\xF3n en el futuro. Proyect\xE1 el crecimiento de tu capital con inter\xE9s compuesto y aportes mensuales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Valor Futuro (VF)
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Proyectá el crecimiento de tu patrimonio basándote en el tiempo y la
        tasa de retorno.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Inversión Inicial ($)
</label> <input type="number" id="pvInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono text-xl" placeholder="Ej: 5000"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Tasa Anual (%)
</label> <input type="number" id="rateInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono" placeholder="8"> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Años
</label> <input type="number" id="yearsInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono" placeholder="10"> </div> </div> <div> <label class="block text-[10px] font-bold uppercase text-slate-400 mb-2 ml-1 tracking-widest">
Aporte Mensual ($)
</label> <input type="number" id="pmtInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-lime-500 outline-none transition-all font-mono" placeholder="Opcional"> </div> </div> <div class="text-center p-10 bg-lime-500 rounded-[2.5rem] shadow-lg shadow-lime-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">
Monto Final Estimado
</span> <div id="fvOutput" class="text-6xl font-black leading-none">$0</div> <div class="mt-8 p-4 bg-white/20 rounded-2xl backdrop-blur-sm inline-block"> <span id="interestEarned" class="text-sm font-bold">
Ganancia por intereses: $0
</span> </div> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">
VF
</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
La Matemática del Futuro
</h2> <p>
El Valor Futuro es el valor que tendrá en una fecha próxima una cantidad
        de dinero que tenemos hoy, o una serie de pagos realizados a una tasa de
        interés determinada.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl overflow-x-auto"> <span class="text-lime-400 font-mono text-xl">
$$VF = VP \\cdot (1 + r)^n + PMT \\cdot \\frac${1 + r ^ n - 1}${r}$$
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic">
Impacto del Aporte Mensual
</h4> <p class="text-xs leading-relaxed">
Incluso un aporte pequeño pero constante puede superar a una gran
            inversión inicial única gracias a la acumulación de intereses sobre
            intereses.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2 italic">
Valor Real vs. Nominal
</h4> <p class="text-xs leading-relaxed">
No olvides considerar la inflación. Si proyectas a 20 años, el
            "valor real" (lo que podrás comprar) será menor que el monto que
            muestra la pantalla.
</p> </div> </div> </section> </main> ` }));
}, "C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro";
const $$url = "/finanzas/valor-futuro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ValorFuturo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
