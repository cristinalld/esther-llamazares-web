import { sitePath } from "@/lib/sitePath";
import Image from "next/image";
import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Landmark,
} from "lucide-react";

export default function SobreMiPage() {
  return (
    <main className="bg-[#F8F6F2] pt-32 pb-24">
      <div className="mx-auto max-w-[1500px] px-8 lg:px-16">

        {/* Cabecera */}
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Imagen */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={sitePath("/images/sobre-mi/esther.webp")}
              alt="Esther Llamazares"
              width={700}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C8A15A]">
              Sobre mí
            </p>

            <h1 className="mt-4 font-serif text-6xl leading-tight text-[#071D3A]">
              Compromiso, gestión y cercanía
            </h1>

            <div className="mt-10 space-y-7 text-lg leading-9 text-[#4B5563]">

              <p>
                Soy Esther Llamazares, diputada por Asturias en el Congreso
                de los Diputados y portavoz del Partido Popular en el
                Ayuntamiento de Avilés. Mi vocación es trabajar para mejorar
                la vida de las personas desde la cercanía, el diálogo y la
                responsabilidad.
              </p>

              <p>
                Antes de dedicarme plenamente a la política desarrollé mi
                carrera profesional en el ámbito de la dirección, el
                marketing y la gestión empresarial, desempeñando
                responsabilidades en entidades como el Real Oviedo y el
                Real Avilés.
              </p>

              <p>
                Desde 2015 formo parte del Ayuntamiento de Avilés como
                concejala del Partido Popular y, desde 2019, ejerzo como
                portavoz del Grupo Municipal. En 2023 fui elegida diputada
                por Asturias en el Congreso de los Diputados.
              </p>

            </div>

          </div>

        </div>

        {/* Trayectoria */}
        <section className="mt-32">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C8A15A]">
              Trayectoria
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#071D3A]">
              Experiencia profesional e institucional
            </h2>

          </div>

          <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

            {/* Formación */}
            <div className="flex flex-col rounded-3xl border border-[#ECE7DD] bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
                <GraduationCap
                  size={30}
                  className="text-[#C8A15A]"
                />
              </div>

              <h3 className="font-serif text-4xl text-[#071D3A]">
                Formación
              </h3>

              <p className="mt-6 flex-1 text-[17px] leading-8 text-[#5B6673]">
                Experta Universitaria en Protocolo y Ceremonial y estudios de
                Derecho, orientando su formación hacia la gestión y el servicio
                público.
              </p>

            </div>

            {/* Empresa */}
            <div className="flex flex-col rounded-3xl border border-[#ECE7DD] bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
                <BriefcaseBusiness
                  size={30}
                  className="text-[#C8A15A]"
                />
              </div>

              <h3 className="font-serif text-4xl text-[#071D3A]">
                Empresa
              </h3>

              <p className="mt-6 flex-1 text-[17px] leading-8 text-[#5B6673]">
                Amplia experiencia en dirección, marketing y gestión
                empresarial, desarrollando proyectos y coordinando equipos.
              </p>

            </div>

            {/* Avilés */}
            <div className="flex flex-col rounded-3xl border border-[#ECE7DD] bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
                <Building2
                  size={30}
                  className="text-[#C8A15A]"
                />
              </div>

              <h3 className="font-serif text-4xl text-[#071D3A]">
                Avilés
              </h3>

              <p className="mt-6 flex-1 text-[17px] leading-8 text-[#5B6673]">
                Concejala desde 2015 y portavoz del Grupo Municipal Popular
                desde 2019, trabajando por una ciudad con más oportunidades.
              </p>

            </div>

            {/* Congreso */}
            <div className="flex flex-col rounded-3xl border border-[#ECE7DD] bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
                <Landmark
                  size={30}
                  className="text-[#C8A15A]"
                />
              </div>

              <h3 className="font-serif text-4xl text-[#071D3A]">
                Congreso
              </h3>

              <p className="mt-6 flex-1 text-[17px] leading-8 text-[#5B6673]">
                Diputada por Asturias desde 2023, defendiendo los intereses de
                los asturianos en el Congreso de los Diputados.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}