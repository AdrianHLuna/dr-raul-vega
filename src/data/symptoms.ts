import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "dolor-toracico-persistente",
    slug: "dolor-toracico-persistente",
    name: "Dolor Torácico Persistente o Intenso",
    description: "Dolor opresivo, punzante o localizado en el tórax que empeora al respirar hondo, toser o cambiar de posición, o que persiste por semanas.",
    causes: [
      "Irritación o inflamación de las capas pleurales (pleuritis / derrame pleural)",
      "Fracturas costales o trauma de la pared torácica",
      "Procesos tumorales pulmonares o del mediastino que invaden pleura o hueso",
      "Neumotórax con colapso pulmonar activo"
    ],
    whyConsult: "El dolor de tórax persistente no debe ignorarse ni tratarse solo con analgésicos. Se requiere una tomografía de tórax de alta resolución y la valoración del cirujano torácico para descartar afecciones pleuro-pulmonares o vasculares de significación médica.",
    relatedConditions: ["derrame-pleural-empiema", "neumotorax-espontaneo-bullas", "trauma-toracico-fracturas-costales"],
    image: "/images/symptoms/dolor-toracico.webp",
    seo: {
      title: "Dolor Torácico Persistente e Intenso en CDMX | Dr. Raúl David Vega Vivar",
      description: "Evaluación médica especializada para dolor de pecho y pleura en CDMX e Interlomas. Diagnóstico preciso por cirujano torácico.",
      keywords: ["dolor toracico cdmx", "dolor al respirar hondo", "dolor pleuritico diagnostico", "cirujano toracico interlomas"]
    }
  },
  {
    id: "falta-de-aire-disnea",
    slug: "falta-de-aire-disnea",
    name: "Falta de Aire (Disnea) de Reposo o Esfuerzo",
    description: "Sensación subjetiva de sofocación, sed de aire o dificultad respiratoria progresiva al realizar actividades cotidianas o al estar acostado.",
    causes: [
      "Compresión o reducción del volumen pulmonar por derrame pleural o neumotórax",
      "Obstrucción de la vía aérea alta por estenosis traqueal o tumores de tráquea",
      "Neoplasias pulmonares o mediastinales avanzadas",
      "Parálisis o elevación anormal del diafragma"
    ],
    whyConsult: "La disnea progresiva es el síntoma cardinal de que el pulmón está comprimido o la vía aérea está estrechada. La valoración quirúrgica torácica identifica si existe una causa corregible mediante drenaje, VATS o reconstrucción traqueal.",
    relatedConditions: ["cancer-de-pulmon", "derrame-pleural-empiema", "estenosis-traqueal-tumores-traquea", "hernia-diafragmatica-eventracion"],
    image: "/images/symptoms/disnea-falta-aire.webp",
    seo: {
      title: "Falta de Aire y Sofocación Respiratoria | Dr. Raúl David Vega Vivar",
      description: "Diagnóstico y tratamiento para la disnea y falta de aire severa en CDMX. Evaluación por cirujano torácico especialista.",
      keywords: ["falta de aire cdmx", "disnea progresiva causas", "dificultad para respirar torax", "cirujano pulmonar interlomas"]
    }
  },
  {
    id: "tos-con-sangre-hemoptisis",
    slug: "tos-con-sangre-hemoptisis",
    name: "Tos con Sangre (Hemoptisis) o Esputo Asalmonado",
    description: "Expulsión de sangre fresca, en hilos o esputo sanguinolento proveniente del árbol traqueobronquial o pulmones durante los accesos de tos.",
    causes: [
      "Cáncer de pulmón o tumores endobronquiales erosionantes",
      "Bronquiectasias infectadas o micetoma pulmonar (bola de hongo)",
      "Tuberculosis o infecciones supurativas crónicas",
      "Trauma de vía aérea o fístula bronquial"
    ],
    whyConsult: "La hemoptisis es un signo de alarma médica prioritaria. Incluso pequeñas cantidades de sangre pueden preceder a un sangrado masivo amenazante para la vida, por lo que requiere tomografía urgente y valoración torácica especial.",
    relatedConditions: ["cancer-de-pulmon", "absceso-pulmonar-bronquiectasias", "infecciones-pulmonares-tuberculosis"],
    image: "/images/symptoms/hemoptisis.webp",
    seo: {
      title: "Tos con Sangre (Hemoptisis) en CDMX | Dr. Raúl David Vega Vivar",
      description: "Evaluación urgente para tos con sangre y esputo sangriento en CDMX. Cirujano torácico especialista en hemoptisis y tumores.",
      keywords: ["tos con sangre cdmx", "hemoptisis causas tratamiento", "sangrado al toser pulmones", "cirujano toracico urgencias"]
    }
  },
  {
    id: "hallazgo-nodulo-pulmonar-tac",
    slug: "hallazgo-nodulo-pulmonar-tac",
    name: "Hallazgo de Nódulo Pulmonar en Tomografía o Radiografía",
    description: "Detección fortuita o durante chequeo de una mancha o sombra redonda (menor a 3 cm) en el tejido pulmonar en estudios de imagen.",
    causes: [
      "Nódulo sólido, subsólido o en vidrio despulido sospechoso de cáncer temprano",
      "Granulomas calcificados por infecciones previas curadas",
      "Quistes, hamartomas benignos o metástasis solitarias"
    ],
    whyConsult: "Todo nódulo pulmonar recién descubierto debe evaluarse con escalas de probabilidad clínica oncológica (como la escala Brock o Mayo). El cirujano torácico determina si requiere seguimiento tomográfico o biopsia por VATS.",
    relatedConditions: ["cancer-de-pulmon", "enfermedades-intersticiales-biopsia"],
    image: "/images/symptoms/nodulo-pulmonar.webp",
    seo: {
      title: "Nódulo Pulmonar en Tomografía en CDMX | Dr. Raúl David Vega Vivar",
      description: "Evaluación y tratamiento de nódulo pulmonar en TAC. Biopsia por VATS y estadificación en CDMX e Interlomas con cirujano especializado.",
      keywords: ["nodulo pulmonar tac cdmx", "mancha en pulmon radiografia", "biopsia nodulo pulmonar vats", "cirujano toracico polanco"]
    }
  },
  {
    id: "sudoracion-excesiva-hiperhidrosis",
    slug: "sudoracion-excesiva-hiperhidrosis",
    name: "Sudoración Excesiva Incontrolable (Manos y Axilas)",
    description: "Brote continuo e ininterrumpido de sudor profuso en palmas de las manos, axilas o cara que empapa la piel sin relación con el calor o ejercicio.",
    causes: [
      "Hiperactividad constitucional de la cadena simpática torácica T2-T4",
      "Respuesta del sistema vegetativo autónomo"
    ],
    whyConsult: "La hiperhidrosis severa limita el desarrollo profesional y social. La simpatectomía torácica por VATS es un procedimiento ambulatorio seguro que cura el sudor palmar e hiperhidrosis axilar de forma inmediata.",
    relatedConditions: ["hiperhidrosis-primaria", "cirugia-toracica-vats-videoasistida"],
    image: "/images/symptoms/sudoracion-manos.webp",
    seo: {
      title: "Sudoración Excesiva de Manos y Axilas | Dr. Raúl David Vega Vivar",
      description: "Tratamiento definitivo para hiperhidrosis palmar y axilar mediante simpatectomía por VATS en CDMX. Consulta con cirujano especialista.",
      keywords: ["sudoracion excesiva manos cdmx", "sudor palmar cura definitiva", "hiperhidrosis tratamiento vats", "cirujano toracico interlomas"]
    }
  },
  {
    id: "masa-tumor-mediastinal-tac",
    slug: "masa-tumor-mediastinal-tac",
    name: "Masa o Tumor en el Mediastino Detectado por TAC",
    description: "Imagen tomográfica que revela una lesión sólida o quística ubicada en el centro del tórax (entre el esternón y la columna).",
    causes: [
      "Timoma o hiperplasia tímica en mediastino anterior",
      "Quiste broncogénico, pericárdico o entérico",
      "Linfoma, tumor de células germinales o schwannoma neurógeno"
    ],
    whyConsult: "Las masas mediastinales requieren evaluación por el cirujano torácico para determinar su resecabilidad por VATS y prevenir invasión a grandes vasos o compresión tráqueo-bronquial.",
    relatedConditions: ["tumores-mediastino-timoma", "quistes-mediastinales"],
    image: "/images/symptoms/masa-mediastinal.webp",
    seo: {
      title: "Tumores y Masas Mediastinales en CDMX | Dr. Raúl David Vega Vivar",
      description: "Evaluación y cirugía por VATS de masas y tumores del mediastino en CDMX. Cirujano torácico experto en Interlomas.",
      keywords: ["tumor mediastino cdmx", "masa mediastinal tac", "timoma cirugia vats", "cirujano toracico interlomas"]
    }
  },
  {
    id: "fractura-costal-dolorosa-post-trauma",
    slug: "fractura-costal-dolorosa-post-trauma",
    name: "Fracturas Costales Dolorosas y Deformidad de Pared",
    description: "Dolor punzante e incapacitante a nivel de las costillas tras un choque vehicular, caída o golpe fuerte que dificulta respirar profundanente.",
    causes: [
      "Fractura de una o múltiples costillas por traumatismo directo",
      "Volet costal / Tórax inestable por fracturas dobles en múltiples arcos"
    ],
    whyConsult: "Respirar de forma superficial por dolor costal causa atelectasias y neumonías graves. La osteosíntesis costal con placas de titanio fija las costillas rotas, quitando el dolor de forma inmediata.",
    relatedConditions: ["trauma-toracico-fracturas-costales", "osteosintesis-costal-fijacion-fracturas"],
    image: "/images/symptoms/fractura-costilla.webp",
    seo: {
      title: "Dolor por Fractura de Costilla en CDMX | Dr. Raúl David Vega Vivar",
      description: "Tratamiento quirúrgico con placas de titanio para fracturas costales dolorosas en CDMX. Cirujano torácico en trauma.",
      keywords: ["fractura de costilla dolor cdmx", "fijacion costal placas titanio", "torax inestable cirugia", "trauma toracico interlomas"]
    }
  },
  {
    id: "estridor-sofocacion-via-aerea",
    slug: "estridor-sofocacion-via-aerea",
    name: "Estridor Inspiratorio y Sofocación (Estenosis Traqueal)",
    description: "Silbido agudo audible al meter aire acompañado de la sensación de que la garganta o el cuello se han cerrado.",
    causes: [
      "Estenosis traqueal cicatricial post-intubación o traqueostomía",
      "Tumor endotraqueal o compresión mediastinal de la tráquea"
    ],
    whyConsult: "El estridor indica que la tráquea se ha estrechado a un diámetro crítico (menor a 5-6 mm). Es una urgencia quirúrgica que requiere evaluación traqueal para reconstrucción o dilatación.",
    relatedConditions: ["estenosis-traqueal-tumores-traquea", "reseccion-traqueal-traqueoplastia"],
    image: "/images/symptoms/estridor-traqueal.webp",
    seo: {
      title: "Estridor y Estenosis Traqueal en CDMX | Dr. Raúl David Vega Vivar",
      description: "Diagnóstico y cirugía de urgencia para estridor respiratorio y estenosis traqueal en CDMX. Cirujano especializado en vía aérea.",
      keywords: ["estridor inspiratorio causas", "estenosis traqueal cdmx", "ahogo por intubación previa", "cirujano de via aerea"]
    }
  },
  {
    id: "tos-persistente-mas-de-8-semanas",
    slug: "tos-persistente-mas-de-8-semanas",
    name: "Tos Crónica Persistente (Más de 8 Semanas)",
    description: "Tos ininterrumpida de más de dos meses de duración que no responde a jarabes ni tratamientos convencionales.",
    causes: [
      "Lesión endobronquial o tumoral en estadio incipiente",
      "Infección crónica granulomatosa o bronquiectasias de origen infeccioso",
      "Derrame pleural o compresión bronquial extrínseca"
    ],
    whyConsult: "Una tos crónica de más de 8 semanas en fumadores o personas de riesgo debe estudiarse con tomografía torácica de alta resolución para descartar patología del parénquima o vía aérea.",
    relatedConditions: ["cancer-de-pulmon", "absceso-pulmonar-bronquiectasias", "infecciones-pulmonares-tuberculosis"],
    image: "/images/symptoms/tos-cronica.webp",
    seo: {
      title: "Tos Crónica Persistente en CDMX | Dr. Raúl David Vega Vivar",
      description: "Evaluación médica de tos persistente de más de 8 semanas en CDMX. Tomografía y diagnóstico por cirujano torácico.",
      keywords: ["tos cronica causas cdmx", "tos persistente 8 semanas", "evaluación tos fumadores", "cirujano pulmonar interlomas"]
    }
  },
  {
    id: "acumulacion-pus-liquido-torax",
    slug: "acumulacion-pus-liquido-torax",
    name: "Acumulación de Pus o Agua en el Tórax (Infección Pleural)",
    description: "Detección en radiografía o ecografía de fluido purulento o espeso alrededor del pulmón acompañado de fiebre severa.",
    causes: [
      "Complicación de neumonía bacteriana (empiema parapneumónico)",
      "Tuberculosis pleural o perforación infecciosa"
    ],
    whyConsult: "El pus retenido en el tórax no se quita solo con antibióticos tomados; requiere drenaje con sonda o debridación por VATS antes de que aprisione el pulmón definitivamente.",
    relatedConditions: ["derrame-pleural-empiema", "decorticacion-pleural-empiema"],
    image: "/images/symptoms/infeccion-pleural.webp",
    seo: {
      title: "Agua o Pus en el Tórax (Empiema) | Dr. Raúl David Vega Vivar",
      description: "Drenaje quirúrgico y debridación de pus en la pleura en CDMX. Limpieza por VATS con cirujano torácico experto.",
      keywords: ["pus en el torax empiema", "agua en los pulmones tratamiento", "drenaje pleural cdmx", "cirujano toracico polanco"]
    }
  }
];
