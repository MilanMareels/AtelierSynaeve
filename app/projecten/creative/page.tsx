import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react"; // Toegevoegd voor TypeScript

export default function CreativePage() {
  const creativeProjects = [
    // Rij 1: h-[250px] verkleind naar h-[150px] voor mobiel
    <div key="1" className="relative w-full h-[150px] md:h-[350px] flex justify-center items-center">
      <Link href="/projecten/deseri-3" className="relative w-[95%] md:w-[80%] h-full block hover:scale-105 transition-transform duration-500 z-10">
        <Image src="/Deseri/Deseri-3.webp" alt="Deseri 3 project" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    // Rij 2: Container verkleind van h-[350px] naar h-[200px]
    <div key="2" className="relative w-full h-[200px] md:h-[450px]">
      {/* top-10 naar top-4, h-52 naar h-32 voor mobiel */}
      <Link href="/projecten/deseri" className="absolute top-4 md:top-10 left-0 md:left-10 w-[60%] md:w-[50%] h-32 md:h-72 z-10 block hover:scale-105 transition-transform duration-500">
        <Image src="/Deseri/Deseri-1.webp" alt="Deseri project" fill className="object-contain" loading="lazy" />
      </Link>
      {/* h-64 naar h-44 voor mobiel */}
      <Link href="/projecten/deseri-2" className="absolute top-0 right-0 md:right-10 w-[45%] md:w-[35%] h-44 md:h-80 z-20 block hover:scale-105 transition-transform duration-500 rotate-90">
        <Image src="/Deseri/Deseri-2.webp" alt="Deseri 2 project" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    // Rij 3: Container h-[350px] naar h-[180px] voor mobiel
    <div key="3" className="relative w-full h-[180px] md:h-[500px] flex justify-center items-center">
      <Link href="/projecten/sutured-nature-2" className="relative w-full md:w-[85%] h-full block hover:scale-105 transition-transform duration-500 z-10">
        <Image src="/Sutered-nature/Sutured-nature-2.webp" alt="Sutured nature 2 project" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,

    // Rij 4: Container h-[400px] naar h-[250px] voor mobiel
    <div key="4" className="relative w-full h-[250px] md:h-[550px]">
      {/* bottom-10 naar bottom-4, h-64 naar h-40 voor mobiel */}
      <Link
        href="/projecten/sutured-nature"
        className="absolute bottom-4 md:bottom-10 left-4 md:left-24 w-[30%] md:w-[20%] h-40 md:h-96 z-10 block hover:scale-105 transition-transform duration-500 flex justify-center"
      >
        <Image src="/Sutered-nature/Sutured-nature-1.webp" alt="Sutured nature project" fill className="object-contain" loading="lazy" />
      </Link>
      {/* h-80 naar h-56 voor mobiel */}
      <Link href="/projecten/sutured-nature-3" className="absolute bottom-0 right-4 md:right-20 w-[60%] md:w-[45%] h-56 md:h-[500px] z-20 block hover:scale-105 transition-transform duration-500">
        <Image src="/Sutered-nature/Sutured-nature-3.webp" alt="Sutured nature 3 project" fill className="object-contain" loading="lazy" />
      </Link>
    </div>,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="flex-grow">
        <PortfolioSection title={<h2 className="text-[#3B458B] text-4xl font-black uppercase tracking-wider drop-shadow-sm">Artistiek Werk</h2>} items={creativeProjects} />
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
    // Paddings boven en onder iets strakker gezet voor mobiel
    <section className="flex flex-col pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="w-full mt-15 md:mt-10 mb-6 md:mb-10 z-10 relative text-left md:text-left ">{title}</div>
      <div className="w-full max-w-6xl mx-auto">
        {/* gap-16 verkleind naar gap-8 op mobiel (blijft gap-24 op grote schermen) */}
        <div className="flex flex-col gap-8 md:gap-24 w-full">
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
