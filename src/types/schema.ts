import { z } from "zod";

// ─── Sub-schemas ──────────────────────────────────────────────
const SEOSchema = z.object({
  title: z.string().max(75),
  description: z.string().max(175),
  keywords: z.array(z.string()).min(2),
  ogImage: z.string().optional(),
});

const ExperienceItemSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
});

const CertificationSchema = z.object({
  name: z.string(),
  institution: z.string(),
  logo: z.string().optional(),
  year: z.string().optional(),
});

const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  year: z.string().optional(),
});

const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const TestimonialSchema = z.object({
  id: z.string(),
  patientName: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
  image: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  date: z.string(),
});

const VideoSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
  duration: z.string().optional(),
  uploadDate: z.string(),
});

// ─── Doctor Profile ───────────────────────────────────────────
export const DoctorProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  specialty: z.string(),
  specialistTitle: z.string().optional(),
  subspecialty: z.string().optional(),
  cedula: z.string().min(5),
  cedulaEspecialidad: z.string().optional(),
  cedulaSubespecialidad: z.string().optional(),
  cofepris: z.string().optional(),
  phone: z.string(),
  whatsapp: z.string(),
  email: z.string().email().optional(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  googleMapsUrl: z.string(),
  consultationPrice: z.number().positive(),
  paymentMethods: z.array(z.string()),
  insurances: z.array(z.string()).optional(),
  schedule: z.string(),
  photo: z.string(),
  logo: z.string().optional(),
  bio: z.string().min(80),
  philosophy: z.string(),
  experience: z.array(ExperienceItemSchema),
  certifications: z.array(CertificationSchema),
  education: z.array(EducationSchema),
  testimonials: z.array(TestimonialSchema).optional(),
  videos: z.array(VideoSchema).optional(),
  sameAs: z.array(z.string()).optional(),
  ga4Id: z.string().optional(),
});

// ─── Medical Condition (Enfermedad) ───────────────────────────
export const MedicalConditionSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  technicalName: z.string().optional(),
  description: z.string().min(40),
  symptoms: z.array(z.string()),
  causes: z.array(z.string()),
  riskFactors: z.array(z.string()),
  mexicoStats: z.string().optional(),
  complications: z.array(z.string()),
  treatments: z.array(z.string()), // Sin fármacos de patente
  faqs: z.array(FAQItemSchema).min(2),
  sources: z.array(z.string()).optional(),
  relatedServices: z.array(z.string()).optional(),
  relatedSymptoms: z.array(z.string()).optional(),
  image: z.string(),
  sameAs: z.string().optional(),
  seo: SEOSchema,
});

// ─── Medical Service (Servicio/Cirugía) ───────────────────────
export const MedicalServiceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  longDescription: z.string(),
  type: z.enum(["ambulatorio", "hospitalario", "consultorio"]),
  anesthesiaType: z.string().optional(),
  duration: z.string().optional(),
  recoveryTime: z.string().optional(),
  isPainful: z.boolean(),
  benefits: z.array(z.string()),
  postOpRecommendations: z.array(z.string()),
  priceRange: z.string().optional(),
  technicalSpecs: z.record(z.string(), z.string()).optional(),
  relatedConditions: z.array(z.string()).optional(),
  video: VideoSchema.optional(),
  image: z.string(),
  seo: SEOSchema,
});

// ─── Symptom (Síntoma) ───────────────────────────────────────
export const SymptomSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  causes: z.array(z.string()),
  whyConsult: z.string(),
  relatedConditions: z.array(z.string()),
  image: z.string(),
  seo: SEOSchema,
});

// ─── Tipos inferidos ─────────────────────────────────────────
export type DoctorProfile = z.infer<typeof DoctorProfileSchema>;
export type MedicalCondition = z.infer<typeof MedicalConditionSchema>;
export type MedicalService = z.infer<typeof MedicalServiceSchema>;
export type Symptom = z.infer<typeof SymptomSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type FAQItem = z.infer<typeof FAQItemSchema>;
