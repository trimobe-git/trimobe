"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "../lib/whatsapp";
import WhatsAppIcon from "./visuals/WhatsAppIcon";

export default function StickyWhatsAppButton() {
  const href = whatsappUrl("botaoFixo");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") {
      setHidden(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide while Hero's primary CTA area is visible to avoid duplicate CTA
        setHidden(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      { threshold: [0, 0.25, 0.5, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden pointer-events-none transition-all duration-300 ${
        hidden
          ? "opacity-0 translate-y-3 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="px-4 safe-bottom pointer-events-auto">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          tabIndex={hidden ? -1 : 0}
          className="group flex items-center justify-center gap-2.5 w-full min-h-[58px] rounded-2xl bg-cta hover:bg-cta-hover text-white font-semibold text-lead shadow-cta-glow active:translate-y-[1px] transition-all touch-manipulation"
        >
          <WhatsAppIcon size={22} />
          <span>Falar no WhatsApp</span>
          <span
            aria-hidden
            className="ml-1 transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
