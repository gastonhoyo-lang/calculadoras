globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_Bh15OOSU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DuFvuRPN.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_CdraH9S2.mjs";
const $$GeneradorContrasenas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GeneradorContrasenas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Generador de Contraseñas Seguras Online | Crea Claves Fuertes", "description": "Crea contraseñas robustas y personalizadas con nuestro generador online. Protege tu seguridad digital con entropía avanzada." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 py-12"> <header class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
Generador de <span class="text-emerald-600">Contraseñas</span> 🔐
</h1> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto text-balance">
Crea claves imposibles de descifrar con algoritmos de aleatoriedad pura.
        Seguridad nivel militar a un solo clic.
</p> </header> <section class="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl max-w-3xl mx-auto mb-20"> <div class="space-y-8"> <div class="relative group"> <input type="text" id="passwordOutput" readonly class="w-full p-6 bg-slate-900 text-emerald-400 font-mono text-2xl rounded-2xl border-4 border-slate-800 text-center outline-none transition-all shadow-inner" value="Cargando..."> <button id="copyBtn" class="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors font-bold text-sm">
Copiar
</button> </div> <div class="grid md:grid-cols-2 gap-8"> <div class="space-y-4"> <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">
Longitud: <span id="lenDisplay" class="text-emerald-600">16</span> </label> <input type="range" id="lengthSlider" min="8" max="64" value="16" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"> </div> <div class="grid grid-cols-2 gap-3"> <label class="flex items-center space-x-2 cursor-pointer p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border border-transparent"> <input type="checkbox" id="checkUpper" checked class="w-4 h-4 accent-emerald-600"> <span class="text-xs font-bold text-slate-700">MAYUS</span> </label> <label class="flex items-center space-x-2 cursor-pointer p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border border-transparent"> <input type="checkbox" id="checkLower" checked class="w-4 h-4 accent-emerald-600"> <span class="text-xs font-bold text-slate-700">minus</span> </label> <label class="flex items-center space-x-2 cursor-pointer p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border border-transparent"> <input type="checkbox" id="checkNumbers" checked class="w-4 h-4 accent-emerald-600"> <span class="text-xs font-bold text-slate-700">1234</span> </label> <label class="flex items-center space-x-2 cursor-pointer p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border border-transparent"> <input type="checkbox" id="checkSymbols" checked class="w-4 h-4 accent-emerald-600"> <span class="text-xs font-bold text-slate-700">#$@!</span> </label> </div> </div> <button id="generateBtn" class="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95 text-lg">
Generar Nueva Contraseña
</button> <div id="strengthBox" class="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden"> <div id="strengthBar" class="h-full bg-emerald-500 transition-all duration-500" style="width: 80%"></div> </div> </div> </section> <article class="prose prose-slate max-w-none border-t border-slate-200 pt-16 text-slate-700 font-light"> <h2 class="text-3xl font-black text-slate-900 mb-6 italic">
La Importancia de un Generador de Contraseñas Seguras
</h2> <p class="text-lg leading-relaxed mb-6">
En un entorno digital cada vez más hostil, la seguridad de nuestras
        cuentas depende directamente de la complejidad de nuestras credenciales.
        Un <strong>generador de contraseñas seguras</strong> utiliza algoritmos de
        aleatoriedad pseudoaleatoria o criptográficamente segura para crear cadenas
        de caracteres que no siguen patrones humanos, lo que las hace virtualmente
        inmunes a ataques de diccionario.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
La Matemática de la Seguridad: Entropía
</h3> <p class="mb-6">
La fortaleza de una contraseña se mide mediante la entropía, que
        determina cuántas combinaciones posibles existen. Se define mediante la
        siguiente fórmula:
</p> <div class="bg-slate-50 p-6 rounded-2xl mb-8"> <p class="text-center text-xl font-mono">
$$ E = \\log_2(L^n) = n \\cdot \\log_2(L) $$
</p> </div> <p class="mb-6">Donde:</p> <ul class="list-disc pl-6 mb-8 space-y-2"> <li><strong>E:</strong> Representa la entropía en bits.</li> <li> <strong>L:</strong> Es el tamaño del conjunto de caracteres (letras, números,
          símbolos).
</li> <li><strong>n:</strong> Es la longitud total de la contraseña.</li> </ul> <p class="mb-6">
Por cada bit de entropía adicional, la dificultad de descifrar la clave
        mediante fuerza bruta se duplica. Una contraseña de 12 caracteres que
        mezcla diversos tipos de caracteres suele tener suficiente entropía para
        ser segura durante décadas frente a la tecnología de cómputo actual.
</p> <h3 class="text-2xl font-bold text-slate-800 mb-4">
Ejemplos Prácticos de Fortaleza
</h3> <div class="space-y-6 mb-12"> <div class="p-6 border-l-4 border-emerald-500 bg-slate-50 rounded-r-xl shadow-sm"> <p class="font-bold uppercase text-xs text-emerald-600 mb-1">
Ejemplo 1: Contraseña Débil
</p> <p class="mb-2 italic">"perro123"</p> <p class="text-sm">
Esta clave es vulnerable a <strong>ataques de diccionario</strong>.
            Un software de hacking la descifraría en menos de un segundo debido
            a su baja entropía y uso de palabras comunes.
</p> </div> <div class="p-6 border-l-4 border-emerald-500 bg-slate-50 rounded-r-xl shadow-sm"> <p class="font-bold uppercase text-xs text-emerald-600 mb-1">
Ejemplo 2: Contraseña Fuerte
</p> <p class="mb-2 italic">"K8!p@2mZq9#R"</p> <p class="text-sm">
Generada aleatoriamente con 12 caracteres. Esta clave requeriría
            miles de millones de intentos, protegiendo eficazmente contra <strong>ataques de fuerza bruta</strong>.
</p> </div> </div> <h3 class="text-2xl font-bold text-slate-800 mb-4">
¿Por qué no usar palabras del diccionario?
</h3> <p class="mb-6 leading-relaxed">
El error más común es utilizar palabras reales con sustituciones simples
        (como cambiar la "a" por un "4"). Los algoritmos modernos de cracking
        conocen perfectamente estos patrones. Al utilizar nuestro generador de
        contraseñas, eliminas cualquier sesgo humano, garantizando que cada
        carácter sea el resultado de una probabilidad matemática pura.
</p> <div class="bg-slate-900 text-white p-8 rounded-[3rem] mb-12"> <h4 class="text-xl font-bold mb-4">Consejos Pro de Seguridad:</h4> <ul class="space-y-3 text-slate-300"> <li>
• Nunca repitas la misma contraseña en dos servicios diferentes.
</li> <li>
• Utiliza un gestor de contraseñas (Password Manager) para almacenar
            tus claves.
</li> <li>• Activa siempre la autenticación de dos factores (2FA).</li> <li>
• Las contraseñas de más de 16 caracteres son el estándar de oro
            actual.
</li> </ul> </div> <footer class="bg-slate-900 text-white p-12 rounded-[3rem] text-center italic mt-12"> <p class="text-sm text-slate-400">
"En el mundo digital, tu contraseña es el único muro entre tus datos y
          el caos."
</p> </footer> </article> </main> ${renderScript($$result2, "C:/proyectos/seo-tools/src/pages/utiles/generador-contrasenas.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/proyectos/seo-tools/src/pages/utiles/generador-contrasenas.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/utiles/generador-contrasenas.astro";
const $$url = "/utiles/generador-contrasenas/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GeneradorContrasenas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
