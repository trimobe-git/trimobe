type BeforeAfterCardProps = {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

export default function BeforeAfterCard({
  before,
  after,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
}: BeforeAfterCardProps) {
  return (
    <div className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {/* Before */}
      <div className="relative">
        <span className="absolute -top-2 left-3 z-10 inline-flex items-center px-2 py-0.5 rounded-full bg-ink text-[10px] uppercase tracking-wider text-white font-semibold">
          {beforeLabel}
        </span>
        <div className="relative h-full">{before}</div>
      </div>
      {/* Arrow connector — desktop */}
      <div
        aria-hidden
        className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-brand text-white shadow-lift z-10"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M3 9 L 15 9 M 11 5 L 15 9 L 11 13" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* After */}
      <div className="relative">
        <span className="absolute -top-2 left-3 z-10 inline-flex items-center px-2 py-0.5 rounded-full bg-brand text-[10px] uppercase tracking-wider text-white font-semibold">
          {afterLabel}
        </span>
        <div className="relative h-full">{after}</div>
      </div>
    </div>
  );
}
