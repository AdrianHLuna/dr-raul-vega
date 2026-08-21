import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "cancer-de-pulmon",
    slug: "cancer-de-pulmon",
    name: "Cáncer de Pulmón y Nódulo Pulmonar Sospechoso",
    technicalName: "Neoplasia Maligna Pulmonar / Carcinoma Broncogénico",
    description: "Crecimiento descontrolado de células anormales en el tejido pulmonar que forma tumores malignos. Requiere estadificación precisa y abordaje quirúrgico oncológico mediante resección o lobectomía (VATS/abierta).",
    symptoms: [
      "Tos persistente que no cede o empeora con el tiempo",
      "Hemoptisis (expectoración con sangre)",
      "Disnea (falta de aire) y dolor torácico localizado o referido",
      "Pérdida de peso inexplicable, fatiga severa y disfonía (ronquera)"
    ],
    causes: [
      "Exposición activa o pasiva al humo de tabaco",
      "Exposición laboral a asbesto, radón, arsénico o biomasa (humo de leña)",
      "Predisposición genética y mutaciones oncogénicas episódicas"
    ],
    riskFactors: [
      "Tabaquismo crónico de alto índice paquetes/año",
      "Antecedentes familiares directos de neoplasias torácicas",
      "Enfermedad pulmonar obstructiva crónica (EPOC) de larga evolución"
    ],
    mexicoStats: "Representa una de las principales causas de mortalidad por cáncer en México, siendo la detección temprana por TAC de baja dosis el pilar de supervivencia.",
    complications: [
      "Metástasis a ganglios mediastinales, cerebro, hueso o hígado",
      "Derrame pleural maligno con colapso pulmonar secundario",
      "Síndrome de vena cava superior por compresión mediastinal"
    ],
    treatments: [
      "Lobectomía o segmentectomía pulmonar oncológica por VATS mínimamente invasiva",
      "Linfadenectomía mediastinal sistemática y estadificación ganglionar",
      "Resección en cuña para diagnóstico de nódulos solitarios periféricos",
      "Protocolo multidisciplinario oncológico (radioterapia y terapias dirigidas pre/postoperatorias)"
    ],
    faqs: [
      {
        question: "¿Un nódulo pulmonar en tomografía siempre es cáncer?",
        answer: "No. Más del 70% de los nódulos detectados son benignos (granulomas, cicatrices previa infección o quistes). No obstante, requieren evaluación por el cirujano torácico mediante escala de riesgo y seguimiento o biopsia."
      },
      {
        question: "¿Qué ventajas ofrece la cirugía torácica videoasistida (VATS)?",
        answer: "La técnica VATS permite realizar resecciones pulmonares complejas a través de incisiones milimétricas sin separar costillas, lo que reduce drásticamente el dolor postoperatorio, acorta la estancia hospitalaria y acelera la incorporación a las actividades diarias."
      }
    ],
    image: "/enfermedades/cancer-pulmon.jpg",
    seo: {
      title: "Cirugía de Cáncer de Pulmón en CDMX | Dr. Raúl Vega",
      description: "Cirujano torácico especialista en cirugía oncológica pulmonar por VATS mínimamente invasiva en CDMX e Interlomas. Diagnóstico y lobectomía.",
      keywords: ["cancer de pulmon cdmx", "cirujano toracico interlomas", "lobectomia vats cdmx", "nodulo pulmonar biopsia"]
    }
  },
  {
    id: "derrame-pleural-empiema",
    slug: "derrame-pleural-empiema",
    name: "Derrame Pleural y Empiema Pleural",
    technicalName: "Derrame Pleural Exudativo / Empiema Pleural Infeccioso",
    description: "Acumulación anormal de líquido o pus (empiema) en la cavidad pleural entre el pulmón y la pared torácica que comprime el tejido pulmonar impidiendo la respiración adecuada.",
    symptoms: [
      "Dificultad respiratoria progresiva o repentina (disnea)",
      "Dolor torácico pleurítico de intensidad punzante que empeora al inspirar",
      "Fiebre persistente, escalofríos y diaforesis nocturna en empiema",
      "Tos seca irritativa e intolerancia al decúbito"
    ],
    causes: [
      "Infecciones pulmonares bacterianas complicadas (neumonía parapneumónica)",
      "Procesos oncológicos pleuro-pulmonares o metastásicos",
      "Traumatismo torácico, perforación esofágica o insuficiencia orgánica"
    ],
    riskFactors: [
      "Neumonías mal tratadas o de resolución tardía",
      "Inmunosupresión, diabetes mellitus o desnutrición severa",
      "Procedimientos torácicos invasivos previa complicación"
    ],
    mexicoStats: "La neumonía con derrame pleural complicado es una causa frecuente de hospitalización quirúrgica torácica de urgencia en México.",
    complications: [
      "Encapsulamiento pleural y paquipleuritis (corteza pleural rígida)",
      "Sepsis de origen torácico y fístula broncopleural",
      "Atrofia o restricción pulmonar permanente por atrapamiento"
    ],
    treatments: [
      "Toracostomía con colocación de sonda endopleural bajo control ecográfico",
      "Decorticación pleural por VATS para liberar el pulmón",
      "Pleurodesis química o quirúrgica para derrames malignos recurrentes",
      "Instilación intrapleural de fibrinolíticos en derrames loculados"
    ],
    faqs: [
      {
        question: "¿Cuándo requiere cirugía un derrame pleural?",
        answer: "Cuando el líquido contiene pus (empiema), cuando está tabicado/loculado o cuando la sonda de drenaje es insuficiente para expandir el pulmón, indicando la necesidad de debridación por VATS."
      },
      {
        question: "¿El drenaje pleural es doloroso?",
        answer: "El procedimiento se realiza bajo anestesia local o sedación profunda supervisada, asegurando analgesia adecuada y alivio inmediato de la disnea."
      }
    ],
    image: "/enfermedades/derrame-pleural.jpg",
    seo: {
      title: "Derrame Pleural y Empiema Pleural en CDMX | Dr. Raúl Vega",
      description: "Tratamiento quirúrgico para derrame pleural y empiema en CDMX. Toracostomía, decorticación por VATS y pleurodesis con cirujano torácico.",
      keywords: ["derrame pleural cdmx", "empiema pleural tratamiento", "decorticacion por vats", "cirujano pulmonar interlomas"]
    }
  },
  {
    id: "neumotorax-espontaneo-bullas",
    slug: "neumotorax-espontaneo-bullas",
    name: "Neumotórax Espontáneo y Bullas Pulmonares",
    technicalName: "Neumotórax Espontáneo Primario / Secundario a Bullas",
    description: "Presencia de aire en la cavidad pleural, generalmente debido a la ruptura de pequeñas bullas en la superficie del pulmón, lo que puede provocar su colapso parcial o total.",
    symptoms: [
      "Dolor torácico repentino, agudo y punzante en el lado afectado",
      "Disnea (falta de aire) de inicio súbito",
      "Sensación de tirantez o chasquido en el tórax",
      "Disminución de la expansión torácica y taquicardia compensatoria"
    ],
    causes: [
      "Ruptura espontánea de pequeñas bullas localizadas en la superficie del pulmón.",
      "Enfisema bulloso secundario a tabaquismo o EPOC en adultos mayores",
      "Traumatismo torácico o barotrauma"
    ],
    riskFactors: [
      "Hábito tabáquico (aumenta el riesgo más de 20 veces)",
      "Constitución física ectomórfica (alta y delgada)",
      "Enfermedades del tejido conectivo o antecedentes de neumotórax previo"
    ],
    mexicoStats: "La recurrencia del neumotórax espontáneo sin manejo quirúrgico alcanza hasta un 50% tras el primer episodio.",
    complications: [
      "Neumotórax a tensión (emergencia vital con colapso hemodinámico)",
      "Hemoneumotórax (presencia combinada de sangre y aire)",
      "Fuga aérea persistente por más de 5 a 7 días"
    ],
    treatments: [
      "Colocación de catéter pleural o sonda endopleural para evacuación de aire",
      "Bullectomía (resección de bullas pulmonares) por VATS mínimamente invasiva",
      "Pleurectomía apical o abrasión pleural para prevenir recaídas al 99%",
      "Sellado biológico de fugas aéreas pulmonares"
    ],
    faqs: [
      {
        question: "¿Por qué vuelve a dar un neumotórax si solo se puso sonda?",
        answer: "La sonda evacúa el aire acumulado, pero si la bulla pulmonar que causó la fuga sigue en el pulmón, puede volver a romperse. La cirugía VATS elimina la bulla y sella la pleura definitivamente."
      },
      {
        question: "¿Cuándo se puede volar en avión tras un neumotórax?",
        answer: "Se debe evitar viajar en avión hasta contar con alta médica definitiva y resolución tomográfica completa, generalmente entre 4 y 6 semanas post-resolución."
      }
    ],
    image: "/enfermedades/neumotorax-expontaneo.jpg",
    seo: {
      title: "Neumotórax Espontáneo y Cirugía de Bullas | Dr. Raúl Vega",
      description: "Tratamiento definitivo para neumotórax espontáneo y bullas pulmonares en CDMX. Bullectomía y pleurodesis por VATS con cirujano torácico.",
      keywords: ["neumotorax espontaneo cdmx", "cirugia de bullas pulmonares", "bullectomia por vats", "colapso pulmonar tratamiento"]
    }
  },
  {
    id: "tumores-mediastino-timoma",
    slug: "tumores-mediastino-timoma",
    name: "Tumores del Mediastino y Timoma (Miastenia Gravis)",
    technicalName: "Neoplasia del Mediastino Anterior / Timoma Epitelial",
    description: "Lesiones tumorales ubicadas en el espacio anatómico entre ambos pulmones (mediastino). Los timomas representan la tumoración más frecuente del mediastino anterior y frecuentemente se asocian a Miastenia Gravis.",
    symptoms: [
      "Debilidad muscular fluctuante y fatiga anormal (en Miastenia Gravis)",
      "Sensación de opresión o peso retroesternal en el pecho",
      "Tos persistente, disnea por compresión o dificultad para tragar (disfagia)",
      "Disfonía por compromiso del nervio laríngeo recurrente"
    ],
    causes: [
      "Proliferación neoplásica del epitelio tímico (timoma o carcinoma tímico)",
      "Alteración del desarrollo embrionario (quistes mediastinales broncogénicos)",
      "Procesos linfoproliferativos o tumores de células germinales"
    ],
    riskFactors: [
      "Diagnóstico verificado de Miastenia Gravis autoinmune",
      "Edad entre 40 y 60 años para neoplasias tímicas primarias"
    ],
    mexicoStats: "La timectomía quirúrgica es el procedimiento indicado en pacientes con timoma y en casos seleccionados de Miastenia Gravis generalizada.",
    complications: [
      "Crisis miasténica respiratoria por debilidad diafragmática",
      "Invasión de pericardio, vena cava superior o pleura",
      "Síndrome para-neoplásico autoinmune"
    ],
    treatments: [
      "Timectomía radical por técnica VATS videotoracoscópica de mínima invasión",
      "Resección de tumores mediastinales anteriores, medios y posteriores",
      "Exéresis y destechamiento de quistes mediastinales pericárdicos o broncogénicos",
      "Evaluación y manejo multidisciplinario con neurología y oncología"
    ],
    faqs: [
      {
        question: "¿La timectomía ayuda a mejorar la Miastenia Gravis?",
        answer: "Sí. En pacientes con timoma o miastenia gravis no timomatosa, la timectomía completa induce la remisión o reducción sustancial en la dosis de fármacos requeridos en un porcentaje muy alto de casos."
      },
      {
        question: "¿Se requiere abrir el esternón para quitar el timo?",
        answer: "Actualmente, la gran mayoría de los timomas estadios I y II se operan por VATS a través de pequeñas incisiones intercostales, evitando la esternotomía media tradicional."
      }
    ],
    image: "/enfermedades/tumores-mediastino.jpg",
    seo: {
      title: "Tumores del Mediastino y Timectomía por VATS | Dr. Raúl Vega",
      description: "Cirugía especializada de tumores mediastinales y timectomía por VATS para timoma y miastenia gravis en CDMX. Cirujano torácico en Interlomas.",
      keywords: ["timoma cirugia cdmx", "timectomia vats miastenia gravis", "tumores de mediastino cdmx", "cirujano de torax interlomas"]
    }
  },
  {
    id: "hiperhidrosis-primaria",
    slug: "hiperhidrosis-primaria",
    name: "Hiperhidrosis Primaria (Sudoración Excesiva)",
    technicalName: "Hiperhidrosis Focal Primaria Palmar / Axilar / Facial",
    description: "Trastorno del sistema nervioso simpático caracterizado por sudoración excesiva, incontrolable y desproporcionada en palmas de las manos, axilas o rostro, afectando severamente la calidad de vida.",
    symptoms: [
      "Sudoración profusa en palmas de las manos que gotea continuamente",
      "Sudoración axilar severa que empapa la ropa en minutos",
      "Brote de sudor facial o rubor desmedido ante estímulos mínimos",
      "Piel fría, húmeda y maceración epidérmica en manos o pies"
    ],
    causes: [
      "Hiperactividad constitucional de la cadena ganglionar simpática torácica",
      "Predisposición genética e hiperrespuesta neurológica vegetativa"
    ],
    riskFactors: [
      "Antecedentes familiares de sudoración palmar o axilar excesiva",
      "Inicio de síntomas durante la infancia o adolescencia"
    ],
    mexicoStats: "La simpatectomía torácica por VATS tiene un índice de satisfacción superior al 95% en pacientes seleccionados en México.",
    complications: [
      "Dermatitis de contacto, infecciones micóticas o bacterianas secundarias",
      "Aislamiento social, ansiedad severa e impacto laboral/académico",
      "Dificultad para manipular papel, dispositivos táctiles o herramientas"
    ],
    treatments: [
      "Simpatectomía Torácica Bilateral por VATS ultra-mínimamente invasiva (1 o 2 puertos de 5 mm)",
      "Interrupción quirúrgica de precisión del segmento ganglionar T2, T3 o T4 según zona afectada",
      "Protocolo de evaluación previo para descartar causas endocrinas secundarias",
      "Cuidados postoperatorios amigables de recuperación ambulatoria rápida"
    ],
    faqs: [
      {
        question: "¿El resultado de la cirugía de sudoración en manos es inmediato?",
        answer: "Sí. Durante la misma intervención en quirófano, en el momento en que se interrumpe la cadena simpática, las manos se vuelven secas y calientes de forma instantánea."
      },
      {
        question: "¿Qué es la sudoración compensatoria?",
        answer: "Es un efecto secundario en el cual el cuerpo redistribuye el sudor hacia la espalda o abdomen. Con las técnicas modernas de interrupción ganglionar seleccionada (T3-T4), este efecto es leve y tolerable."
      }
    ],
    image: "/enfermedades/hiperhidrosis-palmar.jpg",
    seo: {
      title: "Simpatectomía Torácica para Hiperhidrosis | Dr. Raúl Vega",
      description: "Solución definitiva para la sudoración excesiva en manos y axilas mediante simpatectomía torácica por VATS en CDMX e Interlomas. Cirujano especializado.",
      keywords: ["hiperhidrosis cirugia cdmx", "simpatectomia toracica vats", "sudoracion excesiva manos cdmx", "tratamiento hiperhidrosis palmar"]
    }
  },
  {
    id: "trauma-toracico-fracturas-costales",
    slug: "trauma-toracico-fracturas-costales",
    name: "Trauma Torácico, Fracturas Costales y Tórax Inestable",
    technicalName: "Traumatismo Torácico Cerrado/Penetrante & Volet Costal",
    description: "Lesiones traumáticas en la caja torácica ocasionadas por accidentes de tránsito, caídas o contusiones que producen fracturas de costillas, inestabilidad de la pared y contusión pulmonar.",
    symptoms: [
      "Dolor intenso en la pared torácica al respirar, toser o moverse",
      "Respiración paradójica (movimiento inverso de la pared en tórax inestable)",
      "Crepitación ósea a la palpación y disnea progresiva",
      "Hemoptisis o enfisema subcutáneo (burbujas de aire bajo la piel)"
    ],
    causes: [
      "Accidentes automovilísticos o de motocicleta a alta velocidad",
      "Caídas de altura o traumas laborales en construcción",
      "Impactos deportivos de alta energía"
    ],
    riskFactors: [
      "Osteoporosis o fragilidad ósea en adultos mayores",
      "Manejo de maquinaria pesada o actividades de alto impacto"
    ],
    mexicoStats: "El traumatismo de tórax representa una causa frecuente de ingreso a áreas de urgencias y terapia intensiva quirúrgica.",
    complications: [
      "Contusión pulmonar severa e insuficiencia respiratoria aguda",
      "Hemotórax masivo o neumotórax a tensión",
      "Deformidad permanente de pared torácica y dolor crónico incapacitante"
    ],
    treatments: [
      "Fijación quirúrgica y osteosíntesis de fracturas costales con placas de titanio",
      "Estabilización quirúrgica del tórax inestable (volet torácico)",
      "Evacuación de hemotórax retenido o neumotórax traumático por VATS",
      "Manejo avanzado del dolor intercostal y terapia física respiratoria"
    ],
    faqs: [
      {
        question: "¿Todas las fracturas de costilla se deben operar?",
        answer: "No. Las fracturas aisladas no desplazadas suelen manejarse con analgesia y reposo. La cirugía (osteosíntesis) se reserva para fracturas desplazadas, tórax inestable, dolor incoercible o compromiso respiratorio."
      },
      {
        question: "¿Qué ventajas tiene fijar las costillas con placas de titanio?",
        answer: "Restaura la anatomía y mecánica respiratoria inmediatamente, reduce el dolor drásticamente, disminuye días de ventilador en terapia intensiva y evita secuelas dolorosas crónicas."
      }
    ],
    image: "/enfermedades/traumatismo-torax.jpg",
    seo: {
      title: "Fijación de Fracturas Costales y Trauma de Tórax | Dr. Raúl Vega",
      description: "Cirugía especializada para fracturas costales, tórax inestable y traumatismo torácico en CDMX. Osteosíntesis con placas de titanio y VATS.",
      keywords: ["fracturas costales cirugia cdmx", "fijacion de costillas placas titanio", "torax inestable tratamiento", "trauma toracico cirujano"]
    }
  },
  {
    id: "deformidades-toracicas-pectus",
    slug: "deformidades-toracicas-pectus",
    name: "Deformidades Torácicas (Pectus Excavatum y Carinatum)",
    technicalName: "Pectus Excavatum / Pectus Carinatum / Deformidad Torácica Congénita",
    description: "Alteraciones estructurales en el desarrollo del esternón y cartílagos costales que provocan depresión (pecho hundido) o prominencia (pecho en quilla), afectando la mecánica respiratoria, función cardíaca y calidad de vida.",
    symptoms: [
      "Hundimiento prominente del esternón (Pectus Excavatum) o protrusión anterior (Pectus Carinatum)",
      "Intolerancia al ejercicio, disnea de esfuerzo y palpitaciones",
      "Dolor torácico o molestia en la pared anterior del tórax",
      "Impacto psicológico, postura encorvada e incomodidad estética"
    ],
    causes: [
      "Crecimiento desproporcionado o anómalo de los cartílagos costales",
      "Predisposición genética y alteraciones del tejido conectivo (síndrome de Marfan, Ehlers-Danlos)"
    ],
    riskFactors: [
      "Antecedentes familiares de deformidades de la pared torácica",
      "Crecimiento acelerado durante la pubertad y adolescencia"
    ],
    mexicoStats: "El Pectus Excavatum representa más del 80% de las deformidades congénitas de la pared torácica atendidas por cirujanos de tórax.",
    complications: [
      "Compresión o desplazamiento cardíaco hacia el hemotórax izquierdo",
      "Patrón ventilatorio restrictivo con disminución de la capacidad pulmonar",
      "Secuelas psicológicas y aislamiento afectivo en adolescentes y jóvenes"
    ],
    treatments: [
      "Corrección quirúrgica de mínima invasión (Procedimiento de Nuss / MIRPE)",
      "Resección condroesternal y plastia de pared torácica (Técnica de Ravitch modificada)",
      "Evaluación preoperatoria con tomografía de tórax e Índice de Haller",
      "Seguimiento multidisciplinario con rehabilitación cardiopulmonar"
    ],
    faqs: [
      {
        question: "¿A qué edad es recomendable evaluar o corregir un Pectus Excavatum?",
        answer: "La evaluación por el cirujano torácico debe realizarse en cuanto se detecte. El momento óptimo para la corrección quirúrgica mínimamente invasiva (técnica de Nuss) suele ser entre los 12 y 18 años, aunque también se realiza con éxito en adultos jóvenes."
      },
      {
        question: "¿En qué consiste la técnica de Nuss?",
        answer: "Es un procedimiento de mínima invasión que coloca una o dos barras de titanio precurvadas por detrás del esternón mediante videotoracoscopia para elevar la depresión sin cortar huesos ni cartílagos."
      }
    ],
    image: "/enfermedades/deformidades-toracicas.jpg",
    seo: {
      title: "Cirugía de Pectus Excavatum y Deformidades Torácicas | Dr. Raúl Vega",
      description: "Tratamiento quirúrgico especializado para Pectus Excavatum y Carinatum en CDMX e Interlomas. Técnica de Nuss y Ravitch con cirujano torácico.",
      keywords: ["pectus excavatum cirugia cdmx", "procedimiento de nuss cdmx", "deformidades toracicas tratamiento", "cirujano toracico interlomas"]
    }
  },
  {
    id: "estenosis-traqueal-tumores-traquea",
    slug: "estenosis-traqueal-tumores-traquea",
    name: "Estenosis Traqueal y Tumores de la Tráquea",
    technicalName: "Estenosis Traqueal Post-Intubación / Neoplasia Traqueal",
    description: "Estrechamiento de la luz traqueal o presencia de tumores en la vía aérea principal que condicionan obstrucción respiratoria alta severa y sofocación progresiva.",
    symptoms: [
      "Estridor inspiratorio (ruido silbante o agudo al meter aire)",
      "Dificultad respiratoria severa (disnea de vía aérea superior)",
      "Tos perruna metálica y dificultad para movilizar secreciones",
      "Sensación de ahogo o asfixia posicional"
    ],
    causes: [
      "Secuela de intubación endotraqueal prolongada o traqueostomía previa",
      "Neoplasias primarias de tráquea (carcinoma adenoide quístico, epidermoide)",
      "Traumatismo traqueal o infecciones granulomatosas"
    ],
    riskFactors: [
      "Antecedentes de internamiento en terapia intensiva con ventilación mecánica",
      "Cáncer de cabeza, cuello o tiroides con invasión traqueal"
    ],
    mexicoStats: "La estenosis traqueal post-intubación ha incrementado considerablemente tras complicaciones respiratorias agudas graves.",
    complications: [
      "Obstrucción aguda completa de la vía aérea e insuficiencia respiratoria catastrófica",
      "Fístula traqueoesofágica o traqueoinnominada",
      "Infecciones traqueobronquiales recurrentes"
    ],
    treatments: [
      "Resección traqueal segmentaria y anastomosis traqueo-traqueal término-terminal (Traqueoplastia de reconstrucción)",
      "Dilatación traqueal rígida endoscópica y colocación de Stent traqueal",
      "Resección de tumores traqueales con preservación funcional de vía aérea",
      "Manejo multidisciplinario con neumología intervencionista y anestesiología torácica"
    ],
    faqs: [
      {
        question: "¿La estenosis traqueal se puede curar definitivamente?",
        answer: "Sí. La resección traqueal y anastomosis con sutura directa (quitar el segmento estrecho y reconectar la tráquea sana) es la cirugía curativa con mejor tasa de éxito a largo plazo."
      },
      {
        question: "¿Qué síntomas indican que la tráquea se está cerrando?",
        answer: "El síntoma cardinal es el estridor (silbido en el cuello al respirar) junto con falta de aire progresiva en alguien que estuvo intubado semanas antes."
      }
    ],
    image: "/enfermedades/estenosis-traqueal.jpg",
    seo: {
      title: "Cirugía de Estenosis Traqueal y Tráquea en CDMX | Dr. Raúl Vega",
      description: "Reconstrucción y resección de estenosis traqueal post-intubación y tumores de tráquea en CDMX e Interlomas. Cirujano torácico especialista.",
      keywords: ["estenosis traqueal cirugia cdmx", "reseccion traqueal traqueoplastia", "tumores de traquea tratamiento", "cirujano de via aerea cdmx"]
    }
  },
  {
    id: "quistes-mediastinales",
    slug: "quistes-mediastinales",
    name: "Quistes Mediastinales (Broncogénicos y Pericárdicos)",
    technicalName: "Quiste Congénito Broncogénico / Pleuropericárdico / Esofágico",
    description: "Malformaciones quísticas benignas congénitas o adquiridas ubicadas en el mediastino que pueden infectarse, sangrar o comprimir estructuras vitales vecinas.",
    symptoms: [
      "Asintomático en fases iniciales (hallazgo incidental en radiografía o TAC)",
      "Dolor torácico sordo retroesternal o interescapular",
      "Disfagia (dificultad para tragar) o tos compresiva",
      "Fiebre y dolor agudo en caso de sobreinfección del quiste"
    ],
    causes: [
      "Alteración del brote traqueobronquial o gastrointestinal en el desarrollo embrionario",
      "Quistes pericárdicos por falta de fusión del celoma pericárdico"
    ],
    riskFactors: [
      "Diagnóstico en la edad adulta joven por crecimiento progresivo"
    ],
    mexicoStats: "La resección por VATS es el método de elección para prevenir complicaciones como ruptura o infección.",
    complications: [
      "Ruptura del quiste hacia la cavidad pleural, bronquio u esófago",
      "Sobreinfección con formación de absceso mediastinal",
      "Compresión extrínseca de estructuras vasculares o cardiacas"
    ],
    treatments: [
      "Resección y enucleación completa del quiste por VATS toracoscópica",
      "Destechamiento y marsupialización en quistes pericárdicos adheridos",
      "Análisis histopatológico confirmatorio"
    ],
    faqs: [
      {
        question: "¿Se debe operar un quiste mediastinal si no duele?",
        answer: "Sí, en la mayoría de los casos. Los quistes mediastinales tienden a crecer, infectarse o comprimir órganos vitales. Al removerlos por VATS se evita una cirugía compleja de urgencia futura."
      },
      {
        question: "¿Es una cirugía riesgosa?",
        answer: "Al realizarse mediante técnicas mínimamente invasivas (VATS), los riesgos son bajos y el tiempo de internamiento suele ser de solo 24 a 48 horas."
      }
    ],
    image: "/enfermedades/quistes-mediastinales.jpg",
    seo: {
      title: "Cirugía de Quistes Mediastinales por VATS | Dr. Raúl Vega",
      description: "Resección de quistes broncogénicos y pericárdicos del mediastino por VATS en CDMX. Consulta con cirujano torácico en Interlomas.",
      keywords: ["quiste broncogenico cirugia", "quiste pericardico vats", "tumores mediastinales cdmx", "cirujano toracico interlomas"]
    }
  },
  {
    id: "tumores-neoplasias-pared-toracica",
    slug: "tumores-neoplasias-pared-toracica",
    name: "Tumores y Neoplasias de la Pared Torácica",
    technicalName: "Neoplasia Benigna / Maligna de Costillas y Pared Torácica",
    description: "Tumores primarios o metastásicos que se originan en los arcos costales, esternón o musculatura de la caja torácica, requiriendo resección oncológica y reconstrucción estructural de la pared.",
    symptoms: [
      "Masa palpable o abultamiento visible en la caja torácica o esternón",
      "Dolor torácico localizado continuo o progresivo",
      "Sensación de firmeza o molestia en la pared costal afectada",
      "Deformidad ósea visible a la inspección"
    ],
    causes: [
      "Tumores óseos o cartilaginosos primarios (condrosarcoma, osteosarcoma, displasia fibrosa)",
      "Metástasis a arcos costales o esternón de carcinomas primarios",
      "Lesiones benignas de partes blandas (lipomas, fibromas intercostales)"
    ],
    riskFactors: [
      "Antecedentes de neoplasias en otros órganos",
      "Exposición previa a radioterapia torácica"
    ],
    mexicoStats: "La resección en bloque con reconstrucción de pared mediante mallas sintéticas y barras de titanio preserva la función respiratoria sin secuelas.",
    complications: [
      "Invasión a pleura, pulmón o pericardio adyacente",
      "Inestabilidad o tórax paradójico por defectos óseos extensos no reconstruidos",
      "Compresión de estructuras neurovasculares intercostales"
    ],
    treatments: [
      "Resección tumoral en bloque con márgenes oncológicos de seguridad",
      "Reconstrucción de la pared torácica con malla de prolene/metilmetacrilato o placas de titanio",
      "Evaluación y estadificación tomográfica de alta precisión",
      "Manejo conjunto con oncología quirúrgica y médica"
    ],
    faqs: [
      {
        question: "¿Si me quitan una o dos costillas por un tumor, cómo queda la respiración?",
        answer: "Durante la misma cirugía se realiza la reconstrucción rígida de la pared torácica con mallas o prótesis sintéticas de titanio, lo que mantiene la estabilidad de la caja torácica y permite una respiración normal."
      },
      {
        question: "¿Todos los bultos en las costillas son malignos?",
        answer: "No. Existen lesiones benignas como osteocondromas, displasias fibrosas o granulomas. Es fundamental realizar una tomografía de tórax y valoración por el cirujano torácico para determinar la conducta."
      }
    ],
    image: "/enfermedades/tumores-neoplacias.jpg",
    seo: {
      title: "Tumores y Neoplasias de la Pared Torácica | Dr. Raúl Vega",
      description: "Cirugía oncológica y reconstrucción de la pared torácica y costillas en CDMX. Resección tumoral y placas de titanio con cirujano torácico.",
      keywords: ["tumores pared toracica cdmx", "condrosarcoma costal cirugia", "reconstruccion pared toracica", "cirujano toracico interlomas"]
    }
  },
  {
    id: "hernia-diafragmatica-eventracion",
    slug: "hernia-diafragmatica-eventracion",
    name: "Hernia Diafragmática y Eventración Diafragmática",
    technicalName: "Hernia de Morgagni / Bochdalek / Parálisis y Eventración Diafragmática",
    description: "Defecto estructural o debilidad muscular extrema en el diafragma que permite la migración de órganos abdominales al tórax o condiciona elevación anormal que comprime el pulmón.",
    symptoms: [
      "Disnea (falta de aire) que empeora al acostarse (ortopnea)",
      "Molestia o dolor torácico inferior o epigástrico postprandial",
      "Ruidos intestinales auscultables en el tórax",
      "Sensación de plenitud precoz y sofocación al hacer esfuerzos"
    ],
    causes: [
      "Defecto congénito del desarrollo del diafragma",
      "Traumatismo toracoabdominal cerrado o penetrante previo",
      "Lesión del nervio frénico por trauma o cirugía previa"
    ],
    riskFactors: [
      "Traumatismo abdominal grave previo en accidentes",
      "Aumento severo de la presión intraabdominal"
    ],
    mexicoStats: "La plicatura diafragmática por VATS restaura la función mecánica pulmonar con excelente tasa de éxito.",
    complications: [
      "Estrangulamiento u oclusión de asas intestinales herniadas al tórax",
      "Atelectasia pulmonar severa y restricción ventilatoria",
      "Compresión cardiaca o de grandes vasos"
    ],
    treatments: [
      "Reparación y plastia quirúrgica de hernia diafragmática con colocación de malla de refuerzo",
      "Plicatura diafragmática por VATS toracoscópica para corregir la eventración/parálisis",
      "Reducción de contenido visceral abdominal a su cavidad anatómica"
    ],
    faqs: [
      {
        question: "¿Qué es la plicatura diafragmática por VATS?",
        answer: "Es una técnica quirúrgica mínimamente invasiva donde se realizan pliegues y suturas en el diafragma abombado/paralizado para aplanarlo, descendiendo el músculo y permitiendo que el pulmón vuelva a expandirse."
      },
      {
        question: "¿Una hernia diafragmática traumática puede aparecer años después?",
        answer: "Sí. Un pequeño desgarro no diagnosticado tras un accidente puede agrandarse con los años debido a la diferencia de presiones entre abdomen y tórax."
      }
    ],
    image: "/enfermedades/hernia-diafragmatica.jpg",
    seo: {
      title: "Cirugía de Hernia Diafragmática y Plicatura por VATS | Dr. Raúl Vega",
      description: "Reparación quirúrgica de hernia diafragmática y plicatura por eventración o parálisis diafragmática por VATS en CDMX e Interlomas.",
      keywords: ["hernia diafragmatica cirugia cdmx", "plicatura diafragmatica vats", "eventracion diafragmatica tratamiento", "cirujano toracico interlomas"]
    }
  },
  {
    id: "mesotelioma-pleural",
    slug: "mesotelioma-pleural",
    name: "Mesotelioma Pleural y Neoplasias Pleurales",
    technicalName: "Mesotelioma Maligno Pleural / Neoplasia Pleural Primaria",
    description: "Tumor primario agresivo originado en las células mesoteliales de la pleura, estrechamente asociado a la exposición al asbesto. Requiere diagnóstico por VATS, estadificación y abordaje citorreductor.",
    symptoms: [
      "Dolor torácico sordo y persistente en el hemotórax afectado",
      "Disnea progresiva por derrame pleural recurrente masivo",
      "Pérdida de peso involuntaria, astenia y febrícula nocturna",
      "Asimetría o restricción de la expansión torácica"
    ],
    causes: [
      "Exposición ocupacional o ambiental prolongada a fibras de asbesto / amianto",
      "Infección por virus simio SV40 o predisposición genética epigenética"
    ],
    riskFactors: [
      "Trabajo previo en construcción, astilleros, frenos automotrices o aislamientos",
      "Convivencia con trabajadores expuestos al asbesto"
    ],
    mexicoStats: "El diagnóstico oportuno por videotoracoscopia (VATS) con biopsia amplia permite la pleurodesis precoz y el inicio de terapia multimodal.",
    complications: [
      "Invasión a pared torácica, pericardio y diafragma",
      "Derrame pleural maligno masivo incoercible",
      "Insuficiencia respiratoria restrictiva severa"
    ],
    treatments: [
      "Biopsia pleural dirigida por VATS mínimamente invasiva",
      "Pleurodesis química para control de derrame pleural maligno recidivante",
      "Pleurectomía / Decorticación citorreductora (P/D) en casos seleccionados",
      "Manejo oncológico multidisciplinario (quimioterapia e inmunoterapia pre/postoperatoria)"
    ],
    faqs: [
      {
        question: "¿Cómo se diagnostica de certeza el mesotelioma pleural?",
        answer: "La biopsia tomográfica suele ser insuficiente. La videotoracoscopia (VATS) es el método de elección ('Gold Standard'), ya que permite visualizar directamente la pleura y tomar muestras de grosor completo para inmunohistoquímica."
      },
      {
        question: "¿Qué se puede hacer si el líquido pleural vuelve a acumularse rápidamente?",
        answer: "Se realiza una pleurodesis por VATS, aplicando un agente esclerosante que sella el espacio pleural e impide que el líquido se vuelva a formar, aliviando la falta de aire."
      }
    ],
    image: "/enfermedades/mesotelioma-pleural.jpg",
    seo: {
      title: "Mesotelioma Pleural y Cirugía Pleural en CDMX | Dr. Raúl Vega",
      description: "Diagnóstico por VATS, biopsia y pleurodesis para mesotelioma y tumores pleurales en CDMX e Interlomas. Cirujano torácico especializado.",
      keywords: ["mesotelioma pleural cdmx", "biopsia pleural por vats", "pleurodesis derrame maligno", "cirujano de torax interlomas"]
    }
  }
];
