export default function StructuredData() {
  const siteUrl = "https://www.ateliersynaeve.be";
  const bedrijfsNaam = process.env.NEXT_PUBLIC_COMPANY_NAME!;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Website
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: bedrijfsNaam,
        description: "Creatief meubelontwerp en grafisch design op maat in Dilbeek en heel Vlaanderen.",
        inLanguage: "nl-BE",
      },

      // 2. Organization
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: bedrijfsNaam,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
        sameAs: [
          "https://www.instagram.com/atelier_synaeve/", // vervang
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        name: bedrijfsNaam,
        image: `${siteUrl}/og-image.webp`,
        url: siteUrl,

        description: "Meubelontwerp op maat en grafisch design vanuit Dilbeek. Actief in Brussel, Antwerpen en heel Vlaanderen.",

        telephone: "+32 476 00 00 00", // aanpassen
        email: "info@ateliersynaeve.be", // aanpassen

        address: {
          "@type": "PostalAddress",
          addressLocality: "Dilbeek",
          addressRegion: "Vlaams-Brabant",
          postalCode: "1700",
          addressCountry: "BE",
        },

        areaServed: [
          {
            "@type": "City",
            name: "Dilbeek",
          },
          {
            "@type": "City",
            name: "Brussel",
          },
          {
            "@type": "City",
            name: "Antwerpen",
          },
          {
            "@type": "AdministrativeArea",
            name: "Vlaanderen",
          },
          {
            "@type": "City",
            name: "Oostende",
          },
        ],

        priceRange: "$$",

        keywords: "meubelontwerp, maatwerk meubels, interieur design, grafisch ontwerp, Dilbeek, Brussel, Antwerpen",

        openingHours: "Mo-Fr 09:00-18:00",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#services`,
        serviceType: ["Meubelontwerp op maat", "Interieur design", "Grafisch ontwerp"],
        provider: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        areaServed: {
          "@type": "Country",
          name: "België",
        },
      },

      // 5. Breadcrumb
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
