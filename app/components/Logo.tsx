import { MapPinHouse } from "lucide-react";

type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  size?: number;
  color?: string;
  wordmarkClassName?: string;
};

export default function Logo({
  withWordmark = true,
  className = "",
  size = 28,
  color = "#1A73E8",
  wordmarkClassName = "text-ink",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Trimobe"
    >
      <MapPinHouse
        size={size}
        color={color}
        strokeWidth={2}
        aria-hidden="true"
        focusable="false"
      />
      {withWordmark && (
        <span
          className={`font-display font-semibold tracking-tight text-[1.125rem] leading-none ${wordmarkClassName}`}
        >
          Trimobe
        </span>
      )}
    </span>
  );
}
