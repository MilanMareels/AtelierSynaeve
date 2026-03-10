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
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full z-9999">
      <div className="bg-white/95 backdrop-blur-sm shadow-2xl border border-gray-200 p-4 md:px-10 md:py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#8B8B99] font-light text-sm md:text-base text-center md:text-left leading-relaxed">
          Wij gebruiken cookies om uw ervaring te verbeteren.{" "}
          <Link href="/privacy" className="text-[#3B458B] underline hover:opacity-70 transition-opacity">
            Meer informatie
          </Link>
          .
        </p>

        <button
          onClick={handleAccept}
          className="border border-gray-800 text-gray-800 uppercase tracking-[0.15em] py-3 px-8 text-xs md:text-sm transition-all duration-300 hover:bg-gray-800 hover:text-[#f4f5f7] whitespace-nowrap syncopate"
        >
          Accepteren
        </button>
      </div>
    </div>
  );
}
