import {
  Building2,
  FileText,
  Users,
  MessageSquare,
  MapPin,
  HeartHandshake,
} from "lucide-react";

const results = [
  {
    icon: Building2,
    value: "120+",
    label: "Iniciativas",
  },
  {
    icon: FileText,
    value: "85+",
    label: "Preguntas",
  },
  {
    icon: Users,
    value: "200+",
    label: "Reuniones",
  },
  {
    icon: MessageSquare,
    value: "40+",
    label: "Propuestas",
  },
  {
    icon: MapPin,
    value: "60+",
    label: "Visitas",
  },
  {
    icon: HeartHandshake,
    value: "100%",
    label: "Compromiso",
  },
];

export default function Results() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A15A]">
          Resultados
        </p>

        <h2 className="mt-3 text-center font-serif text-4xl sm:text-5xl lg:text-6xl text-[#071D3A]">
          Trabajo con hechos
        </h2>

        <div className="mt-14 overflow-hidden rounded-3xl border border-[#E7E1D7] bg-white shadow-xl">

          <div className="grid grid-cols-2 lg:grid-cols-3">

            {results.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center justify-center py-12
                  ${
                    index < 3
                      ? "border-b border-[#ECE7DD]"
                      : ""
                  }
                  ${
                    index % 3 !== 2
                      ? "border-r border-[#ECE7DD]"
                      : ""
                  }`}
                >
                  <Icon
                    className="mb-5 h-10 w-10 text-[#C8A15A]"
                    strokeWidth={1.8}
                  />

                  <div className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl text-[#071D3A]">
                    {item.value}
                  </div>

                  <div className="mt-3 text-sm font-medium uppercase tracking-[0.30em] text-[#6D7685]">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}