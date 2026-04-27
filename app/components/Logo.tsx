type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  size?: number;
};

export default function Logo({
  withWordmark = true,
  className = "",
  size = 28,
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Trimobe"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Pin silhouette — emerald */}
        <path
          d="M16 3c5.523 0 10 4.477 10 10 0 6.5-7.5 13.5-9.292 15.05a1 1 0 0 1-1.416 0C13.5 26.5 6 19.5 6 13 6 7.477 10.477 3 16 3Z"
          fill="#0B5742"
        />
        {/* Inner check, off-white */}
        <path
          d="M11.5 13.4l3 3 6-6"
          stroke="#FAF7F2"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent dot — terracotta */}
        <circle cx="24.5" cy="7.5" r="2.5" fill="#C24A1C" />
      </svg>
      {withWordmark && (
        <span className="font-display font-semibold text-ink tracking-tight text-[1.125rem] leading-none">
          trimobe
        </span>
      )}
    </span>
  );
}
