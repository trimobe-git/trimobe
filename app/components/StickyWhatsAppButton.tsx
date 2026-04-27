import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/whatsapp";

export default function StickyWhatsAppButton() {
  const href = whatsappUrl("hero");

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 md:hidden pointer-events-none"
      aria-hidden={false}
    >
      <div className="px-4 safe-bottom pointer-events-auto">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="flex items-center justify-center gap-2 w-full min-h-[56px] rounded-2xl bg-cta hover:bg-cta-hover text-white font-semibold text-lead shadow-cta active:translate-y-[1px] transition touch-manipulation"
        >
          <MessageCircle size={22} strokeWidth={2.4} aria-hidden />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
