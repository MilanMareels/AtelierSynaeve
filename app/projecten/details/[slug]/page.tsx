import projectsData from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) notFound();

  const allImages = project.extraImages;

  return (
    <div className="bg-[#E7EBEF] min-h-screen font-sans antialiased">
      <main className="relative">
        {allImages.map((img, index) => (
          <section key={index} className="h-screen w-full sticky top-0 overflow-hidden scroll-smooth" style={{ zIndex: index + 1 }}>
            <Image src={img} alt={`${project.title} ${index}`} fill className="object-cover" priority={index === 0} />

            <div className="absolute inset-0 bg-blue-500/20 z-10" />

            {index === 0 && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-[90%] max-w-5xl text-white px-6 transform translate-y-10">
                  <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl">{project.title}</h1>
                  <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-[0.3em] mb-8">
                    <span>{project.category}</span>
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>Atelier Synaeve</span>
                  </div>
                  <p className="text-lg md:text-xl max-w-xl opacity-90 leading-relaxed drop-shadow-lg">{project.description}</p>
                </div>
              </div>
            )}

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent opacity-50 z-30" />
          </section>
        ))}

        {/* 3. FOOTER */}
        {/*
          <section className="relative h-[60vh] bg-[#1A2A5E] flex flex-col items-center justify-center text-white text-center px-6" style={{ zIndex: allImages.length + 1 }}>
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">Interesse in een project?</h3>
          <Link
            href="/contact"
            className="group relative border-2 border-white px-12 py-5 rounded-full font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-[#1A2A5E]"
          >
            <span className="relative z-10">Neem Contact Op</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </section>
        */}
      </main>
    </div>
  );
}
