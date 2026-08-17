"use client";

import React from "react";
import Link from "next/link";
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

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <FaLungs /> {doctor.specialistTitle}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 font-semibold text-xs border border-white/15">
                  Hospital Ángeles Lomas
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                Cirujano de Tórax <br className="hidden sm:block"/>
              </h1>

              <p className="text-base lg:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed mb-8">
                Diagnóstico de precisión y tratamiento quirúrgico de vanguardia con mínima invasión para cáncer de pulmón, derrame pleural, neumotórax, timoma e hiperhidrosis.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 z-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#00A896] text-[#0A192F] font-black text-base flex items-center gap-3 hover:bg-[#02C39A] transition-all shadow-xl shadow-[#00A896]/20"
              >
                <FaCalendarCheck size={18} /> Agendar Consulta
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${doctor.phone}`}
                className="px-6 py-4 rounded-2xl bg-rose-600/20 text-rose-300 font-bold text-base flex items-center gap-2.5 border border-rose-500/30 hover:bg-rose-600/30 transition-all"
              >
                <FaPhoneAlt size={16} className="text-rose-400 animate-pulse" /> Urgencias: {doctor.phone}
              </motion.a>
            </div>
          </motion.div>

          {/* Right Doctor Spotlight Card (4-col) */}
          <motion.div 
            variants={fadeUp}
            className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between relative group overflow-hidden"
          >
            <FaUserMd className="absolute top-[-10px] right-[-10px] text-slate-100 text-[180px] pointer-events-none" />

            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-[#0A192F] to-[#172A45] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden shadow-inner">
              <motion.div 
                animate={{ scale: [1, 1.08, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 flex items-center justify-center text-[#00A896] mb-4 shadow-lg"
              >
                <FaUserMd size={40} />
              </motion.div>
              <h2 className="font-black text-2xl text-white">
                {doctor.title} {doctor.name}
              </h2>
              <p className="text-xs text-[#00A896] font-extrabold uppercase tracking-wider mt-1">
                {doctor.specialistTitle}
              </p>
              <p className="text-xs text-slate-300 mt-2 font-medium">
                céd. prof. 9781625 (La Salle) • céd. esp. 12463691 (UADY) • céd. subesp. 14842215 (UNAM)
              </p>
            </div>

            <div className="mt-6 space-y-3 relative z-10">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700">
                <span>Consulta Presencial:</span>
                <span className="text-[#0A192F] font-black text-sm">${doctor.consultationPrice} MXN</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-100">
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
              { val: "STS / ALAT / SMNYCT", label: "Miembro Activo Internacional" }
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
              <div className="aspect-[3/4] rounded-[2.5rem] bg-gradient-to-tr from-[#0A192F] via-[#172A45] to-slate-900 p-4 border-4 border-[#00A896]/40 shadow-2xl relative overflow-hidden group flex flex-col items-center justify-between text-center text-white">
                
                <div className="w-full h-full rounded-[2rem] bg-slate-950/60 border border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <motion.div 
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-full bg-[#00A896]/20 border border-[#00A896] flex items-center justify-center text-[#00A896] mb-4 shadow-xl"
                  >
                    <FaUserMd size={48} />
                  </motion.div>
                  
                  <span className="px-3.5 py-1 rounded-full bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-widest mb-2 shadow-md">
                    Fotografía Oficial
                  </span>
                  
                  <h3 className="font-black text-xl text-white">
                    {doctor.title} {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-semibold mt-1">
                    {doctor.specialistTitle}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/20 text-[11px] text-slate-300 font-medium space-y-1">
                    <p>• céd. prof. 9781625 (La Salle)</p>
                    <p>• céd. esp. 12463691 (UADY)</p>
                    <p>• céd. subesp. 14842215 (UNAM)</p>
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
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">STS • ALAT • SMNYCT</p>
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
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#0A192F] px-3.5 py-1 rounded-full">
                  Trayectoria Médica & Quirúrgica
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mt-4 mb-4">
                  Experiencia e Innovación en Cirugía de Tórax
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-medium mb-4">
                  "{doctor.bio}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold italic bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                  "{doctor.philosophy}"
                </p>
              </div>

              {/* Formación y Certificaciones */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                  <FaUniversity className="text-[#00A896] text-xl mb-2" />
                  <p className="font-extrabold text-xs text-slate-900">Médico Cirujano</p>
                  <p className="text-[10px] text-slate-500 font-medium">céd. prof. 9781625 (La Salle)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                  <FaUniversity className="text-[#00A896] text-xl mb-2" />
                  <p className="font-extrabold text-xs text-slate-900">Cirugía General</p>
                  <p className="text-[10px] text-slate-500 font-medium">céd. esp. 12463691 (UADY)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                  <FaUniversity className="text-[#00A896] text-xl mb-2" />
                  <p className="font-extrabold text-xs text-slate-900">Cirugía Torácica</p>
                  <p className="text-[10px] text-slate-500 font-medium">céd. subesp. 14842215 (UNAM)</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─── 3. DISEASES SECTION (12 ITEMS) ──────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0A192F] bg-[#00A896]/20 px-3.5 py-1 rounded-full border border-[#00A896]/40">
              Patologías Torácicas & Pulmonares
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mt-3">
              Enfermedades que Atendemos (12 Padecimientos Clave)
            </h2>
          </div>
          <Link
            href="/enfermedades"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-black text-sm text-[#0A192F] hover:text-[#00A896] transition-colors"
          >
            Ver catálogo completo <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.slice(0, 6).map((d) => (
            <motion.div
              key={d.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-extrabold text-[10px] uppercase">
                    Especialidad Torácica
                  </span>
                  <FaLungs className="text-[#00A896] text-base" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#0A192F] transition-colors">
                  {d.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
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

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                Cirugías & Procedimientos
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mt-3">
                Intervenciones Quirúrgicas Torácicas & Mínima Invasión
              </h2>
            </div>
            <Link
              href="/servicios"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-black text-sm text-[#00A896] hover:text-white transition-colors"
            >
              Ver todas las cirugías <FaArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {services.slice(0, 4).map((s) => (
              <motion.div
                key={s.id}
                whileHover={{ y: -6 }}
                className="bg-[#172A45] rounded-[2rem] p-8 border border-[#00A896]/30 flex flex-col justify-between group hover:border-[#00A896] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-xs uppercase tracking-wider">
                      {s.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {s.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                    {s.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {s.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-emerald-200">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0A192F] bg-[#00A896]/20 px-3.5 py-1 rounded-full border border-[#00A896]/40">
              Orientación al Paciente
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mt-3">
              Síntomas Principales de Consulta Torácica
            </h2>
          </div>
          <Link
            href="/sintomas"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-black text-sm text-[#0A192F] hover:text-[#00A896] transition-colors"
          >
            Ver todos los síntomas <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {symptoms.slice(0, 4).map((sym) => (
            <div key={sym.id} className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-lg relative overflow-hidden">
              <FaHeartbeat className="absolute bottom-[-10px] right-[-10px] text-slate-100 text-[120px] pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-black text-slate-900 mb-3">{sym.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{sym.description}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 text-xs text-slate-700">
                  <span className="font-extrabold text-[#0A192F] block mb-1">¿Por qué consultar con el especialista?</span>
                  {sym.whyConsult}
                </div>
                <Link
                  href={`/sintomas/${sym.slug}`}
                  className="inline-flex items-center gap-2 font-extrabold text-xs text-[#0A192F] uppercase tracking-wider hover:text-[#00A896] transition-colors"
                >
                  Leer orientación completa <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS ─────────────────────────────────────────────────── */}
      {doctor.testimonials && (
        <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200/80 shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#00A896] bg-[#0A192F] px-3.5 py-1 rounded-full">
                Opiniones de Pacientes
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A192F] mt-4 mb-12">
                Testimonios de Experiencia Quirúrgica
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {doctor.testimonials.map((t) => (
                  <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 space-y-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium italic">
                      "{t.text}"
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
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

      {/* ─── 7. LOCATION & CONTACT ───────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#0A192F] text-white rounded-[2.5rem] p-8 lg:p-12 border border-[#172A45] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <FaMapMarkerAlt className="absolute top-[-30px] right-[-30px] text-white/5 text-[240px] pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] font-black text-xs uppercase tracking-widest">
              Ubicación del Consultorio
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Consultorio en Hospital Ángeles Lomas
            </h2>
            <div className="space-y-3 text-sm text-slate-200">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#00A896] text-lg mt-1 flex-shrink-0" />
                <span>{doctor.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMoneyBillWave className="text-[#00A896] text-lg flex-shrink-0" />
                <span>Precio Consulta Presencial: <strong>${doctor.consultationPrice} MXN</strong> (Meses Sin Intereses)</span>
              </p>
              <p className="flex items-center gap-3">
                <FaCreditCard className="text-[#00A896] text-lg flex-shrink-0" />
                <span>Métodos de Pago: {doctor.paymentMethods.join(", ")}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#172A45] p-8 rounded-3xl border border-[#00A896]/30 text-center space-y-6 relative z-10">
            <h3 className="font-black text-2xl text-white">¿Deseas una valoración?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reserva tu cita presencial o solicita orientación médica para cirugía torácica con el {doctor.title} {doctor.name}.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#02C39A] transition-all shadow-xl"
            >
              <FaWhatsapp size={18} /> Agendar Cita
            </motion.a>
          </div>

        </div>
      </section>

    </div>
  );
}
