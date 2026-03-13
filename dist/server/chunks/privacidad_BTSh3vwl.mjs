globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Qn_nxSdm.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_rwkGNOqY.mjs";
import { $ as $$Layout } from "./Layout_UeHtEn6s.mjs";
const $$Privacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Políticas de Privacidad y Términos de Uso | Chieffin", "description": "Información sobre el tratamiento de datos, uso de cookies y términos de servicio de las herramientas de Chieffin." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <header class="mb-12 border-b border-slate-100 pb-8"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Privacidad y <span class="text-indigo-600">Transparencia</span> </h1> <p class="text-slate-500 font-medium italic text-sm italic">
Última actualización: Marzo 2026
</p> </header> <article class="prose prose-slate prose-indigo max-w-none space-y-8 text-slate-600"> <section> <h2 class="text-2xl font-black text-slate-800">
1. Privacidad de los Datos
</h2> <p>
En <strong>Chieffin</strong>, la privacidad de nuestros usuarios es la
          prioridad número uno. Queremos que sepas que <strong>no almacenamos ni procesamos en nuestros servidores</strong> los datos personales que ingresás en nuestras calculadoras (como sueldos,
          pesos, medidas o deudas).
</p> <p class="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500 text-sm font-medium">
La lógica de cálculo se ejecuta localmente en tu navegador
          (Client-Side). Esto significa que la información nunca sale de tu
          dispositivo.
</p> </section> <section> <h2 class="text-2xl font-black text-slate-800">
2. Cookies y Publicidad
</h2> <p>
Utilizamos servicios de terceros como <strong>Google AdSense</strong> y
<strong>Google Analytics</strong> que pueden utilizar cookies para:
</p> <ul class="list-disc pl-6 space-y-2 text-sm"> <li>
Mostrar anuncios basados en tus visitas previas a este u otros
            sitios web.
</li> <li>
Analizar el tráfico de forma anónima para mejorar la experiencia del
            usuario.
</li> </ul> <p>
Podés inhabilitar la publicidad personalizada visitando la <a href="https://www.google.com/settings/ads" target="_blank" class="text-indigo-600 underline">Configuración de anuncios de Google</a>.
</p> </section> <section> <h2 class="text-2xl font-black text-slate-800">
3. Exención de Responsabilidad
</h2> <p>
Si bien trabajamos para asegurar que todas nuestras fórmulas sean
          exactas y estén actualizadas, las herramientas de Chieffin se
          proporcionan "tal cual", con fines informativos y educativos
          únicamente.
</p> <ul class="list-disc pl-6 space-y-2 text-sm"> <li> <strong>Finanzas:</strong> Los cálculos son estimaciones y no deben considerarse
            asesoramiento financiero profesional.
</li> <li> <strong>Salud:</strong> El IMC y otras métricas son referencias generales
            y no reemplazan la consulta médica.
</li> <li> <strong>Construcción:</strong> Recomendamos siempre consultar con un profesional
            antes de realizar compras de materiales a gran escala.
</li> </ul> </section> <section> <h2 class="text-2xl font-black text-slate-800">4. Contacto</h2> <p>
Si tenés dudas sobre estos términos, podés escribirnos a través de
          nuestra <a href="/contacto" class="text-indigo-600 font-bold hover:underline">página de contacto</a>.
</p> </section> </article> </div> ` })}`;
}, "C:/proyectos/seo-tools/src/pages/privacidad.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/privacidad.astro";
const $$url = "/privacidad";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Privacidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
