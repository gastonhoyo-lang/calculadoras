globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraAlcance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Alcance en Redes Sociales | Reach SEO Tool", "description": "Medí el alcance único de tus publicaciones. Descubrí qué porcentaje de tus seguidores te ve y cuánta gente nueva estás alcanzando." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Alcance
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No es cuántos te siguen, es a cuántos impactas."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Alcance Único (Personas que te vieron)</label> <input type="number" id="reachInput" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all font-mono" placeholder="Ej: 12000"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Total de Seguidores</label> <input type="number" id="followersInput" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all font-mono" placeholder="Ej: 10000"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-fuchsia-50 rounded-[2rem] border border-fuchsia-100 w-full"> <span class="block text-[10px] font-bold uppercase text-fuchsia-400 mb-2">Tasa de Alcance</span> <div id="reachResult" class="text-6xl font-black text-fuchsia-700">
0%
</div> <p id="reachLabel" class="text-[10px] text-fuchsia-400 mt-4 font-bold uppercase tracking-widest">
Esperando datos
</p> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el Alcance y por qué es distinto a las Impresiones?
</h2> <p>
El **Alcance (Reach)** mide el número de usuarios únicos que vieron tu
        contenido. Si una misma persona ve tu post 5 veces, el alcance es 1,
        pero las impresiones son 5. Por eso, el alcance es la métrica real para
        saber qué tan grande es tu red.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Penetración:
</h3> <div class="bg-fuchsia-50 p-6 rounded-2xl border-l-4 border-fuchsia-500 my-6"> <p class="text-sm mb-4">
Si tienes 10,000 seguidores pero tu post solo llega a 1,000 personas,
          tu <strong>tasa de alcance es del 10%</strong>. Esto significa que el
          90% de tu audiencia no está viendo lo que publicas.
</p> <p class="text-sm"> <strong>Estrategia de Crecimiento:</strong> Si tu alcance es de 15,000 teniendo
          solo 10,000 seguidores, tu contenido se ha vuelto viral. Has superado el
          100% de penetración, alcanzando a 5,000 personas que aún no te conocían.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Alcance Orgánico vs Pagado
</h4> <p class="text-xs leading-relaxed">
El alcance orgánico es cada vez más difícil de conseguir. Para
            optimizarlo sin pagar, asegúrate de que tus textos sean atractivos.
            Puedes usar nuestro [Contador de Caracteres
            SEO](/seo/contador-caracteres) para no exceder los límites visuales.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Relación con el Engagement
</h4> <p class="text-xs leading-relaxed">
A mayor [Engagement Rate](/seo/engagement-rate), mayor será tu
            alcance. Los algoritmos de Instagram o LinkedIn muestran el
            contenido a más personas nuevas si ven que tus seguidores actuales
            están interactuando.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/calculadora-alcance.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/calculadora-alcance.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/calculadora-alcance.astro";
const $$url = "/seo/calculadora-alcance/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraAlcance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
