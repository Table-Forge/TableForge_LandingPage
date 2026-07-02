import type { Metadata } from "next";
import { PageContent } from "./components/page-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tableforge.com.br";
const pageTitle =
  "TableForge: conecte jogadores por geolocalização para RPG, board games e TCG";
const pageDescription =
  "Descubra e monte partys de jogadores por cidade, bairro ou raio. Organize encontros, use chat, calendário e filtros inteligentes para jogar mais.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "encontrar jogadores perto de mim",
    "app para RPG",
    "app para board games",
    "app para TCG",
    "geolocalização para jogadores",
    "organizar encontros de jogos",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: "TableForge",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TableForge",
    applicationCategory: "GameApplication",
    operatingSystem: "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    description: pageDescription,
    url: siteUrl,
    inLanguage: "pt-BR",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como encontrar jogadores de RPG perto de mim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Defina sua localização e um raio de busca no TableForge para encontrar jogadores e grupos próximos.",
        },
      },
      {
        "@type": "Question",
        name: "O app funciona para board games e TCG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O app conecta jogadores para RPG, board games, trading card games e outros jogos colaborativos.",
        },
      },
      {
        "@type": "Question",
        name: "Posso organizar encontros presenciais e online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Você pode conversar no chat, criar encontros e acompanhar tudo pelo calendário.",
        },
      },
    ],
  },
];



export default function Home() {


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageContent />
    </>
  );
}
