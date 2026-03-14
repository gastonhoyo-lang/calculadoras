globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$GastosCompartidos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Gastos Compartidos | Chieffin", "description": "Dividí gastos de viajes o cenas entre amigos. Registrá quién pagó qué y descubrí quién le debe a quién." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Finanzas Grupales</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Cuentas <span class="text-indigo-600">Claras</span> 🤝
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
¿Quién puso más? ¿Quién debe? Cargá los gastos y saldá las deudas del
        grupo.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div id="setupGrupo" class="space-y-4"> <label class="block text-sm font-bold text-slate-700">1. Nombres de los integrantes (separados por coma)</label> <input type="text" id="nombresGrupo" placeholder="Ej: Ana, Beto, Carla" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold"> <button id="btnCrearGrupo" class="w-full bg-slate-900 text-white p-4 rounded-2xl font-black hover:bg-indigo-600 transition-all">Empezar a Cargar</button> </div> <div id="seccionGastos" class="hidden space-y-4 animate-in fade-in slide-in-from-top-4"> <div class="h-px bg-slate-100 w-full"></div> <label class="block text-sm font-bold text-slate-700">2. Cargar Gasto</label> <div class="grid grid-cols-2 gap-2"> <select id="pagador" class="p-4 bg-slate-50 rounded-2xl border-none font-bold text-sm"></select> <input type="number" id="montoGasto" placeholder="Monto $" class="p-4 bg-slate-50 rounded-2xl border-none font-bold"> </div> <input type="text" id="descripcionGasto" placeholder="¿En qué se gastó? (Opcional)" class="w-full p-4 bg-slate-50 rounded-2xl border-none text-sm font-medium"> <button id="btnAgregarGasto" class="w-full bg-indigo-50 text-indigo-700 p-4 rounded-2xl font-black hover:bg-indigo-100 transition-all border border-indigo-200">+ Agregar Gasto</button> <div id="listaGastos" class="space-y-2 max-h-40 overflow-y-auto pt-2"></div> </div> <button id="btnLiquidar" class="hidden w-full bg-emerald-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl">
Calcular Saldos
</button> <div id="resGastos" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-slate-900 rounded-[2rem] text-white"> <p class="text-indigo-400 font-bold text-xs uppercase mb-4 text-center tracking-widest">
Saldos Finales
</p> <div id="contenedorSaldos" class="space-y-3 text-sm font-medium"></div> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">¿Cómo funciona?</h2> <p class="text-slate-600 text-sm">
Esta herramienta utiliza el método de <strong>Liquidación Neta</strong>. Sumamos todo lo que gastó el grupo y lo dividimos por la cantidad
          de personas.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Para qué sirve:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Viajes:</strong> Uno paga el combustible, otro el peaje y otro
            la comida.
</li> <li> <strong>Asados:</strong> División justa entre los que compraron la carne
            y los que trajeron la bebida.
</li> <li> <strong>Regalos grupales:</strong> Para saber cuánto tiene que transferir
            cada uno al que hizo la compra.
</li> </ul> <div class="bg-indigo-50 p-6 rounded-2xl mt-8 border border-indigo-100"> <p class="text-sm font-bold text-indigo-800 mb-1">
Privacidad total:
</p> <p class="text-xs text-indigo-700 italic">
Los datos se procesan en tu navegador. Chieffin no guarda
            información de tus gastos ni los nombres de tus amigos.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/gastos-compartidos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/gastos-compartidos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/gastos-compartidos.astro";
const $$url = "/utiles/gastos-compartidos/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GastosCompartidos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
