globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$EngagementRate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Engagement Rate | Medí tu Impacto en Redes", "description": "Calculá la tasa de interacción de tus publicaciones en Instagram, LinkedIn o TikTok. Analizá el compromiso real de tu audiencia." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de Engagement Rate
</h1> <p class="text-slate-600 max-w-2xl mx-auto italic">
"No busques seguidores, busca conexiones."
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Interacciones Totales (Likes, Coments, Shares)</label> <input type="number" id="interactions" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all font-mono" placeholder="Ej: 250"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-2 ml-1">Alcance o Seguidores Totales</label> <input type="number" id="reach" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all font-mono" placeholder="Ej: 5000"> </div> </div> <div class="flex items-center justify-center"> <div class="text-center p-8 bg-orange-50 rounded-[2rem] border border-orange-100 w-full"> <span class="block text-[10px] font-bold uppercase text-orange-400 mb-2">Tasa de Engagement</span> <div id="engResult" class="text-6xl font-black text-orange-700">
0%
</div> <div id="engLevel" class="mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-orange-400">
Esperando datos
</div> </div> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el Engagement Rate?
</h2> <p>
Es el porcentaje que indica qué tan activa es tu comunidad. Se calcula
        dividiendo el total de interacciones (me gusta, comentarios, compartidos
        y guardados) por el tamaño de tu audiencia o el alcance de la
        publicación.
</p> <h3 class="text-xl font-bold text-slate-800 mt-8">
Ejemplo Extenso de Análisis de Comunidad:
</h3> <div class="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500 my-6"> <p class="text-sm mb-4">Tenés dos cuentas de Instagram:</p> <ul class="text-sm space-y-2"> <li> <strong>Cuenta A:</strong> 100,000 seguidores y 1,000 interacciones por
            post (<strong>1% Engagement</strong>).
</li> <li> <strong>Cuenta B:</strong> 10,000 seguidores y 800 interacciones por post
            (<strong>8% Engagement</strong>).
</li> </ul> <p class="text-sm mt-4">
Aunque la Cuenta A es más grande, la <strong>Cuenta B es mucho más valiosa</strong> para una marca, porque su audiencia está realmente interesada en lo que
          dice. Un alto engagement suele predecir una mejor [Tasa de Conversión](/seo/tasa-conversion)
          en el futuro.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Social SEO</h4> <p class="text-xs leading-relaxed">
Las redes sociales funcionan con algoritmos de búsqueda similares a
            Google. Un alto engagement le dice a la plataforma que tu contenido
            es relevante, mostrándolo a más personas (aumentando tu alcance
            orgánico).
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">
Optimización del Contenido
</h4> <p class="text-xs leading-relaxed">
Si tu engagement es bajo, probá analizando la [Densidad de
            Keywords](/seo/densidad-keywords) en tus captions para ver si estás
            usando los términos que realmente busca tu comunidad.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/seo/engagement-rate.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/seo/engagement-rate.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/engagement-rate.astro";
const $$url = "/seo/engagement-rate";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$EngagementRate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
