// src/data/faqs.ts

export interface FAQItem {
  q: string;
  a: string;
}

export interface Relacionado {
  nombre: string;
  link: string;
}

// El objeto principal debe estar bien cerrado
export const dataFaqs: Record<string, { faqs: FAQItem[]; relacionados: Relacionado[] }> = {
  "asado": {
    faqs: [
      { 
        q: "¿Cuánta carne se calcula por persona en un asado?", 
        a: "La regla general es calcular 500 gramos de carne por adulto. Si hay muchos niños, podés calcular 250 gramos para ellos. Esto incluye cortes principales y achuras." 
      },
      { 
        q: "¿Cuánto carbón se necesita para un asado?", 
        a: "Se recomienda calcular 1kg de carbón por cada kilo de carne. Si el corte es grueso o hace mucho frío, sumá un poco más." 
      },
      { 
        q: "¿Qué cortes de carne son los mejores para la parrilla?", 
        a: "Los clásicos son el vacío, la tira de asado, el matambre y la entraña. Para algo económico, la falda es ideal." 
      },
      { 
        q: "¿Cómo calculo las achuras para una reunión?", 
        a: "Calculá 1 chorizo y media morcilla por persona como base estándar." 
      },
      { 
        q: "¿Cuál es el orden para poner la carne en la parrilla?", 
        a: "Primero los cortes con hueso a fuego lento, luego las achuras y al final los cortes finos a fuego fuerte." 
      }
    ],
    relacionados: [
      { nombre: "Gastos Compartidos", link: "/utiles/gastos-compartidos" },
      { nombre: "Calculadora de Bebidas", link: "/utiles/bebidas" },
      { nombre: "Calculadora de IVA", link: "/finanzas/porcentaje" }
    ]
  },
  "iva": {
    faqs: [
      { q: "¿Cómo calcular el IVA?", a: "Multiplicá el neto por 1.21 para sumarlo, o dividí el total por 1.21 para extraerlo." }
    ],
    relacionados: [
      { nombre: "Asado", link: "/utiles/asado" }
    ]
     },
  // Copiá y pegá esto dentro del objeto dataFaqs en src/data/faqs.ts

  "aguinaldo": {
    faqs: [
      { 
        q: "¿Cuándo se cobra el aguinaldo en Argentina?", 
        a: "El Sueldo Anual Complementario (SAC) se abona en dos cuotas: la primera con vencimiento el 30 de junio y la segunda con vencimiento el 18 de diciembre." 
      },
      { 
        q: "¿Cómo se calcula el aguinaldo si trabajé menos de seis meses?", 
        a: "En ese caso se realiza un cálculo proporcional. Debés dividir el 50% de tu mejor sueldo por 180 y multiplicarlo por la cantidad de días corridos trabajados en el semestre." 
      },
      { 
        q: "¿Qué conceptos se incluyen en el cálculo del SAC?", 
        a: "Se deben incluir todos los conceptos remunerativos: sueldo básico, horas extra, comisiones, gratificaciones y adicionales por convenio (antigüedad, título, etc.). No se incluyen conceptos no remunerativos." 
      },
      { 
        q: "¿El aguinaldo paga impuesto a las ganancias?", 
        a: "Depende de la legislación vigente y el piso salarial del momento. Generalmente, si el promedio de la remuneración no supera cierto tope fijado por AFIP, el aguinaldo queda exento." 
      },
      { 
        q: "¿Qué sucede con las inasistencias injustificadas?", 
        a: "Las inasistencias injustificadas se restan de los días trabajados en el semestre, por lo que el monto final del aguinaldo será levemente menor al ser un cálculo proporcional por días." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Indemnización", link: "/finanzas/indemnizacion" },
      { nombre: "Simulador de Préstamos", link: "/finanzas/prestamo" },
      { nombre: "Calculadora de IVA", link: "/finanzas/porcentaje" }
    ]
    },
};