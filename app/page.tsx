import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f5f7] text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/Logo/logo.webp" alt="Atelier Synaeve Aquarel Achtergrond" fill className="object-cover scale-150 md:scale-200 transform transition-transform duration-500" priority />
      </div>

      <main className="flex-grow flex flex-col justify-center items-center text-center z-10 px-4 md:px-6 relative w-full">
        <div className="flex flex-col w-max max-w-full">
          <h1 className="text-[7.5vw] sm:text-4xl md:text-5xl lg:text-[4.5rem] uppercase mb-2 drop-shadow-md syncopate-bold tracking-tight whitespace-nowrap">Atelier Synaeve</h1>

          <div className="flex flex-row justify-between w-full px-1">
            <Link
              href="/projecten/furniture"
              className="sm:text-sm md:text-2xl lg:text-3xl uppercase hover:text-gray-200 hover:scale-105 transition-all duration-300 font-light drop-shadow-sm syncopate tracking-tight"
            >
              Meubel
            </Link>

            <Link
              href="/projecten/creative"
              className="sm:text-sm md:text-2xl lg:text-3xl uppercase hover:text-gray-200 hover:scale-105 transition-all duration-300 font-light drop-shadow-sm syncopate tracking-tight"
            >
              Artistiek
            </Link>

            <Link
              href="/projecten/graphic"
              className="sm:text-sm md:text-2xl lg:text-3xl uppercase hover:text-gray-200 hover:scale-105 transition-all duration-300 font-light drop-shadow-sm syncopate tracking-tight"
            >
              Grafisch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
