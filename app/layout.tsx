import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rimed — Solutions SIH, RIS, PACS & équipements biomédicaux",
  description:
    "Rimed conçoit, déploie et maintient les systèmes d'information hospitaliers (SIH), RIS et PACS, ainsi que la vente, l'installation et la maintenance d'équipements médicaux, industriels et de consommables.",
  keywords: [
    "SIH",
    "RIS",
    "PACS",
    "équipements biomédicaux",
    "maintenance biomédicale",
    "système d'information hospitalier",
    "imagerie médicale",
    "Rimed",
  ],
  openGraph: {
    title: "Rimed — Solutions SIH, RIS, PACS & équipements biomédicaux",
    description:
      "Vente, intégration et maintenance d'équipements médicaux, industriels et consommables. Solutions logicielles SIH, RIS, PACS pour établissements de santé.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${grotesk.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
