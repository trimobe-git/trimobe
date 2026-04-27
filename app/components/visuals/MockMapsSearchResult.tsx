import StarRating from "./StarRating";

type Result = {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  distance: string;
  highlight?: boolean;
  hidden?: boolean;
};

type MockMapsSearchResultProps = {
  query?: string;
  results?: Result[];
  className?: string;
};

const defaultResults: Result[] = [
  {
    name: "Concorrente do Centro",
    category: "Padaria · 4.8 km",
    rating: 4.7,
    reviews: 218,
    distance: "1.2 km",
    highlight: true,
  },
  {
    name: "Outra Padaria Local",
    category: "Padaria · Café",
    rating: 4.5,
    reviews: 96,
    distance: "1.8 km",
  },
  {
    name: "Sua Empresa",
    category: "(sem perfil otimizado)",
    rating: 0,
    reviews: 0,
    distance: "2.1 km",
    hidden: true,
  },
];

export default function MockMapsSearchResult({
  query = "padaria perto de mim",
  results = defaultResults,
  className = "",
}: MockMapsSearchResultProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-border overflow-hidden shadow-paper ${className}`}
      role="img"
      aria-label="Exemplo de busca no Google Maps"
    >
      {/* Search bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border bg-paper-warm">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5F6368" strokeWidth="1.5" aria-hidden>
          <circle cx="6" cy="6" r="4" />
          <path d="M9 9l3.5 3.5" strokeLinecap="round" />
        </svg>
        <span className="text-microcopy text-ink-muted">{query}</span>
        <span className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-muted font-medium">
          Maps
        </span>
      </div>

      {/* Results */}
      <ul className="divide-y divide-border">
        {results.map((r, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 px-3 py-3 ${
              r.hidden ? "opacity-50" : ""
            }`}
          >
            {/* Position pill */}
            <span
              className={`flex-none grid place-items-center w-6 h-6 rounded-full text-[10px] font-bold ${
                r.highlight
                  ? "bg-accent text-white"
                  : "bg-brand-soft text-brand"
              }`}
              aria-hidden
            >
              {i + 1}
            </span>

            <div className="flex-1 min-w-0">
              <p
                className={`text-microcopy font-semibold truncate ${
                  r.hidden ? "text-ink-muted line-through" : "text-ink"
                }`}
              >
                {r.name}
              </p>

              {r.rating > 0 ? (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <StarRating
                    value={r.rating}
                    reviewCount={r.reviews}
                    size={11}
                    showValue={false}
                  />
                  <span className="text-[11px] text-ink-muted tabular-nums">
                    {r.rating.toFixed(1)} ({r.reviews})
                  </span>
                </div>
              ) : (
                <p className="text-[11px] text-accent font-medium mt-0.5">
                  Não aparece nas buscas
                </p>
              )}

              <p className="text-[11px] text-ink-muted mt-0.5 truncate">
                {r.category} · {r.distance}
              </p>
            </div>

            {!r.hidden && (
              <span
                aria-hidden
                className="flex-none grid place-items-center w-6 h-6 rounded-full bg-brand-soft text-brand"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" aria-hidden>
                  <path d="M5.5 0C3 0 1 2 1 4.5c0 3 4.5 6.5 4.5 6.5S10 7.5 10 4.5C10 2 8 0 5.5 0zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
