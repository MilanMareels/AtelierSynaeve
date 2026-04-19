import Image from "next/image";

const About = () => {
  return (
    <section className="px-8 md:px-24 lg:px-48 pt-40 md:pt-48 pb-20 font-sans bg-[#E7EBEF] min-h-screen flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.25em] text-[#3B3B6D] uppercase mb-4">Over</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-center">
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 text-[#3B3B6D] leading-relaxed font-light text-sm md:text-base">
              <p>
                Ik ben <strong className="text-[#DAA0BF]">Michèle Synaeve</strong>, masterstudent Interieurarchitectuur aan KU Leuven (campus Gent).
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

              <div className="block lg:hidden relative w-full max-w-md mx-auto aspect-3/4 mt-12 mb-4">
                <Image src="/About/profiel-foto.webp" alt="Portret van Michèle Synaeve" fill className="object-cover rounded-sm shadow-md" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>

              <h2 className="text-sm md:text-xl font-light tracking-widest text-[#3B3B6D] uppercase mt-12 mb-4">Diensten</h2>

              <p>
                Voor maatwerk, een helder ontwerp en een betrokken ontwerpproces ben je hier aan het juiste adres. Heb je een vraag, een idee of een project dat nog vorm moet krijgen, neem dan gerust
                contact op.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="relative w-full max-w-md aspect-3/4">
              <Image src="/About/profiel-foto.webp" alt="Portret van Michèle Synaeve" fill className="object-cover rounded-sm shadow-md" sizes="(min-width: 1024px) 50vw, 100vw" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
