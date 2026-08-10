import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle} en CDMX`,
  description: doctor.bio.substring(0, 160) + "...",
  keywords: [
    `Cirujano cardiotoracico CDMX`,
    `Cirujano de torax Interlomas`,
    `Cirugia toracica VATS CDMX`,
    `Lobectomia pulmonar CDMX`,
    `Cancer de pulmon cirugia`,
    `Simpatectomia hiperhidrosis`
  ],
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle}`,
    description: doctor.bio.substring(0, 160) + "...",
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[#F8FAFC]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
