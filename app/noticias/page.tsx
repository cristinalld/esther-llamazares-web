import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { press } from "@/data/press";

export default function NoticiasPage() {
  return (
    <main className="bg-[#FAF8F4] pt-32 pb-24">

      {/* Cabecera */}
      <section className="mx-auto max-w-6xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A15A]">
          ACTUALIDAD
        </p>

        <h1 className="mt-5 font-serif text-6xl text-[#071D3A]">
          Noticias
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-20 rounded-full bg-[#C8A15A]" />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5B6673]">
          Toda la actualidad, intervenciones, visitas, reuniones y presencia en
          medios de Esther Llamazares.
        </p>

      </section>

      <section className="mx-auto mt-16 max-w-7xl px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A15A]">
            Esther en los medios
          </p>
          <h2 className="mt-4 font-serif text-5xl text-[#071D3A]">En prensa</h2>
        </div>

        <div className="space-y-10">
          {press.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[32px] border border-[#E8E1D5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[360px_1fr]">
                <div className="relative h-72 overflow-hidden bg-[#ECE7DD] lg:h-auto">
                  <Image src={item.imagen} alt={item.titular} fill sizes="360px" className="object-cover object-top transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <Newspaper size={18} className="text-[#C8A15A]" />
                    <span className="font-semibold uppercase tracking-[0.18em] text-[#C8A15A]">{item.medio}</span>
                    <span className="text-[#7A8490]">{item.fecha}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#071D3A]">{item.titular}</h3>
                  <p className="mt-5 text-lg leading-8 text-[#5B6673]">{item.resumen}</p>
                  {item.url && (
                    <Link href={item.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold uppercase tracking-[0.14em] text-[#071D3A] hover:text-[#C8A15A]">
                      Leer noticia completa <ArrowUpRight size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}