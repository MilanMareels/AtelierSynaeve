export default function StructuredData() {
  const siteUrl = "https://www.ateliersynaeve.be";
  const bedrijfsNaam = process.env.NEXT_PUBLIC_COMPANY_NAME!;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WEBSITE
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: bedrijfsNaam,
        description: "Creatief meubelontwerp en grafisch design op maat in Dilbeek en heel Vlaanderen.",
        inLanguage: "nl-BE",
      },

      // 2. ORGANIZATION
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: bedrijfsNaam,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/Logo/logo.webp`,
        },
        image: `${siteUrl}/og-image.webp`, // TODO
        sameAs: ["https://www.instagram.com/atelier_synaeve/"],
      },

      // 3. LOCAL BUSINESS
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#localbusiness`,
        name: bedrijfsNaam,
        url: siteUrl,

        parentOrganization: {
          "@id": `${siteUrl}#organization`,
        },

        image: `${siteUrl}/og-image.webp`, // TODO
        description: "Meubelontwerp op maat en grafisch design vanuit Dilbeek. Actief in Brussel, Antwerpen en heel Vlaanderen.",

        telephone: "+32 479 34 66 46",
        email: "atelier.synaeve@gmail.com",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Dilbeek",
          addressRegion: "Vlaams-Brabant",
          postalCode: "1700",
          addressCountry: "BE",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.8476,
          longitude: 4.259,
        },

        areaServed: [
          { "@type": "City", name: "Dilbeek" },
          { "@type": "City", name: "Brussel" },
          { "@type": "City", name: "Antwerpen" },
          { "@type": "AdministrativeArea", name: "Vlaanderen" },
          { "@type": "City", name: "Oostende" },
        ],

        priceRange: "$$",

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      },

      // 4. SERVICE
      {
        "@type": "Service",
        "@id": `${siteUrl}#service`,
        serviceType: ["Meubelontwerp op maat", "Interieur design", "Grafisch ontwerp"],
        provider: {
          "@id": `${siteUrl}#localbusiness`,
        },
        areaServed: {
          "@type": "Country",
          name: "België",
        },
      },

      // 5. PERSON
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        name: "Atlete Seynaeve",
        jobTitle: "Meubelontwerpster en grafisch designer",
        url: siteUrl,
        worksFor: {
          "@id": `${siteUrl}#localbusiness`,
        },
        sameAs: ["https://www.instagram.com/atelier_synaeve/"],
      },

      // 6. BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Meubel",
            item: `${siteUrl}/projecten/furniture`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Grafisch",
            item: `${siteUrl}/projecten/graphic`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Artistiek",
            item: `${siteUrl}/projecten/creative`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${siteUrl}/contact`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Over ons",
            item: `${siteUrl}/about`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
