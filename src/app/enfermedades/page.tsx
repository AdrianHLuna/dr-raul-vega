import React from "react";
import Link from "next/link";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaLungs, FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaDna } from "react-icons/fa";

export const metadata = {
  title: `Enfermedades Torácicas y Pulmonares | ${doctor.title} ${doctor.name}`,
  description: "Catálogo completo de enfermedades y patologías de tórax, pulmón y mediastino atendidas por cirujano torácico en CDMX e Interlomas.",
};

export default function DiseasesListPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Enfermedades Torácicas y Tratamientos Quirúrgicos",
    description: metadata.description,
    author: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Subtle Background Watermark Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <FaLungs className="absolute top-24 right-12 text-9xl text-[#0A192F]" />
        <FaDna className="absolute bottom-20 left-10 text-9xl text-[#00A896]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />

        {/* Header Banner (Natural Spacing) */}
        <section className="mb-10">
          <div className="bg-[#0A192F] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-[#172A45]">
            <FaLungs className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-white/10 px-3.5 py-1 rounded-full border border-white/15 inline-block mb-3">
                Especialidad Torácica
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Patologías de Tórax, Pulmón y Mediastino
              </h1>
              <p className="text-slate-200 text-base lg:text-lg max-w-3xl leading-relaxed font-medium mb-6">
                Diagnóstico clínico de precisión y abordaje quirúrgico especializado para 12 enfermedades principales de la cavidad torácica.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Cero fármacos de patente en catálogo
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  • Abordaje quirúrgico VATS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de 12 Enfermedades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((disease) => (
            <div
              key={disease.id}
              className="bg-white rounded-[2.5rem] p-6 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-extrabold text-[10px] uppercase">
                    {disease.technicalName ? disease.technicalName.substring(0, 30) + "..." : "Especialidad Torácica"}
                  </span>
                  <FaLungs className="text-[#00A896] text-lg" />
                </div>

                <h2 className="text-xl font-black text-slate-900 mb-3 leading-snug group-hover:text-[#0A192F] transition-colors">
                  {disease.name}
                </h2>

                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium line-clamp-3">
                  {disease.description}
                </p>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-6 text-xs text-slate-700 space-y-1">
                  <p className="font-extrabold text-[#0A192F] text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <FaExclamationTriangle className="text-[#00A896]" /> Síntomas Clave:
                  </p>
                  {disease.symptoms.slice(0, 2).map((sym, idx) => (
                    <p key={idx} className="text-slate-600 font-medium text-[11px]">• {sym}</p>
                  ))}
                </div>
              </div>

              {/* CLEAN ELEGANT BUTTON */}
              <Link
                href={`/enfermedades/${disease.slug}`}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#0A192F] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-[#00A896] hover:text-[#0A192F] transition-all shadow-md group-hover:shadow-xl relative z-10"
              >
                <span>Ver Guía Médica</span>
                <FaArrowRight size={12} className="flex-shrink-0" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
