import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "cirugia-toracica-vats-videoasistida",
    slug: "cirugia-toracica-vats-videoasistida",
    name: "Cirugía de Tórax Mínimamente Invasiva (VATS)",
    description: "Procedimiento quirúrgico avanzado de tórax mediante toracoscopía con cámara de alta definición e instrumentos milimétricos especiales, evitando aperturas mayores de la pared torácica.",
    longDescription: "La Cirugía de Tórax Mínimamente Invasiva (VATS por sus siglas en inglés, Video-Assisted Thoracoscopic Surgery) es el estándar de oro en la cirugía torácica moderna. A través de 1 a 3 incisiones pequeñas (de 1 a 3 cm), permite realizar resecciones pulmonares complejas, timectomías y debridaciones sin separar ni cortar costillas, garantizando un dolor postoperatorio drásticamente menor y una rápida reincorporación a la vida laboral.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General con Ventilación Unipulmonar Selectiva",
    duration: "90 a 180 minutos",
    recoveryTime: "Estancia hospitalaria de 24 a 48 horas / Recuperación total en 10 a 14 días",
    isPainful: false,
    benefits: [
      "Sin separación ni fractura de costillas (preservación de pared torácica)",
      "Incisiones cosméticas mínimas de 1 a 3 cm",
      "Dolor postoperatorio reducido sustancialmente en comparación con toracotomía",
      "Estancia en hospital reducida (alta probable en 24 a 48 horas)",
      "Menor tasa de sangrado, infección y complicaciones respiratorias postquirúrgicas"
    ],
    postOpRecommendations: [
      "Realizar ejercicios de espirometría incentivada para expansión pulmonar",
      "Caminata temprana supervisada desde las primeras 12 horas post-cirugía",
      "Cuidado diario de incisiones quirúrgicas pequeñas y retiro de puntos a los 10 días",
      "Evitar esfuerzos físicos pesados o levantar objetos de más de 5 kg por 3 semanas"
    ],
    priceRange: "Sujeto a valoración / Cobertura con Seguros Médicos por Reembolso",
    technicalSpecs: {
      "Tecnología Utilizada": "Toracoscopio HD 30° & Engrapadoras mecánicas endoscópicas vascular/bronquial",
      "Tipo de Abordaje": "Uniportal (1 puerto) o Multiportal (2-3 incisiones milimétricas)",
      "Anestesia": "Anestesia general con tubo de doble luz para colapso pulmonar selectivo"
    },
    image: "/procedimientos/cirugia-torax.jpg",
    seo: {
      title: "Cirugía de Tórax Mínimamente Invasiva (VATS) en CDMX | Dr. Raúl Vega",
      description: "Cirugía de tórax mínimamente invasiva (VATS) en CDMX e Interlomas. Menos dolor y rápida recuperación con cirujano torácico especialista.",
      keywords: ["cirugia de torax minimamente invasiva vats", "cirugia toracica vats cdmx", "vats pulmonar interlomas", "cirujano de torax minima invasion"]
    }
  },
  {
    id: "lobectomia-reseccion-pulmonar",
    slug: "lobectomia-reseccion-pulmonar",
    name: "Lobectomía Pulmonar y Resección Oncológica",
    description: "Extirpación quirúrgica de un lóbulo pulmonar afectado por tumores o infecciones destructivas, preservando el resto del tejido sano funcional.",
    longDescription: "La lobectomía pulmonar es la cirugía de elección para el tratamiento del cáncer de pulmón en etapas tempranas o intermedias, así como para bronquiectasias destructivas o infecciones no controlables. Mediante técnica VATS o abordaje abierto según la complejidad, se extirpa el lóbulo enfermo junto con el vaciamiento ganglionar mediastinal oncológico.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General con Bloqueo Analgésico Intercostal/Epidural",
    duration: "2 a 3 horas",
    recoveryTime: "2 a 4 días de estancia hospitalaria",
    isPainful: false,
    benefits: [
      "Tratamiento curativo de elección en cáncer de pulmón en etapas IA a IIIA",
      "Extirpación completa con márgenes quirúrgicos oncológicos libres",
      "Linfadenectomía mediastinal completa para estadificación precisa",
      "Preservación de la capacidad pulmonar de los lóbulos restantes"
    ],
    postOpRecommendations: [
      "Ejercicios diarios de fisioterapia respiratoria con espirómetro de incentivo",
      "Analgesia postoperatoria agendada para permitir tos efectiva",
      "Seguimiento conjunto con oncología médica según reporte histopatológico"
    ],
    priceRange: "Cubierto por Seguros de Gastos Médicos Mayores",
    technicalSpecs: {
      "Técnica": "Discepción vascular hiliar (Arteria, Veena y Bronquio lobar independiente)",
      "Linfadenectomía": "Muestreo/Vaciamiento ganglionar de estaciones 2R, 4R, 7, 8, 9, 10, 11 (según lado)"
    },
    image: "/procedimientos/lobectomia-pulmonar.jpg",
    seo: {
      title: "Lobectomía Pulmonar y Cirugía Oncológica | Dr. Raúl Vega",
      description: "Resección pulmonar y lobectomía por VATS en CDMX para cáncer de pulmón y tumores. Cirujano torácico certificado.",
      keywords: ["lobectomia pulmonar cdmx", "cirugia cancer de pulmon interlomas", "reseccion pulmonar vats", "cirujano oncologico toracico"]
    }
  },
  {
    id: "simpatectomia-toracica-vats-hiperhidrosis",
    slug: "simpatectomia-toracica-vats-hiperhidrosis",
    name: "Simpatectomía Torácica por VATS para Hiperhidrosis",
    description: "Intervención quirúrgica ambulatoria o de corta estancia para la cura definitiva del sudor excesivo en manos, axilas o rostro mediante corte/clip de la cadena simpática.",
    longDescription: "La simpatectomía torácica bilateral asistida por video es la única técnica con resultados permanentes e inmediatos para la hiperhidrosis palmar y axilar severa. A través de 1 o 2 microincisiones de 5 milímetros en cada axila, el cirujano localiza la cadena simpática torácica e interrumpe de forma precisa los ganglios T2, T3 o T4 según la zona afectada.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos (ambos lados)",
    recoveryTime: "Alta hospitalaria el mismo día o en 24 horas / Retorno laboral en 3 a 5 días",
    isPainful: false,
    benefits: [
      "Cese inmediato de la sudoración palmar y axilar durante la misma cirugía",
      "Manos secas y calientes al despertar de la anestesia",
      "Cicatrices milimétricas imperceptibles ubicadas en los pliegues axilares",
      "Mejora radical en la confianza personal, social y desempeño laboral"
    ],
    postOpRecommendations: [
      "Retomar actividades normales de forma paulatina al 3er día",
      "Mantener parches de curación secos por 5 días",
      "Evitar ejercicio físico extenuante o gimnasio durante 2 semanas"
    ],
    priceRange: "Consulta opciones de pago y facilidades",
    technicalSpecs: {
      "Incisión": "2 incisiones de 5 mm por lado bajo la axila",
      "Instrumental": "Óptica de 5 mm y gancho de electrocauterio o clips de titanio"
    },
    image: "/procedimientos/simpatectomia-toracica.jpg",
    seo: {
      title: "Simpatectomía Torácica VATS para Hiperhidrosis | Dr. Raúl Vega",
      description: "Cirugía de sudoración excesiva en manos y axilas por VATS ambulatorio en CDMX. Resultados inmediatos con cirujano especialista.",
      keywords: ["simpatectomia toracica cdmx", "cirugia sudoracion manos interlomas", "vats hiperhidrosis ambulatoria", "tratamiento sudor palmar"]
    }
  },
  {
    id: "decorticacion-pleural-empiema",
    slug: "decorticacion-pleural-empiema",
    name: "Decorticación Pleural",
    description: "Limpieza y remoción quirúrgica de la capa fibrinosa (corteza) que atrapa al pulmón debido a infecciones pleurales crónicas o derrames loculados.",
    longDescription: "Cuando una infección pleural avanza a fase de empiema o paquipleuritis, la pleura se engrosa formando una corteza rígida que impide que el pulmón se expanda. La decorticación por VATS o toracotomía remueve meticulosamente este tejido fibroso, liberando el pulmón para que vuelva a llenar la cavidad torácica.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 150 minutos",
    recoveryTime: "2 a 4 días de hospitalización con sonda endopleural",
    isPainful: false,
    benefits: [
      "Liberación completa del pulmón atrapado y restauración del volumen ventilatorio",
      "Eliminación del foco infeccioso pleural supurado",
      "Prevención de secuelas restrictivas pulmonares definitivas"
    ],
    postOpRecommendations: [
      "Espirometría incentivada intensiva postoperatoria",
      "Mantener la sonda de drenaje conectada a sello de agua/aspiración hasta cese de fuga",
      "Completar esquema de antibióticos parenterales/orales según cultivo"
    ],
    priceRange: "Cubierto por Seguros Médicos de Gastos Mayores",
    technicalSpecs: {
      "Técnica": "Pleurectomía visceral y parietal minuciosa con preservación de parénquima pulmonar",
      "Abordaje": "VATS para estadios II/III tempranos o toracotomía ahorradora de músculo para estadios III tardíos"
    },
    image: "/procedimientos/decorticacion-pleural.jpg",
    seo: {
      title: "Decorticación Pleural por VATS | Dr. Raúl Vega",
      description: "Cirugía de liberación pulmonar en CDMX. Decorticación por VATS con cirujano torácico especialista en Interlomas.",
      keywords: ["decorticacion pleural cdmx", "decorticacion por vats", "limpieza de pleura", "cirujano pulmonar interlomas"]
    }
  },
  {
    id: "biopsia-pulmonar-pleural-vats",
    slug: "biopsia-pulmonar-pleural-vats",
    name: "Biopsia Pulmonar, Pleural y Mediastinal por VATS",
    description: "Procedimiento diagnóstico mínimamente invasivo para la toma de muestras de tejido pulmonar, pleura o ganglios mediastinales para análisis histopatológico.",
    longDescription: "Cuando los estudios de imagen (TAC/PET) muestran infiltrados pulmonares difusos, nódulos no accesibles por broncoscopía o engrosamientos pleurales sospechosos, la biopsia por VATS proporciona muestras quirúrgicas de excelente tamaño para un diagnóstico anatomopatológico y genético de certeza.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 75 minutos",
    recoveryTime: "24 a 48 horas de estancia hospitalaria",
    isPainful: false,
    benefits: [
      "Diagnóstico de certeza histopatológica y molecular (100% de precisión)",
      "Incisiones mínimas con rápida cicatrización",
      "Permite evaluar múltiples lóbulos o zonas pleurales en una sola sesión",
      "Mínima molestia postoperatoria"
    ],
    postOpRecommendations: [
      "Reposo relativo por 5 a 7 días",
      "Seguimiento de resultados de patología en 5 días hábiles",
      "Revisión de herida quirúrgica"
    ],
    priceRange: "Acepta Seguros Médicos por Reembolso",
    technicalSpecs: {
      "Muestra": "Biopsia en cuña con engrapadora endoscópica mecánica (Endo-GIA)",
      "Pruebas asociadas": "Histopatología estándar, inmunohistoquímica y secuenciación genética de tumores"
    },
    image: "/procedimientos/biopsia-pulmonar.jpg",
    seo: {
      title: "Biopsia Pulmonar y Pleural por VATS en CDMX | Dr. Raúl Vega",
      description: "Toma de biopsia de pulmón, pleura y mediastino por VATS en CDMX. Diagnóstico certero con cirujano torácico especialista.",
      keywords: ["biopsia pulmonar vats cdmx", "biopsia pleural minima invasion", "diagnostico nodulo pulmonar", "cirujano toracico cdmx"]
    }
  },
  {
    id: "timectomia-quirurgica-vats",
    slug: "timectomia-quirurgica-vats",
    name: "Timectomía Quirúrgica Radical por VATS",
    description: "Extirpación completa de la glándula tímica y grasa mediastinal anterior para el manejo de timomas y el tratamiento de la Miastenia Gravis autoinmune.",
    longDescription: "La timectomía VATS (videotoracoscópica) permite la resección total del glándula tímica situada detrás del esternón a través de 3 incisiones milimétricas en un costado del tórax, evitando la apertura del esternón (esternotomía).",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "120 a 180 minutos",
    recoveryTime: "48 a 72 horas de hospitalización",
    isPainful: false,
    benefits: [
      "Extirpación completa del timo y grasa pleuropericárdica",
      "Evita la esternotomía media tradicional y su larga convalecencia",
      "Mejora significativa o remisión en síntomas de Miastenia Gravis",
      "Resultado estético y funcional superior"
    ],
    postOpRecommendations: [
      "Monitoreo neurológico y control de medicación miasténica postquirúrgica",
      "Fisioterapia respiratoria asistida",
      "Evitar cargar peso mayor a 5 kg durante 1 mes"
    ],
    priceRange: "Cubierto por Seguros de Gastos Médicos Mayores",
    technicalSpecs: {
      "Abordaje": "VATS Subxifoideo o Toracoscópico Izquierdo/Derecho",
      "Límites de resección": "Desde los cuernos tímicos cervicales hasta los ángulos cardiofrénicos bilaterales"
    },
    image: "/procedimientos/timectomia-quirurjica.jpg",
    seo: {
      title: "Timectomía Quirúrgica por VATS en CDMX | Dr. Raúl Vega",
      description: "Extirpación de timo por VATS sin esternotomía para timoma y miastenia gravis en CDMX e Interlomas. Cirujano torácico experto.",
      keywords: ["timectomia por vats cdmx", "cirugia de timoma sin esternotomia", "miastenia gravis timectomia", "cirujano toracico interlomas"]
    }
  },
  {
    id: "reseccion-traqueal-traqueoplastia",
    slug: "reseccion-traqueal-traqueoplastia",
    name: "Resección Traqueal y Traqueoplastia de Reconstrucción",
    description: "Cirugía compleja de vía aérea para extirpar segmentos estrechados (estenosis) o tumorales de la tráquea y reconstruir la luz traqueal normal mediante anastomosis.",
    longDescription: "La traqueoplastia con resección cricotraqueal o traqueal término-terminal es el procedimiento de elección para pacientes con estenosis traqueal post-intubación o tumores de tráquea. El cirujano extirpa el segmento lesionado y sutura los extremos sanos con técnica de alta precisión para restaurar el paso del aire sin necesidad de traqueostomía.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General con Ventilación Cruzada en Campo Quirúrgico",
    duration: "2.5 a 4 horas",
    recoveryTime: "5 a 7 días de hospitalización",
    isPainful: false,
    benefits: [
      "Eliminación definitiva de la estenosis y retiro de cánulas de traqueostomía",
      "Restauración inmediata de la respiración natural y la voz",
      "Cirugía de reconstrucción anatómica duradera sin requerir prótesis permanentes"
    ],
    postOpRecommendations: [
      "Mantener posición de flexión cervical leve con mentonera durante 7 a 10 días",
      "Evitar la extensión del cuello para no tensionar las suturas traqueales",
      "Broncoscopía de revisión a las 2 semanas postoperatorias"
    ],
    priceRange: "Valoración previa y cobertura por Seguros de Gastos Médicos",
    technicalSpecs: {
      "Anastomosis": "Sutura continua o puntos separados con material monofilamento reabsorbible de lenta degradación",
      "Maniobras de liberación": "Liberación hioidea o laríngea según la longitud de la resección"
    },
    image: "/procedimientos/reconstruccion-traqueal.jpg",
    seo: {
      title: "Resección Traqueal y Traqueoplastia en CDMX | Dr. Raúl Vega",
      description: "Cirugía de reconstrucción traqueal para estenosis post-intubación y tumores de vía aérea en CDMX. Cirujano torácico especialista.",
      keywords: ["reseccion traqueal cdmx", "traqueoplastia estenosis", "cirugia de via aerea alta", "retiro de traqueostomia cirugia"]
    }
  },
  {
    id: "plicatura-diafragmatica-vats",
    slug: "plicatura-diafragmatica-vats",
    name: "Plicatura Diafragmática y Reparación de Hernia Diafragmática",
    description: "Reparación quirúrgica de defectos o parálisis del diafragma para descender el músculo abombado y permitir la expansión completa del pulmón.",
    longDescription: "En pacientes con parálisis o eventración del diafragma, el músculo elevado comprime el pulmón impidiendo la entrada de aire. Mediante la plicatura por VATS, se realizan suturas para tensar el diafragma, devolviéndolo a su posición anatómica inferior y liberando el pulmón.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 120 minutos",
    recoveryTime: "48 horas de hospitalización",
    isPainful: false,
    benefits: [
      "Alivio inmediato de la falta de aire al estar acostado o hacer esfuerzo",
      "Restauración del volumen pulmonar funcional",
      "Técnica mínimamente invasiva por VATS con dolor reducido"
    ],
    postOpRecommendations: [
      "Ejercicios de fisioterapia respiratoria graduada",
      "Evitar aumentos de presión intraabdominal (evitar pujar o levantar cosas pesadas)",
      "Control de radiografía de tórax de seguimiento"
    ],
    priceRange: "Acepta Seguros Médicos por Reembolso",
    technicalSpecs: {
      "Plicatura": "Suturas invaginantes interrumpidas con parches de teflón/fieltros de refuerzo",
      "Hernias": "Reducción y cierre de defecto con o sin malla según tamaño del anillo"
    },
    image: "/procedimientos/plicatura-diafragmatica.jpg",
    seo: {
      title: "Plicatura Diafragmática por VATS en CDMX | Dr. Raúl Vega",
      description: "Cirugía de parálisis y eventración diafragmática por VATS en CDMX e Interlomas. Cirujano torácico especialista.",
      keywords: ["plicatura diafragmatica vats", "hernia diafragmatica cirugia cdmx", "paralisis del diafragma tratamiento", "cirujano toracico interlomas"]
    }
  },
  {
    id: "osteosintesis-costal-fijacion-fracturas",
    slug: "osteosintesis-costal-fijacion-fracturas",
    name: "Osteosíntesis Costal y Fijación de Fracturas con Placas de Titanio",
    description: "Reconstrucción y estabilización quirúrgica de la pared torácica mediante placas y tornillos de titanio en fracturas de costilla desplazadas o tórax inestable.",
    longDescription: "Las fracturas costales múltiples o el tórax inestable (volet costal) generan un dolor insoportable y comprometen la ventilación pulmonar. La osteosíntesis costal fija anatómicamente los fragmentos rotos mediante placas flexibles de titanio contorneadas a la forma de la costilla.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 150 minutos",
    recoveryTime: "2 a 3 días de estancia hospitalaria",
    isPainful: false,
    benefits: [
      "Disminución drástica e inmediata del dolor por fractura costal",
      "Eliminación de la movilidad paradójica del tórax inestable",
      "Reducción en el tiempo de intubación y ventilador en cuidados intensivos",
      "Prevención de deformidad ósea permanente y neuralgia intercostal crónica"
    ],
    postOpRecommendations: [
      "Movilización precoz del brazo del lado afectado",
      "Ejercicios respiratorios para prevenir neumonías por atelectasia",
      "Control tomográfico de consolidación ósea"
    ],
    priceRange: "Cubierto por Seguros de Gastos Médicos (Accidentes / Trauma)",
    technicalSpecs: {
      "Material": "Placas y grapas anatómicas de titanio puro biocompatible (Sistema MatrixRIB)",
      "Abordaje": "Incisiones mínimas dirigidas por ecografía/TAC preoperatorio"
    },
    image: "/procedimientos/fijacion-trauma-toracico.jpg",
    seo: {
      title: "Fijación de Fracturas Costales con Titanio | Dr. Raúl Vega",
      description: "Osteosíntesis y fijación de costillas rotas con placas de titanio en CDMX. Cirujano especializado en trauma torácico e Interlomas.",
      keywords: ["fijacion de fracturas costales cdmx", "placas de titanio costillas", "osteosintesis toracica cdmx", "cirugia trauma de torax"]
    }
  },
  {
    id: "reseccion-reconstruccion-pared-toracica",
    slug: "reseccion-reconstruccion-pared-toracica",
    name: "Resección y Reconstrucción de Pared Torácica",
    description: "Reconstrucción esquelética y de partes blandas de la caja torácica tras resecciones amplio por tumores óseos, de esternón o cartílagos costales.",
    longDescription: "Cuando una lesión tumoral afecta la estructura rígida de las costillas o el esternón, se realiza la exéresis en bloque del tejido afectado y la inmediata reconstrucción rígida mediante mallas sintéticas y barras de titanio, preservando la dinámica respiratoria.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "2.5 a 4 horas",
    recoveryTime: "3 a 5 días de hospitalización",
    isPainful: false,
    benefits: [
      "Resección tumoral amplia con márgenes de seguridad oncológicos",
      "Estabilidad estructural inmediata de la pared del tórax",
      "Preservación de la mecánica respiratoria sin restricción ventilatoria",
      "Excelente resultado cosmético y funcional"
    ],
    postOpRecommendations: [
      "Fisioterapia respiratoria asistida y espirometría",
      "Seguimiento con oncología quirúrgica y médica",
      "Cuidados de la herida quirúrgica y drenajes"
    ],
    priceRange: "Cubierto por Seguros de Gastos Médicos Mayores",
    technicalSpecs: {
      "Reconstrucción": "Malla de polipropileno/metilmetacrilato y barras de titanio parietal",
      "Abordaje": "Incisión conservadora musculocutánea"
    },
    image: "/procedimientos/reconstruccion-pared-toracica.jpg",
    seo: {
      title: "Resección y Reconstrucción de Pared Torácica | Dr. Raúl Vega",
      description: "Cirugía oncológica y reconstrucción de la pared torácica y costillas en CDMX. Resección tumoral y titanio con cirujano torácico.",
      keywords: ["reconstruccion pared toracica cdmx", "tumores de costillas cirugia", "reserccion esquelética torax", "cirujano toracico interlomas"]
    }
  }
];
