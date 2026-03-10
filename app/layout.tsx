import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/cookieBanner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import StructuredData from "./components/structuredData";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.jouwdomein.be";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

export const metadata: Metadata = {
  // Dit lost de 'Canonical URL' errors op door een basis URL in te stellen
  metadataBase: new URL(baseUrl),

  title: {
    // Rapport tip: Maak de titel specifieker voor je diensten
    default: `Michele | ${companyName}`,
    template: `%s | ${companyName}`,
  },

  // Rapport tip: Call-to-action toevoegen
  description: "Professionele one-page websites en software op maat. Snel, responsief en SEO geoptimaliseerd. Vraag vandaag nog een offerte aan.",

  keywords: ["website laten maken", "nextjs", "webdesign", "antwerpen", "seo", "bedrijfssoftware"],

  // OPLOSSING VOOR "Meta Robots ontbreekt"
  // Dit vertelt Google expliciet: "Ja, indexeer deze pagina"
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

  // OPLOSSING VOOR "Canonical ontbreekt" & "Hreflang"
  alternates: {
    canonical: "./", // Wijst naar de huidige pagina als origineel
    languages: {
      "nl-BE": "/nl", // Geeft aan dat dit de Vlaamse versie is
    },
  },

  openGraph: {
    title: "Web Development & Cloud Services | Jouw Bedrijf",
    description: "Wij bouwen snelle, vindbare websites. Bekijk onze diensten.",
    url: baseUrl,
    siteName: "Jouw Bedrijf",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview van Jouw Bedrijf",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
