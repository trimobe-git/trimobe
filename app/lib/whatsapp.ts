export type WhatsAppMessageKey =
  | "hero"
  | "navbar"
  | "botaoFixo"
  | "howItWorks"
  | "cardCadastro"
  | "cardRecuperacao"
  | "blocoSemRisco"
  | "ctaFinal";

const messages: Record<WhatsAppMessageKey, string> = {
  hero: "Olá! Cheguei pelo site da Trimobe e quero conversar.",
  navbar: "Olá! Cheguei pelo site da Trimobe e quero conversar.",
  botaoFixo: "Olá! Cheguei pelo site da Trimobe e quero conversar.",
  howItWorks: "Olá! Cheguei pelo site da Trimobe e quero conversar.",
  cardCadastro: "Olá! Quero meu perfil no Google pronto pra aparecer.",
  cardRecuperacao: "Olá! Meu perfil do Google foi suspenso e preciso recuperar.",
  blocoSemRisco: "Olá! Vi que só pago na entrega e quero começar.",
  ctaFinal: "Olá! Acabei de ler o site e quero começar.",
};

const utmCampaigns: Record<WhatsAppMessageKey, string> = {
  hero: "hero",
  navbar: "navbar",
  botaoFixo: "botao_fixo",
  howItWorks: "como_funciona",
  cardCadastro: "card_cadastro",
  cardRecuperacao: "card_recuperacao",
  blocoSemRisco: "bloco_sem_risco",
  ctaFinal: "cta_final",
};

const FALLBACK_NUMBER = "5500000000000";

function getNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER;
  return raw.replace(/\D/g, "");
}

export function whatsappUrl(key: WhatsAppMessageKey): string {
  const number = getNumber();
  const text = encodeURIComponent(messages[key]);
  const utm = `utm_source=site&utm_medium=cta&utm_campaign=${utmCampaigns[key]}`;
  return `https://wa.me/${number}?text=${text}&${utm}`;
}

export function phoneDisplay(): string {
  return process.env.NEXT_PUBLIC_PHONE_DISPLAY || "";
}

export function phoneTelHref(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  return raw ? `tel:+${raw.replace(/\D/g, "")}` : "";
}
