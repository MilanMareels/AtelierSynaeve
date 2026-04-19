"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

function ClickableImage({ src, altSrc, alt }: { src: string; altSrc: string; alt: string }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div onClick={() => setIsClicked(!isClicked)} className="relative w-[90%] md:w-[70%] h-62.5 md:h-175 block hover:scale-105 transition-transform duration-500 cursor-pointer group">
      <Image src={isClicked ? altSrc : src} alt={alt} fill className="object-contain" loading="lazy" />

      {/* UX/UI Fix: Subtiel "frosted glass" label. 
          Semi-transparant wit (bg-white/60), blur effect (backdrop-blur-md) en compacte tekst.
      */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-1.5 bg-white/60 backdrop-blur-md text-[#3B458B] text-[9px] md:text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/40 shadow-sm pointer-events-none z-20 transition-all duration-300">
        {/* Klein wissel icoontje */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>

        <span>{isClicked ? "Origineel" : "Wissel"}</span>
      </div>
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
