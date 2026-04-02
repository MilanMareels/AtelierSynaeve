"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute top-34 left-6 md:top-38 md:left-12 z-50 flex items-center gap-3 text-[#0b407c] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-all duration-300 group cursor-pointer"
      aria-label="Ga terug naar de vorige pagina"
    >
      <span className="group-hover:-translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&larr;</span>
      Terug
    </button>
  );
}
