export default function AgendaPage() {
  const eventos = [
    {
      fecha: "15 JUL",
      titulo: "Reunión con asociaciones vecinales",
      lugar: "Avilés",
      hora: "18:00",
      descripcion:
        "Encuentro con representantes vecinales para conocer sus propuestas y necesidades.",
    },
    {
      fecha: "18 JUL",
      titulo: "Visita institucional al Congreso",
      lugar: "Madrid",
      hora: "10:30",
      descripcion:
        "Jornada de trabajo en el Congreso de los Diputados con reuniones institucionales.",
    },
    {
      fecha: "22 JUL",
      titulo: "Encuentro con empresarios",
      lugar: "Oviedo",
      hora: "12:00",
      descripcion:
        "Reunión con representantes del tejido empresarial asturiano.",
    },
  ];

  return (
    <main className="bg-[#F8F6F2] pt-32 pb-32">
      <section className="mx-auto max-w-6xl px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8A15A]">
            AGENDA
          </p>

          <h1 className="mt-6 font-serif text-6xl text-[#071D3A]">
            Próximos actos
          </h1>

          <div className="mx-auto mt-8 h-[2px] w-20 bg-[#C8A15A]" />

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-[#5B6673]">
            Consulta los próximos encuentros, visitas institucionales,
            reuniones y actos públicos.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {eventos.map((evento, index) => (

            <article
              key={index}
              className="rounded-[30px] bg-white p-10 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid gap-8 md:grid-cols-[140px_1fr]">

                <div className="flex items-center justify-center rounded-2xl bg-[#071D3A] py-8 text-center">

                  <span className="font-serif text-4xl text-white">
                    {evento.fecha}
                  </span>

                </div>

                <div>

                  <h2 className="font-serif text-4xl text-[#071D3A]">
                    {evento.titulo}
                  </h2>

                  <p className="mt-4 text-lg font-medium text-[#C8A15A]">
                    📍 {evento.lugar} &nbsp;&nbsp; • &nbsp;&nbsp; 🕒 {evento.hora}
                  </p>

                  <p className="mt-6 text-lg leading-8 text-[#5B6673]">
                    {evento.descripcion}
                  </p>

                </div>

              </div>
            </article>

          ))}

        </div>

      </section>
    </main>
  );
}