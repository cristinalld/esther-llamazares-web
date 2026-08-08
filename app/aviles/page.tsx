import Image from "next/image";
import {
  ShoppingBag,
  Factory,
  House,
  ShieldCheck,
} from "lucide-react";

export default function AvilesPage() {
  return (
    <main className="bg-[#F8F6F2] pt-32 pb-24">

      {/* Hero */}
      <section className="mx-auto max-w-[1600px] px-8 lg:px-16">

        <div className="relative overflow-hidden rounded-[40px]">

          <Image
            src="/images/aviles/hero.jpg"
            alt="Esther Llamazares en Avilés"
            width={1600}
            height={900}
            priority
           className="h-[620px] w-full object-cover brightness-105 contrast-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071D3A]/45 via-[#071D3A]/15 to-transparent" />

          <div className="absolute left-16 top-1/2 max-w-2xl -translate-y-1/2">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A15A]">
              Ayuntamiento de Avilés
            </p>

            <h1 className="mt-6 font-serif text-7xl leading-tight text-white">
              En Avilés
            </h1>

            <p className="mt-8 text-2xl leading-10 text-white/90">
              Portavoz del Partido Popular en el Ayuntamiento de Avilés,
              trabajando cada día para construir una ciudad con más
              oportunidades, mejor gestionada y más cercana a los vecinos.
            </p>

          </div>

        </div>

      </section>

               {/* Compromisos */}
      <section className="mx-auto mt-28 max-w-[1500px] px-8 lg:px-16">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A15A]">
            COMPROMISO CON AVILÉS
          </p>

          <h2 className="mt-3 font-serif text-6xl text-[#071D3A]">
            Compromisos con Avilés
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 rounded-full bg-[#C8A15A]" />

          <p className="mx-auto mt-8 max-w-5xl text-[18px] leading-9 text-[#5B6673]">
            Un proyecto basado en la cercanía, la escucha activa y el trabajo
            constante para impulsar una ciudad con más oportunidades,
            mejores servicios públicos y una gestión responsable al servicio
            de todos los avilesinos.
          </p>

        </div>

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Comercio */}
          <div className="group flex min-h-[360px] flex-col rounded-[32px] border border-[#ECE7DD] bg-white px-8 py-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
              <ShoppingBag size={28} className="text-[#C8A15A]" />
            </div>

            <h3 className="font-serif text-[2rem] text-[#071D3A]">
              Comercio
            </h3>

            <p className="mt-5 flex-1 text-[16px] leading-8 text-[#5B6673]">
              Impulsar el comercio de proximidad, la hostelería y el
              emprendimiento para fortalecer la economía local y generar nuevas
              oportunidades de empleo en Avilés.
            </p>

          </div>

          {/* Industria */}
          <div className="group flex min-h-[360px] flex-col rounded-[32px] border border-[#ECE7DD] bg-white px-8 py-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
              <Factory size={28} className="text-[#C8A15A]" />
            </div>

            <h3 className="font-serif text-[2rem] text-[#071D3A]">
              Industria
            </h3>

            <p className="mt-5 flex-1 text-[16px] leading-8 text-[#5B6673]">
              Defender el tejido industrial de Avilés, atraer nuevas
              inversiones y favorecer la creación de empleo estable y de
              calidad para las próximas generaciones.
            </p>

          </div>

          {/* Barrios */}
          <div className="group flex min-h-[360px] flex-col rounded-[32px] border border-[#ECE7DD] bg-white px-8 py-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
              <House size={28} className="text-[#C8A15A]" />
            </div>

            <h3 className="font-serif text-[2rem] text-[#071D3A]">
              Barrios
            </h3>

            <p className="mt-5 flex-1 text-[16px] leading-8 text-[#5B6673]">
              Escuchar a vecinos y asociaciones para mejorar el mantenimiento,
              la limpieza, la accesibilidad y la calidad de los servicios
              municipales en todos los barrios.
            </p>

          </div>

          {/* Transparencia */}
          <div className="group flex min-h-[360px] flex-col rounded-[32px] border border-[#ECE7DD] bg-white px-8 py-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A15A]/10">
              <ShieldCheck size={28} className="text-[#C8A15A]" />
            </div>

            <h3 className="font-serif text-[2rem] text-[#071D3A]">
              Transparencia
            </h3>

            <p className="mt-5 flex-1 text-[16px] leading-8 text-[#5B6673]">
              Promover una gestión responsable de los recursos públicos,
              cercana, transparente y basada en la rendición de cuentas y el
              respeto a los ciudadanos.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}