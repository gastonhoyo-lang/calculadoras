globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DUamNOw_.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_Bk4AUdbY.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_C1P3Y1KY.mjs";
const $$NotacionCientifica = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NotacionCientifica;
  const fEstandar = "$$ a \\times 10^n $$";
  const fCondicion = "$$ 1 \\le |a| < 10 $$";
  const fEjemploPos = "$$ 5.000 = 5 \\times 10^3 $$";
  const fEjemploNeg = "$$ 0,005 = 5 \\times 10^{-3} $$";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Notación Científica | Convertir a Decimal y Estandar", "description": "Convierte números grandes o pequeños a notación científica y viceversa. Aprende las reglas de la mantisa y el exponente con ejemplos prácticos." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Notación <span class="text-cyan-600">Científica</span> 🔬
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Convertí números complejos de forma instantánea y entendé la lógica
        detrás de las potencias de 10.
</p> </header> <section class="bg-white p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-4xl mx-auto mb-20"> <div class="grid md:grid-cols-1 gap-8 mb-8"> <div class="space-y-4"> <label for="inputNumeroCientifico" class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Ingresa un número (Decimal o Científico)</label> <input type="text" id="inputNumeroCientifico" placeholder="Ej: 5000 o 5e3 o 0.0001" class="w-full p-6 bg-slate-50 rounded-[2rem] border-2 border-transparent focus:border-cyan-500 font-mono text-xl outline-none transition-all shadow-inner"> <p class="text-[10px] text-slate-400 ml-4">
* Podés usar "e" para el exponente (ejemplo: 2.5e4)
</p> </div> </div> <button id="btnConvertirCientifica" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-cyan-600 transition-all shadow-lg active:scale-95 text-xl">
Convertir Número
</button> <div id="resultadoCientificaBox" class="hidden mt-10 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="bg-cyan-50 p-8 rounded-3xl border border-cyan-100 text-center"> <span class="block text-xs font-bold text-cyan-400 uppercase mb-2">Notación Científica</span> <span id="resCientifica" class="block text-3xl font-black text-cyan-700 font-mono">---</span> </div> <div class="bg-slate-900 p-8 rounded-3xl text-center"> <span class="block text-xs font-bold text-slate-400 uppercase mb-2 text-white">Notación Decimal</span> <span id="resDecimal" class="block text-3xl font-black text-white font-mono break-all">---</span> </div> </div> <div id="infoExponente" class="p-4 bg-slate-50 rounded-2xl text-center text-sm text-slate-500 font-medium"></div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light leading-relaxed"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
¿Qué es la Notación Científica?
</h2> <p class="mb-6">
La <strong>notación científica</strong> es una forma abreviada de escribir
        números que son demasiado grandes o demasiado pequeños para ser escritos de
        manera convencional sin volverse confusos. Es una herramienta indispensable
        en campos como la física, la astronomía y la química, donde se manejan desde
        la masa de una estrella hasta el diámetro de un átomo.
</p> <p class="mb-6">
Su importancia radica en la claridad y la prevención de errores. Imagina
        intentar realizar cálculos con la velocidad de la luz (aproximadamente
        300.000.000 m/s) escrita siempre con todos sus ceros; la probabilidad de
        omitir uno es altísima. La notación científica resuelve esto utilizando
        potencias de base 10.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Estructura Fundamental
</h3> <p class="mb-4">
Cualquier número en notación científica tiene la siguiente forma:
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fEstandar} </div> <p class="mb-6">
Para que la expresión se considere "estándar", se debe cumplir
        estrictamente la siguiente condición para la mantisa (el número <em>a</em>):
</p> <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100 text-center"> ${fCondicion} </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Componentes del Número
</h3> <ul class="list-disc pl-6 mb-8 space-y-3"> <li> <strong>Mantisa (a):</strong> Debe ser un número real mayor o igual a 1
          y menor que 10. Puede ser positivo o negativo.
</li> <li><strong>Base:</strong> Siempre es 10.</li> <li> <strong>Exponente (n):</strong> Es un número entero que indica cuántas veces
          se desplaza la coma decimal. Si es positivo, el número es grande; si es
          negativo, el número es menor que 1.
</li> </ul> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Cómo Convertir: Paso a Paso
</h3> <p class="mb-4">
El proceso varía dependiendo de si el número es mayor o menor que la
        unidad:
</p> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-cyan-600 mb-3 text-xl">
Para números grandes
</h4> <p class="text-sm mb-4">
Desplazamos la coma hacia la <strong>izquierda</strong> hasta que quede
            un solo dígito distinto de cero a la izquierda de la coma.
</p> <div class="bg-slate-50 p-4 rounded-xl font-mono text-center"> ${fEjemploPos} </div> </div> <div class="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"> <h4 class="font-bold text-cyan-600 mb-3 text-xl">
Para números pequeños
</h4> <p class="text-sm mb-4">
Desplazamos la coma hacia la <strong>derecha</strong> hasta que tengamos
            un número entre 1 y 10. El exponente será negativo.
</p> <div class="bg-slate-50 p-4 rounded-xl font-mono text-center"> ${fEjemploNeg} </div> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos en la Ciencia
</h3> <div class="space-y-6 mb-12"> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-cyan-500"> <p class="font-bold text-slate-800 italic">
Ejemplo 1: Distancia a la Luna
</p> <p>
La distancia media es de 384.400 km. En notación científica se
            expresa como **3,844 x 10<sup>5</sup>** km.
</p> </div> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-cyan-500"> <p class="font-bold text-slate-800 italic">
Ejemplo 2: Tamaño de una bacteria
</p> <p>
Una bacteria típica mide 0,000002 metros. Esto se simplifica a **2 x
            10<sup>-6</sup>** metros.
</p> </div> <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-cyan-500"> <p class="font-bold text-slate-800 italic">
Ejemplo 3: Masa de la Tierra
</p> <p>
Aproximadamente 5.972.000.000.000.000.000.000.000 kg. Escribir esto
            es imposible sin notación científica: **5,972 x 10<sup>24</sup>**
            kg.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Operaciones Básicas
</h3> <p class="mb-6">
Una de las mayores ventajas de este sistema es que simplifica las
        operaciones matemáticas. Para multiplicar, solo multiplicamos las
        mantisas y sumamos los exponentes. Para dividir, restamos los
        exponentes. Esto hace que cálculos masivos sean manejables incluso sin
        calculadora.
</p> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12 shadow-2xl"> <p class="text-cyan-400 font-bold mb-2">Consejo Académico:</p> <p class="text-sm text-slate-400">
Si el exponente aumenta, la mantisa debe disminuir proporcionalmente
          para mantener el valor. Mantener el equilibrio es la clave.
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro";
const $$url = "/matematica/notacion-cientifica";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$NotacionCientifica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
