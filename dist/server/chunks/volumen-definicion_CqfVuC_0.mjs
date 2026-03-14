globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_COa7YPcz.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Gwpmd91H.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_BJlGIyyB.mjs";
const $$VolumenDefinicion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`---
${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Volumen y Definición | Macros para Gym", "description": "Calculá tus calorías y macronutrientes para ganar masa muscular o perder grasa. Ajustá tu dieta según tu objetivo físico." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"><header class="text-center mb-12"><h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Objetivo: <span class="text-orange-600">Fitness</span> 🦾
</h1><p class="text-slate-500 text-lg font-medium">
Calculá tus macros exactos para transformar tu cuerpo.
</p></header><div class="grid lg:grid-cols-2 gap-8 mb-16"><div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-5"><div class="grid grid-cols-2 gap-4"><select id="sexoV" class="p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500"><option value="H">Hombre</option><option value="M">Mujer</option></select><input type="number" id="edadV" placeholder="Edad" class="p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500"></div><div class="grid grid-cols-2 gap-4"><input type="number" id="pesoV" placeholder="Peso (kg)" class="p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500"><input type="number" id="alturaV" placeholder="Altura (cm)" class="p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500"></div><select id="actividadV" class="w-full p-4 bg-slate-50 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-orange-500"><option value="1.2">Sedentario (Poco o nada)</option><option value="1.375">Ligero (1-3 días/semana)</option><option value="1.55">Moderado (3-5 días/semana)</option><option value="1.725">Intenso (6-7 días/semana)</option></select><div class="bg-orange-50 p-4 rounded-2xl border border-orange-100"><label class="block text-xs font-black text-orange-800 uppercase mb-3 text-center">Mi Objetivo</label><div class="flex gap-2"><button id="btnDef" class="flex-1 bg-white border-2 border-orange-200 p-3 rounded-xl font-bold text-orange-600 hover:bg-orange-600 hover:text-white transition-all">Definición</button><button id="btnVol" class="flex-1 bg-orange-600 text-white p-3 rounded-xl font-bold hover:bg-orange-700 transition-all">Volumen</button></div></div></div><div id="resFit" class="hidden space-y-4 animate-in fade-in zoom-in"><div class="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center"><p id="metaLabel" class="text-orange-400 text-sm font-bold uppercase tracking-widest mb-2"></p><h2 id="caloriasFinal" class="text-5xl font-black mb-2"></h2><p class="text-slate-400 text-sm italic">
Calorías diarias recomendadas
</p></div><div class="grid grid-cols-3 gap-3"><div class="bg-blue-50 p-4 rounded-2xl text-center border border-blue-100"><p class="text-blue-600 text-[10px] font-bold uppercase">
Proteína
</p><span id="protVal" class="text-xl font-black text-blue-900"></span></div><div class="bg-red-50 p-4 rounded-2xl text-center border border-red-100"><p class="text-red-600 text-[10px] font-bold uppercase">Grasas</p><span id="grasVal" class="text-xl font-black text-red-900"></span></div><div class="bg-emerald-50 p-4 rounded-2xl text-center border border-emerald-100"><p class="text-emerald-600 text-[10px] font-bold uppercase">
Carbos
</p><span id="carbVal" class="text-xl font-black text-emerald-900"></span></div></div></div></div><article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"><h2 class="text-3xl font-black text-slate-800 mb-6">
Volumen vs Definición: ¿Cuál elegir?
</h2><h3 class="text-xl font-bold text-slate-800 mb-2">
1. Volumen (Bulking)
</h3><p>
Se trata de consumir más calorías de las que quemás (superávit
        calórico). El objetivo es proveer al cuerpo de energía extra para
        construir tejido muscular nuevo.
<strong>Recomendación:</strong> Sumamos unas 300-500 kcal a tu mantenimiento.
</p><h3 class="text-xl font-bold text-slate-800 mt-8 mb-2">
2. Definición (Cutting)
</h3><p>
Buscamos consumir menos calorías de las que quemás (déficit calórico)
        para que el cuerpo use la grasa almacenada como combustible.
<strong>Recomendación:</strong> Restamos un 15-20% de tus calorías de mantenimiento
        para preservar el músculo.
</p><h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">
Sobre los Macronutrientes
</h3><ul class="list-disc pl-5 space-y-2"><li><strong>Proteínas:</strong> Esenciales para reparar y construir músculo.
          Calculamos aprox. 2g por kg de peso.
</li><li><strong>Grasas:</strong> Vitales para el sistema hormonal. Calculamos aprox.
          0.8g a 1g por kg de peso.
</li><li><strong>Carbohidratos:</strong> Tu fuente principal de energía para entrenar
          pesado. Rellenan el resto de las calorías.
</li></ul></article></div>${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/volumen-definicion.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/volumen-definicion.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/salud/volumen-definicion.astro";
const $$url = "/salud/volumen-definicion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$VolumenDefinicion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
