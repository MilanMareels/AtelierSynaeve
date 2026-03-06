import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function FurniturePage() {
  const furnitureProjects = [
    <div key="1" className="flex flex-col items-center gap-2 md:gap-12 w-full">
      <Link href="/projecten/details/tessera" className="relative w-[95%] md:w-[85%] h-37.5 md:h-87.5 block hover:scale-105 transition-transform duration-500">
        <Image src="/Tessera/Tessera-1.webp" alt="Tessera" fill className="object-contain" loading="lazy" />
      </Link>
      <div className="flex w-full justify-between items-center px-4 md:px-12 h-30 md:h-87.5">
        <Link href="/projecten/details/tessera" className="relative w-[45%] md:w-[55%] h-[60%] md:h-[80%] block hover:scale-105 transition-transform duration-500">
          <Image src="/Tessera/Tessera-2.webp" alt="Tessera 4" fill className="object-contain" loading="lazy" />
        </Link>
        <Link href="/projecten/details/tessera" className="relative w-[45%] md:w-[55%] h-full block hover:scale-105 transition-transform duration-500 md:top-30">
          <Image src="/Tessera/Tessera-3.webp" alt="Tessera 2" fill className="object-contain" loading="lazy" />
        </Link>
      </div>
    </div>,

    <div key="2" className="relative w-full h-80 md:h-200 mt-4 md:mt-10">
      <Link
        href="/projecten/details/textile-usion-3"
        className="absolute top-[0%] md:top-[-10%] left-[5%] md:left-[15%] w-[40%] md:w-[35%] h-25 md:h-62.5 block hover:scale-105 transition-transform duration-500 z-10"
      >
        <Image src="/Textile-usion/Textile-usion-3.webp" alt="Textile usion 3" fill className="object-contain" loading="lazy" />
      </Link>
      <Link
        href="/projecten/details/textile-usion-2"
        className="absolute top-[15%] right-[0%] md:right-[5%] w-[55%] md:w-[45%] h-45 md:h-112.5 block hover:scale-105 transition-transform duration-500 z-20"
      >
        <Image src="/Textile-usion/Textile-usion-2.webp" alt="Textile usion 2" fill className="object-contain" loading="lazy" />
      </Link>
      <Link
        href="/projecten/details/textile-usion"
        className="absolute bottom-[-5%] left-[10%] md:left-[15%] w-[37%] md:w-[35%] h-37.5 md:h-137.5 block hover:scale-105 transition-transform duration-500 z-30"
      >
        <Image src="/Textile-usion/Textile-usion-1.webp" alt="Textile usion" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    <div key="3" className="flex w-full justify-between items-end h-30 md:h-87.5 px-4 md:px-20 mt-4 md:mt-10">
      <Link href="/projecten/details/organisch-hout" className="relative w-[65%] md:w-[65%] h-full block hover:scale-105 transition-transform duration-500">
        <Image src="/Organisch-hout/Organisch-hout-1.webp" alt="Organisch hout" fill className="object-contain" loading="lazy" />
      </Link>
      <Link href="/projecten/organisch-hout-2" className="relative md:ml-20 w-[55%] md:w-[55%] h-[80%] md:h-[90%] block hover:scale-105 transition-transform duration-500 mb-4 rotate-90">
        <Image src="/Organisch-hout/Organisch-hout-2.webp" alt="Organisch hout 2" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    <div key="4" className="w-full flex justify-center mt-8 md:mt-20">
      <Link href="/projecten/details/organisch-hout-3" className="relative w-screen max-w-300 h-55 md:h-200 block hover:scale-105 transition-transform duration-500">
        <Image src="/Organisch-hout/Organisch-hout-3.webp" alt="Organisch hout 3" fill className="object-contain md:object-cover" loading="lazy" />
      </Link>
    </div>,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] text-[#2D3142] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="grow">
        <PortfolioSection title={<h2 className="text-[#0b407c] text-4xl font-black uppercase drop-shadow-md text-left md:text-left">Meubel</h2>} items={furnitureProjects} />
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
      <div className="w-full mt-15 md:mt-10 mb-8 md:mb-16 z-10 relative syncopate-bold tracking-tight">{title}</div>
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
