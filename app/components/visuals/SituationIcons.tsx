type IconProps = {
  className?: string;
};

export function NewBusinessIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="14" y="20" width="36" height="36" fill="#1A73E8" />
      <rect x="14" y="20" width="36" height="6" fill="#1557B0" />
      <rect x="20" y="30" width="6" height="6" fill="#FEF7E0" />
      <rect x="29" y="30" width="6" height="6" fill="#FEF7E0" />
      <rect x="38" y="30" width="6" height="6" fill="#FEF7E0" />
      <rect x="20" y="40" width="6" height="6" fill="#FEF7E0" />
      <rect x="38" y="40" width="6" height="6" fill="#FEF7E0" />
      <rect x="29" y="42" width="6" height="14" fill="#EA4335" />
      <path d="M48 8 L 50 12 L 54 14 L 50 16 L 48 20 L 46 16 L 42 14 L 46 12 Z" fill="#FBBC04" />
      <circle cx="56" cy="22" r="2" fill="#FBBC04" />
    </svg>
  );
}

export function CompetitorIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M44 8 c -7 0 -12 5 -12 12 c 0 8 12 18 12 18 s 12 -10 12 -18 c 0 -7 -5 -12 -12 -12 z"
        fill="#1A73E8"
      />
      <circle cx="44" cy="20" r="4" fill="#FFFFFF" />
      <path
        d="M22 22 c -7 0 -12 5 -12 12 c 0 8 12 18 12 18 s 12 -10 12 -18 c 0 -7 -5 -12 -12 -12 z"
        fill="#5F6368"
        opacity="0.35"
      />
      <circle cx="22" cy="34" r="4" fill="#FFFFFF" opacity="0.6" />
      <text
        x="22"
        y="38"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="10"
        fill="#5F6368"
      >
        ?
      </text>
    </svg>
  );
}

export function SuspendedIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g transform="rotate(-15 32 32)">
        <path
          d="M32 8 c -10 0 -16 7 -16 16 c 0 12 16 28 16 28 s 16 -16 16 -28 c 0 -9 -6 -16 -16 -16 z"
          fill="#EA4335"
        />
        <circle cx="32" cy="24" r="6" fill="#FFFFFF" />
        <path
          d="M28 20 L 36 28 M 36 20 L 28 28"
          stroke="#EA4335"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M48 36 L 56 50 L 40 50 Z"
        fill="#FBBC04"
        stroke="#202124"
        strokeWidth="1.5"
      />
      <line x1="48" y1="40" x2="48" y2="46" stroke="#202124" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="48" cy="48.5" r="0.8" fill="#202124" />
    </svg>
  );
}
