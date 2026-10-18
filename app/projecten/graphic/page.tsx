import Link from "next/link";
import { ReactNode } from "react";
import ClickableProject from "./clickableProject";

export default function GraphicPage() {
  const graphicItems = [
    { src: "/Graphic/Graphic-Propellor.webp", altSrc: "/Graphic/Graphic-Propellor-2.webp", alt: "Graphic Propellor" },
    { src: "/Graphic/Graphic-Lannie.webp", altSrc: "/Graphic/Graphic-Lannie-2.webp", alt: "Graphic Lannie" },
    { src: "/Graphic/Graphic-Rhino-1.webp", altSrc: "/Graphic/Graphic-Rhino-3.webp", alt: "Graphic Rhino" },
    { src: "/Graphic/Graphic-Rhino-2.webp", altSrc: "/Graphic/Graphic-Rhino-4.webp", alt: "Graphic Rhino 2" },
  ];

  const graphicProjects = graphicItems.map((item, i) => {
    return <ClickableProject key={i} src={item.src} altSrc={item.altSrc} alt={item.alt} />;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="grow">
        <PortfolioSection
          title={
            <div className="flex flex-col gap-4">
              <h2 className="text-[#3B458B] text-4xl font-black uppercase tracking-wider drop-shadow-md">Grafisch</h2>
              <Link href="/" className="font-sans text-[#3B458B] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 w-fit group">
                <span className="group-hover:-translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&larr;</span> Home
              </Link>
            </div>
          }
          items={graphicProjects}
        />
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
        <div className="flex flex-col w-full">
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
