import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SocialBanner from "@/components/layout/SocialBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Esther Llamazares | Diputada por Asturias",
  description: "Actividad institucional de Esther Llamazares, diputada por Asturias y portavoz municipal en Avilés.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <Navbar />
        <main className="pb-14 pt-16 lg:pt-20">{children}</main>
        <SocialBanner />
      </body>
    </html>
  );
}