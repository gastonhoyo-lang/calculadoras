/* empty css                                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CWBS5BnD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Edad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Edad Exacta | \xBFCu\xE1ntos d\xEDas y horas viviste?", "description": "Descubr\xED tu edad exacta en a\xF1os, meses, d\xEDas y hasta segundos. Una herramienta precisa para conocer tu cronolog\xEDa personal en el mundo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <header class="text-center mb-12"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
Tu Tiempo en el <span class="text-emerald-500">Mundo</span> 🌍
</h1> <p class="text-slate-500 text-lg font-medium">
Ingresá tu fecha de nacimiento y descubrí tu historia en números.
</p> </header> <div class="max-w-md mx-auto mb-16"> <div class="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-3 text-center tracking-widest">Fecha de Nacimiento</label> <input type="date" id="fechaNac" class="w-full p-5 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-emerald-500 outline-none font-black text-2xl text-slate-700 text-center transition-all"> </div> <button id="btnEdad" class="w-full bg-emerald-500 text-white p-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 active:scale-95 text-xl">
¡Calcular mi tiempo!
</button> </div> </div> <div id="resEdad" class="hidden grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 animate-in zoom-in duration-500"> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-center shadow-sm"> <p class="text-slate-400 text-xs font-bold uppercase mb-2">Años</p> <span id="resAnios" class="text-4xl font-black text-emerald-600"></span> </div> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-center shadow-sm"> <p class="text-slate-400 text-xs font-bold uppercase mb-2">Meses</p> <span id="resMeses" class="text-4xl font-black text-emerald-600"></span> </div> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-center shadow-sm"> <p class="text-slate-400 text-xs font-bold uppercase mb-2">Días</p> <span id="resDias" class="text-4xl font-black text-emerald-600"></span> </div> <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-center shadow-sm"> <p class="text-slate-400 text-xs font-bold uppercase mb-2">Horas</p> <span id="resHoras" class="text-4xl font-black text-emerald-600"></span> </div> </div> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 pb-20 text-slate-600"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-black text-slate-800 mb-6">
¿Qué es la edad cronológica?
</h2> <p class="leading-relaxed">
La <strong>edad cronológica</strong> es el tiempo total que ha transcurrido
            desde el momento de tu nacimiento hasta el presente. Aunque solemos medirla
            en años, expresar tu vida en días u horas te ofrece una perspectiva única
            sobre lo valioso de cada momento.
</p> <p class="mt-4">
Nuestra calculadora utiliza algoritmos que consideran los <strong>años bisiestos</strong> y la duración exacta de los meses para darte una cifra con precisión
            matemática.
</p> </div> <div class="bg-slate-900 text-white p-8 rounded-[2.5rem]"> <h3 class="text-xl font-bold mb-4 text-emerald-400">
Curiosidades del tiempo
</h3> <ul class="space-y-4 text-sm text-slate-300"> <li class="flex gap-3 items-start"> <span class="text-emerald-400">●</span> <span>En promedio, el corazón de un adulto late unas 100,000 veces al
                día.</span> </li> <li class="flex gap-3 items-start"> <span class="text-emerald-400">●</span> <span>Cada 7 a 10 años, tu cuerpo reemplaza casi todas sus células.
                ¡Sos una persona nueva!</span> </li> <li class="flex gap-3 items-start"> <span class="text-emerald-400">●</span> <span>Pasamos aproximadamente un tercio de nuestra vida durmiendo.</span> </li> </ul> </div> </div> <div class="mt-16 bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 text-center"> <h3 class="text-2xl font-black text-emerald-900 mb-4 text-balance">
¿Por qué calcular tu edad en días?
</h3> <p class="text-slate-700 max-w-2xl mx-auto">
Es una excelente manera de celebrar "hitos no convencionales". Por
          ejemplo, cuando cumplís 10,000 días de vida (aproximadamente a los 27
          años) o 20,000 días (cerca de los 54). Es una excusa perfecta para
          agradecer y reflexionar.
</p> </div> </article> </div> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/varios/edad.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/varios/edad.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/varios/edad.astro";
const $$url = "/varios/edad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
