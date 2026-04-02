"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

function ClickableImage({ src, altSrc, alt }: { src: string; altSrc: string; alt: string }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div onClick={() => setIsClicked(!isClicked)} className="relative w-[90%] md:w-[70%] h-62.5 md:h-175 block hover:scale-105 transition-transform duration-500 cursor-pointer">
      <Image src={isClicked ? altSrc : src} alt={alt} fill className="object-contain" loading="lazy" />
    </div>
  );
}

export default function GraphicPage() {
  const graphicItems = [
    { src: "/Graphic/Graphic-Propellor.webp", altSrc: "/Graphic/Graphic-Propellor-2.webp", alt: "Graphic Propellor" },
    { src: "/Graphic/Graphic-Rhino-1.webp", altSrc: "/Graphic/Graphic-Rhino-3.webp", alt: "Graphic Rhino" },
    { src: "/Graphic/Graphic-Rhino-2.webp", altSrc: "/Graphic/Graphic-Rhino-4.webp", alt: "Graphic Rhino 2" },
    { src: "/Graphic/Graphic-Lannie.webp", altSrc: "/Graphic/Graphic-Lannie.webp", alt: "Graphic Lannie" },
  ];

  const graphicProjects = graphicItems.map((item, i) => {
    return (
      <div key={i} className="flex justify-center w-full">
        <ClickableImage src={item.src} altSrc={item.altSrc} alt={item.alt} />
      </div>
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="grow">
        <PortfolioSection title={<h2 className="text-[#3B458B] text-4xl font-black uppercase tracking-wider drop-shadow-md">Grafisch</h2>} items={graphicProjects} />
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
