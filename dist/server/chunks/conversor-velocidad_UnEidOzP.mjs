globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_UeHtEn6s.mjs";
const $$ConversorVelocidad = createComponent(($$result, $$props, $$slots) => {
  const formulaKmhMs = "V(m/s) = V(km/h) / 3.6";
  const formulaMphKmh = "V(km/h) = V(mph) * 1.60934";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Velocidad Online | Km/h, M/s, Mph y Nudos", "description": "Calculadora profesional de conversión de velocidad. Convierte fácilmente entre km/h, m/s, mph y nudos con fórmulas precisas y guía técnica detallada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Conversor de <span class="text-blue-600">Velocidad</span> 🏎️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
Transforma unidades de rapidez con precisión científica y rapidez
        instantánea.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-3xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-2"> <label for="speedValue" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">
Valor a convertir
</label> <input type="number" id="speedValue" placeholder="Ej: 120" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-2xl outline-none transition-all shadow-inner"> </div> <div class="space-y-2"> <label for="speedUnit" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">
Unidad de origen
</label> <select id="speedUnit" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-lg outline-none transition-all cursor-pointer shadow-inner"> <option value="kmh">Kilómetros por hora (km/h)</option> <option value="ms">Metros por segundo (m/s)</option> <option value="mph">Millas por hora (mph)</option> <option value="knots">Nudos (kn)</option> </select> </div> </div> <button id="calcBtn" class="w-full bg-slate-900 text-white p-6 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-xl mb-10">
Convertir Ahora
</button> <div id="resultsGrid" class="hidden animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div class="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center"> <span class="block text-[10px] font-bold text-blue-400 uppercase mb-1">km/h</span> <div id="vKmh" class="text-xl font-black text-slate-900 font-mono">
--
</div> </div> <div class="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center"> <span class="block text-[10px] font-bold text-blue-400 uppercase mb-1">m/s</span> <div id="vMs" class="text-xl font-black text-slate-900 font-mono">
--
</div> </div> <div class="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center"> <span class="block text-[10px] font-bold text-blue-400 uppercase mb-1">mph</span> <div id="vMph" class="text-xl font-black text-slate-900 font-mono">
--
</div> </div> <div class="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center"> <span class="block text-[10px] font-bold text-blue-400 uppercase mb-1">Nudos</span> <div id="vKn" class="text-xl font-black text-slate-900 font-mono">
--
</div> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic text-balance">
Guía Definitiva sobre la Velocidad y sus Conversiones
</h2> <p class="text-lg leading-relaxed mb-8">
La velocidad es una de las magnitudes fundamentales de la física
        cinemática. Se define como la tasa de cambio de la posición de un objeto
        respecto al tiempo. En un mundo interconectado, la necesidad de un <strong>conversor de velocidad</strong> surge de la diversidad de sistemas de medición. Mientras que el Sistema
        Internacional (SI) prioriza el <strong>metro por segundo (m/s)</strong>,
        la vida cotidiana en la mayoría de los países se rige por los <strong>kilómetros por hora (km/h)</strong>, y la navegación aérea o marítima utiliza los <strong>nudos (kn)</strong>.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4 text-balance">
¿Por qué existen tantas unidades de velocidad?
</h3> <p class="mb-6">
Históricamente, las unidades se adaptaron a las necesidades de cada
        industria. Los <strong>nudos</strong>, por ejemplo, tienen su origen en
        la antigua técnica de lanzar una cuerda con nudos al mar para medir el
        avance de un barco en un tiempo determinado. Las <strong>millas por hora (mph)</strong> son el estándar en Estados Unidos y Reino Unido, herencia del sistema imperial
        británico. Esta fragmentación hace que, tanto en la ciencia como en los viajes
        internacionales, convertir estas cifras sea una tarea recurrente y crítica.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Fórmulas Matemáticas Detalladas
</h3> <p class="mb-6">
Para realizar estas operaciones de manera manual o programática,
        aplicamos factores de conversión constantes basados en la relación
        tiempo/distancia:
</p> <div class="bg-slate-900 text-blue-400 p-8 rounded-3xl mb-10 overflow-x-auto shadow-xl"> <ul class="space-y-4 font-mono text-lg italic"> <li>• De Km/h a M/s: ${formulaKmhMs}</li> <li>• De Mph a Km/h: ${formulaMphKmh}</li> <li>• De Nudos a Km/h: V(km/h) = V(knots) * 1.852</li> </ul> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Análisis de las Unidades Principales
</h3> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="space-y-4"> <h4 class="font-bold text-blue-600 uppercase text-sm tracking-widest">
Metros por Segundo (m/s)
</h4> <p class="text-sm leading-relaxed italic">
Es la unidad base de rapidez en el SI. Se utiliza en cálculos
            científicos de energía cinética y dinámica de fluidos. Un objeto que
            se desplaza a 1 m/s recorre exactamente un metro cada segundo.
</p> </div> <div class="space-y-4"> <h4 class="font-bold text-blue-600 uppercase text-sm tracking-widest">
Kilómetros por Hora (km/h)
</h4> <p class="text-sm leading-relaxed italic">
Utilizada por casi todos los países para el tráfico vehicular. Su
            comprensión es intuitiva para el ser humano: indica cuánta distancia
            recorreremos si mantenemos el ritmo durante una hora completa.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos en la Vida Real
</h3> <p class="mb-6">
Para mejorar tu comprensión, analicemos estos tres escenarios comunes:
</p> <ol class="space-y-6 mb-12"> <li class="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500"> <strong>Deportes y Atletismo:</strong> Usain Bolt alcanzó una velocidad
          máxima de 12.42 m/s. Al usar nuestro conversor, vemos que esto equivale
          a 44.72 km/h. Comprenderlo en km/h nos ayuda a visualizar su rapidez comparada
          con un vehículo en una zona urbana.
</li> <li class="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500"> <strong>Huracanes y Meteorología:</strong> Un huracán de Categoría 1 tiene
          vientos de al menos 64 nudos. Al convertirlo, obtenemos 118.5 km/h, lo cual
          permite a las autoridades locales emitir alertas claras para la población.
</li> <li class="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500"> <strong>Aviación Comercial:</strong> Un avión de pasajeros suele cruzar
          a 500 nudos. Esto representa aproximadamente 926 km/h, casi rozando la velocidad
          del sonido (Mach 1).
</li> </ol> <h3 class="text-2xl font-bold text-slate-800 mb-4 italic">
Tabla de Equivalencias Rápidas
</h3> <div class="overflow-x-auto mb-12"> <table class="w-full text-left border-collapse"> <thead> <tr class="bg-blue-600 text-white"> <th class="p-4 border">km/h</th> <th class="p-4 border">m/s</th> <th class="p-4 border">mph</th> <th class="p-4 border">Nudos</th> </tr> </thead> <tbody class="text-sm font-mono"> <tr><td class="p-4 border">20</td><td class="p-4 border">5.56</td><td class="p-4 border">12.43</td><td class="p-4 border">10.80</td></tr> <tr class="bg-slate-50"><td class="p-4 border">50</td><td class="p-4 border">13.89</td><td class="p-4 border">31.07</td><td class="p-4 border">27.00</td></tr> <tr><td class="p-4 border">100</td><td class="p-4 border">27.78</td><td class="p-4 border">62.14</td><td class="p-4 border">54.00</td></tr> <tr class="bg-slate-50"><td class="p-4 border">120</td><td class="p-4 border">33.33</td><td class="p-4 border">74.56</td><td class="p-4 border">64.79</td></tr> </tbody> </table> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Conclusión Educativa
</h3> <p class="mb-8 leading-relaxed">
Dominar las conversiones de rapidez es esencial para evitar
        malentendidos técnicos. Ya sea que estés estudiando para un examen de
        física, planeando un viaje por carretera en el extranjero o simplemente
        sientas curiosidad por la velocidad de un avión, nuestra herramienta te
        garantiza resultados libres de error humano. Recuerda que la precisión
        es clave en mediciones donde un pequeño decimal puede cambiar
        drásticamente el resultado final.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12"> <p class="text-sm text-slate-400 italic">
"La velocidad es la forma en que el tiempo nos muestra la distancia."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/unidades/conversor-velocidad.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/conversor-velocidad.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/conversor-velocidad.astro";
const $$url = "/unidades/conversor-velocidad";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ConversorVelocidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
