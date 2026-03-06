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

  "comprar-o-alquilar": {
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
      { nombre: "Comprar o Alquilar Casa", link: "/utiles/comprar-o-alquilar" }
    ]
  },

  "calculadora-cuotas": {
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
      { nombre: "Calculadora de Cuotas", link: "/finanzas/calculadora-cuotas" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ]
  },

  "impuesto-ganancias": {
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
      { nombre: "Impuesto a las Ganancias", link: "/finanzas/impuesto-ganancias" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ] 
  },
  "calculadora-inflacion": {
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
      { nombre: "Calculadora de Cuotas", link: "/finanzas/calculadora-cuotas" },
      { nombre: "Dólar Tarjeta", link: "/finanzas/dolar-tarjeta" }
    ]
  },

  "interes-compuesto": {
    faqs: [
      { 
        q: "¿Cuál es la diferencia entre interés simple e interés compuesto?", 
        a: "En el interés simple, las ganancias se calculan solo sobre el capital inicial. En el interés compuesto, los intereses se reinvierten al final de cada periodo, por lo que en el siguiente mes (o año) generás intereses sobre el capital y también sobre los intereses ganados anteriormente." 
      },
      { 
        q: "¿Cuál es la fórmula del interés compuesto?", 
        a: "La fórmula matemática es $$A = P(1 + r)^t$$. Donde A es el monto final, P el capital inicial, r la tasa de interés y t el tiempo. Como verás, el tiempo (t) es el exponente, por eso el crecimiento es exponencial y no lineal." 
      },
      { 
        q: "¿Por qué se dice que el tiempo es más importante que el capital?", 
        a: "Debido al crecimiento exponencial, empezar a invertir temprano con poco dinero suele dar mejores resultados que empezar tarde con mucho dinero. Cuantos más periodos tenga el interés para reinvertirse, más explosivo es el crecimiento final." 
      },
      { 
        q: "¿Qué es la Regla del 72?", 
        a: "Es una fórmula rápida para saber cuánto tardarás en duplicar tu dinero. Dividí 72 por la tasa de interés anual. Por ejemplo, con un interés del 8% anual, tardarás aproximadamente 9 años en duplicar tu capital (72 / 8 = 9)." 
      },
      { 
        q: "¿Con qué frecuencia deben reinvertirse los intereses?", 
        a: "Cuanto más frecuente sea la capitalización (mensual en lugar de anual, por ejemplo), más rápido crecerá el dinero. La mayoría de los plazos fijos o inversiones digitales hoy ofrecen capitalización mensual o diaria." 
      }
    ],
    relacionados: [
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
      { nombre: "Dólar Tarjeta", link: "/finanzas/dolar-tarjeta" },
      { nombre: "Plazo Fijo", link: "/finanzas/plazo-fijo" }
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Dólar Tarjeta", link: "/finanzas/dolar-tarjeta" }
    ]
  },

  "interes-simple": {
    faqs: [
      { 
        q: "¿Cuándo se utiliza el interés simple en la vida real?", 
        a: "Se utiliza principalmente en préstamos personales a corto plazo, en el cálculo de intereses por mora (como facturas vencidas), en descuentos de documentos comerciales y en algunos bonos estatales que pagan cupones de interés fijo sobre el valor nominal." 
      },
      { 
        q: "¿Cuál es la diferencia entre la tasa nominal y el interés generado?", 
        a: "La tasa nominal (TNA) es el porcentaje anual pactado, mientras que el interés generado es el monto en dinero que obtenés al aplicar esa tasa sobre tu capital inicial durante un tiempo determinado." 
      },
      { 
        q: "¿Qué pasa si el tiempo de mi inversión es en meses y no en años?", 
        a: "Para que la fórmula funcione, la tasa y el tiempo deben estar en la misma unidad. Si tenés una tasa anual y el tiempo en meses, debés dividir los meses por 12. Por ejemplo, 6 meses serían 0.5 años." 
      },
      { 
        q: "¿Es mejor el interés simple o el compuesto para un ahorrista?", 
        a: "Generalmente es mejor el interés compuesto, ya que permite que los intereses ganados vuelvan a trabajar para vos. El interés simple es útil cuando necesitás retirar tus ganancias mes a mes para cubrir gastos, manteniendo el capital original intacto." 
      },
      { 
        q: "¿Cómo afecta la inflación al interés simple?", 
        a: "En contextos inflacionarios, el interés simple suele ser desventajoso, ya que el capital inicial pierde valor real con el tiempo y los intereses generados (al ser fijos y no reinvertirse) no alcanzan a compensar la subida de precios." 
      }
    ],
    relacionados: [
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" },
      { nombre: "Interés por Mora", link: "/finanzas/interes-mora" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" }
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
      { nombre: "Factura de Exportación (E)", link: "/finanzas/factura-e" },
      { nombre: "Impuesto a las Ganancias", link: "/finanzas/impuesto-ganancias" }
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
      { nombre: "Presupuesto Mensual", link: "/finanzas/presupuesto" }
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
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
      { nombre: "Calculadora de IVA", link: "/finanzas/calculadora-iva" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" }
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Presupuesto Mensual", link: "/finanzas/presupuesto" }
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" }
    ]
  },

  "calculadora-fire": {
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

  "calculadora-vacaciones": {
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
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" }
    ]
  },

  "calculadora-frigorias": {
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

  "consumo-electrico": {
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
      { nombre: "Calculadora de Frigorías", link: "/finanzas/frigorias" },
      { nombre: "Presupuesto 50/30/20", link: "/finanzas/regla-50-30-20" },
      { nombre: "Calculadora de Inflación", link: "/finanzas/calculadora-inflacion" }
    ]
  },

  "calculadora-hormigon": {
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
      { nombre: "Calculadora de IVA", link: "/finanzas/calculadora-iva" }
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

  "consumo-energia": {
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

  "calculadora-pintura": {
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

  "calculadora-circulo": {
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
      { nombre: "Calculadora de Pintura", link: "/hogar/calculadora-pintura" },
      { nombre: "Cálculo de Hormigón", link: "/construccion/hormigon" }
    ]
  },

  "calculadora-pitagoras": {
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
      { nombre: "Conversor de Unidades", link: "/herramientas/conversor" }
    ]
  },

  "area-triangulo": {
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

  "comisiones-venta": {
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

  "margen-ganancia": {
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
      { nombre: "Comisiones de Venta", link: "/finanzas/comisiones-venta" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" },
      { nombre: "Regla de Tres Simple", link: "/herramientas/regla-de-tres" }
    ]
  },

  "markup-vs-margen": {
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
      { nombre: "Comisiones de Venta", link: "/finanzas/comisiones-venta" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "precio-de-venta": {
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
      { nombre: "Markup vs Margen", link: "/finanzas/markup-vs-margen" },
      { nombre: "Comisiones de Venta", link: "/finanzas/comisiones-venta" },
      { nombre: "Calculadora de IVA", link: "/finanzas/iva" }
    ]
  },

  "punto-de-equilibrio": {
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
      { nombre: "Margen de Ganancia", link: "/finanzas/margen-ganancia" },
      { nombre: "Precio de Venta", link: "/finanzas/precio-de-venta" },
      { nombre: "Markup vs Margen", link: "/finanzas/markup-vs-margen" }
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
      { nombre: "Punto de Equilibrio", link: "/finanzas/punto-de-equilibrio" },
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
      { nombre: "Punto de Equilibrio", link: "/finanzas/punto-de-equilibrio" },
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
      { nombre: "Punto de Equilibrio", link: "/finanzas/punto-de-equilibrio" },
      { nombre: "ROI de Proyectos", link: "/finanzas/roi" },
      { nombre: "Markup vs Margen", link: "/finanzas/markup-vs-margen" }
    ]
  },

  "agua-diaria": {
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
      { nombre: "Valor de tu Hora", link: "/productividad/valor-hora" },
      { nombre: "Días Vividos", link: "/curiosidades/días-vividos" }
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
      { nombre: "Agua Diaria", link: "/salud/agua-diaria" },
      { nombre: "Calculadora de IMC", link: "/salud/imc" },
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" }
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
      { nombre: "Agua Diaria", link: "/salud/agua-diaria" },
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" }
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
      { nombre: "Calculadora de Agua", link: "/salud/agua-diaria" },
      { nombre: "Gasto Calórico", link: "/salud/calorias" },
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" }
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
      { nombre: "Agua Diaria", link: "/salud/agua-diaria" },
      { nombre: "Valor de tu Hora", link: "/productividad/valor-hora" }
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
      { nombre: "Agua Diaria", link: "/salud/agua-diaria" },
      { nombre: "Frecuencia Cardíaca", link: "/salud/frecuencia-cardiaca" }
    ]
  },

  "dieta-keto": {
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
      { nombre: "Agua Diaria", link: "/salud/agua-diaria" }
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
      { nombre: "Agua Diaria", link: "/salud/agua-diaria" },
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" }
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
      { nombre: "Dieta Keto", link: "/salud/dieta-keto" },
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
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" }
    ]
  },

  "costo-uso": {
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
      { nombre: "Consumo de Combustible", link: "/utilidades/combustible" },
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
      { nombre: "Consumo de Combustible", link: "/utilidades/combustible" },
      { nombre: "Interés Compuesto", link: "/finanzas/interes-compuesto" }
    ]
  },

  "propinas": {
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
      { nombre: "Dividir Cuenta", link: "/utilidades/dividir-cuenta" },
      { nombre: "Gastos Compartidos", link: "/finanzas/gastos-compartidos" },
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
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" },
      { nombre: "Costo por Uso", link: "/finanzas/costo-uso" },
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
      { nombre: "Costo por Uso", link: "/finanzas/costo-uso" },
      { nombre: "Días Hábiles", link: "/productividad/dias-habiles" }
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
      { nombre: "Calculadora de Propinas", link: "/utilidades/propinas" },
      { nombre: "Costo por Uso", link: "/finanzas/costo-uso" },
      { nombre: "Consumo de Combustible", link: "/utilidades/combustible" }
    ]
  },

  "ecuaciones-lineales": {
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
      { nombre: "Días Hábiles", link: "/productividad/dias-habiles" }
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
      { nombre: "Días Vividos", link: "/curiosidades/dias-vividos" },
      { nombre: "Costo por Uso", link: "/finanzas/costo-uso" }
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
      { nombre: "Dividir Cuenta y Propina", link: "/utilidades/dividir-cuenta" },
      { nombre: "Interés Simple", link: "/finanzas/interes-simple" },
      { nombre: "Regla de Tres Simple", link: "/matematica/regla-de-tres" }
    ]
  },

  "diferencia-horas": {
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
      { nombre: "Días Hábiles", link: "/productividad/dias-habiles" },
      { nombre: "Cronómetro Online", link: "/utilidades/cronometro" },
      { nombre: "Gastos Compartidos", link: "/finanzas/gastos-compartidos" }
    ]
  },

  "suma-tiempo": {
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
      { nombre: "Diferencia de Horas", link: "/productividad/diferencia-horas" },
      { nombre: "Días Hábiles", link: "/productividad/dias-habiles" },
      { nombre: "Cronómetro Online", link: "/utilidades/cronometro" }
    ]
  },

  "edad-exacta": {
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
      { nombre: "Edad de Mascotas", link: "/curiosidades/edad-mascotas" },
      { nombre: "Diferencia de Horas", link: "/productividad/diferencia-horas" },
      { nombre: "Gasto Calórico", link: "/salud/calorias" }
    ]
  }
};