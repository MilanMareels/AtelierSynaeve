import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react"; // Importeer ReactNode voor TypeScript

export default function GraphicPage() {
  const graphicItems = [
    { src: "/Graphic/Graphic-Lannie.webp", alt: "Graphic Lannie" },
    { src: "/Graphic/Graphic-Propellor.webp", alt: "Graphic Propellor" },
    { src: "/Graphic/Graphic-Rhino-1.webp", alt: "Graphic Rhino" },
    { src: "/Graphic/Graphic-Rhino-2.webp", alt: "Graphic Rhino 2" },
  ];

  const graphicProjects = graphicItems.map((item, i) => {
    return (
      <div key={i} className="flex justify-center w-full">
        <Link href={"#"} className="relative w-[90%] md:w-[70%] h-62.5 md:h-175 block hover:scale-105 transition-transform duration-500">
          <Image src={item.src} alt={item.alt} fill className="object-contain" loading="lazy" />
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="grow">
        <PortfolioSection title={<h2 className="text-[#3B458B] text-4xl font-black uppercase tracking-wider drop-shadow-md">Graphic</h2>} items={graphicProjects} />
      </main>
    </div>
  );
}

interface PortfolioSectionProps {
  title: ReactNode;
  items: ReactNode[];
}

function PortfolioSection({ title, items }: PortfolioSectionProps) {
  return (
    <section className="flex flex-col pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="w-full mt-15 md:mt-10 mb-8 md:mb-16 z-10 relative">{title}</div>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-16 w-full">
          {items.map((item, index) => (
            <div key={index} className="w-full">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
