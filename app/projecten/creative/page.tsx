import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function CreativePage() {
  const creativeProjects = [
    <div key="1" className="w-full flex flex-col mb-16 md:mb-24">
      <div className="w-full flex justify-end mb-8 md:mb-12 px-4 md:px-12 relative z-40">
        <Link
          href="/projecten/details/collectief-landschap"
          className="text-[#3B458B] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 group"
        >
          Bekijk project <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-col gap-8 md:gap-24 w-full">
        <div className="relative w-full h-37.5 md:h-87.5 flex justify-center items-center">
          <Link href="/projecten/details/collectief-landschap" className="relative w-[95%] md:w-[80%] h-full block hover:scale-105 transition-transform duration-500 z-10">
            <Image src="/Deseri/Deseri-3.webp" alt="Deseri 3 project" fill className="object-contain" loading="lazy" />
          </Link>
        </div>
        <div className="relative w-full h-50 md:h-112.5">
          <Link
            href="/projecten/details/collectief-landschap"
            className="absolute top-4 md:top-10 left-0 md:left-10 w-[60%] md:w-[50%] h-32 md:h-72 z-10 block hover:scale-105 transition-transform duration-500"
          >
            <Image src="/Deseri/Deseri-1.webp" alt="Deseri project" fill className="object-contain" loading="lazy" />
          </Link>
          <Link
            href="/projecten/details/collectief-landschap"
            className="absolute top-0 right-0 md:right-10 w-[45%] md:w-[35%] h-44 md:h-80 z-20 block hover:scale-105 transition-transform duration-500 rotate-90"
          >
            <Image src="/Deseri/Deseri-2.webp" alt="Deseri 2 project" fill className="object-contain" loading="lazy" />
          </Link>
        </div>
      </div>
    </div>,

    <div key="2" className="w-full flex flex-col mb-16 md:mb-24">
      <div className="w-full flex justify-end mb-8 md:mb-12 px-4 md:px-12 relative z-40">
        <Link
          href="/projecten/details/sutured-nature"
          className="text-[#3B458B] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 group"
        >
          Bekijk project <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-col gap-8 md:gap-24 w-full">
        <div className="relative w-full h-45 md:h-125 flex justify-center items-center">
          <Link href="/projecten/details/sutured-nature" className="relative w-full md:w-[85%] h-full block hover:scale-105 transition-transform duration-500 z-10">
            <Image src="/Sutured-nature/Sutured-nature-2.webp" alt="Sutured nature 2 project" fill className="object-contain" loading="lazy" />
          </Link>
        </div>
        <div className="relative w-full h-62.5 md:h-137.5">
          <Link
            href="/projecten/details/sutured-nature"
            className="absolute bottom-4 md:bottom-10 left-4 md:left-24 w-[30%] md:w-[20%] h-40 md:h-96 z-10 block hover:scale-105 transition-transform duration-500 justify-center"
          >
            <Image src="/Sutured-nature/Sutured-nature-1.webp" alt="Sutured nature project" fill className="object-contain" loading="lazy" />
          </Link>
          <Link
            href="/projecten/details/sutured-nature"
            className="absolute bottom-0 right-4 md:right-20 w-[60%] md:w-[45%] h-56 md:h-125 z-20 block hover:scale-105 transition-transform duration-500"
          >
            <Image src="/Sutured-nature/Sutured-nature-3.webp" alt="Sutured nature 3 project" fill className="object-contain" loading="lazy" />
          </Link>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#E7EBEF] font-sans px-6 md:px-12 overflow-x-hidden">
      <main className="grow">
        <PortfolioSection
          title={
            <div className="flex flex-col gap-4">
              <h2 className="text-[#3B458B] text-4xl font-black uppercase tracking-wider drop-shadow-sm">Artistiek</h2>
              <Link href="/" className="text-[#3B458B] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 w-fit group">
                <span className="group-hover:-translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&larr;</span> Home
              </Link>
            </div>
          }
          items={creativeProjects}
        />
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
      <div className="w-full mt-15 md:mt-10 mb-6 md:mb-10 z-10 relative text-left md:text-left ">{title}</div>
      <div className="w-full max-w-6xl mx-auto">
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
