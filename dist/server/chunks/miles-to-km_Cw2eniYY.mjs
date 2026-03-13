globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$MilesToKm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MilesToKm;
  const formulaMillasAKm = "$$ \\text{km} = \\text{mi} \\times 1.60934 $$";
  const formulaKmAMillas = "$$ \\text{mi} = \\text{km} \\div 1.60934 $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Millas a Kilómetros | Calculadora de Distancia Online", "description": "Convertí millas a km y kilómetros a millas de forma instantánea. Aprendé la diferencia entre milla náutica y terrestre con ejemplos y fórmulas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Conversor de <span class="text-indigo-600">Millas a Kilómetros</span> 🛣️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Herramienta de precisión para transformar unidades de distancia del
        sistema imperial al métrico decimal.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 items-end"> <div class="space-y-3"> <label for="inputMillas" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Millas (mi)</label> <input type="number" id="inputMillas" placeholder="Ej: 60" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="space-y-3"> <label for="inputKm" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Kilómetros (km)</label> <input type="number" id="inputKm" placeholder="Resultado..." class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> </div> <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"> <button id="btnConvMtoK" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-lg">
Convertir a Kilómetros
</button> <button id="btnConvKtoM" class="w-full bg-white text-slate-900 border-2 border-slate-900 p-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg active:scale-95 text-lg">
Convertir a Millas
</button> </div> <div id="resBoxDistancia" class="hidden mt-10 p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500"> <p id="textResultado" class="text-2xl font-black text-indigo-900"></p> <p class="text-indigo-400 text-sm mt-2 font-medium">
Cálculo basado en el estándar internacional (1 mi = 1.609344 km)
</p> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Por qué es necesario convertir millas a kilómetros?
</h2> <p class="mb-6">
La convivencia entre el <strong>Sistema Imperial</strong> (usado principalmente
        en EE. UU. y el Reino Unido) y el <strong>Sistema Internacional de Unidades</strong> (usado en el resto del mundo) hace que la conversión de unidades de distancia
        sea una tarea cotidiana. Ya sea porque estás de viaje, leyendo literatura
        técnica o configurando un GPS, entender la relación entre la milla y el kilómetro
        es esencial para la precisión.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Qué es exactamente una milla terrestre?
</h3> <p class="mb-6">
La milla terrestre internacional es una unidad de longitud que equivale
        exactamente a 1,609.344 metros. Se originó en la antigua Roma como
        "mille passus" (mil pasos), aunque la definición moderna se estandarizó
        en 1959. Por otro lado, el kilómetro es una unidad decimal basada en la
        diezmilésima parte de la distancia del polo al ecuador, simplificando
        los cálculos en base 10.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula de Conversión
</h3> <p class="mb-4">
Para realizar la conversión de manera manual o programática, aplicamos
        los siguientes factores de conversión:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaMillasAKm} </div> <p class="mb-4 text-center">
Inversamente, para obtener millas desde kilómetros:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaKmAMillas} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencias entre Millas Terrestres y Náuticas
</h3> <p class="mb-6">
Es fundamental no confundir la milla terrestre con la <strong>milla náutica</strong>. Esta última se utiliza exclusivamente en navegación aérea y marítima.
        Una milla náutica equivale a $$ 1.852 $$ kilómetros. La diferencia
        radica en que la milla náutica se basa en la circunferencia terrestre,
        correspondiendo a un minuto de arco de latitud.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Reales
</h3> <div class="space-y-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-indigo-600 mb-3 text-xl">
1. Conducción en el extranjero
</h4> <p class="mb-4 text-sm">
Si alquilás un auto en Estados Unidos, verás que el límite de
            velocidad común es de 65 mph. Al convertirlo, descubrís que equivale
            a unos 105 km/h, una velocidad estándar en rutas de otros países.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-indigo-600 mb-3 text-xl">
2. Entrenamiento deportivo
</h4> <p class="mb-4 text-sm">
En el mundo del running, muchas maratones se miden en millas (26.2
            mi). Conocer la conversión te ayuda a planificar tus tiempos si
            estás acostumbrado a entrenar por kilómetros (42.19 km).
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Tabla de Equivalencias Rápidas
</h3> <div class="overflow-x-auto mb-12"> <table class="w-full text-left border-collapse"> <thead> <tr class="bg-indigo-600 text-white"> <th class="p-4 rounded-tl-xl">Millas</th> <th class="p-4 rounded-tr-xl">Kilómetros (Aprox.)</th> </tr> </thead> <tbody class="text-slate-600"> <tr class="border-b"><td class="p-4 font-bold">1 mi</td><td class="p-4">1.61 km</td></tr> <tr class="border-b bg-slate-50"><td class="p-4 font-bold">5 mi</td><td class="p-4">8.05 km</td></tr> <tr class="border-b"><td class="p-4 font-bold">10 mi</td><td class="p-4">16.09 km</td></tr> <tr class="border-b bg-slate-50"><td class="p-4 font-bold">50 mi</td><td class="p-4">80.47 km</td></tr> <tr class="border-b"><td class="p-4 font-bold">100 mi</td><td class="p-4">160.93 km</td></tr> </tbody> </table> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejercicios Prácticos de Conversión
</h3> <ol class="list-decimal pl-6 mb-8 space-y-4"> <li> <strong>Velocidad:</strong> Si un avión vuela a una velocidad de crucero
          de 500 mph, ¿a cuántos km/h vuela? (Respuesta: 804.67 km/h).
</li> <li> <strong>Distancia:</strong> La distancia entre Londres y París es de aproximadamente
          214 millas. ¿Cuántos kilómetros son? (Respuesta: 344.4 km).
</li> <li> <strong>Aproximación mental:</strong> Un truco rápido es multiplicar las
          millas por 1.6. Ejemplo: 10 millas x 1.6 = 16 km. Es una forma útil de calcular
          sin calculadora.
</li> </ol> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-indigo-400 font-bold mb-2">Consejo Técnico:</p> <p class="text-sm text-slate-400">
Siempre verificá si la fuente de tus datos utiliza millas náuticas o
          terrestres, ya que un error de conversión en distancias largas puede
          ser de varios kilómetros.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro";
const $$url = "/unidades/miles-to-km";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MilesToKm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
