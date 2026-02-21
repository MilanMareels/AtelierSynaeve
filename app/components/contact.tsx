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
          confirmButtonColor: "#2563eb",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Fout!",
          text: data.message || "Er ging iets mis.",
          icon: "error",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Fout!",
        text: "Er is een netwerkfout opgetreden.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Neem Contact Op</h2>
          <p className="mt-4 text-gray-600">Heb je een vraag? Stuur ons een bericht.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <input type="hidden" name="subject" value="Nieuw bericht via de website" />
          <input type="hidden" name="from_name" value={companyName} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Naam
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3"
                placeholder="Uw naam"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3"
                placeholder="naam@voorbeeld.nl"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3"
              placeholder="Hoe kunnen we helpen?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition
              ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {loading ? "Even geduld..." : "Verstuur Bericht"}
          </button>
        </form>
      </div>
    </section>
  );
}
