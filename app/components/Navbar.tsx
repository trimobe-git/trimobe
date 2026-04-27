import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import { whatsappUrl, phoneTelHref } from "../lib/whatsapp";

export default function Navbar() {
  const callHref = phoneTelHref() || whatsappUrl("navbar");

  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-wide px-5 h-14 md:h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Trimobe — início"
          className="inline-flex items-center"
        >
          <Logo />
        </Link>

        {/* Center nav — desktop only */}
        <nav className="hidden md:flex items-center gap-7 text-microcopy text-ink/80">
          <Link
            href="#pacotes"
            className="hover:text-brand transition-colors"
          >
            Pacotes
          </Link>
          <Link
            href="#perfil"
            className="hover:text-brand transition-colors"
          >
            Cadastro
          </Link>
          <Link
            href="#recuperacao"
            className="hover:text-brand transition-colors"
          >
            Recuperação
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("navbar")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="hidden md:inline-flex items-center gap-2 px-4 h-10 rounded-full bg-cta hover:bg-cta-hover text-white font-semibold text-microcopy shadow-cta transition active:translate-y-[1px] touch-manipulation"
          >
            Falar no WhatsApp
          </a>
          <a
            href={callHref}
            aria-label="Falar com a Trimobe agora"
            className="grid md:hidden place-items-center w-11 h-11 rounded-full border border-border text-brand bg-surface hover:bg-brand-soft transition touch-manipulation"
          >
            <Phone size={18} strokeWidth={2.2} aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
}
