"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.split("; ").some((row) => row.startsWith("cookieConsent="));

    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "cookieConsent=true; path=/; max-age=604800; SameSite=Lax";

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-50 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-700 text-sm md:text-base text-center md:text-left">
          Wij gebruiken cookies om uw ervaring te verbeteren.{" "}
          <Link href="/privacy" className="underline text-blue-600 hover:text-blue-800">
            Meer informatie.
          </Link>
        </p>

        <button onClick={handleAccept} className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-700 transition">
          Accepteren
        </button>
      </div>
    </div>
  );
}
