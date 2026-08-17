import React from "react";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaStethoscope, 
  FaCalendarCheck, 
  FaQuestionCircle, 
  FaLungs, 
  FaDna,
  FaShieldAlt,
  FaArrowRight,
  FaBriefcaseMedical,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";
import Link from "next/link";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map((r) => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#071324] text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schemas} />

      {/* Background Glowing Ambient Accents */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#00A896]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-white">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} isDark={true} />
        </div>

        {/* ─── SURGICAL DOSSIER HERO HEADER ────────────────────────────────────── */}
        <section className="mb-8">
          <div className="bg-[#0A192F] rounded-[2.5rem] p-8 lg:p-12 border border-[#172A45] shadow-2xl relative overflow-hidden">
            <FaLungs className="absolute bottom-[-30px] right-[-30px] text-white/5 text-[260px] pointer-events-none" />

            <div className="max-w-4xl relative z-10 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] font-black text-xs uppercase tracking-widest">
                  Expediente Clínico Torácico
                </span>
                {disease.technicalName && (
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700">
                    Nomenclatura: {disease.technicalName}
                  </span>
                )}
              </div>

              <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                {disease.name}
              </h1>

              <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium">
                {disease.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider hover:bg-[#02C39A] transition-all shadow-xl flex items-center gap-2"
                >
                  <FaCalendarCheck size={16} /> Consultar con Cirujano Torácico
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SURGICAL METRICS BAR ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#0A192F] p-5 rounded-2xl border border-[#172A45] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black">
              <FaLungs size={20} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Abordaje Recomendado</p>
              <p className="text-sm font-extrabold text-white">Cirugía de Mínima Invasión</p>
            </div>
          </div>

          <div className="bg-[#0A192F] p-5 rounded-2xl border border-[#172A45] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black">
              <FaStethoscope size={20} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Normativa Clínica</p>
              <p className="text-sm font-extrabold text-emerald-400">Sin Medicamentos Patente</p>
            </div>
          </div>

          <div className="bg-[#0A192F] p-5 rounded-2xl border border-[#172A45] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black">
              <FaShieldAlt size={20} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Ubicación</p>
              <p className="text-sm font-extrabold text-white">Interlomas CDMX</p>
            </div>
          </div>
        </div>

        {/* ─── ASYMMETRIC DASHBOARD (8 / 4 SPLIT) ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: CLINICAL & SURGICAL DOSSIER (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Cuadro Clínico & Síntomas */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaExclamationTriangle className="text-rose-400" /> Manifestaciones y Sintomatología
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {disease.symptoms.map((sym, idx) => (
                  <div key={idx} className="bg-[#172A45] p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A896] mt-1.5 flex-shrink-0"></span>
                    <span className="font-semibold text-slate-200 text-xs leading-relaxed">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Causas & Factores de Riesgo */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaStethoscope className="text-[#00A896]" /> Etiología y Etiopatogenia
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-extrabold text-[#00A896] text-sm mb-3 uppercase tracking-wider">Causas Principales</h3>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {disease.causes.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-[#172A45]/60 p-3 rounded-xl">
                        <span className="text-[#00A896] font-black">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-rose-400 text-sm mb-3 uppercase tracking-wider">Factores Desencadenantes</h3>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {disease.riskFactors.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-[#172A45]/60 p-3 rounded-xl">
                        <span className="text-rose-400 font-black">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tratamientos Quirúrgicos */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaCheckCircle className="text-emerald-400" /> Abordaje Quirúrgico Resolutivo
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {disease.treatments.map((t, idx) => (
                  <div key={idx} className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-2xl text-xs font-bold text-emerald-200 flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-400 flex-shrink-0 text-base" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaQuestionCircle className="text-[#00A896]" /> Ficha de Respuestas Frecuentes
              </h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#172A45] p-6 rounded-2xl border border-slate-800 space-y-2">
                    <h3 className="font-extrabold text-white text-sm">{faq.question}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: FLOATING SURGICAL APPOINTMENT DOCK (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-[10px] uppercase tracking-widest">
                Valoración Especializada
              </span>
              <h3 className="text-2xl font-black text-white">
                ¿Requieres valoración por {disease.name}?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                El {doctor.title} {doctor.name} realizará una evaluación clínica tomográfica y quirúrgica en el Hospital Ángeles Lomas.
              </p>

              <div className="bg-[#172A45] p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <p className="font-bold text-white flex items-center gap-2">
                  <FaShieldAlt className="text-[#00A896]" /> Cédulas Oficiales:
                </p>
                <p className="text-slate-300">• céd. prof. {doctor.cedula} (La Salle)</p>
                <p className="text-slate-300">• céd. esp. {doctor.cedulaEspecialidad} (UADY)</p>
                <p className="text-slate-300">• céd. subesp. {doctor.cedulaSubespecialidad} (UNAM)</p>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#02C39A] transition-all shadow-xl"
                >
                  <FaWhatsapp size={18} /> Agendar Cita
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="w-full py-3.5 rounded-xl bg-[#172A45] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-all border border-slate-700"
                >
                  <FaPhoneAlt size={14} className="text-[#00A896]" /> Telefonía: {doctor.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
