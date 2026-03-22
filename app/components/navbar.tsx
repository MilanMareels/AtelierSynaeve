"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "/" },
  {
    name: "PROJECTEN",
    subLinks: [
      { name: "MEUBEL", href: "/projecten/furniture" },
      { name: "ARTISTIEK", href: "/projecten/creative" },
      { name: "GRAFISCH", href: "/projecten/graphic" },
    ],
  },
  { name: "OVER", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setIsProjectsOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-70 flex justify-between items-center px-6 md:px-12 py-8 bg-transparent pointer-events-none">
        {pathname !== "/" ? (
          <Link href="/" className="pointer-events-auto" onClick={() => setIsOpen(false)}>
            <Image src="/Logo/logo.webp" alt="Atelier Synaeve Logo" width={90} height={90} className="object-contain" priority />
          </Link>
        ) : (
          <div></div>
        )}

        <div onClick={() => setIsOpen(!isOpen)} className="pointer-events-auto cursor-pointer flex flex-col justify-center items-center w-8 h-8 gap-2.5 hover:opacity-80 transition-opacity">
          <span className={`block w-8 h-0.5 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "bg-white rotate-45 translate-y-3" : "bg-[#3B458B]"}`}></span>
          <span className={`block w-8 h-0.5 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "bg-white opacity-0" : "bg-[#3B458B] opacity-100"}`}></span>
          <span className={`block w-8 h-0.5 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "bg-white -rotate-45 -translate-y-3" : "bg-[#3B458B]"}`}></span>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#3B458B] backdrop-blur-sm z-60 flex flex-col justify-center items-center overflow-y-auto transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 md:gap-10 py-20">
          {navLinks.map((link, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${isOpen ? index * 100 + 200 : 0}ms` }}
              className={`transform transition-all duration-700 ease-out flex flex-col items-center ${isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="group relative flex items-center gap-3 text-white text-4xl md:text-5xl tracking-wide hover:text-orange-300 transition-colors syncopate focus:outline-none"
                  >
                    {link.name}
                    <span className={`text-2xl transition-transform duration-300 ${isProjectsOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
                  </button>

                  <div
                    className={`flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
                      isProjectsOpen ? "max-h-64 opacity-100 mt-6 gap-5" : "max-h-0 opacity-0 mt-0 gap-0"
                    }`}
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsProjectsOpen(false);
                        }}
                        className="text-white/80 text-xl md:text-2xl tracking-widest hover:text-orange-300 transition-colors syncopate"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                  className="group relative inline-block text-white text-4xl md:text-5xl tracking-wide hover:text-orange-300 transition-colors syncopate"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
