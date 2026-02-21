import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react"; // Toegevoegd voor TypeScript

export default function FurniturePage() {
  const furnitureProjects = [
    // Blok 1: Tafels (Blauwe ovaal, roze tafel links, groene tafel rechts)
    // gap-12 verkleind naar gap-2 op mobiel
    <div key="1" className="flex flex-col items-center gap-2 md:gap-12 w-full">
      {/* h-[250px] verkleind naar h-[150px] op mobiel */}
      <Link href="/projecten/details/tessera" className="relative w-[95%] md:w-[85%] h-[150px] md:h-[350px] block hover:scale-105 transition-transform duration-500">
        <Image src="/Tessera/Tessera-1.webp" alt="Tessera" fill className="object-contain" loading="lazy" />
      </Link>
      {/* h-[200px] verkleind naar h-[120px] op mobiel */}
      <div className="flex w-full justify-between items-center px-4 md:px-12 h-[120px] md:h-[350px]">
        <Link href="/projecten/tessera-4" className="relative w-[45%] md:w-[55%] h-[60%] md:h-[80%] block hover:scale-105 transition-transform duration-500">
          <Image src="/Tessera/Tessera-2.webp" alt="Tessera 4" fill className="object-contain" loading="lazy" />
        </Link>
        <Link href="/projecten/details/tessera-2" className="relative w-[45%] md:w-[55%] h-full block hover:scale-105 transition-transform duration-500 md:top-30">
          <Image src="/Tessera/Tessera-3.webp" alt="Tessera 2" fill className="object-contain" loading="lazy" />
        </Link>
      </div>
    </div>,

    // Blok 2: Textiel (Blauw kussen, roze stoel, groene stoel)
    // h-[500px] verkleind naar h-[320px] op mobiel, mt-10 naar mt-4
    <div key="2" className="relative w-full h-[320px] md:h-[800px] mt-4 md:mt-10">
      <Link
        href="/projecten/details/textile-usion-3"
        // h-[150px] verkleind naar h-[100px]
        className="absolute top-[0%] md:top-[-10%] left-[5%] md:left-[15%] w-[40%] md:w-[35%] h-[100px] md:h-[250px] block hover:scale-105 transition-transform duration-500 z-10"
      >
        <Image src="/Textile-usion/Textile-usion-3.webp" alt="Textile usion 3" fill className="object-contain" loading="lazy" />
      </Link>
      <Link
        href="/projecten/details/textile-usion-2"
        // h-[250px] verkleind naar h-[180px]
        className="absolute top-[15%] right-[0%] md:right-[5%] w-[55%] md:w-[45%] h-[180px] md:h-[450px] block hover:scale-105 transition-transform duration-500 z-20"
      >
        <Image src="/Textile-usion/Textile-usion-2.webp" alt="Textile usion 2" fill className="object-contain" loading="lazy" />
      </Link>
      <Link
        href="/projecten/details/textile-usion"
        // h-[200px] verkleind naar h-[150px]
        className="absolute bottom-[-5%] left-[10%] md:left-[15%] w-[37%] md:w-[35%] h-[150px] md:h-[550px] block hover:scale-105 transition-transform duration-500 z-30"
      >
        <Image src="/Textile-usion/Textile-usion-1.webp" alt="Textile usion" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    // Blok 3: Kleine organische houten vormen
    // h-[200px] verkleind naar h-[120px] op mobiel
    <div key="3" className="flex w-full justify-between items-end h-[120px] md:h-[350px] px-4 md:px-20 mt-4 md:mt-10">
      <Link href="/projecten/details/organisch-hout" className="relative w-[65%] md:w-[65%] h-full block hover:scale-105 transition-transform duration-500">
        <Image src="/Organisch-hout/Organisch-hout-1.webp" alt="Organisch hout" fill className="object-contain" loading="lazy" />
      </Link>
      <Link href="/projecten/organisch-hout-2" className="relative md:ml-20 w-[55%] md:w-[55%] h-[80%] md:h-[90%] block hover:scale-105 transition-transform duration-500 mb-4 rotate-90">
        <Image src="/Organisch-hout/Organisch-hout-2.webp" alt="Organisch hout 2" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    // Blok 4: Grote groene organische vorm (vult de onderkant)
    // h-[400px] verkleind naar h-[220px], mt-20 verkleind naar mt-8 op mobiel
    <div key="4" className="w-full flex justify-center mt-8 md:mt-20">
      <Link href="/projecten/details/organisch-hout-3" className="relative w-[100vw] max-w-[1200px] h-[220px] md:h-[800px] block hover:scale-105 transition-transform duration-500">
        <Image src="/Organisch-hout/Organisch-hout-3.webp" alt="Organisch hout 3" fill className="object-contain md:object-cover" loading="lazy" />
      </Link>
    </div>,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] text-[#2D3142] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="flex-grow">
        <PortfolioSection title={<h2 className="text-[#0b407c] text-4xl font-black uppercase tracking-wider drop-shadow-md text-left md:text-left">Furniture</h2>} items={furnitureProjects} />
      </main>
    </div>
  );
}

// --- TYPESCRIPT INTERFACE ---
interface PortfolioSectionProps {
  title: ReactNode;
  items: ReactNode[];
}

// Helper Component met types
function PortfolioSection({ title, items }: PortfolioSectionProps) {
  return (
    // Padding top en bottom iets verkleind voor mobiel
    <section className="flex flex-col pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="w-full mt-15 md:mt-10 mb-8 md:mb-16 z-10 relative">{title}</div>
      <div className="w-full max-w-6xl mx-auto">
        {/* gap-10 is verkleind naar gap-8 op mobiel, blijft gap-16 op desktop */}
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
