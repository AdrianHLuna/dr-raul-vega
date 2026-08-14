import React from "react";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { FaShieldAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUniversity, FaLungs } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  const footerLogoSrc = "/images/logo/LOGO-03.png";

  return (
    <footer className="bg-[#050E1C] text-slate-300 pt-16 pb-12 border-t border-[#172A45]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* ─── PROMINENT CENTERED WHITE LOGO (LOGO-03) SHOWCASE (NO WHITE FRAME) ─── */}
        <div className="text-center mb-12 border-b border-[#172A45] pb-12">
          <Link href="/" className="inline-block group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={footerLogoSrc}
              alt={`Logotipo Oficial ${doctor.title} ${doctor.name}`}
              className="h-32 sm:h-44 w-auto max-w-[550px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </Link>
          
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-6 tracking-wide">
            {doctor.title} {doctor.name}
          </h3>
          <p className="text-xs sm:text-sm font-extrabold text-[#00A896] uppercase tracking-widest mt-1">
            {doctor.specialistTitle}
          </p>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto mt-3 font-medium leading-relaxed">
            céd. prof. {doctor.cedula} (La Salle) • céd. esp. {doctor.cedulaEspecialidad} (UADY) • céd. subesp. {doctor.cedulaSubespecialidad} (UNAM)
          </p>
        </div>

        {/* ─── FOOTER NAVIGATION & CONTACT COLUMNS ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1: Accesos Rápido */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4 text-[#00A896]">
              Navegación del Sitio
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-[#00A896] transition-colors">Página Principal</Link>
              </li>
              <li>
                <Link href="/enfermedades" className="hover:text-[#00A896] transition-colors">Enfermedades Torácicas</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#00A896] transition-colors">Cirugía de Tórax Mínimamente Invasiva (VATS)</Link>
              </li>
              <li>
                <Link href="/sintomas" className="hover:text-[#00A896] transition-colors">Síntomas de Consulta</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#00A896] transition-colors">Ubicación y Citas</Link>
              </li>
              <li>
                <Link href="/aviso-de-privacidad" className="hover:text-[#00A896] transition-colors">Aviso de Privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Contacto & Dirección */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4 text-[#00A896]">
              Consultorio & Urgencias
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#00A896] mt-0.5 flex-shrink-0" />
                <span>{doctor.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-[#00A896] flex-shrink-0" />
                <a href={`tel:${doctor.phone}`} className="hover:text-[#00A896] font-bold transition-colors">{doctor.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaWhatsapp className="text-[#00A896] flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#00A896] font-bold transition-colors">{doctor.whatsapp}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-[#00A896] flex-shrink-0" />
                <a href={`mailto:${doctor.email}`} className="hover:text-[#00A896] transition-colors">{doctor.email}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sociedades Médicas */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest text-[#00A896]">
              Sociedades Médicas Internacionales
            </h4>
            <div className="bg-[#0A192F] p-4 rounded-2xl border border-[#172A45] text-xs space-y-2">
              <p className="font-bold text-[#00A896]">• SMNYCT (Neumología y Cirugía de Tórax)</p>
              <p className="font-bold text-[#00A896]">• ALAT (Asociación Latinoamericana del Tórax)</p>
              <p className="font-bold text-[#00A896]">• STS (Society of Thoracic Surgeons)</p>
            </div>
            <div className="pt-1 text-[11px] text-slate-400">
              <p>Horarios de Atención: {doctor.schedule}</p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-[#172A45] text-center text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} {doctor.title} {doctor.name}. Todos los derechos reservados.</p>
          <p className="max-w-3xl mx-auto text-[11px] text-slate-600 leading-relaxed">
            La información contenida en este sitio web tiene carácter informativo e instruccional. No sustituye la consulta quirúrgica presencial directa. Sin prescripción ni recomendación de fármacos de patente en este sitio.
          </p>
        </div>

      </div>
    </footer>
  );
}
