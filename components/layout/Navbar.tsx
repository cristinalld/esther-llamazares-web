"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

const menu = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Trabajo", href: "/trabajo" },
  { label: "En Avilés", href: "/aviles" },
  { label: "En el Congreso", href: "/congreso" },
  { label: "Noticias", href: "/noticias" },
  { label: "Reto Autónomos", href: "/reto-autonomos" },
  { label: "Agenda", href: "/agenda" },
  { label: "Iniciativas", href: "https://www.congreso.es/es/busqueda-de-diputados?p_p_id=diputadomodule&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_diputadomodule_mostrarFicha=true&codParlamentario=340&idLegislatura=XV&mostrarAgenda=false", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ECE7DD] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <div className="w-[190px] shrink-0"><Logo /></div>
        <nav className="hidden flex-1 justify-end lg:flex" aria-label="Navegación principal">
          <ul className="flex items-center gap-2.5 xl:gap-5 2xl:gap-8">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}
                  className={`group relative whitespace-nowrap pb-2 text-[10px] font-semibold uppercase tracking-[0.1em] xl:text-[12px] xl:tracking-[0.13em] transition ${pathname === item.href ? "text-[#071D3A]" : "text-[#4B5563] hover:text-[#C8A15A]"}`}>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#C8A15A] transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E3DED5] text-[#071D3A] lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#ECE7DD] bg-white px-5 py-5 shadow-xl lg:hidden" aria-label="Navegación móvil">
          <ul className="mx-auto grid max-w-[1540px] gap-1">
            {menu.map((item) => (
              <li key={item.href}><Link href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] ${pathname === item.href ? "bg-[#F3EEE3] text-[#071D3A]" : "text-[#4B5563] hover:bg-[#F8F6F2]"}`}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}