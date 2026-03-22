"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:gap-12 md:p-12">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <Image src={img} alt={`${title} galerij ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-6 text-white text-5xl font-light hover:text-gray-300 transition-colors z-60" onClick={() => setSelectedImage(null)} aria-label="Sluiten">
            &times;
          </button>

          <div className="relative w-full h-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Vergrote weergave" fill className="object-contain" priority loading="lazy" />
          </div>
        </div>
      )}
    </>
  );
}
