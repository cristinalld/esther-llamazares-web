import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { press } from "@/data/press";

export default function EnPrensaPage() {
  return (
    <main className="bg-[#F8F6F2] min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-[1500px] px-8 lg:px-12">

        {/* Cabecera */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C8A15A]">
            Medios de comunicación
          </p>

          <h1 className="mt-4 font-serif text-6xl text-[#071D3A]">
            En prensa
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#5B6673]">
            Selección de entrevistas y noticias publicadas en distintos medios
            de comunicación sobre la actividad política de Esther Llamazares.
          </p>
        </div>

        {/* Noticias */}
        <div className="space-y-10">
          {press.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-[#E8E1D5] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-[430px_1fr]">

                {/* Imagen */}
                <div className="relative h-[320px] overflow-hidden bg-[#ECE7DD]">
                  <Image
                    src={item.imagen}
                    alt={item.titular}
                    fill
                    sizes="430px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center p-10 lg:p-12">

                  <div className="flex items-center gap-3">
                    <Newspaper
                      size={18}
                      className="text-[#C8A15A]"
                    />

                    <span className="text-sm font-semibold uppercase tracking-[0.20em] text-[#C8A15A]">
                      {item.medio}
                    </span>

                    <span className="text-gray-300">•</span>

                    <span className="text-sm text-gray-500">
                      {item.fecha}
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif text-[2.4rem] leading-tight text-[#071D3A] transition-colors duration-300 group-hover:text-[#C8A15A]">
                    {item.titular}
                  </h2>

                  <p className="mt-6 text-[18px] leading-8 text-[#5B6673]">
                    {item.resumen}
                  </p>

                  {item.url && (
                    <Link
                      href={item.url}
                      target="_blank"
                      className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#071D3A] transition hover:text-[#C8A15A]"
                    >
                      Leer la noticia completa
                      <ArrowUpRight size={18} />
                    </Link>
                  )}

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}