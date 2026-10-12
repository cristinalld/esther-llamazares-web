export default function EscucharPage() {
  return (
    <main className="bg-[#F8F6F2] pt-32 pb-32">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-8 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A15A]">
          ESCUCHAR
        </p>

        <h1 className="mt-6 font-serif text-4xl sm:text-6xl leading-tight text-[#071D3A]">
          Tu voz cuenta
        </h1>

        <div className="mx-auto mt-8 h-[2px] w-20 rounded-full bg-[#C8A15A]" />

        <p className="mx-auto mt-10 max-w-3xl text-[21px] leading-[2] text-[#5B6673]">
          La mejor política nace del diálogo. Este espacio está pensado para
          escuchar tus propuestas, conocer tus preocupaciones y recoger ideas
          que contribuyan a mejorar Asturias, Avilés y la vida de quienes viven
          en nuestra tierra.
        </p>

      </section>

      {/* BLOQUES */}
      <section className="mx-auto mt-24 max-w-7xl px-8">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Propuestas */}
          <article className="rounded-[32px] bg-white p-6 sm:p-10 shadow-lg">

            <div className="text-5xl">💡</div>

            <h2 className="mt-6 font-serif text-3xl text-[#071D3A]">
              Propuestas
            </h2>

            <p className="mt-5 leading-8 text-[#5B6673]">
              Comparte ideas que ayuden a mejorar Asturias, Avilés o cualquier
              aspecto relacionado con la actividad política e institucional.
            </p>

          </article>

          {/* Problemas */}
          <article className="rounded-[32px] bg-white p-6 sm:p-10 shadow-lg">

            <div className="text-5xl">📍</div>

            <h2 className="mt-6 font-serif text-3xl text-[#071D3A]">
              Problemas
            </h2>

            <p className="mt-5 leading-8 text-[#5B6673]">
              Si conoces una situación que requiere atención o una necesidad
              concreta de tu municipio o barrio, puedes comunicarla aquí.
            </p>

          </article>

          {/* Reuniones */}
          <article className="rounded-[32px] bg-white p-6 sm:p-10 shadow-lg">

            <div className="text-5xl">🤝</div>

            <h2 className="mt-6 font-serif text-3xl text-[#071D3A]">
              Reuniones
            </h2>

            <p className="mt-5 leading-8 text-[#5B6673]">
              Asociaciones, colectivos, empresas o entidades pueden solicitar
              una reunión para trasladar sus inquietudes y propuestas.
            </p>

          </article>

        </div>

      </section>
          {/* FORMULARIO */}
      <section className="mx-auto mt-28 max-w-5xl px-8">

        <div className="rounded-[40px] bg-white p-6 sm:p-12 shadow-xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A15A]">
              PARTICIPA
            </p>

            <h2 className="mt-5 font-serif text-3xl sm:text-5xl text-[#071D3A]">
              Envíame tu propuesta
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-20 rounded-full bg-[#C8A15A]" />

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5B6673]">
              Todas las ideas, sugerencias y preocupaciones son importantes.
              Este espacio está pensado para mantener un diálogo directo con la ciudadanía.
            </p>

          </div>

          <iframe
            src="https://esther-contacto.netlify.app/"
            title="Formulario de preguntas y propuestas para Esther"
            className="mt-10 block h-[1100px] w-full border-0 sm:h-[820px]"
          />
          <p className="mt-4 text-center text-sm text-[#5B6673]">
            <a href="https://esther-contacto.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Abrir el formulario en otra pestaña</a>
          </p>

        </div>

      </section>
    </main>
  );
}