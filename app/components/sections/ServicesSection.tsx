import { Check } from "lucide-react";
import CTAButton from "../CTAButton";
import { whatsappUrl } from "../../lib/whatsapp";
import { services } from "../../lib/copy";
import Reveal from "../visuals/Reveal";
import MockGoogleProfileCard from "../visuals/MockGoogleProfileCard";
import MockSuspendedBanner from "../visuals/MockSuspendedBanner";
import { Dot, RingDot, BlobShape } from "../visuals/DecorativeShapes";

export default function ServicesSection() {
  return (
    <section
      id="pacotes"
      className="relative bg-bg grain border-y border-border scroll-mt-24 overflow-hidden"
    >
      <BlobShape
        className="hidden md:block absolute top-40 -right-32 w-[360px] h-[360px] opacity-50 -z-0"
        color="#E8F0FE"
      />
      <Dot
        className="hidden md:block absolute top-32 left-[8%]"
        size={10}
        color="#FBBC04"
      />
      <RingDot
        className="hidden md:block absolute bottom-40 left-[5%]"
        size={28}
        color="#1A73E8"
      />

      <div className="relative mx-auto max-w-wide px-5 py-16 md:py-32">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-20 items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-accent" aria-hidden />
                <p className="text-eyebrow uppercase font-semibold text-accent">
                  04 / Nossos serviços
                </p>
              </div>
              <h2 className="font-display font-semibold text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.02] tracking-[-0.035em] text-ink">
                Escolha o que você{" "}
                <span className="italic text-brand">precisa</span>.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-lead text-ink-muted">
                Sem mensalidade. Sem fidelidade.{" "}
                <strong className="text-ink">Sem letra miúda.</strong>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Two services side by side on md+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => {
            const isFirst = i === 0;
            return (
              <Reveal
                as="article"
                key={s.id}
                delay={i * 100}
                className="relative"
              >
                <div
                  id={s.id}
                  className={`relative h-full rounded-3xl border bg-white p-6 md:p-10 shadow-paper scroll-mt-24 ${
                    isFirst
                      ? "border-brand/20"
                      : "border-accent/30"
                  }`}
                >
                  {/* Top stamp / badge */}
                  <div className="absolute -top-3 -right-2 z-10">
                    {isFirst ? (
                      <span className="stamp inline-flex items-center px-3 py-1.5 rounded-md bg-gold text-ink text-eyebrow uppercase font-bold tracking-[0.14em] shadow-paper">
                        Mais pedido
                      </span>
                    ) : (
                      <span className="stamp inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-white text-eyebrow uppercase font-bold tracking-[0.14em] shadow-paper">
                        Risco zero
                      </span>
                    )}
                  </div>

                  {/* Visual mockup at the top */}
                  <div className="mb-7 relative">
                    {isFirst ? (
                      <div className="relative max-w-[300px] mx-auto">
                        <MockGoogleProfileCard className="tilt-right" />
                        <Dot
                          className="absolute -top-3 -left-3"
                          size={10}
                          color="#FBBC04"
                        />
                      </div>
                    ) : (
                      <div className="relative max-w-[300px] mx-auto">
                        <MockSuspendedBanner className="tilt-left" />
                        <Dot
                          className="absolute -top-3 -right-3"
                          size={10}
                          color="#EA4335"
                        />
                      </div>
                    )}
                  </div>

                  <p className="text-eyebrow uppercase font-semibold text-brand mb-2">
                    {isFirst ? "Pacote 01" : "Pacote 02"}
                  </p>
                  <h3 className="font-display font-semibold text-[1.75rem] md:text-[2.25rem] leading-[1.05] tracking-[-0.025em] text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-body text-ink-muted leading-relaxed">
                    {s.pitch}
                  </p>

                  <div className="mt-7">
                    <p className="text-eyebrow uppercase tracking-[0.14em] text-ink-muted font-semibold mb-3">
                      Você recebe
                    </p>
                    <ul className="space-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-body"
                        >
                          <span className="grid place-items-center w-5 h-5 rounded-full bg-brand text-white mt-1 flex-none">
                            <Check size={12} strokeWidth={3.5} aria-hidden />
                          </span>
                          <span className="text-ink/90">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 border-t border-border-warm pt-6">
                    <div>
                      <p className="text-eyebrow uppercase tracking-[0.14em] text-ink-muted font-semibold">
                        Prazo
                      </p>
                      <p className="mt-1.5 text-body text-ink">{s.prazo}</p>
                    </div>
                    <div>
                      <p className="text-eyebrow uppercase tracking-[0.14em] text-ink-muted font-semibold">
                        Investimento
                      </p>
                      <p className="mt-1 font-display font-semibold text-[2rem] md:text-[2.25rem] leading-none text-brand tracking-[-0.02em]">
                        {s.preco}
                      </p>
                      {s.precoExtra && (
                        <p className="mt-1.5 text-microcopy text-ink-muted italic">
                          {s.precoExtra}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`mt-6 rounded-2xl p-4 md:p-5 border ${
                      isFirst
                        ? "bg-gold-soft border-gold/30"
                        : "bg-accent-soft border-accent/20"
                    }`}
                  >
                    <p className="text-body text-ink leading-relaxed">
                      <span aria-hidden className="text-accent font-bold">
                        ●
                      </span>{" "}
                      <strong className="font-semibold">{s.microcopy}</strong>
                    </p>
                    <p className="mt-1.5 text-microcopy text-ink-muted italic">
                      {s.paymentNote}
                    </p>
                  </div>

                  <div className="mt-7 max-w-md">
                    <CTAButton
                      href={whatsappUrl(s.ctaKey)}
                      size="md"
                      ariaLabel={`${s.ctaText} — falar no WhatsApp`}
                    >
                      {s.ctaText}
                    </CTAButton>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
