import Image from "next/image";
export default function CongresoPage() {
  return (
    <main className="bg-[#F8F6F2] pt-20 pb-20">
      {/* HERO */}
      <section className="mx-auto max-w-[1700px] px-8 lg:px-14">
        <div className="relative overflow-hidden rounded-[42px] shadow-xl">
          <Image
            src="/images/congreso/hero1.png"
            alt="Esther Llamazares en el Congreso"
            width={1800}
            height={1000}
            priority
            className="h-[700px] w-full object-cover object-[74%_center] brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D3A]/95 via-[#071D3A]/72 via-40% to-transparent" />
          <div className="absolute left-10 top-1/2 max-w-xl -translate-y-1/2 lg:left-16">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A15A]">
              CONGRESO DE LOS DIPUTADOS
            </p>
            <h1 className="mt-6 font-serif text-7xl leading-none text-white lg:text-8xl">
              En el<br />Congreso
            </h1>
            <div className="mt-8 h-[2px] w-20 rounded-full bg-[#C8A15A]" />
            <p className="mt-8 max-w-lg text-xl leading-10 text-white/90">
              Diputada por Asturias en el Congreso de los Diputados,
              trabajando para defender los intereses de nuestra comunidad
              autónoma y contribuyendo a que la voz de Asturias esté presente
              en las principales decisiones políticas de España.
            </p>
          </div>
        </div>
      </section>
      {/* INTRODUCCIÓN */}
      <section className="mt-24">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A15A]">
            ACTIVIDAD PARLAMENTARIA
          </p>
          <h2 className="mt-6 font-serif text-6xl leading-tight text-[#071D3A]">
            Defendiendo Asturias
          </h2>
          <div className="mx-auto mt-8 h-[2px] w-20 rounded-full bg-[#C8A15A]" />
          <p className="mx-auto mt-10 max-w-2xl text-[20px] leading-[2.1] text-[#5B6673]">
            Desde el Congreso de los Diputados trabajo para trasladar la voz de
            Asturias a las instituciones nacionales, impulsando iniciativas
            relacionadas con la industria, las infraestructuras, el empleo, la
            innovación y la mejora de los servicios públicos para todos los asturianos.
          </p>
        </div>
      </section>

      {/* VÍDEOS DESTACADOS */}
      <section className="mt-24">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A15A]">
            INTERVENCIONES
          </p>
          <h2 className="mt-5 font-serif text-6xl text-[#071D3A]">
            Intervenciones destacadas
          </h2>
          <div className="mx-auto mt-6 h-[2px] w-20 rounded-full bg-[#C8A15A]" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5B6673]">
            Una selección de intervenciones parlamentarias en las que Esther
            Llamazares defiende los intereses de Asturias desde el Congreso de los Diputados.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="mt-16 flex justify-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <article className="w-[420px] overflow-hidden rounded-3xl border border-[#E8E4DA] bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
              <video controls preload="metadata" className="aspect-video w-full bg-black">
                <source src="/videos/congreso/industria.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-[#F3EEE3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A15A]">
                  Industria
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#071D3A]">
                  Defensa del tejido industrial
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-[#5B6673]">
                  Intervención centrada en el fortalecimiento de la industria asturiana, 
                  la creación de empleo de calidad y el impulso de la competitividad empresarial.
                </p>
              </div>
            </article>

            {/* Tarjeta 2 */}
            <article className="w-[420px] overflow-hidden rounded-3xl border border-[#E8E4DA] bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
              <video controls preload="metadata" className="aspect-video w-full bg-black">
                <source src="/videos/congreso/cambio_climatico.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-[#F3EEE3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A15A]">
                  Medio Ambiente
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#071D3A]">
                  Cambio climático
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-[#5B6673]">
                  Intervención sobre transición ecológica, sostenibilidad y protección del entorno, 
                  compatibilizando el crecimiento económico con el desarrollo sostenible.
                </p>
              </div>
            </article>

            {/* Tarjeta 3 */}
            <article className="w-[420px] overflow-hidden rounded-3xl border border-[#E8E4DA] bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
              <video controls preload="metadata" className="aspect-video w-full bg-black">
                <source src="/videos/congreso/quimica_farmaceutica.mp4" type="video/mp4" />
              </video>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-[#F3EEE3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A15A]">
                  Empresa
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#071D3A]">
                  Industria química y farmacéutica
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-[#5B6673]">
                  Defensa de un sector estratégico para Asturias, fomentando la inversión, 
                  la innovación y el mantenimiento del empleo cualificado.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

    </main>
  );
}
