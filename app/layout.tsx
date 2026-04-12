import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GoogleTagManager, { GoogleTagManagerNoscript } from "./components/GoogleTagManager";
import StructuredData from "./components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://trimobe.com'),
  title: {
    default: "Trimobe — Intermediação de Créditos de Carbono Agro",
    template: "%s | Trimobe"
  },
  description: "Intermediação de créditos de carbono entre cooperativas agrícolas brasileiras e empresas com metas de descarbonização. Documentação técnica, comprador qualificado, comissão só no fechamento.",
  applicationName: 'Trimobe',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Trimobe',
  },
  keywords: [
    "crédito de carbono",
    "vender crédito de carbono",
    "comprar crédito de carbono",
    "cooperativa crédito carbono",
    "intermediação crédito carbono",
    "crédito carbono agro",
    "SBCE",
    "mercado de carbono Brasil",
    "CBAM",
    "pecuária regenerativa",
    "café baixo carbono",
    "soja baixo carbono",
    "crédito carbono cooperativa agrícola"
  ],
  authors: [{ name: "Trimobe" }],
  creator: "Trimobe",
  publisher: "Trimobe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://trimobe.com",
    siteName: "Trimobe",
    title: "Trimobe — Intermediação de Créditos de Carbono Agro",
    description: "Intermediação de créditos de carbono entre cooperativas agrícolas brasileiras e empresas com metas de descarbonização. Documentação técnica, comprador qualificado, comissão só no fechamento.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trimobe — Intermediação de Créditos de Carbono Agro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimobe — Intermediação de Créditos de Carbono Agro",
    description: "Intermediação de créditos de carbono entre cooperativas agrícolas brasileiras e empresas com metas de descarbonização.",
    images: ["/twitter-image.png"],
    creator: "@trimobe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://trimobe.com",
  },
  category: "business",
  classification: "Intermediação, Créditos de Carbono, Agro Brasileiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <GoogleTagManager gtmId={gtmId} />
        <StructuredData />
      </head>
      <body
        className={`${plusJakartaSans.variable} bg-background-light text-gray-900 antialiased overflow-x-hidden transition-colors duration-300`}
      >
        <GoogleTagManagerNoscript gtmId={gtmId} />
        {children}
      </body>
    </html>
  );
}
