type IconProps = { className?: string };

export function StepChatIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none">
      <path
        d="M6 12 Q 6 6, 12 6 H 36 Q 42 6, 42 12 V 28 Q 42 34, 36 34 H 22 L 14 42 V 34 H 12 Q 6 34, 6 28 Z"
        fill="#25D366"
      />
      <circle cx="18" cy="20" r="2" fill="#FFFFFF" />
      <circle cx="24" cy="20" r="2" fill="#FFFFFF" />
      <circle cx="30" cy="20" r="2" fill="#FFFFFF" />
    </svg>
  );
}

export function StepCameraIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none">
      <rect x="6" y="14" width="36" height="26" rx="3" fill="#1A73E8" />
      <rect x="16" y="10" width="12" height="6" rx="1" fill="#1A73E8" />
      <circle cx="24" cy="27" r="8" fill="#FFFFFF" />
      <circle cx="24" cy="27" r="5" fill="#1557B0" />
      <circle cx="22" cy="25" r="1.5" fill="#FFFFFF" />
      <circle cx="36" cy="20" r="1.5" fill="#FBBC04" />
    </svg>
  );
}

export function StepCheckIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none">
      <circle cx="24" cy="24" r="20" fill="#1A73E8" />
      <path
        d="M14 25 L 21 32 L 34 18"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="40" cy="10" r="3" fill="#FBBC04" />
      <circle cx="8" cy="14" r="2" fill="#EA4335" />
    </svg>
  );
}
