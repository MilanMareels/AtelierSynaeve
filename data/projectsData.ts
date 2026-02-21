const projectsData: Record<string, { title: string; category: string; description: string; mainImage: string; extraImages: string[] }> = {
  tessera: {
    title: "Tessera",
    category: "Furniture",
    description: "Tafel taras",
    mainImage: "/tessera-1.HEIC",
    extraImages: ["/tessera-2.jpg", "/tessera-3.HEIC", "/tessera-1.HEIC"],
  },
  "textile-usion": {
    title: "Textile Usion",
    category: "Furniture",
    description: "Stoel",
    mainImage: "/",
    extraImages: ["/", "/", "/"],
  },
  "organisch-hout": {
    title: "Organisch Hout",
    category: "Furniture",
    description: "Tafel binne hout",
    mainImage: "/",
    extraImages: ["/", "/", "/"],
  },
};

export default projectsData;
