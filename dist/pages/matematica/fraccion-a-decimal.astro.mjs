/* empty css                                          */
import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Do9XiQ7L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DvQkidL1.mjs';
export { renderers } from '../../renderers.mjs';

const $$FraccionADecimal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Calculadora de Fracci\xF3n a Decimal | Convertir Racionales", "description": "Convert\xED cualquier fracci\xF3n en un n\xFAmero decimal al instante. Herramienta gratuita para entender la relaci\xF3n entre quebrados y decimales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Fracción a Decimal
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Transformá fracciones en números decimales y entendé su valor real.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="flex flex-col items-center gap-2"> <div class="w-full max-w-[200px] space-y-2"> <input type="number" id="numInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 text-center font-mono text-2xl outline-none" placeholder="Num"> <div class="h-1.5 bg-slate-200 rounded-full w-full"></div> <input type="number" id="denInput" class="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 text-center font-mono text-2xl outline-none" placeholder="Den"> </div> </div> <div class="text-center p-10 bg-indigo-600 rounded-[2.5rem] shadow-lg shadow-indigo-200 relative overflow-hidden h-full flex flex-col justify-center"> <div class="relative z-10 text-white"> <span class="block text-[10px] font-bold uppercase opacity-80 mb-2 tracking-widest">Resultado Decimal</span> <div id="resultOutput" class="text-6xl font-black leading-none">
0
</div> <p id="typeDesc" class="text-[10px] mt-6 font-bold uppercase tracking-widest bg-white/20 inline-block px-4 py-1 rounded-full italic">
Introduce una fracción
</p> </div> <span class="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/10 select-none">.0</span> </div> </div> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-3xl font-black text-slate-900 mb-6">
¿Cómo pasar de fracción a decimal?
</h2> <p>
Para convertir una fracción en decimal, simplemente tenés que <strong>dividir el numerador por el denominador</strong>. El resultado es la representación decimal de esa parte del entero.
</p> <div class="bg-slate-900 p-8 rounded-3xl text-center my-8 shadow-2xl"> <span class="text-indigo-400 font-mono text-2xl">
Decimal = Numerador / Denominador
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Decimales Exactos</h4> <p class="text-xs leading-relaxed">
Son aquellos que tienen un número finito de cifras decimales, como
            $1/2 = 0.5$ o $1/4 = 0.25$.
</p> </div> <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200"> <h4 class="font-bold text-slate-900 mb-2">Decimales Periódicos</h4> <p class="text-xs leading-relaxed">
Son aquellos donde una o varias cifras se repiten infinitamente,
            como $1/3 = 0.333...$ o $2/11 = 0.1818...$.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/fraccion-a-decimal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/fraccion-a-decimal.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/matematica/fraccion-a-decimal.astro";
const $$url = "/matematica/fraccion-a-decimal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FraccionADecimal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
