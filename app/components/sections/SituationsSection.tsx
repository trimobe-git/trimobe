import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { situations } from "../../lib/copy";

export default function SituationsSection() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-content px-5 py-12 md:py-24">
        <h2 className="font-display font-semibold text-h2 md:text-h1 text-ink max-w-prose">
          Em qual dessas situações você está?
        </h2>
        <p className="mt-3 text-body text-ink-muted max-w-prose">
          Toque na que parece a sua e veja como a gente resolve.
        </p>

        <ul className="mt-8 md:mt-12 space-y-3">
          {situations.map((s) => (
            <li key={s.id}>
              <Link
                href={s.anchor}
                className="group block rounded-xl border border-border bg-bg hover:bg-brand-soft transition p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl leading-none mt-1" aria-hidden>
                    {s.emoji}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-h3 text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-body text-ink-muted">{s.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-microcopy font-medium text-brand uppercase tracking-wider">
                      {s.link}
                      <ArrowRight
                        size={14}
                        strokeWidth={2.4}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
