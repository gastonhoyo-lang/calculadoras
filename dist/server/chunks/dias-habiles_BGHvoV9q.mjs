globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$DiasHabiles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Días Hábiles y Calendario | Chieffin", "description": "Calculá cuántos días laborales (lunes a viernes) hay entre dos fechas de forma rápida y precisa." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <header class="text-center mb-12"> <span class="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Productividad</span> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-4 tracking-tight">
Días <span class="text-blue-600">Hábiles</span> 🗓️
</h1> <p class="text-slate-500 text-lg font-medium max-w-xl mx-auto">
Contá los días laborales entre dos fechas. Ideal para plazos legales,
        entregas y trámites.
</p> </header> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"> <div class="space-y-5"> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Fecha de Inicio</label> <input type="date" id="fechaInicio" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-lg"> </div> <div> <label class="block text-sm font-bold text-slate-700 mb-2">Fecha de Fin</label> <input type="date" id="fechaFin" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none transition-all font-bold text-lg"> </div> </div> <button id="btnCalcularDias" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
Contar Días
</button> <div id="resultadoDias" class="hidden animate-in fade-in zoom-in duration-300 grid grid-cols-2 gap-4"> <div class="p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-center"> <p class="text-blue-600 font-bold text-xs uppercase mb-1">
Días Hábiles
</p> <div id="habilesCount" class="text-4xl font-black text-blue-900 tracking-tighter">
0
</div> </div> <div class="p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 text-center"> <p class="text-slate-500 font-bold text-xs uppercase mb-1">
Días Totales
</p> <div id="totalesCount" class="text-4xl font-black text-slate-700 tracking-tighter">
0
</div> </div> </div> </div> <article class="prose prose-slate"> <h2 class="text-2xl font-black text-slate-800 mb-4">
¿Qué se considera un día hábil?
</h2> <p class="text-slate-600 leading-relaxed">
Por lo general, los <strong>días hábiles</strong> son aquellos que van de
          lunes a viernes, excluyendo sábados, domingos y feriados nacionales. Esta
          medida es fundamental para:
</p> <ul class="text-slate-600 space-y-2"> <li> <strong>Trámites Bancarios:</strong> Las transferencias suelen demorar
            24 a 48 hs hábiles.
</li> <li> <strong>Contratos:</strong> Plazos para responder cartas documento o notificaciones.
</li> <li><strong>E-commerce:</strong> Tiempos de envío y logística.</li> </ul> <div class="bg-blue-600 p-8 rounded-3xl mt-8 text-white"> <h4 class="text-lg font-bold mb-2">Importante:</h4> <p class="text-blue-100 text-sm">
Esta calculadora excluye automáticamente fines de semana. Recordá
            que los <strong>feriados específicos</strong> de cada país o región pueden
            variar y deben restarse manualmente según tu calendario local.
</p> </div> </article> </div> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/dias-habiles.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/dias-habiles.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/dias-habiles.astro";
const $$url = "/utiles/dias-habiles/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$DiasHabiles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
