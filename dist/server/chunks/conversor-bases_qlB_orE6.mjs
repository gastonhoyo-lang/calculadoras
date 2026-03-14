globalThis.process ??= {};
globalThis.process.env ??= {};
/* empty css               */
import { c as createComponent } from "./astro-component_C9v3I6dV.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_DDVHx7UD.mjs";
import { $ as $$Layout, r as renderScript } from "./Layout_Bg2NdVg7.mjs";
const $$ConversorBases = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conversor de Bases Numéricas | Binario, Decimal, Hex", "description": "Convertí números entre diferentes bases: binario, octal, decimal y hexadecimal de forma instantánea." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <div class="text-center mb-10"> <h1 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">
Conversor de Bases Numéricas
</h1> <p class="text-slate-600 max-w-2xl mx-auto">
Ingresá un número en cualquier sistema y obtené su equivalencia en las
        demás bases automáticamente.
</p> </div> <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-xl mx-auto mb-16"> <div class="space-y-6"> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-1 ml-1">Decimal (Base 10)</label> <input type="text" id="dec" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono" placeholder="Ej: 255"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-1 ml-1">Binario (Base 2)</label> <input type="text" id="bin" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono" placeholder="Ej: 11111111"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-1 ml-1">Hexadecimal (Base 16)</label> <input type="text" id="hex" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono uppercase" placeholder="Ej: FF"> </div> <div> <label class="block text-xs font-bold uppercase text-slate-400 mb-1 ml-1">Octal (Base 8)</label> <input type="text" id="oct" class="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono" placeholder="Ej: 377"> </div> </div> <p class="text-[10px] text-slate-400 mt-6 text-center italic">
La conversión se realiza en tiempo real al escribir.
</p> </div> <section class="prose prose-slate max-w-none border-t border-slate-100 pt-12 text-slate-700"> <h2 class="text-2xl font-black text-slate-900 mb-6 italic">
Sistemas de Numeración
</h2> <p>
Los sistemas de bases numéricas son diferentes formas de representar
        cantidades. El más común es el decimal (usado por humanos), pero en
        computación el binario y el hexadecimal son fundamentales.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-100"> <h3 class="text-emerald-900 font-bold mb-2 uppercase text-xs tracking-widest text-center">
Binario
</h3> <p class="text-sm">
Utiliza solo dos dígitos: 0 y 1. Es el lenguaje nativo de los
            procesadores y circuitos lógicos.
</p> </div> <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200"> <h3 class="text-slate-900 font-bold mb-2 uppercase text-xs tracking-widest text-center">
Hexadecimal
</h3> <p class="text-sm">
Utiliza 16 símbolos (0-9 y A-F). Es ideal para representar bytes de
            forma compacta en programación.
</p> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/proyectos/seo-tools/src/pages/matematica/conversor-bases.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/proyectos/seo-tools/src/pages/matematica/conversor-bases.astro", void 0);
const $$file = "C:/proyectos/seo-tools/src/pages/matematica/conversor-bases.astro";
const $$url = "/matematica/conversor-bases/";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ConversorBases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
