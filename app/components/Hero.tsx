import Link from "next/link";
import { Check } from "lucide-react";
import CTAButton from "./CTAButton";
import { whatsappUrl } from "../lib/whatsapp";
import { guarantees } from "../lib/copy";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-content px-5 pt-10 pb-12 md:pt-20 md:pb-24">
        <p className="text-microcopy uppercase tracking-[0.18em] text-brand font-medium mb-5">
          Google Meu Negócio · feito por humanos, com IA do seu lado
        </p>

        <h1 className="font-display font-semibold text-h1 md:text-h1-lg text-ink">
          Sua empresa não aparece no Google?{" "}
          <span className="italic text-brand">A gente resolve</span> em poucos
          dias.
        </h1>

        <p className="mt-5 text-lead text-ink-muted max-w-prose">
          Cadastro, otimização ou recuperação de perfil no Google. Em poucos
          dias, sua empresa aparece pra quem está procurando o que você vende.
        </p>

        <div className="mt-8">
          <CTAButton
            href={whatsappUrl("hero")}
            size="lg"
            ariaLabel="Falar no WhatsApp — abrir conversa"
          >
            Falar no WhatsApp
          </CTAButton>

          <p className="mt-4 text-body text-ink flex items-start gap-2">
            <span aria-hidden className="text-accent text-xl leading-none">
              ●
            </span>
            <span>
              <strong className="font-semibold">Pagamento só na entrega.</strong>{" "}
              <span className="text-ink-muted">Você não paga nada antes.</span>
            </span>
          </p>

          <Link
            href="#pacotes"
            className="mt-5 inline-flex text-body text-brand hover:text-brand-strong underline-offset-4 hover:underline font-medium"
          >
            Ver pacotes e preços ↓
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-body text-ink/85 max-w-prose">
          {guarantees.map((g) => (
            <li key={g} className="flex items-center gap-2.5">
              <span className="grid place-items-center w-6 h-6 rounded-full bg-brand-soft text-brand">
                <Check size={14} strokeWidth={3} aria-hidden />
              </span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
