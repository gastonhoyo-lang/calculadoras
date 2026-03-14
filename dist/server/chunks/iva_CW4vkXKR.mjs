globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$Iva = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Iva;
  const formulaIVA = "$$ \\text{IVA} = \\text{Precio Neto} \\times \\left( \\frac{\\text{Tasa IVA}}{100} \\right) $$";
  const formulaTotal = "$$ \\text{Total} = \\text{Precio Neto} + \\text{IVA} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de IVA | Sumar y Restar Impuesto Online", "description": "Calculá el IVA (21%, 10.5% o personalizado) de forma rápida. Herramienta gratuita para facturación, autónomos y empresas. Incluye fórmulas y ejemplos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-blue-600">IVA</span> 🧾
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Calculá el impuesto al valor agregado de tus facturas al instante. Sumá
        el IVA al neto o extraelo del total.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-3 gap-6 items-end"> <div class="space-y-3"> <label for="ivaMonto" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Monto ($)</label> <input type="number" id="ivaMonto" placeholder="Ej: 1500" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="space-y-3"> <label for="ivaTasa" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Tasa (%)</label> <select id="ivaTasa" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all shadow-inner appearance-none"> <option value="21">21% (General)</option> <option value="10.5">10.5% (Reducido)</option> <option value="27">27% (Servicios)</option> <option value="custom">Personalizado</option> </select> </div> <button id="btnCalcularIVA" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-xl">
Calcular
</button> </div> <div id="resultBoxIVA" class="hidden mt-12 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100"> <span class="text-[10px] font-bold text-slate-400 uppercase block mb-1">Neto (Sin IVA)</span> <div id="resNeto" class="text-2xl font-black text-slate-800">
$ 0,00
</div> </div> <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100"> <span class="text-[10px] font-bold text-blue-400 uppercase block mb-1">IVA Liquidado</span> <div id="resIVA" class="text-2xl font-black text-blue-600">
$ 0,00
</div> </div> <div class="bg-slate-900 p-6 rounded-3xl shadow-xl"> <span class="text-[10px] font-bold text-slate-400 uppercase block mb-1">Total (Con IVA)</span> <div id="resTotal" class="text-2xl font-black text-white">
$ 0,00
</div> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Qué es el IVA y por qué es fundamental calcularlo correctamente?
</h2> <p class="mb-6">
El <strong>Impuesto al Valor Agregado (IVA)</strong> es una carga fiscal indirecta
        que recae sobre el consumo de bienes y servicios. A diferencia de otros impuestos
        que gravan la renta o el patrimonio, el IVA se aplica en cada etapa de la
        cadena productiva, aunque el consumidor final es quien termina soportando
        el costo económico. Para un profesional, comerciante o empresa, dominar el
        cálculo de este impuesto es vital para evitar errores en la facturación que
        puedan derivar en multas ante organismos como la AFIP.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Cómo funciona la fórmula del IVA?
</h3> <p class="mb-4">
Existen dos operaciones básicas: <strong>añadir el IVA</strong> a un precio
        neto o <strong>extraer el IVA</strong> de un precio total (también conocido
        como desglosar). La base matemática es una proporción simple.
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${formulaIVA} <div class="my-4"></div> ${formulaTotal} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Variables clave en el cálculo
</h3> <ul class="list-disc pl-6 mb-8 space-y-4"> <li> <strong>Importe Neto:</strong> Es el valor base del producto o servicio
          antes de impuestos. Sobre este monto se aplica el porcentaje del IVA.
</li> <li> <strong>Tipo Impositivo (Tasa):</strong> Es el porcentaje definido por la
          ley. En Argentina, la tasa general es del $$ 21 \\% $$, pero existen tasas
          reducidas del $$ 10.5 \\% $$ (para ciertos alimentos, medicina o construcción)
          y tasas incrementadas del $$ 27 \\% $$ (especialmente para servicios públicos
          como gas o electricidad).
</li> <li> <strong>Importe Total:</strong> Es la suma del neto más el IVA. Es el valor
          final que el cliente paga.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Aplicación
</h3> <div class="space-y-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
Caso 1: Sumar IVA a un producto
</h4> <p class="mb-4">
Imaginemos que vendés un servicio de consultoría por un neto de <strong>$10.000</strong> y debés aplicarle la tasa general del 21%.
</p> <p class="font-mono text-sm bg-slate-50 p-4 rounded-xl italic">
Cálculo: 10.000 * 0.21 = $2.100 (IVA). <br>
Total a facturar: $12.100.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
Caso 2: Desglosar IVA de un precio total
</h4> <p class="mb-4">
Si compraste un insumo por <strong>$5.000</strong> (precio final con IVA
            incluido) y necesitás saber el neto para tu contabilidad:
</p> <p class="font-mono text-sm bg-slate-50 p-4 rounded-xl italic">
Fórmula de extracción: Total / (1 + tasa/100) <br>
Cálculo: 5.000 / 1.21 = $4.132,23 (Neto). <br>
Diferencia (IVA): $867,77.
</p> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
Caso 3: Tasa reducida del 10.5%
</h4> <p class="mb-4">
Para la venta de computadoras o bienes de capital, se aplica el
            10.5%. Si el neto es <strong>$100.000</strong>:
</p> <p class="font-mono text-sm bg-slate-50 p-4 rounded-xl italic">
IVA: 100.000 * 0.105 = $10.500. <br>
Total: $110.500.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre IVA Crédito y Débito Fiscal
</h3> <p class="mb-6">
Para los responsables inscriptos, el cálculo de IVA no termina en la
        factura. Existe el <strong>IVA Débito</strong> (el que cobrás a tus clientes)
        y el <strong>IVA Crédito</strong> (el que pagás a tus proveedores). Al finalizar
        el período fiscal, la diferencia entre ambos determina si tenés un saldo a
        pagar a la agencia tributaria o si tenés un saldo a favor. Nuestra calculadora
        te ayuda a determinar con precisión esos montos individuales para que tu balance
        mensual sea exacto.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejercicios para practicar
</h3> <ol class="list-decimal pl-6 mb-8 space-y-4"> <li> <strong>Cálculo rápido:</strong> Si una factura de luz tiene un neto de
          $2.500 y la tasa es del 27%, ¿cuál es el IVA? (Respuesta: $675).
</li> <li> <strong>Inversión de cálculo:</strong> Si pagaste $1.210 por una cena, ¿cuánto
          fue de propina si la tasa de IVA era del 21%? (Recordá que el IVA se calcula
          sobre el consumo, no sobre la propina).
</li> <li> <strong>Acumulado:</strong> Si tenés 3 facturas de $1.000 netos cada una
          con tasas de 21%, 10.5% y 0% (exento), ¿cuál es el total general? (Respuesta:
          $3.315).
</li> </ol> <footer class="bg-blue-600 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-lg font-medium">
"El éxito financiero comienza con la claridad en los números. Usar
          herramientas de precisión es el primer paso."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/finanzas/iva.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/finanzas/iva.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/finanzas/iva.astro";
const $$url = "/finanzas/iva";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Iva,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
