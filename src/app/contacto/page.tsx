import React from "react";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaClock, 
  FaMoneyBillWave, 
  FaCreditCard, 
  FaShieldAlt, 
  FaLungs, 
  FaCar,
  FaCheckCircle,
  FaHospital,
  FaCalendarAlt,
  FaExclamationCircle
} from "react-icons/fa";

export const metadata = {
  title: `Contacto y Ubicación del Consultorio | ${doctor.title} ${doctor.name}`,
  description: `Dirección, teléfono de urgencias 24/7, WhatsApp y mapa de ubicación del consultorio de cirugía cardiotorácica del ${doctor.title} ${doctor.name} en Interlomas.`,
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${doctor.title} ${doctor.name} - Cirugía Cardiotorácica`,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: "52763",
      addressCountry: doctor.country,
    },
    telephone: doctor.phone,
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  return (
    <div className="min-h-screen bg-[#071324] text-slate-100 py-10 px-6 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Subtle Glowing Radial Background Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00A896]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BREADCRUMB WITH EXPLICIT DARK THEME VISIBILITY */}
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto & Ubicación" }]} isDark={true} />

        {/* ─── TOP EMERGENCY BANNER ────────────────────────────────────────────── */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-rose-950/80 via-[#0A192F] to-[#071324] border border-rose-500/30 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-600/20 text-rose-400 border border-rose-500/40 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                <FaPhoneAlt />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-800">
                  Línea Quirúrgica de Urgencias 24/7
                </span>
                <h3 className="text-lg font-black text-white mt-1">
                  Atención Inmediata para Traumatismo Torácico o Hemoptisis
                </h3>
              </div>
            </div>
            <a
              href={`tel:${doctor.phone}`}
              className="px-6 py-3.5 rounded-xl bg-rose-600 text-white font-black text-xs uppercase tracking-wider hover:bg-rose-500 transition-all shadow-lg flex items-center gap-2 flex-shrink-0"
            >
              <FaPhoneAlt size={14} /> Urgencias: {doctor.phone}
            </a>
          </div>
        </section>

        {/* ─── COMMAND CENTER 2-COLUMN SPLIT ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: INTERACTIVE APPOINTMENT & FEE CALCULATOR DOCK (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#172A45] pb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/30">
                    Centro de Citas Presenciales
                  </span>
                  <h2 className="text-2xl font-black text-white mt-3">
                    Consultorio Interlomas
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black">
                  <FaHospital size={22} />
                </div>
              </div>

              {/* Consultation Fee Pill */}
              <div className="bg-[#172A45] p-6 rounded-2xl border border-[#00A896]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">Costo Consulta Presencial:</span>
                  <span className="text-2xl font-black text-[#00A896]">${doctor.consultationPrice} MXN</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300 pt-2 border-t border-slate-700/50">
                  <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    • Meses Sin Intereses Disponibles
                  </span>
                  <span className="bg-sky-500/20 text-sky-300 px-2.5 py-1 rounded-full border border-sky-500/30">
                    • Reembolso de Gastos Médicos
                  </span>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-[#172A45]/50 border border-slate-800 flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#00A896] text-base mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-white">Dirección Oficial:</p>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{doctor.address}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#172A45]/50 border border-slate-800 flex items-center gap-3">
                  <FaClock className="text-[#00A896] text-base flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-white">Horario de Consultorio:</p>
                    <p className="text-slate-300 mt-0.5">{doctor.schedule}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#172A45]/50 border border-slate-800 flex items-center gap-3">
                  <FaCreditCard className="text-[#00A896] text-base flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-white">Formas de Pago Aceptadas:</p>
                    <p className="text-slate-300 mt-0.5">{doctor.paymentMethods.join(" • ")}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#02C39A] transition-all shadow-xl"
                >
                  <FaWhatsapp size={18} /> Confirmar Horario por WhatsApp
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="w-full py-3.5 rounded-xl bg-[#172A45] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-all border border-slate-700"
                >
                  <FaPhoneAlt size={14} className="text-[#00A896]" /> Telefonía Directa: {doctor.phone}
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT: EMBEDDED GOOGLE MAPS CARD (ALWAYS VISIBLE MAP) (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl flex flex-col justify-between h-full space-y-6">
              
              <div>
                <div className="flex items-center justify-between border-b border-[#172A45] pb-4 mb-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/30">
                      Mapa de Ubicación en Vivo
                    </span>
                    <h2 className="text-2xl font-black text-white mt-2">
                      Ubicación del Consultorio
                    </h2>
                  </div>
                  <FaMapMarkerAlt className="text-[#00A896] text-3xl" />
                </div>

                {/* ALWAYS VISIBLE EMBEDDED GOOGLE MAP IFRAME */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-[#00A896]/40 shadow-inner relative">
                  <iframe
                    title="Mapa de Ubicación Dr. Raúl Vega Interlomas"
                    src="https://maps.google.com/maps?q=Vialidad+de+la+Barranca+Interlomas+Huixquilucan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* GPS Navigation Button */}
              <div className="pt-2">
                <a
                  href={doctor.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl"
                >
                  <FaMapMarkerAlt size={16} /> Abrir Ruta de Navegación en Waze / Maps
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
