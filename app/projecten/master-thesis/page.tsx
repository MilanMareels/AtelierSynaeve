import BackButton from "@/app/components/backButton";
import Image from "next/image";
import Link from "next/link";

export default async function MasterPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-[#f4f5f7]">
      <main className="relative flex flex-col w-full">
        <section className="relative h-screen w-full overflow-hidden">
          <BackButton />

          <Image src={"/Master-thesis/Master-thesis-Hero.webp"} alt={`Masterproef hero`} fill className="object-cover" priority />

          <div className="absolute inset-0 bg-white/30 z-10 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <div className="w-[90%] max-w-5xl px-6 transform translate-y-10 pointer-events-auto">
              <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl text-[#0b407c] syncopate-bold uppercase text-center">The Grammar of Wear</h1>

              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-md text-center">
                <h2 className="text-lg md:text-xl tracking-tighter text-[#0b407c] syncopate uppercase text-center">Van afgeleefde kunststof naar een nieuwe ornamenttaal</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16 md:py-32 flex justify-center">
          <div className="w-[90%] max-w-6xl px-6">
            <div className="text-lg md:text-2xl leading-relaxed text-[#0b407c] tracking-wide space-y-6">
              <p>
                Plastic is overal. Kijk even rond en de kans is groot dat je meer kunststof ziet dan je op het eerste gezicht denkt. Een raamkader, een lichtschakelaar, de afwerking van een tafel, een
                stoel...
              </p>
              <p>
                We gebruiken het elke dag, maar besteden er nauwelijks aandacht aan. Tot het begint te verouderen. Een kras, een verkleuring of een beschadigde rand en plots ziet datzelfde materiaal
                er versleten uit. Het object heeft zijn beste tijd gehad en mag weg.
              </p>
              <h2 className="mt-4 mb-4 font-bold">Maar wat als net die slijtage interessant wordt?</h2>
              <p>
                Voor mijn masterproef draaide ik die gedachte om. Ik ging op zoek naar wat afgeleefd kunststof net interessant kan maken. Niet door het materiaal te recycleren of de schade te
                herstellen, maar door gebruik en veroudering zelf als ontwerpmateriaal te gebruiken.
              </p>
              <p className="mb-6">Het resultaat werd The Grammar of Wear: een nieuwe ornamenttaal die ontstaat uit slijtage- en gebruikssporen van kunststof in het interieur.</p>
              <div className="w-full flex justify-end mb-8 md:mb-12 px-4 md:px-12 relative z-40">
                <Link
                  href="/Master-thesis/masterproef.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b407c] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 group"
                >
                  Lees de volledige masterproef <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&rarr;</span>
                </Link>
              </div>
              <img src="/Master-thesis/master-thesis-1.webp" alt="" />
              <h2 className="mt-4 mb-4 font-bold">The Grammar of Wear</h2>
              <p>
                Krassen, verkleuringen, materiaaloverdracht of loskomende lagen lijken misschien willekeurig. Maar als je beter kijkt, vertellen ze iets. Over hoe iets wordt aangeraakt, hoe het wordt
                gebruikt en hoe het doorheen de tijd verandert.
              </p>
              <p>
                Net die sporen vormen het vertrekpunt van The Grammar of Wear. Ik maakte de sporen los van het object waarop ze waren ontstaan en begon ermee te ontwerpen. Een kras werd een lijn, een
                beschadiging een vorm en uit die vormen ontstonden nieuwe patronen en ornamenten.
              </p>
              <p>
                Daarbij liet ik me leiden door Owen Jones' The Grammar of Ornament. Zijn ideeën over verhouding, geometrie, herhaling, harmonie en kleur hielpen me om de oorspronkelijke sporen verder
                te vormen, zonder hun eigenheid te verliezen.
              </p>
              <p className="mb-6">Zo werd slijtage, iets wat we normaal liever wegwerken, het vertrekpunt voor een nieuwe ornamenttaal voor het interieur.</p>
              <div className="w-full flex justify-end mb-8 md:mb-12 px-4 md:px-12 relative z-40">
                <Link
                  href="/Master-thesis/tekeningenbundel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b407c] text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-3 group"
                >
                  Bekijk de volledige tekeningenbundel <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg md:text-xl leading-none">&rarr;</span>
                </Link>
              </div>
              <img src="/Master-thesis/master-thesis-2.webp" alt="" />
              <h2 className="mt-4 mb-4 font-bold">Van ornament naar interieur</h2>
              <p>
                Vanuit de verschillende slijtagesporen ontstond langzaam een hele verzameling patronen en ornamenten. Maar ik wilde ze niet alleen op papier laten bestaan. Ik wilde zien wat er zou
                gebeuren wanneer ze deel werden van een interieur.
              </p>
              <p>
                Zo vonden de patronen hun weg naar textiel, tegels en wandbekleding, maar ook naar reliëfs, meubels en kleinere details. Wat begon als een spoor op een alledaags kunststofobject, kreeg
                steeds opnieuw een andere vorm, schaal en materialiteit.
              </p>
              <ImageGrid />
              <p>
                In het diorama bracht ik al die toepassingen samen. Het interieur is bewust uitbundig. Patronen lopen in elkaar over, kleuren ontmoeten elkaar en ornament duikt op waar het maar kan.
                Niet om te tonen hoe een interieur eruit moet zien, maar om te ontdekken hoe ver deze nieuwe ornamenttaal kan groeien.
              </p>
              <img src="/Master-thesis/master-thesis-7.webp" alt="" />
              <p>Zo eindigt het verhaal waar het begon: bij de sporen die we meestal liever niet zien. Alleen worden ze hier niet langer gelezen als het einde van een materiaal.</p>
              <p>Ze worden het begin van iets nieuws. Slijtage wordt ornament.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full mx-auto">
      <div className="relative aspect-3/4 overflow-hidden">
        <Image src="/Master-thesis/master-thesis-3.webp" alt="Master thesis 3" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>

      <div className="relative aspect-3/4 overflow-hidden">
        <Image src="/Master-thesis/master-thesis-4.webp" alt="Master thesis 4" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>

      <div className="relative aspect-3/4 overflow-hidden">
        <Image src="/Master-thesis/master-thesis-5.webp" alt="Master thesis 5" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>

      <div className="relative aspect-3/4 overflow-hidden">
        <Image src="/Master-thesis/master-thesis-6.webp" alt="Master thesis 6" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>
    </div>
  );
}
