import Link from "next/link";
import { MessageCircle } from "lucide-react";

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
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:translate-y-[1px] touch-manipulation";

  const variantCls =
    variant === "primary"
      ? "bg-cta hover:bg-cta-hover text-white shadow-cta"
      : variant === "outline"
      ? "border border-ink/15 text-ink hover:border-ink/35 bg-surface"
      : "text-brand hover:text-brand-strong underline-offset-4 hover:underline";

  const sizeCls =
    variant === "ghost"
      ? "px-2 py-2 text-body"
      : size === "lg"
      ? "px-6 py-4 text-lead min-h-[56px]"
      : "px-5 py-3.5 text-body min-h-[52px]";

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
        <MessageCircle size={20} strokeWidth={2.4} aria-hidden />
      )}
      <span>{children}</span>
    </Link>
  );
}
