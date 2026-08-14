import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Raúl David Vega Vivar",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano de Tórax",
  subspecialty: "Cirugía Torácica (Pulmón, Pleura y Mediastino)",
  cedula: "9781625",
  cedulaEspecialidad: "12463691",
  cedulaSubespecialidad: "14842215",
  cofepris: "En trámite",
  phone: "5628395496",
  whatsapp: "5628395496",
  email: "contacto@drraulvega.com",
  address: "Hospital Ángeles Lomas, Vialidad de la Barranca S/N, Col. Hacienda de las Palmas, C.P. 52763, Huixquilucan, Edo. de México",
  city: "Ciudad de México",
  state: "Estado de México / CDMX",
  country: "México",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Angeles+Lomas+Vialidad+de+la+Barranca+Hacienda+de+las+Palmas+52763+Huixquilucan",
  consultationPrice: 2000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de Débito", "Tarjeta de Crédito", "Pagos NFC", "Meses Sin Intereses (MSI)"],
  insurances: ["AXA Seguros", "GNP Seguros", "MetLife", "Monterrey New York Life", "Mapfre", "Seguros Banorte", "Bupa", "Allianz"],
  schedule: "Lunes a Viernes de 08:00 a 21:00 hrs. Sábados de 09:00 a 15:00 hrs.",
  photo: "/images/doctor-raul-vega.webp",
  logo: "/images/logo/200743927_padded_logo.png",
  bio: "Soy el Dr. Raúl David Vega Vivar, cirujano especializado en Cirugía General con subespecialidad en Cirugía Torácica. Mi práctica médica y quirúrgica en el Hospital Ángeles Lomas y Ciudad de México está dedicada a la Cirugía de Tórax Mínimamente Invasiva (VATS), así como al diagnóstico y tratamiento integral de patologías de pulmón, pleura, mediastino, tráquea y pared torácica con tecnología de vanguardia.",
  philosophy: "Atención quirúrgica torácica de excelencia en Cirugía de Tórax Mínimamente Invasiva (VATS), priorizando la innovación tecnológica, el dolor mínimo, la rápida recuperación y un trato ético y humano.",
  experience: [
    {
      year: "2019 - Presente",
      title: "Cirujano Torácico Principal",
      description: "Más de 6 años de experiencia especializada con más de 2,500 pacientes atendidos y +1,500 procedimientos quirúrgicos realizados con éxito.",
    },
    {
      year: "2017 - 2019",
      title: "Residencia y Subespecialidad en Cirugía Torácica",
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
      institution: "Universidad La Salle • céd. prof. 9781625 (La Salle)",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Universidad Autónoma de Yucatán • céd. esp. 12463691 (UADY)",
    },
    {
      degree: "Subespecialidad en Cirugía Torácica",
      institution: "Universidad Nacional Autónoma de México • céd. subesp. 14842215 (UNAM)",
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
