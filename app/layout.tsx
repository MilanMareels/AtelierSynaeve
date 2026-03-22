import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/cookieBanner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import StructuredData from "./components/structuredData";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.ateliersynaeve.be";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: `Meubelontwerp & Design Dilbeek | ${companyName}`,
    template: `%s | ${companyName}`,
  },

  description: "Meubelontwerp en grafisch design op maat in Dilbeek. Actief in Brussel, Antwerpen en heel Vlaanderen. Unieke creatieve ontwerpen.",

  keywords: [
    "meubelontwerp",
    "meubelontwerp Dilbeek",
    "maatwerk meubels",
    "interieur design België",
    "grafisch ontwerp",
    "grafisch ontwerp Dilbeek",
    "interieur ontwerper Brussel",
    "meubels op maat Antwerpen",
    "design meubels Vlaanderen",
    "creatieve studio België",
    "interieur ontwerp Oostende",
    "meubel designer België",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "./",
    languages: {
      "nl-BE": "/nl",
    },
  },

  openGraph: {
    title: `Meubelontwerp & Design Dilbeek`,
    description: "Meubelontwerp en grafisch design op maat in Dilbeek en Vlaanderen.",
    url: baseUrl,
    siteName: companyName,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Meubelontwerp en design",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
