"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/projecten/details/")) {
    return (
      <footer className="bottom-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center py-8 text-[10px] uppercase tracking-widest text-[#3B458B] bg-transparent p-8 syncopate">
        <a href="https://www.instagram.com/atelier_synaeve/" target="_blank" className="hover:underline">
          Instagram
        </a>
        <div className="flex flex-col">
          <p className="my-4 md:my-0 text-center">&copy; {new Date().getFullYear()} Atelier Synaeve.</p>
          <a href="https://www.lannie.be" target="_blank" rel="noreferrer">
            <p className="my-4 md:my-0 text-center">Ontwikkeld door Lannie</p>
          </a>
        </div>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </footer>
    );
  }
  if (pathname === "/")
    return (
      <footer className="fixed bottom-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center py-8 text-[10px] uppercase tracking-widest text-white bg-transparent p-8 syncopate">
        <a href="https://www.instagram.com/atelier_synaeve/" target="_blank" className="hover:underline">
          Instagram
        </a>
        <div className="flex flex-col">
          <p className="my-4 md:my-0 text-center">&copy; {new Date().getFullYear()} Atelier Synaeve.</p>
          <a href="https://www.lannie.be" target="_blank" rel="noreferrer">
            <p className="my-4 md:my-0 text-center">Ontwikkeld door Lannie</p>
          </a>
        </div>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </footer>
    );
  return (
    <footer className="bottom-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center py-8 text-[10px] uppercase tracking-widest text-[#3B458B] bg-[#E7EBEF] p-8 syncopate">
      <a href="https://www.instagram.com/atelier_synaeve/" target="_blank" className="hover:underline">
        Instagram
      </a>
      <div className="flex flex-col">
        <p className="my-4 md:my-0 text-center">&copy; {new Date().getFullYear()} Atelier Synaeve.</p>
        <a href="https://www.lannie.be" target="_blank" rel="noreferrer">
          <p className="my-4 md:my-0 text-center">Ontwikkeld door Lannie</p>
        </a>
      </div>
      <a href="/privacy" className="hover:underline">
        Privacy Policy
      </a>
    </footer>
  );
}
