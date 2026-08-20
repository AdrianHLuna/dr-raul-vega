import React from "react";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import ContactLocationsCenter from "@/components/ContactLocationsCenter";

export const metadata = {
  title: `Contacto y Ubicación de Consultorios | ${doctor.title} ${doctor.name}`,
  description: `Dirección, atención prioritaria 24/7, WhatsApp y mapa de ubicación de los consultorios del ${doctor.title} ${doctor.name} en Ángeles Lomas, Ángeles Pedregal y Star Médica Pedregal.`,
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${doctor.title} ${doctor.name} - Cirugía Torácica`,
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

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        
        {/* BREADCRUMB WITH EXPLICIT DARK THEME VISIBILITY */}
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto & Ubicación" }]} isDark={true} />

        {/* ─── DYNAMIC 3-LOCATION COMMAND CENTER & MAPS ──────────────────────── */}
        <ContactLocationsCenter whatsappUrl={whatsappUrl} />

      </div>
    </div>
  );
}
