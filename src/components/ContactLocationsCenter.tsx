"use client";

import React, { useState } from "react";
import { doctor } from "@/data/doctor";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaClock, 
  FaCreditCard, 
  FaHospital,
  FaArrowRight
} from "react-icons/fa";

interface ContactLocationsCenterProps {
  whatsappUrl: string;
}

export default function ContactLocationsCenter({ whatsappUrl }: ContactLocationsCenterProps) {
  const [activeLocIndex, setActiveLocIndex] = useState(0);
  const locations = doctor.locations || [];
  const currentLocation = locations[activeLocIndex] || locations[0];

  return (
    <div className="space-y-8">
      {/* ─── TOP EMERGENCY BANNER ────────────────────────────────────────────── */}
      <section>
        <div className="bg-gradient-to-r from-rose-950/80 via-[#0A192F] to-[#071324] border border-rose-500/30 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/20 text-rose-400 border border-rose-500/40 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-800">
                Línea Quirúrgica de Atención Prioritaria 24/7
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
            <FaPhoneAlt size={14} /> Atención Prioritaria: {doctor.phone}
          </a>
        </div>
      </section>

      {/* ─── LOCATION SELECTOR TABS ────────────────────────────────────────────── */}
      <section id="consultorios-tabs">
        <div className="bg-[#0A192F] p-4 sm:p-5 rounded-3xl border border-[#172A45] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black">
              <FaHospital size={20} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#00A896]">
                Red de Consultorios Presenciales
              </span>
              <h2 className="text-base font-black text-white">
                Selecciona la Ubicación de tu Cita:
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            {locations.map((loc, idx) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocIndex(idx)}
                className={`px-4 py-3 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
                  activeLocIndex === idx
                    ? "bg-[#00A896] text-[#0A192F] shadow-lg shadow-[#00A896]/20 scale-[1.03]"
                    : "bg-[#172A45] text-slate-300 hover:text-white hover:bg-[#1f385c]"
                }`}
              >
                <FaMapMarkerAlt size={12} className={activeLocIndex === idx ? "text-[#0A192F]" : "text-[#00A896]"} />
                <span>{loc.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMAND CENTER 2-COLUMN SPLIT ──────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: ACTIVE CONSULTORIO DETAILS CARD (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#172A45] pb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/30">
                  Ubicación Seleccionada ({activeLocIndex + 1} de {locations.length})
                </span>
                <h2 className="text-2xl font-black text-white mt-3">
                  {currentLocation.name}
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black flex-shrink-0">
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
                  <p className="font-extrabold text-white">Dirección de este Consultorio:</p>
                  <p className="text-slate-300 mt-0.5 leading-relaxed">{currentLocation.address}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#172A45]/50 border border-slate-800 flex items-center gap-3">
                <FaClock className="text-[#00A896] text-base flex-shrink-0" />
                <div>
                  <p className="font-extrabold text-white">Horario de Atención:</p>
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
                <FaWhatsapp size={18} /> Agendar Cita
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

        {/* RIGHT: EMBEDDED GOOGLE MAPS CARD FOR ACTIVE LOCATION (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-[#0A192F] rounded-[2.5rem] p-8 border border-[#172A45] shadow-2xl flex flex-col justify-between h-full space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-[#172A45] pb-4 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/30">
                    Mapa de Ubicación en Vivo
                  </span>
                  <h2 className="text-2xl font-black text-white mt-2">
                    {currentLocation.name}
                  </h2>
                </div>
                <FaMapMarkerAlt className="text-[#00A896] text-3xl" />
              </div>

              {/* ALWAYS VISIBLE EMBEDDED GOOGLE MAP IFRAME FOR SELECTED LOCATION */}
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-[#00A896]/40 shadow-inner relative">
                {currentLocation.mapEmbedUrl && (
                  <iframe
                    key={currentLocation.id}
                    title={`Mapa de Ubicación Dr. Raúl Vega - ${currentLocation.name}`}
                    src={currentLocation.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>

            {/* GPS Navigation Button */}
            <div className="pt-2">
              <a
                href={currentLocation.googleMapsUrl || doctor.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl"
              >
                <FaMapMarkerAlt size={16} /> Abrir Ruta a {currentLocation.name} en Maps / Waze
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ─── ALL 3 LOCATIONS GRID CARDS AT A GLANCE ───────────────────────────── */}
      <section className="pt-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#00A896]/10 px-4 py-1.5 rounded-full border border-[#00A896]/30 inline-block mb-3">
            Nuestra Red de Atención Presencial
          </span>
          <h2 className="text-3xl font-black text-white">
            Todos Nuestros Consultorios
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Elige la ubicación más conveniente para agendar tu consulta presencial de alta especialidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={loc.id}
              onClick={() => {
                setActiveLocIndex(idx);
                const elem = document.getElementById("consultorios-tabs");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className={`bg-[#0A192F] rounded-[2rem] p-6 border transition-all cursor-pointer space-y-4 flex flex-col justify-between ${
                activeLocIndex === idx
                  ? "border-[#00A896] shadow-2xl shadow-[#00A896]/20 scale-[1.02] ring-2 ring-[#00A896]/50"
                  : "border-[#172A45] hover:border-slate-700 hover:bg-[#0e213d]"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-bold">
                    <FaHospital size={18} />
                  </div>
                  {activeLocIndex === idx && (
                    <span className="px-3 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-[10px] uppercase">
                      Activo
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-black text-white leading-tight">
                  {loc.name}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed flex items-start gap-2">
                  <FaMapMarkerAlt className="text-[#00A896] text-sm mt-0.5 flex-shrink-0" />
                  <span>{loc.address}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-[#172A45] flex items-center justify-between text-xs">
                <span className="text-[#00A896] font-bold flex items-center gap-1">
                  {activeLocIndex === idx ? "Ubicación Seleccionada ✓" : "Ver en el Mapa"} <FaArrowRight size={10} />
                </span>
                <span className="text-slate-400 font-semibold">{loc.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
