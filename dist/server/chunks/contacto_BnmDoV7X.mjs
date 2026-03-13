globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout } from "./Layout_UeHtEn6s.mjs";
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto y Acerca de | Chieffin", "description": "Conocé más sobre el proyecto Chieffin, nuestra misión de simplificar cálculos diarios y cómo ponerte en contacto con nosotros." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-16"> <div class="grid md:grid-cols-2 gap-16 items-center"> <section class="space-y-6"> <span class="text-indigo-600 font-black uppercase tracking-widest text-xs italic">Sobre el Proyecto</span> <h1 class="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
Cuentas claras, <br> <span class="text-slate-400">decisiones simples.</span> </h1> <p class="text-slate-600 leading-relaxed font-medium">
Chieffin nació con una misión simple: <strong>democratizar el acceso a herramientas de cálculo precisas.</strong>
En un mundo lleno de publicidad invasiva y sitios lentos, decidimos crear
          un espacio minimalista, rápido y 100% gratuito.
</p> <div class="space-y-4 pt-4"> <div class="flex gap-4 items-start"> <div class="bg-indigo-100 p-2 rounded-lg text-xl">🚀</div> <div> <h4 class="font-bold text-slate-800">Tecnología de punta</h4> <p class="text-xs text-slate-500">
Desarrollado con Astro para una carga instantánea y privacidad
                total de datos.
</p> </div> </div> <div class="flex gap-4 items-start"> <div class="bg-emerald-100 p-2 rounded-lg text-xl">⚖️</div> <div> <h4 class="font-bold text-slate-800">Transparencia</h4> <p class="text-xs text-slate-500">
Nuestras fórmulas son estándares internacionales y
                matemáticamente verificadas.
</p> </div> </div> </div> </section> <div class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-indigo-500/5"> <h2 class="text-2xl font-black text-slate-900 mb-6">
¿Tenés una sugerencia?
</h2> <p class="text-slate-500 text-sm mb-8">
¿Falta alguna calculadora? ¿Encontraste un error? Escribinos y lo
          revisamos.
</p> <form action="#" class="space-y-4"> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Nombre</label> <input type="text" placeholder="Tu nombre" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-medium"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Email</label> <input type="email" placeholder="hola@tuemail.com" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-medium"> </div> <div> <label class="block text-xs font-bold text-slate-400 uppercase mb-2 ml-2">Mensaje</label> <textarea rows="4" placeholder="¿En qué podemos ayudarte?" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-medium resize-none"></textarea> </div> <button class="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-lg">
Enviar Mensaje
</button> </form> </div> </div> <div class="mt-20 pt-10 border-t border-slate-100 text-center"> <p class="text-slate-400 text-sm font-medium">
También podés contactarnos directamente en: <br> <a href="mailto:soporte@chieffin.com" class="text-indigo-600 font-bold hover:underline">chieffin.soporte@gmail.com</a> </p> </div> </div> ` })}`;
}, "C:/proyectos/seo-tools/src/pages/contacto.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/contacto.astro";
const $$url = "/contacto";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
