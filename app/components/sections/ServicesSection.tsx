import { Check } from "lucide-react";
import CTAButton from "../CTAButton";
import { whatsappUrl } from "../../lib/whatsapp";
import { services } from "../../lib/copy";

export default function ServicesSection() {
  return (
    <section id="pacotes" className="bg-surface border-y border-border scroll-mt-24">
      <div className="mx-auto max-w-content px-5 py-12 md:py-24">
        <p className="text-microcopy uppercase tracking-[0.18em] text-brand font-medium mb-3">
          Nossos serviços
        </p>
        <h2 className="font-display font-semibold text-h2 md:text-h1 text-ink">
          Escolha o que você <span className="italic text-brand">precisa</span>.
        </h2>
        <p className="mt-3 text-body text-ink-muted max-w-prose">
          Sem mensalidade. Sem fidelidade.{" "}
          <strong className="text-ink">Sem letra miúda.</strong>
        </p>

        <div className="mt-10 md:mt-14 space-y-6">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="rounded-2xl border border-border bg-bg p-6 md:p-10 scroll-mt-24"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {s.emoji}
                </span>
                <h3 className="font-display font-semibold text-h2 text-ink">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 text-body text-ink-muted max-w-prose">
                {s.pitch}
              </p>

              <div className="mt-6">
                <p className="text-microcopy uppercase tracking-wider text-ink-muted font-medium mb-3">
                  Você recebe
                </p>
                <ul className="space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-body">
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-brand-soft text-brand mt-1 flex-none">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-ink/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-6">
                <div>
                  <p className="text-microcopy uppercase tracking-wider text-ink-muted">
                    Prazo
                  </p>
                  <p className="mt-1 text-body text-ink">{s.prazo}</p>
                </div>
                <div>
                  <p className="text-microcopy uppercase tracking-wider text-ink-muted">
                    Investimento
                  </p>
                  <p className="mt-1 font-display font-semibold text-[1.75rem] text-brand">
                    {s.preco}
                  </p>
                  {s.precoExtra && (
                    <p className="mt-1 text-microcopy text-ink-muted italic">
                      {s.precoExtra}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-accent-soft border border-accent/20 p-4 md:p-5">
                <p className="text-body text-ink">
                  <span className="font-semibold text-accent">💰</span>{" "}
                  <strong className="font-semibold">{s.microcopy}</strong>
                </p>
                <p className="mt-1 text-microcopy text-ink-muted italic">
                  {s.paymentNote}
                </p>
              </div>

              <div className="mt-6 max-w-md">
                <CTAButton
                  href={whatsappUrl(s.ctaKey)}
                  size="md"
                  ariaLabel={`${s.ctaText} — falar no WhatsApp`}
                >
                  {s.ctaText}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
