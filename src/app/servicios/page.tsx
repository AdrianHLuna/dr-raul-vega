import React from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaBriefcaseMedical, FaArrowRight, FaCheckCircle, FaClock, FaHeartbeat, FaLungs, FaDna } from "react-icons/fa";

export const metadata = {
  title: `Cirugía de Tórax Mínimamente Invasiva (VATS) | ${doctor.title} ${doctor.name}`,
  description: "Catálogo de intervenciones quirúrgicas: Cirugía de tórax mínimamente invasiva (VATS), resección pulmonar y mediastino en CDMX e Interlomas.",
};

export default function ServicesListPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Cirugía de Tórax Mínimamente Invasiva (VATS) y Procedimientos Quirúrgicos",
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
        <FaBriefcaseMedical className="absolute top-24 right-12 text-9xl text-[#0A192F]" />
        <FaDna className="absolute bottom-20 left-10 text-9xl text-[#00A896]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />

        {/* Subpage Header Banner (Natural Spacing) */}
        <section className="mb-10">
          <div className="bg-[#0A192F] text-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-[#172A45]">
            <FaBriefcaseMedical className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block mb-3">
                Procedimientos de Alta Especialidad
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Cirugía de Tórax Mínimamente Invasiva (VATS)
              </h1>
              <p className="text-slate-200 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-2">
                Tecnología quirúrgica de vanguardia aplicada por el {doctor.title} {doctor.name} mediante videoasistencia (VATS) e intervenciones de alta precisión con recuperación acelerada.
              </p>
            </div>
          </div>
        </section>

        {/* Grid de 10 Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between group hover:border-[#0A192F] transition-all relative overflow-hidden"
            >
              <div className="relative z-10">
                {/* Service Image Banner */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-slate-200/60 shadow-sm bg-[#0A192F]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-[10px] uppercase tracking-widest shadow-md">
                    Fotografía Quirúrgica
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#00A896]/20 text-[#0A192F] font-black text-xs uppercase tracking-wider">
                    {service.type}
                  </span>
                  {service.priceRange && (
                    <span className="text-xs font-extrabold text-slate-500 text-right">
                      {service.priceRange}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-3 leading-snug group-hover:text-[#0A192F] transition-colors">
                  {service.name}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Beneficios Clave:</p>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    {service.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-normal">
                        <FaCheckCircle className="text-[#00A896] mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CLEAN, ELEGANT BUTTON WITH PROPER PADDING AND CLEAR TEXT */}
              <Link
                href={`/servicios/${service.slug}`}
                className="w-full py-4 px-6 rounded-2xl bg-[#0A192F] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-[#00A896] hover:text-[#0A192F] transition-all shadow-md group-hover:shadow-xl relative z-10"
              >
                <span>Ver Ficha del Procedimiento</span>
                <FaArrowRight size={14} className="flex-shrink-0" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
