import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import GoogleTagManager, { GoogleTagManagerNoscript } from "./components/GoogleTagManager";
import StructuredData from "./components/StructuredData";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trimobe.com"),
  title: {
    default: "Trimobe — Cadastro, otimização e recuperação no Google em poucos dias",
    template: "%s | Trimobe",
  },
  description:
    "Coloque sua empresa no Google em até 7 dias. Cadastro, otimização e recuperação de perfil. Sem mensalidade, sem fidelidade — você só paga quando o serviço estiver pronto.",
  applicationName: "Trimobe",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Trimobe",
  },
  keywords: [
    "google meu negócio",
    "cadastrar empresa no google",
    "otimizar google meu negócio",
    "recuperar perfil google suspenso",
    "perfil empresa google",
    "google business profile",
    "site para empresa pequena",
    "empresa não aparece no google",
    "consultor google meu negócio",
    "cadastro google maps",
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
    title: "Trimobe — Coloque sua empresa no Google em poucos dias",
    description:
      "Cadastro, otimização e recuperação de perfil no Google. Pagamento só na entrega. Atende o Brasil inteiro pelo WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trimobe — Sua empresa encontrada no Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimobe — Coloque sua empresa no Google em poucos dias",
    description:
      "Cadastro, otimização e recuperação de perfil no Google. Pagamento só na entrega.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://trimobe.com",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <GoogleTagManager gtmId={gtmId} />
        <StructuredData />
      </head>
      <body className="bg-bg text-ink antialiased overflow-x-hidden">
        <GoogleTagManagerNoscript gtmId={gtmId} />
        {children}
      </body>
    </html>
  );
}
