import CTAButton from "../CTAButton";
import { whatsappUrl, phoneDisplay } from "../../lib/whatsapp";

export default function FinalCTASection() {
  const phone = phoneDisplay();

  return (
    <section className="bg-surface border-t border-border">
      <div className="mx-auto max-w-content px-5 py-16 md:py-28 text-center">
        <h2 className="font-display font-semibold text-h1 md:text-h1-lg text-ink max-w-prose mx-auto">
          Pronto pra ser{" "}
          <span className="italic text-brand">encontrado</span> no Google?
        </h2>
        <p className="mt-5 text-lead text-ink-muted max-w-prose mx-auto">
          Manda mensagem agora. Você sai dessa conversa com orçamento fechado e
          prazo combinado.{" "}
          <strong className="text-ink">
            Só paga depois que o serviço estiver pronto.
          </strong>
        </p>

        <div className="mt-10 max-w-md mx-auto">
          <CTAButton
            href={whatsappUrl("ctaFinal")}
            size="lg"
            ariaLabel="Falar agora no WhatsApp"
          >
            Falar agora no WhatsApp
          </CTAButton>
        </div>

        <ul className="mt-8 text-microcopy text-ink-muted space-y-2">
          {phone && <li>📞 Ou ligue: {phone}</li>}
          <li>🕐 Atendimento de segunda a sexta, das 9h às 18h</li>
          <li>📲 Fora do horário, respondemos no próximo dia útil</li>
        </ul>

        <div className="mt-10 max-w-prose mx-auto rounded-xl bg-bg border border-border p-5 text-microcopy text-ink-muted">
          🔒 Sua mensagem chega direto, sem robô.
          <br />
          Se você só quer tirar dúvida, tudo bem — não vamos ficar te ligando
          depois.
        </div>
      </div>
    </section>
  );
}
