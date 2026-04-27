type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="rounded-3xl bg-white border border-border overflow-hidden shadow-paper">
      {items.map((item, i) => (
        <details key={i} className="faq-item group" name="faq">
          <summary className="flex items-start justify-between gap-6 px-6 py-6 md:px-8 md:py-7">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <span
                aria-hidden
                className="text-eyebrow font-semibold text-brand tabular-nums tracking-[0.14em] mt-2"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-semibold text-[1.25rem] md:text-h3 leading-[1.2] tracking-[-0.015em] text-ink pr-2">
                {item.q}
              </span>
            </div>
            <span
              aria-hidden
              className="chevron flex-none rounded-full border border-border-warm bg-paper-warm w-10 h-10 grid place-items-center text-brand mt-1 transition-colors group-open:bg-brand group-open:border-brand group-open:text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden
                className="faq-icon"
              >
                <line x1="2" y1="7" x2="12" y2="7" />
                <line x1="7" y1="2" x2="7" y2="12" className="faq-icon-vertical" />
              </svg>
            </span>
          </summary>
          <div className="faq-body px-6 pb-7 md:px-8 md:pb-8 ml-0 md:ml-12 text-body text-ink-muted leading-relaxed border-t border-border/60 pt-5">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
