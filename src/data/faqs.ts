// src/data/faqs.ts

export interface FAQItem {
  q: string;
  a: string;
}

export interface Relacionado {
  nombre: string;
  link: string;
}

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

  "comprar-vs-alquilar": {
    faqs: [
      { 
        q: "¿Qué es el costo de oportunidad al comprar una casa?", 
        a: "Es el rendimiento que dejás de percibir por usar tus ahorros en la entrada de una casa en lugar de invertirlos en activos financieros (como acciones o bonos). A veces, esa rentabilidad perdida es mayor que lo que ahorrás de alquiler." 
      },
      { 
        q: "¿Cuándo es financieramente mejor alquilar que comprar?", 
        a: "Alquilar suele ser mejor cuando el precio de las propiedades está muy alto en relación a los alquileres (ratio PER), cuando planeás mudarte en menos de 5 años, o cuando las tasas de interés hipotecario son superiores a la inflación esperada." 
      },
      { 
        q: "¿Es la casa propia siempre una inversión?", 
        a: "Desde el punto de vista financiero estricto, una casa donde vivís es un activo que genera gastos (impuestos, mantenimiento, seguros). Se convierte en inversión solo si su valorización supera a la inflación y a los costos totales de mantenimiento a largo plazo." 
      },
      { 
        q: "¿Qué gastos ocultos tiene la compra de una propiedad?", 
        a: "Además del valor de venta, debés sumar gastos de escrituración (aprox. 3-5%), comisiones inmobiliarias, impuestos de sellos, seguros de hogar y un fondo de reserva para reparaciones futuras que antes cubría el dueño." 
      },
      { 
        q: "¿Cómo afecta la inflación a la decisión de comprar o alquilar?", 
        a: "La inflación suele favorecer al comprador con hipoteca a tasa fija, ya que el valor real de la deuda se licúa con el tiempo, mientras que los alquileres suelen ajustarse periódicamente según la inflación o contratos vigentes." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Préstamos", link: "/finanzas/prestamo" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Tasas TNA y TEA", link: "/finanzas/tea-tna" }
    ]
    },

  "costo-auto": {
    faqs: [
      { 
        q: "¿Qué se considera costo fijo y qué costo variable en un auto?", 
        a: "Los costos fijos son aquellos que pagás aunque el auto no se mueva (seguro, patente, cochera mensual). Los variables dependen del uso (combustible, peajes, desgaste de neumáticos y mantenimiento según kilometraje)." 
      },
      { 
        q: "¿Cómo calcular la depreciación de mi vehículo?", 
        a: "Una regla general es estimar que un auto pierde entre un 10% y un 15% de su valor anual. Para un cálculo mensual, podés estimar el 1% del valor de mercado del auto y sumarlo como un 'ahorro' necesario para cuando decidas cambiarlo." 
      },
      { 
        q: "¿Cuánto debería destinar mensualmente a mantenimiento preventivo?", 
        a: "Lo ideal es sumar el costo del service anual (aceite y filtros), un juego de neumáticos cada 50.000km y el cambio de distribución si corresponde, y dividir todo ese total por 12 meses." 
      },
      { 
        q: "¿Es más barato mantener un auto con GNC?", 
        a: "El costo por kilómetro en combustible baja drásticamente (entre un 40% y 60%), pero debés considerar los costos extra de la oblea anual, la prueba hidráulica cada 5 años y un mantenimiento más frecuente de bujías y cables." 
      },
      { 
        q: "¿Cómo puedo reducir los gastos mensuales de mi auto?", 
        a: "Revisar la presión de los neumáticos (ahorra combustible), comparar seguros anualmente, practicar una conducción suave y compartir gastos con compañeros de trabajo mediante carpooling son las formas más efectivas." 
      }
    ],
    relacionados: [
      { nombre: "Gastos Compartidos", link: "/utiles/gastos-compartidos" },
      { nombre: "Simulador de Préstamos", link: "/finanzas/prestamo" },
      { nombre: "Comprar o Alquilar Casa", link: "/utiles/comprar-vs-alquilar" }
    ]
  },

  "cuotas": {
    faqs: [
      { 
        q: "¿Qué es la TNA y en qué se diferencia de la TEA?", 
        a: "La TNA (Tasa Nominal Anual) es la tasa de referencia que no incluye la capitalización. La TEA (Tasa Efectiva Anual) es lo que realmente terminás pagando al cabo de un año si se reinvierten los intereses mes a mes. Siempre debés mirar la TEA o el CFT para conocer el costo real." 
      },
      { 
        q: "¿Qué significa el sistema de amortización francés?", 
        a: "Es el sistema más común en tarjetas y préstamos personales. Se caracteriza por cuotas mensuales iguales; al principio pagás más intereses que capital, y hacia el final de la financiación, la proporción se invierte." 
      },
      { 
        q: "¿Conviene comprar en cuotas con interés si hay inflación?", 
        a: "Sí, siempre que la tasa de interés (CFT) sea menor a la inflación proyectada. En ese caso, el valor real de la cuota se 'licúa' con el tiempo, y terminás pagando menos en términos de poder adquisitivo." 
      },
      { 
        q: "¿Qué es el CFT y por qué es más importante que la tasa?", 
        a: "El Costo Financiero Total (CFT) incluye la tasa de interés más todos los gastos extra, como seguros de vida, comisiones y gastos administrativos. Es el número final que determina si una compra financiada es cara o barata." 
      },
      { 
        q: "¿Cómo saber si un plan de 'cuotas sin interés' es real?", 
        a: "Compará el precio de las cuotas contra el precio de 'contado efectivo' con descuento. Si el precio de contado es menor, las cuotas tienen un interés implícito oculto en el precio de lista." 
      }
    ],
    relacionados: [
      { nombre: "Tasas TNA y TEA", link: "/finanzas/tea-tna" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Calculadora de IVA", link: "/finanzas/porcentaje" }
    ]
  },

  "dolar-tarjeta": {
    faqs: [
      { 
        q: "¿Qué impuestos se pagan en las compras con tarjeta en dólares?", 
        a: "Actualmente se aplican dos recargos principales sobre el dólar oficial: el Impuesto PAIS (30%) y la Percepción de Ganancias o Bienes Personales (30%). Esto da un recargo total del 60% sobre la cotización del banco." 
      },
      { 
        q: "¿Se puede recuperar el 30% de percepción de ganancias?", 
        a: "Sí. Quienes pagan Impuesto a las ganancias pueden deducirlo anualmente. Quienes no están alcanzados por el impuesto pueden solicitar la devolución (reintegro) a través de la web de AFIP una vez finalizado el año calendario." 
      },
      { 
        q: "¿Qué cotización se toma: la del día de compra o la del cierre?", 
        a: "Para tarjetas de crédito, se toma la cotización del dólar oficial del día del cierre del resumen o del día del pago. En tarjetas de débito, la conversión es instantánea al momento de la compra." 
      },
      { 
        q: "¿Cómo evitar pagar los impuestos del dólar tarjeta?", 
        a: "Podés evitar los impuestos pagando el resumen de la tarjeta directamente con dólares billete (depositados en tu cuenta) antes de la fecha de vencimiento. Al hacer 'Stop Debit' y pagar en USD, el banco debe descontar los impuestos PAIS y las percepciones." 
      },
      { 
        q: "¿Los servicios de streaming como Netflix o Spotify pagan menos impuestos?", 
        a: "Los servicios digitales tienen un tratamiento especial: el Impuesto PAIS es del 8% en lugar del 30%. Sin embargo, se le suman el IVA (21%) y las percepciones de ganancias, por lo que el valor final suele ser similar al dólar tarjeta estándar." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de IVA", link: "/finanzas/porcentaje" },
      { nombre: "Calculadora de Cuotas", link: "/finanzas/cuotas" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ]
  },

  "ganancias": {
    faqs: [
      { 
        q: "¿Qué es el Mínimo No Imponible?", 
        a: "Es el monto de ingresos a partir del cual un trabajador comienza a pagar el impuesto. Si tu sueldo neto (luego de aportes) es menor a este piso, no se te debe realizar ninguna retención por Ganancias." 
      },
      { 
        q: "¿Qué gastos se pueden deducir de Ganancias?", 
        a: "Podés deducir cargas de familia (hijos menores de 18 años o cónyuge sin ingresos), el 40% del alquiler de tu vivienda, cuotas de medicina prepaga, seguros de vida y donaciones, entre otros. Esto se informa a través del formulario SIRADIG-Trabajador." 
      },
      { 
        q: "¿Cómo funcionan las escalas del impuesto?", 
        a: "Ganancias es un impuesto progresivo. No pagás el mismo porcentaje sobre todo tu sueldo, sino que se aplican alícuotas que van del 5% al 35% sobre diferentes tramos del excedente por encima del mínimo no imponible." 
      },
      { 
        q: "¿El aguinaldo paga impuesto a las ganancias?", 
        a: "Depende de la ley vigente. Históricamente, el SAC (Sueldo Anual Complementario) ha tenido exenciones parciales o totales si el sueldo promedio del semestre no supera ciertos topes fijados por el gobierno." 
      },
      { 
        q: "¿Qué pasa si me retuvieron de más durante el año?", 
        a: "Al finalizar el año fiscal, el empleador realiza una liquidación anual. Si las retenciones mensuales superaron lo que correspondía según el cálculo anual total, el excedente se devuelve en el recibo de sueldo de los meses siguientes (generalmente entre abril y mayo)." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Aguinaldo", link: "/finanzas/aguinaldo" },
      { nombre: "Calculadora de Indemnización", link: "/finanzas/indemnizacion" },
      { nombre: "Dólar Tarjeta (Percepciones)", link: "/finanzas/dolar-tarjeta" }
    ]
  },

  "indemnizacion": {
    faqs: [
      { 
        q: "¿Qué es el Artículo 245 de la Ley de Contrato de Trabajo?", 
        a: "Es la norma que establece la indemnización por antigüedad o despido sin causa. Determina que el empleador debe pagar un mes de sueldo por cada año de servicio o fracción mayor a tres meses, tomando como base la mejor remuneración mensual, normal y habitual del último año." 
      },
      { 
        q: "¿Cómo se cuenta la antigüedad si trabajé meses extras?", 
        a: "La ley es clara: si trabajaste una fracción mayor a 3 meses después de cumplir un año (o desde el inicio), esa fracción se cuenta como un año entero a efectos del cálculo del rubro antigüedad." 
      },
      { 
        q: "¿Qué diferencia hay entre Liquidación Final e Indemnización?", 
        a: "La liquidación final se paga siempre (renuncia o despido) e incluye días trabajados, aguinaldo y vacaciones proporcionales. La indemnización es un extra que se paga únicamente en casos de despido sin causa o despido indirecto." 
      },
      { 
        q: "¿Qué es la indemnización por falta de preaviso?", 
        a: "Si el empleador no te avisa del despido con la anticipación legal (15 días en periodo de prueba, 1 mes si la antigüedad es menor a 5 años, o 2 meses si es mayor), debe pagarte los salarios correspondientes a ese periodo en el que no trabajaste." 
      },
      { 
        q: "¿Qué pasa con el aguinaldo y las vacaciones en el despido?", 
        a: "Deben pagarse como 'proporcionales'. Se calcula cuánto te correspondería de aguinaldo y vacaciones por el tiempo exacto trabajado desde el último pago hasta la fecha del despido, incluyendo el SAC sobre el preaviso." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Aguinaldo", link: "/finanzas/aguinaldo" },
      { nombre: "Impuesto a las Ganancias", link: "/finanzas/ganancias" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ] 
  },
  "inflacion": {
    faqs: [
      { 
        q: "¿Cuál es la diferencia entre inflación y costo de vida?", 
        a: "La inflación es el aumento promedio de todos los precios (medido por el IPC), mientras que el costo de vida es cuánto dinero necesita una persona o familia específica para mantener su estándar de consumo, el cual puede subir más o menos que el índice oficial según sus hábitos." 
      },
      { 
        q: "¿Qué significa que la inflación es 'acumulada'?", 
        a: "Significa que los aumentos se aplican sobre los precios ya aumentados el mes anterior. Por ejemplo, si hay 10% de inflación dos meses seguidos, el total no es 20%, sino 21%, debido al efecto del interés compuesto sobre los precios." 
      },
      { 
        q: "¿Cómo se calcula el impacto en mi sueldo?", 
        a: "Si la inflación fue del 100% y tu sueldo no aumentó, ahora podés comprar exactamente la mitad de lo que comprabas antes. Para mantener tu poder adquisitivo, tu sueldo debería subir en la misma proporción que el índice de precios." 
      },
      { 
        q: "¿Por qué existe la inflación?", 
        a: "Las causas son variadas: emisión monetaria excesiva, aumento en los costos de producción, exceso de demanda sobre la oferta, o expectativas de futuros aumentos que hacen que los comerciantes remarquen 'por las dudas'." 
      },
      { 
        q: "¿Qué activos financieros protegen mejor contra la inflación?", 
        a: "Históricamente, los activos 'reales' (propiedades, oro) y los instrumentos financieros que ajustan por el índice de precios (como los plazos fijos UVA o bonos CER) son los que mejor conservan el valor frente a la subida de precios." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Calculadora de Cuotas", link: "/finanzas/cuotas" },
      { nombre: "Dólar Tarjeta", link: "/finanzas/dolar-tarjeta" }
    ]
  },
  "interes-mora": {
    faqs: [
      { 
        q: "¿Qué es el interés moratorio?", 
        a: "Es la indemnización que debe pagar el deudor por el retraso en el cumplimiento de una obligación pecuniaria. Su objetivo es reparar el daño que causa al acreedor no disponer del dinero en el tiempo pactado." 
      },
      { 
        q: "¿Cuál es la diferencia entre interés resarcitorio y punitorio?", 
        a: "El interés resarcitorio busca compensar la falta de disponibilidad del dinero (reparar el daño), mientras que el punitorio suele aplicarse cuando existe una instancia judicial o una penalidad pactada por contrato para castigar la demora." 
      },
      { 
        q: "¿Existe un límite máximo para la tasa de interés por mora?", 
        a: "Sí. Aunque las partes pueden pactar tasas, la justicia argentina suele considerar 'abusivas' o 'usurarias' aquellas tasas que superan significativamente el costo financiero promedio del mercado. En consorcios, por ejemplo, los jueces suelen moderarlas si exceden el 3% o 4% mensual." 
      },
      { 
        q: "¿Cómo se calculan los días de mora?", 
        a: "Se cuentan desde el día siguiente al vencimiento original hasta el día de pago efectivo, inclusive. La mayoría de los sistemas utilizan un mes base de 30 días para obtener la tasa diaria proporcional." 
      },
      { 
        q: "¿Qué pasa si la tasa pactada es anual?", 
        a: "Simplemente debés dividir la tasa anual por 365 para obtener la tasa diaria, y luego multiplicarla por el monto y los días de atraso. El resultado final será el mismo proporcionalmente." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Dólar Tarjeta", link: "/finanzas/dolar-tarjeta" }
    ]
     },
 "interes-simple": {
  "faqs": [
    {
      "q": "¿Cuál es la fórmula del interés simple?",
      "a": "La fórmula es I = C * i * t, donde I es el interés, C el capital, i la tasa de interés anual y t el tiempo en años."
    },
    {
      "q": "¿Qué diferencia hay entre interés simple y compuesto?",
      "a": "En el interés simple los beneficios no se reinvierten, mientras que en el compuesto los intereses se suman al capital para generar nuevos intereses."
    },
    {
      "q": "¿Qué unidades se deben usar para el tiempo?",
      "a": "Generalmente se usan años. Si tienes meses, divide el número por 12 para obtener la fracción de año correspondiente."
    },
    {
      "q": "¿El interés simple es mejor para ahorrar?",
      "a": "Para el ahorro a largo plazo suele ser mejor el interés compuesto, ya que aprovecha el crecimiento exponencial de reinvertir las ganancias."
    },
    {
      "q": "¿Dónde se aplica comúnmente el interés simple?",
      "a": "Se utiliza en préstamos personales rápidos, descuentos comerciales de facturas y cupones de bonos fijos."
    }
  ],
  "relacionados": [
    { "nombre": "Interés Compuesto", "link": "/finanzas/interes-compuesto" },
    { "nombre": "Calculadora de Inflación", "link": "/finanzas/inflacion" },
    { "nombre": "IVA y Tasas", "link": "/finanzas/calculadora-iva" }
  ]
  },

  "iva": {
    faqs: [
      { 
        q: "¿Qué es el IVA y quiénes deben pagarlo?", 
        a: "El IVA (Impuesto al Valor Agregado) es un impuesto indirecto sobre el consumo. Lo pagan los consumidores finales al comprar productos o servicios, y lo recaudan los Responsables Inscriptos para luego liquidarlo ante la AFIP." 
      },
      { 
        q: "¿Cómo se hace el cálculo para 'quitar' el IVA?", 
        a: "Para discriminar el IVA de un precio total, no se debe restar el 21%. La fórmula correcta es dividir el monto total por 1.21 (para la tasa general). Por ejemplo: $$1210 / 1.21 = 1000$$. El IVA es la diferencia: $210." 
      },
      { 
        q: "¿A qué productos se aplica el IVA reducido del 10.5%?", 
        a: "Esta tasa se aplica a ciertos bienes de capital, carnes, frutas, hortalizas, legumbres frescas y ciertos servicios de transporte, además de la construcción de viviendas." 
      },
      { 
        q: "¿El IVA se aplica a los Monotributistas?", 
        a: "Los Monotributistas no discriminan IVA en sus facturas (emitidas como Tipo C). El impuesto ya está incluido en la cuota fija mensual del régimen, por lo que no deben sumarlo adicionalmente a sus precios de venta." 
      },
      { 
        q: "¿Qué es el IVA de servicios públicos (27%)?", 
        a: "Es una tasa diferencial que se aplica a los consumos de energía eléctrica, gas y servicios de agua cuando el comprador es una empresa o un Responsable Inscripto. Los consumidores finales suelen pagar el 21% en estas facturas." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de ROI", link: "/negocios/roi/" },
      { nombre: "Calculadora de Porcentaje", link: "/finanzas/porcentaje/" },
      { nombre: "Impuesto a las Ganancias", link: "/finanzas/ganancias" }
    ]
  },

  "meta-ahorro": {
    faqs: [
      { 
        q: "¿Qué porcentaje de mis ingresos debería ahorrar?", 
        a: "Una regla muy popular es la 50/30/20: 50% para necesidades básicas, 30% para gastos personales y 20% para ahorro. Si tu capacidad actual es menor, lo importante es empezar con un monto fijo, aunque sea pequeño, para crear el hábito." 
      },
      { 
        q: "¿Cómo influye la inflación en mi meta de ahorro?", 
        a: "Si ahorrás en pesos a largo plazo, el monto que hoy parece suficiente podría no alcanzar en el futuro. Es vital que ese ahorro mensual no se quede quieto: invertilo en instrumentos que sigan la inflación o convertilo a moneda dura para no perder poder de compra." 
      },
      { 
        q: "¿Es mejor ahorrar o pagar deudas primero?", 
        a: "Generalmente, conviene pagar deudas con intereses altos (como tarjetas de crédito) antes de ahorrar, ya que el interés que pagás suele ser mayor al que podés ganar invirtiendo. Una excepción es tener un pequeño fondo de emergencia antes de atacar las deudas." 
      },
      { 
        q: "¿Qué es el ahorro hormiga?", 
        a: "Se refiere a esos pequeños gastos diarios (café, snacks, suscripciones que no usás) que parecen insignificantes pero sumados a fin de mes pueden representar un 10% o 15% de tu capacidad de ahorro." 
      },
      { 
        q: "¿Cómo puedo acelerar el cumplimiento de mi meta?", 
        a: "Hay dos caminos: aumentar tus ingresos (freelance, ventas extra) o reducir gastos fijos. Además, si invertís tu ahorro previo, los intereses generados trabajarán a tu favor reduciendo el esfuerzo mensual necesario." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" },
      { nombre: "Presupuesto Mensual", link: "/finanzas/regla-50-30-20/" }
    ]
  },

  "plazo-fijo": {
    faqs: [
      { 
        q: "¿Qué es la TNA (Tasa Nominal Anual)?", 
        a: "Es el porcentaje de interés que el banco te paga por año, sin considerar la reinversión de los intereses. Es el valor de referencia que ves en las pizarras de los bancos, pero no refleja tu ganancia real si decidís reinvertir mes a mes." 
      },
      { 
        q: "¿Qué es la TEA (Tasa Efectiva Anual)?", 
        a: "La TEA es la tasa que realmente ganás en un año si, cada vez que vence tu plazo fijo (por ejemplo, cada 30 días), volvés a invertir el capital inicial más los intereses ganados. Es la aplicación práctica del interés compuesto." 
      },
      { 
        q: "¿Cuál es el plazo mínimo y máximo para un Plazo Fijo?", 
        a: "En Argentina, el plazo mínimo de constitución es de 30 días. No hay un plazo máximo legal estricto, pero la mayoría de las entidades permiten colocaciones de hasta 365 días." 
      },
      { 
        q: "¿Qué pasa si necesito el dinero antes del vencimiento?", 
        a: "En un Plazo Fijo tradicional, no podés retirar el dinero hasta que finalice el plazo pactado. Si creés que podés necesitar los fondos, existen los 'Plazos Fijos Precancelables', que permiten el retiro anticipado (generalmente después del día 30) a una tasa menor." 
      },
      { 
        q: "¿Es seguro invertir en Plazo Fijo?", 
        a: "Sí, es una de las inversiones más seguras. Además, en Argentina existe el Seguro de Garantía de los Depósitos (SEDESA), que cubre los depósitos en pesos y moneda extranjera hasta un monto determinado por persona y por entidad." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" },
      { nombre: "Dólar Tarjeta", link: "/finanzas/dolar-tarjeta" }
    ]
  },

  "porcentaje": {
    faqs: [
      { 
        q: "¿Qué es un porcentaje y qué representa?", 
        a: "Un porcentaje es una forma de expresar un número como una fracción de 100. El símbolo '%' significa literalmente 'por cada cien'. Por ejemplo, el 25% representa 25 de cada 100 unidades, o lo que es lo mismo, un cuarto del total." 
      },
      { 
        q: "¿Cómo calculo un porcentaje rápido en la mente?", 
        a: "Un truco útil es obtener primero el 10% (dividiendo el número por 10) y luego multiplicar o dividir según necesites. Para el 5%, dividí el 10% a la mitad. Para el 20%, duplicá el 10%." 
      },
      { 
        q: "¿Cómo se calcula un aumento porcentual?", 
        a: "Para aplicar un aumento (como un recargo o inflación), multiplicá el valor base por (1 + porcentaje/100). Por ejemplo, para aumentar un 15%, multiplicá por 1.15. La fórmula es $$V_f = V_i \cdot (1 + r)$$." 
      },
      { 
        q: "¿Cómo se calcula un descuento?", 
        a: "Para restar un porcentaje, multiplicá el valor original por (1 - porcentaje/100). Si un producto tiene un 20% de descuento, multiplicá su precio por 0.80 para obtener el precio final." 
      },
      { 
        q: "¿Los porcentajes son reversibles?", 
        a: "¡Sí! Este es un gran truco matemático: el $x\%$ de $y$ es igual al $y\%$ de $x$. Por ejemplo, calcular el 8% de 50 es difícil, pero el 50% de 8 es 4. El resultado es el mismo." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" }
    ]
  },

  "prestamo": {
    faqs: [
      { 
        q: "¿Qué es el Sistema de Amortización Francés?", 
        a: "Es un método donde las cuotas son iguales durante todo el préstamo. La particularidad es que al principio de la vida del crédito, la mayor parte de la cuota se destina a pagar intereses, mientras que hacia el final, la mayor parte se destina a devolver el capital original." 
      },
      { 
        q: "¿Cuál es la diferencia entre TNA y CFT?", 
        a: "La TNA es la tasa base, pero el CFT (Costo Financiero Total) es lo más importante. El CFT incluye la tasa de interés más todos los gastos administrativos, seguros e impuestos. Es el número real que debés comparar entre distintos bancos." 
      },
      { 
        q: "¿Puedo cancelar mi préstamo antes de tiempo?", 
        a: "Sí, por normativa del BCRA, los préstamos personales pueden precancelarse. Si lo hacés cuando ya pasó al menos una cuarta parte del plazo o 180 días desde el otorgamiento, el banco no puede cobrarte comisiones de precancelación." 
      },
      { 
        q: "¿Qué pasa si me retraso en el pago de una cuota?", 
        a: "Si te retrasás, el banco comenzará a cobrarte intereses moratorios (por la demora) que se suman a los intereses compensatorios (los del préstamo). Esto aumenta rápidamente tu deuda y afecta tu historial crediticio en el Veraz." 
      },
      { 
        q: "¿Es conveniente pedir un préstamo con alta inflación?", 
        a: "Depende de si la tasa del préstamo es fija o variable. Si lográs una tasa fija que sea menor a la inflación proyectada, la cuota se irá 'licuando' (representará una parte cada vez menor de tus ingresos), lo cual puede ser beneficioso." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Presupuesto Mensual", link: "/finanzas/regla-50-30-20" }
    ]
  },

  "regla-50-30-20": {
    faqs: [
      { 
        q: "¿Qué pasa si mis gastos fijos superan el 50%?", 
        a: "En contextos de alta inflación o alquileres caros, es común que esto suceda. Si tus necesidades ocupan el 60% o 70%, debés ajustar temporalmente el porcentaje de 'Deseos'. Lo ideal es no sacrificar nunca el 20% de ahorro por completo, aunque sea un 5% o 10% para mantener el hábito." 
      },
      { 
        q: "¿Debo usar el ingreso bruto o el neto?", 
        a: "Siempre debés usar el ingreso neto, es decir, el dinero que efectivamente se deposita en tu cuenta (el 'sueldo en mano') después de jubilación, obra social e impuestos." 
      },
      { 
        q: "¿El pago de deudas entra en Necesidades o Ahorro?", 
        a: "Depende de la deuda. El pago mínimo de una tarjeta o la cuota de un préstamo es una 'Necesidad' (porque el impago tiene consecuencias legales). Sin embargo, los pagos extraordinarios para cancelar deuda rápido deben salir del 20% de 'Ahorro e Inversión'." 
      },
      { 
        q: "¿Qué incluye exactamente la categoría de 'Deseos'?", 
        a: "Incluye todo aquello que mejora tu calidad de vida pero no es esencial para sobrevivir: suscripciones a streaming, salidas a comer, hobbies, ropa que no sea de primera necesidad y viajes." 
      },
      { 
        q: "¿Es apta esta regla para freelancers o ingresos variables?", 
        a: "Sí, pero se recomienda calcular un promedio de los últimos 3 o 6 meses. Si un mes ganás más de lo habitual, destiná ese excedente directamente al 20% de ahorro para cubrir los meses de ingresos bajos." 
      }
    ],
    relacionados: [
      { nombre: "Meta de Ahorro", link: "/finanzas/meta-ahorro" },
      { nombre: "Calculadora de Plazo Fijo", link: "/finanzas/plazo-fijo" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" }
    ]
  },

  "retiro-fire": {
    faqs: [
      { 
        q: "¿Por qué se multiplica el gasto anual por 25?", 
        a: "Es la inversa de la Regla del 4%. Si necesitás que el 4% de tu capital cubra tus gastos de un año, matemáticamente necesitás tener ahorrado 25 veces ese gasto anual ($$100 / 4 = 25$$). Es el punto de equilibrio histórico donde una cartera diversificada sobrevive a los retiros." 
      },
      { 
        q: "¿Qué diferencia hay entre Lean FIRE, Fat FIRE y Coast FIRE?", 
        a: "Lean FIRE busca retirarse con gastos mínimos (estilo de vida austero). Fat FIRE es para quienes desean un retiro de lujo con gastos altos. Coast FIRE es cuando ya tenés suficiente invertido para que, sin aportar más, el interés compuesto te lleve a la libertad financiera a la edad de jubilación." 
      },
      { 
        q: "¿La regla del 4% funciona en Argentina?", 
        a: "La regla está basada en mercados globales (como el S&P 500) y dólares. En Argentina, debido a la inflación, es fundamental que el cálculo y la inversión se realicen en moneda dura para que los retiros mantengan su poder adquisitivo a lo largo de décadas." 
      },
      { 
        q: "¿Qué activos debería tener en mi cartera FIRE?", 
        a: "Generalmente se basa en una mezcla de acciones (para crecimiento) y bonos (para estabilidad). Los fondos indexados (ETFs) que replican el mercado mundial o el S&P 500 son los favoritos de la comunidad FIRE por su bajo costo y diversificación automática." 
      },
      { 
        q: "¿Cómo afecta la inflación al número FIRE?", 
        a: "La Regla del 4% ya contempla una inflación moderada. Sin embargo, si la inflación se dispara, tu 'número' debe ajustarse. Por eso, muchos seguidores del movimiento prefieren usar una 'tasa de retiro segura' más conservadora, como el 3% o 3.5%." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Regla 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Meta de Ahorro", link: "/finanzas/meta-ahorro" }
    ]
  },

  "vacaciones": {
    faqs: [
      { 
        q: "¿A partir de cuándo se cuentan los años de antigüedad?", 
        a: "La antigüedad se toma al 31 de diciembre del año al que corresponden las vacaciones. Por ejemplo, si cumplís 5 años de antigüedad el 20 de diciembre, ese año ya te corresponden 21 días de vacaciones, aunque te las tomes en noviembre." 
      },
      { 
        q: "¿Qué pasa si no trabajé el año completo?", 
        a: "Si no llegaste a trabajar la mitad de los días hábiles del año, te corresponde 1 día de vacaciones por cada 20 días de trabajo efectivo. Si superaste la mitad del año, te corresponden los días según la tabla de antigüedad completa." 
      },
      { 
        q: "¿Las vacaciones son días hábiles o corridos?", 
        a: "Por la Ley de Contrato de Trabajo (LCT), las vacaciones se cuentan en días corridos. Deben comenzar un día lunes o el primer día hábil si el lunes fuera feriado." 
      },
      { 
        q: "¿Cuándo se debe pagar el plus vacacional?", 
        a: "La ley establece que el monto de las vacaciones debe ser pagado antes del inicio de las mismas. Por eso, es común ver el adelanto vacacional en el recibo de sueldo del mes anterior o en un pago por separado justo antes de salir de licencia." 
      },
      { 
        q: "¿Me pueden obligar a tomarme las vacaciones en invierno?", 
        a: "El empleador tiene derecho a conceder la licencia entre el 1° de octubre y el 30 de abril. Sin embargo, debe notificarte con al menos 45 días de anticipación y asegurar que, al menos cada tres años, te correspondan en temporada de verano." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Aguinaldo", link: "/finanzas/aguinaldo" },
      { nombre: "Presupuesto 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" }
    ]
  },

  "aire-acondicionado": {
    faqs: [
      { 
        q: "¿Qué es una frigoría exactamente?", 
        a: "La frigoría es una unidad de medida de energía (técnicamente una kilocaloría negativa) que indica la capacidad de un equipo para absorber calor. En muchos países se utiliza el BTU (British Thermal Unit). La relación es simple: 1 frigoría equivale aproximadamente a 4 BTU." 
      },
      { 
        q: "¿Por qué es malo comprar un aire con pocas frigorías?", 
        a: "Si el equipo es chico para el ambiente, el compresor funcionará al 100% de su capacidad sin detenerse nunca. Esto genera un consumo eléctrico excesivo, un desgaste prematuro del motor y, lo peor de todo, nunca alcanzará la temperatura deseada." 
      },
      { 
        q: "¿Qué diferencia hay entre un aire On/Off y un Inverter?", 
        a: "Los equipos tradicionales (On/Off) arrancan y frenan el motor constantemente. Los Inverter regulan la velocidad del motor para mantener una temperatura constante. Aunque son más caros, ahorran hasta un 35-50% de energía, lo que se traduce en una factura de luz mucho más baja." 
      },
      { 
        q: "¿Influye la altura del techo en el cálculo?", 
        a: "Sí, influye mucho. El cálculo estándar asume una altura de entre 2.5 y 3 metros. Si tenés techos muy altos (como en lofts o casas antiguas), deberías calcular el volumen total ($$ancho \cdot largo \cdot alto$$) y multiplicar por 50 para obtener las frigorías necesarias." 
      },
      { 
        q: "¿Cómo puedo ayudar al equipo a enfriar mejor?", 
        a: "Mantener los filtros limpios mensualmente, usar cortinas black-out en ventanas donde da el sol y sellar filtraciones de aire en puertas son medidas que reducen drásticamente el esfuerzo del equipo y el gasto energético." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de IVA", link: "/finanzas/calculadora-iva" },
      { nombre: "Presupuesto 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Calculadora de Porcentajes", link: "/matematicas/porcentajes" }
    ]
  },

  "luz": {
    faqs: [
      { 
        q: "¿Qué es un kWh y cómo lo calculo?", 
        a: "Un kWh (kilovatio-hora) es la unidad que mide tu consumo de energía. Se calcula multiplicando la potencia del aparato en vatios por el tiempo de uso en horas y dividiéndolo por 1.000. Por ejemplo, una estufa de 1000W encendida por 1 hora consume exactamente 1 kWh." 
      },
      { 
        q: "¿Dónde encuentro el costo del kWh en mi factura?", 
        a: "En las facturas (como las de Edesur, Edenor o cooperativas), buscá el apartado 'Detalle de conceptos eléctricos'. Allí verás un valor llamado 'Cargo Variable' o 'Precio de la energía'. Ese es el costo por cada kWh que debés ingresar en la calculadora." 
      },
      { 
        q: "¿Qué son las categorías de usuario (R1, R2, etc.)?", 
        a: "En Argentina, el costo del kWh varía según cuánto consumas bimestralmente. Si superás ciertos límites (como los 400 kWh mensuales), podés saltar de categoría (ej. de R2 a R3), donde el precio de cada kWh es más caro y los impuestos aumentan." 
      },
      { 
        q: "¿Cuáles son los electrodomésticos que más consumen?", 
        a: "Los que generan calor o frío extremo son los 'pesados': pavas eléctricas, termotanques eléctricos, estufas de cuarzo y el aire acondicionado. Una pava eléctrica consume en un minuto lo mismo que una bombita LED en varias horas." 
      },
      { 
        q: "¿Cómo leo la etiqueta de eficiencia energética?", 
        a: "La etiqueta va de la 'A' (verde, más eficiente) a la 'G' (rojo, menos eficiente). Un aparato Clase A puede consumir hasta un 50% menos que uno similar Clase D. Es una inversión que se paga sola con el ahorro de luz." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Frigorías", link: "/hogar/aire-acondicionado/" },
      { nombre: "Presupuesto 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" }
    ]
  },

  "hormigon": {
    faqs: [
      { 
        q: "¿Qué significa la dosificación 1:2:3?", 
        a: "Es la proporción por volumen de los componentes: 1 parte de cemento, 2 de arena y 3 de piedra. Es la mezcla estándar para hormigón estructural (H21) que se usa en columnas, vigas y losas, garantizando una resistencia adecuada para sostener peso." 
      },
      { 
        q: "¿Cuántos baldes de arena y piedra son una bolsa de cemento?", 
        a: "En una mezcla 1:2:3, por cada bolsa de cemento (que rinde aproximadamente 2 baldes de albañil), deberías usar 4 baldes de arena y 6 baldes de piedra partida. Mantener esta proporción es vital para la durabilidad del hormigón." 
      },
      { 
        q: "¿Por qué el cálculo me da más metros de los que compré?", 
        a: "Es normal. Al mezclar los materiales con agua, se produce un fenómeno de 'contracción'. La arena ocupa los huecos entre las piedras y el cemento los de la arena. Por eso, para obtener 1 m³ de hormigón terminado, necesitás sumar aproximadamente 1.3 m³ de materiales secos." 
      },
      { 
        q: "¿Qué es el 'espesor' recomendado para un contrapiso?", 
        a: "Para un contrapiso sobre tierra, se recomienda un espesor de entre 8 y 12 cm. Si es una carpeta de nivelación sobre una losa existente, con 3 a 5 cm suele ser suficiente, siempre dependiendo del tránsito que vaya a recibir." 
      },
      { 
        q: "¿Es mejor comprar los materiales por separado o el hormigón elaborado?", 
        a: "Si tenés que llenar más de 2 o 3 m³, el hormigón elaborado de planta suele ser más eficiente, rápido y garantiza una calidad uniforme. Para reparaciones pequeñas o lugares de difícil acceso para el camión, la mezcla manual o con hormigonera es la opción lógica." 
      }
    ],
    relacionados: [
      { nombre: "Consumo Eléctrico", link: "/finanzas/consumo-electrico" },
      { nombre: "Presupuesto 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "ladrillos": {
    faqs: [
      { 
        q: "¿Cuántos ladrillos entran en un metro cuadrado?", 
        a: "Depende del tipo: para ladrillos comunes se calculan unos 60 por m². Para ladrillos huecos (de 12x18x33 o 18x18x33), se calculan entre 15 y 16 unidades por m². Los bloques de cemento grandes rinden más, ocupando unas 12.5 unidades por m²." 
      },
      { 
        q: "¿Cómo calculo las aberturas?", 
        a: "Para un cálculo exacto, multiplicá el ancho por el alto de tus puertas y ventanas, y restá ese valor de los metros cuadrados totales de la pared antes de calcular la cantidad de ladrillos." 
      },
      { 
        q: "¿Qué diferencia hay entre una pared de 12, 15 y 18?", 
        a: "Se refiere al espesor del muro terminado. Una pared de 12 es común para tabiques internos. Las de 15 o 18 se usan para paredes exteriores o divisorias, ya que ofrecen mayor aislamiento térmico y acústico." 
      },
      { 
        q: "¿Por qué se suma un porcentaje de desperdicio?", 
        a: "En la construcción es inevitable que algunos ladrillos lleguen rotos del corralón o se partan al cortarlos para ajustar esquinas y encuentros. Se recomienda sumar entre un 5% y un 10% extra para no frenar la obra por falta de material." 
      },
      { 
        q: "¿Ladrillo hueco o ladrillo común?", 
        a: "El ladrillo hueco es más rápido de colocar y requiere menos mezcla, ideal para estructuras con vigas y columnas. El ladrillo común (o macizo) es excelente para muros portantes y ofrece una inercia térmica superior, manteniendo mejor el clima interno." 
      }
    ],
    relacionados: [
      { nombre: "Cálculo de Hormigón", link: "/finanzas/calculadora-hormigon" },
      { nombre: "Consumo Eléctrico", link: "/finanzas/consumo-electrico" },
      { nombre: "Calculadora de IVA", link: "/finanzas/calculadora-iva" }
    ]
  },

  "consumo-electrico": {
    faqs: [
      { 
        q: "¿Qué significa el valor de Watts en un aparato?", 
        a: "Los Watts (W) indican la potencia, es decir, cuánta energía necesita el aparato para funcionar en un momento dado. Cuanto mayor es la potencia, más energía consume por cada hora que permanece encendido." 
      },
      { 
        q: "¿Es lo mismo 1000W que 1 kWh?", 
        a: "Casi. 1 kWh (kilovatio-hora) es el consumo de un aparato de 1000W funcionando durante una hora exacta. Es la unidad que las empresas eléctricas usan para cobrarte en la factura." 
      },
      { 
        q: "¿Cuánto consume realmente un aire acondicionado?", 
        a: "Un aire de 3000 frigorías consume aproximadamente entre 1300W y 1600W. Sin embargo, si es tecnología Inverter, el consumo baja drásticamente una vez que el ambiente llega a la temperatura deseada, ya que el motor no se apaga sino que baja su velocidad." 
      },
      { 
        q: "¿Qué electrodomésticos conviene desenchufar?", 
        a: "Todos los que tengan una luz roja o reloj digital (TV, microondas, consolas de video). Este 'consumo fantasma' o stand-by no parece mucho, pero sumado las 24 horas del día, infla tu factura innecesariamente." 
      },
      { 
        q: "¿Cómo calculo el costo en pesos?", 
        a: "Multiplicá los kWh que te da la calculadora por el precio del kWh que figura en tu factura. Tené en cuenta que a ese subtotal se le suelen sumar impuestos municipales y el IVA (21%), lo que puede aumentar el costo final un 30% o más." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Frigorías", link: "/hogar/frigorias" },
      { nombre: "Cálculo de Ladrillos", link: "/construccion/ladrillos" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "metros-cuadrados": {
    faqs: [
      { 
        q: "¿Cómo mido una habitación que no es un rectángulo perfecto?", 
        a: "La mejor técnica es la 'descomposición': dividí el suelo en rectángulos más pequeños, calculá el área de cada uno y luego sumalos. Si hay una parte triangular, recordá que su área es (Base × Altura) / 2." 
      },
      { 
        q: "¿Cómo calculo los m² de una pared con ventanas?", 
        a: "Primero calculá el total de la pared (Largo × Alto). Luego calculá el área de cada ventana y puerta, y restáselas al total. Así obtendrás la superficie neta que realmente vas a pintar o revestir." 
      },
      { 
        q: "¿Qué significa el 10% de desperdicio?", 
        a: "Al colocar pisos o azulejos, siempre hay que hacer cortes para los bordes y las esquinas. Esas piezas sobrantes muchas veces no se pueden reutilizar. Comprar un 10% extra te asegura terminar el trabajo sin tener que volver al corralón por una caja más." 
      },
      { 
        q: "¿Es lo mismo metro cuadrado que metro lineal?", 
        a: "No. El metro lineal mide solo longitud (una dimensión), como un zócalo o una moldura. El metro cuadrado mide superficie (dos dimensiones: largo y ancho). 1 m² es un cuadrado que mide 1 metro de cada lado." 
      },
      { 
        q: "¿Cómo paso de centímetros a metros para el cálculo?", 
        a: "Para que el resultado sea en m², todas tus medidas deben estar en metros. Si mediste en centímetros, dividí por 100. Por ejemplo: 50 cm son 0.50 m." 
      }
    ],
    relacionados: [
      { nombre: "Cálculo de Ladrillos", link: "/construccion/ladrillos" },
      { nombre: "Cálculo de Hormigón", link: "/construccion/hormigon" },
      { nombre: "Consumo Eléctrico", link: "/hogar/consumo-electrico" }
    ]
  },

  "pintura": {
    faqs: [
      { 
        q: "¿Cuánto rinde un litro de pintura?", 
        a: "Como regla general, 1 litro de látex de buena calidad rinde entre 10 y 12 m² por mano. Sin embargo, en paredes nuevas o muy porosas, el rendimiento puede bajar a 8 m² por litro." 
      },
      { 
        q: "¿Cuántas manos de pintura son necesarias?", 
        a: "Para un acabado profesional, se recomiendan 2 manos. Si vas a cambiar de un color muy oscuro a uno claro, es probable que necesites 3 manos o una base de fijador blanco previo." 
      },
      { 
        q: "¿Cómo calculo las aberturas para no comprar de más?", 
        a: "Una puerta estándar ocupa unos 2 m² y una ventana promedio 1.5 m². Restá estas medidas del total de tu pared para obtener los 'metros reales' a pintar y ahorrar en materiales." 
      },
      { 
        q: "¿Qué es el fijador y cuándo se usa?", 
        a: "El fijador sellador se usa en paredes nuevas, con parches de enduído o pintura vieja descascarada. Su función es 'cerrar los poros' de la pared para que no absorba pintura de más, ahorrándote litros de color que es mucho más caro." 
      },
      { 
        q: "¿Cómo guardo la pintura que sobró?", 
        a: "Limpiá bien los bordes del tacho, cerralo herméticamente y guardalo boca abajo. Esto evita que entre aire y se forme la 'nata' seca en la superficie, permitiéndote retocar la pared meses después." 
      }
    ],
    relacionados: [
      { nombre: "Metros Cuadrados", link: "/herramientas/metros-cuadrados" },
      { nombre: "Cálculo de Ladrillos", link: "/construccion/ladrillos" },
      { nombre: "Consumo Eléctrico", link: "/hogar/consumo-electrico" }
    ]
  },

  "circulo": {
    faqs: [
      { 
        q: "¿Qué es el radio de un círculo?", 
        a: "El radio es la distancia que hay desde el centro exacto del círculo hasta cualquier punto de su borde (la circunferencia). Es la medida fundamental para realizar todos los cálculos geométricos de esta figura." 
      },
      { 
        q: "¿Cuál es la diferencia entre radio y diámetro?", 
        a: "Es simple: el diámetro es el doble del radio. Es la línea recta que atraviesa el círculo pasando por el centro, uniendo dos puntos opuestos del borde. Si tenés el diámetro, solo dividilo por 2 para usar esta calculadora." 
      },
      { 
        q: "¿Qué representa el número Pi (π)?", 
        a: "Pi es una constante matemática que representa la relación entre la longitud de la circunferencia y su diámetro. Su valor aproximado es 3.14159 y se usa en todas las fórmulas que involucran curvas circulares." 
      },
      { 
        q: "¿En qué unidades se expresa el área?", 
        a: "El área siempre se expresa en unidades al cuadrado. Si ingresás el radio en metros (m), el área será en metros cuadrados (m²). Si lo ingresás en centímetros (cm), el resultado será en cm²." 
      },
      { 
        q: "¿Para qué sirve calcular el perímetro?", 
        a: "El perímetro (o circunferencia) es útil para saber cuánto material necesitás para 'rodear' algo circular. Por ejemplo, cuántos metros de borde para una pileta redonda, o cuánta cinta para decorar la base de un frasco." 
      }
    ],
    relacionados: [
      { nombre: "Metros Cuadrados", link: "/herramientas/metros-cuadrados" },
      { nombre: "Calculadora de Pintura", link: "/hogar/pintura" },
      { nombre: "Cálculo de Hormigón", link: "/construccion/hormigon" }
    ]
  },

  "pitagoras": {
    faqs: [
      { 
        q: "¿Qué es un triángulo rectángulo?", 
        a: "Es un triángulo que tiene un ángulo recto, es decir, un ángulo de 90 grados. El Teorema de Pitágoras solo se puede aplicar en este tipo de triángulos." 
      },
      { 
        q: "¿Cómo identifico la hipotenusa?", 
        a: "La hipotenusa es siempre el lado más largo del triángulo y es el que se encuentra justo enfrente del ángulo recto (90°). Los otros dos lados que forman el ángulo recto se llaman catetos." 
      },
      { 
        q: "¿Para qué sirve el Teorema de Pitágoras en la vida real?", 
        a: "Se usa constantemente en arquitectura y carpintería para asegurar que las esquinas sean perfectamente cuadradas. También en navegación para calcular distancias directas y en tecnología para determinar el tamaño de las pantallas (las pulgadas de un TV son la medida de su hipotenusa)." 
      },
      { 
        q: "¿Qué es la 'regla del 3-4-5'?", 
        a: "Es una aplicación práctica de Pitágoras. Si medís 3 unidades en un lado y 4 en el otro, y la diagonal mide exactamente 5, podés estar seguro de que la esquina tiene un ángulo perfecto de 90 grados." 
      },
      { 
        q: "¿Puedo calcular un cateto si ya tengo la hipotenusa?", 
        a: "¡Sí! Solo tenés que despejar la fórmula. En ese caso, el cateto es igual a la raíz cuadrada de la hipotenusa al cuadrado menos el otro cateto al cuadrado: a = √(c² - b²)." 
      }
    ],
    relacionados: [
      { nombre: "Metros Cuadrados", link: "/herramientas/metros-cuadrados" },
      { nombre: "Calculadora de Círculo", link: "/herramientas/circulo" },
      { nombre: "Cálculo de Ladrillos", link: "/construccion/ladrillos" }
    ]
  },

  "regla-de-tres": {
    faqs: [
      { 
        q: "¿Cuándo debo usar la Regla de Tres Directa?", 
        a: "Usala cuando las dos cantidades se mueven en la misma dirección: si una aumenta, la otra también. Por ejemplo: si 1 kg de manzanas cuesta $100, 2 kg costarán $200. A más cantidad, más precio." 
      },
      { 
        q: "¿Cuándo se aplica la Regla de Tres Inversa?", 
        a: "Cuando las cantidades se mueven en sentidos opuestos: si una aumenta, la otra disminuye. El ejemplo clásico es el tiempo y la velocidad: si vas más rápido, tardás menos tiempo en llegar." 
      },
      { 
        q: "¿Cómo se plantean los valores A, B y C?", 
        a: "A y B representan la relación conocida (ej: 2 pintores tardan 6 horas). C es el dato de la nueva situación (ej: 4 pintores). La calculadora hallará el valor X faltante." 
      },
      { 
        q: "¿Sirve para calcular porcentajes?", 
        a: "¡Sí! La regla de tres directa es ideal para eso. Si el 100% es $500 (A y B), para saber cuánto es el 20% (C), simplemente aplicás la fórmula y obtendrás el valor de X." 
      },
      { 
        q: "¿Qué pasa si ingreso un cero?", 
        a: "Matemáticamente no se puede dividir por cero. En la proporción directa, A no puede ser 0; en la inversa, C no puede ser 0. La calculadora te avisará si intentás realizar una operación inválida." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" },
      { nombre: "Metros Cuadrados", link: "/herramientas/metros-cuadrados" },
      { nombre: "Calcualdora de ROI", link: "/negocios/roi/" }
    ]
  },

  "triangulo": {
    faqs: [
      { 
        q: "¿Cuál es la base y cuál es la altura?", 
        a: "La base puede ser cualquier lado del triángulo. La altura (h) es la línea perpendicular (que forma un ángulo de 90°) que va desde la base hasta el vértice opuesto. No confundas la altura con la longitud de los lados inclinados." 
      },
      { 
        q: "¿Por qué se divide por dos la fórmula?", 
        a: "Porque cualquier triángulo puede verse como la mitad de un rectángulo (o paralelogramo). Si multiplicás base por altura obtenés el área del rectángulo completo; al dividir por 2, obtenés la del triángulo." 
      },
      { 
        q: "¿Qué pasa si el triángulo es rectángulo?", 
        a: "En un triángulo rectángulo es más fácil: la base y la altura son simplemente los dos lados (catetos) que forman el ángulo de 90°." 
      },
      { 
        q: "¿Importa la unidad de medida?", 
        a: "No, siempre que uses la misma para ambos datos. Si ingresás base en cm y altura en cm, el resultado será en cm². Si mezclás metros con centímetros, el resultado será incorrecto." 
      },
      { 
        q: "¿Sirve para cualquier tipo de triángulo?", 
        a: "¡Sí! Esta fórmula es universal para triángulos equiláteros, isósceles o escalenos, siempre que conozcas la medida de la altura respecto a la base elegida." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Pitágoras", link: "/herramientas/pitagoras" },
      { nombre: "Metros Cuadrados", link: "/herramientas/metros-cuadrados" },
      { nombre: "Calculadora de Círculo", link: "/herramientas/circulo" }
    ]
  },

  "comisiones": {
    faqs: [
      { 
        q: "¿Qué es el costo fijo por unidad?", 
        a: "Es un monto fijo que algunas plataformas cobran además de la comisión porcentual, generalmente en productos de bajo costo. Por ejemplo, si vendés algo de $2000, un costo fijo de $300 puede representar un 15% extra de descuento." 
      },
      { 
        q: "¿Cómo influye el envío gratis en mi ganancia?", 
        a: "Cuando ofrecés 'envío gratis', ese costo lo pagás vos. Debés restarlo directamente de tu precio de venta. Si no lo contemplás, podrías terminar vendiendo a pérdida en productos pesados o con grandes distancias de envío." 
      },
      { 
        q: "¿Por qué recibo menos de lo que dice la calculadora?", 
        a: "Es probable que se deba a retenciones impositivas (IVA, Ganancias o Ingresos Brutos) que las plataformas aplican según tu condición fiscal. Esta calculadora mide la comisión operativa, pero los impuestos varían según cada vendedor." 
      },
      { 
        q: "¿Qué diferencia hay entre comisión Clásica y Premium?", 
        a: "La publicación Premium suele tener una comisión más alta porque ofrece cuotas sin interés al comprador. Si elegís Premium, debés asegurarte de que tu margen soporte ese descuento adicional del 15% al 30% según el país." 
      },
      { 
        q: "¿Cómo calculo el precio que DEBO poner para ganar X monto?", 
        a: "Esa es la 'cuenta inversa'. Si querés recibir $10.000 limpios, no podés solo sumar la comisión. Debés dividir lo que querés ganar por (1 - porcentaje de comisión). Es decir: $10.000 / 0.85 (si la comisión es del 15%)." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" },
      { nombre: "Regla de Tres Simple", link: "/herramientas/regla-de-tres" },
      { nombre: "Calculadora de Descuentos", link: "/finanzas/descuentos" }
    ]
  },

  "margen": {
    faqs: [
      { 
        q: "¿Cuál es la diferencia entre Margen y Markup?", 
        a: "El Markup es cuánto le sumás al costo (ej: si comprás a $100 y sumás $50, tu markup es 50%). El Margen es qué porcentaje del precio final es ganancia (en el mismo ejemplo, ganás $50 sobre un precio de $150, por lo que tu margen es del 33.3%)." 
      },
      { 
        q: "¿Por qué es mejor calcular sobre el precio de venta?", 
        a: "Porque los gastos e impuestos suelen calcularse sobre el total de tus ingresos. Si sabés que tu margen es del 20%, sabés exactamente cuánto dinero te queda 'limpio' de cada peso que entra a la caja." 
      },
      { 
        q: "¿Qué se considera un buen margen de ganancia?", 
        a: "Depende de la industria. En retail o supermercados, los márgenes suelen ser bajos (5-10%) pero con mucho volumen. En servicios o software, los márgenes pueden superar el 50% debido a menores costos de producción por unidad." 
      },
      { 
        q: "¿Cómo influye el IVA en este cálculo?", 
        a: "Para obtener un margen real, lo ideal es realizar el cálculo con valores netos (sin IVA). Restá el impuesto tanto al costo como al precio de venta antes de ingresarlos en la calculadora." 
      },
      { 
        q: "¿Qué pasa si el resultado es negativo?", 
        a: "Si el margen es negativo, significa que tu precio de venta es menor a tu costo de adquisición. Estás perdiendo dinero en cada venta y necesitás revisar tu estrategia de precios o negociar mejores costos con proveedores." 
      }
    ],
    relacionados: [
      { nombre: "Comisiones de Venta", link: "/finanzas/comisiones" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" },
      { nombre: "Regla de Tres Simple", link: "/herramientas/regla-de-tres" }
    ]
  },

  "markup-margen": {
    faqs: [
      { 
        q: "¿Por qué el Margen nunca puede ser del 100%?", 
        a: "Porque el margen se calcula sobre el precio de venta. Si vendés algo a $100, para ganar el 100% de margen el producto debería haberte costado $0. En cambio, el Markup sí puede superar el 100% fácilmente (si comprás a $10 y vendés a $30, tu markup es del 200%)." 
      },
      { 
        q: "¿Cuál de los dos debería usar para poner mis precios?", 
        a: "Para poner el precio inicial, muchos usan el Markup (ej: 'le sumo un 50% a todo'). Pero para medir la salud de tu negocio, debés mirar el Margen, ya que tus gastos e impuestos se descuentan del precio de venta final." 
      },
      { 
        q: "¿Cómo afecta un descuento al margen?", 
        a: "Los descuentos son peligrosos porque golpean directamente al margen. Si tenés un margen del 20% y hacés un descuento del 10%, no estás ganando la mitad; estás perdiendo mucho más de la mitad de tu utilidad neta una vez restados los costos fijos." 
      },
      { 
        q: "¿Qué es la Ganancia Bruta?", 
        a: "Es la diferencia directa en dinero entre el precio de venta y el costo de compra/fabricación, antes de pagar salarios, alquileres, impuestos o servicios." 
      },
      { 
        q: "Si quiero un margen del 30%, ¿por cuánto debo multiplicar mi costo?", 
        a: "No debés multiplicar por 1.30 (eso es markup). Para obtener un margen del 30%, debés dividir tu costo por 0.70. Esa es la matemática correcta para asegurar que el 30% del final sea utilidad." 
      }
    ],
    relacionados: [
      { nombre: "Margen de Ganancia", link: "/finanzas/margen-ganancia" },
      { nombre: "Comisiones de Venta", link: "/finanzas/comisiones" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "precio-venta": {
    faqs: [
      { 
        q: "¿Por qué no debo simplemente multiplicar mi costo por el porcentaje?", 
        a: "Si multiplicás tu costo por 1.30 para ganar un 30%, en realidad estarás obteniendo un margen del 23% sobre la venta. La fórmula correcta (Costo / 0.70) asegura que el 30% del precio final sea efectivamente tu ganancia." 
      },
      { 
        q: "¿Qué costos debo incluir en el 'Costo unitario'?", 
        a: "No solo el precio de compra. Debés sumar el packaging, proporcional de envío, etiquetas y cualquier insumo directo. Cuanto más preciso sea el costo, más real será tu margen final." 
      },
      { 
        q: "¿Cómo calculo el precio si tengo una comisión de plataforma?", 
        a: "Es recomendable calcular primero el precio base con esta calculadora y luego sumarle el porcentaje de comisión de la plataforma. Así evitás que la comisión 'se coma' el margen que planeaste originalmente." 
      },
      { 
        q: "¿Qué margen es el ideal para mi producto?", 
        a: "Depende de tu rubro. En productos físicos, se suele buscar entre un 30% y un 50%. En gastronomía, el costo de materia prima no debería superar el 33% (margen del 66%), ya que hay muchos costos fijos ocultos." 
      },
      { 
        q: "¿Por qué el sistema no me deja poner un margen del 100%?", 
        a: "Matemáticamente, un margen del 100% significaría que el costo es cero. Para el sistema, un margen de 1 (100%) crearía una división por cero. Si querés duplicar tu inversión, debés usar un margen del 50% (tu costo representa la mitad del precio)." 
      }
    ],
    relacionados: [
      { nombre: "Markup vs Margen", link: "/finanzas/markup-margen" },
      { nombre: "Comisiones de Venta", link: "/finanzas/comisiones-venta" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "punto-equilibrio": {
    faqs: [
      { 
        q: "¿Qué sucede si vendo menos de lo que indica el punto de equilibrio?", 
        a: "Si tus ventas están por debajo de este número, tu negocio está operando en pérdida. Estás consumiendo capital o generando deuda para cubrir los costos fijos que el margen de tus productos no llega a pagar." 
      },
      { 
        q: "¿Cómo puedo bajar mi punto de equilibrio?", 
        a: "Tenés tres caminos: 1. Reducir tus costos fijos (renegociar alquileres, servicios). 2. Subir el precio de venta. 3. Bajar el costo variable (comprar materia prima más barata). Cualquiera de estos hará que necesites vender menos unidades para estar 'en cero'." 
      },
      { 
        q: "¿Debo incluir mi sueldo en los costos fijos?", 
        a: "¡Absolutamente! Un error común es no contar el tiempo del emprendedor. Para que el punto de equilibrio sea real, tu sueldo deseado debe formar parte de los costos fijos mensuales." 
      },
      { 
        q: "¿Qué es el 'Margen de Seguridad'?", 
        a: "Es la diferencia entre lo que vendés realmente y tu punto de equilibrio. Si tu equilibrio es 100 y vendés 150, tenés un margen de seguridad del 50%. Es tu 'colchón' ante una caída de ventas." 
      },
      { 
        q: "¿Por qué el resultado se redondea hacia arriba?", 
        a: "Porque no podés vender 'media unidad'. Si el cálculo da 45.2 unidades, vendiendo 45 todavía estarías perdiendo un poco de plata. Vendiendo 46, ya estás oficialmente en la zona de ganancias." 
      }
    ],
    relacionados: [
      { nombre: "Margen de Ganancia", link: "/finanzas/margen" },
      { nombre: "Precio de Venta", link: "/finanzas/precio-venta" },
      { nombre: "Markup vs Margen", link: "/finanzas/markup-margen" }
    ]
  },

  "roi": {
    faqs: [
      { 
        q: "¿Qué significa un ROI del 100%?", 
        a: "Significa que recuperaste tu inversión inicial y ganaste exactamente la misma cantidad encima. Es decir, duplicaste tu dinero. Un ROI del 0% significa que quedaste 'hecho' (recuperaste lo invertido pero no ganaste nada)." 
      },
      { 
        q: "¿Puede el ROI ser negativo?", 
        a: "Sí. Un ROI negativo indica que el retorno fue menor a la inversión inicial, por lo tanto, hubo una pérdida de capital. Por ejemplo, un ROI de -20% significa que perdiste el 20% de lo que invertiste." 
      },
      { 
        q: "¿Cuál es la diferencia entre ROI y ROAS?", 
        a: "El ROI mide la rentabilidad general del negocio (considerando todos los costos). El ROAS (Return on Ad Spend) se usa específicamente en publicidad para medir el ingreso bruto por cada peso gastado en anuncios, sin descontar otros costos operativos." 
      },
      { 
        q: "¿Qué se considera un 'buen' ROI?", 
        a: "Depende del riesgo y del tiempo. En marketing digital, un ROI del 5:1 (500%) suele ser excelente. En inversiones inmobiliarias o bolsa, los porcentajes son menores pero suelen ser más estables a largo plazo." 
      },
      { 
        q: "¿Cómo influye el tiempo en el ROI?", 
        a: "La fórmula estándar no considera el tiempo. No es lo mismo ganar un 50% en un mes que en cinco años. Para comparar inversiones de distinta duración, los financieros suelen usar el ROI anualizado." 
      }
    ],
    relacionados: [
      { nombre: "Margen de Ganancia", link: "/finanzas/margen-ganancia" },
      { nombre: "Punto de Equilibrio", link: "/finanzas/punto-equilibrio" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "tarifa-freelance": {
    faqs: [
      { 
        q: "¿Qué son las horas facturables?", 
        a: "Son las horas que realmente dedicás a trabajar en el proyecto del cliente. Un error común es calcular sobre 160 horas mensuales (40 por semana), pero un freelance suele dedicar un 25-30% de su tiempo a tareas administrativas, ventas y reuniones no cobradas." 
      },
      { 
        q: "¿Cómo calculo mis gastos fijos?", 
        a: "Debés sumar todo lo necesario para operar: internet, luz, suscripciones de software (Adobe, ChatGPT Plus, hosting), proporcional del alquiler de tu oficina o espacio de trabajo, y la amortización de tu computadora." 
      },
      { 
        q: "¿Por qué el resultado parece más alto que un sueldo en relación de dependencia?", 
        a: "Porque como freelance vos pagás tus propias vacaciones, aguinaldo, días por enfermedad y cargas sociales. Tu tarifa debe cubrir esos beneficios que un empleado ya tiene incluidos en su contrato." 
      },
      { 
        q: "¿Debo cobrar lo mismo a todos los clientes?", 
        a: "No necesariamente. Podés aplicar un multiplicador según la urgencia, la complejidad del proyecto o el valor que este le genera al cliente (Value-Based Pricing). El resultado de esta calculadora es tu 'piso' mínimo de rentabilidad." 
      },
      { 
        q: "¿Cada cuánto debo actualizar mi tarifa?", 
        a: "Se recomienda revisarla al menos cada 6 meses o ante cambios significativos en la inflación, tus costos operativos o cuando tu nivel de especialización te permita aportar más valor en menos tiempo." 
      }
    ],
    relacionados: [
      { nombre: "Punto de Equilibrio", link: "/finanzas/punto-equilibrio" },
      { nombre: "Calculadora de ROI", link: "/finanzas/roi" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "valor-hora": {
    faqs: [
      { 
        q: "¿Por qué debo separar mi sueldo de los gastos fijos?", 
        a: "Para que tu negocio sea sano, el sueldo es tu ganancia personal y los gastos son lo que el negocio necesita para existir (luz, software, internet). Si cobrás solo por tu sueldo, terminarás pagando los gastos de tu propio bolsillo." 
      },
      { 
        q: "¿Cuántas horas por día es recomendable calcular?", 
        a: "Aunque trabajes 8 o 9 horas, no todas son facturables. Entre responder mails, reuniones de prospección y administración, lo ideal es calcular sobre 5 o 6 horas productivas para no quedar corto con el presupuesto." 
      },
      { 
        q: "¿Qué días al mes debería considerar?", 
        a: "Un mes estándar tiene 22 días hábiles. Sin embargo, restando feriados, posibles días de enfermedad o trámites, muchos profesionales calculan sobre 18 o 20 días para tener un margen de seguridad." 
      },
      { 
        q: "¿Cómo incluyo los impuestos en este valor?", 
        a: "El resultado de esta calculadora es tu costo base. A ese número deberías sumarle el porcentaje de impuestos de tu país (IVA, Monotributo, Ganancias) para obtener el precio final que le pasás al cliente." 
      },
      { 
        q: "Si mi tarifa da muy alta para el mercado, ¿qué hago?", 
        a: "Tenés tres opciones: 1. Bajar tus gastos fijos. 2. Aumentar tu cantidad de horas/días de trabajo (aunque esto tiene un límite físico). 3. Especializarte en un nicho donde el valor que aportás justifique una tarifa más alta que el promedio." 
      }
    ],
    relacionados: [
      { nombre: "Punto de Equilibrio", link: "/finanzas/punto-equilibrio" },
      { nombre: "ROI de Proyectos", link: "/finanzas/roi" },
      { nombre: "Markup vs Margen", link: "/finanzas/markup-margen" }
    ]
  },

  "agua": {
    faqs: [
      { 
        q: "¿Realmente necesito tomar tanta agua si no tengo sed?", 
        a: "La sed es un mecanismo de alerta tardío; cuando aparece, ya hay un nivel leve de deshidratación. Mantener un flujo constante de agua ayuda a la digestión, la temperatura corporal y la salud de la piel." 
      },
      { 
        q: "¿El café o el mate cuentan como hidratación?", 
        a: "Aunque son líquidos, tienen un efecto diurético. Si bien suman al total, no reemplazan el agua pura. Una regla común es tomar un vaso de agua extra por cada taza de café o mate consumida." 
      },
      { 
        q: "¿Cómo influye el clima en el cálculo?", 
        a: "En climas muy cálidos o húmedos, la pérdida por sudoración es mayor. Si estás en una zona de mucho calor, sumale entre 500ml y 1 litro extra al resultado de la calculadora." 
      },
      { 
        q: "¿Es posible tomar demasiada agua?", 
        a: "Sí, se llama hiponatremia (exceso de agua que diluye el sodio en sangre), pero es muy raro en personas sanas. Ocurre mayormente en atletas de ultra-resistencia que beben en exceso sin reponer electrolitos." 
      },
      { 
        q: "¿Cómo sé si estoy bien hidratado?", 
        a: "El mejor indicador es el color de la orina. Si es de un color amarillo claro (como limonada), estás bien. Si es oscura, necesitás beber más agua de inmediato." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de IMC", link: "/salud/imc" },
      { nombre: "Valor de tu Hora", link: "/negocios/valor-hora" },
      { nombre: "Días Vividos", link: "/varios/edad" }
    ]
  },

  "calorias": {
    faqs: [
      { 
        q: "¿Qué diferencia hay entre TMB y Gasto Energético Total?", 
        a: "La TMB es lo que quemás en reposo absoluto. El Gasto Energético Total suma a la TMB tus actividades diarias (caminar, trabajar, hacer ejercicio). Para mantener tu peso, debés consumir lo que indica tu gasto total, no solo la TMB." 
      },
      { 
        q: "¿Cómo uso este número para perder peso?", 
        a: "Para perder peso de forma saludable, se recomienda un déficit de entre 300 y 500 calorías sobre tu gasto total. Nunca deberías consumir menos calorías que tu TMB sin supervisión médica, ya que es el mínimo para que tus órganos funcionen." 
      },
      { 
        q: "¿Por qué influye el sexo en el cálculo?", 
        a: "Biológicamente, los hombres suelen tener una mayor proporción de masa muscular, la cual requiere más energía para mantenerse que el tejido graso. Por eso, a igualdad de peso y altura, la TMB masculina suele ser ligeramente superior." 
      },
      { 
        q: "¿La TMB cambia con la edad?", 
        a: "Sí. A medida que envejecemos, el metabolismo tiende a ralentizarse, en parte por la pérdida natural de masa muscular (sarcopenia). Mantenerse activo con ejercicios de fuerza ayuda a mitigar esta caída." 
      },
      { 
        q: "¿Qué tan exacta es esta fórmula?", 
        a: "La fórmula de Mifflin-St. Jeor tiene un margen de error muy bajo, pero no considera el porcentaje de grasa corporal. Una persona con mucho músculo quemará más que lo que indica el resultado, y una persona con sedentarismo extremo, un poco menos." 
      }
    ],
    relacionados: [
      { nombre: "Agua Diaria", link: "/salud/agua" },
      { nombre: "Calculadora de IMC", link: "/salud/imc" },
      { nombre: "Días Vividos", link: "/varios/edad" }
    ]
  },

  "dejar-de-fumar": {
    faqs: [
      { 
        q: "¿De dónde sale el dato de los 11 minutos de vida?", 
        a: "Es una estimación basada en estudios epidemiológicos (como los publicados en el British Medical Journal) que promedian la diferencia de expectativa de vida entre fumadores y no fumadores dividida por el consumo total de cigarrillos a lo largo de los años." 
      },
      { 
        q: "¿Qué es lo primero que recupero al dejar de fumar?", 
        a: "A las pocas horas, el nivel de monóxido de carbono en tu sangre baja a lo normal y el oxígeno aumenta. En solo 48 horas, tus terminaciones nerviosas comienzan a regenerarse, mejorando notablemente tu capacidad de oler y saborear la comida." 
      },
      { 
        q: "¿Cómo puedo usar el ahorro de dinero como motivación?", 
        a: "Muchos ex-fumadores crean una cuenta de ahorros específica o una alcancía donde depositan diariamente lo que gastarían en cigarrillos. Ver el dinero físico acumularse para un viaje o una compra especial es un refuerzo positivo muy potente." 
      },
      { 
        q: "¿Es verdad que el riesgo de infarto baja rápido?", 
        a: "Sí. A solo un año de haber dejado, el riesgo de sufrir una enfermedad coronaria se reduce a la mitad en comparación con el de un fumador. A los 15 años, el riesgo es igual al de una persona que nunca fumó." 
      },
      { 
        q: "¿Sirven los cigarrillos electrónicos para ahorrar?", 
        a: "Aunque a veces parecen más baratos, siguen siendo un gasto recurrente y mantienen la adicción a la nicotina. La verdadera libertad financiera y de salud se alcanza eliminando la dependencia por completo." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Calorías", link: "/salud/calorias" },
      { nombre: "Agua Diaria", link: "/salud/agua" },
      { nombre: "Días Vividos", link: "/varios/edad" }
    ]
  },

  "embarazo": {
    faqs: [
      { 
        q: "¿Por qué se cuenta desde la última regla si aún no estaba embarazada?", 
        a: "Es una convención médica. Dado que es difícil saber el momento exacto de la concepción, se usa el primer día de la última menstruación (FUM) como punto de partida oficial para estandarizar el seguimiento del desarrollo fetal." 
      },
      { 
        q: "¿Qué tan exacta es la Fecha Probable de Parto (FPP)?", 
        a: "La FPP es solo una guía. Solo el 5% de los bebés nacen en esa fecha exacta. La mayoría de los nacimientos ocurren entre las semanas 37 y 42, considerándose un embarazo 'a término' a partir de la semana 37." 
      },
      { 
        q: "¿Cómo cambian los trimestres?", 
        a: "El primer trimestre (semanas 1-13) es de formación celular intensa. El segundo (14-26) suele ser el más cómodo, donde se siente al bebé. El tercero (27 al parto) es de crecimiento rápido y preparación para el nacimiento." 
      },
      { 
        q: "¿Puede cambiar mi fecha de parto después de una ecografía?", 
        a: "Sí. Las ecografías del primer trimestre (especialmente la de la semana 11-14) son muy precisas para medir al feto. Si el tamaño no coincide con las semanas por FUM, el médico puede ajustar tu fecha oficial de parto." 
      },
      { 
        q: "¿Qué pasa si llego a la semana 40 y no nace?", 
        a: "Es muy común, especialmente en madres primerizas. Los médicos suelen permitir que el embarazo continúe hasta la semana 41 o 42 bajo monitoreo constante antes de considerar una inducción." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Agua", link: "/salud/agua" },
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Días Vividos", link: "/varios/edad" }
    ]
  },

  "frecuencia-cardiaca": {
    faqs: [
      { 
        q: "¿Por qué Tanaka es mejor que la fórmula de 220 - edad?", 
        a: "La fórmula clásica (Fox-Haskell) tiende a subestimar la frecuencia máxima en personas mayores y a sobreestimarla en jóvenes. La fórmula de Tanaka se basa en estudios más amplios y modernos, ofreciendo un resultado más fiel a la realidad biológica de la mayoría de los adultos." 
      },
      { 
        q: "¿Cuál es la mejor zona para quemar grasa?", 
        a: "Generalmente es la Zona 2 (60-70% de tu FC Máx). En esta intensidad, el cuerpo utiliza proporcionalmente más grasas que carbohidratos como fuente de energía, aunque el entrenamiento de alta intensidad (HIIT) también es muy efectivo para el gasto calórico total." 
      },
      { 
        q: "¿Mi frecuencia cardíaca máxima puede aumentar con el entrenamiento?", 
        a: "No. La FC Máx es un límite biológico determinado principalmente por la edad y la genética. Lo que sí mejora con el entrenamiento es tu capacidad para trabajar cerca de ese límite por más tiempo y la velocidad con la que tu corazón se recupera después del esfuerzo." 
      },
      { 
        q: "¿Qué factores pueden alterar mis pulsaciones?", 
        a: "El estrés, la falta de sueño, la deshidratación, el calor excesivo y el consumo de cafeína pueden elevar tus pulsaciones. Siempre es recomendable medir tu frecuencia en condiciones normales y estar atento a sensaciones de mareo o fatiga extrema." 
      },
      { 
        q: "¿Es peligroso llegar al 100% de mi frecuencia máxima?", 
        a: "Para una persona sana, el corazón tiene mecanismos de protección, pero trabajar al límite máximo debe reservarse para esfuerzos muy cortos y puntuales. Si eres principiante, lo ideal es mantenerse en las zonas 2 y 3 hasta ganar una base aeróbica sólida." 
      }
    ],
    relacionados: [
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Agua Diaria", link: "/salud/agua" },
      { nombre: "Valor de tu Hora", link: "/negocios/valor-hora" }
    ]
  },

  "imc": {
    faqs: [
      { 
        q: "¿El IMC es igual de preciso para todos?", 
        a: "No siempre. El IMC no diferencia entre masa muscular y masa grasa. Por ejemplo, un atleta con mucha musculatura puede tener un IMC alto (clasificado como sobrepeso) sin tener exceso de grasa corporal. Es una herramienta de cribado general, no un diagnóstico definitivo." 
      },
      { 
        q: "¿Cuál es el rango de peso saludable?", 
        a: "Según la OMS, un IMC entre 18.5 y 24.9 se considera 'Normal' o saludable para la mayoría de los adultos. Sin embargo, factores como la edad, el sexo y la densidad ósea también influyen en lo que es saludable para cada individuo." 
      },
      { 
        q: "¿A partir de qué número se considera riesgo para la salud?", 
        a: "Un IMC superior a 30 (clasificado como obesidad) suele estar asociado con un mayor riesgo de enfermedades cardiovasculares, diabetes tipo 2 e hipertensión. Si tu resultado es mayor a 30, es recomendable consultar con un profesional de la salud." 
      },
      { 
        q: "¿El IMC sirve para niños y adolescentes?", 
        a: "Para menores de 18 años, el IMC se calcula de la misma forma pero se interpreta mediante tablas de percentiles que consideran la edad y el sexo, ya que el cuerpo está en constante desarrollo." 
      },
      { 
        q: "¿Cómo puedo mejorar mi resultado?", 
        a: "Pequeños cambios sostenibles son la clave: priorizar alimentos integrales, aumentar el consumo de agua y realizar al menos 150 minutos de actividad física moderada a la semana ayudan a llevar el IMC hacia rangos más saludables." 
      }
    ],
    relacionados: [
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Agua Diaria", link: "/salud/agua" },
      { nombre: "Frecuencia Cardíaca", link: "/salud/frecuencia-cardiaca" }
    ]
  },

  "keto": {
    faqs: [
      { 
        q: "¿Qué pasa si me paso de los carbohidratos un día?", 
        a: "Consumir un exceso de carbohidratos elevará tu insulina y detendrá la producción de cetonas, sacándote del estado de cetosis. Dependiendo de tu metabolismo, puede tomarte desde 24 horas hasta varios días de disciplina estricta volver a entrar en cetosis." 
      },
      { 
        q: "¿Es necesario contar las calorías en Keto?", 
        a: "Aunque la proporción de macros es lo más importante para la cetosis, las calorías siguen contando para la pérdida de peso. Si consumes más energía de la que gastas (incluso si es pura grasa), no perderás peso. Esta calculadora te ayuda a balancear ambos factores." 
      },
      { 
        q: "¿Qué es la 'Gripe Keto'?", 
        a: "Es un grupo de síntomas (dolor de cabeza, fatiga, irritabilidad) que algunas personas sienten los primeros días. Se debe a que el cuerpo está expulsando agua y electrolitos. Se soluciona aumentando el consumo de agua y sales (sodio, potasio y magnesio)." 
      },
      { 
        q: "¿Puedo comer cualquier tipo de grasa?", 
        a: "Para una salud óptima, priorizá grasas monoinsaturadas y saturadas naturales (palta, frutos secos, aceite de oliva, coco, carnes). Evitá las grasas trans y los aceites vegetales altamente procesados, que pueden causar inflamación." 
      },
      { 
        q: "¿La proteína en exceso te saca de cetosis?", 
        a: "Existe el mito de la gluconeogénesis (convertir proteína en azúcar), pero en la práctica es difícil que ocurra solo por comer un poco más de carne. Mantenerse en el 25% es ideal para proteger tus músculos sin interferir con la producción de cetonas." 
      }
    ],
    relacionados: [
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Calculadora de IMC", link: "/salud/imc" },
      { nombre: "Agua Diaria", link: "/salud/agua" }
    ]
  },

  "ovulacion": {
    faqs: [
      { 
        q: "¿Qué tan exacto es el cálculo de la ovulación por calendario?", 
        a: "Es una estimación basada en promedios. Funciona mejor en mujeres con ciclos regulares. Si tu ciclo varía mucho cada mes, la fecha real de ovulación puede desplazarse, por lo que se recomienda observar también signos físicos como el moco cervical." 
      },
      { 
        q: "¿Cuánto dura realmente la ventana fértil?", 
        a: "Aproximadamente 6 días. Esto incluye los 5 días previos a la ovulación (tiempo que el esperma puede sobrevivir) y el día de la ovulación misma. El día con mayor probabilidad de concepción es el día previo y el mismo día de la ovulación." 
      },
      { 
        q: "¿Puedo ovular dos veces en un mismo ciclo?", 
        a: "Es extremadamente raro, pero puede ocurrir la liberación de dos óvulos en un lapso de 24 horas (lo que da lugar a gemelos fraternos). Sin embargo, no se producen dos procesos de ovulación separados por muchos días en un mismo ciclo debido a cambios hormonales." 
      },
      { 
        q: "¿El estrés afecta el día de mi ovulación?", 
        a: "Sí, definitivamente. El estrés físico o emocional elevado puede retrasar la liberación del óvulo o incluso inhibirla durante ese mes, ya que el sistema reproductivo responde a las señales de alerta del cuerpo." 
      },
      { 
        q: "¿Puedo usar esta calculadora como método anticonceptivo?", 
        a: "No se recomienda. Debido a que los ciclos pueden variar y el esperma sobrevive varios días, el 'método del ritmo' tiene una tasa de fallo alta. Esta herramienta es ideal para quienes buscan concebir, no para evitar el embarazo." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Embarazo", link: "/salud/embarazo" },
      { nombre: "Agua Diaria", link: "/salud/agua" },
      { nombre: "Días Vividos", link: "/varios/edad" }
    ]
  },

  "proteina": {
    faqs: [
      { 
        q: "¿Cuánta proteína puede absorber el cuerpo en una sola comida?", 
        a: "Es un mito que solo se absorben 30g por comida. El cuerpo puede procesar cantidades mayores, aunque para optimizar la síntesis de proteína muscular, se recomienda distribuir el total diario en 3 a 5 comidas con al menos 20-40g en cada una." 
      },
      { 
        q: "¿Más proteína significa más músculo?", 
        a: "No necesariamente. Existe un punto de retorno decreciente. Superar los 2.2g por kg de peso no suele aportar beneficios extra en hipertrofia, a menos que estés en un déficit calórico muy agresivo para preservar masa muscular." 
      },
      { 
        q: "¿Es malo consumir mucha proteína para los riñones?", 
        a: "En personas sanas, no hay evidencia de que una dieta alta en proteínas dañe los riñones. Sin embargo, si tenés alguna condición renal preexistente, es fundamental que consultes con un médico antes de aumentar tu ingesta." 
      },
      { 
        q: "¿Qué fuentes de proteína son mejores?", 
        a: "Las de origen animal (carne, huevo, lácteos) son 'completas' porque tienen todos los aminoácidos esenciales. Si sos vegetariano o vegano, podés obtener lo mismo combinando legumbres con cereales o consumiendo soja y quinoa." 
      },
      { 
        q: "¿Es necesario tomar batidos de proteína?", 
        a: "No son obligatorios. Son simplemente una herramienta conveniente. Si llegás a tus gramos diarios con comida real (pollo, lentejas, tofu, etc.), los resultados serán los mismos. El batido es útil cuando no tenés tiempo de cocinar o te cuesta llegar a tu objetivo." 
      }
    ],
    relacionados: [
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Dieta Keto", link: "/salud/keto" },
      { nombre: "Frecuencia Cardíaca", link: "/salud/frecuencia-cardiaca" }
    ]
  },

  "volumen-definicion": {
    faqs: [
      { 
        q: "¿Puedo ganar músculo y perder grasa al mismo tiempo?", 
        a: "Se conoce como 'recomposición corporal'. Es posible principalmente en principiantes, personas con un porcentaje de grasa alto o quienes regresan al entrenamiento tras un largo parón. Sin embargo, para atletas avanzados, es más eficiente enfocarse en una sola meta a la vez (Volumen o Definición)." 
      },
      { 
        q: "¿Qué es un 'volumen sucio' vs 'volumen limpio'?", 
        a: "El volumen sucio consiste en comer de todo sin control para subir de peso rápido, lo que suele ganar mucha grasa. El volumen limpio (o 'lean bulk') busca un superávit moderado (200-400 kcal) para maximizar el músculo y minimizar la ganancia de grasa." 
      },
      { 
        q: "¿Cuánto peso debería perder o ganar por semana?", 
        a: "En definición, una pérdida saludable es del 0.5% al 1% de tu peso corporal por semana. En volumen, un aumento de 0.25kg a 0.5kg por semana es ideal para asegurar que la mayor parte sea tejido muscular y no solo grasa." 
      },
      { 
        q: "¿Por qué los carbohidratos son tan altos en los resultados?", 
        a: "Porque son el combustible principal para el entrenamiento de alta intensidad. Una vez que cubrimos la proteína (reparación) y las grasas (hormonas), el resto de la energía debe venir de los carbohidratos para rendir al máximo en el gimnasio." 
      },
      { 
        q: "¿Qué hago si dejo de ver resultados?", 
        a: "El cuerpo se adapta (termogénesis adaptativa). Si en definición dejas de perder peso por 2 semanas, quizás necesites bajar un poco más las kcal o aumentar tu actividad diaria (NEAT). En volumen, si no subes de peso, aumenta 100-200 kcal extras." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Proteína", link: "/salud/proteina" },
      { nombre: "Gasto Calórico Diario", link: "/salud/calorias" },
      { nombre: "Calculadora de IMC", link: "/salud/imc" }
    ]
  },

  "combustible": {
    faqs: [
      { 
        q: "¿Cómo sé cuál es el consumo real de mi auto?", 
        a: "La forma más precisa es llenar el tanque, poner el cuentakilómetros en cero y volver a llenarlo después de recorrer al menos 100km. Dividí los litros que cargaste por la distancia recorrida y multiplicalo por 100. Ese es tu consumo real (L/100km)." 
      },
      { 
        q: "¿Qué consume más: aire acondicionado o ventanillas bajas?", 
        a: "A bajas velocidades (menos de 80 km/h), las ventanillas bajas son más eficientes. A altas velocidades (autopista), la resistencia aerodinámica que generan las ventanillas abiertas gasta más combustible que el compresor del aire acondicionado." 
      },
      { 
        q: "¿Influye el octanaje (Premium vs Super) en el consumo?", 
        a: "Generalmente no reduce el consumo a menos que tu motor esté diseñado específicamente para alto octanaje. Usar Premium en un motor que requiere Súper no lo hará gastar menos, solo estarás pagando más por cada litro." 
      },
      { 
        q: "¿Cómo afecta el peso al gasto de nafta?", 
        a: "Por cada 50kg de peso extra, el consumo puede aumentar hasta un 1% o 2%. Evitá llevar portaequipajes vacíos en el techo, ya que la resistencia al viento es el principal enemigo del ahorro en ruta." 
      },
      { 
        q: "¿Es verdad que el control de crucero ahorra combustible?", 
        a: "Sí, en terrenos llanos ayuda a mantener una velocidad constante y evita micro-aceleraciones innecesarias. Sin embargo, en zonas de mucha montaña, el pie humano suele ser más eficiente para gestionar las trepadas." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Calculadora de IMC", link: "/salud/imc" },
      { nombre: "Días Vividos", link: "/varios/edad" }
    ]
  },

  "costo-por-uso": {
    faqs: [
      { 
        q: "¿Cuándo es más útil calcular el Costo por Uso?", 
        a: "Es ideal para compras de ticket alto que planeás conservar por mucho tiempo, como electrodomésticos, calzado de calidad, herramientas de trabajo o tecnología. Te ayuda a ver que invertir un poco más hoy puede ahorrarte mucho dinero en reposiciones futuras." 
      },
      { 
        q: "¿Qué se considera un 'buen' costo por uso?", 
        a: "Depende del producto. Para algo de uso diario (como un colchón o un celular), un costo por uso bajo es ideal. Para algo de lujo o uso ocasional (un vestido de fiesta), el costo siempre será alto, pero la calculadora te ayuda a ser consciente de cuánto estás pagando por esa experiencia única." 
      },
      { 
        q: "¿Cómo calculo los usos si no estoy seguro?", 
        a: "Podés estimar por tiempo. Si comprás una cafetera y tomás 2 cafés por día, en un año son 730 usos. Si comprás una campera que planeás usar 3 meses al año durante 3 años, estimá unos 180-200 usos totales." 
      },
      { 
        q: "¿La calculadora tiene en cuenta el mantenimiento?", 
        a: "Esta versión básica no, pero para ser ultra preciso, podrías sumar el costo de mantenimiento (service, pilas, limpieza) al precio original antes de dividir por la cantidad de usos." 
      },
      { 
        q: "¿Por qué el veredicto cambia según el monto?", 
        a: "Establecimos umbrales basados en el poder adquisitivo promedio para darte una referencia visual. Si el costo por cada vez que usás algo es menor al de un café al paso, suele considerarse una inversión excelente." 
      }
    ],
    relacionados: [
      { nombre: "Consumo de Combustible", link: "/utiles/combustible" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Regla 50/30/20", link: "/finanzas/regla-50-30-20" }
    ]
  },

  "descuento-doble": {
    faqs: [
      { 
        q: "¿Por qué un 20% + 10% no es un 30% de descuento?", 
        a: "Porque los descuentos no se suman sobre el precio original. El primer descuento (20%) reduce el precio base, y el segundo (10%) se aplica sobre ese nuevo monto ya rebajado. Por eso, el impacto del segundo descuento es menor en términos de dinero real." 
      },
      { 
        q: "¿Importa el orden en que aplico los descuentos?", 
        a: "No. Matemáticamente, el resultado es el mismo si aplicás primero el 10% y luego el 20%, o viceversa. El precio final y el porcentaje de descuento real no variarán." 
      },
      { 
        q: "¿Qué es el 'Descuento Único Equivalente'?", 
        a: "Es el porcentaje real que se le restó al precio original tras aplicar todas las rebajas sucesivas. Nuestra calculadora te muestra este valor para que puedas comparar si una oferta de '20% + 10%' es mejor o peor que una oferta directa del 30%." 
      },
      { 
        q: "¿Se pueden aplicar más de dos descuentos?", 
        a: "Sí, el proceso se repite: cada nuevo descuento se aplica sobre el último precio calculado. Podés usar nuestra calculadora aplicando los dos primeros y luego usar el resultado como 'precio original' para un tercero." 
      },
      { 
        q: "¿Cómo calculo si hay un cupón de monto fijo?", 
        a: "Si tenés un descuento porcentual y un cupón de monto fijo (ej: $1000 de regalo), la mayoría de las tiendas aplican primero el porcentaje y luego restan el monto fijo. Te conviene leer la letra chica de la promoción." 
      }
    ],
    relacionados: [
      { nombre: "Costo por Uso", link: "/finanzas/costo-uso" },
      { nombre: "Consumo de Combustible", link: "/utiles/combustible" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ]
  },

  "propina": {
    faqs: [
      { 
        q: "¿Cuál es el porcentaje de propina estándar en Argentina?", 
        a: "Aunque no es obligatorio por ley, el estándar social suele ser el 10% del total de la cuenta. En servicios excepcionales, muchas personas optan por dejar un 15%, mientras que un 5% se reserva para servicios que no cumplieron las expectativas." 
      },
      { 
        q: "¿La propina se puede pagar con tarjeta o solo en efectivo?", 
        a: "Desde finales de 2024, en Argentina se impulsó la interoperabilidad para que las propinas puedan incluirse en el pago digital (tarjeta o QR). Sin embargo, muchos mozos prefieren el efectivo porque les llega de forma inmediata y sin retenciones bancarias." 
      },
      { 
        q: "¿Es obligatorio dejar propina?", 
        a: "No, la propina es una gratificación voluntaria. Legalmente, el único cargo obligatorio es el cubierto (o 'servicio de mesa') si el restaurante lo especifica, pero la propina queda a total discreción del cliente según su satisfacción." 
      },
      { 
        q: "¿Se calcula sobre el total con o sin IVA?", 
        a: "Socialmente se calcula sobre el total final del ticket (que ya incluye el IVA). Nuestra calculadora facilita este paso tomando el monto final que ves en la factura." 
      },
      { 
        q: "¿Cómo se reparte la propina en un restaurante?", 
        a: "Depende del establecimiento. En algunos, la propina es individual para el mozo que atendió la mesa. En otros, se utiliza un 'tronco' donde se junta todo y se reparte entre salón, cocina y barra por porcentajes prefijados." 
      }
    ],
    relacionados: [
      { nombre: "Dividir Cuenta", link: "/utiles/dividir-cuenta" },
      { nombre: "Gastos Compartidos", link: "/utiles/gastos-compartidos" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "dias-habiles": {
    faqs: [
      { 
        q: "¿Qué días se excluyen en el cálculo de días hábiles?", 
        a: "Nuestra calculadora excluye automáticamente los sábados y domingos. Los feriados nacionales o locales no se restan de forma automática, por lo que deberás restarlos manualmente del resultado final según el calendario de tu país." 
      },
      { 
        q: "¿El día de inicio se cuenta como el primer día?", 
        a: "Sí, nuestra calculadora incluye tanto el día de inicio como el de fin en el conteo total. Si necesitás calcular un plazo que empieza a correr 'al día siguiente', simplemente restá uno al resultado o ajustá la fecha de inicio." 
      },
      { 
        q: "¿Para qué sirve conocer los días totales o de calendario?", 
        a: "Los días de calendario incluyen fines de semana y feriados. Son útiles para calcular intereses por mora, periodos de alquiler o tiempos biológicos (como la duración de un tratamiento médico), donde el tiempo no se detiene los fines de semana." 
      },
      { 
        q: "¿Qué pasa con los feriados 'puente' o trasladables?", 
        a: "Como los feriados varían drásticamente entre países (y a veces entre provincias o ciudades), lo ideal es obtener el número de días hábiles de la calculadora y luego verificar en un calendario local cuántos feriados caen en esos días específicos para restarlos." 
      },
      { 
        q: "¿Los bancos siempre usan este mismo sistema?", 
        a: "Generalmente sí, aunque los bancos tienen su propio 'horario de corte'. Una transferencia realizada un viernes a las 20:00 hs podría empezar a procesarse recién el lunes, contando ese lunes como el primer día hábil del trámite." 
      }
    ],
    relacionados: [
      { nombre: "Días Vividos", link: "/varios/edad" },
      { nombre: "Costo por Uso", link: "/utiles/costo-uso" },
      { nombre: "Gasto Calórico", link: "/salud/calorias" }
    ]
  },

  "diezmo": {
    faqs: [
      { 
        q: "¿Qué es el diezmo y por qué es el 10%?", 
        a: "El diezmo es una práctica milenaria, principalmente de raíz bíblica, que consiste en separar la décima parte (10%) de los frutos o ingresos para el sostenimiento de la fe y la ayuda a los necesitados. Hoy en día, muchas personas lo adoptan como una disciplina de desapego material." 
      },
      { 
        q: "¿Debería calcularlo sobre el sueldo bruto o el neto?", 
        a: "Es una decisión personal. Quienes lo calculan sobre el bruto consideran que la primera parte de su esfuerzo debe ser para la donación. Quienes eligen el neto (lo que queda después de impuestos) lo hacen para asegurar que el compromiso sea sostenible con su realidad económica inmediata." 
      },
      { 
        q: "¿Cómo encaja la donación en la regla 50/30/20?", 
        a: "Generalmente, las donaciones se ubican dentro del 30% de 'Deseos' o gastos flexibles, aunque para muchas personas es un gasto fijo prioritario. Si donás un 10%, podrías ajustar tu presupuesto a un esquema 50/20/20/10 (Necesidades, Deseos, Ahorro, Donación)." 
      },
      { 
        q: "¿Las donaciones tienen beneficios impositivos?", 
        a: "En muchos países, como Argentina, las donaciones a entidades reconocidas (ONGs, fundaciones, cultos) pueden deducirse del Impuesto a las Ganancias. Guardá siempre tus comprobantes para presentarlos en tu declaración jurada anual." 
      },
      { 
        q: "¿Qué pasa si un mes no puedo cumplir con el porcentaje?", 
        a: "La generosidad no debe ser una carga financiera que te lleve a la deuda. Si tus ingresos varían, podés ajustar el porcentaje o contribuir con tiempo de voluntariado, que tiene un valor humano incalculable." 
      }
    ],
    relacionados: [
      { nombre: "Regla 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Costo por Uso", link: "/utiles/costo-uso" },
      { nombre: "Días Hábiles", link: "/utiles/dias-habiles" }
    ]
  },

  "dividir-cuenta": {
    faqs: [
      { 
        q: "¿Es mejor dividir la cuenta por partes iguales o por consumo?", 
        a: "Si todos consumieron algo similar, dividir por partes iguales es lo más rápido y evita fricciones. Si hubo diferencias grandes (alguien no tomó alcohol o no pidió entrada), lo ideal es usar nuestra calculadora para el total general y luego ajustar proporcionalmente." 
      },
      { 
        q: "¿El 'servicio de mesa' o 'cubierto' es la propina?", 
        a: "No. El cubierto es un cargo del restaurante por el uso de mantelería, pan y vajilla. La propina (el 10%) es una gratificación directa para el mozo por su servicio. Son conceptos distintos." 
      },
      { 
        q: "¿Cómo calculo si alguien pagó una parte en efectivo y el resto con tarjeta?", 
        a: "Nuestra calculadora te da el monto total por persona. Si alguien paga una parte antes, simplemente restá ese monto del 'Total con Propina' antes de dividir el resto entre los demás." 
      },
      { 
        q: "¿Qué pasa si somos muchos y queremos dejar propinas distintas?", 
        a: "Lo más prolijo en grupos grandes es acordar un porcentaje único (ej: 10%) para que el cálculo sea exacto y nadie termine pagando de más por la indecisión del resto." 
      },
      { 
        q: "¿Es de mala educación no dejar propina si el servicio fue lento?", 
        a: "La propina premia el servicio. Si la experiencia fue mala por negligencia del personal, estás en tu derecho de no dejar el 10%. Sin embargo, si el lugar estaba lleno y el mozo hizo lo posible, se suele dejar un porcentaje menor como cortesía." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Propinas", link: "/utilidades/propina" },
      { nombre: "Costo por Uso", link: "/utiles/costo-por-uso" },
      { nombre: "Consumo de Combustible", link: "/utiles/combustible" }
    ]
  },

  "ecuaciones": {
    faqs: [
      { 
        q: "¿Qué es una ecuación de primer grado?", 
        a: "Es una igualdad matemática donde la incógnita (usualmente 'x') tiene como exponente máximo el 1. Se llaman 'lineales' porque, si las graficás, el resultado siempre es una línea recta." 
      },
      { 
        q: "¿Por qué el coeficiente 'a' no puede ser cero?", 
        a: "Si el número que acompaña a la 'x' es 0, la incógnita desaparece ($0 \cdot x = 0$). Te quedarías con una igualdad de números (ej: $5 = 10$), lo cual no es una ecuación que se pueda resolver para hallar una variable." 
      },
      { 
        q: "¿Cómo se interpretan los signos al pasar términos?", 
        a: "La regla fundamental es realizar la operación inversa: si un número está sumando, pasa al otro lado restando. Si está multiplicando (como el coeficiente 'a'), pasa dividiendo. El signo del número que divide se mantiene igual." 
      },
      { 
        q: "¿Qué significa que el resultado sea decimal?", 
        a: "Simplemente significa que el punto de equilibrio en la igualdad no es un número entero. En matemáticas de la vida real (como finanzas), los resultados fraccionarios o decimales son los más comunes." 
      },
      { 
        q: "¿Puedo resolver ecuaciones más complejas aquí?", 
        a: "Esta calculadora está diseñada para el formato estándar $ax + b = c$. Si tenés una ecuación con paréntesis o más términos, primero debés simplificarla manualmente hasta llegar a esta forma básica e ingresar los valores finales." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Regla de Tres Simple", link: "/matematica/regla-de-tres" },
      { nombre: "Días Hábiles", link: "/utiles/dias-habiles" }
    ]
  },

  "edad-mascotas": {
    faqs: [
      { 
        q: "¿Por qué los perros grandes viven menos que los pequeños?", 
        a: "Aunque parezca contradictorio con el resto del reino animal, los perros grandes envejecen biológicamente más rápido. Su crecimiento acelerado genera un mayor estrés oxidativo en sus células, lo que suele derivar en una aparición más temprana de enfermedades relacionadas con la edad." 
      },
      { 
        q: "¿A qué edad se considera que un gato es 'senior'?", 
        a: "Generalmente, un gato entra en su etapa senior a partir de los 11 años cronológicos, lo que equivale aproximadamente a 60 años humanos. A partir de aquí, los chequeos veterinarios deben ser más frecuentes." 
      },
      { 
        q: "¿Es verdad que el primer año de un perro equivale a 15 humanos?", 
        a: "Sí, es una estimación aceptada por la AVMA (American Veterinary Medical Association). Tanto perros como gatos alcanzan la madurez física equivalente a un adolescente humano durante su primer año de vida, por eso el cálculo no es lineal." 
      },
      { 
        q: "¿Cómo influye la raza en la esperanza de vida?", 
        a: "Además del tamaño, la genética es clave. Razas braquicéfalas (como bulldogs) o con predisposiciones genéticas específicas pueden tener un envejecimiento distinto. Nuestra calculadora usa promedios por peso para mayor exactitud general." 
      },
      { 
        q: "¿Qué señales indican que mi mascota está envejeciendo?", 
        a: "Pérdida de visión o audición, disminución de la actividad, cambios en el peso, aparición de canas (especialmente en el hocico de los perros) y mayor rigidez al levantarse son signos claros de que ha entrado en su etapa senior." 
      }
    ],
    relacionados: [
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Días Vividos", link: "/varios/edad" },
      { nombre: "Costo por Uso", link: "/utiles/costo-por-uso" }
    ]
  },

  "fracciones": {
    faqs: [
      { 
        q: "¿Qué es simplificar una fracción?", 
        a: "Simplificar consiste en dividir tanto el numerador como el denominador por el mismo número (su Máximo Común Divisor) para obtener la fracción más pequeña equivalente. Nuestra calculadora lo hace automáticamente para que siempre tengas el resultado más elegante." 
      },
      { 
        q: "¿Por qué el denominador no puede ser cero?", 
        a: "En matemáticas, la división por cero no está definida. Una fracción representa una parte de un todo; si el todo (denominador) es cero, no hay nada que dividir, lo que crea una inconsistencia lógica." 
      },
      { 
        q: "¿Cómo se multiplican las fracciones?", 
        a: "A diferencia de la suma, la multiplicación es directa: se multiplica numerador con numerador y denominador con denominador. Es la operación más sencilla con fracciones." 
      },
      { 
        q: "¿Qué es una fracción propia e impropia?", 
        a: "Una fracción es propia si el numerador es menor que el denominador (vale menos que 1). Es impropia si el numerador es mayor o igual, indicando que representa uno o más enteros." 
      },
      { 
        q: "¿Cómo funciona la división de fracciones?", 
        a: "Para dividir fracciones, se multiplica la primera fracción por la inversa de la segunda. Comúnmente se conoce como 'multiplicación cruzada': el numerador de la primera por el denominador de la segunda y viceversa." 
      }
    ],
    relacionados: [
      { nombre: "Ecuaciones Lineales", link: "/matematica/ecuaciones" },
      { nombre: "Regla de Tres Simple", link: "/matematica/regla-de-tres" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ]
  },

  "gastos-compartidos": {
    faqs: [
      { 
        q: "¿Qué es la 'Liquidación Neta'?", 
        a: "Es un método que simplifica las deudas. En lugar de que todos le paguen a todos, se calcula cuánto puso cada uno respecto al promedio. Así, los que pusieron de menos solo le pagan a los que pusieron de más, reduciendo la cantidad de transferencias." 
      },
      { 
        q: "¿Qué pasa si alguien no consumió algo del grupo?", 
        a: "Esta calculadora divide por partes iguales entre todos los integrantes. Si alguien no participó de un gasto específico, lo ideal es restarlo del total antes de cargar los datos o crear un grupo aparte para ese gasto puntual." 
      },
      { 
        q: "¿Es seguro cargar mis gastos aquí?", 
        a: "Totalmente. Chieffin procesa los datos 'client-side' (en tu dispositivo). No guardamos nombres, montos ni descripciones en ningún servidor. Al cerrar o recargar la pestaña, los datos se borran." 
      },
      { 
        q: "¿Cómo se interpretan los saldos negativos?", 
        a: "Un saldo en rojo (negativo) significa que esa persona gastó menos que el promedio del grupo y, por lo tanto, debe dinero. Un saldo verde (positivo) significa que esa persona puso de más y debe recibir dinero." 
      },
      { 
        q: "¿Puedo exportar estos resultados?", 
        a: "Por ahora, la mejor forma de compartir los saldos es sacando una captura de pantalla del cuadro final 'Saldos Finales' y enviarla al grupo de WhatsApp del evento." 
      }
    ],
    relacionados: [
      { nombre: "Dividir Cuenta y Propina", link: "/utiles/dividir-cuenta" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Regla de Tres Simple", link: "/matematica/regla-de-tres" }
    ]
  },

  "horas": {
    faqs: [
      { 
        q: "¿Cómo se calcula el tiempo si el turno termina al día siguiente?", 
        a: "Nuestra calculadora detecta automáticamente si la hora de finalización es menor a la de inicio (por ejemplo, entras a las 22:00 y sales a las 06:00) y asume que el periodo corresponde al día siguiente, dándote el total de 8 horas correctamente." 
      },
      { 
        q: "¿Por qué es importante el formato decimal?", 
        a: "El formato decimal es fundamental para la facturación. Si cobras por hora, no puedes multiplicar tu tarifa por 'minutos'. Necesitas convertir, por ejemplo, 45 minutos en 0.75 horas para que el cálculo del pago sea matemáticamente exacto." 
      },
      { 
        q: "¿Qué es el sistema sexagesimal en el tiempo?", 
        a: "Es el sistema de base 60 que usamos para medir el tiempo (60 segundos = 1 minuto, 60 minutos = 1 hora). Es lo que hace que calcular diferencias mentales sea difícil, ya que no estamos acostumbrados a restar en base 60 sino en base 10 (decimal)." 
      },
      { 
        q: "¿Puedo calcular descansos o horas extra con esta herramienta?", 
        a: "Sí. Podés calcular el total de tu jornada y luego restar el tiempo de tu descanso (calculándolo por separado) para obtener las horas netas trabajadas." 
      },
      { 
        q: "¿Cómo paso de formato decimal a minutos manualmente?", 
        a: "Para volver de decimal a minutos, simplemente multiplica la parte decimal por 60. Por ejemplo, en 2.5 horas, multiplicas 0.5 * 60 = 30 minutos." 
      }
    ],
    relacionados: [
      { nombre: "Días Hábiles", link: "/utiles/dias-habiles" },
      { nombre: "", link: "" },
      { nombre: "Gastos Compartidos", link: "/utiles/gastos-compartidos" }
    ]
  },

  "tiempo": {
    faqs: [
      { 
        q: "¿Para qué sirve sumar horas y minutos?", 
        a: "Es fundamental para calcular la duración total de varias tareas. Si trabajaste 1h 45m en una cosa y 2h 30m en otra, sumarlas mentalmente es difícil porque el tiempo no es decimal (60 minutos hacen una hora)." 
      },
      { 
        q: "¿Qué pasa si ingreso más de 60 minutos en el campo MM?", 
        a: "Nuestra calculadora es inteligente: si ponés '90' en el campo de minutos, el sistema automáticamente los convertirá a 1 hora y 30 minutos al realizar el cálculo total." 
      },
      { 
        q: "¿Cómo se calcula el total de horas para facturar?", 
        a: "Una vez que tengas el total (ej: 5h 30m), recordá que para multiplicar por tu tarifa debés pasarlo a decimal. En este caso, 5h 30m serían 5.5 horas. Podés usar nuestra 'Calculadora de Diferencia de Horas' para obtener el decimal exacto." 
      },
      { 
        q: "¿Hay un límite de intervalos que puedo agregar?", 
        a: "No hay un límite técnico. Podés hacer clic en '+ Agregar otro intervalo' tantas veces como necesites para sumar una lista larga de tiempos, como los de toda una semana laboral." 
      },
      { 
        q: "¿La calculadora sirve para restar tiempo?", 
        a: "Este módulo específico está diseñado para suma y acumulación. Para calcular cuánto tiempo falta para un evento o la diferencia entre dos horas, te recomendamos usar nuestro módulo de 'Diferencia de Horas'." 
      }
    ],
    relacionados: [
      { nombre: "Diferencia de Horas", link: "/utiles/horas" },
      { nombre: "Días Hábiles", link: "/utiles/dias-habiles" },
      { nombre: "", link: "" }
    ]
  },

  "edad": {
    faqs: [
      { 
        q: "¿Qué precisión tiene el cálculo de los años bisiestos?", 
        a: "Nuestra calculadora utiliza una constante de 365.25 días por año. Esto compensa matemáticamente el día extra que se suma cada cuatro años en el calendario gregoriano, asegurando que tu edad en días sea lo más exacta posible." 
      },
      { 
        q: "¿Por qué mi edad en meses es una cifra aproximada?", 
        a: "Dado que los meses tienen duraciones distintas (28, 30 o 31 días), utilizamos un promedio técnico de 30.44 días por mes para realizar la conversión. Es el estándar utilizado en cálculos cronológicos generales." 
      },
      { 
        q: "¿Cómo se define el inicio de la edad cronológica?", 
        a: "Comienza en el momento exacto del nacimiento. A diferencia de la edad biológica (que depende del estado de tus células y órganos), la cronológica es puramente matemática y lineal basada en el tiempo transcurrido." 
      },
      { 
        q: "¿Cuándo se cumplen los 'hitos de días' redondos?", 
        a: "Es una tendencia divertida. Por ejemplo, los 10,000 días se cumplen aproximadamente a los 27 años y 4 meses. Los 20,000 días cerca de los 54 años y 9 meses. ¡Son excelentes momentos para una celebración especial!" 
      },
      { 
        q: "¿Se consideran las zonas horarias en el cálculo?", 
        a: "El cálculo se realiza basándose en la fecha del calendario. Para una precisión de segundos, se requeriría la hora exacta de nacimiento, pero para el cálculo de años, meses y días, la fecha calendario es el estándar universal." 
      }
    ],
    relacionados: [
      { nombre: "Edad de Mascotas", link: "/utiles/edad-mascotas" },
      { nombre: "Diferencia de Horas", link: "/utiles/horas" },
      { nombre: "Gasto Calórico", link: "/salud/calorias" }
    ]
  },
  "bebidas": {
    faqs: [
      { 
        q: "¿Cómo se calcula la cantidad de bebida por persona?", 
        a: "Para un evento estándar de 4 horas, se estima un consumo de 1 litro de bebida sin alcohol por persona (gaseosa/agua) y 1 litro de cerveza o una botella de vino cada 3 adultos. Estas cantidades aseguran que nadie se quede con sed sin generar un desperdicio excesivo." 
      },
      { 
        q: "¿Cuánto hielo necesito comprar para mi fiesta?", 
        a: "La regla general es calcular 1 kg de hielo cada 3 personas si es solo para consumo en vasos. Si además necesitás enfriar botellas en una heladerita o batea, deberás duplicar la cantidad a 1 kg cada 1.5 personas, especialmente en días de calor." 
      },
      { 
        q: "¿Cómo influye la duración del evento en el cálculo?", 
        a: "El consumo no es lineal; se toma más durante las primeras dos horas. Aplicamos un factor de corrección donde cada hora extra después de las 4 iniciales suma aproximadamente un 15% al total de la compra original." 
      },
      { 
        q: "¿Cuántas copas rinde una botella de vino o champagne?", 
        a: "Una botella de vino de 750ml rinde entre 5 y 6 copas generosas. En el caso del champagne o espumante, servido en copa flauta, rinde entre 6 y 7 copas por botella. Para el Fernet o bebidas blancas, calculá entre 12 y 15 tragos por litro de alcohol." 
      },
      { 
        q: "¿Cómo calcular bebidas si hay muchos niños?", 
        a: "Los niños consumen exclusivamente bebidas sin alcohol. Se recomienda calcular 600ml de gaseosa o jugo por niño para un evento de media duración. Es fundamental priorizar el agua mineral si el evento es al aire libre o incluye juegos físicos." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Asado", link: "/utiles/asado" },
      { nombre: "Dividir Cuenta", link: "/utiles/dividir-cuenta" },
      { nombre: "Calculadora de Propinas", link: "/utiles/propina" }
    ]
  },
  "interes-compuesto": {
    faqs: [
      { 
        q: "¿Qué es el interés compuesto y cómo funciona?", 
        a: "El interés compuesto es aquel que se suma al capital inicial y sobre el cual se vuelven a generar intereses. A diferencia del interés simple, aquí los intereses 'producen más intereses', generando un efecto de bola de nieve que acelera el crecimiento del dinero a largo plazo." 
      },
      { 
        q: "¿Cuál es la diferencia entre interés simple y compuesto?", 
        a: "En el interés simple, los beneficios se calculan solo sobre el capital original. En el interés compuesto, los beneficios se reinvierten en cada período. La fórmula matemática es $$A = P(1 + r/n)^{nt}$$, donde A es el monto final." 
      },
      { 
        q: "¿Qué significa la frecuencia de capitalización?", 
        a: "Es la frecuencia con la que los intereses se suman al capital. Puede ser diaria, mensual, trimestral o anual. Cuanto más frecuente sea la capitalización (ej: mensual vs anual), mayor será el crecimiento final de la inversión debido a que el interés trabaja más veces." 
      },
      { 
        q: "¿Por qué es importante empezar a invertir temprano?", 
        a: "Debido al factor tiempo. El interés compuesto necesita tiempo para mostrar su verdadero poder. Empezar a ahorrar 5 años antes puede significar una diferencia de miles de dólares al final del período debido al crecimiento exponencial." 
      },
      { 
        q: "¿Cómo influye la inflación en el interés compuesto?", 
        a: "La inflación reduce el poder adquisitivo. Para que tu inversión realmente crezca, la tasa de interés obtenida debe ser mayor a la tasa de inflación. Si ganás un 50% anual pero la inflación es del 60%, en términos reales estás perdiendo dinero." 
      }
    ],
    relacionados: [
      { nombre: "Plazo Fijo", link: "/finanzas/plazo-fijo" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/inflacion" }
    ]
  },
  "tasas-tna-tea": {
    faqs: [
      { 
        q: "¿Qué es la TNA (Tasa Nominal Anual)?", 
        a: "La TNA es la tasa de referencia que los bancos informan por ley, pero no tiene en cuenta la capitalización. Es una tasa 'teórica' que sirve para calcular el interés simple de un período determinado." 
      },
      { 
        q: "¿Qué es la TEA (Tasa Efectiva Anual)?", 
        a: "La TEA es la tasa que realmente terminás pagando o cobrando al cabo de un año. Incluye la capitalización de los intereses, es decir, el efecto de reinvertir los intereses ganados en cada período (mes, quincena, etc.)." 
      },
      { 
        q: "¿Cómo se pasa de TNA a TEA?", 
        a: "Primero se calcula la tasa periódica dividiendo la TNA por la cantidad de períodos en el año (m). Luego se aplica la fórmula: $$TEA = (1 + TNA/m)^m - 1$$. Por ejemplo, para un plazo fijo mensual, m es 12." 
      },
      { 
        q: "¿Por qué la TEA es siempre mayor a la TNA?", 
        a: "Porque la TEA asume que los intereses generados no se retiran, sino que se suman al capital para generar nuevos intereses el mes siguiente. Es el concepto de interés compuesto aplicado a un año." 
      },
      { 
        q: "¿Qué es el CFT (Costo Financiero Total)?", 
        a: "En préstamos, el CFT es lo más importante. Es la TEA más todos los gastos adicionales como seguros, comisiones bancarias e impuestos (IVA). Es el número final que indica cuánto te cuesta el crédito." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Plazo Fijo", link: "/finanzas/plazo-fijo" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },
  "calculadora-de-areas": {
  faqs: [
    { 
      q: "¿Cómo se calculan los metros cuadrados (m²)?", 
      a: "Para calcular la superficie de un espacio rectangular o cuadrado, se debe multiplicar el largo por el ancho. La fórmula básica es: $$Área = Base \\times Altura$$. El resultado se expresa siempre en unidades al cuadrado." 
    },
    { 
      q: "¿Cómo medir una pared con ventanas o puertas?", 
      a: "Primero calculá el área total de la pared (largo x alto). Luego, calculá el área de cada ventana o puerta y restáselas al total. De esta forma obtenés la superficie neta que necesitás pintar o revestir." 
    },
    { 
      q: "¿Cuánta pintura necesito por metro cuadrado?", 
      a: "Como regla general, 1 litro de pintura rinde entre 10 y 12 m² por mano en paredes lisas. Si la pared es rugosa o de ladrillo visto, el rendimiento puede bajar a 6 u 8 m² por litro." 
    },
    { 
      q: "¿Cuál es la diferencia entre metros lineales y metros cuadrados?", 
      a: "El metro lineal mide una sola dimensión (longitud), como un zócalo o una moldura. El metro cuadrado mide una superficie (dos dimensiones), como un piso o una pared completa." 
    },
    { 
      q: "¿Cómo convertir centímetros a metros para el cálculo?", 
      a: "Es fundamental que ambas medidas estén en la misma unidad. Si mediste en centímetros, dividí por 100 para pasar a metros. Por ejemplo: 250 cm son 2.5 metros." 
    }
  ],
  relacionados: [
    { nombre: "Frigorías de Aire", link: "/hogar/aire-acondicionado" },
    { nombre: "Calculadora de IVA", link: "/finanzas/iva" },
    { nombre: "Calculadora de Asado", link: "/hogar/asado" }
  ]
},
"calculadora-de-volumenes": {
  faqs: [
    { 
      q: "¿Cómo se calculan los metros cúbicos (m³)?", 
      a: "Para un espacio rectangular (como una pileta o habitación), la fórmula es: $$Volumen = Largo \\times Ancho \\times Alto$$. El resultado indica el espacio tridimensional en metros cúbicos." 
    },
    { 
      q: "¿Cómo pasar de metros cúbicos a litros?", 
      a: "Es una conversión directa y muy útil: **1 metro cúbico equivale a 1.000 litros**. Si tu cálculo dio 15 m³, entonces necesitás 15.000 litros para llenarlo." 
    },
    { 
      q: "¿Cómo calcular el volumen de una pileta con profundidad variable?", 
      a: "Debés calcular la profundidad promedio. Sumá la parte más profunda y la más playa, dividí por 2, y usá ese número como 'alto' en la fórmula principal." 
    },
    { 
      q: "¿Para qué sirve calcular el volumen en construcción?", 
      a: "Es fundamental para pedir materiales como hormigón elaborado, arena o tierra. Los corralones venden estos materiales por metro cúbico ($m^3$)." 
    },
    { 
      q: "¿Cómo calcular el volumen de un cilindro (tanque circular)?", 
      a: "La fórmula es: $$Volumen = \\pi \\times radio^2 \\times alto$$. Primero calculás el área del círculo de la base y luego lo multiplicás por la altura del tanque." 
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Áreas", link: "/matematica/areas" },
    { nombre: "Frigorías de Aire", link: "/hogar/aire-acondicionado" },
    { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
  ]
  },
"calculadora-de-angulos": {
  faqs: [
    { 
      q: "¿Qué es un ángulo complementario?", 
      a: "Dos ángulos son complementarios si la suma de sus medidas es exactamente 90°. Por ejemplo, si tenés un ángulo de 35°, su complemento es 55°. Es un concepto clave en el diseño de esquinas y marcos." 
    },
    { 
      q: "¿Qué es un ángulo suplementario?", 
      a: "Los ángulos suplementarios son aquellos que, al sumarse, dan como resultado 180°. Se utilizan mucho en ingeniería y arquitectura para calcular inclinaciones sobre una línea recta o superficie plana." 
    },
    { 
      q: "¿Cómo convertir grados a radianes?", 
      a: "La conversión es sencilla: multiplicás los grados por $$\\pi$$ (aprox. 3.14159) y dividís el resultado por 180. Los radianes son la unidad estándar usada en cálculos de física y programación avanzada." 
    },
    { 
      q: "¿Para qué sirve conocer los ángulos en carpintería?", 
      a: "Es fundamental para realizar cortes a inglete precisos (generalmente a 45° para marcos) y para asegurar que las estructuras como techos o muebles tengan la inclinación y estabilidad correcta." 
    },
    { 
      q: "¿Qué es un ángulo recto y por qué es tan importante?", 
      a: "Un ángulo recto mide exactamente 90°. Es la base de la construcción moderna (paredes, pisos y techos), ya que garantiza la perpendicularidad y el aprovechamiento del espacio." 
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Áreas", link: "/matematica/areas" },
    { nombre: "Calculadora de Volúmenes", link: "/matematica/calculadora-de-volumenes" },
    { nombre: "Frigorías de Aire", link: "/hogar/aire-acondicionado" }
  ]
  },
  "ecuaciones-segundo-grado": {
  faqs: [
    { 
      q: "¿Qué es la fórmula general o de Bhaskara?", 
      a: "Es la fórmula $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$ que permite hallar las raíces de cualquier ecuación cuadrática." 
    },
    { 
      q: "¿Qué pasa si el discriminante es negativo?", 
      a: "Si el valor dentro de la raíz ($$b^2 - 4ac$$) es menor a cero, la ecuación no tiene solución en el conjunto de los números reales, solo en el campo de los números complejos." 
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Ecuaciones Simples", link: "/utiles/ecuaciones" },
    { nombre: "Regla de Tres Simple", link: "/matematica/regla-de-tres" },
    { nombre: "Teorema de Pitágoras", link: "/matematica/pitagoras" }
  ]
  },
  "mcm-mcd": {
    faqs: [
      {
        q: "¿Qué es el Mínimo Común Múltiplo (MCM)?",
        a: "El MCM es el número positivo más pequeño que es múltiplo de dos o más números. Se utiliza frecuentemente para sumar o restar fracciones con distinto denominador."
      },
      {
        q: "¿Qué es el Máximo Común Divisor (MCD)?",
        a: "El MCD es el mayor número entero que divide a dos o más números sin dejar residuo. Es fundamental para simplificar fracciones y resolver problemas de repartos equitativos."
      },
      {
        q: "¿Cómo se calculan el MCM y el MCD?",
        a: "El método más común es la descomposición en factores primos. Para el MCD se multiplican los factores comunes con su menor exponente. Para el MCM se multiplican los factores comunes y no comunes con su mayor exponente."
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Fracciones", link: "/utiles/fracciones" },
      { nombre: "Ecuaciones de Segundo Grado", link: "/matematica/ecuaciones-segundo-grado" },
      { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" }
    ]
    },
  "logaritmos": {
    faqs: [
      {
        q: "¿Qué es un logaritmo?",
        a: "El logaritmo de un número es el exponente al que se debe elevar una base fija para obtener dicho número. Por ejemplo, el logaritmo de 100 en base 10 es 2, porque 10 elevado a la potencia 2 es igual a 100."
      },
      {
        q: "¿Cuál es la diferencia entre log y ln?",
        a: "A menudo 'log' se refiere al logaritmo decimal (base 10), mientras que 'ln' es el logaritmo natural, cuya base es el número e (aproximadamente 2.718)."
      },
      {
        q: "¿Existen logaritmos de números negativos?",
        a: "En el campo de los números reales, no existen logaritmos de números negativos ni de cero, ya que no hay ninguna potencia de una base positiva que de un resultado negativo."
      }
    ],
    relacionados: [
      { nombre: "Ecuaciones Segundo Grado", link: "/matematica/ecuaciones-segundo-grado" },
      { nombre: "MCM y MCD", link: "/matematica/mcm-mcd" },
      { nombre: "Calculadora de Fracciones", link: "/utiles/fracciones" }
    ]
  },
  "promedio-mediana-moda": {
    faqs: [
      {
        q: "¿Cuál es la diferencia entre promedio y mediana?",
        a: "El promedio suma todos los valores y los divide por la cantidad de datos, mientras que la mediana es el valor que ocupa la posición central al ordenarlos. La mediana es más confiable cuando hay valores extremos que distorsionan el promedio."
      },
      {
        q: "¿Qué sucede si hay dos modas en un conjunto de datos?",
        a: "Si dos números se repiten la misma cantidad de veces y esa frecuencia es la máxima, el conjunto se denomina 'bimodal'. Si son más de dos, es 'multimodal'."
      },
      {
        q: "¿Cómo se calcula la mediana si la cantidad de datos es par?",
        a: "En ese caso, no hay un único número central. Se toman los dos valores centrales y se calcula su promedio (se suman y se dividen por dos)."
      }
    ],
    relacionados: [
      { nombre: "Ecuaciones Segundo Grado", link: "/matematica/ecuaciones-segundo-grado" },
      { nombre: "MCM y MCD", link: "/matematica/mcm-mcd" },
      { nombre: "Logaritmos", link: "/matematica/logaritmos" }
    ]
  },
  "varianza-desviacion-estandar": {
    faqs: [
      {
        q: "¿Qué indica una desviación estándar alta?",
        a: "Indica que los datos están muy alejados del promedio, es decir, que hay mucha variabilidad o dispersión en el conjunto de datos."
      },
      {
        q: "¿Cuál es la diferencia entre varianza y desviación estándar?",
        a: "La varianza se expresa en unidades al cuadrado, lo que dificulta su interpretación. La desviación estándar es la raíz cuadrada de la varianza, devolviendo el resultado a la unidad de medida original de los datos."
      },
      {
        q: "¿Por qué es importante en finanzas?",
        a: "Se utiliza para medir el riesgo de una inversión. Una mayor desviación estándar en los rendimientos históricos de un activo suele indicar una mayor volatilidad y riesgo."
      }
    ],
    relacionados: [
      { nombre: "Promedio, Mediana y Moda", link: "/matematica/promedio-mediana-moda" },
      { nombre: "Logaritmos", link: "/matematica/logaritmos" },
      { nombre: "MCM y MCD", link: "/matematica/mcm-mcd" }
    ]
  },
  "calculadora-binomial": {
    faqs: [
      {
        q: "¿Qué es la distribución binomial?",
        a: "Es una distribución de probabilidad que describe el número de éxitos al realizar n experimentos independientes entre sí, con una probabilidad fija de éxito p."
      },
      {
        q: "¿Cuáles son los requisitos para usarla?",
        a: "Solo debe haber dos resultados posibles (éxito/fracaso), los experimentos deben ser independientes y la probabilidad de éxito debe ser constante en cada prueba."
      }
    ],
    relacionados: [
      { nombre: "Varianza y Desviación", link: "/matematica/varianza-desviacion-estandar" },
      { nombre: "Promedio, Mediana y Moda", link: "/matematica/promedio-mediana-moda" }
    ]
  },
  "combinaciones-permutaciones": {
    faqs: [
      {
        q: "¿Cuál es la diferencia entre combinación y permutación?",
        a: "En las permutaciones el orden importa (ej. un código de seguridad), mientras que en las combinaciones el orden no afecta el resultado (ej. elegir jugadores para un equipo)."
      },
      {
        q: "¿Cómo se relaciona con la probabilidad?",
        a: "La combinatoria (nCr) es la base para calcular los coeficientes en la [Probabilidad Binomial](/matematica/calculadora-binomial), permitiendo saber de cuántas formas pueden ocurrir los éxitos."
      },
      {
        q: "¿Qué es el factorial (n!)?",
        a: "Es el producto de todos los números enteros positivos desde 1 hasta n. Es la operación fundamental que realiza nuestra [calculadora de nCr y nPr](/matematica/combinaciones-permutaciones)."
      }
    ],
    relacionados: [
      { nombre: "Probabilidad Binomial", link: "/matematica/calculadora-binomial" },
      { nombre: "Calculadora de Factorial", link: "/matematica/factorial" }
    ]  
  },
"conversor-bases": {
  faqs: [
    {
      q: "¿Cómo convertir de decimal a binario?",
      a: "Se divide el número decimal por 2 sucesivamente y se anotan los restos en orden inverso. Nuestra [calculadora de bases](/matematica/conversor-bases) lo hace automáticamente por vos."
    },
    {
      q: "¿Por qué se usa el sistema hexadecimal en programación?",
      a: "Porque permite representar grandes valores binarios de forma corta y legible. Un byte (8 bits) se representa con solo dos caracteres hexadecimales."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Matrices", link: "/matematica/calculadora-matrices" },
    { nombre: "Combinaciones y Permutaciones", link: "/matematica/combinaciones-permutaciones" }
  ]
},
"notacion-cientifica": {
  faqs: [
    {
      q: "¿Qué es la notación científica?",
      a: "Es una forma de escribir números muy grandes o muy pequeños de manera abreviada, multiplicando un número entre 1 y 10 por una potencia de 10."
    },
    {
      q: "¿Cuándo el exponente es negativo?",
      a: "El exponente es negativo cuando el número original es menor a 1 (un decimal pequeño). Esto indica cuántos lugares se movió la coma hacia la derecha."
    }
  ],
  relacionados: [
    { nombre: "Conversor de Bases", link: "/matematica/conversor-bases" },
    { nombre: "Calculadora de Matrices", link: "/matematica/calculadora-matrices" }
  ]
  },
"calculadora-matrices": {
  faqs: [
    {
      q: "¿Cómo se suman dos matrices?",
      a: "Para sumar dos matrices, simplemente sumás los elementos que ocupan la misma posición en cada una. Ambas matrices deben tener la misma cantidad de filas y columnas."
    },
    {
      q: "¿Qué es una matriz de 2x2?",
      a: "Es una matriz que tiene 2 filas y 2 columnas, sumando un total de 4 elementos. Es la forma más común para aprender álgebra lineal."
    }
  ],
  relacionados: [
    { nombre: "Combinaciones y Permutaciones", link: "/matematica/combinaciones-permutaciones" },
    { nombre: "Probabilidad Binomial", link: "/matematica/calculadora-binomial" }
  ]  
},
"factorial": {
  faqs: [
    {
      q: "¿Qué es un número factorial?",
      a: "Es el resultado de multiplicar un número entero positivo por todos los números enteros menores que él hasta el 1. Se representa con el símbolo 'n!'."
    },
    {
      q: "¿Por qué el factorial de 0 es 1?",
      a: "Se define como 1 por convención matemática para que las fórmulas de [Combinaciones y Permutaciones](/matematica/combinaciones-permutaciones) funcionen correctamente sin dar errores de división por cero."
    },
    {
      q: "¿Hasta qué número se puede calcular un factorial?",
      a: "Los factoriales crecen de forma explosiva. Por ejemplo, 170! es el número más grande que la mayoría de las calculadoras pueden procesar antes de mostrar 'Infinito'. Para manejar estos números gigantes, solemos usar la [Calculadora de Notación Científica](/matematica/notacion-cientifica)."
    },
    {
      q: "¿Para qué sirve el factorial en la vida real?",
      a: "Se usa principalmente en estadística y probabilidad para calcular cuántas formas diferentes hay de organizar objetos o eventos (permutaciones)."
    },
    {
      q: "¿Cómo se calcula el factorial de números grandes?",
      a: "Para números que superan la capacidad estándar, se utilizan aproximaciones como la Fórmula de Stirling o se expresan directamente en [potencias de 10](/matematica/notacion-cientifica) para facilitar su lectura."
    }
  ],
  relacionados: [
    { nombre: "Combinaciones y Permutaciones", link: "/matematica/combinaciones-permutaciones" },
    { nombre: "Notación Científica", link: "/matematica/notacion-cientifica" },
    { nombre: "Probabilidad Binomial", link: "/matematica/calculadora-binomial" }
  ]
},
"contador-palabras": {
  faqs: [
    {
      q: "¿Cuántas palabras debe tener un artículo SEO?",
      a: "No hay un número fijo, pero la mayoría de los artículos que posicionan en Google tienen entre 1000 y 2000 palabras, dependiendo de la competencia."
    },
    {
      q: "¿Cuál es el límite de caracteres para un título en Google?",
      a: "Google suele mostrar los primeros 60 caracteres. Nuestra [herramienta de conteo](/seo/contador-palabras) te ayuda a no pasarte del límite visual."
    },
    {
      q: "¿Los espacios cuentan como caracteres?",
      a: "Sí, en SEO los espacios son caracteres que ocupan píxeles. Por eso es vital usar un [contador de caracteres preciso](/seo/contador-palabras)."
    },
    {
      q: "¿Cómo influye el tiempo de lectura en el SEO?",
      a: "Un tiempo de lectura estimado ayuda a mejorar la experiencia del usuario (UX), permitiéndole saber de antemano cuánto tardará en consumir tu contenido."
    }
  ],
  relacionados: [
    { nombre: "Notación Científica", link: "/matematica/notacion-cientifica" },
    { nombre: "Conversor de Bases", link: "/matematica/conversor-bases" }
  ]
},
"contador-caracteres": {
  faqs: [
    {
      q: "¿Cuál es la diferencia entre el contador de palabras y el de caracteres?",
      a: "El [contador de palabras](/seo/contador-palabras) mide el volumen total de contenido, mientras que el de caracteres se enfoca en los límites técnicos de Google para evitar recortes en la SERP."
    },
    {
      q: "¿Qué pasa si me paso de los 155 caracteres en la descripción?",
      a: "Google truncará el texto. Esto no penaliza directamente el ranking, pero puede hacer que tu mensaje pierda fuerza y baje el número de clics."
    },
    {
      q: "¿Los emojis cuentan en el contador de caracteres SEO?",
      a: "Sí, y de hecho suelen ocupar más espacio visual (píxeles) que una letra normal. Usalos con moderación en tus [Meta Títulos](/seo/contador-caracteres)."
    }
  ],
  relacionados: [
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Calculadora de Matrices", link: "/matematica/calculadora-matrices" }
  ]
},
"generador-slugs": {
  faqs: [
    {
      q: "¿Por qué no deben usarse tildes en las URLs?",
      a: "Los navegadores codifican las tildes con caracteres extraños (ej. %c3%a1), lo que genera URLs largas, feas y poco confiables para los usuarios y buscadores."
    },
    {
      q: "¿Es mejor usar guion medio o guion bajo?",
      a: "Google recomienda oficialmente el **guion medio (-)**. Los guiones bajos (_) son tratados como parte de una misma palabra, lo que dificulta la identificación de keywords."
    },
    {
      q: "¿Debo incluir palabras cortas como 'y', 'de' o 'para'?",
      a: "No. Se conocen como 'stop words'. Eliminarlas hace que tu URL sea más corta y que las palabras clave tengan más relevancia. Podés medir la longitud total en nuestro [Contador de Caracteres](/seo/contador-caracteres)."
    },
    {
      q: "¿Cambiar un slug afecta mi posicionamiento?",
      a: "Sí, cambiar una URL ya indexada genera un error 404. Si lo hacés, debés aplicar una redirección 301. Usá nuestro [Generador de Slugs](/seo/generador-slugs) antes de publicar."
    },
    {
      q: "¿Cuántas palabras debe tener un slug ideal?",
      a: "Lo ideal es entre 3 y 5 palabras. Si tu texto es muy largo, podés resumirlo analizando las palabras clave con el [Contador de Palabras SEO](/seo/contador-palabras)."
    }
  ],
  relacionados: [
    { nombre: "Contador de Caracteres SEO", link: "/seo/contador-caracteres" },
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Notación Científica", link: "/matematica/notacion-cientifica" }
  ]
},
"contador-caracteres-sin-espacios": {
  faqs: [
    {
      q: "¿Qué se considera 'espacio' en este contador?",
      a: "Nuestra herramienta elimina los espacios en blanco, los tabuladores y los saltos de línea (enters), dejando únicamente caracteres visibles como letras, números y símbolos."
    },
    {
      q: "¿Los signos de puntuación cuentan como caracteres?",
      a: "Sí. Comas, puntos, exclamaciones y otros símbolos son caracteres visibles y se incluyen en el conteo neto. Solo se excluyen los caracteres de espaciado invisible."
    },
    {
      q: "¿Por qué Google usa caracteres con espacios para el SEO?",
      a: "Google mide el ancho visual en píxeles de lo que el usuario ve en pantalla. Como los espacios ocupan un lugar físico en el título, debés usar nuestro [Contador de Caracteres SEO](/seo/contador-caracteres) para tus metas."
    },
    {
      q: "¿Cuándo es obligatorio contar sin espacios?",
      a: "Es común en publicaciones académicas, traducción de documentos por palabra/caracter y en la configuración de ciertos lenguajes de programación o bases de datos con límites de almacenamiento estrictos."
    },
    {
      q: "¿Puedo limpiar el formato antes de contar?",
      a: "Sí, al pegar el texto en nuestro [Generador de Slugs](/seo/generador-slugs) podés ver cómo se simplifica una cadena, pero para el conteo neto lo mejor es usar directamente esta calculadora."
    }
  ],
  relacionados: [
    { nombre: "Contador de Caracteres SEO", link: "/seo/contador-caracteres" },
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Generador de Slugs", link: "/seo/generador-slugs" }
  ]
},
"densidad-keywords": {
  faqs: [
    {
      q: "¿Cuál es la densidad de palabras clave ideal?",
      a: "No existe una cifra mágica, pero la mayoría de los expertos recomiendan entre un 0.5% y un 2%. Lo más importante es que el texto fluya de forma natural."
    },
    {
      q: "¿Qué es el Keyword Stuffing?",
      a: "Es la práctica de repetir excesivamente una palabra clave con la intención de manipular los rankings. Google penaliza esta técnica por considerar que ofrece una mala experiencia al usuario."
    },
    {
      q: "¿Cómo puedo reducir la densidad sin perder relevancia?",
      a: "Usá sinónimos y palabras relacionadas semánticamente (LSI). Esto ayuda a Google a entender el contexto sin necesidad de repetir la misma keyword exacta."
    },
    {
      q: "¿Esta herramienta analiza frases o solo palabras sueltas?",
      a: "Nuestra herramienta analiza palabras individuales filtrando las 'stop words' para que te enfoques en los términos con mayor carga semántica."
    },
    {
      q: "¿La densidad de keywords afecta al SEO en 2026?",
      a: "Sí, pero no como antes. Hoy Google prioriza la intención de búsqueda. Usá nuestro [Generador de Slugs](/seo/generador-slugs) para complementar la optimización de tu página."
    }
  ],
  relacionados: [
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Generador de Slugs SEO", link: "/seo/generador-slugs" },
    { nombre: "Contador de Caracteres SEO", link: "/seo/contador-caracteres" }
  ]
},
"tiempo-lectura": {
  faqs: [
    {
      q: "¿Cuál es la velocidad de lectura promedio de una persona?",
      a: "Para lectura en pantallas digitales, el promedio se sitúa entre 200 y 250 palabras por minuto. En papel, esta velocidad suele ser ligeramente superior."
    },
    {
      q: "¿Por qué es importante mostrar el tiempo de lectura en mi blog?",
      a: "Mejora la transparencia con el usuario y ayuda a reducir la tasa de rebote. Si un usuario sabe que la lectura es corta, es más probable que comience a leer de inmediato."
    },
    {
      q: "¿El tiempo de lectura influye en el ranking de Google?",
      a: "No es un factor directo, pero influye en métricas de comportamiento como el 'Dwell Time' (tiempo de permanencia). Si los usuarios se quedan más tiempo, Google interpreta que tu contenido es valioso."
    },
    {
      q: "¿Cómo puedo reducir el tiempo de lectura sin quitar información?",
      a: "Podés usar nuestro [Contador de Palabras SEO](/seo/contador-palabras) para identificar partes redundantes y mejorar la concisión de tus párrafos."
    },
    {
      q: "¿Qué herramientas complementan el tiempo de lectura?",
      a: "Para que la lectura sea fluida, es vital que la URL sea clara; usá nuestro [Generador de Slugs](/seo/generador-slugs) para crear direcciones fáciles de recordar."
    }
  ],
  relacionados: [
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Generador de Slugs SEO", link: "/seo/generador-slugs" },
    { nombre: "Densidad de Keywords", link: "/seo/densidad-keywords" }
  ]
},
"calculadora-ctr": {
  faqs: [
    {
      q: "¿Qué es un buen CTR en SEO?",
      a: "Depende de la posición. Para un primer resultado en Google, un CTR superior al 20% es excelente. Para posiciones inferiores (7 al 10), un 1% o 2% se considera normal."
    },
    {
      q: "¿Por qué mi CTR es bajo si estoy en la primera página?",
      a: "Puede que tu Meta Título no sea lo suficientemente atractivo o que la intención de búsqueda del usuario no coincida con lo que ofrecés en el snippet."
    },
    {
      q: "¿Cómo afecta el CTR al posicionamiento?",
      a: "Aunque Google no lo confirma como factor directo, un CTR alto indica relevancia. Si muchos usuarios hacen clic en tu resultado, Google entiende que tu página responde bien a la consulta."
    },
    {
      q: "¿Cómo puedo mejorar el CTR rápido?",
      a: "Optimizá tu Meta Título con nuestro [Contador de Caracteres SEO](/seo/contador-caracteres) para que no se corte y probá agregando palabras de acción o números."
    },
    {
      q: "¿El CTR es lo mismo en Google Ads que en SEO?",
      a: "La fórmula es la misma, pero en Ads pagás por cada clic. En SEO, un CTR alto significa tráfico gratuito. Podés analizar la longitud de tus anuncios con el [Contador de Palabras SEO](/seo/contador-palabras)."
    }
  ],
  relacionados: [
    { nombre: "Contador de Caracteres SEO", link: "/seo/contador-caracteres" },
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Generador de Slugs SEO", link: "/seo/generador-slugs" }
  ]
},
"tasa-conversion": {
  faqs: [
    {
      q: "¿Cuál es una buena tasa de conversión en E-commerce?",
      a: "El promedio mundial ronda entre el 1% y el 3%. Sin embargo, esto varía según el nicho; productos de lujo suelen tener conversiones más bajas que artículos de primera necesidad."
    },
    {
      q: "¿Cómo puedo mejorar mi tasa de conversión?",
      a: "Mejorando la velocidad de carga, simplificando los formularios y usando textos persuasivos. Podés analizar la densidad de tus palabras de venta con nuestra [Calculadora de Densidad](/seo/densidad-keywords)."
    },
    {
      q: "¿Qué relación hay entre el CTR y la conversión?",
      a: "El [CTR](/seo/calculadora-ctr) mide el éxito en atraer al usuario desde Google, mientras que la conversión mide el éxito una vez que el usuario ya está dentro de tu sitio."
    },
    {
      q: "¿Por qué tengo muchas visitas pero pocas conversiones?",
      a: "Esto suele ocurrir si tu contenido no responde a la intención de búsqueda o si tu página genera desconfianza. Revisá que tus [Meta Datos](/seo/contador-caracteres) prometan lo que realmente ofrecés."
    },
    {
      q: "¿Es lo mismo conversión que venta?",
      a: "No necesariamente. Una conversión es cualquier objetivo cumplido: puede ser una suscripción al newsletter, la descarga de un PDF o completar un carrito de compras."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Densidad de Keywords", link: "/seo/densidad-keywords" },
    { nombre: "Contador de Caracteres SEO", link: "/seo/contador-caracteres" }
  ]
},
"roi-marketing": {
  faqs: [
    {
      q: "¿Qué se considera un buen ROI en marketing digital?",
      a: "Un ROI de 5:1 (500%) se considera excelente para la mayoría de las industrias. Un ROI de 2:1 indica que la campaña es rentable pero tiene poco margen de ganancia tras gastos operativos."
    },
    {
      q: "¿Cuál es la diferencia entre ROI y ROAS?",
      a: "El ROAS mide solo los ingresos brutos por la inversión publicitaria, mientras que el ROI resta todos los costos (producto, herramientas, salarios) para dar la rentabilidad neta."
    },
    {
      q: "¿Cómo influye el SEO en el ROI a largo plazo?",
      a: "A diferencia de los anuncios, el SEO no tiene un costo por clic. Una vez posicionado con un buen [Slug Optimizado](/seo/generador-slugs), el ROI tiende a subir exponencialmente con el tiempo."
    },
    {
      q: "¿Por qué mi ROI es negativo si tengo muchas ventas?",
      a: "Esto sucede cuando el costo de adquisición (CAC) es más alto que el margen de beneficio. Debés optimizar tu [Tasa de Conversión](/seo/tasa-conversion) para bajar costos."
    },
    {
      q: "¿Cómo ayuda el CTR a mejorar el ROI?",
      a: "Un [CTR](/seo/calculadora-ctr) alto en tus anuncios baja el costo por clic (CPC) en plataformas como Google Ads, lo que directamente mejora tu retorno de inversión."
    }
  ],
  relacionados: [
    { nombre: "Tasa de Conversión", link: "/seo/tasa-conversion" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Generador de Slugs SEO", link: "/seo/generador-slugs" }
  ]
},
"calculadora-cpc": {
  faqs: [
    {
      q: "¿Cómo se calcula el CPC?",
      a: "La fórmula es simple: dividís el costo total de la campaña por el número de clics recibidos. Si gastaste $50 y tuviste 100 clics, tu CPC es de $0.50."
    },
    {
      q: "¿Por qué sube mi CPC en Google Ads?",
      a: "Suele subir por mayor competencia en la subasta o porque el Nivel de Calidad de tu anuncio es bajo. Asegurate de optimizar tus textos con el [Contador de Caracteres SEO](/seo/contador-caracteres)."
    },
    {
      q: "¿Es mejor un CPC bajo siempre?",
      a: "No necesariamente. Un CPC muy bajo puede traer tráfico de mala calidad que no convierte. Lo ideal es balancear un buen CPC con una alta [Tasa de Conversión](/seo/tasa-conversion)."
    },
    {
      q: "¿Cómo bajo el CPC de mis anuncios?",
      a: "Mejorando la relevancia entre tu anuncio y la página de destino. Usar una palabra clave clara y un [Slug Optimizado](/seo/generador-slugs) ayuda a que las plataformas confíen más en tu enlace."
    },
    {
      q: "¿Cuál es la diferencia entre CPC y CPM?",
      a: "En el CPC pagás por cada clic (acción), mientras que en el CPM pagás por cada mil impresiones (visualización), sin importar si hicieron clic o no."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Tasa de Conversión", link: "/seo/tasa-conversion" },
    { nombre: "ROI Marketing", link: "/seo/roi-marketing" }
  ]
},
"calculadora-cpm": {
  faqs: [
    {
      q: "¿Cuál es la fórmula del CPM?",
      a: "El CPM se calcula dividiendo el costo total de la campaña por el número de impresiones y multiplicando el resultado por 1,000."
    },
    {
      q: "¿Cuándo es mejor usar CPM que CPC?",
      a: "El CPM es ideal para campañas de reconocimiento de marca (Awareness). El [CPC](/seo/calculadora-cpc) es mejor cuando buscás una acción directa o venta."
    },
    {
      q: "¿Qué factores influyen en el precio del CPM?",
      a: "La segmentación (públicos específicos son más caros), la temporada del año (como Black Friday) y la calidad de tus anuncios."
    },
    {
      q: "¿Cómo ayuda el SEO a bajar la dependencia del CPM?",
      a: "Al generar impresiones orgánicas gratuitas, no necesitás pagar por visibilidad. Podés mejorar tu alcance orgánico usando un [Slug Optimizado](/seo/generador-slugs)."
    },
    {
      q: "¿Un CPM bajo siempre es bueno?",
      a: "No siempre. Un CPM muy barato puede significar que tus anuncios se muestran en sitios de baja calidad o a personas que no tienen interés en tu producto."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de CPC", link: "/seo/calculadora-cpc" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Generador de Slugs SEO", link: "/seo/generador-slugs" }
  ]
},
"engagement-rate": {
  faqs: [
    {
      q: "¿Qué se considera un buen engagement rate?",
      a: "Entre un 1% y un 3.5% se considera promedio. Si superás el 3.5%, tenés una comunidad muy comprometida. En cuentas pequeñas (menos de 5k), es normal ver tasas del 5% al 10%."
    },
    {
      q: "¿Es mejor calcularlo sobre seguidores o sobre alcance?",
      a: "Sobre alcance es más preciso para medir la calidad del contenido. Sobre seguidores es mejor para medir la lealtad de la marca a largo plazo."
    },
    {
      q: "¿Cómo puedo subir mi engagement?",
      a: "Fomentando la conversación. Hacé preguntas en tus textos, usá CTAs claros y asegurate de que tu [Slug de URL](/seo/generador-slugs) en la bio sea fácil de recordar."
    },
    {
      q: "¿Por qué baja mi engagement si subo de seguidores?",
      a: "Es un fenómeno común. A medida que la audiencia crece, se vuelve más heterogénea y es difícil que todo el contenido le guste a todos. Por eso la [Segmentación de Keywords](/seo/densidad-keywords) es vital."
    },
    {
      q: "¿Cómo afecta el engagement al ROI?",
      a: "Un usuario que interactúa está más cerca de la compra. Un engagement alto suele abaratar los costos en nuestra [Calculadora de ROI](/seo/roi-marketing)."
    }
  ],
  relacionados: [
    { nombre: "Tasa de Conversión", link: "/seo/tasa-conversion" },
    { nombre: "ROI Marketing", link: "/seo/roi-marketing" },
    { nombre: "Densidad de Keywords", link: "/seo/densidad-keywords" }
  ]
},
"calculadora-alcance": {
  faqs: [
    {
      q: "¿Cuál es la diferencia entre Alcance e Impresiones?",
      a: "El alcance cuenta personas únicas. Las impresiones cuentan cuántas veces se mostró el post en total. Si 10 personas ven tu post 2 veces cada una, el alcance es 10 y las impresiones son 20."
    },
    {
      q: "¿Qué es una buena tasa de alcance orgánico?",
      a: "En Instagram y Facebook, un alcance orgánico del 10% al 25% de tus seguidores se considera muy bueno debido a las limitaciones actuales del algoritmo."
    },
    {
      q: "¿Cómo puedo aumentar mi alcance sin pagar?",
      a: "Publicando en horarios pico, usando Reels o videos cortos, y optimizando tus captions con nuestra [Calculadora de Densidad de Keywords](/seo/densidad-keywords) para aparecer en búsquedas internas."
    },
    {
      q: "¿Por qué mi alcance es menor que mi número de seguidores?",
      a: "Las redes sociales no muestran tu contenido a todos tus seguidores para priorizar el contenido más relevante. Un alto [Engagement Rate](/seo/engagement-rate) ayuda a romper esa barrera."
    },
    {
      q: "¿El alcance influye en el ROI?",
      a: "Sí. A mayor alcance, más gente entra en tu embudo de ventas, lo que mejora las probabilidades de éxito en nuestra [Calculadora de ROI](/seo/roi-marketing)."
    }
  ],
  relacionados: [
    { nombre: "Engagement Rate", link: "/seo/engagement-rate" },
    { nombre: "Densidad de Keywords", link: "/seo/densidad-keywords" },
    { nombre: "ROI Marketing", link: "/seo/roi-marketing" }
  ]
},
"frecuencia-publicitaria": {
  faqs: [
    {
      q: "¿Cómo se calcula la frecuencia publicitaria?",
      a: "Dividiendo el número total de impresiones por el alcance único (personas únicas). Si tenés 1000 impresiones y llegaste a 500 personas, tu frecuencia es 2."
    },
    {
      q: "¿Cuál es la frecuencia ideal en Facebook Ads?",
      a: "Para la mayoría de los productos, una frecuencia de entre 2 y 4 es el punto dulce para generar recuerdo sin cansar al usuario."
    },
    {
      q: "¿Qué pasa si mi frecuencia es muy alta?",
      a: "El rendimiento de tu campaña bajará. El [CTR](/seo/calculadora-ctr) disminuirá y el costo por mil impresiones ([CPM](/seo/calculadora-cpm)) o el costo por clic ([CPC](/seo/calculadora-cpc)) tenderá a subir."
    },
    {
      q: "¿Cómo bajo la frecuencia de mis anuncios?",
      a: "Podés ampliar tu segmentación para llegar a gente nueva o pausar los anuncios por unos días para dejar descansar a tu audiencia actual."
    },
    {
      q: "¿Es lo mismo frecuencia que impresiones?",
      a: "No. Las impresiones son el total de veces que se vio el anuncio. La frecuencia es el promedio de esas vistas por cada persona individual."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Alcance", link: "/seo/calculadora-alcance" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Costo por Mil (CPM)", link: "/seo/calculadora-cpm" }
  ]
},
"calculadora-cpl": {
  faqs: [
    {
      q: "¿Cómo se calcula el CPL?",
      a: "Se divide la inversión total realizada en una campaña o canal por el número de leads (contactos) obtenidos en ese mismo periodo."
    },
    {
      q: "¿Cuál es un buen CPL?",
      a: "Depende totalmente de tu industria y del valor de vida del cliente (LTV). Un CPL de $50 puede ser excelente para vender casas, pero pésimo para vender remeras."
    },
    {
      q: "¿Cómo puedo bajar mi Costo por Lead?",
      a: "Mejorando la [Tasa de Conversión](/seo/tasa-conversion) de tu formulario o aumentando el [CTR](/seo/calculadora-ctr) de tus anuncios para atraer tráfico más calificado."
    },
    {
      q: "¿Es mejor el CPL o el CPA?",
      a: "El CPL mide el interés inicial (datos), mientras que el CPA (Costo por Adquisición) mide la venta final. Ambos son necesarios para medir el [ROI](/seo/roi-marketing)."
    },
    {
      q: "¿Cómo influye el SEO en el CPL?",
      a: "El tráfico orgánico suele tener un CPL mucho más bajo a largo plazo que los anuncios pagados. Optimizá tus textos con el [Contador de Palabras](/seo/contador-palabras) para convencer mejor a tus visitas."
    }
  ],
  relacionados: [
    { nombre: "Tasa de Conversión", link: "/seo/tasa-conversion" },
    { nombre: "ROI Marketing", link: "/seo/roi-marketing" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" }
  ]
},
"calculadora-cpa": {
  faqs: [
    {
      q: "¿Cómo se diferencia el CPA del CAC?",
      a: "A menudo se usan como sinónimos, pero el CPA suele referirse al costo de una acción específica (venta), mientras que el CAC (Customer Acquisition Cost) engloba todos los costos de marketing y ventas durante un periodo largo."
    },
    {
      q: "¿Por qué es importante el CPA en campañas de retargeting?",
      a: "En retargeting el CPA suele ser más bajo porque impactas a gente que ya te conoce. Es vital medirlo para comparar su eficiencia contra el tráfico frío."
    },
    {
      q: "¿Cómo puedo reducir un CPA elevado?",
      a: "Mejorando la segmentación para no gastar en clics inútiles y optimizando la [Tasa de Conversión](/seo/tasa-conversion) de tu página de ventas."
    },
    {
      q: "¿Qué relación tiene el CPA con el ROI?",
      a: "El [ROI](/seo/roi-marketing) depende directamente del CPA. Si logras bajar el costo por adquisición manteniendo el precio de venta, tu retorno de inversión sube automáticamente."
    },
    {
      q: "¿El SEO ayuda a bajar el CPA?",
      a: "Totalmente. El tráfico SEO no tiene costo por clic directo, por lo que las ventas que vienen de buscadores diluyen el costo total de adquisición, bajando el promedio general."
    }
  ],
  relacionados: [
    { nombre: "Costo por Lead (CPL)", link: "/seo/calculadora-cpl" },
    { nombre: "Tasa de Conversión", link: "/seo/tasa-conversion" },
    { nombre: "ROI Marketing", link: "/seo/roi-marketing" }
  ]
},
"analizador-titulos": {
  faqs: [
    {
      q: "¿Cuál es la longitud ideal de un título SEO?",
      a: "Entre 50 y 60 caracteres. Superar los 60 hará que Google corte el título con puntos suspensivos en los resultados de búsqueda."
    },
    {
      q: "¿Qué son las 'Palabras de Poder'?",
      a: "Son términos que disparan una respuesta emocional o de curiosidad, como 'Infalible', 'Estrategia' o 'Completo'. Ayudan a destacar sobre la competencia."
    },
    {
      q: "¿Debo poner mi marca al final del título?",
      a: "Sí, a menos que seas una marca muy reconocida. Es mejor priorizar la palabra clave principal al inicio y dejar el nombre del sitio para el final."
    },
    {
      q: "¿Por qué los números funcionan en los títulos?",
      a: "Porque prometen una estructura clara y un tiempo de lectura estimado. '5 Trucos' suena mucho más accionable que simplemente 'Trucos'."
    },
    {
      q: "¿Cómo afecta el título a mi CTR?",
      a: "El título es lo primero que ve el usuario. Un buen título puede aumentar tu [CTR](/seo/calculadora-ctr) incluso si no estás en la primera posición absoluta."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Generador de Slugs", link: "/seo/generador-slugs" },
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" }
  ]
},
"contador-encabezados": {
  faqs: [
    {
      q: "¿Es malo tener más de un H1 por página?",
      a: "Para el SEO moderno no es un error crítico, pero se recomienda usar solo uno para clarificar a Google cuál es el tema principal y mejorar la accesibilidad."
    },
    {
      q: "¿Los encabezados deben contener palabras clave?",
      a: "Sí, los H2 y H3 son lugares estratégicos para colocar variaciones de tu keyword principal y responder a preguntas de los usuarios."
    },
    {
      q: "¿Puedo usar un H3 antes que un H2?",
      a: "No es recomendable. La jerarquía debe ser descendente para mantener el orden lógico del contenido y facilitar la lectura a los bots."
    },
    {
      q: "¿Qué longitud debe tener un encabezado?",
      a: "Deben ser concisos. Si un H2 es muy largo, usá nuestro [Analizador de Títulos](/seo/analizador-titulos) para optimizarlo."
    },
    {
      q: "¿Cómo influyen los encabezados en los fragmentos destacados (featured snippets)?",
      a: "Google suele usar los encabezados H2 y H3 para crear listas o pasos en los resultados de búsqueda, lo que puede disparar tu [CTR](/seo/calculadora-ctr)."
    }
  ],
  relacionados: [
    { nombre: "Analizador de Títulos", link: "/seo/analizador-titulos" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Generador de Slugs", link: "/seo/generador-slugs" }
  ]
},
"contador-keywords": {
  faqs: [
    {
      q: "¿Cuál es la densidad de palabras clave ideal?",
      a: "No hay una regla fija, pero la mayoría de los expertos recomiendan entre un 1% y un 2.5% para la palabra clave principal."
    },
    {
      q: "¿Qué es el Keyword Stuffing?",
      a: "Es el uso excesivo de una palabra clave con el fin de manipular el ranking en buscadores. Esto resulta en una mala experiencia de lectura y penalizaciones."
    },
    {
      q: "¿Cómo puedo reducir la densidad sin perder relevancia?",
      a: "Utilizando LSI (Latent Semantic Indexing) o palabras semánticamente relacionadas y sinónimos. Esto ayuda a Google a entender el contexto sin repetir lo mismo."
    },
    {
      q: "¿El contador analiza frases (keywords de cola larga)?",
      a: "Esta versión analiza palabras individuales. Para frases completas, es recomendable revisar la estructura de tus [Encabezados H1-H3](/seo/contador-encabezados)."
    },
    {
      q: "¿Influye la posición de la palabra clave?",
      a: "Sí, las palabras que aparecen en el primer párrafo y en el [Analizador de Títulos](/seo/analizador-titulos) tienen más peso para el algoritmo."
    }
  ],
  relacionados: [
    { nombre: "Contador de Encabezados", link: "/seo/contador-encabezados" },
    { nombre: "Analizador de Títulos", link: "/seo/analizador-titulos" },
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" }
  ]
},
"longitud-meta-description": {
  faqs: [
    {
      q: "¿Cuál es la longitud máxima de una meta description?",
      a: "Para escritorio es de unos 155-160 caracteres. Para móviles es un poco más corta, alrededor de 120 caracteres. Por eso recomendamos el rango de 120-150."
    },
    {
      q: "¿Qué pasa si mi meta descripción es muy larga?",
      a: "Google la cortará con puntos suspensivos (...). Esto puede ocultar tu llamado a la acción y reducir la tasa de clics (CTR)."
    },
    {
      q: "¿Por qué Google a veces cambia mi meta descripción?",
      a: "Si Google considera que tu descripción no describe bien el contenido o no coincide con la búsqueda del usuario, generará una automáticamente extrayendo texto de tu página."
    },
    {
      q: "¿La meta descripción ayuda a rankear mejor?",
      a: "No directamente. Google no la usa para posicionarte, pero sí influye en el CTR. Si mucha gente hace clic en tu resultado, eso envía señales positivas de relevancia a Google."
    },
    {
      q: "¿Debo usar emojis en la meta descripción?",
      a: "Podés usarlos para destacar, pero sin exagerar. Algunos emojis pueden ayudar a subir el [CTR](/seo/calculadora-ctr), pero asegurate de que encajen con el tono de tu marca."
    }
  ],
  relacionados: [
    { nombre: "Analizador de Títulos SEO", link: "/seo/analizador-titulos" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" },
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" }
  ]
},
"longitud-titulo-seo": {
  faqs: [
    {
      q: "¿Cuántos caracteres permite Google en el título?",
      a: "El límite técnico es por píxeles (600px), lo que equivale generalmente a entre 55 y 60 caracteres. Si te mantienes en ese rango, tu título se verá completo."
    },
    {
      q: "¿Es malo tener un título muy corto?",
      a: "No es penalizado, pero desaprovechas espacio para incluir variaciones de palabras clave que podrían ayudarte a rankear para más términos de búsqueda."
    },
    {
      q: "¿Debo poner el nombre de mi marca en el título?",
      a: "Sí, se recomienda ponerlo al final separado por un guion o barra vertical ( | ). Esto ayuda a construir autoridad de marca sin quitar peso a la keyword principal."
    },
    {
      q: "¿Influyen las mayúsculas en el espacio del título?",
      a: "Sí. Las letras mayúsculas ocupan más píxeles que las minúsculas. Un título todo en mayúsculas se cortará mucho antes que uno normal."
    },
    {
      q: "¿Qué pasa si Google muestra un título distinto al que configuré?",
      a: "Google puede reescribir tu título si considera que el tuyo no es relevante para la consulta del usuario o si detecta un exceso de palabras clave (keyword stuffing)."
    }
  ],
  relacionados: [
    { nombre: "Analizador de Títulos SEO", link: "/seo/analizador-titulos" },
    { nombre: "Longitud de Meta Description", link: "/seo/longitud-meta-description" },
    { nombre: "Generador de Slugs", link: "/seo/generador-slugs" }
  ]
},
"ratio-texto-html": {
  faqs: [
    {
      q: "¿Cómo afecta el ratio Texto-HTML al SEO?",
      a: "Un ratio alto ayuda a los motores de búsqueda a identificar el contenido principal más rápido. Además, suele estar correlacionado con una mejor velocidad de carga."
    },
    {
      q: "¿Qué se considera un 'buen' ratio?",
      a: "Generalmente se busca que el texto represente al menos el 15% del total del archivo HTML. Menos del 10% suele indicar código innecesario o falta de contenido."
    },
    {
      q: "¿Cómo puedo mejorar este ratio?",
      a: "Eliminando estilos CSS en línea, scripts JS innecesarios o moviéndolos a archivos externos, y por supuesto, escribiendo más contenido de valor en la página."
    },
    {
      q: "¿El código de los comentarios HTML cuenta?",
      a: "Sí, los comentarios aumentan el peso del HTML sin añadir texto visible, lo que baja el ratio. Es recomendable eliminarlos en producción."
    },
    {
      q: "¿Es este ratio un factor de ranking directo?",
      a: "No directamente, pero afecta factores que sí lo son, como la velocidad de carga (Core Web Vitals) y la densidad de palabras clave."
    }
  ],
  relacionados: [
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" },
    { nombre: "Analizador de Títulos", link: "/seo/analizador-titulos" },
    { nombre: "Contador de Encabezados", link: "/seo/contador-encabezados" }
  ]
},
"densidad-enlaces-internos": {
  faqs: [
    {
      q: "¿Cuántos enlaces internos son recomendables por post?",
      a: "No hay un número exacto, pero una buena práctica es incluir entre 2 y 5 enlaces internos por cada 1000 palabras, siempre que sean relevantes para el usuario."
    },
    {
      q: "¿Qué es una página huérfana?",
      a: "Es una página que no recibe ningún enlace interno desde otras partes de tu sitio. Esto hace que sea muy difícil para Google encontrarla y posicionarla."
    },
    {
      q: "¿Importa el texto del enlace (Anchor Text)?",
      a: "Muchísimo. El anchor text le dice a Google de qué trata la página a la que estás enlazando. Evitá usar 'leer más' y usá palabras clave descriptivas."
    },
    {
      q: "¿Es malo enlazar muchas veces a la misma página?",
      a: "Sí, es redundante. Un solo enlace bien ubicado (preferiblemente al principio del texto) suele ser suficiente para transmitir autoridad."
    },
    {
      q: "¿Cómo ayuda el interlinking al SEO?",
      a: "Mejora el tiempo de permanencia del usuario, reduce la tasa de rebote y ayuda a los rastreadores de Google a entender la jerarquía y relación entre tus contenidos."
    }
  ],
  relacionados: [
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" },
    { nombre: "Generador de Slugs", link: "/seo/generador-slugs" },
    { nombre: "Analizador de Títulos", link: "/seo/analizador-titulos" }
  ]
},
"anchor-text-ratio": {
  faqs: [
    {
      q: "¿Qué es el anchor text o texto de ancla?",
      a: "Es el texto visible y cliqueable de un hipervínculo. Para el SEO, es una señal que indica a los buscadores de qué trata la página de destino."
    },
    {
      q: "¿Por qué es peligroso usar siempre la palabra clave exacta?",
      a: "Porque parece artificial. Google Penguin penaliza a los sitios cuyos enlaces externos parecen fabricados mediante la repetición constante de la misma keyword."
    },
    {
      q: "¿Cómo diluyo un ratio de anclajes muy alto?",
      a: "Consiguiendo nuevos enlaces que usen el nombre de tu marca, la URL de tu sitio o palabras genéricas como 'haga clic aquí'."
    },
    {
      q: "¿El ratio es igual para todas las industrias?",
      a: "No, en nichos muy competitivos los ratios suelen ser un poco más altos, pero la regla de oro es observar a los competidores que ya están en el Top 3."
    },
    {
      q: "¿Qué son los anclajes de 'LSI'?",
      a: "Son variaciones semánticas de tu palabra clave. Por ejemplo, si tu keyword es 'SEO', un anclaje LSI sería 'optimización en buscadores'."
    }
  ],
  relacionados: [
    { nombre: "Densidad de Enlaces", link: "/seo/densidad-enlaces-internos" },
    { nombre: "Generador de Slugs", link: "/seo/generador-slugs" },
    { nombre: "Analizador de Títulos", link: "/seo/analizador-titulos" }
  ]
},
"tiempo-ranking-seo": {
  faqs: [
    {
      q: "¿Es posible posicionar en menos de un mes?",
      a: "Sí, para palabras clave con muy poca competencia (long tail) o noticias de tendencia (Google Discover), pero para términos competitivos el promedio es de 3 a 6 meses."
    },
    {
      q: "¿Por qué mi página no sube de posición?",
      a: "Puede deberse a falta de autoridad, contenido poco original o problemas técnicos. Revisá tu [Ratio Texto-HTML](/seo/ratio-texto-html) para descartar errores de código."
    },
    {
      q: "¿Influye la antigüedad del dominio?",
      a: "Muchísimo. Google confía más en sitios que han demostrado consistencia a lo largo de los años. Los sitios nuevos deben esforzarse más en el [Interlinking](/seo/densidad-enlaces-internos)."
    },
    {
      q: "¿Qué es la dificultad de palabra clave (KD)?",
      a: "Es una métrica que estima qué tan difícil es superar a los sitios que ya están en el Top 10. Se basa principalmente en la cantidad y calidad de backlinks de la competencia."
    },
    {
      q: "¿Cómo puedo acelerar el posicionamiento?",
      a: "Mejorando la experiencia de usuario, obteniendo backlinks de calidad y asegurando que tus [Meta Titles](/seo/longitud-titulo-seo) y [Descripciones](/seo/longitud-meta-description) maximicen el clic."
    }
  ],
  relacionados: [
    { nombre: "Analizador de Títulos", link: "/seo/analizador-titulos" },
    { nombre: "Densidad de Enlaces", link: "/seo/densidad-enlaces-internos" },
    { nombre: "Longitud de Meta Description", link: "/seo/longitud-meta-description" }
  ]
},
"analizador-repeticion": {
  faqs: [
    {
      q: "¿Qué es la diversidad léxica?",
      a: "Es la relación entre el número de palabras únicas y el total de palabras en un texto. A mayor porcentaje, más variado y profesional se percibe el contenido."
    },
    {
      q: "¿Cuántas veces puedo repetir mi palabra clave?",
      a: "Depende de la extensión. Para el SEO, lo ideal es que la palabra clave no se sienta forzada. Usá nuestro [Contador de Keywords](/seo/contador-keywords) para medir la densidad exacta."
    },
    {
      q: "¿La repetición afecta al SEO?",
      a: "Sí. El uso excesivo de los mismos términos puede considerarse sobreoptimización. Google prefiere el uso de sinónimos y conceptos relacionados (LSI)."
    },
    {
      q: "¿Cómo puedo reducir la repetición en mis artículos?",
      a: "Utilizando diccionarios de sinónimos, cambiando la estructura de las oraciones y dividiendo párrafos largos mediante [Encabezados H2 o H3](/seo/contador-encabezados)."
    },
    {
      q: "¿Este analizador cuenta preposiciones y artículos?",
      a: "No, el analizador filtra automáticamente palabras comunes (stop-words) para enfocarse en los sustantivos y verbos que realmente impactan en la calidad del texto."
    }
  ],
  relacionados: [
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" },
    { nombre: "Contador de Encabezados", link: "/seo/contador-encabezados" },
    { nombre: "Tiempo de Ranking", link: "/seo/tiempo-ranking-seo" }
  ]
},
"analizador-parrafos": {
  faqs: [
    {
      q: "¿Cuál es la longitud ideal de un párrafo para SEO?",
      a: "Para la web, se recomienda que los párrafos tengan entre 40 y 60 palabras. Esto facilita el escaneo visual y mantiene al lector interesado."
    },
    {
      q: "¿Cómo afectan los párrafos largos a mi tasa de rebote?",
      a: "Los bloques densos de texto generan fatiga visual. Si un usuario ve una pared de texto al entrar, es muy probable que abandone la página sin leer."
    },
    {
      q: "¿Es malo tener párrafos de una sola frase?",
      a: "No, en el copywriting moderno se usan para dar énfasis o crear ritmo. Sin embargo, no abuses de ellos para no fragmentar demasiado el discurso."
    },
    {
      q: "¿Por qué es importante el 'espacio en blanco'?",
      a: "El espacio en blanco da un respiro visual al lector y ayuda a separar ideas, haciendo que el contenido parezca menos abrumador y más organizado."
    },
    {
      q: "¿Cómo puedo mejorar un párrafo muy largo?",
      a: "Dividiéndolo en dos ideas separadas, convirtiendo listas en bullet points o introduciendo un [Encabezado H3](/seo/contador-encabezados) intermedio."
    }
  ],
  relacionados: [
    { nombre: "Contador de Encabezados", link: "/seo/contador-encabezados" },
    { nombre: "Analizador de Repetición", link: "/seo/analizador-repeticion" },
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" }
  ]
},
"frecuencia-palabras": {
  faqs: [
    {
      q: "¿Para qué sirve medir la frecuencia de palabras?",
      a: "Sirve para verificar que las palabras más repetidas coincidan con el tema principal de tu artículo, asegurando coherencia semántica para usuarios y buscadores."
    },
    {
      q: "¿Qué diferencia hay con la densidad de palabras clave?",
      a: "La frecuencia es el conteo absoluto (cuántas veces), mientras que la densidad es el porcentaje respecto al total del texto."
    },
    {
      q: "¿Es malo que las preposiciones sean las más frecuentes?",
      a: "No, es lo normal en el lenguaje natural. Lo importante es que, después de los conectores, tus palabras clave ocupen los siguientes lugares en la lista."
    },
    {
      q: "¿Cómo ayuda esto a evitar el Keyword Stuffing?",
      a: "Al ver la lista completa, podés detectar si una palabra clave específica aparece demasiadas veces y decidir si es mejor usar el [Analizador de Repetición](/seo/analizador-repeticion)."
    },
    {
      q: "¿Puedo usar esto para analizar a mi competencia?",
      a: "Totalmente. Pegar el contenido de una página que ya rankea bien te permite entender qué palabras secundarias (LSI) están usando para dar contexto."
    }
  ],
  relacionados: [
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" },
    { nombre: "Analizador de Repetición", link: "/seo/analizador-repeticion" },
    { nombre: "Analizador de Párrafos", link: "/seo/analizador-parrafos" }
  ]
},
"contador-frases": {
  faqs: [
    {
      q: "¿Cuántas palabras debe tener una frase ideal para la web?",
      a: "Lo recomendable es mantener la mayoría de las frases por debajo de las 20-25 palabras. Esto asegura que la idea sea fácil de procesar de un solo vistazo."
    },
    {
      q: "¿Por qué Google prefiere frases cortas?",
      a: "Las frases cortas reducen la ambigüedad semántica, lo que facilita que los algoritmos de IA y NLP de Google entiendan la intención de búsqueda de tu contenido."
    },
    {
      q: "¿Es malo usar muchas frases largas?",
      a: "No es una penalización directa, pero aumenta el esfuerzo cognitivo del lector, lo que suele traducirse en un menor tiempo de permanencia y mayor tasa de rebote."
    },
    {
      q: "¿Cómo puedo identificar frases difíciles?",
      a: "Nuestro contador marca como 'largas' aquellas con más de 25 palabras. Intentá dividirlas usando puntos seguidos o comas estratégicas."
    },
    {
      q: "¿Qué es el ritmo en la redacción SEO?",
      a: "Es la alternancia entre frases cortas (impacto) y largas (explicación). Un texto con buen ritmo evita la monotonía y mantiene al usuario leyendo hasta el final."
    }
  ],
  relacionados: [
    { nombre: "Analizador de Párrafos", link: "/seo/analizador-parrafos" },
    { nombre: "Contador de Keywords", link: "/seo/contador-keywords" },
    { nombre: "Frecuencia de Palabras", link: "/seo/frecuencia-palabras" }
  ]
},
"contador-hashtags": {
  faqs: [
    {
      q: "¿Cuántos hashtags es recomendable usar en Instagram?",
      a: "Aunque Instagram permite hasta 30, las recomendaciones actuales sugieren entre 3 y 5 hashtags muy específicos para mejorar el alcance a través del buscador de la plataforma."
    },
    {
      q: "¿Es mejor poner los hashtags en el post o en el primer comentario?",
      a: "Instagram ha confirmado que para el SEO de búsqueda es mejor incluirlos directamente en el cuerpo del mensaje (caption)."
    },
    {
      q: "¿Qué es el shadowban por hashtags?",
      a: "Ocurre cuando usas hashtags prohibidos o cuando repites exactamente el mismo bloque de etiquetas en todos tus posts, haciendo que el algoritmo oculte tu contenido."
    },
    {
      q: "¿Debo usar hashtags en LinkedIn?",
      a: "Sí, pero LinkedIn favorece la profesionalidad. Usar más de 3 hashtags suele reducir el alcance del post. Elegí uno genérico y dos específicos."
    },
    {
      q: "¿Cómo elijo los mejores hashtags?",
      a: "Combiná hashtags de comunidad (medianos) con hashtags de nicho (pequeños). Evitá los masivos como #follow, ya que tu contenido desaparecerá en segundos."
    }
  ],
  relacionados: [
    { nombre: "Analizador de Repetición", link: "/seo/analizador-repeticion" },
    { nombre: "Contador de Palabras SEO", link: "/seo/contador-palabras" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" }
  ]
},
"calculadora-raiz-cuadrada": {
  faqs: [
    {
      q: "¿Cómo se llama el símbolo de la raíz cuadrada?",
      a: "Se llama 'radical'. El número dentro del símbolo es el 'radicando' y el resultado es la 'raíz'."
    },
    {
      q: "¿Qué pasa si el número no es un cuadrado perfecto?",
      a: "El resultado será un número irracional con infinitos decimales. Nuestra calculadora te muestra los primeros 4 para facilitar el trabajo."
    },
    {
      q: "¿La raíz cuadrada siempre es positiva?",
      a: "Matemáticamente, un número tiene dos raíces (una positiva y una negativa, ej: 4 y -4 para 16). Sin embargo, en esta calculadora mostramos la raíz principal (positiva)."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de IVA", link: "/finanzas/calculadora-iva" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Ratio Texto-HTML", link: "/seo/ratio-texto-html" }
  ]
},
"calculadora-raiz-cubica": {
  faqs: [
    {
      q: "¿Cómo se diferencia de la raíz cuadrada?",
      a: "La raíz cuadrada busca un número que multiplicado por sí mismo una vez ($x^2$) de el resultado. La cúbica busca uno que se multiplique dos veces por sí mismo ($x^3$)."
    },
    {
      q: "¿Por qué se pueden calcular raíces cúbicas de números negativos?",
      a: "Porque multiplicar tres números negativos da como resultado un negativo ($ - \times - \times - = - $). Por eso, $\sqrt[3]{-27}$ es $-3$."
    },
    {
      q: "¿Qué es un cubo perfecto?",
      a: "Es un número entero que es el resultado de elevar otro entero al cubo. Ejemplos comunes son 1, 8, 27, 64, 125 y 216."
    }
  ],
  relacionados: [
    { nombre: "Raíz Cuadrada", link: "/matematica/calculadora-raiz-cuadrada" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Ratio Texto-HTML", link: "/seo/ratio-texto-html" }
  ]
},
"calculadora-potencia": {
  faqs: [
    {
      q: "¿Qué pasa si el exponente es negativo?",
      a: "Un exponente negativo indica que el número debe ser invertido. Por ejemplo, $2^{-3}$ es igual a $1 / (2^3)$, lo que resulta en $1/8$ o $0.125$."
    },
    {
      q: "¿Por qué cualquier número elevado a cero da uno?",
      a: "Es una convención matemática derivada de las leyes de los exponentes (por ejemplo, $a^n / a^n = a^{n-n} = a^0$, y como cualquier número dividido por sí mismo es 1, $a^0 = 1$)."
    },
    {
      q: "¿Se pueden usar decimales como exponente?",
      a: "Sí, elevar un número a un exponente decimal (como 0.5) es equivalente a realizar una raíz. Por ejemplo, $x^{0.5}$ es lo mismo que $\sqrt{x}$."
    }
  ],
  relacionados: [
    { nombre: "Raíz Cuadrada", link: "/matematica/calculadora-raiz-cuadrada" },
    { nombre: "Raíz Cúbica", link: "/matematica/calculadora-raiz-cubica" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
  ]
},
"porcentaje-inverso": {
  faqs: [
    {
      q: "¿Por qué no puedo simplemente restar el porcentaje?",
      a: "Porque el porcentaje de aumento se aplicó sobre el valor original, que es menor al valor final. Restar el mismo porcentaje al valor final daría un resultado erróneo."
    },
    {
      q: "¿Para qué sirve esta calculadora en finanzas?",
      a: "Es ideal para calcular el precio base de un producto si ya conoces el precio con IVA o para saber cuánto valía una acción antes de una subida porcentual."
    },
    {
      q: "¿Qué pasa si el descuento es del 100%?",
      a: "Matemáticamente, si el valor final es mayor a 0 y el descuento fue del 100%, el cálculo es imposible porque el valor original tendería al infinito."
    }
  ],
  relacionados: [
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Raíz Cuadrada", link: "/matematica/calculadora-raiz-cuadrada" },
    { nombre: "Calculadora de Potencia", link: "/matematica/calculadora-potencia" }
  ]
},
"incremento-porcentual": {
  faqs: [
    {
      q: "¿Cómo se calcula la diferencia porcentual entre dos números?",
      a: "Restas el valor antiguo del valor nuevo, divides el resultado por el valor antiguo y multiplicas por 100."
    },
    {
      q: "¿Qué significa un incremento del 100%?",
      a: "Significa que el valor final es exactamente el doble del valor inicial."
    },
    {
      q: "¿La calculadora sirve para medir la inflación?",
      a: "Sí, puedes poner el precio antiguo en el Valor 1 y el precio nuevo en el Valor 2 para saber exactamente cuánto ha subido el costo de vida en porcentaje."
    }
  ],
  relacionados: [
    { nombre: "Porcentaje Inverso", link: "/matematica/porcentaje-inverso" },
    { nombre: "Calculadora de Potencia", link: "/matematica/calculadora-potencia" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
  ]
},
"decremento-porcentual": {
  faqs: [
    {
      q: "¿En qué se diferencia del incremento porcentual?",
      a: "La base del cálculo es la misma, pero el decremento se enfoca en medir cuánto valor se ha perdido desde el punto inicial."
    },
    {
      q: "¿Por qué es importante para el SEO?",
      a: "Permite cuantificar de forma precisa el impacto de las actualizaciones de Google o la pérdida de relevancia de una palabra clave específica."
    },
    {
      q: "¿Qué significa una disminución del 50%?",
      a: "Significa que el valor final es exactamente la mitad del valor original inicial."
    }
  ],
  relacionados: [
    { nombre: "Incremento Porcentual", link: "/matematica/incremento-porcentual" },
    { nombre: "Porcentaje Inverso", link: "/matematica/porcentaje-inverso" },
    { nombre: "Calculadora de CTR", link: "/seo/calculadora-ctr" }
  ]
},
"calculadora-proporcion": {
  faqs: [
    {
      q: "¿Cómo se resuelve una proporción?",
      a: "Se utiliza la regla del producto cruzado: multiplicas los dos números que están en diagonal y divides el resultado por el tercer número restante."
    },
    {
      q: "¿Para qué sirve en diseño web?",
      a: "Es vital para redimensionar elementos (como videos o fotos) sin que se deformen, asegurando que la relación entre ancho y alto se mantenga constante."
    },
    {
      q: "¿Cuál es la diferencia entre razón y proporción?",
      a: "Una razón es el cociente entre dos números (comparación), mientras que la proporción es la igualdad entre dos razones."
    }
  ],
  relacionados: [
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" },
    { nombre: "Incremento Porcentual", link: "/matematica/incremento-porcentual" },
    { nombre: "Calculadora de Potencia", link: "/matematica/calculadora-potencia" }
  ]
},
"media-ponderada": {
  faqs: [
    {
      q: "¿Cómo se calcula la media ponderada paso a paso?",
      a: "Multiplicas cada valor por su peso, sumas todos esos resultados y finalmente divides el total por la suma de todos los pesos."
    },
    {
      q: "¿Qué pasa si los pesos no suman 100?",
      a: "No importa. La fórmula divide por la suma total de los pesos, por lo que el resultado siempre será proporcional, aunque los pesos no lleguen a 100 o lo superen."
    },
    {
      q: "¿Cuándo usar media ponderada en lugar de promedio simple?",
      a: "Usala siempre que un dato sea más importante que otro. Por ejemplo, en un curso donde el examen final influye más en la nota que los trabajos prácticos."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Proporción", link: "/matematica/calculadora-proporcion" },
    { nombre: "Incremento Porcentual", link: "/matematica/incremento-porcentual" },
    { nombre: "Calculadora de Potencia", link: "/matematica/calculadora-potencia" }
  ]
},
"calculadora-percentil": {
  faqs: [
    {
      q: "¿Qué significa estar en el percentil 75?",
      a: "Significa que tu valor es igual o superior al 75% de los datos del grupo analizado."
    },
    {
      q: "¿Cómo se relaciona el percentil con la mediana?",
      a: "El percentil 50 es exactamente igual a la mediana, ya que divide el conjunto de datos ordenado en dos partes iguales."
    },
    {
      q: "¿Por qué se usa el P75 en Google Search Console?",
      a: "Google considera el percentil 75 para asegurar que la experiencia de usuario sea buena para la gran mayoría de las visitas, no solo para el promedio."
    }
  ],
  relacionados: [
    { nombre: "Media Ponderada", link: "/matematica/media-ponderada" },
    { nombre: "Incremento Porcentual", link: "/matematica/incremento-porcentual" },
    { nombre: "Calculadora de Proporción", link: "/matematica/calculadora-proporcion" }
  ]
},
"desviacion-media": {
  faqs: [
    {
      q: "¿Para qué sirve la desviación media?",
      a: "Sirve para conocer qué tan dispersos están los valores de un conjunto. Una desviación media baja indica que los datos están muy cerca del promedio (son uniformes)."
    },
    {
      q: "¿Es lo mismo que la desviación estándar?",
      a: "No. La desviación media usa valores absolutos $|x - \bar{x}|$, mientras que la estándar usa cuadrados $(x - \bar{x})^2$. La estándar es más común en ciencia, pero la media es más intuitiva."
    },
    {
      q: "¿Cuándo es mejor usar la desviación media?",
      a: "Cuando quieres una medida de dispersión que no penalice tanto los valores extremos o cuando buscas explicar la variabilidad a personas no expertas en estadística."
    }
  ],
  relacionados: [
    { nombre: "Media Ponderada", link: "/matematica/media-ponderada" },
    { nombre: "Calculadora de Percentil", link: "/matematica/calculadora-percentil" },
    { nombre: "Proporciones", link: "/matematica/calculadora-proporcion" }
  ]
},
"rango-estadistico": {
  faqs: [
    {
      q: "¿Para qué sirve el rango en un análisis de datos?",
      a: "Sirve para obtener una noción rápida de la extensión de los datos. Si el rango es pequeño, los datos están muy concentrados; si es grande, están muy dispersos."
    },
    {
      q: "¿El rango puede ser negativo?",
      a: "No. Como es el resultado de restar el valor menor al mayor, el rango siempre es un valor positivo o cero (si todos los datos son iguales)."
    },
    {
      q: "¿Por qué se dice que el rango es limitado?",
      a: "Porque solo tiene en cuenta los dos valores extremos e ignora lo que sucede con el resto de los datos en el medio. Por eso suele acompañarse de la [Desviación Media](/matematica/desviacion-media)."
    }
  ],
  relacionados: [
    { nombre: "Desviación Media", link: "/matematica/desviacion-media" },
    { nombre: "Calculadora de Percentil", link: "/matematica/calculadora-percentil" },
    { nombre: "Media Ponderada", link: "/matematica/media-ponderada" }
  ]
},
"calculadora-probabilidad": {
  faqs: [
    {
      q: "¿Qué es la probabilidad simple?",
      a: "Es la medida de qué tan posible es que ocurra un evento determinado. Se expresa como un número entre 0 (imposible) y 1 (seguro), o como un porcentaje del 0% al 100%."
    },
    {
      q: "¿Qué sucede si la probabilidad es mayor al 100%?",
      a: "Matemáticamente es imposible. La probabilidad máxima es 1 (100%), lo que indica que el evento ocurrirá con total seguridad."
    },
    {
      q: "¿Para qué sirve la Regla de Laplace?",
      a: "Es la fórmula básica para calcular probabilidades en experimentos donde todos los resultados tienen la misma chance de ocurrir, como lanzar una moneda o un dado."
    },
    {
      q: "¿Cómo se interpreta un resultado de 0.5?",
      a: "Un valor decimal de 0.5 equivale al 50%. Significa que el evento tiene tantas posibilidades de ocurrir como de no ocurrir (como el 'cara o seca')."
    },
    {
      q: "¿Puedo usar esta calculadora para juegos de rol o videojuegos?",
      a: "¡Sí! Es perfecta para calcular las chances de éxito de una acción si conoces el número de resultados positivos frente al total de posibilidades del dado o sistema."
    }
  ],
  relacionados: [
    { nombre: "Media Ponderada", link: "/matematica/media-ponderada" },
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" },
    { nombre: "Incremento Porcentual", link: "/matematica/incremento-porcentual" }
  ]
},
"calculadora-combinatoria": {
  faqs: [
    {
      q: "¿Cuándo usar una combinación?",
      a: "Usala cuando el orden de los elementos no afecte el resultado final, como elegir a los miembros de un comité o los números de la lotería."
    },
    {
      q: "¿Qué es una variación?",
      a: "Es similar a la combinación pero donde el orden importa. Por ejemplo, en una carrera de 10 personas, importa quién llega primero, segundo y tercero."
    },
    {
      q: "¿Qué significa el símbolo '!' en la fórmula?",
      a: "Representa el factorial de un número, que es la multiplicación de todos los números enteros positivos desde 1 hasta ese número."
    },
    {
      q: "¿Esta calculadora incluye repetición?",
      a: "Esta versión calcula combinatoria simple (sin repetición), donde cada elemento del conjunto total puede usarse una sola vez."
    },
    {
      q: "¿Por qué el resultado de las variaciones es mayor?",
      a: "Porque al importar el orden, cada grupo de elementos genera múltiples arreglos distintos, mientras que en la combinación cuentan como uno solo."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Probabilidad", link: "/matematica/calculadora-probabilidad" },
    { nombre: "Media Ponderada", link: "/matematica/media-ponderada" },
    { nombre: "Rango Estadístico", link: "/matematica/rango-estadistico" }
  ]
},
"calculadora-divisores": {
  faqs: [
    {
      q: "¿Cómo saber cuáles son los divisores de un número?",
      a: "Un número es divisor de otro si al realizar la división el residuo es cero. Se puede probar dividiendo el número por todos los enteros menores a su raíz cuadrada."
    },
    {
      q: "¿Todos los números tienen divisores?",
      a: "Sí, todos los números enteros mayores que 1 tienen al menos dos divisores: el 1 y ellos mismos."
    },
    {
      q: "¿Qué es un divisor común?",
      a: "Es un número que divide exactamente a dos o más números al mismo tiempo. El mayor de ellos se conoce como Máximo Común Divisor (MCD)."
    },
    {
      q: "¿El cero tiene divisores?",
      a: "No, la división por cero no está definida en matemáticas, por lo que el cero no puede ser divisor de ningún número."
    },
    {
      q: "¿Cuál es la diferencia entre divisor y múltiplo?",
      a: "Los divisores son los números que 'caben' exactamente en otro, mientras que los múltiplos son los resultados de multiplicar ese número por otros enteros."
    }
  ],
  relacionados: [
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" },
    { nombre: "Proporciones", link: "/matematica/calculadora-proporcion" },
    { nombre: "Combinatoria", link: "/matematica/calculadora-combinatoria" }
  ]
},
"calculadora-numeros-primos": {
  faqs: [
    {
      q: "¿Cómo saber si un número es primo?",
      a: "Un número es primo si solo puede dividirse exactamente por 1 y por sí mismo. Si encuentras cualquier otro divisor entre 2 y su raíz cuadrada, es un número compuesto."
    },
    {
      q: "¿Por qué el 2 es un número primo especial?",
      a: "Es el único número primo que es par. Todos los demás números primos son impares, ya que cualquier otro par sería divisible por 2."
    },
    {
      q: "¿Cuántos números primos existen?",
      a: "Existen infinitos números primos. Fue demostrado por Euclides hace más de 2000 años."
    },
    {
      q: "¿Para qué sirven los números primos en la vida real?",
      a: "Son la base de la criptografía moderna. La seguridad de tus compras online y contraseñas depende de la dificultad de factorizar números primos muy grandes."
    },
    {
      q: "¿Cuál es el número primo más grande?",
      a: "No existe el más grande, pero los científicos descubren constantemente nuevos 'Primos de Mersenne', que tienen millones de dígitos."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Divisores", link: "/matematica/calculadora-divisores" },
    { nombre: "Combinatoria", link: "/matematica/calculadora-combinatoria" },
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" }
  ]
},
"fraccion-a-decimal": {
  faqs: [
    {
      q: "¿Cómo se convierte una fracción a decimal?",
      a: "Debes realizar la división del numerador (el número de arriba) entre el denominador (el número de abajo)."
    },
    {
      q: "¿Qué es una fracción propia e impropia?",
      a: "En una propia, el numerador es menor al denominador (resultado < 1). En la impropia, el numerador es mayor (resultado > 1)."
    },
    {
      q: "¿Por qué algunas fracciones dan decimales infinitos?",
      a: "Ocurre cuando el denominador tiene factores primos distintos de 2 o 5. Esto genera decimales periódicos que se repiten para siempre."
    },
    {
      q: "¿Cómo convertir un decimal a porcentaje?",
      a: "Una vez que tengas el decimal, solo debes multiplicarlo por 100. Por ejemplo, 0.25 es el 25%."
    },
    {
      q: "¿Para qué sirve esta conversión en la vida real?",
      a: "Es útil para comparar precios, calcular descuentos, entender probabilidades o seguir recetas que usan medidas en fracciones."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Proporción", link: "/matematica/calculadora-proporcion" },
    { nombre: "Media Ponderada", link: "/matematica/media-ponderada" },
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" }
  ]
},
"decimal-a-fraccion": {
  faqs: [
    {
      q: "¿Cómo se simplifica la fracción resultante?",
      a: "Se divide tanto el numerador como el denominador por su Máximo Común Divisor (MCD) hasta que no tengan más divisores comunes."
    },
    {
      q: "¿Qué es una fracción irreducible?",
      a: "Es aquella fracción que ya no se puede simplificar más, porque el numerador y el denominador son primos entre sí."
    },
    {
      q: "¿Puede un decimal periódico convertirse en fracción?",
      a: "Sí, aunque el método es distinto (usando nueves en el denominador). Esta versión actual se enfoca en decimales exactos."
    },
    {
      q: "¿Para qué sirve pasar decimales a fracciones?",
      a: "Las fracciones suelen ser más precisas en cálculos matemáticos largos, ya que evitan el error de redondeo que tienen los decimales."
    },
    {
      q: "¿El resultado cambia si el decimal es negativo?",
      a: "No, el procedimiento es el mismo. Simplemente se mantiene el signo negativo en el numerador de la fracción final."
    }
  ],
  relacionados: [
    { nombre: "Fracción a Decimal", link: "/matematica/fraccion-a-decimal" },
    { nombre: "Calculadora de Divisores", link: "/matematica/calculadora-divisores" },
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" }
  ]
},
"sistemas-ecuaciones": {
  faqs: [
    {
      q: "¿Qué es un sistema de ecuaciones 2x2?",
      a: "Es un conjunto de dos ecuaciones que comparten dos incógnitas (generalmente x e y). Resolverlo significa encontrar los valores que satisfacen ambas igualdades al mismo tiempo."
    },
    {
      q: "¿Qué métodos existen para resolverlos?",
      a: "Los más comunes son Sustitución, Igualación, Reducción y el método de Determinantes (Cramer)."
    },
    {
      q: "¿Qué significa que el sistema sea incompatible?",
      a: "Significa que las ecuaciones representan rectas paralelas que nunca se cruzan, por lo que no existe ningún valor de x e y que sirva para ambas."
    },
    {
      q: "¿Cómo se aplica esto en la vida real?",
      a: "Se usa para calcular puntos de equilibrio en economía, mezclas de productos químicos o para programar la lógica de movimiento de objetos en un plano cartesiano."
    },
    {
      q: "¿Por qué el determinante no puede ser cero?",
      a: "Si el determinante es cero, estaríamos dividiendo por cero en la fórmula de Cramer, lo cual es matemáticamente imposible e indica que las rectas no tienen un único punto de cruce."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Proporción", link: "/matematica/calculadora-proporcion" },
    { nombre: "Regla de Tres", link: "/matematica/regla-de-tres" },
    { nombre: "Decimal a Fracción", link: "/matematica/decimal-a-fraccion" }
  ]
},
"regla-del-72": {
  faqs: [
    {
      q: "¿Qué tan precisa es la Regla del 72?",
      a: "Es una estimación muy cercana a la realidad para tasas de interés comunes. Por ejemplo, al 8%, la regla dice 9 años (72/8), mientras que el cálculo exacto es 9.006 años."
    },
    {
      q: "¿Puedo usarla para calcular el impacto de la inflación?",
      a: "¡Sí! Si la inflación es del 6% anual, podés usar 72/6 para saber que el poder de compra de tu dinero se reducirá a la mitad en aproximadamente 12 años."
    },
    {
      q: "¿Sirve para intereses que no sean anuales?",
      a: "Sí, siempre que la tasa y el tiempo estén en la misma unidad. Si usás una tasa mensual, el resultado será en meses."
    },
    {
      q: "¿Existen reglas similares como la del 114 o 144?",
      a: "Sí. La Regla del 114 estima cuánto tiempo tarda el dinero en triplicarse, y la del 144 para cuadruplicarse."
    },
    {
      q: "¿Por qué un inversor debería conocer esta regla?",
      a: "Porque te permite evaluar rápidamente si una inversión vale la pena sin necesidad de usar calculadoras financieras sofisticadas."
    }
  ],
  relacionados: [
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Incremento Porcentual", link: "/matematica/incremento-porcentual" },
    { nombre: "TNA y TEA", link: "/finanzas/tasas-tna-tea" }
  ]
},
"inflacion-acumulada": {
  faqs: [
    {
      q: "¿Por qué no se pueden sumar simplemente los porcentajes?",
      a: "Porque la inflación se aplica sobre el precio del mes anterior. Si sumas 10% + 10%, daría 20%, pero el cálculo real es 1.10 * 1.10 = 1.21, o sea, un 21% acumulado."
    },
    {
      q: "¿Cómo se calcula la inflación interanual?",
      a: "Es la inflación acumulada de 12 meses consecutivos. Se toma el índice de precios del mes actual y se compara con el mismo mes del año anterior."
    },
    {
      q: "¿Qué es el IPC?",
      a: "Es el Índice de Precios al Consumidor, un indicador que mide la variación promedio de los precios de una canasta de bienes y servicios representativa del consumo de los hogares."
    },
    {
      q: "¿La inflación acumulada afecta a los ahorros?",
      a: "Sí, reduce el valor real del dinero ahorrado. Si la inflación acumulada es del 50%, lo que antes comprabas con $100 ahora te costará $150."
    },
    {
      q: "¿Qué significa deflación acumulada?",
      a: "Es cuando el resultado del cálculo es negativo, lo que indica que en promedio los precios han bajado durante el periodo analizado."
    }
  ],
  relacionados: [
    { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Regla del 72", link: "/finanzas/regla-del-72" }
  ]
},
"perdida-poder-adquisitivo": {
  faqs: [
    {
      q: "¿Es lo mismo la inflación que la pérdida de poder adquisitivo?",
      a: "No. La inflación mide cuánto suben los precios, mientras que la pérdida de poder adquisitivo mide cuánto disminuye lo que podés comprar con tus ingresos."
    },
    {
      q: "¿Si la inflación es del 100%, mi dinero vale cero?",
      a: "No. Si la inflación es del 100%, los precios se duplicaron, por lo que tu dinero ahora vale la mitad (perdiste el 50% de tu poder de compra)."
    },
    {
      q: "¿Cómo protejo mi poder adquisitivo?",
      a: "Invirtiendo en activos que ajusten por inflación (como plazos fijos UVA) o comprando bienes/monedas que mantengan su valor real frente a la moneda local."
    },
    {
      q: "¿Por qué los salarios suelen perder contra la inflación?",
      a: "Porque los precios suelen ajustarse más rápido que los contratos laborales. Esto genera un 'rezago' donde el trabajador compra menos hasta la siguiente paritaria."
    },
    {
      q: "¿Qué sucede en una deflación?",
      a: "En una deflación (inflación negativa), tu poder adquisitivo aumenta: con la misma cantidad de dinero podés comprar más bienes porque los precios bajaron."
    }
  ],
  relacionados: [
    { nombre: "Inflación Acumulada", link: "/finanzas/inflacion-acumulada" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Regla del 72", link: "/finanzas/regla-del-72" }
  ]
},
"cuota-maxima": {
  faqs: [
    {
      q: "¿Por qué se recomienda no superar el 30% de los ingresos?",
      a: "Porque este porcentaje permite cubrir el resto de tus necesidades básicas (vivienda, comida, transporte) y mantener un pequeño margen para ahorros o emergencias."
    },
    {
      q: "¿La cuota máxima incluye intereses?",
      a: "Sí. La cuota que pagas al banco ya incluye tanto la devolución del capital como los intereses y seguros asociados al préstamo."
    },
    {
      q: "¿Qué ingresos debo considerar para el cálculo?",
      a: "Debes considerar tus ingresos netos (en mano), es decir, lo que efectivamente recibes después de impuestos y descuentos de ley."
    },
    {
      q: "¿Puedo subir al 40% si no tengo hijos o gastos fijos?",
      a: "Es posible, pero aumenta el riesgo. Un imprevisto médico o un aumento en los servicios podría dejarte sin liquidez rápidamente."
    },
    {
      q: "¿Cómo afecta la inflación a mi cuota máxima?",
      a: "Si tu cuota es fija, la inflación puede 'licuarla' (hacerla sentir más barata). Si la cuota ajusta por inflación (como los créditos UVA), tu capacidad de pago dependerá de que tu sueldo suba al mismo ritmo."
    }
  ],
  relacionados: [
    { nombre: "TNA y TEA", link: "/finanzas/tasas-tna-tea" },
    { nombre: "Pérdida de Poder Adquisitivo", link: "/finanzas/perdida-poder-adquisitivo" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
  ]
},
"amortizacion-prestamo": {
  faqs: [
    {
      q: "¿Por qué al principio pago más intereses?",
      a: "En el sistema francés, el interés se calcula sobre el saldo pendiente. Como al inicio del préstamo el saldo es máximo, los intereses también lo son."
    },
    {
      q: "¿Qué sucede si hago una cancelación anticipada?",
      a: "Si cancelas capital antes de tiempo, el saldo pendiente disminuye drásticamente. Esto reduce los intereses de los meses siguientes y puede acortar el plazo o bajar la cuota."
    },
    {
      q: "¿La cuota de este simulador incluye seguros e IVA?",
      a: "No. Este simulador calcula la cuota pura de capital e intereses. En un banco real, deberías sumar el IVA sobre intereses y seguros de vida o incendio."
    },
    {
      q: "¿Cuál es la diferencia con el Sistema Alemán?",
      a: "En el alemán, lo que es fijo es la amortización de capital. Las cuotas empiezan siendo muy altas y van bajando con el tiempo."
    },
    {
      q: "¿Qué es el CFT?",
      a: "El Costo Financiero Total (CFT) es la tasa real que vas a pagar, incluyendo intereses, comisiones y seguros. Siempre es más alto que la TNA."
    }
  ],
  relacionados: [
    { nombre: "TNA y TEA", link: "/finanzas/tasas-tna-tea" },
    { nombre: "Cuota Máxima", link: "/finanzas/cuota-maxima" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
  ]
},
"rendimiento-inversion": {
  faqs: [
    {
      q: "¿Qué es un buen ROI?",
      a: "Depende del sector y del riesgo. En la bolsa, un ROI anual promedio del 7% al 10% se considera sólido. En negocios de alto riesgo, se buscan retornos mucho mayores."
    },
    {
      q: "¿El ROI incluye impuestos?",
      a: "El ROI bruto no los incluye, pero lo ideal es calcular el ROI neto restando impuestos y comisiones para conocer la ganancia real que queda en tu bolsillo."
    },
    {
      q: "¿Cómo se diferencia el ROI del interés compuesto?",
      a: "El ROI es una foto de una operación específica (cuánto gané hoy sobre lo que puse ayer). El interés compuesto es el proceso de reinvertir esas ganancias para generar más valor en el futuro."
    },
    {
      q: "¿Puede el ROI ser mayor al 100%?",
      a: "Sí. Si inviertes $100 y recibes $300, tu ganancia es de $200, lo que representa un ROI del 200%. Significa que duplicaste tu inversión inicial de ganancia."
    },
    {
      q: "¿Qué limitaciones tiene el ROI simple?",
      a: "Su mayor debilidad es que ignora el factor tiempo y la inflación. No es lo mismo un 50% en un año que en diez años, aunque el ROI sea idéntico."
    }
  ],
  relacionados: [
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Regla del 72", link: "/finanzas/regla-del-72" },
    { nombre: "Pérdida de Poder Adquisitivo", link: "/finanzas/perdida-poder-adquisitivo" }
  ]
},
"calculadora-dividendos": {
  faqs: [
    {
      q: "¿Qué es el Dividend Yield?",
      a: "Es el porcentaje que representa el dividendo anual respecto al precio actual de la acción. Te dice cuánto estás 'ganando' por cada dólar invertido."
    },
    {
      q: "¿Con qué frecuencia se pagan los dividendos?",
      a: "Depende de la empresa. La mayoría en EE.UU. paga trimestralmente, pero hay empresas que pagan mensual, semestral o anualmente."
    },
    {
      q: "¿Qué es el 'Ex-Dividend Date'?",
      a: "Es la fecha límite para ser dueño de la acción si quieres cobrar el próximo dividendo. Debes comprarla al menos un día antes de esta fecha."
    },
    {
      q: "¿Los dividendos son seguros?",
      a: "No. Una empresa puede recortar o suspender sus dividendos si sus ganancias caen o si decide reinvertir ese capital en el negocio."
    },
    {
      q: "¿Qué impuestos pagan los dividendos?",
      a: "En muchos países tienen retenciones automáticas (como el 30% en EE.UU. para extranjeros). Es importante calcular el dividendo neto para saber cuánto llegará realmente a tu cuenta."
    }
  ],
  relacionados: [
    { nombre: "Rendimiento ROI", link: "/finanzas/rendimiento-inversion" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Regla del 72", link: "/finanzas/regla-del-72" }
  ]
},
"ahorro-jubilacion": {
  faqs: [
    {
      q: "¿Qué es la Regla del 4%?",
      a: "Es una regla basada en el Estudio Trinity que sugiere que podés retirar el 4% de tu cartera de inversiones anualmente sin agotar el capital principal durante al menos 30 años."
    },
    {
      q: "¿Debo considerar la inflación en este cálculo?",
      a: "Sí. Para una mayor precisión, podés restar la inflación esperada a tu tasa de rendimiento. Si esperás un 10% de retorno y un 3% de inflación, usá un 7% en la calculadora."
    },
    {
      q: "¿Es mejor ahorrar en efectivo o invertir?",
      a: "Invertir es fundamental. El interés compuesto generado por las inversiones es lo que realmente permite que un fondo de retiro crezca lo suficiente para cubrir tus gastos futuros."
    },
    {
      q: "¿Qué sucede si empiezo tarde a ahorrar?",
      a: "Tendrás que destinar un porcentaje mucho mayor de tus ingresos mensuales al ahorro. No obstante, nunca es tarde para empezar a mejorar tu situación financiera futura."
    },
    {
      q: "¿El fondo objetivo debe incluir mi casa?",
      a: "Generalmente no, a menos que planees venderla para mudarte a algo más pequeño. El fondo debe estar compuesto por activos líquidos que generen renta (acciones, bonos, propiedades de alquiler)."
    }
  ],
  relacionados: [
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Regla del 72", link: "/finanzas/regla-del-72" },
    { nombre: "Amortización", link: "/finanzas/amortizacion-prestamo" }
  ]
},
"valor-futuro": {
  faqs: [
    {
      q: "¿Qué diferencia hay entre Valor Presente y Valor Futuro?",
      a: "El Valor Futuro es lo que valdrá tu dinero mañana tras invertirlo. El Valor Presente es cuánto vale hoy una suma que recibirás en el futuro."
    },
    {
      q: "¿Por qué es importante el interés compuesto en el Valor Futuro?",
      a: "Porque genera un crecimiento exponencial. Los intereses de cada periodo se suman al capital, generando nuevos intereses en el siguiente."
    },
    {
      q: "¿Cómo afecta la frecuencia de capitalización?",
      a: "Cuanto más frecuente sea (diaria vs mensual vs anual), mayor será el Valor Futuro, ya que el interés se reinvierte más rápido."
    },
    {
      q: "¿Es una garantía de ganancia?",
      a: "No. Es una proyección matemática. En inversiones reales, la tasa de retorno puede variar y existen riesgos de mercado."
    },
    {
      q: "¿Qué tasa de interés debería usar para proyectar?",
      a: "Para proyecciones conservadoras se suele usar entre el 4% y 7% anual, que es el promedio histórico de mercados bursátiles ajustado por inflación."
    }
  ],
  relacionados: [
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Rendimiento ROI", link: "/finanzas/rendimiento-inversion" },
    { nombre: "Regla del 72", link: "/finanzas/regla-del-72" }
  ]
},
"valor-presente": {
  faqs: [
    {
      q: "¿Para qué sirve calcular el Valor Presente?",
      a: "Sirve para comparar el valor de dinero recibido en diferentes momentos del tiempo. Es fundamental para evaluar inversiones, préstamos y proyectos empresariales."
    },
    {
      q: "¿Qué sucede si aumenta la tasa de descuento?",
      a: "Si la tasa de descuento sube, el Valor Presente baja. Esto ocurre porque un mayor rendimiento alternativo hace que el dinero futuro valga menos en el presente."
    },
    {
      q: "¿Es lo mismo que el Valor Actual Neto (VAN)?",
      a: "El Valor Presente es el cálculo de una única suma. El VAN es la suma de todos los Valores Presentes de los flujos de fondos de un proyecto menos la inversión inicial."
    },
    {
      q: "¿Cómo elijo la tasa de descuento?",
      a: "Suele elegirse basándose en la tasa de inflación esperada, la tasa de interés de un plazo fijo o el rendimiento promedio del mercado de acciones."
    },
    {
      q: "¿Por qué el tiempo reduce el Valor Presente?",
      a: "Debido al costo de oportunidad: cuanto más tiempo falte para recibir el dinero, más tiempo perdés de invertirlo y generar intereses hoy."
    }
  ],
  relacionados: [
    { nombre: "Valor Futuro", link: "/finanzas/valor-futuro" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Rendimiento ROI", link: "/finanzas/rendimiento-inversion" }
  ]
},
"tasa-de-retorno": {
  faqs: [
    {
      q: "¿Qué significa CAGR?",
      a: "Significa 'Compound Annual Growth Rate' o Tasa de Crecimiento Anual Compuesto. Es la tasa constante a la que habría crecido tu inversión si lo hubiera hecho al mismo ritmo cada año."
    },
    {
      q: "¿Por qué es mejor que el retorno total?",
      a: "Porque el retorno total no considera el tiempo. Ganar un 50% es bueno, pero es mucho mejor si lo hiciste en 1 año que en 10. El CAGR permite comparar ambas situaciones."
    },
    {
      q: "¿El CAGR garantiza rendimientos futuros?",
      a: "No. El CAGR describe lo que sucedió en el pasado o lo que debería suceder para alcanzar una meta. Los mercados reales fluctúan año a año."
    },
    {
      q: "¿Se puede calcular con menos de un año?",
      a: "Matemáticamente sí, pero los resultados pueden ser engañosos (extrapolados). Se recomienda usarlo para periodos de 1 año en adelante."
    },
    {
      q: "¿Qué es un buen CAGR?",
      a: "Depende del riesgo. Un CAGR del 7-10% en dólares es considerado muy bueno históricamente (promedio del S&P 500), mientras que un plazo fijo suele tener un CAGR menor."
    }
  ],
  relacionados: [
    { nombre: "Rendimiento ROI", link: "/finanzas/rendimiento-inversion" },
    { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
    { nombre: "Valor Futuro", link: "/finanzas/valor-futuro" }
  ]
},
"pulgadas-a-cm": {
  faqs: [
    {
      q: "¿Exactamente cuánto es una pulgada?",
      a: "Desde 1959, se definió internacionalmente que una pulgada (inch) equivale exactamente a 25.4 milímetros o 2.54 centímetros."
    },
    {
      q: "¿Cómo se abrevia pulgada?",
      a: "Se puede abreviar como 'in' (del inglés inch) o mediante las comillas dobles (\"), por ejemplo: 10\"."
    },
    {
      q: "¿Por qué las pantallas se miden en pulgadas?",
      a: "Es un estándar heredado de la industria estadounidense. La medida de una pantalla (TV o monitor) siempre se refiere a la longitud de la diagonal."
    },
    {
      q: "¿Cómo paso de cm a pulgadas mentalmente?",
      a: "Una regla rápida es dividir por 2.5. Si tenés 10 cm, dividís por 2.5 y te da 4 pulgadas aproximadamente."
    },
    {
      q: "¿Qué países siguen usando las pulgadas?",
      a: "Principalmente Estados Unidos, Liberia y Myanmar. Sin embargo, en industrias como la informática y la aviación, la pulgada es el estándar mundial."
    }
  ],
  relacionados: [
    { nombre: "Costo por Kilómetro", link: "/transporte/costo-kilometro" },
    { nombre: "Regla de 3 Simple", link: "/matematica/regla-de-tres" },
    { nombre: "Pérdida de Poder Adquisitivo", link: "/finanzas/perdida-poder-adquisitivo" }
  ]
},
"cm-a-pulgadas": {
  faqs: [
    {
      q: "¿Cuántas pulgadas tiene un centímetro?",
      a: "Un centímetro equivale a aproximadamente 0.3937 pulgadas."
    },
    {
      q: "¿Por qué se usa 2.54 para la conversión?",
      a: "Es el factor de conversión exacto definido por el estándar internacional para relacionar el sistema métrico con el imperial."
    },
    {
      q: "¿Cómo calculo pulgadas de una pantalla si tengo los cm?",
      a: "Debes medir la diagonal de la pantalla en centímetros y dividir ese resultado por 2.54. El número obtenido es el tamaño de la pantalla en pulgadas."
    },
    {
      q: "¿Es lo mismo 'pulgada' que 'inch'?",
      a: "Sí, 'pulgada' es la traducción al español del término inglés 'inch'."
    },
    {
      q: "¿Qué precisión tiene esta calculadora?",
      a: "Utiliza el factor exacto de 2.54 y redondea a dos decimales, lo cual es más que suficiente para la mayoría de usos domésticos y profesionales."
    }
  ],
  relacionados: [
    { nombre: "Pulgadas a Centímetros", link: "/unidades/pulgadas-a-cm" },
    { nombre: "Regla de 3 Simple", link: "/matematica/regla-de-tres" },
    { nombre: "Costo por Kilómetro", link: "/utilidades/combustible" }
  ]
},
"km-a-millas": {
  faqs: [
    {
      q: "¿Es lo mismo una milla terrestre que una náutica?",
      a: "No. La milla terrestre (usada en esta calculadora) mide 1.609 metros, mientras que la milla náutica mide exactamente 1.852 metros."
    },
    {
      q: "¿Cómo calculo millas a km rápido sin calculadora?",
      a: "Multiplicá las millas por 1.6. Por ejemplo, 10 millas son unos 16 km."
    },
    {
      q: "¿Por qué algunos países usan millas?",
      a: "Es una herencia del sistema imperial británico. Aunque el Reino Unido se ha pasado parcialmente al sistema métrico, las señales de tránsito siguen estando en millas."
    },
    {
      q: "¿A cuántos km equivale una maratón de 26.2 millas?",
      a: "Equivale a 42.195 kilómetros exactamente."
    }
  ],
  relacionados: [
    { nombre: "Costo por Kilómetro", link: "/utiles/combustible" },
    { nombre: "Pulgadas a Centímetros", link: "/unidades/pulgadas-a-cm" },
    { nombre: "Regla de 3 Simple", link: "/matematica/regla-de-tres" }
  ]
},
"millas-a-km": {
  "faqs": [
    {
      "q": "¿A cuántos kilómetros equivale exactamente una milla?",
      "a": "Una milla terrestre equivale a exactamente 1,609344 kilómetros. Para cálculos rápidos, se suele redondear a 1,61 km."
    },
    {
      "q": "¿Cómo convertir millas a km mentalmente?",
      "a": "Una forma fácil es multiplicar por 1.6. Si quieres más precisión, sumá la mitad del valor original más un 10% adicional (Ej: 10mi -> 5 + 1 = 16km)."
    },
    {
      "q": "¿Qué países siguen utilizando las millas para la distancia?",
      "a": "Principalmente Estados Unidos, el Reino Unido, Liberia y Myanmar. En el resto del mundo predomina el sistema métrico (kilómetros)."
    },
    {
      "q": "¿Cuál es la diferencia entre milla terrestre y náutica?",
      "a": "La milla terrestre mide 1.609 metros, mientras que la milla náutica (usada en navegación y aviación) es más larga, midiendo exactamente 1.852 metros."
    },
    {
      "q": "¿A cuánto equivalen 60 mph en kilómetros por hora?",
      "a": "60 millas por hora equivalen aproximadamente a 96,56 km/h, un límite de velocidad estándar en muchas autopistas estadounidenses."
    }
  ],
  "relacionados": [
    { "nombre": "Kilómetros a Millas", "link": "/unidades/km-a-millas" },
    { "nombre": "Pies a Metros", "link": "/unidades/pies-a-metros" },
    { "nombre": "Consumo de Combustible", "link": "/transporte/consumo-combustible" }
  ]
},
"miles-to-km": {
  "faqs": [
    {
      "q": "¿A cuántos kilómetros equivale exactamente una milla?",
      "a": "Una milla terrestre equivale a exactamente 1,609344 kilómetros. Para cálculos rápidos y estimaciones, se suele redondear el valor a 1,61 km."
    },
    {
      "q": "¿Cómo convertir millas a km mentalmente?",
      "a": "Un truco rápido es multiplicar las millas por 1.6. Por ejemplo, para 10 millas: 10 x 1 = 10; 10 x 0.6 = 6; la suma te da 16 km aproximadamente."
    },
    {
      "q": "¿Cuál es la diferencia entre milla terrestre y milla náutica?",
      "a": "La milla terrestre (1.609 km) se usa en carreteras y mapas, mientras que la milla náutica (1.852 km) es el estándar internacional para navegación marítima y aviación."
    },
    {
      "q": "¿Por qué Estados Unidos usa millas en lugar de kilómetros?",
      "a": "Estados Unidos mantiene el sistema imperial por tradición y por el alto costo logístico que implicaría cambiar toda la señalización de sus carreteras al sistema métrico decimal."
    },
    {
      "q": "¿A cuánto equivalen las velocidades de carretera comunes en km/h?",
      "a": "60 mph son 96,5 km/h, 70 mph son 112,6 km/h y 80 mph equivalen a 128,7 km/h. Conocer estas equivalencias es vital para evitar multas al conducir en el extranjero."
    }
  ],
  "relacionados": [
    { "nombre": "Kilómetros a Millas", "link": "/unidades/km-a-millas" },
    { "nombre": "Pulgadas a Centímetros", "link": "/unidades/pulgadas-a-cm" },
    { "nombre": "Calculadora de Consumo", "link": "/utiles/combustible" }
  ]
},
"kg-to-lb": {
  "faqs": [
    {
      "q": "¿Cuántas libras tiene exactamente un kilogramo?",
      "a": "Un kilogramo equivale exactamente a 2,20462262 libras. Para la mayoría de los usos cotidianos, se simplifica el cálculo multiplicando los kilos por 2,2."
    },
    {
      "q": "¿Cómo convertir kg a libras mentalmente?",
      "a": "Un truco rápido es multiplicar el peso por 2 y luego sumarle un 10% del resultado. Por ejemplo, para 10kg: 10x2=20; el 10% de 20 es 2; 20+2 = 22 lbs."
    },
    {
      "q": "¿Por qué el límite de equipaje en aviones suele ser de 23 kg o 50 lb?",
      "a": "Es una estandarización internacional. 23 kg equivalen a 50,7 lbs. Las aerolíneas redondean a 50 libras en países con sistema imperial para facilitar el pesaje."
    },
    {
      "q": "¿Cuál es la diferencia entre masa y peso al convertir estas unidades?",
      "a": "Técnicamente, el kilogramo es una unidad de masa y la libra puede referirse a fuerza o masa. Sin embargo, en el uso comercial y diario, ambos se tratan como unidades de peso equivalentes."
    },
    {
      "q": "¿Cuánto es una libra en gramos para recetas de cocina?",
      "a": "Una libra equivale aproximadamente a 453,59 gramos. En cocina, muchos chefs redondean a 450 gramos para simplificar las mediciones de ingredientes secos."
    }
  ],
  "relacionados": [
    { "nombre": "Libras a Kilogramos", "link": "/unidades/lb-to-kg" },
    { "nombre": "Pulgadas a Centímetros", "link": "/unidades/pulgadas-a-cm" },
    { "nombre": "Calculadora de IMC", "link": "/salud/calculadora-imc" }
  ]
},
"lb-to-kg": {
  "faqs": [
    {
      "q": "¿Cómo convertir libras a kilogramos rápidamente?",
      "a": "Para un cálculo mental rápido, dividí el valor por 2 y restale un 10% del resultado. Ejemplo: 100 lb / 2 = 50; 50 - 5 = 45 kg (aprox)."
    },
    {
      "q": "¿Cuántos kg tiene una libra exactamente?",
      "a": "Una libra equivale exactamente a 0,45359237 kilogramos según el estándar internacional de 1959."
    },
    {
      "q": "¿Qué significa la abreviatura 'lb'?",
      "a": "La abreviatura proviene de la frase latina 'libra pondo', que significa 'peso en libras'. El término 'libra' ya se usaba en el Imperio Romano."
    },
    {
      "q": "¿A cuántos kg equivalen 100 libras?",
      "a": "100 libras equivalen a 45,36 kilogramos. Es una medida común para ciertos bultos de carga o peso corporal medio."
    },
    {
      "q": "¿Es lo mismo una libra que una pinta?",
      "a": "No, la libra mide masa/peso, mientras que la pinta es una unidad de volumen para líquidos. Existe un dicho que dice 'a pint's a pound the world around', pero solo es una aproximación para el agua."
    }
  ],
  "relacionados": [
    { "nombre": "Kilogramos a Libras", "link": "/unidades/kg-to-lb" },
    { "nombre": "Gramos a Onzas", "link": "/unidades/gramos-a-onzas" },
    { "nombre": "Calculadora de Calorías", "link": "/salud/calorias" }
  ]
},
"litros-a-galones": {
  "faqs": [
    {
      "q": "¿Cuántos litros hay en un galón estadounidense?",
      "a": "Un galón estadounidense (US gal) contiene exactamente 3,78541178 litros. Es el estándar utilizado en EE.UU. y gran parte de América."
    },
    {
      "q": "¿Cuál es la diferencia entre el galón de EE.UU. y el galón imperial?",
      "a": "El galón estadounidense es más pequeño (3,785 l), mientras que el galón imperial del Reino Unido es más grande, con 4,546 litros."
    },
    {
      "q": "¿Cómo convertir litros a galones mentalmente?",
      "a": "Para una estimación rápida, podés dividir los litros por 4. Si tenés 20 litros, serán un poco más de 5 galones (aprox 5.28 gal)."
    },
    {
      "q": "¿A qué se refiere 'gal' en las etiquetas de productos?",
      "a": "Generalmente, en productos importados de América, 'gal' se refiere al galón líquido de EE.UU., equivalente a unos 3.78 litros."
    },
    {
      "q": "¿Cuántos litros tiene un cuarto de galón?",
      "a": "Un cuarto de galón (quart) equivale a aproximadamente 0,946 litros, lo que es casi un litro completo."
    }
  ],
  "relacionados": [
    { "nombre": "Galones a Litros", "link": "/unidades/gal-to-l" },
    { "nombre": "Mililitros a Onzas Líquidas", "link": "/unidades/ml-to-oz" },
    { "nombre": "Consumo de Combustible", "link": "/utilidades/combustible" }
  ]
},
"gal-to-l": {
  "faqs": [
    {
      "q": "¿Cuántos litros hay en un galón?",
      "a": "Un galón líquido de los Estados Unidos equivale exactamente a 3,78541178 litros. En contextos prácticos, se suele redondear a 3,78 litros."
    },
    {
      "q": "¿Es lo mismo un galón en todo el mundo?",
      "a": "No. El galón estadounidense (3,78 l) es diferente al galón imperial británico (4,54 l). Esta herramienta utiliza el galón de EE.UU., que es el estándar más usado en comercio."
    },
    {
      "q": "¿Cómo convierto galones a litros mentalmente?",
      "a": "Una técnica rápida es multiplicar por 4 y restar un poquito (cerca del 5%). Por ejemplo, 10 galones x 4 = 40; restás un poco y llegás a los 37,85 l reales."
    },
    {
      "q": "¿Qué capacidad tiene un bidón de 5 galones?",
      "a": "Un bidón o balde de 5 galones, muy común en pinturas y aceites, tiene una capacidad aproximada de 18,93 litros."
    },
    {
      "q": "¿Cuántos litros hay en medio galón?",
      "a": "Medio galón estadounidense equivale a 1,892 litros, una medida muy frecuente en envases de leche y jugos importados."
    }
  ],
  "relacionados": [
    { "nombre": "Litros a Galones", "link": "/unidades/litros-to-galones" },
    { "nombre": "Onzas Líquidas a Mililitros", "link": "/unidades/oz-to-ml" },
    { "nombre": "Consumo de Combustible", "link": "/utilidades/combustible" }
  ]
},
  "metros-a-pies": {
    "faqs": [
      {
        "q": "¿Cuántos pies tiene exactamente un metro?",
        "a": "Un metro tiene exactamente 3.280839895 pies. Para cálculos rápidos y cotidianos, se suele utilizar el valor aproximado de 3.28."
      },
      {
        "q": "¿Cómo se escribe la abreviatura de pies?",
        "a": "La abreviatura estándar es 'ft' (de feet). También es común ver el símbolo de prima (') para indicar pies, como en 5' para 5 pies."
      },
      {
        "q": "¿Es lo mismo un pie que 12 pulgadas?",
        "a": "Sí, un pie se divide exactamente en 12 pulgadas. Si conviertes metros a pies y obtienes decimales, puedes multiplicar esos decimales por 12 para obtener las pulgadas restantes."
      },
      {
        "q": "¿Por qué los países usan sistemas de medida diferentes?",
        "a": "La mayoría usa el sistema métrico por su simplicidad decimal. EE.UU. mantiene el sistema imperial por tradición histórica y el alto costo de cambiar toda su infraestructura industrial."
      },
      {
        "q": "¿Qué es más grande, un metro o un pie?",
        "a": "Un metro es significativamente más grande que un pie. Específicamente, un metro es más de tres veces la longitud de un pie."
      }
    ],
    "relacionados": [
      { "nombre": "Pies a Metros", "link": "/unidades/pies-to-metros" },
      { "nombre": "Millas a Kilómetros", "link": "/unidades/miles-to-km" },
      { "nombre": "Pulgadas a Centímetros", "link": "/unidades/pulgadas-to-cm" }
    ]
  },
  "pies-a-metros": {
    "faqs": [
      {
        "q": "¿Cuántos metros tiene un pie exactamente?",
        "a": "Un pie tiene exactamente 0.3048 metros. Esta es una medida estandarizada internacionalmente desde 1959."
      },
      {
        "q": "¿Cómo convertir pies a metros de forma rápida?",
        "a": "Para una conversión rápida, multiplica el valor en pies por 0.3. Si necesitas precisión exacta, usa el factor 0.3048."
      },
      {
        "q": "¿Qué es más grande, un metro o un pie?",
        "a": "El metro es más grande. Un metro equivale a aproximadamente 3.28 pies."
      },
      {
        "q": "¿Por qué se usa el pie en aviación?",
        "a": "Es una convención histórica liderada por los países anglosajones que se ha mantenido para estandarizar la comunicación entre pilotos y controladores en todo el mundo."
      },
      {
        "q": "¿Cuántos pies hay en un metro cuadrado?",
        "a": "Un metro cuadrado equivale a aproximadamente 10.764 pies cuadrados, ya que la conversión se realiza al cuadrado (3.2808 x 3.2808)."
      }
    ],
    "relacionados": [
      { "nombre": "Metros a Pies", "link": "/unidades/metros-a-pies" },
      { "nombre": "Millas a Kilómetros", "link": "/unidades/millas-a-kilometros" },
      { "nombre": "Pulgadas a Centímetros", "link": "/unidades/pulgadas-a-centimetros" }
    ]
  },

  "m2-a-ft2": {
    "faqs": [
      {
        "q": "¿Cuántos pies cuadrados tiene un metro cuadrado?",
        "a": "Un metro cuadrado equivale exactamente a 10.7639104 pies cuadrados. Para cálculos rápidos se suele utilizar 10.76."
      },
      {
        "q": "¿Cómo convertir metros cuadrados a pies cuadrados manualmente?",
        "a": "Debes multiplicar la cantidad de metros cuadrados por el factor 10.7639. Si buscas una estimación rápida, multiplica por 11."
      },
      {
        "q": "¿Por qué no se multiplica por 3.28 para convertir áreas?",
        "a": "3.28 es el factor para unidades lineales. Para áreas (2D), el factor debe elevarse al cuadrado (3.2808²), resultando en el factor 10.76."
      },
      {
        "q": "¿Cuál es la medida estándar de una habitación en pies cuadrados?",
        "a": "Una habitación promedio de 12 m² equivale a unos 129 ft². En Estados Unidos, los dormitorios suelen rondar los 120-150 sq ft."
      },
      {
        "q": "¿Qué significa sq ft en los planos de casas?",
        "a": "'Sq ft' es la abreviatura de 'square feet', que en español significa pies cuadrados, la unidad de superficie del sistema imperial."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Pies a Metros", "link": "/unidades/pies-a-metros" },
      { "nombre": "Calculadora de Metros Cúbicos", "link": "/unidades/metros-cubicos" },
      { "nombre": "Conversor de Hectáreas a Acres", "link": "/unidades/hectareas-a-acres" }
    ]
},
  "pies-cuadrados-a-metros-cuadrados": {
    "faqs": [
      {
        "q": "¿Cómo convertir pies cuadrados a metros cuadrados?",
        "a": "Para convertir pies cuadrados a metros cuadrados de forma manual, debes multiplicar la cantidad de pies cuadrados por 0.092903. También puedes dividir la cantidad de pies cuadrados por 10.764 para obtener el mismo resultado."
      },
      {
        "q": "¿Cuántos metros cuadrados tiene un pie cuadrado?",
        "a": "Un pie cuadrado equivale exactamente a 0.09290304 metros cuadrados. Es una unidad mucho menor que el metro cuadrado, representando aproximadamente el 9% de este."
      },
      {
        "q": "¿Por qué se usa el pie cuadrado en construcción?",
        "a": "El pie cuadrado es la unidad de medida estándar en Estados Unidos y otros países con influencia anglosajona. Se utiliza para medir el área habitable de viviendas, locales comerciales y la cobertura de materiales como pisos y pintura."
      },
      {
        "q": "¿Cuál es la fórmula para pasar de ft2 a m2?",
        "a": "La fórmula matemática es: Área en m2 = Área en ft2 × 0.092903. Esta constante proviene del cálculo de (0.3048 metros)^2, que es la longitud de un pie convertida al sistema métrico."
      },
      {
        "q": "¿Qué es más grande, un metro cuadrado o un pie cuadrado?",
        "a": "Un metro cuadrado es considerablemente más grande que un pie cuadrado. De hecho, 1 metro cuadrado es igual a aproximadamente 10.76 pies cuadrados."
      }
    ],
    "relacionados": [
      { "nombre": "Metros Cuadrados a Pies Cuadrados", "link": "/unidades/m2-a-ft2" },
      { "nombre": "Calculadora de Hectáreas a Metros", "link": "/unidades/hectareas-a-m2" },
      { "nombre": "Conversor de Acres a Hectáreas", "link": "/unidades/acres-a-hectareas" }
    ]
  },
  "bytes-a-mb": {
    "faqs": [
      {
        "q": "¿Cuántos bytes tiene un MB exactamente?",
        "a": "Depende del sistema. En el sistema decimal (SI), un Megabyte tiene exactamente 1,000,000 de bytes. En el sistema binario (JEDEC), un Megabyte (o Mebibyte) tiene 1,048,576 bytes."
      },
      {
        "q": "¿Cómo convertir bytes a MB en Excel?",
        "a": "Para convertir bytes a MB en decimal, divide la celda por 1,000,000. Para convertir a MB binario (MiB), utiliza la fórmula: =A1/(1024^2)."
      },
      {
        "q": "¿Por qué mi disco duro muestra menos espacio en Windows?",
        "a": "Windows utiliza el sistema binario (1024) para calcular el espacio, mientras que los fabricantes de discos duros utilizan el sistema decimal (1000). Esto crea una diferencia de aproximadamente un 7% en la lectura."
      },
      {
        "q": "¿Cuál es la diferencia entre MB y MiB?",
        "a": "MB (Megabyte) se refiere oficialmente a 10^6 bytes (decimal), mientras que MiB (Mebibyte) se refiere a 2^20 bytes (binario). Sin embargo, en muchos contextos informáticos se usan indistintamente."
      },
      {
        "q": "¿Qué es más grande, un Megabyte o un Gigabyte?",
        "a": "Un Gigabyte (GB) es más grande. Un GB contiene 1,000 Megabytes en el sistema decimal."
      }
    ],
    "relacionados": [
      { "nombre": "Calculadora de Bits a Bytes", "link": "/unidades/bits-a-bytes" },
      { "nombre": "Conversor de MB a GB", "link": "/unidades/mb-a-gb" },
      { "nombre": "Calculadora de Velocidad de Descarga", "link": "/tecnologia/velocidad-descarga" }
    ]
  },
  "mb-a-gb": {
    "faqs": [
      {
        "q": "¿Cuántos MB tiene un GB exactamente?",
        "a": "Depende del estándar utilizado. En el sistema decimal (usado por fabricantes), 1 GB tiene 1,000 MB. En el sistema binario (usado por Windows), 1 GB tiene 1,024 MB."
      },
      {
        "q": "¿Cómo convertir Megabytes a Gigabytes manualmente?",
        "a": "Para una conversión rápida, divide la cantidad de MB entre 1,000. Para una conversión técnica precisa para software, divide la cantidad entre 1,024."
      },
      {
        "q": "¿Por qué mi computadora muestra menos espacio del que compré?",
        "a": "Esto ocurre porque los fabricantes de discos venden Gigabytes decimales (base 1,000), pero los sistemas operativos calculan en Gigabytes binarios (base 1,024). Esa diferencia del 7% hace que 500 GB parezcan 465 GB."
      },
      {
        "q": "¿Qué es más grande, 5000 MB o 4 GB?",
        "a": "5000 MB es más grande. 5000 MB equivalen a 5 GB (decimal) o 4.88 GB (binario), por lo que supera en ambos casos a los 4 GB."
      },
      {
        "q": "¿Cuántos MB son 100 GB?",
        "a": "En el sistema comercial, 100 GB son 100,000 MB. En el sistema informático binario, 100 GB equivalen a 102,400 MB."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Bytes a MB", "link": "/unidades/bytes-a-mb" },
      { "nombre": "Calculadora de GB a TB", "link": "/unidades/gb-a-tb" },
      { "nombre": "Conversor de Bits a Bytes", "link": "/unidades/bits-a-bytes" }
    ]
  },
  "segundos-a-horas": {
    "faqs": [
      {
        "q": "¿Cómo pasar de segundos a horas?",
        "a": "Para convertir segundos a horas, debes dividir la cantidad total de segundos por 3,600. Por ejemplo, 7,200 segundos divididos por 3,600 equivalen a 2 horas."
      },
      {
        "q": "¿Cuántos segundos tiene una hora exactamente?",
        "a": "Una hora tiene exactamente 3,600 segundos. Esto se calcula multiplicando 60 minutos por los 60 segundos que tiene cada minuto."
      },
      {
        "q": "¿Cuál es la fórmula para convertir segundos a horas?",
        "a": "La fórmula es: Horas = Segundos / 3,600. Es una operación directa basada en el sistema sexagesimal de medición del tiempo."
      },
      {
        "q": "¿Qué significa 0.5 horas en segundos?",
        "a": "0.5 horas representa media hora. Para convertirlo a segundos, multiplicas 0.5 por 3,600, lo que resulta en 1,800 segundos (o 30 minutos)."
      },
      {
        "q": "¿Cómo convertir segundos a horas, minutos y segundos?",
        "a": "Primero divides los segundos por 3,600 para obtener las horas. El resto se divide por 60 para obtener los minutos, y el residuo final son los segundos restantes."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Minutos a Horas", "link": "/unidades/minutos-a-horas" },
      { "nombre": "Calculadora de Horas a Segundos", "link": "/unidades/horas-a-segundos" },
      { "nombre": "Calculadora de Ritmo de Carrera", "link": "/deporte/ritmo-carrera" }
    ]
  },
  "horas-a-dias": {
    "faqs": [
      {
        "q": "¿Cómo convertir horas a días rápidamente?",
        "a": "Para convertir horas a días, simplemente divide el número de horas entre 24. Por ejemplo, 48 horas divididas por 24 resultan en exactamente 2 días."
      },
      {
        "q": "¿Cuántos días son 72 horas?",
        "a": "72 horas equivalen a exactamente 3 días completos (72 / 24 = 3)."
      },
      {
        "q": "¿Qué parte de un día son 12 horas?",
        "a": "12 horas representan exactamente 0.5 días, es decir, la mitad de un día solar de 24 horas."
      },
      {
        "q": "¿Cómo calcular cuántos días hay en 100 horas?",
        "a": "Divide 100 entre 24. El resultado es 4.166 días, lo que equivale a 4 días y 4 horas aproximadamente."
      },
      {
        "q": "¿Por qué un día tiene 24 horas?",
        "a": "Es una convención histórica basada en el sistema sexagesimal de los egipcios y babilonios que dividieron el día y la noche en periodos de 12 horas cada uno."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Minutos a Horas", "link": "/unidades/minutos-a-horas" },
      { "nombre": "Calculadora de Días a Semanas", "link": "/unidades/dias-a-semanas" },
      { "nombre": "Conversor de Segundos a Horas", "link": "/unidades/segundos-a-horas" }
    ]
  },
  "semanas-a-meses": {
    "faqs": [
      {
        "q": "¿Cómo convertir semanas a meses correctamente?",
        "a": "Para convertir semanas a meses de forma precisa, divide el número de semanas por 4.345. Esto se debe a que un mes promedio tiene un poco más de 4 semanas."
      },
      {
        "q": "¿Por qué un mes no tiene exactamente 4 semanas?",
        "a": "Porque 4 semanas equivalen a 28 días, y la mayoría de los meses tienen 30 o 31 días. Solo febrero en años no bisiestos tiene exactamente 4 semanas."
      },
      {
        "q": "¿Cuántos meses son 12 semanas?",
        "a": "12 semanas equivalen a aproximadamente 2.76 meses. Muchas personas creen que son 3 meses, pero faltarían algunos días para completar el trimestre calendario."
      },
      {
        "q": "¿Qué constante se usa en finanzas para semanas por mes?",
        "a": "En contabilidad y finanzas se suele utilizar 4.33 o 4.345 para normalizar pagos semanales a mensuales."
      },
      {
        "q": "¿Cuántas semanas tiene un mes de 31 días?",
        "a": "Un mes de 31 días tiene aproximadamente 4.43 semanas."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Horas a Días", "link": "/unidades/horas-a-dias" },
      { "nombre": "Calculadora de Meses a Años", "link": "/unidades/meses-a-años" },
      { "nombre": "Calculadora de Semanas de Embarazo", "link": "/salud/semanas-embarazo" }
    ]
  },
  "conversor-temperatura": {
    "faqs": [
      {
        "q": "¿Cómo pasar de Celsius a Fahrenheit rápidamente?",
        "a": "Multiplica los grados Celsius por 1.8 y suma 32. Por ejemplo, 10°C serían (10 * 1.8) + 32 = 50°F."
      },
      {
        "q": "¿Qué temperatura es igual en Celsius y Fahrenheit?",
        "a": "El punto donde ambas escalas coinciden es exactamente a -40 grados. Es decir, -40°C es igual a -40°F."
      },
      {
        "q": "¿Por qué la escala Kelvin no usa el símbolo de grado?",
        "a": "Kelvin es una escala absoluta de base termodinámica y no una escala graduada arbitraria, por lo que su unidad es el 'kelvin' y no el 'grado kelvin'."
      },
      {
        "q": "¿A cuántos grados Kelvin se congela el agua?",
        "a": "El agua se congela a 273.15 K, que corresponde a 0 grados Celsius o 32 grados Fahrenheit."
      },
      {
        "q": "¿Cómo convertir Fahrenheit a Celsius mentalmente?",
        "a": "Una forma rápida aproximada es restar 30 al valor en Fahrenheit y luego dividir entre 2. No es exacto, pero sirve para estimaciones meteorológicas rápidas."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Unidades", "link": "/unidades/conversor-longitud" },
      { "nombre": "Calculadora Científica", "link": "/matematicas/calculadora-cientifica" },
      { "nombre": "Conversor de Pesos", "link": "/unidades/conversor-masa" }
    ]
  },
  "conversor-velocidad": {
    "faqs": [
      {
        "q": "¿Cómo convertir km/h a m/s rápidamente?",
        "a": "La forma más sencilla es dividir la velocidad en km/h entre 3.6. Por ejemplo, 36 km/h dividido por 3.6 es igual a 10 m/s."
      },
      {
        "q": "¿A cuántos km/h equivale una milla por hora (mph)?",
        "a": "Una milla por hora equivale exactamente a 1.60934 kilómetros por hora."
      },
      {
        "q": "¿Qué es un nudo y por qué se usa en el mar?",
        "a": "Un nudo es una milla náutica por hora (1.852 km/h). Se utiliza en navegación porque una milla náutica corresponde exactamente a un minuto de arco de latitud terrestre."
      },
      {
        "q": "¿A qué velocidad viaja el sonido?",
        "a": "En condiciones estándar (20°C a nivel del mar), el sonido viaja a aproximadamente 1235 km/h o 343 m/s."
      },
      {
        "q": "¿Cómo pasar de m/s a km/h mentalmente?",
        "a": "Para una estimación rápida, multiplica el valor en m/s por 4 y resta un 10% del resultado. El factor exacto es multiplicar por 3.6."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Temperatura", "link": "/unidades/conversor-temperatura" },
      { "nombre": "Conversor de Horas a Días", "link": "/unidades/horas-a-dias" },
      { "nombre": "Calculadora de Regla de Tres", "link": "/matematicas/regla-de-tres" }
    ]
  },
  "generador-contrasenas": {
    "faqs": [
      {
        "q": "¿Qué longitud debe tener una contraseña segura?",
        "a": "Se recomienda una longitud mínima de 12 a 16 caracteres para garantizar una resistencia óptima contra ataques de fuerza bruta modernos."
      },
      {
        "q": "¿Es seguro usar un generador de contraseñas online?",
        "a": "Sí, siempre que el generador funcione localmente en tu navegador mediante JavaScript y no envíe la contraseña a un servidor externo, como nuestra herramienta."
      },
      {
        "q": "¿Qué caracteres hacen que una contraseña sea más fuerte?",
        "a": "La combinación de letras mayúsculas, minúsculas, números y símbolos aumenta la entropía, haciendo que el espacio de combinaciones sea exponencialmente más grande."
      },
      {
        "q": "¿Cada cuánto debo cambiar mis contraseñas?",
        "a": "Si usas contraseñas robustas y únicas para cada servicio, solo es necesario cambiarlas si sospechas que ha habido una brecha de seguridad en la plataforma."
      },
      {
        "q": "¿Por qué no debo usar palabras del diccionario en mis claves?",
        "a": "Los atacantes usan ataques de diccionario que prueban millones de palabras y variaciones comunes en segundos. La aleatoriedad total es la única defensa real."
      }
    ],
    "relacionados": [
      { "nombre": "Calculadora de Interés Compuesto", "link": "/finanzas/interes-compuesto" },
      { "nombre": "Calculadora de Regla de Tres", "link": "/matematicas/regla-de-tres" },
      { "nombre": "Conversor de Unidades", "link": "/unidades/conversor-velocidad" }
    ]
  },
  "contador-de-letras": {
    "faqs": [
      {
        "q": "¿Cuenta los espacios el contador de caracteres?",
        "a": "Sí, nuestra herramienta ofrece dos métricas: el total de caracteres incluyendo espacios y el recuento de caracteres netos sin espacios para mayor precisión técnica."
      },
      {
        "q": "¿Cuántas palabras debe tener un artículo SEO?",
        "a": "Para contenido informativo, lo ideal es superar las 700 a 1000 palabras. Sin embargo, lo más importante es responder a la intención de búsqueda del usuario de forma completa."
      },
      {
        "q": "¿Cuál es el límite de caracteres para Twitter (X)?",
        "a": "El límite estándar es de 280 caracteres, aunque para suscriptores premium este límite es significativamente mayor."
      },
      {
        "q": "¿Cómo se calcula el tiempo de lectura de un texto?",
        "a": "Se estima basándose en la velocidad promedio de lectura de un adulto, que es de aproximadamente 200 a 250 palabras por minuto."
      },
      {
        "q": "¿El contador detecta saltos de línea como párrafos?",
        "a": "Sí, el algoritmo identifica los bloques de texto separados por saltos de línea y los contabiliza como párrafos independientes siempre que contengan caracteres."
      }
    ],
    "relacionados": [
      { "nombre": "Conversor de Velocidad", "link": "/unidades/conversor-velocidad" },
      { "nombre": "Calculadora de Regla de Tres", "link": "/matematicas/regla-de-tres" },
      { "nombre": "Generador de Contraseñas", "link": "/utiles/generador-contrasenas" }
    ]
  },
  "contador-de-vocales": {
    "faqs": [
      {
        "q": "¿El contador incluye vocales con tildes?",
        "a": "Sí, nuestro sistema está configurado para detectar vocales con acentos (á, é, í, ó, ú) y diéresis (ü) de forma automática."
      },
      {
        "q": "¿Qué es una palabra panvocálica?",
        "a": "Es una palabra que contiene las cinco vocales (a, e, i, o, u) al menos una vez, como por ejemplo 'murciélago' o 'educación'."
      },
      {
        "q": "¿Para qué sirve contar las vocales en un texto?",
        "a": "Es útil para análisis lingüísticos, ejercicios educativos, resolución de acertijos y estudios sobre la frecuencia fonética del lenguaje."
      },
      {
        "q": "¿Es gratis este contador de vocales?",
        "a": "Sí, es una herramienta gratuita y de código abierto para que cualquier usuario pueda analizar sus textos sin límites."
      },
      {
        "q": "¿El análisis de vocales afecta al SEO?",
        "a": "No directamente, pero un análisis de sonoridad ayuda a crear contenidos con mejor ritmo y legibilidad, lo cual mejora indirectamente la retención del usuario."
      }
    ],
    "relacionados": [
      { "nombre": "Contador de Letras", "link": "/utiles/contador-de-letras" },
      { "nombre": "Generador de Contraseñas", "link": "/utiles/generador-contrasenas" },
      { "nombre": "Conversor de Velocidad", "link": "/unidades/conversor-velocidad" }
    ]
    },
  "contador-de-palabras-unicas": {
    "faqs": [
      {
        "q": "¿Qué se considera una palabra única?",
        "a": "Es un término que aparece en el texto por primera vez. Si la palabra se repite, el contador total aumenta, pero el de palabras únicas se mantiene igual."
      },
      {
        "q": "¿Qué es el Type-Token Ratio (TTR)?",
        "a": "Es una medida de diversidad léxica que se calcula dividiendo el número de palabras únicas entre el total de palabras de un texto."
      },
      {
        "q": "¿Por qué baja la riqueza léxica en textos largos?",
        "a": "Porque en el lenguaje natural solemos reutilizar artículos, preposiciones y conectores constantemente, lo que diluye la proporción de términos nuevos."
      },
      {
        "q": "¿Este contador ignora mayúsculas y signos de puntuación?",
        "a": "Sí, nuestra herramienta normaliza el texto convirtiéndolo a minúsculas y eliminando la puntuación para asegurar que 'Gato' y 'gato' se cuenten como la misma palabra."
      },
      {
        "q": "¿Cuál es un buen porcentaje de riqueza léxica?",
        "a": "Para un artículo de 1000 palabras, un TTR de entre el 40% y 60% es excelente, indicando un vocabulario variado y profesional."
      }
    ],
    "relacionados": [
      { "nombre": "Contador de Letras", "link": "/utiles/contador-de-letras" },
      { "nombre": "Contador de Vocales", "link": "/utiles/contador-de-vocales" },
      { "nombre": "Generador de Contraseñas", "link": "/utiles/generador-contrasenas" }
    ]
  },
  "calculadora-fecha-futura": {
    "faqs": [
      {
        "q": "¿Cómo calcula los meses la herramienta?",
        "a": "Nuestra calculadora suma meses calendario exactos. Si sumas un mes al 31 de marzo, el sistema ajustará automáticamente al último día de abril para evitar errores de desbordamiento."
      },
      {
        "q": "¿Tiene en cuenta los años bisiestos?",
        "a": "Sí, el algoritmo utiliza el motor de fechas nativo de JavaScript que respeta perfectamente los años bisiestos (29 de febrero) y todas las irregularidades del calendario gregoriano."
      },
      {
        "q": "¿Puedo sumar semanas y días al mismo tiempo?",
        "a": "Totalmente. Puedes combinar cualquier cantidad de días, semanas, meses y años en un solo cálculo para obtener la fecha final acumulada."
      },
      {
        "q": "¿Qué pasa si la fecha final cae en fin de semana?",
        "a": "La herramienta te mostrará explícitamente el día de la semana resultante (ej: 'sábado') para que puedas decidir si ese día es apto para tus propósitos."
      },
      {
        "q": "¿Sirve para calcular fechas en el pasado?",
        "a": "Aunque está diseñada para el futuro, puedes introducir valores negativos en los campos para restar tiempo a una fecha inicial."
      }
    ],
    "relacionados": [
      { "nombre": "Semanas a Meses", "link": "/unidades/semanas-a-meses" },
      { "nombre": "Horas a Días", "link": "/unidades/horas-a-dias" },
      { "nombre": "Contador de Días", "link": "/utiles/contador-dias" }
    ]
  },
  "calculadora-fecha-pasada": {
    "faqs": [
      {
        "q": "¿Cómo funciona la resta de meses si el mes destino es más corto?",
        "a": "El sistema ajusta automáticamente. Si restas un mes al 31 de marzo, el resultado será el 28 o 29 de febrero, dependiendo de si el año es bisiesto, evitando errores de lógica."
      },
      {
        "q": "¿Puedo restar cientos de años con esta herramienta?",
        "a": "Sí, la calculadora soporta fechas históricas basándose en el estándar ISO y el calendario gregoriano, permitiendo retroceder décadas o siglos con precisión."
      },
      {
        "q": "¿La herramienta incluye el día de la semana resultante?",
        "a": "Correcto. Además de la fecha numérica, te indicará si ese día fue lunes, martes o cualquier otro día de la semana."
      },
      {
        "q": "¿Es útil para calcular periodos de prescripción legal?",
        "a": "Es ideal para eso. Permite restar años y meses exactos para verificar si un hecho ocurrió dentro del marco temporal permitido por la ley."
      },
      {
        "q": "¿Puedo sumar tiempo en lugar de restar?",
        "a": "Aunque está optimizada para restar, si introduces números negativos en los campos de entrada, la calculadora funcionará sumando tiempo hacia el futuro."
      }
    ],
    "relacionados": [
      { "nombre": "Calculadora de Fecha Futura", "link": "/utiles/calculadora-fecha-futura" },
      { "nombre": "Contador de Días", "link": "/utiles/contador-dias" },
      { "nombre": "Horas a Minutos", "link": "/unidades/horas-a-minutos" }
    ]
  },
  "contador-dias-navidad": {
    "faqs": [
      {
        "q": "¿Cuántos días faltan exactamente para Navidad?",
        "a": "El número de días depende de la fecha actual. Nuestra calculadora realiza el cálculo en tiempo real restando el momento presente de las 00:00 del 25 de diciembre."
      },
      {
        "q": "¿A qué hora empieza la cuenta atrás navideña?",
        "a": "Técnicamente, la cuenta atrás para la siguiente Navidad comienza inmediatamente después de la medianoche del 25 de diciembre del año anterior."
      },
      {
        "q": "¿La calculadora tiene en cuenta los años bisiestos?",
        "a": "Sí, al utilizar objetos de fecha nativos del sistema, la calculadora detecta automáticamente si el año actual tiene 366 días, ajustando la cuenta de forma precisa."
      },
      {
        "q": "¿Por qué es útil tener un contador de Navidad?",
        "a": "Es una herramienta excelente para la planificación financiera (ahorro para regalos), logística (envíos postales) y organización de eventos familiares o laborales."
      },
      {
        "q": "¿Falta lo mismo para Navidad en todo el mundo?",
        "a": "No exactamente. Debido a los husos horarios, los países en el este (como Australia) llegan a la Navidad varias horas antes que los países en el oeste (como México o Argentina)."
      }
    ],
    "relacionados": [
      { "nombre": "Calculadora de Fecha Futura", "link": "/utiles/calculadora-fecha-futura" },
      { "nombre": "Contador de Días Pasados", "link": "/utiles/calculadora-fecha-pasada" },
      { "nombre": "Calculadora de Interés Compuesto", "link": "/finanzas/interes-compuesto" }
    ]
  },
  "contador-dias-cumpleanos": {
    "faqs": [
      {
        "q": "¿Cómo calcula la herramienta si mi cumpleaños ya pasó este año?",
        "a": "El algoritmo detecta automáticamente si la fecha actual es posterior a tu cumpleaños del año en curso. De ser así, establece el objetivo para el próximo año calendario."
      },
      {
        "q": "¿Tiene en cuenta los años bisiestos?",
        "a": "Sí, el sistema utiliza el calendario estándar de JavaScript que considera automáticamente los años bisiestos para darte un recuento exacto de días."
      },
      {
        "q": "¿Para qué sirve saber el día de la semana de mi cumpleaños?",
        "a": "Es fundamental para la planificación de fiestas. Saber si cae en fin de semana te permite decidir si celebras el mismo día o si debes adelantar el festejo al viernes anterior."
      },
      {
        "q": "¿Puedo usarlo para saber cuánto falta para el cumple de otra persona?",
        "a": "Por supuesto. Solo debes introducir la fecha de nacimiento de esa persona y la calculadora te dirá cuántos días faltan para su próximo aniversario."
      },
      {
        "q": "¿Qué pasa si nací un 29 de febrero?",
        "a": "Nuestra herramienta asume la convención legal de celebrar el 28 de febrero en años no bisiestos, asegurando que siempre tengas una fecha de referencia."
      }
    ],
    "relacionados": [
      { "nombre": "Calculadora de Fecha Futura", "link": "/utiles/calculadora-fecha-futura" },
      { "nombre": "Contador de Días para Navidad", "link": "/utiles/contador-dias-navidad" },
      { "nombre": "Calculadora de Edad Exacta", "link": "/utiles/calculadora-edad-exacta" }
    ]
  }
};
