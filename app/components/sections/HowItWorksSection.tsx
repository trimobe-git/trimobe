import CTAButton from "../CTAButton";
import { whatsappUrl } from "../../lib/whatsapp";
import { steps } from "../../lib/copy";
import Reveal from "../visuals/Reveal";
import { stepIconByNumber } from "../visuals/visualMap";
import { WavyLine, Dot } from "../visuals/DecorativeShapes";

export default function HowItWorksSection() {
  return (
    <section className="relative bg-bg overflow-hidden">
      {/* Decorative side accent */}
      <Dot
        className="hidden md:block absolute top-32 right-[6%]"
        size={10}
        color="#FBBC04"
      />

      <div className="mx-auto max-w-wide px-5 py-16 md:py-32">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-accent" aria-hidden />
            <p className="text-eyebrow uppercase font-semibold text-accent">
              02 / Como funciona
            </p>
          </div>
          <h2 className="font-display font-semibold text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1] tracking-[-0.035em] text-ink max-w-3xl">
            Do seu lado,{" "}
            <span className="italic text-brand">são 3 passos.</span>
          </h2>
          <p className="mt-4 text-lead text-ink-muted">O resto é com a gente.</p>
        </Reveal>

        {/* Editorial step list — alternating asymmetric layout */}
        <ol className="mt-16 md:mt-24 space-y-16 md:space-y-28">
          {steps.map((s, i) => {
            const Icon = stepIconByNumber[s.number];
            const isLast = i === steps.length - 1;
            const isOdd = i % 2 === 1;
            return (
              <Reveal as="li" key={s.number} delay={i * 100}>
                <article
                  className={`relative grid grid-cols-12 gap-4 md:gap-10 items-center ${
                    isOdd ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Numeral block */}
                  <div className="col-span-12 md:col-span-5 relative">
                    <div className="relative inline-block">
                      <span
                        aria-hidden
                        className="block font-display font-semibold text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] leading-[0.82] text-brand tracking-[-0.05em]"
                      >
                        {s.number}
                      </span>
                      {/* Floating accent next to numeral */}
                      <span
                        aria-hidden
                        className="absolute top-2 -right-3 md:top-6 md:-right-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent shadow-soft"
                      />
                      {/* Icon hover badge */}
                      {Icon && (
                        <div className="absolute bottom-2 -right-8 md:bottom-6 md:-right-12 w-14 h-14 md:w-20 md:h-20 grid place-items-center rounded-2xl bg-white shadow-paper tilt-right">
                          <Icon className="w-9 h-9 md:w-12 md:h-12" />
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-baseline gap-2 text-eyebrow uppercase tracking-[0.14em]">
                      <span className="text-ink-muted font-semibold">
                        {s.timeLabel}
                      </span>
                      <span className="text-ink-muted">·</span>
                      <span className="text-ink font-semibold tabular-nums">
                        {s.time}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-display font-semibold text-[1.75rem] md:text-[2.25rem] leading-[1.05] tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-lead text-ink-muted max-w-prose leading-relaxed">
                      {s.body}
                    </p>
                  </div>

                  {/* Connector wave between steps */}
                  {!isLast && (
                    <WavyLine
                      className="hidden md:block col-span-12 w-32 h-3 mt-8 ml-auto opacity-40"
                      color="#1A73E8"
                    />
                  )}
                </article>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-16 md:mt-24 max-w-md">
          <CTAButton
            href={whatsappUrl("howItWorks")}
            size="lg"
            ariaLabel="Quero começar — falar no WhatsApp"
          >
            Quero começar
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
