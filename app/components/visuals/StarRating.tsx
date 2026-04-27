type StarRatingProps = {
  value?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
  reviewCount?: number;
};

export default function StarRating({
  value = 4.8,
  size = 14,
  className = "",
  showValue = true,
  reviewCount,
}: StarRatingProps) {
  const stars = Array.from({ length: 5 });
  const filledFloor = Math.floor(value);
  const fractional = value - filledFloor;

  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label={`${value} de 5 estrelas${reviewCount ? `, ${reviewCount} avaliações` : ""}`}
    >
      <span className="inline-flex items-center gap-0.5">
        {stars.map((_, i) => {
          const fill =
            i < filledFloor ? 1 : i === filledFloor ? fractional : 0;
          const id = `star-${i}-${Math.round(fill * 100)}`;
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                  <stop offset={`${fill * 100}%`} stopColor="#FBBC04" />
                  <stop offset={`${fill * 100}%`} stopColor="#DADCE0" />
                </linearGradient>
              </defs>
              <path
                d="M12 2.5l2.95 6.18 6.8.92-4.95 4.7 1.2 6.7L12 17.8 5.99 21l1.2-6.7L2.25 9.6l6.8-.92L12 2.5z"
                fill={`url(#${id})`}
                stroke="#FBBC04"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />
            </svg>
          );
        })}
      </span>
      {showValue && (
        <span className="text-microcopy font-semibold text-ink ml-0.5 tabular-nums">
          {value.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="text-microcopy text-ink-muted">
          ({reviewCount})
        </span>
      )}
    </span>
  );
}
