/* empty css                                               */
import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BSF3J2kD.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CWBS5BnD.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://chieffin.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { titulo, descripcion, link, icon, color } = Astro2.props;
  const colors = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"> <div${addAttribute(`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:text-white transition-colors ${colors[color] || colors.blue}`, "class")}> <span class="font-bold text-xl">${icon}</span> </div> <h3 class="text-xl font-bold text-slate-800 mb-2">${titulo}</h3> <p class="text-slate-500 text-sm leading-relaxed">${descripcion}</p> </a>`;
}, "C:/proyectos/seo-tools/src/components/Card.astro", void 0);

const calculadoras = [
  {
    titulo: "IVA",
    descripcion: "Sumá o restá el 21% o 10.5% de forma profesional.",
    link: "/finanzas/iva",
    icon: "IVA",
    color: "blue"
  },
  {
    titulo: "Porcentajes",
    descripcion: "Calculá descuentos y variaciones al instante.",
    link: "/finanzas/porcentaje",
    icon: "%",
    color: "blue"
  },
  {
    titulo: "Préstamos",
    descripcion: "Simulá cuotas y costo total de tu crédito.",
    link: "/finanzas/prestamo",
    icon: "$",
    color: "indigo"
  },
  // Cuando quieras subir la número 50, solo agregás un bloque acá.
  {
    titulo: "Pintura",
    descripcion: "¿Cuántos litros necesitás para renovar tus paredes?",
    link: "/hogar/pintura",
    icon: "🎨",
    color: "blue"
    // o el color que prefieras
  },
  {
    titulo: "Edad Exacta",
    descripcion: "Descubrí cuántos días, horas y minutos viviste.",
    link: "/varios/edad",
    icon: "⏳",
    color: "emerald"
  },
  {
    titulo: "Luz y Consumo",
    descripcion: "Calculá el consumo de tus aparatos y ahorrá en tu factura.",
    link: "/hogar/luz",
    icon: "⚡",
    color: "blue"
  },
  {
    titulo: "Agua Diaria",
    descripcion: "Calculá cuánta agua necesitás según tu peso y actividad.",
    link: "/salud/agua",
    icon: "💧",
    color: "blue"
  },
  {
    titulo: "Regla de Tres",
    descripcion: "Resolvé proporciones matemáticas fácilmente.",
    link: "/matematica/regla-de-tres",
    icon: "✖️",
    color: "emerald"
  },
  {
    titulo: "Diferencia de Horas",
    descripcion: "Calculá el tiempo exacto entre dos horas y su valor decimal.",
    link: "/utiles/horas",
    icon: "⏱️",
    color: "blue"
  },
  {
    titulo: "Círculo",
    descripcion: "Calculá área y perímetro de un círculo fácilmente.",
    link: "/matematica/circulo",
    icon: "⭕",
    color: "orange"
  },
  {
    titulo: "Pitágoras",
    descripcion: "Hallá la hipotenusa de un triángulo rectángulo.",
    link: "/matematica/pitagoras",
    icon: "📐",
    color: "blue"
  },
  {
    titulo: "Área Triángulo",
    descripcion: "Calculá la superficie de cualquier triángulo.",
    link: "/matematica/triangulo",
    icon: "🔺",
    color: "orange"
  },
  {
    titulo: "Punto de Equilibrio",
    descripcion: "Calculá cuántas ventas necesitás para cubrir tus gastos.",
    link: "/negocios/punto-equilibrio",
    icon: "⚖️",
    color: "indigo"
  },
  {
    titulo: "Margen de Ganancia",
    descripcion: "Descubrí qué porcentaje de cada venta es utilidad real.",
    link: "/negocios/margen",
    icon: "📈",
    color: "emerald"
  },
  {
    titulo: "Precio de Venta",
    descripcion: "Calculá cuánto cobrar tus productos según tus costos.",
    link: "/negocios/precio-venta",
    icon: "💰",
    color: "blue"
  },
  {
    titulo: "ROI (Retorno)",
    descripcion: "Medí la rentabilidad de tus inversiones y negocios.",
    link: "/negocios/roi",
    icon: "🔄",
    color: "indigo"
  },
  {
    titulo: "Interés Simple",
    descripcion: "Calculá el interés de préstamos y ahorros básicos.",
    link: "/finanzas/interes-simple",
    icon: "📉",
    color: "blue"
  },
  {
    titulo: "Calculadora de Asado",
    descripcion: "¿Cuánta carne comprar? Calculá para tu próxima reunión.",
    link: "/utiles/asado",
    icon: "🥩",
    color: "red"
  },
  {
    titulo: "Propinas",
    descripcion: "Calculá el 10% o el servicio que prefieras en segundos.",
    link: "/utiles/propina",
    icon: "💸",
    color: "emerald"
  },
  {
    titulo: "Descuentos",
    descripcion: "Descubrí el precio final con descuentos aplicados.",
    link: "/utiles/descuentos",
    icon: "🏷️",
    color: "blue"
  },
  {
    titulo: "Combustible",
    descripcion: "Calculá cuánto gasta tu auto por kilómetro.",
    link: "/utiles/combustible",
    icon: "⛽",
    color: "orange"
  },
  {
    titulo: "Comprar vs Alquilar",
    descripcion: "Comparativa financiera para decidir tu próximo hogar.",
    link: "/finanzas/comprar-vs-alquilar",
    icon: "🏠",
    color: "blue"
  },
  {
    titulo: "Inflación Personal",
    descripcion: "Calculá cuánto poder adquisitivo perdiste este año.",
    link: "/finanzas/inflacion",
    icon: "📉",
    color: "red"
  },
  {
    titulo: "Calculadora de IMC",
    descripcion: "Descubrí si estás en tu peso ideal en segundos.",
    link: "/salud/imc",
    icon: "⚖️",
    color: "emerald"
  },
  {
    titulo: "Gasto Calórico",
    descripcion: "Calculá tu tasa metabólica basal y quemado diario.",
    link: "/salud/calorias",
    icon: "🔥",
    color: "orange"
  },
  {
    titulo: "Volumen y Definición",
    descripcion: "Calculá tus macros para ganar músculo o perder grasa.",
    link: "/salud/volumen-definicion",
    icon: "🦾",
    color: "orange"
  },
  {
    titulo: "Edad de Mascotas",
    descripcion: "Calculá la edad humana de tu perro o gato de forma precisa.",
    link: "/utiles/edad-mascotas",
    icon: "🐾",
    color: "yellow"
  },
  {
    titulo: "Calculadora de Proteína",
    descripcion: "Descubrí cuánta proteína necesitás según tu entrenamiento.",
    link: "/salud/proteina",
    icon: "🥩",
    color: "blue"
  },
  {
    titulo: "Calculadora de Ovulación",
    descripcion: "Descubrí tus días más fértiles y tu ciclo menstrual.",
    link: "/salud/ovulacion",
    icon: "🌸",
    color: "pink"
  },
  {
    titulo: "Calculadora de Embarazo",
    descripcion: "Seguimiento de semanas, trimestre y fecha de parto.",
    link: "/salud/embarazo",
    icon: "👶",
    color: "indigo"
  },
  {
    titulo: "Macros Keto",
    descripcion: "Calculá la proporción ideal de grasas y proteínas para cetosis.",
    link: "/salud/keto",
    icon: "🥑",
    color: "yellow"
  },
  {
    titulo: "FC Máxima",
    descripcion: "Calculá tu frecuencia cardíaca máxima para entrenar mejor.",
    link: "/salud/frecuencia-cardiaca",
    icon: "❤️",
    color: "red"
  },
  {
    titulo: "Dejar de Fumar",
    descripcion: "Calculá cuánto dinero y vida ahorrás sin el cigarrillo.",
    link: "/salud/dejar-de-fumar",
    icon: "🚭",
    color: "emerald"
  },
  {
    titulo: "Retiro FIRE",
    descripcion: "Calculá cuánto capital necesitás para jubilarte hoy mismo.",
    link: "/finanzas/retiro-fire",
    icon: "🏖️",
    color: "emerald"
  },
  {
    titulo: "Tarifa Freelance",
    descripcion: "Calculá cuánto cobrar por tu trabajo según tus gastos y metas.",
    link: "/negocios/tarifa-freelance",
    icon: "💼",
    color: "indigo"
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chieffin - Calculadoras Inteligentes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center py-16 px-4"> <h1 class="text-5xl font-black text-slate-900 tracking-tight">
Todas las <span class="text-blue-600">Calculadoras</span> </h1> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto mb-20"> ${calculadoras.map((calc) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...calc })}`)} </div> ` })}`;
}, "C:/proyectos/seo-tools/src/pages/index.astro", void 0);

const $$file = "C:/proyectos/seo-tools/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
