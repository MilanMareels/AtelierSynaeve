import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] text-[#2D3142] font-sans px-6 md:px-12 relative overflow-hidden">
      {/* --- ACHTERGROND LOGO --- */}
      {/* absolute & inset-0 zet deze div over het hele scherm. pointer-events-none zorgt dat het klikken op de links niet blokkeert. */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="relative w-[120%] md:w-[70%] h-[90%] max-w-5xl opacity-30 md:opacity-40">
          <Image src="/Logo/logo.webp" alt="Atelier Synaeve Logo Groot" fill className="object-contain" priority />
        </div>
      </div>

      <main className="flex-grow flex flex-col justify-center items-center text-center pt-20 z-10">
        <h1 className="text-5xl md:text-7xl uppercase text-[#0b407c] drop-shadow-md mb-6 syncopate-bold">Atelier Synaeve</h1>

        <p className="text-lg md:text-xl text-gray-600 italic mb-16 max-w-2xl  p-4 rounded-2xl">Ontdek de wereld van organisch design, grafische vormgeving en creatieve textielprojecten.</p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center px-10 py-6">
          <Link href="/projecten/furniture" className="text-4xl md:text-4xl font-bold uppercase tracking-wide text-gray-500 hover:text-[#0b407c] hover:scale-110 transition-all duration-300">
            Furniture
          </Link>

          <Link href="/projecten/creative" className="text-4xl md:text-4xl font-bold uppercase tracking-wide text-gray-500 hover:text-[#0b407c] hover:scale-110 transition-all duration-300">
            Creative
          </Link>

          <Link href="/projecten/graphic" className="text-4xl md:text-4xl font-bold uppercase tracking-wide text-gray-500 hover:text-[#0b407c] hover:scale-110 transition-all duration-300">
            Graphic
          </Link>
        </div>
      </main>
    </div>
  );
}
