globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$AireAcondicionado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Frigorías para Aire Acondicionado | Chieffin", "description": "Calculá cuántas frigorías (BTU) necesita tu habitación para enfriar correctamente. Evitá gastar de más o comprar un equipo chico." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Hogar y Confort</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Frigorías <span class="text-blue-600">Necesarias</span> ❄️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
No compres a ciegas. Calculá el equipo ideal para tu ambiente en
        segundos.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Ancho (metros)</label> <input type="number" id="ancho" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Largo (metros)</label> <input type="number" id="largo" placeholder="Ej: 4" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">¿Le da mucho el sol?</label> <select id="exposicion" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-lg appearance-none"> <option value="1">Normal / Sombra</option> <option value="1.15">Mucha exposición al sol</option> </select> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Cantidad de personas habituales</label> <input type="number" id="personas" value="1" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-xl"> </div> </div> <button id="btnCalcFrig" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl">
Calcular Frigorías
</button> <div id="resFrig" class="hidden animate-in fade-in zoom-in duration-300"> <div class="p-8 bg-blue-50 rounded-[2rem] border-2 border-blue-100 border-dashed text-center"> <p class="text-blue-600 font-bold text-sm uppercase mb-2">
Recomendación mínima:
</p> <div id="totalFrig" class="text-5xl font-black text-blue-900 tracking-tighter mb-2">
0
</div> <p class="text-blue-800 font-bold mb-3">Frigorías / kcal</p> <div class="h-px bg-blue-200 w-full mb-4"></div> <p id="totalBTU" class="text-blue-600 text-xs font-medium"></p> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Cómo elegir el aire correcto?
</h2> <p class="text-slate-600 text-sm italic">
Comprar un equipo de menos frigorías hará que el motor trabaje siempre
          al máximo, gastando más luz y durando menos.
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
La regla de los 50
</h3> <p class="text-slate-600 text-sm">
Como base, se calculan unas <strong>50 frigorías por metro cúbico</strong> (considerando una altura estándar de 2.5 a 3 metros).
</p> <h3 class="text-xl font-bold text-slate-800 mt-6 mb-2">
Factores que suman calor:
</h3> <ul class="text-slate-600 space-y-2 text-sm"> <li> <strong>Personas:</strong> Cada persona extra aporta unas 150 frigorías
            al cálculo.
</li> <li> <strong>Electrónicos:</strong> Si tenés computadoras o servidores prendidos,
            sumá frigorías extra.
</li> <li> <strong>Ventanas:</strong> Las superficies vidriadas grandes sin persianas
            aumentan mucho la carga térmica.
</li> </ul> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/hogar/aire-acondicionado.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/hogar/aire-acondicionado.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/hogar/aire-acondicionado.astro";
const $$url = "/hogar/aire-acondicionado/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AireAcondicionado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
