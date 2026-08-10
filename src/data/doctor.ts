import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Raúl David Vega Vivar",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano Cardiotorácico y Cirujano de Tórax",
  subspecialty: "Cirugía Cardiotorácica (Tórax, Pulmón y Mediastino)",
  cedula: "9781625",
  cedulaEspecialidad: "12463691",
  cedulaSubespecialidad: "14842215",
  cofepris: "En trámite",
  phone: "5628395496",
  whatsapp: "5628395496",
  email: "contacto@drraulvega.com",
  address: "Vialidad de la Barranca S/N, entre Blvd. Interlomas y Blvd. Hacienda de las Palmas, Col. Hacienda de las Palmas, C.P. 52763, Jesús del Monte",
  city: "Ciudad de México",
  state: "Ciudad de México",
  country: "México",
  googleMapsUrl: "https://maps.google.com/?q=Vialidad+de+la+Barranca+Hacienda+de+las+Palmas+Huixquilucan",
  consultationPrice: 2000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de Débito", "Tarjeta de Crédito", "Pagos NFC", "Meses Sin Intereses (MSI)"],
  insurances: ["AXA Seguros", "GNP Seguros", "MetLife", "Monterrey New York Life", "Mapfre", "Seguros Banorte", "Bupa", "Allianz"],
  schedule: "Lunes a Viernes de 08:00 a 21:00 hrs. Sábados de 09:00 a 15:00 hrs.",
  photo: "/images/doctor-raul-vega.webp",
  logo: "/images/logo/200743927_padded_logo.png",
  bio: "Soy el Dr. Raúl David Vega Vivar, cirujano especializado en Cirugía General con subespecialidad en Cirugía Cardiotorácica. Mi práctica médica y quirúrgica en la Ciudad de México e Interlomas está dedicada al diagnóstico y tratamiento quirúrgico de patologías del pulmón, pleura, mediastino, tráquea y pared torácica. Cuento con alta capacitación en Cirugía Torácica Videoasistida (VATS - Mínimamente Invasiva), priorizando siempre la seguridad, pronta recuperación y calidad de vida de mis pacientes.",
  philosophy: "Atención quirúrgica torácica de excelencia basada en la innovación tecnológica mínimamente invasiva (VATS), con un trato ético, humano y altamente resolutivo.",
  experience: [
    {
      year: "2019 - Presente",
      title: "Cirujano Cardiotorácico y Torácico Principal",
      description: "Más de 6 años de experiencia especializada con más de 2,500 pacientes atendidos y +1,500 procedimientos quirúrgicos realizados con éxito.",
    },
    {
      year: "2017 - 2019",
      title: "Residencia y Subespecialidad en Cirugía Cardiotorácica",
      description: "Entrenamiento quirúrgico avanzado en instituciones de alta especialidad de la UNAM.",
    }
  ],
  certifications: [
    {
      name: "Miembro Titular",
      institution: "Sociedad Mexicana de Neumología y Cirugía de Tórax (SMNYCT)",
    },
    {
      name: "Miembro Activo Internacional",
      institution: "Asociación Latinoamericana del Tórax (ALAT)",
    },
    {
      name: "Miembro Afiliado",
      institution: "Sociedad de Cirujanos Torácicos Generales (The Society of Thoracic Surgeons - STS)",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad La Salle (Céd. Prof. 9781625)",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Universidad Autónoma de Yucatán - UADY (Céd. Esp. 12463691)",
    },
    {
      degree: "Subespecialidad en Cirugía Cardiotorácica",
      institution: "Universidad Nacional Autónoma de México - UNAM (Céd. Subesp. 14842215)",
    }
  ],
  testimonials: [
    {
      id: "t1",
      patientName: "Ing. Carlos Mendoza R.",
      rating: 5,
      text: "El Dr. Raúl Vega me realizó una cirugía pulmonar por VATS (mínimamente invasiva). Mi recuperación fue impresionantemente rápida y con dolor mínimo. Un cirujano de un nivel técnico e humano excepcional.",
      date: "Hace 1 mes",
    },
    {
      id: "t2",
      patientName: "Sofía E. Alatorre",
      rating: 5,
      text: "Acudí por un derrame pleural persistente. El diagnóstico del Dr. Vega fue preciso desde la primera consulta y el procedimiento quirúrgico resolvió mi problema al 100%. Eternamente agradecida.",
      date: "Hace 3 semanas",
    }
  ]
};
