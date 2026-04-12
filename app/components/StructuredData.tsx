import React from 'react';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trimobe",
    "url": "https://trimobe.com",
    "logo": "https://trimobe.com/icon.svg",
    "description": "Intermediação de créditos de carbono entre cooperativas agrícolas brasileiras e empresas com metas de descarbonização.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contato@trimobe.com",
      "availableLanguage": ["Portuguese"]
    },
    "sameAs": [
      "https://twitter.com/trimobe",
      "https://linkedin.com/company/trimobe"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trimobe",
    "url": "https://trimobe.com",
    "description": "Intermediação de créditos de carbono agro — conectando cooperativas agrícolas a empresas compradoras no Brasil."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Intermediação de Créditos de Carbono",
    "provider": {
      "@type": "Organization",
      "name": "Trimobe"
    },
    "description": "Intermediação especializada em créditos de carbono agrícolas — café, soja e pecuária regenerativa. Documentação técnica completa, curadoria de compradores qualificados, comissão apenas no fechamento.",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://trimobe.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
