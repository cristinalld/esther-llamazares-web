import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { news } from "@/data/news";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;
export default async function NewsPage({ params }: Props) {
  const { slug } = await params;

  const article = news.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const currentIndex = news.findIndex((n) => n.slug === slug);
  const previous = currentIndex > 0 ? news[currentIndex - 1] : null;
  const next =
    currentIndex < news.length - 1 ? news[currentIndex + 1] : null;

  return (
    <article className="bg-[#FAF8F4] pt-32 pb-24">
      <div className="mx-auto max-w-[980px] px-6">

        {/* Volver */}
        <Link
          href="/noticias"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#071D3A] transition hover:text-[#C8A15A]"
        >
          <ArrowLeft size={18} />
          Volver a noticias
        </Link>

        {/* Fecha */}
        <div className="flex items-center gap-3 text-[#C8A15A]">
          <CalendarDays size={18} />
          <span className="text-sm font-semibold uppercase tracking-[0.25em]">
            {article.date}
          </span>
        </div>

        {/* Título */}
        <h1 className="mt-6 font-serif text-[3.8rem] leading-[1.05] text-[#071D3A]">
          {article.title}
        </h1>

        {/* Entradilla */}
        <p className="mt-8 text-[22px] leading-9 text-[#5B6673]">
          {article.excerpt}
        </p>

        {/* Imagen */}
        <div className="relative mt-14 h-[560px] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="mt-16 space-y-8 text-[20px] leading-10 text-[#3F4A56]">
          <p>{article.content}</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae urna sit amet arcu cursus dignissim.
            Suspendisse potenti. Vivamus at purus vel velit tincidunt
            convallis. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium.
          </p>

          <p>
            Donec accumsan, sapien non malesuada luctus, purus neque
            fermentum justo, vel volutpat ligula sem sed libero.
            Curabitur feugiat elit non purus porta, in condimentum
            mauris aliquam.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-20 grid gap-6 border-t border-[#E7E0D5] pt-10 md:grid-cols-2">

          {previous ? (
            <Link
              href={`/noticias/${previous.slug}`}
              className="group rounded-2xl border border-[#E7E0D5] bg-white p-6 transition hover:shadow-lg"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A15A]">
                Noticia anterior
              </p>

              <div className="flex items-center gap-3">
                <ArrowLeft
                  className="text-[#C8A15A]"
                  size={20}
                />

                <span className="font-serif text-2xl text-[#071D3A] group-hover:text-[#C8A15A]">
                  {previous.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/noticias/${next.slug}`}
              className="group rounded-2xl border border-[#E7E0D5] bg-white p-6 text-right transition hover:shadow-lg"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A15A]">
                Siguiente noticia
              </p>

              <div className="flex items-center justify-end gap-3">
                <span className="font-serif text-2xl text-[#071D3A] group-hover:text-[#C8A15A]">
                  {next.title}
                </span>

                <ArrowRight
                  className="text-[#C8A15A]"
                  size={20}
                />
              </div>
            </Link>
          ) : (
            <div />
          )}

        </div>
      </div>
    </article>
  );
}