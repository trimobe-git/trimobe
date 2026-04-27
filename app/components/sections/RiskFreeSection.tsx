import CTAButton from "../CTAButton";
import { whatsappUrl } from "../../lib/whatsapp";
import Reveal from "../visuals/Reveal";
import StarRating from "../visuals/StarRating";
import { BurstStar, WavyLine } from "../visuals/DecorativeShapes";

export default function RiskFreeSection() {
  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      {/* Layered backgrounds */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 -right-32 w-[480px] h-[480px] rounded-full bg-brand-strong/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl"
      />

      {/* Floating burst star — gold accent */}
      <BurstStar
        className="hidden md:block absolute top-20 right-[8%] opacity-90 animate-float-slow"
        size={64}
        color="#FBBC04"
      />

      <div className="relative mx-auto max-w-wide px-5 py-20 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <Reveal as="div" className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-gold" aria-hidden />
              <p className="text-eyebrow uppercase font-semibold text-gold">
                Risco zero pra você
              </p>
            </div>

            <h2 className="font-display font-semibold text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.98] tracking-[-0.04em] text-white">
              Você não{" "}
              <span className="italic text-gold">paga nada</span>
              <br />
              antes.
            </h2>

            <div className="mt-7 max-w-prose space-y-4 text-lead md:text-[1.25rem] text-white/85 leading-relaxed">
              <p>
                A gente faz o serviço, te entrega tudo pronto, e só aí você
                paga.
              </p>
              <p>
                Se não estiver do jeito combinado, você não paga.{" "}
                <span className="text-white font-medium">
                  Sem multa, sem letra miúda, sem contrato escondido.
                </span>
              </p>
            </div>

            <div className="mt-10 max-w-md">
              <CTAButton
                href={whatsappUrl("blocoSemRisco")}
                size="lg"
                ariaLabel="Quero começar — falar no WhatsApp"
                className="!shadow-cta-glow"
              >
                Quero começar
              </CTAButton>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 text-eyebrow uppercase tracking-[0.18em] text-white/60">
              <StarRating
                value={5}
                size={14}
                showValue={false}
                reviewCount={undefined}
              />
              <span className="font-semibold">
                Avaliação dos nossos clientes
              </span>
            </div>
          </Reveal>

          {/* Side: Stamp visual */}
          <Reveal
            as="div"
            delay={150}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Outer ring stamp */}
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                <div
                  className="absolute inset-0 rounded-full border-[3px] border-gold/60 tilt-left"
                  aria-hidden
                />
                <div
                  className="absolute inset-3 rounded-full border-[2px] border-dashed border-gold/40 tilt-left"
                  aria-hidden
                />
                <div className="absolute inset-0 grid place-items-center text-center tilt-left">
                  <div>
                    <p className="font-display font-bold text-[2.25rem] md:text-[3rem] leading-[0.9] text-gold tracking-tight">
                      Paga<br />Só<br />Depois
                    </p>
                    <WavyLine
                      className="mx-auto mt-3 w-20 h-2"
                      color="#FBBC04"
                    />
                    <p className="mt-2 text-eyebrow uppercase font-semibold text-white/70 tracking-[0.2em]">
                      Garantia Trimobe
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating star outside stamp */}
              <div className="absolute -top-4 -right-2 w-12 h-12 grid place-items-center rounded-full bg-gold text-ink font-bold shadow-paper tilt-right">
                ★
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
