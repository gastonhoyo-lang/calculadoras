/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$FrecuenciaCardiaca = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Frecuencia Card\xEDaca M\xE1xima | Zonas de Entrenamiento", "description": "Calcul\xE1 tu FC M\xE1xima con la f\xF3rmula de Tanaka. Conoc\xE9 tus pulsaciones por minuto ideales para quemar grasa o mejorar resistencia." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4">
Frecuencia <span class="text-red-600">Cardíaca</span> ❤️
</h1> <p class="text-slate-500 text-lg font-medium">
Optimizá tu entrenamiento con datos precisos.
</p> </header> <div class="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-50 max-w-md mx-auto text-center mb-16"> <h2 class="text-xl font-bold mb-6 text-slate-700 uppercase tracking-tight">
Tu Perfil
</h2> <div class="space-y-4"> <input type="number" id="edadFC" placeholder="Ingresá tu edad" class="w-full p-5 bg-slate-50 rounded-2xl outline-none font-black text-center text-2xl border-2 border-transparent focus:border-red-500 transition-all"> <button id="btnFC" class="w-full bg-red-600 text-white p-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-95">
Calcular FC Máx
</button> </div> <div id="resFC" class="hidden mt-10 space-y-4 animate-in fade-in zoom-in"> <div class="p-6 bg-slate-900 rounded-[2rem] text-white"> <p class="text-red-400 font-bold uppercase text-xs mb-2">
Máximo Estimado
</p> <div class="text-5xl font-black"> <span id="valFC"></span> <small class="text-lg uppercase">PPM</small> </div> </div> <div class="pt-4 border-t border-slate-100"> <p class="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
Fórmula de Tanaka
</p> <p class="text-xs text-slate-500 font-mono">208 - (0.7 x edad)</p> </div> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Por qué calcular tu FC Máxima?
</h2> <p>
La <strong>frecuencia cardíaca máxima (FC Máx)</strong> es el límite teórico
            de latidos por minuto que tu corazón puede alcanzar bajo un esfuerzo máximo.
            Conocer este número es fundamental para entrenar de forma segura y eficiente.
</p> <p class="mt-4">
Al saber tu máximo, podés calcular tus <strong>zonas de entrenamiento</strong> para quemar grasa, mejorar tu capacidad aeróbica o aumentar tu umbral
            anaeróbico.
</p> </div> <div class="bg-red-50 p-8 rounded-[2rem] border border-red-100"> <h3 class="text-xl font-bold text-red-900 mb-4">
Zonas de Intensidad
</h3> <ul class="space-y-3 text-sm text-red-800"> <li> <strong>Zona 1 (50-60%):</strong> Recuperación activa y calentamiento.
</li> <li> <strong>Zona 2 (60-70%):</strong> Zona de quema de grasas y base aeróbica.
</li> <li> <strong>Zona 3 (70-80%):</strong> Mejora de la resistencia cardiovascular.
</li> <li> <strong>Zona 4 (80-90%):</strong> Aumento de potencia y velocidad.
</li> <li> <strong>Zona 5 (90-100%):</strong> Esfuerzo máximo (atleta de élite).
</li> </ul> </div> </div> <div class="mt-16 grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-10 rounded-[2.5rem]"> <div> <h3 class="text-2xl font-bold text-slate-800 mb-4 text-center md:text-left">
Tanaka vs Fox-Haskell
</h3> <p class="text-sm leading-relaxed">
Durante décadas se usó la fórmula clásica "220 - edad". Sin embargo,
            estudios modernos demostraron que la <strong>fórmula de Tanaka</strong> [208 - (0.7 x edad)] es mucho más precisa para adultos de todas las
            edades, ya que no subestima la frecuencia en personas mayores ni la sobreestima
            en jóvenes.
</p> </div> <div class="text-center p-6 bg-white rounded-3xl border border-slate-200 shadow-sm"> <span class="block text-slate-400 text-xs font-bold mb-2 uppercase">Dato Curioso</span> <p class="text-slate-700 font-medium">
Un corazón sano en reposo suele latir entre 60 y 100 veces por
            minuto.
</p> </div> </div> <div class="mt-16 text-center"> <p class="text-xs text-slate-400 italic"> <strong>Aviso:</strong> Este cálculo es una estimación estadística. Si tenés
          condiciones cardíacas, tomás medicación o vas a empezar un programa de alta
          intensidad, consultá con un cardiólogo para realizar una prueba de esfuerzo
          profesional.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro";
const $$url = "/salud/frecuencia-cardiaca";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FrecuenciaCardiaca,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
