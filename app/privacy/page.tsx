import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-[#E7EBEF] min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 mt-20">Privacy- en Policy</h1>
        <p className="text-center text-sm text-gray-500 mb-12">Laatst bijgewerkt: 01/01/2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Welke gegevens verzamelen wij?</h2>
            <p className="mb-2">Wanneer u ons contactformulier invult, kunnen wij de volgende gegevens van u ontvangen:</p>
            <ul className="list-disc pl-5 mb-2 space-y-1">
              <li>Uw naam</li>
              <li>Uw e-mailadres</li>
              <li>Uw bericht</li>
            </ul>
            <p className="font-semibold">
              Belangrijk:{" "}
              <span className="font-normal">Wij slaan deze gegevens niet op op onze servers of systemen. Uw gegevens worden uitsluitend gebruikt om uw vraag of verzoek te behandelen.</span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Hoe gebruiken wij uw gegevens?</h2>
            <p className="mb-2">De door u verstrekte gegevens worden alleen gebruikt om:</p>
            <ul className="list-disc pl-5 mb-2 space-y-1">
              <li>Te reageren op uw vraag of verzoek</li>
              <li>Contact met u op te nemen indien nodig</li>
            </ul>
            <p>Wij delen uw gegevens niet met derden, tenzij dit noodzakelijk is om uw vraag te beantwoorden (bijvoorbeeld indien u ons vraagt om contact op te nemen met een externe partner).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Bewaren van gegevens</h2>
            <p>
              Wij bewaren uw persoonsgegevens niet. Zodra uw gegevens via ons contactformulier worden verzonden, worden deze uitsluitend tijdelijk verwerkt om uw vraag te beantwoorden. Daarna
              verwijderen wij de gegevens uit onze inbox en verwerken we deze niet verder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Uw rechten</h2>
            <p className="mb-2">U hebt het recht om:</p>
            <ul className="list-disc pl-5 mb-2 space-y-1">
              <li>Inzage te krijgen in de persoonsgegevens die u hebt verstrekt</li>
              <li>Rectificatie of verwijdering van uw persoonsgegevens te vragen</li>
              <li>Bezwaar te maken tegen het gebruik van uw gegevens</li>
            </ul>
            <p>
              Neem contact met ons op via{" "}
              <a href="mailto:atelier.synaeve@gmail.com" className="text-blue-600 underline">
                atelier.synaeve@gmail.com
              </a>{" "}
              als u gebruik wilt maken van deze rechten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Beveiliging van uw gegevens</h2>
            <p>
              Hoewel wij geen gegevens opslaan, zorgen wij ervoor dat de verzending van gegevens via ons contactformulier veilig verloopt. Onze website maakt gebruik van een beveiligde SSL-verbinding
              om uw gegevens te versleutelen tijdens de verzending.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
            <p>Wij gebruiken geen cookies of vergelijkbare technologieën om persoonsgegevens te verzamelen of te volgen.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Contact</h2>
            <p className="mb-2">Als u vragen heeft over dit privacybeleid of hoe wij omgaan met uw gegevens, neem dan contact op via:</p>
            <p>
              E-mail:{" "}
              <a href="mailto:atelier.synaeve@gmail.com" className="text-blue-600 underline">
                atelier.synaeve@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Wijzigingen aan dit beleid</h2>
            <p>Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. Controleer deze pagina regelmatig om op de hoogte te blijven van eventuele wijzigingen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
