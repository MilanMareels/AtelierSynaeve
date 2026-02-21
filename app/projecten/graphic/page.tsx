import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react"; // Importeer ReactNode voor TypeScript

export default function GraphicPage() {
  const graphicItems = [
    { src: "/Graphic/Graphic-Lannie.webp", alt: "Graphic Lannie", href: "/projecten/details/graphic-lannie" },
    { src: "/Graphic/Graphic-Propellor.webp", alt: "Graphic Propellor", href: "/projecten/details/graphic-propellor" },
    { src: "/Graphic/Graphic-Rhino-1.webp", alt: "Graphic Rhino", href: "/projecten/details/graphic-rhino" },
    { src: "/Graphic/Graphic-Rhino-2.webp", alt: "Graphic Rhino 2", href: "/projecten/details/graphic-rhino-2" },
  ];

  const graphicProjects = graphicItems.map((item, i) => {
    return (
      <div key={i} className="flex justify-center w-full">
        {/* w-[60%] naar w-[90%] op mobiel voor betere zichtbaarheid */}
        {/* h-[400px] verkleind naar h-[250px] op mobiel */}
        <Link href={item.href} className="relative w-[90%] md:w-[70%] h-[250px] md:h-[700px] block hover:scale-105 transition-transform duration-500">
          <Image src={item.src} alt={item.alt} fill className="object-contain" loading="lazy" />
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="flex-grow">
        <PortfolioSection title={<h2 className="text-[#3B458B] text-4xl font-black uppercase tracking-wider drop-shadow-md">Graphic</h2>} items={graphicProjects} />
      </main>
    </div>
  );
}

// --- TYPESCRIPT INTERFACE ---
// Dit vertelt TS precies wat er de component in mag
interface PortfolioSectionProps {
  title: ReactNode;
  items: ReactNode[];
}

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
