globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$CalculadoraInversionAportesPeriodicos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraInversionAportesPeriodicos;
  const fInteresCompuestoAportes = "$$ VF = P(1 + r)^n + PMT \\left[ \\frac{(1 + r)^n - 1}{r} \\right] $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Inversión con Aportes Periódicos | Crece tu Patrimonio", "description": "Calcula cuánto dinero tendrás en el futuro sumando un capital inicial más aportes mensuales. Interés compuesto explicado con ejemplos prácticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-indigo-600">Inversión Periódica</span> 📈
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Descubrí el poder del interés compuesto sumando aportes constantes a tus
        ahorros.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 mb-8"> <div class="space-y-4"> <label for="inputCapitalIni" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Inversión Inicial</label> <input type="number" id="inputCapitalIni" placeholder="Ej: 1000" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputAporteMens" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Aporte Mensual</label> <input type="number" id="inputAporteMens" placeholder="Ej: 200" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputTasaAnual" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Tasa Anual (%)</label> <input type="number" step="0.1" id="inputTasaAnual" placeholder="Ej: 8" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all shadow-inner font-bold"> </div> <div class="space-y-4"> <label for="inputAniosInv" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Plazo (Años)</label> <input type="number" id="inputAniosInv" placeholder="Ej: 10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all shadow-inner font-bold"> </div> </div> <button id="btnCalcularInvPeriodica" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular Futuro Financiero
</button> <div id="boxResultadoInv" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="bg-indigo-50 p-10 rounded-[2.5rem] border border-indigo-100 text-center"> <span class="block text-xs font-bold text-indigo-400 uppercase mb-2 tracking-widest">Valor Final Estimado</span> <span id="resValorFinal" class="block text-6xl font-black text-indigo-700">$0</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resTotalInvertido" class="block text-xl font-bold text-slate-800">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Aportado</span> </div> <div class="bg-slate-50 p-6 rounded-3xl text-center"> <span id="resInteresesGanados" class="block text-xl font-bold text-emerald-600">$0</span> <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intereses Generados</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
La Magia de la Inversión con Aportes Periódicos
</h2> <p class="mb-6">
Invertir una suma fija de dinero una sola vez es una excelente
        estrategia, pero la verdadera aceleración de la riqueza ocurre cuando
        combinamos el <strong>interés compuesto</strong> con la disciplina de los
<strong>aportes periódicos</strong>. Este concepto, conocido en inglés
        como <em>Dollar Cost Averaging</em> aplicado al ahorro, permite que el capital
        crezca de forma exponencial, ya que no solo ganamos intereses sobre el monto
        inicial, sino sobre cada nueva inyección de capital y sobre los intereses
        acumulados previamente.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Qué es la inversión periódica?
</h3> <p class="mb-6">
La inversión periódica consiste en destinar una cantidad fija de dinero
        (mensual, trimestral o anual) a un vehículo financiero de manera
        recurrente. Esta práctica elimina uno de los mayores miedos del
        inversor: el "Market Timing" o intentar adivinar cuándo es el mejor
        momento para comprar. Al aportar todos los meses, compramos más activos
        cuando los precios están bajos y menos cuando están altos, promediando
        el costo y reduciendo la volatilidad emocional.
</p> <p class="mb-6">
En términos de matemática financiera, estamos ante una <strong>anualidad ordinaria</strong> combinada con un capital inicial. Mientras que el ahorro tradicional guarda
        dinero bajo el colchón, la inversión periódica pone ese dinero a trabajar
        inmediatamente, generando una bola de nieve que, con el tiempo suficiente,
        se vuelve imparable.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula Matemática del Crecimiento Exponencial
</h3> <p class="mb-6">
Para calcular cuánto dinero tendrás en el futuro, debemos sumar dos
        componentes: el crecimiento del capital inicial y el crecimiento de la
        serie de aportes mensuales. La fórmula se expresa de la siguiente
        manera:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center font-serif text-xl"> ${fInteresCompuestoAportes} </div> <p class="mb-6">Las variables que componen esta fórmula son:</p> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>VF (Valor Final):</strong> El monto total que tendrás al final del
          plazo.
</li> <li><strong>P (Principal):</strong> Tu inversión o capital inicial.</li> <li> <strong>PMT (Pago):</strong> El monto del aporte periódico (mensual en esta
          calculadora).
</li> <li> <strong>r (Tasa de interés):</strong> La tasa de interés por periodo (si
          la tasa es anual y el aporte mensual, se divide por 12).
</li> <li> <strong>n (Número de periodos):</strong> El número total de veces que se
          capitaliza el interés (años multiplicado por 12).
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
El impacto del tiempo y la consistencia
</h3> <p class="mb-6">
Existen tres factores que determinan el éxito de tu plan de inversión:
        la cantidad de dinero aportada, la tasa de rendimiento y, el más
        importante de todos, el <strong>tiempo</strong>. Una persona que empieza
        a invertir $100 al mes a los 20 años terminará con un patrimonio
        significativamente mayor que alguien que empieza a los 40 invirtiendo
        $300, incluso si el segundo aporta más dinero total de su bolsillo.
</p> <p class="mb-6">
Esto sucede porque en los primeros años del plan, el crecimiento es
        lento. Sin embargo, después de la primera década, los intereses
        generados cada mes empiezan a ser mayores que el aporte mensual que tú
        realizas. En ese punto, el sistema se vuelve autónomo y el crecimiento
        se vuelve vertical.
</p> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos Desarrollados Paso a Paso
</h2> <div class="space-y-12 mb-20"> <div class="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100"> <h3 class="text-xl font-bold text-indigo-900 mb-4">
Ejemplo 1: El Ahorrador Joven
</h3> <p class="mb-4">
Supongamos un joven de 25 años que inicia con $0, pero decide
            invertir $200 todos los meses en un fondo que rinde un 8% anual
            durante 30 años.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Inversión Inicial:</strong> $0</li> <li><strong>Aporte Mensual:</strong> $200</li> <li><strong>Tasa Mensual:</strong> 0.08 / 12 = 0.00666</li> <li><strong>Meses:</strong> 30 * 12 = 360</li> </ul> </div> <p class="text-sm font-medium text-indigo-800"> <strong>Resultado:</strong> Al final de los 30 años, tendrá aproximadamente
<strong>$298,000</strong>. Lo increíble es que él solo puso de su
            bolsillo $72,000; los otros $226,000 son puros intereses.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h3 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Inyección de Capital Inicial
</h3> <p class="mb-4">
Un profesional tiene ahorrados $10,000 y decide sumarle $500 al mes
            con un rendimiento del 10% anual durante 15 años.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li><strong>Inversión Inicial:</strong> $10,000</li> <li><strong>Aporte Mensual:</strong> $500</li> <li><strong>Tasa:</strong> 10% anual</li> <li><strong>Plazo:</strong> 15 años</li> </ul> </div> <p class="text-sm font-medium text-slate-800"> <strong>Resultado:</strong> El capital final será de <strong>$251,000</strong>. El capital inicial de $10k se transformó en $44k, mientras que
            los aportes mensuales hicieron el resto del trabajo pesado.
</p> </div> <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100"> <h3 class="text-xl font-bold text-emerald-900 mb-4">
Ejemplo 3: Plan de Retiro Agresivo
</h3> <p class="mb-4">
Alguien que desea jubilarse pronto aporta $1,500 mensuales
            comenzando con $5,000, a una tasa del 7% anual durante 20 años.
</p> <div class="bg-white p-6 rounded-2xl mb-4"> <ul class="text-sm space-y-2"> <li> <strong>Valores:</strong> P=$5,000 | PMT=$1,500 | r=7% | n=20 años
</li> <li> <strong>Cálculo:</strong> Se aplica la fórmula de anualidades para
                240 meses.
</li> </ul> </div> <p class="text-sm font-medium text-emerald-800"> <strong>Resultado:</strong> El valor final asciende a <strong>$784,000</strong>. El total invertido fue de $365,000, logrando duplicar el dinero
            gracias a la capitalización mensual.
</p> </div> </div> <h2 class="text-2xl font-bold text-slate-800 mb-4">
Consejos para maximizar tu inversión
</h2> <ul class="list-disc pl-6 mb-12 space-y-4"> <li> <strong>Automatiza el proceso:</strong> Configura una transferencia automática
          a tu cuenta de inversión apenas cobres tu sueldo. Si no ves el dinero, no
          lo extrañas.
</li> <li> <strong>Aumenta tus aportes con la inflación:</strong> Si tu sueldo sube
          cada año, intenta subir tu aporte mensual en la misma proporción para mantener
          el poder adquisitivo de tu ahorro futuro.
</li> <li> <strong>Reinvierte los dividendos:</strong> No retires las ganancias. Deja
          que se sumen al capital para que la fórmula del interés compuesto funcione
          a máxima potencia.
</li> </ul> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-indigo-400 font-bold mb-2">Reflexión Financiera:</p> <p class="text-sm text-slate-400">
"El mejor momento para empezar a invertir fue hace 20 años. El segundo
          mejor momento es hoy." No subestimes el poder de un pequeño aporte
          constante.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-inversion-aportes-periodicos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-inversion-aportes-periodicos.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-inversion-aportes-periodicos.astro";
const $$url = "/utiles/calculadora-inversion-aportes-periodicos/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraInversionAportesPeriodicos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
