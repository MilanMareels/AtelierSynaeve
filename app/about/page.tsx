import Image from "next/image";

const About = () => {
  return (
    <section className="px-8 md:px-24 lg:px-48 pt-40 md:pt-48 pb-20 font-sans bg-[#E7EBEF] min-h-screen flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
        <div className="w-full lg:w-1/2">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.25em] text-[#3B3B6D] uppercase mb-4">Over</h1>
            <h2 className="text-xs md:text-sm font-light tracking-widest text-[#A0A0B0] uppercase">Michèle Synaeve</h2>
          </div>

          <div className="space-y-6 text-[#8B8B99] leading-relaxed font-light text-sm md:text-base">
            <p>
              Ik ben <strong className="font-normal text-[#3B3B6D]">Michèle Synaeve</strong>, masterstudent Interieurarchitectuur aan KU Leuven (campus Gent).
            </p>

            <p>
              Van jongs af aan ben ik creatief bezig: tekenen, upcycling en het maken van uiteenlopende objecten. Vandaag zet ik die drang om te creëren bewust in binnen een professionele context.
            </p>

            <p>
              Mijn werk beweegt tussen meubilair, kunstobjecten en grafisch werk, waar ontwerp en uitvoering in elkaar overvloeien. Vanuit jouw vraag ontwikkel ik eerst een doordacht concept, dat
              vervolgens wordt vertaald naar een tastbaar en zorgvuldig uitgewerkt resultaat.
            </p>

            <p>
              Duurzaamheid en hergebruik vormen daarbij geen toevoeging achteraf, maar zijn volwaardige ontwerpparameters. Ik werk graag aan vraagstukken die nog open liggen: ideeën die onderzocht,
              getest en verfijnd moeten worden tot ze hun juiste vorm vinden.
            </p>

            <h2 className="text-xs md:text-sm font-light tracking-widest text-[#3B3B6D] uppercase mt-12 mb-4">Diensten</h2>

            <p>
              Voor maatwerk, een helder ontwerp en een betrokken ontwerpproces ben je hier aan het juiste adres. Heb je een vraag, een idee of een project dat nog vorm moet krijgen, neem dan gerust
              contact op.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-3/4 lg:mt-8">
            <Image
              src="/Jouw-Foto-Pad-Hier.webp" // Vul hier de naam van jouw foto in (bijv. in de public map)
              alt="Portret van Michèle Synaeve"
              fill
              className="object-cover rounded-sm shadow-md"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
