import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const defaultSiteUrl = "https://tableforge.com.br";

function getMetadataBase() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl);
  } catch {
    return new URL(defaultSiteUrl);
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "TableForge",
    template: "%s | TableForge",
  },
  description:
    "App de geolocalização para conectar jogadores de RPG, board games e TCG com filtros inteligentes e encontros organizados.",
  applicationName: "TableForge",
  category: "games",
  authors: [{ name: "TableForge" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
