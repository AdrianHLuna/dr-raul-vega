import React from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { 
  FaCheckCircle, 
  FaInfoCircle, 
  FaCalendarCheck, 
  FaClock, 
  FaShieldAlt, 
  FaBriefcaseMedical, 
  FaDna,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "ambulatorio" ? "NoninvasiveProcedure" : "SurgicalProcedure",
    howPerformed: service.description,
    preparation: service.anesthesiaType ? `Anestesia: ${service.anesthesiaType}` : undefined,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#071324] text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Subtle Background Accent */}
      <div className="absolute top-10 left-1/3 w-[650px] h-[650px] bg-[#00A896]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-white">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} isDark={true} />
        </div>

        {/* ─── SURGICAL HEADER ─────────────────────────────────────────────────── */}
        <section className="mb-8">
          <div className="bg-[#0A192F] rounded-[2.5rem] p-8 lg:p-12 border border-[#172A45] shadow-2xl relative overflow-hidden">
            <FaBriefcaseMedical className="absolute bottom-[-30px] right-[-30px] text-white/5 text-[260px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-xs uppercase tracking-widest inline-block border border-[#00A896]/40">
                  Protocolo Quirúrgico {service.type}
                </span>

                <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                  {service.name}
                </h1>

                <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium">
                  {service.longDescription}
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

              {/* Service Image Spotlight (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#00A896]/40 shadow-2xl bg-[#071324] group">
                  <Image
                    src={service.image}
                    alt={`Fotografía Quirúrgica - ${service.name}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-[10px] uppercase tracking-widest self-start shadow-md">
                      Fotografía Quirúrgica Oficial
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── DASHBOARD GRID (8 / 4 SPLIT) ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Ficha Técnica */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaInfoCircle className="text-[#00A896]" /> Especificaciones de Técnica Quirúrgica
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#172A45] p-5 rounded-2xl border border-slate-800">
                  <dt className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Duración Quirúrgica</dt>
                  <dd className="font-extrabold text-white text-base mt-1">{service.duration || "90 a 180 min"}</dd>
                </div>
                <div className="bg-[#172A45] p-5 rounded-2xl border border-slate-800">
                  <dt className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Estancia / Recuperación</dt>
                  <dd className="font-extrabold text-white text-base mt-1">{service.recoveryTime || "24 a 48 hrs"}</dd>
                </div>
                <div className="bg-[#172A45] p-5 rounded-2xl border border-slate-800">
                  <dt className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Tipo de Anestesia</dt>
                  <dd className="font-extrabold text-white text-base mt-1">{service.anesthesiaType || "Anestesia General"}</dd>
                </div>
                <div className="bg-[#172A45] p-5 rounded-2xl border border-slate-800">
                  <dt className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Cobertura por Seguro</dt>
                  <dd className="font-extrabold text-emerald-400 text-base mt-1">Gastos Médicos / Reembolso</dd>
                </div>
              </dl>
            </div>

            {/* Beneficios */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3 border-b border-[#172A45] pb-4">
                <FaCheckCircle className="text-emerald-400" /> Beneficios para el Paciente
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl flex items-start gap-3 text-xs text-emerald-200 font-bold">
                    <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0 text-base" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recomendaciones Post-operatorias */}
            <div className="bg-[#0A192F] p-8 rounded-[2.5rem] border border-[#172A45] shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-white border-b border-[#172A45] pb-4">Recomendaciones Post-Operatorias</h2>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                {service.postOpRecommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#172A45]/50 p-3 rounded-xl">
                    <span className="text-[#00A896] font-black">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT ACTION DOCK (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-[10px] uppercase tracking-widest">
                Agendamiento Presencial
              </span>
              <h3 className="text-2xl font-black text-white">
                ¿Requieres {service.name}?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Agenda tu valoración presencial con el {doctor.title} {doctor.name}.
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
