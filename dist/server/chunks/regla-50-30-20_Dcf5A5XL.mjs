globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$Regla503020 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora Regla 50/30/20 | Chieffin", "description": "Aprendé a administrar tu sueldo con el método 50/30/20. Organizá tus gastos, ahorros y gustos de forma inteligente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Educación Financiera</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Presupuesto <span class="text-emerald-600">50/30/20</span> 📊
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
La fórmula definitiva para organizar tu dinero y dejar de vivir al día.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ingresos Netos Mensuales ($)</label> <input type="number" id="ingresoTotal" placeholder="Ej: 800000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-bold text-xl"> <p class="text-[10px] text-slate-400 mt-2 italic">
Ingresá lo que recibís "en mano" después de impuestos.
</p> </div> <button id="btnPresupuesto" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl">
Organizar Mi Sueldo
</button> <div id="resPresupuesto" class="hidden animate-in fade-in zoom-in duration-300 space-y-4"> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100"> <div class="flex justify-between items-center mb-1"> <span class="text-sm font-bold text-slate-600">50% Necesidades</span> <span id="montoNec" class="font-black text-slate-900">$0</span> </div> <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden"> <div class="bg-blue-500 h-full w-1/2"></div> </div> <p class="text-[10px] text-slate-400 mt-1">
Alquiler, servicios, comida, salud.
</p> </div> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100"> <div class="flex justify-between items-center mb-1"> <span class="text-sm font-bold text-slate-600">30% Deseos</span> <span id="montoDes" class="font-black text-slate-900">$0</span> </div> <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden"> <div class="bg-emerald-500 h-full w-[30%]"></div> </div> <p class="text-[10px] text-slate-400 mt-1">
Salidas, Netflix, hobbies, ropa.
</p> </div> <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100"> <div class="flex justify-between items-center mb-1"> <span class="text-sm font-bold text-slate-600">20% Ahorro e Inversión</span> <span id="montoAho" class="font-black text-slate-900">$0</span> </div> <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden"> <div class="bg-indigo-500 h-full w-[20%]"></div> </div> <p class="text-[10px] text-slate-400 mt-1">
Fondo de emergencia, Plazo Fijo, deudas.
</p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo aplicar el 50/30/20?
</h2> <p class="text-slate-600">
Esta regla fue popularizada por la senadora Elizabeth Warren y es la
          forma más sencilla de gestionar finanzas sin planillas complejas.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
1. El 50% para lo Vital
</h3> <p class="text-slate-600 text-sm">
Aquí entra todo lo que si dejas de pagar, tu vida se complica:
          vivienda, supermercado, transporte y facturas básicas.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
2. El 30% para Disfrutar
</h3> <p class="text-slate-600 text-sm">
Finanzas sanas no significa no gastar. Este porcentaje es para tu
          estilo de vida: cine, suscripciones y ese café que tanto te gusta.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
3. El 20% para tu Futuro
</h3> <p class="text-slate-600 text-sm italic">
Prioridad absoluta: Si tenés deudas con intereses altos (tarjeta de
          crédito), usá este 20% para matarlas primero. Luego, construí tu fondo
          de emergencia.
</p> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/regla-50-30-20.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/regla-50-30-20.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/regla-50-30-20.astro";
const $$url = "/finanzas/regla-50-30-20/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Regla503020,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
