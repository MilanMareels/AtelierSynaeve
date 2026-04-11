import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/cookieBanner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import StructuredData from "./components/structuredData";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.ateliersynaeve.be";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: `Maatwerk Meubels & Grafisch Design | ${companyName}`,
    template: `%s | ${companyName}`,
  },

  description: "Meubelontwerp en grafisch design op maat in Dilbeek. Actief in Brussel, Antwerpen en heel Vlaanderen. Unieke meubels, interieur en branding op maat.",

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

    "meubelontwerpster Dilbeek",
    "interieur ontwerper Dilbeek",
    "grafisch designer Dilbeek",
    "creatieve studio Dilbeek",
    "maatwerk meubels Dilbeek",
    "interieur design Dilbeek",
    "custom meubels Dilbeek",
    "interieurstylist Dilbeek",
    "meubelmaker Dilbeek",
    "design studio Dilbeek",
    "grafisch ontwerp studio Dilbeek",
    "branding design Dilbeek",
    "logo ontwerp Dilbeek",
    "visuele identiteit Dilbeek",

    "meubelontwerp België",
    "meubelontwerpster België",
    "interieur designer België",
    "grafisch designer België",
    "design studio België",
    "maatwerk meubels België",
    "custom furniture Belgium",
    "interieur architect België",
    "branding studio België",
    "logo design België",
    "visual identity design Belgium",

    "interieur ontwerper Brussel",
    "meubelontwerp Brussel",
    "grafisch ontwerp Brussel",
    "design studio Brussel",

    "interieur designer Antwerpen",
    "grafisch ontwerper Antwerpen",
    "meubelontwerp Antwerpen",

    "interieur ontwerp Gent",
    "meubelontwerp Gent",
    "grafisch design Gent",

    "interieur designer Leuven",
    "interieur architect Brugge",

    "exclusief meubelontwerp",
    "design meubels op maat",
    "high-end interieur design België",
    "unieke meubels op maat",
    "luxury interior design Belgium",
    "bespoke furniture Belgium",
    "artisan furniture Belgium",
    "handmade furniture Belgium",

    "meubelontwerp en grafisch design",
    "interieur en branding design",
    "creatieve studio interieur en grafisch",
    "totaalconcept interieur design",
    "meubelontwerp en interieurstyling",
    "branding en interieur design België",

    "meubels op maat laten maken Dilbeek",
    "interieur designer voor woning België",
    "grafisch designer voor branding België",
    "unieke meubelontwerpen op maat",
    "creatieve studio voor totaalconcept",
    "interieur en grafisch design combineren",
  ],

  applicationName: companyName,

  authors: [{ name: companyName, url: baseUrl }],
  creator: "Milan Mareels | Lannie",
  publisher: companyName,

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: baseUrl,
    languages: {
      "nl-BE": "/nl",
    },
  },

  category: "Design & Interieur",

  openGraph: {
    title: `Meubelontwerp Dilbeek | ${companyName}`,
    description: "Meubelontwerp en grafisch design op maat in Dilbeek en Vlaanderen.",
    url: baseUrl,
    siteName: companyName,
    images: [
      {
        url: "/og-image.jpg", // 👉 maak een echte preview image!
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
    <html lang="nl-BE">
      <meta name="google-site-verification" content="TRKshhBQNFDqovEF0zDSkxqUEhl1YwrbtS_pHboVAH8" />
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-5DPV3R9CTM" />
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
