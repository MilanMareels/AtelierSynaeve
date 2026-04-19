"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedIndex !== null) {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex! - 1));
      }
    },
    [selectedIndex, images.length],
  );

  const showNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedIndex !== null) {
        setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex! + 1));
      }
    },
    [selectedIndex, images.length],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex! - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex! + 1));
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:gap-12 md:p-12">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden cursor-pointer group" onClick={() => setSelectedIndex(index)}>
              <Image src={img} alt={`${title} galerij ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            </div>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out" onClick={() => setSelectedIndex(null)}>
          <button
            className="absolute top-4 right-6 md:top-8 md:right-10 text-white/70 hover:text-white transition-colors z-60 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Sluiten"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {images.length > 1 && (
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-60 cursor-pointer p-4"
              onClick={showPrev}
              aria-label="Vorige afbeelding"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <div className="relative w-full h-[85vh] md:h-full max-w-7xl flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <Image src={images[selectedIndex]} alt={`${title} vergroot`} fill className="object-contain" priority />
          </div>

          {images.length > 1 && (
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-60 cursor-pointer p-4"
              onClick={showNext}
              aria-label="Volgende afbeelding"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 tracking-widest text-sm font-sans">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
