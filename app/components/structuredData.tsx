export default function StructuredData() {
  // Pas dit aan naar je echte gegevens
  const siteUrl = "https://www.jouwdomein.be";
  const bedrijsNaam = "Jouw Bedrijfsnaam";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema (Voor de zoekbalk en sitenaam in Google)
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: bedrijsNaam,
        description: "Expert in web development en SEO",
        inLanguage: "nl-BE",
      },
      // 2. Organization Schema (Voor je logo en social media koppelingen)
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: bedrijsNaam,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`, // Zorg dat dit bestand bestaat in /public
          width: 112,
          height: 112,
        },
        sameAs: ["https://www.facebook.com/jouwbedrijf", "https://www.linkedin.com/company/jouwbedrijf"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+32 476 00 00 00",
          contactType: "customer service",
          areaServed: "BE",
          availableLanguage: "Dutch",
        },
      },
      // 3. LocalBusiness (Voor lokale vindbaarheid in Maps)
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        name: bedrijsNaam,
        image: `${siteUrl}/og-image.jpg`,
        telephone: "+32 476 00 00 00",
        email: "info@jouwdomein.be",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Straatnaam 123",
          addressLocality: "Antwerpen",
          postalCode: "2000",
          addressCountry: "BE",
        },
        priceRange: "$$",
      },
      // 4. Breadcrumb (Voor de navigatiepaden in Google)
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
