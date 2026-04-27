import FAQAccordion from "../FAQAccordion";
import { faq } from "../../lib/copy";
import Reveal from "../visuals/Reveal";
import { WavyLine } from "../visuals/DecorativeShapes";

export default function FAQSection() {
  return (
    <section className="relative bg-paper-warm grain overflow-hidden">
      <div className="mx-auto max-w-wide px-5 py-16 md:py-32">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-accent" aria-hidden />
                <p className="text-eyebrow uppercase font-semibold text-accent">
                  06 / Perguntas frequentes
                </p>
              </div>
              <h2 className="font-display font-semibold text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.02] tracking-[-0.035em] text-ink">
                Perguntas que recebemos toda{" "}
                <span className="italic text-brand">semana</span>.
              </h2>
              <WavyLine
                className="mt-6 w-32 h-3"
                color="#EA4335"
              />
            </div>
            <div className="md:col-span-5">
              <p className="text-lead text-ink-muted">
                Se a sua dúvida não estiver aqui, manda mensagem no WhatsApp.
                A gente responde sempre.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-4xl">
            <FAQAccordion items={faq} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
