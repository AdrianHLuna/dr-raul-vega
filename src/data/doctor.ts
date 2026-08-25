import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Raúl Vega",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano de Tórax",
  subspecialty: "Cirugía Torácica (Pulmón, Pleura y Mediastino)",
  cedula: "9781625",
  cedulaEspecialidad: "12463691",
  cedulaSubespecialidad: "14842215",
  cofepris: "En trámite",
  phone: "5668592519",
  whatsapp: "5668592519",
  email: "dr.raul.vega.vivar@icloud.com",
  address: "Hospital Ángeles Lomas, Vialidad de la Barranca S/N, Col. Hacienda de las Palmas, C.P. 52763, Huixquilucan, Edo. de México",
  locations: [
    {
      id: "angeles-lomas",
      name: "Consultorio Hospital Ángeles Lomas",
      address: "Vialidad de la Barranca S/N, Col. Hacienda de las Palmas, C.P. 52763, Huixquilucan, Edo. de México",
      city: "Huixquilucan / CDMX",
      googleMapsUrl: "https://g.page/r/CUBHBzTCiA3uEBM/",
      mapEmbedUrl: "https://maps.google.com/maps?q=Dr.+Ra%C3%BAl+Vega+-+Cirujano+Tor%C3%A1cico&cid=17153516923402012480&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "angeles-pedregal",
      name: "Consultorio Torre Ángeles Pedregal",
      address: "Camino a Santa Teresa 1055, Col. Héroes de Padierna, C.P. 10700, La Magdalena Contreras, CDMX",
      city: "Ciudad de México (Sur)",
      googleMapsUrl: "https://g.page/r/CTNhDkW2e5AHEBM/",
      mapEmbedUrl: "https://maps.google.com/maps?q=Dr.+Ra%C3%BAl+Vega+-+Cirujano+Tor%C3%A1cico+CDMX&cid=545071577684664627&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "starmedica-pedregal",
      name: "Consultorio Star Médica Pedregal",
      address: "Cda. de San Jerónimo 430, Col. Jardines del Pedregal, C.P. 01900, Álvaro Obregón, CDMX",
      city: "Ciudad de México (Sur)",
      googleMapsUrl: "https://g.page/r/CWOp13UVB6cNEBM/",
      mapEmbedUrl: "https://maps.google.com/maps?q=Dr.+Ra%C3%BAl+Vega+Vivar+Cirujano+Tor%C3%A1cico&cid=983762832356518243&t=&z=16&ie=UTF8&iwloc=&output=embed"
    }
  ],
  city: "Ciudad de México",
  state: "Estado de México / CDMX",
  country: "México",
  googleMapsUrl: "https://g.page/r/CUBHBzTCiA3uEBM/",
  sameAs: [
    "https://g.page/r/CUBHBzTCiA3uEBM/",
    "https://g.page/r/CTNhDkW2e5AHEBM/",
    "https://g.page/r/CWOp13UVB6cNEBM/"
  ],
  consultationPrice: 2000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de Débito", "Tarjeta de Crédito", "Pagos NFC", "Meses Sin Intereses (MSI)"],
  insurances: ["AXA Seguros", "GNP Seguros", "MetLife", "Monterrey New York Life", "Mapfre", "Seguros Banorte", "Bupa", "Allianz"],
  schedule: "Lunes a Viernes de 08:00 a 21:00 hrs. Sábados de 09:00 a 15:00 hrs.",
  photo: "/images/dr-hero.jpg",
  logo: "/images/logo/200743927_padded_logo.png",
  bio: "Soy el Dr. Raúl Vega, cirujano especializado en Cirugía General con subespecialidad en Cirugía Torácica. Mi práctica médica y quirúrgica en la Ciudad de México está dedicada a la Cirugía de Tórax de Mínima Invasión, así como al diagnóstico y tratamiento integral de patologías de pulmón, pleura, mediastino, tráquea y pared torácica con tecnología de vanguardia.",
  philosophy: "Atención quirúrgica torácica de excelencia en Cirugía de Tórax de Mínima Invasión, priorizando la innovación tecnológica, el dolor mínimo, la rápida recuperación y un trato ético y humano.",
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
      name: "Miembro Internacional",
      institution: "American Thoracic Society (ATS)",
    },
    {
      name: "Miembro Internacional",
      institution: "European Respiratory Society (ERS)",
    },
    {
      name: "Miembro Internacional",
      institution: "Sociedad Española de Neumología y Cirugía Torácica (SEPAR)",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad La Salle • Céd. Prof. 9781625 (La Salle)",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Universidad Autónoma de Yucatán • Céd. Esp. 12463691 (UADY)",
    },
    {
      degree: "Subespecialidad en Cirugía Torácica",
      institution: "Universidad Nacional Autónoma de México • Céd. Subesp. 14842215 (UNAM)",
    }
  ],
  testimonials: [
    {
      id: "t1",
      patientName: "Ing. Carlos Mendoza R.",
      rating: 5,
      text: "El Dr. Raúl Vega me realizó una cirugía pulmonar de mínima invasión. Mi recuperación fue impresionantemente rápida y con dolor mínimo. Un cirujano de un nivel técnico e humano excepcional.",
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
