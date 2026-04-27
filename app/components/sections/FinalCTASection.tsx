import CTAButton from "../CTAButton";
import { whatsappUrl, phoneDisplay } from "../../lib/whatsapp";
import Reveal from "../visuals/Reveal";
import { WavyLine, BurstStar, Dot } from "../visuals/DecorativeShapes";

export default function FinalCTASection() {
  const phone = phoneDisplay();

  return (
    <section className="relative bg-surface border-t border-border overflow-hidden">
      {/* Decorative ornaments */}
      <BurstStar
        className="hidden md:block absolute top-16 left-[8%] opacity-70"
        size={48}
        color="#FBBC04"
      />
      <BurstStar
        className="hidden md:block absolute bottom-32 right-[10%] opacity-70"
        size={40}
        color="#EA4335"
      />
      <Dot
        className="hidden md:block absolute top-32 right-[18%]"
        size={10}
        color="#1A73E8"
      />

      <div className="mx-auto max-w-wide px-5 py-20 md:py-36 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="inline-block w-10 h-px bg-accent" aria-hidden />
            <p className="text-eyebrow uppercase font-semibold text-accent">
              É a sua vez
            </p>
            <span className="inline-block w-10 h-px bg-accent" aria-hidden />
          </div>

          <h2 className="font-display font-semibold text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.98] tracking-[-0.04em] text-ink max-w-4xl mx-auto">
            Pronto pra ser{" "}
            <span className="italic text-brand">encontrado</span>
            <br />
            no Google?
          </h2>

          <WavyLine
            className="mx-auto mt-7 w-40 h-3"
            color="#1A73E8"
          />

          <p className="mt-7 text-lead md:text-[1.25rem] text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Manda mensagem agora. Você sai dessa conversa com orçamento fechado
            e prazo combinado.{" "}
            <strong className="text-ink">
              Só paga depois que o serviço estiver pronto.
            </strong>
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 max-w-md mx-auto">
            <CTAButton
              href={whatsappUrl("ctaFinal")}
              size="lg"
              ariaLabel="Falar agora no WhatsApp"
              className="!shadow-cta-glow"
            >
              Falar agora no WhatsApp
            </CTAButton>
          </div>

          <ul className="mt-10 inline-flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-6 text-microcopy text-ink-muted">
            {phone && (
              <li className="inline-flex items-center gap-2">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-soft text-brand">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                    <path d="M3.5 1.5h2.2l1 2.5-1.5 1c.7 1.4 1.9 2.6 3.3 3.3l1-1.5 2.5 1v2.2c0 .7-.6 1.2-1.3 1.1C5.7 9.5 4.5 8.3 1.6 2.8c-.1-.7.4-1.3 1.1-1.3z" />
                  </svg>
                </span>
                Ou ligue: {phone}
              </li>
            )}
            <li className="inline-flex items-center gap-2">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-paper-warm text-ink">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <circle cx="7" cy="7" r="5.5" />
                  <path d="M7 4v3l2 1" strokeLinecap="round" />
                </svg>
              </span>
              Seg a sex, 9h às 18h
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-paper-warm text-ink">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                  <path d="M3 1.5h8a1.5 1.5 0 011.5 1.5v8a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 11V3A1.5 1.5 0 013 1.5z" />
                  <circle cx="7" cy="11" r="0.7" fill="#FFFFFF" />
                </svg>
              </span>
              Resposta no próximo dia útil
            </li>
          </ul>

          <div className="mt-12 max-w-2xl mx-auto rounded-2xl bg-paper-warm border border-border-warm p-6 text-microcopy text-ink-muted">
            <p className="inline-flex items-start gap-2 text-left">
              <span aria-hidden className="text-brand text-base mt-0.5">
                🔒
              </span>
              <span>
                Sua mensagem chega direto, sem robô. Se você só quer tirar
                dúvida, tudo bem — não vamos ficar te ligando depois.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
