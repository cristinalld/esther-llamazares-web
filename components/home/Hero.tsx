import { sitePath } from "@/lib/sitePath";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-120px)] overflow-hidden bg-[#F8F6F2] lg:min-h-[calc(100svh-136px)]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={sitePath("/images/hero2.png")}
          alt="Esther Llamazares"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F2] via-[#F8F6F2]/55 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[68%] bg-gradient-to-r from-[#F8F6F2] via-[#F8F6F2]/90 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-120px)] w-full max-w-[1540px] items-start px-6 pb-16 pt-14 sm:px-10 lg:min-h-[calc(100svh-136px)] lg:items-center lg:px-16 lg:py-12 xl:px-24">
        <div className="max-w-[570px]">
          <p className="mb-4 text-[13px] font-semibold uppercase leading-6 tracking-[0.28em] text-[#C8A15A] sm:text-[14px]">
            Diputada por Asturias<br />Portavoz Municipal en Avilés
          </p>
          <h1 className="font-serif text-[3.5rem] leading-[0.9] text-[#071D3A] sm:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.15rem]">
            Esther<br />Llamazares
          </h1>
          <p className="mt-6 max-w-[430px] text-[17px] leading-8 text-[#3F4A56] sm:text-[18px]">
            Compromiso, diálogo y trabajo<br className="hidden sm:block" /> para construir futuro.
          </p>
          <Link href="/trabajo" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C8A15A] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#C8A15A]/20 transition duration-300 hover:bg-[#071D3A] sm:mt-9 sm:px-8 sm:py-4 sm:text-sm">
            Conocer mi trabajo <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}