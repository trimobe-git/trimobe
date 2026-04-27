type StepDiagramProps = {
  number: string;
  title: string;
  body: string;
  time: string;
  timeLabel: string;
  isLast?: boolean;
  className?: string;
};

export default function StepDiagram({
  number,
  title,
  body,
  time,
  timeLabel,
  isLast = false,
  className = "",
}: StepDiagramProps) {
  return (
    <div className={`relative grid grid-cols-12 gap-4 md:gap-8 ${className}`}>
      {/* Numeral column */}
      <div className="col-span-12 md:col-span-4 relative">
        <div className="relative">
          <span
            aria-hidden
            className="block font-display font-semibold text-[7rem] md:text-[10rem] lg:text-[12rem] leading-[0.85] text-brand tracking-tighter"
          >
            {number}
          </span>
          {/* Decorative accent dot beside numeral */}
          <span
            aria-hidden
            className="absolute -top-2 -right-2 md:top-2 md:right-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent"
          />
        </div>
        <p className="text-eyebrow uppercase font-semibold text-ink-muted">
          {timeLabel} · <span className="text-ink">{time}</span>
        </p>
      </div>

      {/* Content column */}
      <div className="col-span-12 md:col-span-8 md:pt-8 md:pl-6 relative">
        {/* Vertical/diagonal connector for desktop */}
        {!isLast && (
          <span
            aria-hidden
            className="hidden md:block absolute -left-2 -top-4 w-px h-[calc(100%+4rem)] bg-gradient-to-b from-border-warm via-border-warm/60 to-transparent"
          />
        )}
        <h3 className="font-display font-semibold text-h2 md:text-h1 text-ink leading-tight">
          {title}
        </h3>
        <p className="mt-4 text-lead text-ink-muted max-w-prose">
          {body}
        </p>
      </div>

      {/* Mobile horizontal connector */}
      {!isLast && (
        <div
          aria-hidden
          className="md:hidden col-span-12 flex items-center justify-center py-2"
        >
          <svg width="2" height="32" viewBox="0 0 2 32" aria-hidden>
            <line x1="1" y1="0" x2="1" y2="32" stroke="#E8EAED" strokeWidth="1.5" strokeDasharray="3 4" />
          </svg>
        </div>
      )}
    </div>
  );
}
