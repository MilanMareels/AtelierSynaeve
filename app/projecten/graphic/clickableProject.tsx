"use client";

import Image from "next/image";
import { useState } from "react";

interface ClickableProjectProps {
  src: string;
  altSrc: string;
  alt: string;
}

export default function ClickableProject({ src, altSrc, alt }: ClickableProjectProps) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleImage = () => setIsClicked(!isClicked);

  return (
    <div className="w-full flex flex-col mb-16 md:mb-24">
      <div className="w-full flex justify-end mb-8 md:mb-12 px-4 md:px-12 relative z-40">
        <div onClick={toggleImage} className="text-[#3B458B] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 group cursor-pointer">
          {isClicked ? "Origineel" : "Bekijk project"}
          <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&rarr;</span>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div onClick={toggleImage} className="relative w-[90%] md:w-[70%] h-62.5 md:h-175 block hover:scale-105 transition-transform duration-500 cursor-pointer">
          <Image src={isClicked ? altSrc : src} alt={alt} fill sizes="(max-width: 768px) 90vw, 70vw" className="object-contain" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
