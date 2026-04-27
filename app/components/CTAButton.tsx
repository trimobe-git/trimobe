import Link from "next/link";
import WhatsAppIcon from "./visuals/WhatsAppIcon";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = true,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-2xl font-semibold transition-all duration-200 active:translate-y-[1px] touch-manipulation";

  const variantCls =
    variant === "primary"
      ? "bg-cta hover:bg-cta-hover text-white shadow-cta hover:shadow-cta-glow hover:-translate-y-0.5"
      : variant === "outline"
      ? "border border-ink/15 text-ink hover:border-brand hover:text-brand bg-surface"
      : "text-brand hover:text-brand-strong underline-offset-4 hover:underline";

  const sizeCls =
    variant === "ghost"
      ? "px-2 py-2 text-body"
      : size === "lg"
      ? "px-7 py-4 text-lead min-h-[58px]"
      : "px-6 py-3.5 text-body min-h-[52px]";

  const widthCls = fullWidth && variant !== "ghost" ? "w-full" : "";

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`${base} ${variantCls} ${sizeCls} ${widthCls} ${className}`}
    >
      {variant === "primary" && (
        <WhatsAppIcon
          size={20}
          className="transition-transform group-hover:rotate-[-8deg] group-hover:scale-110"
        />
      )}
      <span>{children}</span>
      {variant === "primary" && (
        <span
          aria-hidden
          className="ml-1 transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
