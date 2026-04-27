import Link from "next/link";
import { Check } from "lucide-react";
import CTAButton from "./CTAButton";
import { whatsappUrl } from "../lib/whatsapp";
import { guarantees } from "../lib/copy";
import MockGoogleProfileCard from "./visuals/MockGoogleProfileCard";
import MockPhoneFrame from "./visuals/MockPhoneFrame";
import StarRating from "./visuals/StarRating";
import {
  Dot,
  RingDot,
  WavyLine,
  BlobShape,
  CornerArrow,
} from "./visuals/DecorativeShapes";
import Reveal from "./visuals/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative grain-warm overflow-hidden">
      {/* Decorative background shapes — desktop only */}
      <BlobShape
        className="hidden md:block absolute -top-12 -right-20 w-[420px] h-[420px] opacity-60 -z-10"
        color="#E8F0FE"
      />
      <BlobShape
        className="hidden md:block absolute bottom-0 -left-32 w-[360px] h-[360px] opacity-50 -z-10"
        color="#FCE8E6"
      />
      <Dot
        className="hidden md:block absolute top-32 left-[8%] -z-10"
        size={10}
        color="#EA4335"
      />
      <RingDot
        className="hidden md:block absolute top-52 right-[12%] -z-10"
        size={28}
        color="#1A73E8"
      />
      <Dot
        className="hidden md:block absolute bottom-32 right-[42%] -z-10"
        size={8}
        color="#FBBC04"
      />

      <div className="mx-auto max-w-wide px-5 pt-10 pb-12 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text column — 7/12 */}
          <Reveal as="div" className="md:col-span-7 relative">
            {/* Eyebrow editorial label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-accent" aria-hidden />
              <p className="text-eyebrow uppercase font-semibold text-accent">
                01 / Google Meu Negócio
              </p>
            </div>

            <h1 className="font-display font-semibold text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] leading-[0.98] tracking-[-0.035em] text-ink">
              Sua empresa<br />
              não aparece<br />
              no Google?
              <span className="block mt-2 italic font-medium text-brand">
                A gente resolve.
              </span>
            </h1>

            <p className="mt-7 text-lead md:text-[1.25rem] text-ink-soft max-w-prose leading-relaxed">
              Cadastro, otimização ou recuperação de perfil no Google. Em poucos
              dias, sua empresa aparece pra quem está procurando o que você
              vende.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:items-center max-w-lg">
              <div className="flex-1">
                <CTAButton
                  href={whatsappUrl("hero")}
                  size="lg"
                  ariaLabel="Falar no WhatsApp — abrir conversa"
                >
                  Falar no WhatsApp
                </CTAButton>
              </div>
              <Link
                href="#pacotes"
                className="text-body font-medium text-brand hover:text-brand-strong underline-offset-4 hover:underline whitespace-nowrap inline-flex items-center gap-1"
              >
                Ver pacotes ↓
              </Link>
            </div>

            <p className="mt-5 text-body text-ink flex items-start gap-2.5">
              <span aria-hidden className="mt-1.5">
                <Dot size={9} color="#EA4335" />
              </span>
              <span>
                <strong className="font-semibold">
                  Pagamento só na entrega.
                </strong>{" "}
                <span className="text-ink-muted">
                  Você não paga nada antes.
                </span>
              </span>
            </p>

            {/* Guarantees — editorial tag list */}
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-body text-ink/85 max-w-xl">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-2.5">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-brand text-white flex-none">
                    <Check size={13} strokeWidth={3.5} aria-hidden />
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Visual column — 5/12 */}
          <Reveal
            as="div"
            delay={150}
            className="md:col-span-5 relative mt-4 md:mt-0"
          >
            <div className="relative max-w-[320px] md:max-w-[360px] mx-auto">
              {/* Decorative arrow on top-left of mockup */}
              <CornerArrow
                className="hidden md:block absolute -top-12 -left-16 -z-10"
                size={72}
                color="#EA4335"
              />

              {/* Floating "verified by Google" badge — top */}
              <div className="hidden sm:flex absolute -top-4 -right-3 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border shadow-paper tilt-right">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <circle cx="7" cy="7" r="7" fill="#1A73E8" />
                  <path
                    d="M3.5 7.2 L6 9.5 L10.5 4.5"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] font-semibold text-ink">
                  Verificado no Google
                </span>
              </div>

              {/* Floating star badge — left bottom */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-soft border border-gold/40 shadow-paper tilt-left">
                <StarRating
                  value={4.8}
                  size={12}
                  showValue={false}
                  reviewCount={undefined}
                />
                <span className="text-[11px] font-semibold text-ink">
                  4.8 · 132 avaliações
                </span>
              </div>

              {/* Phone frame with profile mockup */}
              <MockPhoneFrame className="w-full">
                <div className="space-y-2">
                  {/* Maps app top bar */}
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white border border-border">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="#5F6368"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <circle cx="6" cy="6" r="4" />
                      <path d="M9 9l3.5 3.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[9px] text-ink-muted truncate">
                      padaria perto de mim
                    </span>
                  </div>

                  {/* Profile card */}
                  <MockGoogleProfileCard className="!shadow-none !rounded-xl scale-95 origin-top" />
                </div>
              </MockPhoneFrame>

              {/* Wavy line decoration under mockup */}
              <WavyLine
                className="hidden md:block absolute -bottom-10 left-1/4 w-32 h-3"
                color="#1A73E8"
              />
            </div>
          </Reveal>
        </div>

        {/* Editorial footer rule with trust signals */}
        <div className="hidden md:flex mt-20 items-center gap-6 text-eyebrow uppercase text-ink-muted">
          <span className="inline-block flex-1 h-px bg-border-warm" aria-hidden />
          <span className="font-semibold tracking-[0.18em]">
            Atendimento pelo WhatsApp · Brasil inteiro · Pagamento só na entrega
          </span>
          <span className="inline-block flex-1 h-px bg-border-warm" aria-hidden />
        </div>
      </div>
    </section>
  );
}
