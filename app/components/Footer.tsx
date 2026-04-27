import Link from "next/link";
import { MapPinHouse } from "lucide-react";
import { phoneDisplay } from "../lib/whatsapp";
import { WavyLine } from "./visuals/DecorativeShapes";

export default function Footer() {
  const phone = phoneDisplay();

  return (
    <footer className="relative bg-brand-deep text-white overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />

      <div className="relative mx-auto max-w-wide px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-2" aria-label="Trimobe">
              <MapPinHouse
                size={32}
                color="#FFFFFF"
                strokeWidth={2}
                aria-hidden
              />
              <span className="font-display font-semibold tracking-tight text-[1.25rem] leading-none text-white">
                Trimobe
              </span>
            </span>
            <p className="mt-5 text-body text-white/75 max-w-sm leading-relaxed">
              Cadastro, otimização e recuperação de perfis no Google para
              pequenas empresas brasileiras.
            </p>
            <WavyLine
              className="mt-6 w-32 h-3"
              color="#FBBC04"
            />
            <p className="mt-6 text-eyebrow uppercase tracking-[0.18em] text-gold font-semibold">
              Atendemos o Brasil inteiro
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Serviços" className="md:col-span-2">
            <h3 className="text-eyebrow uppercase tracking-[0.18em] text-white/60 font-semibold mb-4">
              Serviços
            </h3>
            <ul className="space-y-3 text-body text-white/85">
              <li>
                <Link href="#perfil" className="hover:text-gold transition-colors">
                  Cadastro & otimização
                </Link>
              </li>
              <li>
                <Link href="#recuperacao" className="hover:text-gold transition-colors">
                  Recuperação de perfil
                </Link>
              </li>
              <li>
                <Link href="#pacotes" className="hover:text-gold transition-colors">
                  Pacotes e preços
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-eyebrow uppercase tracking-[0.18em] text-white/60 font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-3 text-body text-white/85">
              {phone && (
                <li>
                  <span className="text-white/60">WhatsApp:</span>{" "}
                  <span className="text-white font-medium">{phone}</span>
                </li>
              )}
              <li>
                <a
                  href="mailto:contato@trimobe.com"
                  className="hover:text-gold transition-colors"
                >
                  contato@trimobe.com
                </a>
              </li>
              <li className="text-white/70">Seg a sex, 9h às 18h</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="text-eyebrow uppercase tracking-[0.18em] text-white/60 font-semibold mb-4">
              Institucional
            </h3>
            <ul className="space-y-3 text-body text-white/85">
              <li>
                <Link href="/security-policy" className="hover:text-gold transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gold transition-colors">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-microcopy text-white/55">
          <p>
            © {new Date().getFullYear()} Trimobe. Todos os direitos reservados.
          </p>
          <p className="md:text-right max-w-xl">
            Não somos parceiros oficiais do Google. Google e Google Meu Negócio
            são marcas registradas do Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
