import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/news";
import { approvedPress } from "@/data/press";

export default function LatestNews() {
  const latest = approvedPress.length > 0
    ? approvedPress.slice(0, 3).map((item) => ({
        id: item.id,
        href: item.url,
        external: true,
        image: item.imagen,
        date: item.fecha,
        type: item.medio,
        title: item.titular,
        excerpt: item.resumen,
      }))
    : news.slice(0, 3).map((item) => ({
        id: item.slug,
        href: `/noticias/${item.slug}`,
        external: false,
        image: item.image,
        date: item.date,
        type: item.tipo === "prensa" ? item.medio || "Prensa" : "Actividad",
        title: item.title,
        excerpt: item.excerpt,
      }));

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C8A15A]">Noticias</p>
            <h2 className="mt-3 font-serif text-4xl text-[#071D3A] sm:text-5xl">Últimas noticias</h2>
          </div>
          <Link href="/noticias" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#071D3A] transition hover:text-[#C8A15A] lg:flex">
            Ver todas <ArrowRight size={18} />
          </Link>
        </div>

        <div className="space-y-8">
          {latest.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group grid gap-6 rounded-3xl border border-[#ECE7DD] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[240px_1fr_auto] md:items-center md:gap-8 md:p-6"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:my-3 md:h-40 md:aspect-auto">
                <Image src={item.image} alt={item.title} fill sizes="288px" className="object-cover object-top transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex-1">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#C8A15A]">{item.date}</span>
                  <span className="rounded-full bg-[#071D3A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">{item.type}</span>
                </div>
                <h3 className="font-serif text-[1.75rem] leading-tight text-[#071D3A] transition-colors group-hover:text-[#C8A15A] sm:text-[2.05rem]">{item.title}</h3>
                <p className="mt-3 line-clamp-2 text-lg leading-7 text-gray-600">{item.excerpt}</p>
              </div>
              <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#E8E1D5] transition group-hover:border-[#C8A15A] md:flex">
                <ArrowRight size={24} className="text-[#C8A15A] transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}