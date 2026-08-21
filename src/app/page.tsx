"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import StructuredData from "@/components/StructuredData";
import { 
  FaCalendarCheck, 
  FaWhatsapp, 
  FaAward, 
  FaUniversity, 
  FaCertificate, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaCreditCard, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaArrowRight,
  FaUserMd,
  FaStethoscope,
  FaHeartbeat,
  FaStar,
  FaPhoneAlt,
  FaLungs,
  FaHospitalSymbol,
  FaBriefcaseMedical,
  FaNotesMedical
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      addressCountry: doctor.country,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 pb-16 relative overflow-hidden">
      <StructuredData data={homeSchema} />

      {/* ─── SUBTLE WATERMARK BACKGROUND ICONS ───────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-3 sm:opacity-5">
        <FaLungs className="absolute top-20 right-10 text-9xl text-[#0A192F]" />
        <FaHeartbeat className="absolute top-1/3 left-5 text-9xl text-[#00A896]" />
        <FaHospitalSymbol className="absolute bottom-1/4 right-20 text-9xl text-[#0A192F]" />
      </div>

      {/* ─── 1. HERO SECTION (STRICTLY 100% VH MIN-HEIGHT FOLD) ──────────────── */}
      <section className="min-h-screen flex flex-col justify-center pt-8 pb-16 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Subtle Motion Accents */}
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-16 text-[#00A896]/20 text-8xl pointer-events-none hidden lg:block"
        >
          <FaLungs />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          
          {/* Main Hero Card (Large 8-col) */}
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-8 bg-[#0A192F] text-white rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl border border-[#172A45] flex flex-col justify-between"
          >
            {/* Glow Overlay & Watermark Icon */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/15 rounded-full blur-3xl pointer-events-none" />
            <FaLungs className="absolute bottom-[-30px] right-[-30px] text-white/5 text-[280px] pointer-events-none" />

            <div className="flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <FaLungs /> {doctor.specialistTitle}
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-2">
                Cirujano de Tórax
              </h1>

              <h2 className="text-2xl lg:text-4xl font-extrabold text-[#00A896] mb-6">
                Dr. Raúl Vega
              </h2>

              <p className="text-base lg:text-lg text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed mb-6">
                Diagnóstico y tratamiento quirúrgico especializado de cáncer y nódulos pulmonares, así como enfermedades de la pleura, mediastino, tráquea y pared torácica, con técnicas de mínima invasión.
              </p>

              <p className="text-xs sm:text-sm text-[#00A896] font-extrabold tracking-wide max-w-2xl mx-auto leading-relaxed mb-8 bg-[#00A896]/10 px-5 py-3 rounded-2xl border border-[#00A896]/30">
                Cáncer de pulmón · Nódulos pulmonares · Derrame pleural · Neumotórax · Tumores del tórax · Enfermedades de la tráquea · Fracturas costales
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 z-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#00A896] text-[#0A192F] font-black text-base flex items-center gap-3 hover:bg-[#02C39A] transition-all shadow-xl shadow-[#00A896]/20"
              >
                <FaCalendarCheck size={18} /> Agendar Cita
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${doctor.phone}`}
                className="px-6 py-4 rounded-2xl bg-rose-600/20 text-rose-300 font-bold text-base flex items-center gap-2.5 border border-rose-500/30 hover:bg-rose-600/30 transition-all"
              >
                <FaPhoneAlt size={16} className="text-rose-400 animate-pulse" /> Atención Prioritaria: {doctor.phone}
              </motion.a>
            </div>
          </motion.div>

          {/* Right Doctor Spotlight Card (4-col) */}
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-4 bg-white rounded-[2.5rem] p-6 border border-slate-200/80 shadow-xl flex flex-col justify-between relative group overflow-hidden"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#00A896]/40 shadow-2xl relative bg-[#0A192F] group-hover:scale-[1.01] transition-transform duration-500">
              <Image
                src={doctor.photo}
                alt={`Fotografía Oficial - ${doctor.title} ${doctor.name}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="px-3 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-[10px] uppercase tracking-widest self-start mb-1.5 shadow-md">
                  Fotografía Oficial
                </span>
                <h2 className="font-black text-xl text-white drop-shadow-md">
                  {doctor.title} {doctor.name}
                </h2>
                <p className="text-xs text-[#00A896] font-extrabold uppercase tracking-wider drop-shadow">
                  {doctor.specialistTitle}
                </p>
                <div className="text-[10px] text-slate-200 mt-2 font-medium flex flex-wrap gap-x-2 gap-y-0.5">
                  <span className="whitespace-nowrap">Céd. Prof. 9781625</span> •
                  <span className="whitespace-nowrap">Céd. Esp. 12463691</span> •
                  <span className="whitespace-nowrap">Céd. Subesp. 14842215</span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 relative z-10">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700">
                <span>Consulta Presencial:</span>
                <span className="text-[#0A192F] font-black text-sm">${doctor.consultationPrice} MXN</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                <FaShieldAlt className="flex-shrink-0 text-emerald-600" />
                <span>Meses Sin Intereses & Reembolso con Seguros</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar (Full 12-col Bento) */}
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { val: "+2,500", label: "Pacientes Atendidos" },
              { val: "+1,500", label: "Cirugías Realizadas" },
              { val: "6 Años", label: "Experiencia Quirúrgica" },
              { val: "SMNYCT / ALAT / ATS", label: "Miembro Activo Internacional" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md text-center hover:border-[#00A896] transition-all"
              >
                <p className="text-2xl lg:text-3xl font-black text-[#0A192F]">{stat.val}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </section>

      {/* ─── 2. ABOUT ME SECTION (WITH DEDICATED PHOTOGRAPHY CONTAINER aspect-[3/4]) ─── */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200/80 shadow-2xl relative overflow-hidden">
          
          <FaCertificate className="absolute bottom-[-30px] right-[-30px] text-slate-100 text-[240px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Dedicated Doctor Photo Slot aspect-[3/4] */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] bg-[#0A192F] border-4 border-[#00A896]/40 shadow-2xl relative overflow-hidden group">
                <Image
                  src={doctor.photo}
                  alt={`Fotografía Oficial del ${doctor.title} ${doctor.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="px-3.5 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-widest self-start mb-2 shadow-md">
                    Fotografía Oficial
                  </span>
                  <h3 className="font-black text-2xl text-white">
                    {doctor.title} {doctor.name}
                  </h3>
                  <p className="text-xs text-[#00A896] font-extrabold uppercase tracking-wider">
                    {doctor.specialistTitle}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/20 text-[11px] text-slate-200 font-medium space-y-0.5">
                    <p className="whitespace-nowrap">• Céd. Prof. 9781625 (La Salle)</p>
                    <p className="whitespace-nowrap">• Céd. Esp. 12463691 (UADY)</p>
                    <p className="whitespace-nowrap">• Céd. Subesp. 14842215 (UNAM)</p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-white text-[#0A192F] px-5 py-3 rounded-2xl border border-[#00A896]/50 shadow-2xl flex items-center gap-3 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center font-black">
                    <FaAward size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm text-[#0A192F]">Cirugía de Tórax</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SMNYCT • ALAT • ATS • ERS • SEPAR</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* About Info & Credentials (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8 text-center flex flex-col items-center"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#0A192F] px-4 py-1.5 rounded-full inline-block mb-3">
                  Trayectoria Médica & Quirúrgica
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mb-4">
                  Experiencia e Innovación en Cirugía de Tórax — {doctor.title} {doctor.name}
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-medium mb-4 max-w-2xl">
                  "{doctor.bio}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold italic bg-slate-50 p-4 rounded-xl border border-slate-200/60 max-w-2xl">
                  "{doctor.philosophy}"
                </p>
              </div>

              {/* Formación y Certificaciones */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-center">
                  <FaUniversity className="text-[#00A896] text-xl mb-2 mx-auto" />
                  <p className="font-extrabold text-xs text-slate-900">Médico Cirujano</p>
                  <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Céd. Prof. 9781625 (La Salle)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-center">
                  <FaUniversity className="text-[#00A896] text-xl mb-2 mx-auto" />
                  <p className="font-extrabold text-xs text-slate-900">Cirugía General</p>
                  <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Céd. Esp. 12463691 (UADY)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-center">
                  <FaUniversity className="text-[#00A896] text-xl mb-2 mx-auto" />
                  <p className="font-extrabold text-xs text-slate-900">Cirugía Torácica</p>
                  <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Céd. Subesp. 14842215 (UNAM)</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─── 3. DISEASES SECTION (12 ITEMS) ──────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#0A192F] bg-[#00A896]/20 px-4 py-1.5 rounded-full border border-[#00A896]/40 mb-3 inline-block">
            Patologías Torácicas & Pulmonares
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mb-4 leading-tight">
            Enfermedades que Atendemos <br />
            <span className="block mt-1 text-2xl lg:text-3xl font-extrabold text-[#00A896]">
              (12 Padecimientos Clave)
            </span>
          </h2>
          <Link
            href="/enfermedades"
            className="inline-flex items-center gap-2 font-black text-sm text-[#0A192F] hover:text-[#00A896] transition-colors bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm"
          >
            Ver catálogo completo <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.slice(0, 6).map((d) => (
            <motion.div
              key={d.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-center"
            >
              <div className="relative z-10 flex flex-col items-center">
                {/* Disease Image Thumbnail */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-slate-200/60 shadow-sm bg-[#0A192F] group-hover:shadow-md transition-shadow">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 px-3 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-[10px] uppercase tracking-widest shadow-md">
                    Cirugía Torácica
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 font-extrabold text-[10px] uppercase">
                    {d.technicalName ? d.technicalName.substring(0, 28) + "..." : "Especialidad Torácica"}
                  </span>
                  <FaLungs className="text-[#00A896] text-sm" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#0A192F] transition-colors text-center leading-snug">
                  {d.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4 font-medium line-clamp-3 text-center">
                  {d.description}
                </p>
              </div>

              <Link
                href={`/enfermedades/${d.slug}`}
                className="w-full py-3 rounded-xl bg-[#0A192F] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#00A896] hover:text-[#0A192F] transition-all shadow-md relative z-10"
              >
                Ver información médica <FaArrowRight size={10} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── 4. SERVICES SECTION (10 SURGERIES) ──────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#0A192F] text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <FaBriefcaseMedical className="absolute bottom-[-20px] right-[-20px] text-white/5 text-[220px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 mb-3 inline-block">
              Cirugías & Procedimientos
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Intervenciones Quirúrgicas Torácicas & Mínima Invasión
            </h2>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-black text-sm text-[#00A896] hover:text-white transition-colors bg-white/10 px-5 py-2.5 rounded-xl border border-white/15"
            >
              Ver todas las cirugías <FaArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {services.slice(0, 4).map((s) => (
              <motion.div
                key={s.id}
                whileHover={{ y: -6 }}
                className="bg-[#172A45] rounded-[2rem] p-8 border border-[#00A896]/30 flex flex-col justify-between group hover:border-[#00A896] transition-all text-center"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Service Image Banner */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-[#00A896]/30 shadow-md bg-[#0A192F]">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-[10px] uppercase tracking-widest shadow-md">
                      {s.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 text-center">
                    {s.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium text-center">
                    {s.description}
                  </p>

                  <ul className="space-y-2 mb-6 w-full flex flex-col items-center">
                    {s.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2 text-xs text-emerald-200">
                        <FaCheckCircle className="text-[#00A896] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/servicios/${s.slug}`}
                  className="w-full py-3.5 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#02C39A] transition-all shadow-md"
                >
                  Ver ficha técnica quirúrgica <FaArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. SYMPTOMS FINDER SECTION (10 SYMPTOMS) ─────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#0A192F] bg-[#00A896]/20 px-4 py-1.5 rounded-full border border-[#00A896]/40 mb-3 inline-block">
            Orientación al Paciente
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mb-4">
            Síntomas Principales de Consulta Torácica
          </h2>
          <Link
            href="/sintomas"
            className="inline-flex items-center gap-2 font-black text-sm text-[#0A192F] hover:text-[#00A896] transition-colors bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm"
          >
            Ver todos los síntomas <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {symptoms.slice(0, 4).map((sym) => (
            <div key={sym.id} className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-lg relative overflow-hidden text-center flex flex-col justify-between group">
              <div className="relative z-10 flex flex-col items-center w-full">
                {/* Symptom Image Banner */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-slate-200/60 shadow-sm bg-[#0A192F]">
                  <Image
                    src={sym.image}
                    alt={sym.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white font-black text-[10px] uppercase tracking-widest shadow-md">
                    Fotografía Clínica
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 text-center">{sym.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium text-center">{sym.description}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 text-xs text-slate-700 text-center w-full">
                  <span className="font-extrabold text-[#0A192F] block mb-1">¿Por qué consultar con el especialista?</span>
                  {sym.whyConsult}
                </div>
              </div>

              <Link
                href={`/sintomas/${sym.slug}`}
                className="inline-flex items-center justify-center gap-2 font-extrabold text-xs text-[#0A192F] uppercase tracking-wider hover:text-[#00A896] transition-colors relative z-10 py-2"
              >
                Leer orientación completa <FaArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS ─────────────────────────────────────────────────── */}
      {doctor.testimonials && (
        <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200/80 shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#0A192F] px-4 py-1.5 rounded-full inline-block mb-3">
                Opiniones de Pacientes
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mb-12">
                Testimonios de Experiencia Quirúrgica — {doctor.title} {doctor.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                {doctor.testimonials.map((t) => (
                  <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 space-y-4 text-center flex flex-col items-center">
                    <div className="flex items-center justify-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium italic text-center">
                      "{t.text}"
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs w-full">
                      <span className="font-bold text-slate-900">{t.patientName}</span>
                      <span className="text-slate-400">{t.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 7. FEES, PAYMENT METHODS & INSURANCE ────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#0A192F] text-white rounded-[2.5rem] p-8 lg:p-12 border border-[#172A45] shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
          <FaShieldAlt className="absolute top-[-30px] right-[-30px] text-white/5 text-[260px] pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mx-auto space-y-4 relative z-10 mb-10 flex flex-col items-center">
            <span className="px-4 py-1.5 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-xs uppercase tracking-widest inline-block border border-[#00A896]/40">
              Costo de Consulta, Seguros & Métodos de Pago
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Valoración Médica, Formas de Pago y Aseguradoras
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
              Brindamos esquemas de pago flexibles, meses sin intereses y respaldo documental completo para el trámite de reembolso con aseguradoras de gastos médicos mayores.
            </p>
          </div>

          {/* 3 Bento Cards: Costo, Métodos de Pago, Seguros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10 mb-10 text-left">
            
            {/* Card 1: Costo de Consulta */}
            <div className="bg-[#172A45] p-6 lg:p-8 rounded-3xl border border-[#00A896]/30 flex flex-col justify-between space-y-4 hover:border-[#00A896] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center mb-4">
                  <FaMoneyBillWave size={22} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00A896] block mb-1">
                  Inversión en Salud
                </span>
                <h3 className="text-xl font-black text-white mb-2">Consulta Presencial</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-black text-white">${doctor.consultationPrice}</span>
                  <span className="text-xs text-slate-400 font-bold">MXN</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Evaluación clínica completa por el especialista, revisión de tomografías o radiografía y propuesta quirúrgica.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700/60">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                  <FaCheckCircle className="text-[#00A896]" /> Disponible a Meses Sin Intereses
                </span>
              </div>
            </div>

            {/* Card 2: Métodos de Pago */}
            <div className="bg-[#172A45] p-6 lg:p-8 rounded-3xl border border-[#00A896]/30 flex flex-col justify-between space-y-4 hover:border-[#00A896] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center mb-4">
                  <FaCreditCard size={22} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00A896] block mb-1">
                  Facilidades de Pago
                </span>
                <h3 className="text-xl font-black text-white mb-3">Métodos de Pago</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {doctor.paymentMethods.map((pm, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#0A192F] text-slate-200 text-[11px] font-semibold border border-slate-700">
                      {pm}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-700/60">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
                  <FaCheckCircle className="text-[#00A896]" /> Cobro seguro con terminales y MSI
                </span>
              </div>
            </div>

            {/* Card 3: Seguros Médicos */}
            <div className="bg-[#172A45] p-6 lg:p-8 rounded-3xl border border-[#00A896]/30 flex flex-col justify-between space-y-4 hover:border-[#00A896] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00A896]/20 text-[#00A896] flex items-center justify-center mb-4">
                  <FaShieldAlt size={22} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00A896] block mb-1">
                  Gastos Médicos Mayores
                </span>
                <h3 className="text-xl font-black text-white mb-2">Seguros Médicos</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Emisión de informes médicos, facturas y trámites de reembolso con aseguradoras:
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {doctor.insurances?.map((ins, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-[#00A896]/15 text-[#00A896] text-[10px] font-extrabold border border-[#00A896]/30">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-700/60">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                  <FaCheckCircle className="text-[#00A896]" /> Asesoría en trámites de reembolso
                </span>
              </div>
            </div>

          </div>

          {/* 3 Consultorios Presenciales (Sin mapa) */}
          <div className="w-full max-w-6xl relative z-10 mb-10 text-left">
            <div className="text-center mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/30 inline-block mb-2">
                Consultorios Presenciales
              </span>
              <h3 className="text-xl lg:text-2xl font-black text-white">
                Ubicaciones de Atención Médica
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctor.locations?.map((loc) => (
                <div key={loc.id} className="bg-[#172A45] p-6 rounded-3xl border border-[#00A896]/20 hover:border-[#00A896] transition-all flex flex-col justify-between space-y-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#00A896]/20 text-[#00A896] font-black text-[10px] uppercase tracking-wider inline-block mb-2">
                      {loc.city}
                    </span>
                    <h4 className="font-black text-base text-white mb-2 leading-snug">{loc.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {loc.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
            {/* Box 1: Agendar Cita Regular */}
            <div className="bg-[#172A45] p-8 rounded-3xl border border-[#00A896]/30 text-center space-y-4 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-[10px] uppercase tracking-widest inline-block mb-3">
                  Consulta Presencial
                </span>
                <h3 className="font-black text-2xl text-white">¿Deseas agendar tu valoración?</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Reserva tu cita presencial o solicita orientación médica para cirugía torácica con el {doctor.title} {doctor.name}.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#02C39A] transition-all shadow-xl"
              >
                <FaWhatsapp size={18} /> Agendar Cita por WhatsApp
              </motion.a>
            </div>

            {/* Box 2: Valoración Torácica Prioritaria 24/7 */}
            <div className="bg-gradient-to-br from-[#172A45] to-rose-950/40 p-8 rounded-3xl border border-rose-500/40 text-center space-y-4 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-black text-[10px] uppercase tracking-widest inline-block mb-3 animate-pulse">
                  VALORACIÓN TORÁCICA PRIORITARIA 24/7
                </span>
                <h3 className="font-black text-xl text-white">¿Presentas una urgencia torácica?</h3>
                <p className="text-xs text-slate-200 leading-relaxed mt-2 font-medium">
                  Atención médica prioritaria para urgencias y padecimientos torácicos agudos.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${doctor.phone}`}
                className="w-full py-4 rounded-xl bg-rose-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-rose-500 transition-all shadow-xl"
              >
                <FaPhoneAlt size={16} /> Atención Prioritaria 24/7: {doctor.phone}
              </motion.a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
