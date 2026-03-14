globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$CalculadoraDeProporciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CalculadoraDeProporciones;
  const fProporcionGral = "$$ \\frac{A}{B} = \\frac{C}{D} $$";
  const fDespejeD = "$$ D = \\frac{B \\times C}{A} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Proporciones Online | Hallar la Razón Matemática", "description": "Calcula proporciones matemáticas fácilmente. Resuelve igualdades entre razones y aprende a aplicar la proporcionalidad en la vida real con ejemplos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Calculadora de <span class="text-cyan-600">Proporciones</span> ⚖️
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Encontrá el valor faltante en una igualdad de razones de forma
        instantánea y precisa.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="flex flex-col items-center space-y-8"> <div class="grid grid-cols-5 gap-2 md:gap-4 items-center w-full max-w-2xl"> <div class="col-span-2 space-y-4"> <input type="number" id="propA" placeholder="A" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 text-center font-bold text-xl outline-none shadow-inner"> <div class="h-1 bg-slate-200 rounded-full mx-4"></div> <input type="number" id="propB" placeholder="B" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 text-center font-bold text-xl outline-none shadow-inner"> </div> <div class="col-span-1 text-center text-4xl font-light text-slate-300">
=
</div> <div class="col-span-2 space-y-4"> <input type="number" id="propC" placeholder="C" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-cyan-500 text-center font-bold text-xl outline-none shadow-inner"> <div class="h-1 bg-slate-200 rounded-full mx-4"></div> <input type="number" id="propD" placeholder="X" class="w-full p-4 bg-cyan-50 border-2 border-cyan-200 rounded-2xl text-center font-black text-xl text-cyan-600 outline-none placeholder:text-cyan-300"> </div> </div> <button id="btnResolverProporcion" class="w-full max-w-md bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-cyan-600 transition-all shadow-lg active:scale-95 text-xl">
Resolver Incógnita
</button> <div id="boxResultadoProp" class="hidden w-full max-w-md animate-in fade-in zoom-in duration-300"> <div class="bg-slate-900 p-8 rounded-[2.5rem] text-center border-4 border-cyan-500/30"> <span class="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">El valor de X es</span> <span id="resValorX" class="text-5xl font-black text-white">0</span> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es una proporción matemática y por qué es fundamental?
</h2> <p class="mb-6">
En el mundo de las matemáticas, una <strong>proporción</strong> es simplemente
        una declaración de que dos razones (o fracciones) son iguales. Es la herramienta
        que nos permite entender la relación de equilibrio entre diferentes magnitudes.
        Si alguna vez has redimensionado una foto sin que se vea "estirada" o has
        ajustado los ingredientes de una receta para más personas, has utilizado proporciones.
</p> <p class="mb-6">
La proporcionalidad es el lenguaje de la armonía. Desde la proporción
        áurea en el arte hasta las leyes de Kepler en la astronomía, la
        capacidad de igualar razones nos permite predecir comportamientos y
        escalar sistemas de manera coherente. En los negocios, la usamos para
        calcular márgenes, conversiones y proyecciones de crecimiento.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Fórmula de la Proporción
</h3> <p class="mb-6">
Una proporción se representa como la igualdad de dos fracciones. Para
        resolverla, partimos de la premisa de que el producto de los medios es
        igual al producto de los extremos:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fProporcionGral} </div> <p class="mb-6">
Si buscamos el valor de $D$, la operación matemática para despejar la
        incógnita consiste en multiplicar de forma cruzada y dividir por el
        valor restante:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center shadow-inner"> ${fDespejeD} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Tipos de Proporcionalidad
</h3> <ul class="list-none pl-0 space-y-4 mb-10"> <li class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"> <strong>1. Proporcionalidad Directa:</strong> Cuando una variable aumenta,
          la otra también lo hace en la misma razón (ej. a más horas trabajadas, más
          salario).
</li> <li class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"> <strong>2. Proporcionalidad Inversa:</strong> Cuando una variable aumenta,
          la otra disminuye (ej. a más velocidad, menos tiempo para llegar al destino).
</li> </ul> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de Proporciones
</h2> <div class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 1: Escalas en Planos o Mapas
</h4> <p class="mb-4 text-sm">
Un mapa tiene una escala donde 2 cm representan 50 km reales. Si en
            el mapa la distancia entre dos ciudades es de 7 cm, ¿cuál es la
            distancia real?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
2 / 50 = 7 / X <br>
X = (50 * 7) / 2 = 175 km.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Fotografía y Diseño (Aspect Ratio)
</h4> <p class="mb-4 text-sm">
Tienes una imagen de 1920px de ancho por 1080px de alto. Quieres
            reducir el ancho a 800px manteniendo la proporción. ¿Cuál debe ser
            el alto?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
1920 / 1080 = 800 / X <br>
X = (1080 * 800) / 1920 = 450px.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 3: Mezclas de Construcción
</h4> <p class="mb-4 text-sm">
Una mezcla de concreto requiere 3 partes de arena por cada 2 partes
            de cemento. Si tienes 15 baldes de arena, ¿cuántos de cemento
            necesitas?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
3 / 2 = 15 / X <br>
X = (2 * 15) / 3 = 10 baldes de cemento.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Importancia en el Comercio y Finanzas
</h3> <p class="mb-6">
En el análisis financiero, las proporciones se conocen como "ratios". El
        ratio de liquidez, por ejemplo, es una proporción entre activos y
        pasivos. Entender cómo una variable afecta a la otra en una igualdad
        permite a los analistas detectar desequilibrios antes de que se
        conviertan en crisis. Asimismo, en el trading, las proporciones de
        Fibonacci se utilizan para predecir puntos de retroceso en los precios
        de las acciones.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Consejos para evitar errores
</h3> <p class="mb-6">
El error más común es no mantener la unidad de medida constante en ambos
        lados de la razón. Si el numerador en la primera fracción representa
        "manzanas", el numerador en la segunda fracción también debe representar
        "manzanas". Cruzar las unidades es la forma más rápida de obtener un
        resultado erróneo.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-cyan-400 font-bold mb-2">Curiosidad Matemática:</p> <p class="text-sm text-slate-400">
Los antiguos griegos consideraban que la salud del cuerpo humano
          dependía de la justa proporción de los cuatro humores. La falta de
          proporción se llamaba "crisis".
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-proporciones.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-proporciones.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-proporciones.astro";
const $$url = "/utiles/calculadora-de-proporciones";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CalculadoraDeProporciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
