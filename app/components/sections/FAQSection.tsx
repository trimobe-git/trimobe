import FAQAccordion from "../FAQAccordion";
import { faq } from "../../lib/copy";

export default function FAQSection() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-content px-5 py-12 md:py-24">
        <p className="text-microcopy uppercase tracking-[0.18em] text-brand font-medium mb-3">
          Perguntas frequentes
        </p>
        <h2 className="font-display font-semibold text-h2 md:text-h1 text-ink">
          Perguntas que recebemos toda{" "}
          <span className="italic text-brand">semana</span>.
        </h2>

        <div className="mt-10 md:mt-14">
          <FAQAccordion items={faq} />
        </div>
      </div>
    </section>
  );
}
