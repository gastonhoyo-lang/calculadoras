globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$ReglaDeTres = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ReglaDeTres;
  const fReglaTres = "$$ x = \\frac{B \\times C}{A} $$";
  const fProporcion = "$$ \\frac{A}{B} = \\frac{C}{x} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Regla de Tres Simple | Directa e Inversa", "description": "Calcula rápidamente el valor de X con nuestra calculadora de regla de tres simple. Ideal para proporciones, porcentajes y problemas matemáticos rápidos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Regla de <span class="text-rose-600">Tres Simple</span> 📐
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Resolvé problemas de proporcionalidad en segundos. Ingresá tus tres
        valores conocidos para hallar la incógnita.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div class="space-y-8"> <div class="grid grid-cols-2 gap-4 items-center"> <div class="space-y-2"> <label class="text-[10px] font-bold text-slate-400 uppercase ml-2">Si (A)</label> <input type="number" id="valA" placeholder="Ej: 10" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all shadow-inner font-bold text-xl"> </div> <div class="space-y-2 text-center"> <span class="text-slate-300">es a</span> <div class="space-y-2 mt-2"> <label class="text-[10px] font-bold text-slate-400 uppercase">Entonces (B)</label> <input type="number" id="valB" placeholder="Ej: 50" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all shadow-inner font-bold text-xl"> </div> </div> </div> <div class="grid grid-cols-2 gap-4 items-center"> <div class="space-y-2"> <label class="text-[10px] font-bold text-slate-400 uppercase ml-2">Si tengo (C)</label> <input type="number" id="valC" placeholder="Ej: 20" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-rose-500 outline-none transition-all shadow-inner font-bold text-xl"> </div> <div class="space-y-2 text-center"> <span class="text-slate-300 font-medium">¿Cuánto es?</span> <div class="mt-2 p-4 bg-rose-50 border-2 border-rose-200 rounded-2xl flex items-center justify-center"> <span class="text-rose-600 font-black text-2xl">X</span> </div> </div> </div> </div> <div class="flex flex-col justify-center space-y-4"> <button id="btnCalcRegla3" class="w-full bg-slate-900 text-white p-6 rounded-[2rem] font-bold hover:bg-rose-600 transition-all shadow-xl active:scale-95 text-xl">
Calcular Valor de X
</button> <div id="resRegla3Box" class="hidden animate-in fade-in zoom-in duration-300"> <div class="bg-slate-900 p-8 rounded-[2rem] text-center border-4 border-rose-500/30"> <span class="block text-xs font-bold text-rose-400 uppercase tracking-widest mb-1">Resultado Final</span> <span id="resX" class="text-5xl font-black text-white">0</span> </div> </div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic underline decoration-rose-500 underline-offset-8">
¿Qué es la Regla de Tres Simple y cómo funciona?
</h2> <p class="mb-6">
La <strong>regla de tres simple</strong> es una operación matemática fundamental
        que nos permite resolver problemas de proporcionalidad entre tres valores
        conocidos y una incógnita. Es, probablemente, la herramienta aritmética más
        utilizada en la vida cotidiana: desde ajustar las cantidades de una receta
        de cocina hasta calcular el tiempo que tardaremos en llegar a un destino basándonos
        en nuestra velocidad actual.
</p> <p class="mb-6">
Su magia reside en la relación constante entre las magnitudes. Cuando
        dos variables mantienen una proporción, el conocimiento de esa relación
        nos permite predecir cualquier valor futuro. En el ámbito del SEO y el
        marketing digital, por ejemplo, la usamos para proyectar conversiones
        basadas en el tráfico o para estimar presupuestos publicitarios.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4 text-rose-600">
La Fórmula Matemática
</h3> <p class="mb-6">
Para resolver una regla de tres directa, planteamos una igualdad de
        razones (proporción). Si $A$ produce $B$, entonces $C$ producirá $x$. La
        estructura se visualiza así:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fProporcion} </div> <p class="mb-6">
Al despejar la incógnita $x$, obtenemos la fórmula final que utiliza
        nuestra calculadora:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center shadow-inner"> ${fReglaTres} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Diferencia entre Regla de Tres Directa e Inversa
</h3> <p class="mb-6">
Es crucial identificar el tipo de relación entre las variables antes de
        calcular:
</p> <ul class="list-none pl-0 space-y-4 mb-10"> <li class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"> <strong>1. Proporcionalidad Directa:</strong> Cuando una magnitud aumenta,
          la otra también (ej. más kilos de manzanas, más dinero a pagar). Se resuelve
          multiplicando en cruz.
</li> <li class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"> <strong>2. Proporcionalidad Inversa:</strong> Cuando una magnitud aumenta,
          la otra disminuye (ej. más obreros trabajando, menos tiempo para terminar
          la obra). Aquí la fórmula cambia: $x = (A \\times B) / C$.
</li> </ul> <h2 class="text-3xl font-black text-slate-900 mb-8">
Ejemplos Prácticos de la Vida Real
</h2> <section class="space-y-8 mb-16"> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 1: Cocina y Repostería
</h4> <p class="mb-4">
Una receta para 4 personas requiere 200 gramos de harina. ¿Cuánta
            harina necesito para 10 personas?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
A = 4 personas | B = 200g | C = 10 personas <br>
x = (200 * 10) / 4 = 500 gramos de harina.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 2: Consumo de Combustible
</h4> <p class="mb-4">
Tu auto consume 6 litros de nafta cada 100 kilómetros. Tenés que
            hacer un viaje de 450 kilómetros. ¿Cuánta nafta necesitás?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
A = 100km | B = 6 litros | C = 450km <br>
x = (6 * 450) / 100 = 27 litros.
</p> </div> <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"> <h4 class="text-xl font-bold text-slate-900 mb-4">
Ejemplo 3: Descuentos y Porcentajes
</h4> <p class="mb-4">
Si el 100% de un producto es $5000, ¿cuánto es el 15% (descuento)?
</p> <p class="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200">
A = 100 | B = 5000 | C = 15 <br>
x = (5000 * 15) / 100 = $750.
</p> </div> </section> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Consejos para no equivocarte
</h3> <p class="mb-6">
El error más común es no alinear correctamente las unidades. Siempre
        asegurate de que en la columna de la izquierda (A y C) estés hablando de
        la misma magnitud (ej. metros con metros) y en la de la derecha (B y X)
        de la otra magnitud (ej. segundos con segundos). Si mezclás unidades, el
        resultado será incorrecto.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-rose-400 font-bold mb-2">Dato Curioso:</p> <p class="text-sm text-slate-400">
La regla de tres ya era conocida por los matemáticos indios antiguos y
          se popularizó en Europa durante el Renacimiento como "La Regla de
          Oro".
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro";
const $$url = "/matematica/regla-de-tres";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ReglaDeTres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
