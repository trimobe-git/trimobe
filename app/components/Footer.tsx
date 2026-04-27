import Link from "next/link";
import Logo from "./Logo";
import { phoneDisplay } from "../lib/whatsapp";

export default function Footer() {
  const phone = phoneDisplay();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-wide px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-body text-ink-muted max-w-xs">
              Cadastro, otimização e recuperação de perfis no Google para
              pequenas empresas.
            </p>
          </div>
          <nav aria-label="Serviços">
            <h3 className="font-display font-semibold text-h3 text-ink mb-3">
              Serviços
            </h3>
            <ul className="space-y-2 text-body text-ink-muted">
              <li>
                <Link href="#perfil" className="hover:text-ink">
                  Cadastro & otimização do perfil
                </Link>
              </li>
              <li>
                <Link href="#recuperacao" className="hover:text-ink">
                  Recuperação de perfil suspenso
                </Link>
              </li>
              <li>
                <Link href="#pacotes" className="hover:text-ink">
                  Ver pacotes e preços
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-display font-semibold text-h3 text-ink mb-3">
              Contato
            </h3>
            <ul className="space-y-2 text-body text-ink-muted">
              {phone && (
                <li>
                  <span className="text-ink-muted">WhatsApp:</span>{" "}
                  <span className="text-ink">{phone}</span>
                </li>
              )}
              <li>
                <a
                  href="mailto:contato@trimobe.com"
                  className="hover:text-ink"
                >
                  contato@trimobe.com
                </a>
              </li>
              <li>Atendimento: Brasil inteiro</li>
              <li>Seg a sex, 9h às 18h</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-h3 text-ink mb-3">
              Institucional
            </h3>
            <ul className="space-y-2 text-body text-ink-muted">
              <li>
                <Link href="/security-policy" className="hover:text-ink">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-ink">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-microcopy text-ink-muted text-center">
          © {new Date().getFullYear()} Trimobe. Não somos parceiros oficiais do
          Google. Google e Google Meu Negócio são marcas registradas do Google
          LLC.
        </div>
      </div>
    </footer>
  );
}
