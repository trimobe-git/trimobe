import CTAButton from "../CTAButton";
import { whatsappUrl } from "../../lib/whatsapp";
import { steps } from "../../lib/copy";

export default function HowItWorksSection() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-content px-5 py-12 md:py-24">
        <p className="text-microcopy uppercase tracking-[0.18em] text-accent font-medium mb-3">
          Como funciona
        </p>
        <h2 className="font-display font-semibold text-h2 md:text-h1 text-ink">
          Do seu lado, são <span className="italic text-brand">3 passos</span>.
        </h2>
        <p className="mt-3 text-body text-ink-muted">O resto é com a gente.</p>

        <ol className="mt-10 md:mt-14 space-y-6 md:space-y-8">
          {steps.map((s) => (
            <li
              key={s.number}
              className="rounded-2xl bg-surface border border-border p-6 md:p-8 shadow-soft"
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2 md:min-w-[120px]">
                  <span
                    className="font-display font-semibold text-[3rem] md:text-[3.75rem] leading-none text-brand"
                    aria-hidden
                  >
                    {s.number}
                  </span>
                  <span className="text-microcopy uppercase tracking-wider text-ink-muted">
                    Passo {parseInt(s.number, 10)}
                  </span>
                </div>
                <div className="mt-4 md:mt-0 flex-1">
                  <h3 className="font-display font-semibold text-h3 text-ink flex items-center gap-2">
                    <span aria-hidden>{s.emoji}</span>
                    <span>{s.title}</span>
                  </h3>
                  <p className="mt-2 text-body text-ink-muted">{s.body}</p>
                  <p className="mt-4 text-microcopy text-ink-muted">
                    <span className="uppercase tracking-wider">
                      {s.timeLabel}:
                    </span>{" "}
                    <strong className="text-ink">{s.time}</strong>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 max-w-md">
          <CTAButton
            href={whatsappUrl("hero")}
            size="lg"
            ariaLabel="Quero começar — falar no WhatsApp"
          >
            Quero começar
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
