globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$CalculadoraLtv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraLtv;
  const fLTVBasic = "$$ LTV = Valor\\ de\\ Compra\\ Promedio \\times Frecuencia\\ de\\ Compra \\times Vida\\ Útil $$";
  const fLTVReal = "$$ LTV = (Ticket\\ Promedio \\times Frecuencia) \\times Margen\\ % \\times Tiempo $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de LTV (Customer Lifetime Value) | Estrategia de Crecimiento", "description": "Calcula el valor de vida del cliente (LTV) de forma gratuita. Guía completa sobre métricas de retención, fórmulas y cómo optimizar la rentabilidad de tu negocio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-emerald-600">LTV</span> 💎
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Descubre el valor real de tus clientes y cuánto puedes invertir para
        adquirirlos de forma rentable.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <label for="inputTicketLTV" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Ticket Promedio ($)</label> <input type="number" id="inputTicketLTV" placeholder="Ej: 50" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputFrecuenciaLTV" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Compras por Año</label> <input type="number" id="inputFrecuenciaLTV" placeholder="Ej: 12" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputVidaLTV" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Vida Útil (Años)</label> <input type="number" id="inputVidaLTV" placeholder="Ej: 3" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputMargenLTV" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Margen de Ganancia (%)</label> <input type="number" id="inputMargenLTV" placeholder="Ej: 30" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularLTV" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Lifetime Value
</button> <div id="boxResultadoLTV" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 text-center"> <span class="block text-xs font-bold text-emerald-400 uppercase mb-2 tracking-widest">Valor de Vida del Cliente (Neto)</span> <span id="resLTVTotal" class="block text-6xl font-black text-emerald-700">$0</span> </div> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resLTVBruto" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LTV Bruto (Sin considerar margen)</span> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
Lifetime Value (LTV): La Métrica que Separa a los Negocios de Éxito de
        los Fracasos
</h2> <p class="mb-6">
El <strong>Customer Lifetime Value (LTV)</strong> o Valor de Vida del Cliente
        es una estimación de los ingresos totales (o el beneficio neto) que un cliente
        aportará a tu empresa durante todo el tiempo que dure su relación comercial
        contigo. Mientras que muchas empresas se obsesionan con la venta inmediata,
        las compañías más rentables del mundo, como Amazon, Netflix o Starbucks, basan
        toda su estrategia en maximizar el LTV.
</p> <p class="mb-6">
Entender el LTV no es solo una cuestión de contabilidad; es la brújula
        que dicta cuánto puedes permitirte pagar por adquirir un cliente nuevo
        (CAC). Si sabes que un cliente promedio te dejará $1,000 en beneficios a
        lo largo de 5 años, gastar $200 en marketing para conseguirlo es una
        inversión brillante. Pero si tu LTV es de $50 y tu costo de adquisición
        es de $60, estás cavando tu propia tumba financiera.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Por qué el LTV es la métrica más importante hoy?
</h3> <p class="mb-6">
En un mercado digital saturado, el costo de los anuncios en Google y
        Facebook no para de subir. Si tu modelo de negocio depende únicamente de
        la primera compra de un cliente para ser rentable, es muy probable que
        te quedes fuera de juego. El LTV permite mirar más allá de la
        transacción inicial y valorar la <strong>retención</strong> y la <strong>lealtad</strong> como activos financieros tangibles.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Fórmulas para calcular el LTV
</h3> <p class="mb-6">
Existen diferentes niveles de complejidad para calcular esta métrica. La
        fórmula básica (LTV Bruto) se enfoca en la facturación:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fLTVBasic} </div> <p class="mb-6">
Sin embargo, para una toma de decisiones real, los financieros prefieren
        el <strong>LTV Neto</strong>, que incluye el margen de ganancia:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fLTVReal} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Variables clave en el cálculo
</h3> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Ticket Promedio:</strong> El monto medio que el cliente gasta cada
          vez que realiza una compra.
</li> <li> <strong>Frecuencia de Compra:</strong> Cuántas veces el cliente compra en
          tu negocio en un periodo de tiempo (usualmente un año).
</li> <li> <strong>Vida Útil (Churn Rate):</strong> El tiempo promedio que un cliente
          permanece activo antes de dejar de comprar permanentemente.
</li> <li> <strong>Margen de Contribución:</strong> El porcentaje de beneficio que
          queda después de restar los costos variables de producto y servicio.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Relación Crítica: LTV vs CAC
</h3> <p class="mb-6">
La salud de una empresa se mide a menudo por el ratio <strong>LTV:CAC</strong>.
</p> <ul class="list-decimal pl-6 mb-8 space-y-4"> <li> <strong>Ratio 1:1 o menor:</strong> El negocio está perdiendo dinero por
          cada cliente.
</li> <li> <strong>Ratio 3:1:</strong> Es el estándar de oro para negocios escalables
          (especialmente SaaS y Ecommerce).
</li> <li> <strong>Ratio 5:1 o mayor:</strong> Podrías estar creciendo más rápido.
          Quizás estás invirtiendo poco en marketing y dejando que la competencia
          te gane terreno.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Casos de Uso Reales
</h3> <p class="mb-6"> <strong>1. Segmentación de Clientes:</strong> No todos los clientes valen
        lo mismo. El LTV permite identificar al 20% de tus clientes que generan el
        80% de tus beneficios para tratarlos con programas de lealtad exclusivos (VIP).
</p> <p class="mb-6"> <strong>2. Determinación de Presupuesto:</strong> Permite al equipo de marketing
        saber exactamente cuál es su "CPA Máximo" (Costo por Adquisición Máximo) sin
        comprometer el flujo de caja.
</p> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de LTV
</h2> <div class="space-y-12 mb-20"> <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100"> <h3 class="text-xl font-bold text-emerald-900 mb-4">
Ejemplo 1: Una Suscripción de Software (SaaS)
</h3> <p class="mb-4">
Un usuario paga $20 al mes. El margen de la empresa es del 80%. El
            usuario promedio permanece suscrito durante 24 meses.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Ticket:</strong> $20 | <strong>Frecuencia:</strong> 12 (anual)
                | <strong>Vida:</strong> 2 años | <strong>Margen:</strong> 80%
</li> <li> <strong>Cálculo Bruto:</strong> $$ 20 \\times 12 \\times 2 = 480 $$
</li> <li> <strong>Cálculo Neto (LTV):</strong> $$ 480 \\times 0.80 = 384 $$
</li> <li> <strong>Resultado:</strong> Cada cliente vale <strong>$384</strong> en beneficios.
</li> </ul> </div> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Una Cafetería Local
</h3> <p class="mb-4">
Un cliente gasta $5 por visita, va 2 veces por semana (104 veces al
            año) y suele ser fiel por 5 años. El margen es del 70%.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Ticket:</strong> $5 | <strong>Frecuencia:</strong> 104 | <strong>Vida:</strong> 5 | <strong>Margen:</strong> 70%
</li> <li> <strong>Cálculo:</strong> $$ (5 \\times 104 \\times 5) \\times 0.70 $$
</li> <li> <strong>Resultado:</strong> El LTV es de <strong>$1,820</strong>. ¡Ese café de $5 es muy valioso!
</li> </ul> </div> </div> <div class="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100"> <h3 class="text-xl font-bold text-indigo-900 mb-4">
Ejemplo 3: Ecommerce de Moda
</h3> <p class="mb-4">
Compra promedio de $80, 2 veces al año, vida útil de 3 años, margen
            del 40%.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Ticket:</strong> $80 | <strong>Frecuencia:</strong> 2 | <strong>Vida:</strong> 3 | <strong>Margen:</strong> 40%
</li> <li> <strong>Cálculo:</strong> $$ (80 \\times 2 \\times 3) \\times 0.40 $$
</li> <li> <strong>Resultado:</strong> El valor de vida neto es de <strong>$192</strong>.
</li> </ul> </div> </div> </div> <h2 class="text-2xl font-bold text-slate-800 mb-4">
Cómo aumentar el LTV de tu negocio
</h2> <ul class="list-disc pl-6 mb-12 space-y-4"> <li> <strong>Email Marketing:</strong> Envía ofertas personalizadas para aumentar
          la frecuencia de compra.
</li> <li> <strong>Suscripciones:</strong> Convierte ventas únicas en ingresos recurrentes
          para extender la vida útil.
</li> <li> <strong>Servicio al Cliente:</strong> Una excelente atención reduce la tasa
          de abandono (Churn).
</li> <li> <strong>Upselling:</strong> Ofrece versiones premium para aumentar el ticket
          promedio.
</li> </ul> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-emerald-400 font-bold mb-2">Consejo Estratégico:</p> <p class="text-sm text-slate-400">
"Enamorar a un cliente antiguo es hasta 7 veces más barato que
          conquistar a uno nuevo. El LTV es la prueba financiera de que la
          fidelidad paga."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-ltv.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-ltv.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-ltv.astro";
const $$url = "/utiles/calculadora-ltv/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraLtv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
