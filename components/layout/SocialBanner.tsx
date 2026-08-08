import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialBanner() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#071D3A]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-14 max-w-[1380px] items-center justify-center gap-6 px-5 py-3 sm:justify-between sm:px-8">

        <p className="hidden text-xs leading-5 text-[#D8BC84] sm:block lg:text-sm">
          © 2026 Esther Llamazares · Diputada del PP por Asturias en el Congreso ·
          Portavoz en el Ayuntamiento de Avilés
        </p>

        <div className="flex items-center gap-6">

          <Link
            href="https://www.facebook.com/EsLlamazares/"
            className="transition-colors hover:text-white"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-5 w-5 text-[#C8A15A]" />
          </Link>

          <Link
            href="https://x.com/EsLlamazares"
            className="transition-colors hover:text-white"
            aria-label="X"
          >
            <FaXTwitter className="h-5 w-5 text-[#C8A15A]" />
          </Link>

          
          <Link
            href="https://www.instagram.com/esllamazares/"
            className="transition-colors hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram className="h-5 w-5 text-[#C8A15A]" />
          </Link>

        </div>

      </div>
    </footer>
  );
}