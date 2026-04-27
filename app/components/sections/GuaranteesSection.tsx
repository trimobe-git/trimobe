import { Check, X } from "lucide-react";
import { guaranteesPositive, guaranteesNegative } from "../../lib/copy";

export default function GuaranteesSection() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-content px-5 py-12 md:py-24">
        <p className="text-microcopy uppercase tracking-[0.18em] text-brand font-medium mb-3">
          Garantias e política
        </p>
        <h2 className="font-display font-semibold text-h2 md:text-h1 text-ink">
          O que <span className="italic text-brand">garantimos</span> por
          escrito.
        </h2>

        <ul className="mt-10 space-y-5">
          {guaranteesPositive.map((g) => (
            <li
              key={g.title}
              className="flex items-start gap-4 rounded-xl bg-bg border border-border p-5 md:p-6"
            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-brand text-white flex-none mt-0.5">
                <Check size={18} strokeWidth={3} aria-hidden />
              </span>
              <div>
                <h3 className="font-display font-semibold text-h3 text-ink">
                  {g.title}
                </h3>
                <p className="mt-2 text-body text-ink-muted">{g.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 pt-10 border-t border-border">
          <p className="text-microcopy uppercase tracking-[0.18em] text-accent font-medium mb-3">
            Transparência
          </p>
          <h3 className="font-display font-semibold text-h2 text-ink">
            O que <span className="italic">não prometemos</span>.
          </h3>

          <ul className="mt-8 space-y-5">
            {guaranteesNegative.map((g) => (
              <li
                key={g.title}
                className="flex items-start gap-4 rounded-xl bg-accent-soft border border-accent/15 p-5 md:p-6"
              >
                <span className="grid place-items-center w-9 h-9 rounded-full bg-accent text-white flex-none mt-0.5">
                  <X size={18} strokeWidth={3} aria-hidden />
                </span>
                <div>
                  <h4 className="font-display font-semibold text-h3 text-ink">
                    {g.title}
                  </h4>
                  <p className="mt-2 text-body text-ink-muted">{g.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
