"use client";

import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME!;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-8 text-[10px] uppercase tracking-widest text-[#1A2A5E]/70 border-t border-gray-300/30 p-8">
      <a href="#" className="hover:underline">
        Instagram
      </a>
      <a href="https://www.lannie.be" target="_blank">
        <p className="my-4 md:my-0 text-center">© 2026 Atelier Synaeve. Ontworpen en ontwikkeld door Lannie</p>
      </a>
      <a href="/privacy" className="hover:underline">
        Privacy Policy
      </a>
    </footer>
  );
}
