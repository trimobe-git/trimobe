import { whyChoose } from "../../lib/copy";

export default function WhyChooseSection() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-content px-5 py-12 md:py-24">
        <p className="text-microcopy uppercase tracking-[0.18em] text-brand font-medium mb-3">
          Por que escolher a Trimobe
        </p>
        <h2 className="font-display font-semibold text-h2 md:text-h1 text-ink">
          Por que paga menos do que cobra uma{" "}
          <span className="italic text-brand">agência</span>?
        </h2>
        <p className="mt-3 text-body text-ink-muted">
          Porque a gente trabalha de um jeito diferente.
        </p>

        <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyChoose.map((b) => (
            <li
              key={b.title}
              className="rounded-2xl bg-surface border border-border p-6 md:p-8"
            >
              <div className="text-3xl" aria-hidden>
                {b.emoji}
              </div>
              <h3 className="mt-4 font-display font-semibold text-h3 text-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-body text-ink-muted">{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
