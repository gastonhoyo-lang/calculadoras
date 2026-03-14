globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$TiempoDeLectura = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TiempoDeLectura;
  const fTL = "$$ T_L = \\frac{W}{W_{pm}} $$";
  const fV = "$$ W_{pm} \\approx 200-250 $$";
  const fE1 = "$$ 1200 \\div 200 = 6 \\text{ minutos} $$";
  const fE2 = "$$ 450 \\div 150 = 3 \\text{ minutos} $$";
  const fE3 = "$$ 2500 \\div 220 \\approx 11.3 \\text{ minutos} $$";
  const fE4 = "$$ 1600 \\div 160 = 10 \\text{ minutos de locución} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Tiempo de Lectura | Herramienta SEO y UX", "description": "Calculá cuánto tardará un usuario en leer tu contenido. Optimizá la retención de audiencia y mejorá el SEO de tu blog con el tiempo de lectura estimado." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-emerald-600">Tiempo de Lectura</span> ⏱️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Mejorá la experiencia de usuario (UX) indicando cuánto tiempo requiere
        cada artículo de tu web.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="space-y-6"> <div class="space-y-3"> <label for="txtRead" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Pegá tu contenido aquí</label> <textarea id="txtRead" placeholder="Introduce el texto para analizar su duración estimada..." class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-emerald-500 font-medium text-lg outline-none transition-all shadow-inner min-h-[300px]"></textarea> </div> <div class="grid md:grid-cols-2 gap-6"> <div class="space-y-3"> <label for="wpmInput" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Velocidad (Palabras por Minuto)</label> <input type="number" id="wpmInput" value="200" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="flex items-end"> <button id="btnCalcRead" class="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95 text-lg">
Calcular Tiempo
</button> </div> </div> </div> <div id="resBoxRead" class="hidden mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center"> <span id="resMinutes" class="block text-4xl font-black text-emerald-700">0</span> <span class="text-xs font-bold text-emerald-400 uppercase tracking-tighter">Minutos de lectura</span> </div> <div class="bg-slate-900 p-6 rounded-3xl text-center"> <span id="resTotalWords" class="block text-4xl font-black text-white">0</span> <span class="text-xs font-bold text-slate-400 uppercase tracking-tighter">Total Palabras</span> </div> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center flex flex-col justify-center"> <span id="resTotalSecs" class="text-xl font-bold text-slate-700">0 segundos</span> <span class="text-[10px] text-slate-400 font-bold uppercase mt-1">Duración exacta</span> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic underline decoration-emerald-500 decoration-4 underline-offset-8">
El impacto del tiempo de lectura en la retención del usuario
</h2> <p class="mb-6">
En el ecosistema digital actual, la atención es el recurso más escaso.
        Cuando un usuario aterriza en un artículo de blog, realiza una
        evaluación inconsciente en menos de 3 segundos: <strong>¿vale la pena el esfuerzo de leer esto?</strong> Proporcionar un <strong>tiempo de lectura estimado</strong> es una técnica
        de diseño centrado en el usuario (UX) que reduce la incertidumbre y mejora
        la predisposición mental del lector.
</p> <p class="mb-6">
Estudios de comportamiento en la web demuestran que los artículos que
        incluyen esta pequeña métrica al inicio tienen una tasa de rebote
        significativamente menor. Esto se debe a que el cerebro humano prefiere
        las tareas con un "final a la vista". Si el lector sabe que la
        información que busca le tomará solo 4 minutos, es mucho más probable
        que se quede hasta el final que si se encuentra con un muro de texto de
        extensión desconocida.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Cómo se calcula técnicamente el tiempo de lectura?
</h3> <p class="mb-6">
Aunque parezca una estimación subjetiva, existe una base matemática
        sólida detrás de estos contadores. La fórmula estándar utiliza el
        recuento total de palabras y lo divide por la velocidad media de
        procesamiento cognitivo de un adulto.
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center shadow-inner"> <p class="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest text-center">
Fórmula Estándar de Lectura
</p> ${fTL} </div> <p class="mb-6">
En esta ecuación, <strong>W</strong> representa el número total de palabras
        (limpias de códigos HTML o etiquetas) y <strong>W_pm</strong> representa las
        palabras por minuto. La gran pregunta es: ¿cuántas palabras leemos realmente
        por minuto?
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Velocidades de lectura según el perfil del contenido
</h3> <p class="mb-4">
No leemos igual una novela ligera que un manual de ingeniería. Por eso,
        para que tu calculadora sea profesional, debés considerar estas
        variables:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center shadow-inner"> <p class="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest text-center">
Media General en Pantalla
</p> ${fV} </div> <div class="grid md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center"> <h4 class="font-bold text-emerald-600 mb-2">Lectores Lentos</h4> <p class="text-3xl font-black text-slate-900 mb-2">100-150</p> <p class="text-xs text-slate-500 uppercase font-bold tracking-tighter">
WPM (Contenido Técnico)
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center"> <h4 class="font-bold text-emerald-600 mb-2">Media Estándar</h4> <p class="text-3xl font-black text-slate-900 mb-2">200-250</p> <p class="text-xs text-slate-500 uppercase font-bold tracking-tighter">
WPM (Blogs y Noticias)
</p> </div> <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center"> <h4 class="font-bold text-emerald-600 mb-2">Lectores Rápidos</h4> <p class="text-3xl font-black text-slate-900 mb-2">300+</p> <p class="text-xs text-slate-500 uppercase font-bold tracking-tighter">
WPM (Escaneo o Skimming)
</p> </div> </div> <h2 class="text-3xl font-black text-slate-900 mb-6 italic underline decoration-emerald-500 decoration-4 underline-offset-8">
Ejemplos Prácticos y Casos de Uso
</h2> <p class="mb-8 text-lg font-medium text-slate-600">
A continuación, analizamos diferentes escenarios donde calcular el
        tiempo de lectura es vital para el éxito del contenido:
</p> <section class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"> <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
Estrategia de Blog SEO (Long-form)
</h4> <p class="mb-4">
Si estás redactando una "Guía Definitiva" de 1200 palabras, el
            cálculo es directo:
</p> <div class="bg-white p-4 rounded-2xl mb-4 text-center border border-slate-200 font-mono italic"> ${fE1} </div> <p class="text-sm text-slate-500 italic"> <strong>Análisis:</strong> 6 minutos es el "punto dulce" para artículos
            de autoridad. Si superas los 10 minutos, considera dividir el post en
            dos partes.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"> <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
Newsletter Semanal
</h4> <p class="mb-4">
Para correos electrónicos, la brevedad es ley. Un email de 450
            palabras:
</p> <div class="bg-white p-4 rounded-2xl mb-4 text-center border border-slate-200 font-mono italic"> ${fE2} </div> <p class="text-sm text-slate-500 italic"> <strong>Análisis:</strong> Indicar "Lectura de 3 min" en el asunto del
            email puede aumentar el Open Rate un 15%.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"> <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
Contenido Académico o Legal
</h4> <p class="mb-4">
En textos complejos, la velocidad cae a unas 180-220 WPM. Para un
            PDF de 2500 palabras:
</p> <div class="bg-white p-4 rounded-2xl mb-4 text-center border border-slate-200 font-mono italic"> ${fE3} </div> <p class="text-sm text-slate-500 italic"> <strong>Análisis:</strong> Al ser un tiempo largo, es crucial añadir un
            Índice de Contenidos (TOC) para que el usuario no se sienta perdido.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"> <span class="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
Guion para Video de YouTube
</h4> <p class="mb-4">
Para creadores de contenido, la velocidad de habla es de unas 160
            WPM. Si querés un video de 10 minutos:
</p> <div class="bg-white p-4 rounded-2xl mb-4 text-center border border-slate-200 font-mono italic"> ${fE4} </div> </div> </section> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Cómo optimizar el tiempo de lectura para mejorar el SEO?
</h3> <p class="mb-6">
No se trata de hacer los textos más cortos, sino más legibles. Aquí hay
        3 consejos técnicos:
</p> <ul class="list-none pl-0 space-y-4 mb-12 text-slate-600"> <li class="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-100"> <span class="text-emerald-500 font-black">✓</span> <span><strong>Uso de Subtítulos (H2, H3):</strong> Permiten que el lector "escanee"
            el contenido antes de decidir leer cada palabra.</span> </li> <li class="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-100"> <span class="text-emerald-500 font-black">✓</span> <span><strong>Regla de los 3 Párrafos:</strong> Nunca escribas más de 3 párrafos
            seguidos sin una imagen, un listado o una cita que rompa la monotonía
            visual.</span> </li> <li class="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-100"> <span class="text-emerald-500 font-black">✓</span> <span><strong>Imágenes y Gráficos:</strong> Las imágenes detienen el desplazamiento
            rápido y obligan al ojo a enfocarse, aumentando el tiempo real en página.</span> </li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Conclusión y Recomendaciones Finales
</h3> <p class="mb-10">
Incluir una <strong>calculadora de tiempo de lectura</strong> o simplemente
        el dato en tus posts es una de las mejoras de UX más sencillas y efectivas
        que podés implementar hoy mismo. Recordá que el objetivo no es engañar al
        lector, sino ser honesto sobre la inversión de tiempo que le pedís a cambio
        de tu conocimiento.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-emerald-400 font-bold mb-2">Consejo SEO Técnico:</p> <p class="text-sm text-slate-400">
Podés automatizar esto en Astro usando un plugin de
          remark-reading-time para que cada post de tu blog calcule su tiempo de
          forma dinámica durante el build.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/seo/tiempo-de-lectura.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/seo/tiempo-de-lectura.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/seo/tiempo-de-lectura.astro";
const $$url = "/seo/tiempo-de-lectura/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TiempoDeLectura,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
