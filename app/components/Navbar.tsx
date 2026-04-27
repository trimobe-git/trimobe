import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
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
      </div>
    </header>
  );
}
