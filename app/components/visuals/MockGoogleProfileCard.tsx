import StarRating from "./StarRating";

type MockGoogleProfileCardProps = {
  businessName?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  status?: "Aberto" | "Fechado";
  hours?: string;
  distance?: string;
  address?: string;
  className?: string;
};

export default function MockGoogleProfileCard({
  businessName = "Padaria do Zé",
  category = "Padaria · Café",
  rating = 4.8,
  reviews = 132,
  status = "Aberto",
  hours = "Fecha às 19h",
  distance = "200 m",
  address = "Rua das Flores, 142 — Centro",
  className = "",
}: MockGoogleProfileCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white border border-border overflow-hidden shadow-paper ${className}`}
      role="img"
      aria-label={`Exemplo de perfil Google: ${businessName}, ${rating} estrelas`}
    >
      {/* Photo strip — illustrated, no real images */}
      <div
        className="relative h-32 md:h-36"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-paper-warm via-accent-soft to-brand-soft" />
        {/* Stylized bread / building shapes */}
        <svg
          viewBox="0 0 320 140"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Awning stripes */}
          <rect x="0" y="0" width="320" height="20" fill="#EA4335" opacity="0.85" />
          <rect x="0" y="20" width="320" height="6" fill="#1A73E8" opacity="0.6" />
          {/* Storefront */}
          <rect x="40" y="40" width="240" height="100" fill="#FFFFFF" />
          {/* Windows */}
          <rect x="60" y="58" width="80" height="60" fill="#E8F0FE" stroke="#202124" strokeWidth="1.2" />
          <rect x="160" y="58" width="100" height="60" fill="#E8F0FE" stroke="#202124" strokeWidth="1.2" />
          {/* Door */}
          <rect x="148" y="98" width="24" height="42" fill="#1A73E8" />
          {/* Shop sign letters */}
          <rect x="80" y="30" width="160" height="12" rx="2" fill="#202124" />
          {/* Bread loaf icon */}
          <ellipse cx="100" cy="88" rx="22" ry="12" fill="#FBBC04" />
          <path d="M82 88 Q 100 80, 118 88" stroke="#B07A00" strokeWidth="1.5" fill="none" />
          {/* Coffee cup */}
          <rect x="195" y="80" width="22" height="22" rx="3" fill="#202124" />
          <path d="M218 84 Q 225 92, 218 100" stroke="#202124" strokeWidth="2" fill="none" />
          {/* Steam */}
          <path d="M200 75 Q 202 70, 200 65" stroke="#5F6368" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M208 75 Q 210 70, 208 65" stroke="#5F6368" strokeWidth="1.2" fill="none" opacity="0.6" />
        </svg>
        {/* Top-right "verified" check */}
        <div className="absolute top-3 right-3 grid place-items-center w-7 h-7 rounded-full bg-white shadow-soft">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <circle cx="7" cy="7" r="7" fill="#1A73E8" />
            <path
              d="M3.5 7.2 L6 9.5 L10.5 4.5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 md:p-5">
        <h4 className="font-display font-semibold text-h3 text-ink leading-tight">
          {businessName}
        </h4>

        <div className="mt-1.5 flex items-center gap-2 flex-wrap">
          <StarRating value={rating} reviewCount={reviews} size={13} />
        </div>

        <p className="mt-1.5 text-microcopy text-ink-muted">{category}</p>

        <p className="mt-3 text-microcopy">
          <span className="text-brand font-semibold">{status}</span>
          <span className="text-ink-muted"> · {hours} · </span>
          <span className="text-ink-muted">{distance}</span>
        </p>

        <p className="mt-1 text-microcopy text-ink-muted truncate">
          {address}
        </p>

        {/* Action buttons row — Google-style */}
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            disabled
            aria-hidden
            tabIndex={-1}
            className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg border border-border text-brand text-[11px] font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden className="mb-0.5">
              <path d="M3.5 1.5h2.2l1 2.5-1.5 1c.7 1.4 1.9 2.6 3.3 3.3l1-1.5 2.5 1v2.2c0 .7-.6 1.2-1.3 1.1C5.7 9.5 4.5 8.3 1.6 2.8c-.1-.7.4-1.3 1.1-1.3z" />
            </svg>
            Ligar
          </button>
          <button
            type="button"
            disabled
            aria-hidden
            tabIndex={-1}
            className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg border border-border text-brand text-[11px] font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className="mb-0.5">
              <circle cx="7" cy="7" r="5.5" />
              <path d="M1.5 7h11M7 1.5c2 2 2 9 0 11M7 1.5c-2 2-2 9 0 11" />
            </svg>
            Site
          </button>
          <button
            type="button"
            disabled
            aria-hidden
            tabIndex={-1}
            className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg border border-border text-brand text-[11px] font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden className="mb-0.5">
              <path d="M7 1.5C4.5 1.5 2.5 3.5 2.5 6c0 3.4 4.5 6.5 4.5 6.5s4.5-3.1 4.5-6.5c0-2.5-2-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
            </svg>
            Rotas
          </button>
        </div>
      </div>
    </div>
  );
}
