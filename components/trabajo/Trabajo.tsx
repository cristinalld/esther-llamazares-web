import Link from "next/link";
import {
  Building2,
  MapPin,
  FileText,
  ArrowRight,
} from "lucide-react";

import { trabajo } from "@/data/trabajo";

const icons = {
  building: Building2,
  map: MapPin,
  file: FileText,
};

export default function Trabajo() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-[1500px] px-8 lg:px-16">

        {/* Cabecera */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C8A15A]">
            Actividad
          </p>

          <h2 className="mt-4 font-serif text-6xl text-[#071D3A]">
            Trabajo
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#5B6673]">
            Toda la actividad institucional y parlamentaria organizada
            por áreas de trabajo.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {trabajo.map((item) => {
            const Icon = icons[item.icono as keyof typeof icons];

            return (
              <Link
                key={item.id}
                href={item.enlace}
                className="group flex min-h-[460px] flex-col rounded-3xl border border-[#E8E1D5] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icono */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C8A15A]/10 transition group-hover:bg-[#C8A15A]/20">
                  <Icon
                    size={38}
                    className="text-[#C8A15A]"
                  />
                </div>

                {/* Título */}
                <h3 className="mt-8 text-center font-serif text-[2.8rem] leading-tight text-[#071D3A] transition group-hover:text-[#C8A15A]">
                  {item.titulo}
                </h3>

                {/* Descripción */}
                <p className="mx-auto mt-6 max-w-[320px] flex-1 text-center text-lg leading-8 text-[#5B6673]">
                  {item.descripcion}
                </p>

                {/* Separador */}
                <div className="mt-8 border-t border-[#ECE7DD]" />

                {/* Botón */}
                <div className="mt-8 flex items-center justify-center gap-3 font-semibold uppercase tracking-[0.18em] text-[#071D3A] transition group-hover:text-[#C8A15A]">
                  Ver actividad

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}