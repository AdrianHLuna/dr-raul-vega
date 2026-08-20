import React from "react";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaNotesMedical, FaCalendarCheck, FaExclamationTriangle, FaStethoscope, FaDna, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: symptom.name,
    description: symptom.description,
    author: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#071324] text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Background Accent */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#00A896]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-white">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} isDark={true} />
        </div>

        {/* ─── HEADER ──────────────────────────────────────────────────────────── */}
        <section className="mb-8">
          <div className="bg-[#0A192F] text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-[#172A45]">
            <FaNotesMedical className="absolute bottom-[-30px] right-[-30px] text-white/5 text-[240px] pointer-events-none" />

            <div className="max-w-4xl relative z-10 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-black text-xs uppercase tracking-widest inline-block border border-rose-500/40">
                Orientación para el Paciente
              </span>

              <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                {symptom.name}
              </h1>

              <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium">
                {symptom.description}
              </p>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider hover:bg-[#02C39A] transition-all shadow-xl inline-flex items-center gap-2"
                >
                  <FaCalendarCheck size={16} /> Agendar Cita
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DASHBOARD (8 / 4 SPLIT) ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Por qué consultar */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaExclamationTriangle className="text-rose-400" /> ¿Por qué consultar al cirujano torácico?
              </h2>
              <div className="bg-rose-950/40 border border-rose-500/30 p-6 rounded-2xl text-slate-200 text-sm leading-relaxed font-medium">
                {symptom.whyConsult}
              </div>
            </div>

            {/* Posibles Causas */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaStethoscope className="text-[#00A896]" /> Posibles Orígenes Clínicos
              </h2>
              <div className="grid grid-cols-1 gap-3 text-xs font-semibold text-slate-200">
                {symptom.causes.map((c, idx) => (
                  <div key={idx} className="bg-[#172A45] p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <span className="text-[#00A896] font-black">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-[10px] uppercase tracking-widest">
                Valoración Presencial
              </span>
              <h3 className="text-2xl font-black text-white">
                ¿Presentas este síntoma?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Agenda tu cita presencial con el {doctor.title} {doctor.name} para un diagnóstico definitivo.
              </p>

              <div className="pt-2 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#02C39A] transition-all shadow-xl"
                >
                  <FaWhatsapp size={18} /> Agendar Cita
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
