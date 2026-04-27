import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { situations } from "../../lib/copy";
import Reveal from "../visuals/Reveal";
import MockMapsSearchResult from "../visuals/MockMapsSearchResult";
import { situationIconById } from "../visuals/visualMap";
import { Dot } from "../visuals/DecorativeShapes";

export default function SituationsSection() {
  const [first, ...rest] = situations;
  const FirstIcon = situationIconById[first.id];

  return (
    <section className="relative bg-surface border-y border-border overflow-hidden">
      <Dot
        className="hidden md:block absolute top-20 right-[6%]"
        size={8}
        color="#EA4335"
      />

      <div className="mx-auto max-w-wide px-5 py-16 md:py-32">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-20 items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-accent" aria-hidden />
                <p className="text-eyebrow uppercase font-semibold text-accent">
                  Em qual situação você está?
                </p>
              </div>
              <h2 className="font-display font-semibold text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.02] tracking-[-0.035em] text-ink">
                Em qual dessas <span className="italic text-brand">situações</span> você está?
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-lead text-ink-muted">
                Toque na que parece a sua e veja como a gente resolve.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Asymmetric grid: large card with mockup + 2 stacked cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Big card with Maps search mockup */}
          <Reveal
            as="div"
            className="md:col-span-7 md:row-span-2"
          >
            <Link
              href={situations[1].anchor}
              className="group relative block h-full rounded-3xl border border-border bg-paper-warm hover:bg-brand-soft transition overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 h-full items-center">
                <div>
                  {situationIconById[situations[1].id] && (
                    <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white shadow-paper mb-5">
                      {(() => {
                        const Icon = situationIconById[situations[1].id];
                        return <Icon className="w-12 h-12" />;
                      })()}
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-h2 md:text-[2rem] leading-[1.1] tracking-[-0.02em] text-ink">
                    {situations[1].title}
                  </h3>
                  <p className="mt-3 text-body text-ink-muted leading-relaxed">
                    {situations[1].body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-eyebrow font-semibold text-brand uppercase tracking-[0.14em]">
                    {situations[1].link}
                    <ArrowRight
                      size={14}
                      strokeWidth={2.4}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
                {/* Mockup */}
                <div className="md:scale-95 transition-transform group-hover:scale-100">
                  <MockMapsSearchResult />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Stack of 2 cards on the right */}
          {[first, situations[2]].map((s, i) => {
            const Icon = situationIconById[s.id];
            return (
              <Reveal
                as="div"
                key={s.id}
                delay={(i + 1) * 100}
                className="md:col-span-5"
              >
                <Link
                  href={s.anchor}
                  className="group relative block rounded-3xl border border-border bg-bg hover:bg-brand-soft transition p-6 md:p-7 h-full"
                >
                  <div className="flex items-start gap-5">
                    {Icon && (
                      <div className="flex-none inline-grid place-items-center w-14 h-14 rounded-xl bg-white shadow-soft">
                        <Icon className="w-10 h-10" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-h3 md:text-[1.5rem] leading-[1.15] tracking-[-0.015em] text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-body text-ink-muted leading-relaxed">
                        {s.body}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-eyebrow font-semibold text-brand uppercase tracking-[0.14em]">
                        {s.link}
                        <ArrowRight
                          size={14}
                          strokeWidth={2.4}
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
