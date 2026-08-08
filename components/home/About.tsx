import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          
          {/* Foto */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src="/images/about.jpg"        // ← Correcto ahora
              alt="Esther Llamazares"
              width={650}
              height={720}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Texto */}
          <div className="space-y-8">
            <p className="uppercase text-[#C8A15A] tracking-widest text-sm font-medium">SOBRE MÍ</p>
            
            <h2 className="text-5xl lg:text-6xl leading-tight font-serif text-[#071D3A]">
              Creo en una política cercana,<br />
              seria y responsable.
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Mi experiencia profesional en la empresa privada y mi compromiso con Avilés 
                me permiten entender los problemas desde la realidad y trabajar para resolverlos.
              </p>
              <p>
                Mi objetivo es representar a todos los asturianos con honestidad, cercanía 
                y firmeza en las instituciones.
              </p>
            </div>

            <p className="text-3xl font-serif text-[#C8A15A] italic">Esther Llamazares</p>

            <a href="/sobre-mi" className="inline-flex items-center gap-3 text-[#071D3A] font-medium hover:text-[#C8A15A] transition-colors text-lg">
              CONÓCEME MEJOR →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}