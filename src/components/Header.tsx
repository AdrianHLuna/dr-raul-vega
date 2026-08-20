"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { doctor } from "@/data/doctor";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaCalendarCheck, 
  FaUserMd, 
  FaShieldAlt, 
  FaLungs, 
  FaBars, 
  FaTimes,
  FaMapMarkerAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Enfermedades", href: "/enfermedades" },
    { name: "Cirugías & Procedimientos", href: "/servicios" },
    { name: "Síntomas", href: "/sintomas" },
    { name: "Ubicación & Citas", href: "/contacto" },
  ];

  const headerLogoSrc = "/images/logo/LOGO-07.png";

  return (
    <header className="sticky top-0 z-50 bg-[#0A192F] text-white shadow-xl border-b border-[#172A45]">
      
      {/* Top Emergency / Info Bar */}
      <div className="bg-[#071324] text-slate-300 py-2 px-4 sm:px-6 border-b border-slate-800 text-[11px] sm:text-xs hidden sm:block overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-4 xl:gap-x-6 gap-y-1 text-center">
          <div className="flex items-center justify-center gap-4 xl:gap-6">
            <span className="flex items-center gap-2 text-rose-400 font-bold whitespace-nowrap">
              <FaPhoneAlt className="animate-pulse" /> Atención Prioritaria: <a href={`tel:${doctor.phone}`} className="hover:underline">{doctor.phone}</a>
            </span>
          </div>
          <span className="text-[#00A896] hidden md:inline">•</span>
          <div className="flex items-center justify-center gap-3 xl:gap-4 font-semibold text-slate-400">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span>Céd. Prof. 9781625 (La Salle)</span>
              <span>•</span>
              <span>Céd. Esp. 12463691 (UADY)</span>
              <span>•</span>
              <span>Céd. Subesp. 14842215 (UNAM)</span>
            </div>
            <span className="text-[#00A896]">|</span>
            <span className="text-emerald-400 flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Consultorio Disponible
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 xl:gap-4 whitespace-nowrap overflow-hidden">
        
        {/* Brand Container - LOGO-07 Clean Mark + Crisp HTML Typography (Single Line) */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group py-0.5 whitespace-nowrap shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={headerLogoSrc}
            alt={`Logotipo ${doctor.title} ${doctor.name}`}
            className="h-9 sm:h-11 xl:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />

          <div className="flex flex-col justify-center whitespace-nowrap">
            <h1 className="font-black text-xs sm:text-base md:text-lg text-white leading-tight tracking-wide whitespace-nowrap group-hover:text-[#00A896] transition-colors">
              {doctor.title} Raúl David Vega Vivar
            </h1>
            <p className="text-[9px] sm:text-[10px] xl:text-[11px] text-[#00A896] font-extrabold tracking-wider uppercase whitespace-nowrap">
              {doctor.specialistTitle}
            </p>
          </div>
        </Link>

        {/* Desktop Links (Centered in Header) */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-2 shrink">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 xl:px-4 py-1.5 xl:py-2 rounded-xl text-[11px] xl:text-xs font-extrabold uppercase tracking-wider transition-all text-center whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#00A896] text-[#0A192F] shadow-md shadow-[#00A896]/20"
                    : "text-slate-300 hover:bg-[#172A45] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right CTA (Single Line) */}
        <div className="hidden sm:flex items-center shrink-0 whitespace-nowrap">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-[11px] xl:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 xl:gap-2 hover:bg-[#02C39A] hover:scale-105 transition-all shadow-md whitespace-nowrap shrink-0"
          >
            <FaCalendarCheck size={13} className="shrink-0" />
            <span className="whitespace-nowrap">Agendar Cita</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#172A45] text-white hover:bg-[#00A896] hover:text-[#0A192F] transition-colors shrink-0"
          aria-label="Menú principal"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#071324] border-t border-[#172A45] px-6 py-6 space-y-3"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-center px-4 py-3 rounded-xl text-sm font-extrabold transition-all ${
                    isActive
                      ? "bg-[#00A896] text-[#0A192F]"
                      : "text-slate-300 hover:bg-[#172A45] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#172A45] space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#00A896] text-[#0A192F] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp size={16} /> Agendar Cita
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="w-full py-3.5 rounded-xl bg-rose-600/20 text-rose-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-rose-500/30"
              >
                <FaPhoneAlt size={14} /> Atención Prioritaria: {doctor.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
