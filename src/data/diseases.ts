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
      "Hemoptisis (expectoración con sangre o esputo asalmonado)",
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
    image: "/images/diseases/cancer-pulmon.webp",
    seo: {
      title: "Cirugía de Cáncer de Pulmón en CDMX | Dr. Raúl David Vega Vivar",
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
    image: "/images/diseases/derrame-pleural.webp",
    seo: {
      title: "Derrame Pleural y Empiema Pleural en CDMX | Dr. Raúl David Vega Vivar",
      description: "Tratamiento quirúrgico para derrame pleural y empiema en CDMX. Toracostomía, decorticación por VATS y pleurodesis con cirujano torácico.",
      keywords: ["derrame pleural cdmx", "empiema pleural tratamiento", "decorticacion por vats", "cirujano pulmonar interlomas"]
    }
  },
  {
    id: "neumotorax-espontaneo-bullas",
    slug: "neumotorax-espontaneo-bullas",
    name: "Neumotórax Espontáneo y Enfisema Bulloso",
    technicalName: "Neumotórax Espontáneo Primario / Secundario a Bullas",
    description: "Presencia de aire en la cavidad pleural proveniente de la rotura de vesículas o bullas subpleurales, provocando el colapso parcial o total del pulmón.",
    symptoms: [
      "Dolor torácico repentino, agudo y punzante en el lado afectado",
      "Disnea (falta de aire) de inicio súbito",
      "Sensación de tirantez o chasquido en el tórax",
      "Disminución de la expansión torácica y taquicardia compensatoria"
    ],
    causes: [
      "Ruptura de bullas apicares congénitas en adultos jóvenes y delgados",
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
    image: "/images/diseases/neumotorax.webp",
    seo: {
      title: "Neumotórax Espontáneo y Cirugía de Bullas | Dr. Raúl David Vega Vivar",
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
    image: "/images/diseases/timoma-mediastino.webp",
    seo: {
      title: "Tumores del Mediastino y Timectomía por VATS | Dr. Raúl David Vega Vivar",
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
    image: "/images/diseases/hiperhidrosis.webp",
    seo: {
      title: "Simpatectomía Torácica para Hiperhidrosis | Dr. Raúl David Vega Vivar",
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
    image: "/images/diseases/trauma-toracico.webp",
    seo: {
      title: "Fijación de Fracturas Costales y Trauma de Tórax | Dr. Raúl David Vega Vivar",
      description: "Cirugía especializada para fracturas costales, tórax inestable y traumatismo torácico en CDMX. Osteosíntesis con placas de titanio y VATS.",
      keywords: ["fracturas costales cirugia cdmx", "fijacion de costillas placas titanio", "torax inestable tratamiento", "trauma toracico cirujano"]
    }
  },
  {
    id: "enfermedades-intersticiales-biopsia",
    slug: "enfermedades-intersticiales-biopsia",
    name: "Enfermedades Intersticiales Pulmonares (Biopsia Por VATS)",
    technicalName: "Neumopatía Intersticial Difusa (NID) / Fibrosis Pulmonar",
    description: "Grupo heterogéneo de padecimientos que provocan inflamación o cicatrización (fibrosis) progresiva del intersticio pulmonar. Requieren biopsia tisular para diagnóstico histopatológico preciso.",
    symptoms: [
      "Disnea de esfuerzo que empeora de forma paulatina",
      "Tos seca y persistente sin expectoración",
      "Acropaquia (deformidad en palillo de tambor en las uñas de los dedos)",
      "Cansancio crónico y estertores crepitantes tipo 'Velcro' a la auscultación"
    ],
    causes: [
      "Enfermedades autoinmunes y del tejido conectivo (esclerodermia, lupus, AR)",
      "Exposición a polvos orgánicos, inorgánicos o hipersensibilidad",
      "Fibrosis Pulmonar Idiopática (causa desconocida)"
    ],
    riskFactors: [
      "Exposición a aves, moho, asbesto o polvos industriales",
      "Tabaquismo previo o antecedentes familiares de fibrosis"
    ],
    mexicoStats: "La biopsia pulmonar por VATS es la prueba de referencia ('Gold Standard') cuando los estudios tomográficos y de laboratorio no son concluyentes.",
    complications: [
      "Hipertensión arterial pulmonar e insuficiencia cardíaca derecha (Cor Pulmonale)",
      "Exacerbación aguda de la fibrosis pulmonar",
      "Insuficiencia respiratoria crónico-degenerativa"
    ],
    treatments: [
      "Biopsia pulmonar quirúrgica asistida por video (VATS) para obtención de muestras en múltiples lóbulos",
      "Procedimiento ambulatorio o de corta estancia con incisiones de 1 a 2 cm",
      "Coordinación estrecha con neumología e histopatología especializada",
      "Cuidados postoperatorios de preservación funcional pulmonar"
    ],
    faqs: [
      {
        question: "¿Por qué es necesaria la biopsia si ya tengo tomografía?",
        answer: "Existen más de 200 tipos de enfermedades intersticiales. Muchas se ven similares en TAC, pero requieren tratamientos completamente distintos (inmunosupresores vs antifibróticos). La biopsia da el diagnóstico histológico exacto."
      },
      {
        question: "¿Es segura la biopsia pulmonar por VATS?",
        answer: "Sí, es un procedimiento altamente seguro cuando lo realiza un cirujano torácico calificado, permitiendo tomar muestras óptimas con mínimo riesgo y rápida recuperación."
      }
    ],
    image: "/images/diseases/intersticial-biopsia.webp",
    seo: {
      title: "Biopsia Pulmonar por VATS en CDMX | Dr. Raúl David Vega Vivar",
      description: "Diagnóstico preciso de enfermedades intersticiales y fibrosis pulmonar mediante biopsia quirúrgica por VATS mínimamente invasiva en CDMX.",
      keywords: ["biopsia pulmonar vats cdmx", "enfermedades intersticiales diagnostico", "fibrosis pulmonar biopsia", "cirujano toracico polanco"]
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
    image: "/images/diseases/estenosis-traqueal.webp",
    seo: {
      title: "Cirugía de Estenosis Traqueal y Tráquea en CDMX | Dr. Raúl David Vega Vivar",
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
    image: "/images/diseases/quistes-mediastinales.webp",
    seo: {
      title: "Cirugía de Quistes Mediastinales por VATS | Dr. Raúl David Vega Vivar",
      description: "Resección de quistes broncogénicos y pericárdicos del mediastino por VATS en CDMX. Consulta con cirujano torácico en Interlomas.",
      keywords: ["quiste broncogenico cirugia", "quiste pericardico vats", "tumores mediastinales cdmx", "cirujano toracico interlomas"]
    }
  },
  {
    id: "absceso-pulmonar-bronquiectasias",
    slug: "absceso-pulmonar-bronquiectasias",
    name: "Absceso Pulmonar y Bronquiectasias Localizadas",
    technicalName: "Absceso Necrotizante Pulmonar / Bronquiectasias Saculares",
    description: "Infecciones supurativas crónicas que destruyen el parénquima pulmonar formando cavidades de pus (abscesos) o dilataciones irreversibles de los bronquios (bronquiectasias) con secreción purulenta constante.",
    symptoms: [
      "Tos crónica con expectoración purulenta fétida abundante (vómica)",
      "Fiebre héctica, pérdida de peso y astenia marcada",
      "Hemoptisis recurrente (sangrado de origen bronquial)",
      "Infecciones pulmonares repetitivas en el mismo lóbulo"
    ],
    causes: [
      "Aspiración de contenido orofaríngeo o gástrico",
      "Neumonías necrotizantes secundarias a bacterias anaerobias o estafilococo",
      "Secuelas de tuberculosis pulmonar previa o cuerpo extraño"
    ],
    riskFactors: [
      "Trastornos de la deglución, alcoholismo o alteraciones del estado de alerta",
      "Antecedentes de infecciones respiratorias severas en la infancia"
    ],
    mexicoStats: "Las bronquiectasias localizadas resistentes al tratamiento médico se benefician notablemente de la lobectomía quirúrgica selectiva.",
    complications: [
      "Hemoptisis masiva exanguinante (emergencia quirúrgica)",
      "Fístula broncopleural con empiema secundario",
      "Amiloidosis secundaria e insuficiencia pulmonar"
    ],
    treatments: [
      "Lobectomía o segmentectomía pulmonar resolutiva por VATS o toracotomía",
      "Drenaje percutáneo o quirúrgico de cavidades de absceso refractarias",
      "Limpieza y decorticación pleural asociada",
      "Tratamiento antibiótico de soporte guiado por cultivo e higienización bronquial"
    ],
    faqs: [
      {
        question: "¿Cuándo se deben operar las bronquiectasias?",
        answer: "Cuando están localizadas en un solo lóbulo y provocan tos con pus o sangrado (hemoptisis) frecuente a pesar de haber recibido tratamiento médico farmacológico adecuado."
      },
      {
        question: "¿Se puede vivir normalmente sin un lóbulo pulmonar?",
        answer: "Sí. El tejido pulmonar restante se expande y suple la función respiratoria, permitiendo una vida activa y sin la infección crónica previa."
      }
    ],
    image: "/images/diseases/absceso-pulmonar.webp",
    seo: {
      title: "Tratamiento de Absceso Pulmonar y Bronquiectasias | Dr. Raúl David Vega Vivar",
      description: "Cirugía resolutiva para absceso pulmonar y bronquiectasias localizadas en CDMX. Lobectomía por VATS con cirujano torácico especialista.",
      keywords: ["absceso pulmonar cirugia cdmx", "bronquiectasias lobectomia", "hemoptisis tratamiento quirúrgico", "cirujano de torax cdmx"]
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
    image: "/images/diseases/hernia-diafragmatica.webp",
    seo: {
      title: "Cirugía de Hernia Diafragmática y Plicatura por VATS | Dr. Raúl David Vega Vivar",
      description: "Reparación quirúrgica de hernia diafragmática y plicatura por eventración o parálisis diafragmática por VATS en CDMX e Interlomas.",
      keywords: ["hernia diafragmatica cirugia cdmx", "plicatura diafragmatica vats", "eventracion diafragmatica tratamiento", "cirujano toracico interlomas"]
    }
  },
  {
    id: "infecciones-pulmonares-tuberculosis",
    slug: "infecciones-pulmonares-tuberculosis",
    name: "Infecciones Pulmonares Complejas (Tuberculosis, Micetoma, Mucormicosis)",
    technicalName: "Infección Granulomatosa Cavitada / Aspergiloma / Micetoma Pulmonar",
    description: "Complicaciones quirúrgicas derivadas de infecciones micóticas o bacterianas crónicas que forman masa de hongos (micetoma), cavidades sangrantes o destrucción parenquimatosa.",
    symptoms: [
      "Hemoptisis recurrente o sangrado bronquial masivo",
      "Tos crónica con esputo numular o fétido",
      "Pérdida de peso progresiva, sudoración nocturna y febrícula",
      "Falta de aire y dolor en la pared del tórax"
    ],
    causes: [
      "Infección por Mycobacterium tuberculosis con cavernas residuales",
      "Colonización por Aspergillus en cavidades pulmonares preexistentes (Aspergiloma)",
      "Infecciones fúngicas invasivas en pacientes con antecedente de inmunosupresión o diabetes"
    ],
    riskFactors: [
      "Antecedente de haber padecido tuberculosis pulmonar",
      "Diabetes mellitus descompensada o uso crónico de esteroides"
    ],
    mexicoStats: "La resección quirúrgica selectiva es vital en pacientes con hemoptisis amenazante secundaria a micetomas pulmonares.",
    complications: [
      "Hemorragia pulmonar masiva catastrófica por erosión de arterias bronquiales",
      "Diseminación infecciosa pleuro-pulmonar y fístula broncopleural",
      "Destrucción completa de un lóbulo o pulmón entero"
    ],
    treatments: [
      "Resección pulmonar quirúrgica de la caverna o micetoma (Lobectomía / Segmentectomía)",
      "Caviterostomía o mioplastia en pacientes con alta restricción funcional",
      "Manejo interdisciplinario con infectología médica torácica"
    ],
    faqs: [
      {
        question: "¿Por qué se requiere operar un micetoma (bola de hongo en pulmón)?",
        answer: "Porque los medicamentos antifúngicos no penetran bien dentro de la bola de hongo dentro de la cavidad seca, y el hongo suele erosionar arterias provocando sangrados pulmonares potencialmente fatales."
      },
      {
        question: "¿Se cura la infección con la cirugía?",
        answer: "Al extirpar la cavidad infecciosa y combinarlo con el esquema médico adecuado, la tasa de curación y control de sangrado es sumamente elevada."
      }
    ],
    image: "/images/diseases/micetoma-tuberculosis.webp",
    seo: {
      title: "Cirugía de Tuberculosis y Micetoma Pulmonar | Dr. Raúl David Vega Vivar",
      description: "Tratamiento quirúrgico para micetoma pulmonar, aspergiloma y secuelas cavitadas de tuberculosis en CDMX. Cirujano torácico especialista.",
      keywords: ["micetoma pulmonar cirugia", "aspergiloma tratamiento cdmx", "tuberculosis secuelas cirugia", "cirujano toracico polanco"]
    }
  }
];
