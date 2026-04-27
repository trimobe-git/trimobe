import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="rounded-2xl bg-surface border border-border overflow-hidden">
      {items.map((item, i) => (
        <details key={i} className="faq-item group" name="faq">
          <summary className="flex items-center justify-between gap-4 px-5 py-5 md:px-6 md:py-6">
            <span className="font-display font-semibold text-h3 text-ink pr-2">
              {item.q}
            </span>
            <span className="chevron flex-none rounded-full border border-border w-9 h-9 grid place-items-center text-ink-muted">
              <ChevronDown size={18} strokeWidth={2} aria-hidden />
            </span>
          </summary>
          <div className="faq-body px-5 pb-6 md:px-6 text-body text-ink-muted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
