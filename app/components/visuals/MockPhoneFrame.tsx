type MockPhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MockPhoneFrame({
  children,
  className = "",
}: MockPhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto rounded-[2.25rem] bg-ink p-2 shadow-editorial ${className}`}
      style={{ aspectRatio: "9 / 18" }}
      role="presentation"
    >
      {/* Camera notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-ink z-20" />
      {/* Screen */}
      <div className="relative h-full w-full rounded-[1.6rem] bg-bg overflow-hidden">
        {/* Status bar */}
        <div className="absolute top-0 inset-x-0 h-6 px-5 pt-2 flex items-center justify-between text-[10px] font-semibold text-ink z-10 pointer-events-none">
          <span className="tabular-nums">9:41</span>
          <span className="inline-flex items-center gap-1">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="currentColor" aria-hidden>
              <rect x="0" y="6" width="2" height="3" rx="0.5" />
              <rect x="3" y="4" width="2" height="5" rx="0.5" />
              <rect x="6" y="2" width="2" height="7" rx="0.5" />
              <rect x="9" y="0" width="2" height="9" rx="0.5" />
            </svg>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
              <rect x="0.5" y="1" width="11" height="6" rx="1.5" />
              <rect x="2" y="2.5" width="8" height="3" rx="0.5" fill="currentColor" />
              <rect x="12.5" y="3" width="1" height="2.5" rx="0.5" fill="currentColor" />
            </svg>
          </span>
        </div>
        {/* Content area */}
        <div className="absolute inset-0 pt-7 pb-2 px-2.5 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
