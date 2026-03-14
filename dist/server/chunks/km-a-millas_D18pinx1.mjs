globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_BYNz6e7q.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_D59mRXJw.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_DZZezSix.mjs";
const $$KmAMillas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$KmAMillas;
  const fKmAMi = "$$ \\text{mi} = \\text{km} \\times 0.621371 $$";
  const fMiAKm = "$$ \\text{km} = \\text{mi} \\div 0.621371 $$";
  const fEj1 = "$$ 5 \\times 0.6213 = 3.106 $$";
  const fEj2 = "$$ 15 \\div 0.6213 = 24.13 $$";
  const fEj3 = "$$ 10 \\times 0.6213 = 6.21 $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Kilómetros a Millas | Calculadora de Distancia Precisa", "description": "Convertí kilómetros a millas de forma rápida. Aprendé la fórmula de conversión, ejemplos prácticos y diferencias entre unidades métricas e imperiales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Conversor de <span class="text-blue-600">Kilómetros a Millas</span> 📍
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Pasá de kilómetros a millas terrestres en un segundo con nuestra
        herramienta de alta precisión.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-2 gap-8 items-end"> <div class="space-y-3"> <label for="inputKilometros" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Kilómetros (km)</label> <input type="number" id="inputKilometros" placeholder="Ej: 10" class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> <div class="space-y-3"> <label for="inputMillasRes" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Millas (mi)</label> <input type="number" id="inputMillasRes" placeholder="Resultado..." class="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 font-bold text-xl outline-none transition-all shadow-inner"> </div> </div> <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"> <button id="btnConvertirKtoM" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-lg">
Convertir a Millas
</button> <button id="btnLimpiarKtoM" class="w-full bg-white text-slate-900 border-2 border-slate-900 p-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg active:scale-95 text-lg">
Limpiar Campos
</button> </div> <div id="boxResultadoKm" class="hidden mt-10 p-8 bg-blue-50 rounded-[2rem] border border-blue-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500"> <p id="labelResultadoKm" class="text-2xl font-black text-blue-900"></p> <p class="text-blue-400 text-sm mt-2 font-medium">
1 kilómetro ≈ 0.621371 millas terrestres
</p> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Cómo convertir kilómetros a millas de forma correcta?
</h2> <p class="mb-6">
Entender la relación entre el <strong>kilómetro</strong> y la <strong>milla</strong> es fundamental en un mundo globalizado. Mientras que la gran mayoría de
        los países utilizan el Sistema Internacional de Unidades (donde el kilómetro
        es la norma), naciones como Estados Unidos y el Reino Unido todavía dependen
        del sistema imperial para medir distancias terrestres. Esta diferencia suele
        generar confusión en turistas, corredores y conductores por igual.
</p> <p class="mb-6">
El kilómetro (km) es una unidad de longitud que equivale a 1,000 metros.
        Por su parte, la milla terrestre internacional equivale a 1,609.344
        metros. Por lo tanto, un kilómetro siempre será una distancia más corta
        que una milla. Específicamente, un kilómetro representa aproximadamente
        el 62% de una milla terrestre estándar.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula Matemática de Conversión
</h3> <p class="mb-4">
Para convertir kilómetros a millas, se debe multiplicar la cantidad de
        kilómetros por el factor de conversión estandarizado internacionalmente:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fKmAMi} </div> <p class="mb-4 text-center">
Si necesitas realizar el proceso inverso (es decir, convertir millas a
        kilómetros), la operación matemática sería la siguiente:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fMiAKm} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencias de escala y percepción en la conducción
</h3> <p class="mb-6">
Una de las mayores dificultades al cambiar de sistema es la percepción
        de la velocidad. Por ejemplo, si estás acostumbrado a conducir a 100
        km/h y viajas a un país que usa millas, verás que la señalización indica
        62 mph. Aunque la velocidad física es la misma, el número menor en el
        velocímetro puede dar la falsa sensación de estar yendo más lento, lo
        que requiere un periodo de adaptación visual para el conductor.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de la Vida Real
</h3> <div class="space-y-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
1. Carreras de Atletismo (Running)
</h4> <p class="mb-4 italic text-sm text-slate-500">
Escenario: Querés correr una carrera de 5K (5 kilómetros) pero tu
            reloj deportivo está configurado en millas.
</p> <div class="leading-relaxed">
Aplicamos la conversión: <br> ${fEj1} <br> <strong>Resultado:</strong> Sabrás que debés completar 3.1 millas para
            terminar la carrera con éxito.
</div> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
2. Turismo y Mapas
</h4> <p class="mb-4 italic text-sm text-slate-500">
Escenario: Un mapa en Londres indica que el siguiente pueblo está a
            15 millas, pero tu GPS solo muestra kilómetros.
</p> <div class="leading-relaxed">
Hacemos la conversión inversa: <br> ${fEj2} <br> <strong>Resultado:</strong> Sabrás que te faltan aproximadamente 24.1
            kilómetros de recorrido.
</div> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-blue-600 mb-3 text-xl">
3. Altitud en Aviación
</h4> <p class="mb-4 italic text-sm text-slate-500">
Escenario: El avión vuela a una altura de crucero de 10 kilómetros
            sobre el nivel del mar.
</p> <div class="leading-relaxed">
Para los pasajeros acostumbrados al sistema imperial: <br> ${fEj3} <br> <strong>Resultado:</strong> El avión se encuentra a unas 6.21 millas de
            altura.
</div> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Tabla de Referencia Rápida
</h3> <div class="overflow-x-auto mb-12"> <table class="w-full text-left border-collapse"> <thead> <tr class="bg-blue-600 text-white"> <th class="p-4 rounded-tl-xl">Kilómetros (km)</th> <th class="p-4 rounded-tr-xl">Millas (mi)</th> </tr> </thead> <tbody class="text-slate-600"> <tr class="border-b"><td class="p-4 font-bold">1 km</td><td class="p-4">0.62 mi</td></tr> <tr class="border-b bg-slate-50"><td class="p-4 font-bold">10 km</td><td class="p-4">6.21 mi</td></tr> <tr class="border-b"><td class="p-4 font-bold">42.19 km (Maratón)</td><td class="p-4">26.22 mi</td></tr> <tr class="border-b bg-slate-50"><td class="p-4 font-bold">100 km</td><td class="p-4">62.14 mi</td></tr> <tr class="border-b"><td class="p-4 font-bold">500 km</td><td class="p-4">310.68 mi</td></tr> </tbody> </table> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Trucos para la conversión mental rápida
</h3> <p class="mb-6">
Si no tenés una calculadora a mano, podés usar la <strong>Sucesión de Fibonacci</strong> para una aproximación sorprendente. Los números de Fibonacci son 1, 1, 2,
        3, 5, 8, 13... Si tomás un número de la serie como kilómetros, el número anterior
        es aproximadamente el valor en millas.
<br><br> <em>Ejemplo: ¿Cuántas millas son 8 km? El número anterior en la serie es
          5. 8 km son aprox. 5 millas (el valor exacto es 4.97).</em> </p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-blue-400 font-bold mb-2">Dato Curioso:</p> <p class="text-sm text-slate-400">
La milla fue originalmente definida por los romanos como la distancia
          recorrida en 1,000 pasos dobles de un soldado. El sistema métrico fue
          introducido mucho después, buscando una base decimal universal.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro";
const $$url = "/unidades/km-a-millas";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$KmAMillas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
