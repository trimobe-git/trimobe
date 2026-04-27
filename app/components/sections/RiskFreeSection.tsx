import CTAButton from "../CTAButton";
import { whatsappUrl } from "../../lib/whatsapp";

export default function RiskFreeSection() {
  return (
    <section className="bg-brand text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="mx-auto max-w-content px-5 py-16 md:py-28 relative">
        <div
          className="font-display text-[5rem] md:text-[7rem] leading-none text-white/20 select-none"
          aria-hidden
        >
          ✦
        </div>

        <h2 className="mt-2 font-display font-semibold text-h1 md:text-[3rem] leading-tight text-white">
          Você não <span className="italic">paga nada</span> antes.
        </h2>

        <div className="mt-6 max-w-prose space-y-3 text-lead text-white/85">
          <p>
            A gente faz o serviço, te entrega tudo pronto, e só aí você paga.
          </p>
          <p>
            Se não estiver do jeito combinado, você não paga.{" "}
            <span className="text-white">
              Sem multa, sem letra miúda, sem contrato escondido.
            </span>
          </p>
        </div>

        <div className="mt-10 max-w-md">
          <CTAButton
            href={whatsappUrl("blocoSemRisco")}
            size="lg"
            ariaLabel="Quero começar — falar no WhatsApp"
            className="!bg-white !text-brand-strong hover:!bg-bg !shadow-none"
          >
            Quero começar
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
