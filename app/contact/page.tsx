"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const contactFormKey = process.env.NEXT_PUBLIC_CONTACT_FORM_KEY!;
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", contactFormKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Succes!",
          text: "E-mail succesvol verzonden!",
          icon: "success",
          confirmButtonColor: "#374151",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Fout!",
          text: data.message || "Er ging iets mis.",
          icon: "error",
          confirmButtonColor: "#374151",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Fout!",
        text: "Er is een netwerkfout opgetreden.",
        icon: "error",
        confirmButtonColor: "#374151",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12">
      <div className="w-full max-w-6xl flex flex-col mt-10 md:mt-0">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl uppercase tracking-[0.15em] text-[#3B458B] mb-4 syncopate drop-shadow-sm text-left">Contact</h2>
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest font-light text-left">Laten we samenwerken</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="flex flex-col space-y-8 font-light tracking-widest uppercase text-sm md:text-base justify-center">
            <div>
              <p className="font-bold syncopate mb-1 tracking-normal text-[#3B458B]">Atelier Synaeve</p>
              <p className="text-gray-400">Michèle Synaeve</p>
            </div>

            <div>
              <p className="text-[#3B458B] mb-1">E-mail</p>
              <a href="mailto:info@ateliersynaeve.be" className="text-gray-400 transition-colors">
                atelier.synaeve@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[#3B458B] mb-1">Telefoon</p>
              <a href="tel:+32479346646" className="text-gray-400 transition-colors">
                +32 479 34 66 46
              </a>
            </div>

            <div>
              <p className="text-[#3B458B] mb-1">Instagram</p>
              <a href="https://instagram.com/atelier_synaeve" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors">
                @atelier_synaeve
              </a>
            </div>

            <div>
              <p className="text-[#3B458B] mb-1">BTW Nummer</p>
              <p className="text-gray-400">BE 1034.095.224</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="w-full space-y-10">
            <input type="hidden" name="subject" value="Nieuw bericht via de website" />
            <input type="hidden" name="from_name" value={companyName} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Naam"
                  className="w-full bg-transparent border-b border-gray-400 py-2 text-gray-800 placeholder-gray-400 font-light focus:outline-none focus:border-gray-800 transition-colors"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="E-mailadres"
                  className="w-full bg-transparent border-b border-gray-400 py-2 text-gray-800 placeholder-gray-400 font-light focus:outline-none focus:border-gray-800 transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefoonnummer (Optioneel)"
                className="w-full bg-transparent border-b border-gray-400 py-2 text-gray-800 placeholder-gray-400 font-light focus:outline-none focus:border-gray-800 transition-colors"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Jouw bericht..."
                className="w-full bg-transparent border-b border-gray-400 py-2 text-gray-800 placeholder-gray-400 font-light focus:outline-none focus:border-gray-800 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex justify-start lg:justify-end pt-4 syncopate">
              <button
                type="submit"
                disabled={loading}
                className={`border border-gray-800 text-gray-800 uppercase tracking-[0.15em] py-3 px-10 text-sm transition-all duration-300
                  ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800 hover:text-[#f4f5f7]"}
                `}
              >
                {loading ? "Verzenden..." : "Verstuur"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
