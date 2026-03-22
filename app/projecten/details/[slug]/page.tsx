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

  const heroImage = project.extraImages[0];
  const galleryImages = project.extraImages.slice(1);

  return (
    <div className="min-h-screen font-sans antialiased bg-[#f4f5f7]">
      <main className="relative flex flex-col w-full">
        {/* Hero Sectie */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image src={heroImage} alt={`${project.title} hero`} fill className="object-cover" priority />

          <div className="absolute inset-0 bg-white/30 z-10 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <div className="w-[90%] max-w-5xl px-6 transform translate-y-10 pointer-events-auto">
              <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl text-[#0b407c] syncopate-bold uppercase text-center">{project.title}</h1>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-md text-center">
                <span className="text-[#0b407c]">{project.category}</span>
                <span className="hidden md:block w-1.5 h-1.5 bg-[#0b407c] rounded-full shrink-0" />
                <span className="text-[#0b407c]">Atelier Synaeve</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16 md:py-32 flex justify-center">
          <div className="w-[90%] max-w-6xl px-6">
            <div className="text-lg md:text-2xl leading-relaxed text-[#0b407c] tracking-wide space-y-6">
              {project.description.split("\n").map((paragraph, index) => {
                if (paragraph.trim() === "") return null;

                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>
        </section>

        {/* Galerij Sectie */}
        <section className="w-full bg-white">
          <div className="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:gap-12 md:p-12">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden">
                <Image src={img} alt={`${project.title} galerij ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
