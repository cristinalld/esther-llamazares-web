import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { news } from "@/data/news";

export default function LatestNews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">

        {/* Cabecera */}
        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C8A15A]">
              Noticias
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#071D3A]">
              Últimas noticias
            </h2>
          </div>

          <Link
            href="/noticias"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#071D3A] transition hover:text-[#C8A15A]"
          >
            Ver todas
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Noticias */}
        <div className="space-y-8">
          {news.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              href={`/noticias/${item.slug}`}
              className="group grid gap-6 rounded-3xl border border-[#ECE7DD] bg-white p-5 md:grid-cols-[240px_1fr_auto] md:items-center md:gap-8 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:my-3 md:h-40 md:aspect-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="288px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Texto */}
              <div className="flex-1">

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8A15A]">
                    {item.date}
                  </span>

                  {item.tipo === "prensa" ? (
                    <span className="rounded-full bg-[#071D3A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      {item.medio}
                    </span>
                  ) : (
                    <span className="rounded-full bg-[#C8A15A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Actividad
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-[1.75rem] leading-tight sm:text-[2.05rem] text-[#071D3A] transition-colors group-hover:text-[#C8A15A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg leading-7 text-gray-600">
                  {item.excerpt}
                </p>
              </div>

              {/* Flecha */}
              <div className="hidden h-14 w-14 items-center md:flex justify-center rounded-full border border-[#E8E1D5] transition group-hover:border-[#C8A15A]">
                <ArrowRight
                  size={24}
                  className="text-[#C8A15A] transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}