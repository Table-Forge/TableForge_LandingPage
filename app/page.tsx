import type { Metadata } from "next";
import { PageContent } from "./components/page-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tableforge.com.br";
const pageTitle =
  "TableForge | O Ponto de Encontro para RPG, Board Games e Lojas Geek";
const pageDescription =
  "Conecte-se com jogadores de RPG e board games, descubra lojas físicas parceiras com reserva de mesas e organize encontros presenciais ou online por geolocalização.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "encontrar jogadores perto de mim",
    "app para RPG",
    "jogos de tabuleiro",
    "board games brasil",
    "lojas de jogos perto de mim",
    "reserva de mesas para jogos",
    "espaços geek",
    "app para board games",
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
        name: "Como encontrar jogadores de RPG e board games perto de mim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Defina sua localização e um raio de busca no TableForge para encontrar jogadores, mestres e grupos de jogos de tabuleiro e RPG na sua região.",
        },
      },
      {
        "@type": "Question",
        name: "O app oferece suporte completo para board games?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Você pode criar ou buscar partidas de jogos de tabuleiro modernos, combinar noites de jogos e conectar-se com outros entusiastas.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona para lojas físicas e espaços geek parceiros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lojistas podem cadastrar seu espaço, exibir mesas físicas, gerenciar solicitações de reserva e divulgar eventos e torneios diretamente para a comunidade local.",
        },
      },
      {
        "@type": "Question",
        name: "Posso reservar mesas físicas em lojas pelo aplicativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. As lojas parceiras exibem suas mesas cadastradas, capacidade e horários para solicitação de reserva direta no app.",
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
