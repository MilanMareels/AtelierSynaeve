const projectsData: Record<string, { title: string; category: string; description: string; extraImages: string[] }> = {
  tessera: {
    title: "Tessera",
    category: "Meubel",
    description:
      "Latijns voor een klein stukje mozaïek. Binnen dit ontwerp staat het hergebruik van materialen volledig centraal. Oude terrasbalken en overschotten van travertin tegels, van de heraanleg van een buitentrap, bepaalden het ontwerp.",
    extraImages: ["/Tessera/Tessera-3-details.webp", "/Tessera/Tessera-2-details.webp", "/Tessera/Tessera-1-details.webp"],
  },
  "textile-usion": {
    title: "Textile Usion",
    category: "Furniture",
    description: "Stoel",
    extraImages: ["/", "/", "/"],
  },
  "organisch-hout": {
    title: "Organisch Hout",
    category: "Furniture",
    description: "Tafel binne hout",
    extraImages: ["/", "/", "/"],
  },
};

export default projectsData;
