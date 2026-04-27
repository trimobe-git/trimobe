type MockSuspendedBannerProps = {
  className?: string;
  businessName?: string;
};

export default function MockSuspendedBanner({
  className = "",
  businessName = "Sua Empresa",
}: MockSuspendedBannerProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white border border-border overflow-hidden shadow-paper ${className}`}
      role="img"
      aria-label="Exemplo de notificação de perfil suspenso"
    >
      {/* Top warning bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 1L1 14h14L8 1zm0 4v5M8 12.5v0.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <span className="text-microcopy font-semibold tracking-tight">
          Perfil suspenso
        </span>
        <span className="ml-auto text-[10px] opacity-90 uppercase tracking-wider">
          Google
        </span>
      </div>

      {/* Body */}
      <div className="p-4 md:p-5">
        <p className="text-microcopy text-ink-muted">Em revisão</p>
        <h4 className="mt-1 font-display font-semibold text-h3 text-ink leading-tight">
          {businessName}
        </h4>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-paper-warm p-2">
            <p className="text-[10px] uppercase tracking-wider text-ink-muted">Visitas</p>
            <p className="font-display font-semibold text-h3 text-ink">0</p>
          </div>
          <div className="rounded-lg bg-paper-warm p-2">
            <p className="text-[10px] uppercase tracking-wider text-ink-muted">Ligações</p>
            <p className="font-display font-semibold text-h3 text-ink">0</p>
          </div>
          <div className="rounded-lg bg-paper-warm p-2">
            <p className="text-[10px] uppercase tracking-wider text-ink-muted">Rotas</p>
            <p className="font-display font-semibold text-h3 text-ink">0</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-accent-soft border border-accent/20 p-3">
          <p className="text-[11px] text-ink leading-relaxed">
            Seu perfil não está visível para clientes.{" "}
            <span className="font-semibold">Solicite uma revisão</span> com os
            documentos necessários.
          </p>
        </div>

        <button
          type="button"
          disabled
          aria-hidden
          tabIndex={-1}
          className="mt-3 w-full py-2 rounded-lg bg-ink text-white text-[11px] font-semibold uppercase tracking-wider"
        >
          Pedir revisão
        </button>
      </div>
    </div>
  );
}
