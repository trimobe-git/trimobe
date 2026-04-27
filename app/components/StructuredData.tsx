export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trimobe",
    url: "https://trimobe.com",
    logo: "https://trimobe.com/icon.svg",
    description:
      "Cadastro, otimização e recuperação de perfis no Google Meu Negócio para pequenas empresas brasileiras.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contato@trimobe.com",
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Trimobe",
    url: "https://trimobe.com",
    inLanguage: "pt-BR",
    description:
      "Coloque sua empresa no Google em poucos dias. Cadastro, otimização e recuperação de perfil. Pagamento só na entrega.",
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Trimobe",
    url: "https://trimobe.com",
    description:
      "Serviços únicos de Google Meu Negócio: cadastro e otimização de perfil (com ou sem site profissional incluso) e recuperação de perfil suspenso com modalidade risco zero. Atendimento 100% remoto pelo WhatsApp.",
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    serviceType: [
      "Cadastro e otimização de perfil no Google Meu Negócio",
      "Recuperação de perfil suspenso no Google Meu Negócio",
    ],
    priceRange: "R$ 297 — R$ 1.497",
    paymentAccepted: ["PIX", "Cartão de crédito"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Trimobe",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Cadastro & otimização de perfil no Google",
          price: "297.00",
          priceCurrency: "BRL",
        },
        {
          "@type": "Offer",
          name: "Cadastro & otimização com site profissional incluso",
          price: "397.00",
          priceCurrency: "BRL",
        },
        {
          "@type": "Offer",
          name: "Recuperação de perfil suspenso (risco zero)",
          price: "1497.00",
          priceCurrency: "BRL",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
