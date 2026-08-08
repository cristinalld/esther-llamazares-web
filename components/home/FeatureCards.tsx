import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Users,
} from "lucide-react";

const cards = [
  {
    title: "En Avilés",
    text: "Trabajando cada día por una ciudad mejor.",
    image: "/images/aviles.webp",
    href: "/aviles",
    icon: Building2,
  },
  {
    title: "En el Congreso",
    text: "Defendiendo a Asturias donde se toman las decisiones.",
    image: "/images/congreso.webp",
    href: "/congreso",
    icon: Landmark,
  },
  {
    title: "Escuchar",
    text: "La política empieza escuchando a la gente.",
    image: "/images/escuchar.webp",
    href: "/escuchar",
    icon: Users,
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-20 bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group relative min-h-[210px] overflow-hidden rounded-2xl shadow-2xl sm:min-h-[190px]"
              >
                {/* Imagen */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#071D3A]/65" />

                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071D3A]/92 via-[#071D3A]/60 to-[#071D3A]/35" />

                {/* Icono */}
                <div className="absolute left-7 top-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A15A] bg-[#071D3A]/25 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-[#C8A15A]" />
                </div>

                {/* Texto */}
                <div className="absolute left-24 top-8 right-14">
                  <h3 className="font-serif text-[2rem] leading-none text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-[15px] leading-6 text-white/90">
                    {card.text}
                  </p>
                </div>

                {/* Flecha */}
                <div className="absolute bottom-6 right-6">
                  <ArrowRight className="h-6 w-6 text-[#C8A15A] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}