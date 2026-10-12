import type { Metadata } from "next";
import { Droplets, MessageCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Agua de Avilés | Esther Llamazares",
  description: "Descubre la historia del contrato del agua de Avilés y pregunta al bot de Esther.",
};
const gameUrl = "https://crislld.github.io/historia-contrato-agua-aviles/";
const botUrl = "https://esther-guia-pro.base44.app/";

export default function AguaPage() {
  return (
    <section className="bg-[#F8F6F2] px-5 py-12 sm:px-8 lg:py-16" aria-labelledby="agua-title">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A15A]">Aprende y pregunta con Esther</p>
          <h1 id="agua-title" className="mt-5 font-serif text-4xl text-[#071D3A] sm:text-6xl">El agua de Avilés</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5B6673]">Conoce la historia del contrato del agua paso a paso y resuelve tus dudas con el bot de Esther.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href="#juego-agua" className="rounded-3xl border border-[#ECE7DD] bg-white p-7 shadow-sm transition hover:border-[#C8A15A]">
            <Droplets className="text-[#C8A15A]" size={30} aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl text-[#071D3A]">Descubre la historia</h2>
            <p className="mt-3 leading-7 text-[#5B6673]">Recorre el juego interactivo sobre el contrato del agua de Avilés.</p>
            <span className="mt-5 inline-block font-semibold text-[#071D3A]">Ir al juego ↓</span>
          </a>
          <div className="rounded-3xl bg-[#071D3A] p-7 text-white shadow-sm">
            <MessageCircle className="text-[#D8BC84]" size={30} aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl">Pregunta a Esther</h2>
            <p className="mt-3 leading-7 text-[#E3E8EF]">Abre el bot de Esther y escribe tu pregunta para seguir aprendiendo.</p>
            <a href={botUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#C8A15A] px-6 py-3 font-semibold text-[#071D3A]">Abrir el bot <ExternalLink size={16} aria-hidden="true" /><span className="sr-only"> (se abre en una nueva pestaña)</span></a>
          </div>
        </div>
        <section id="juego-agua" className="mt-12 scroll-mt-24" aria-labelledby="juego-title">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <h2 id="juego-title" className="font-serif text-3xl text-[#071D3A]">Historia del contrato del agua</h2>
            <a href={gameUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#071D3A]">Abrir el juego en otra pestaña <ExternalLink size={16} aria-hidden="true" /></a>
          </div>
          <iframe src={gameUrl} title="Juego interactivo: historia del contrato del agua de Avilés" className="block h-[85svh] min-h-[600px] w-full rounded-3xl border border-[#ECE7DD] bg-white shadow-sm" />
        </section>
      </div>
    </section>
  );
}
