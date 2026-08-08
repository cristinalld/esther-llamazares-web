import { sitePath } from "@/lib/sitePath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reto Autónomos",
  description: "Aprende las propuestas del Plan de Autónomos jugando con Esther.",
};

export default function RetoAutonomosPage() {
  return (
    <section className="game-page bg-[#071D3A]" aria-labelledby="reto-title">
      <h1 id="reto-title" className="sr-only">Reto Autónomos</h1>
      <iframe
        src={sitePath("/juego-autonomos/index.html")}
        title="Reto Autónomos: aprende jugando con Esther"
        className="block h-[calc(100svh-64px)] w-full border-0 lg:h-[calc(100svh-80px)]"
        allow="clipboard-read; clipboard-write"
      />
    </section>
  );
}