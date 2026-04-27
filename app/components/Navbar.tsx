import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import { whatsappUrl, phoneTelHref } from "../lib/whatsapp";

export default function Navbar() {
  const callHref = phoneTelHref() || whatsappUrl("hero");

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-wide px-5 h-14 md:h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Trimobe — início"
          className="inline-flex items-center"
        >
          <Logo />
        </Link>
        <a
          href={callHref}
          aria-label="Falar com a Trimobe agora"
          className="grid place-items-center w-11 h-11 rounded-full border border-border text-brand bg-surface hover:bg-brand-soft transition touch-manipulation"
        >
          <Phone size={18} strokeWidth={2.2} aria-hidden />
        </a>
      </div>
    </header>
  );
}
